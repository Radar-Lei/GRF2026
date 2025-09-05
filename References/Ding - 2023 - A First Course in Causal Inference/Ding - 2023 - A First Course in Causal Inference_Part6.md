# Part III
## Observational studies![[_resources/Ding - 2023 - A First Course in Causal Inference_Part6/f15dfdd68c73c427c3e91723074ee46d_MD5.jpg]]

![[_resources/Ding - 2023 - A First Course in Causal Inference_Part6/53bf3a2f1ac05fd81a607a55c960dae6_MD5.jpg]]10

Observational Studies, Selection Bias, and
Nonparametric Identification of Causal
Effects

Cochran (1965) summarized two common characteristics of observational
studies:

1. the objective is to elucidate cause-and-effect relationships;
2. it is not feasible to use controlled experimentation.

The first characteristic is identical to that of randomized experiments discussed in Part II of this book, but the second differs fundamentally from randomized experiments.

Dorn (1953) suggested that the planner of an observational study should
always ask the following question:

How would the study be conducted if it were possible to do it by controlled experimentation?

It is always helpful to follow Dorn (1953)'s suggestion because the potential
outcomes framework has an intrinsic link to an experiment, either a real exper-
iment or a thought experiment. Part III of this book will discuss causal infer-
ence with observational studies. It will clarify the fundamental differences be-
tween observational studies and randomized experiments. Nevertheless, many
ideas of causal inference with observational studies are deeply connected to
those with randomized experiments.

10.1 Motivating Examples

**Example 10.1 (job training program)** LaLonde (1986) was interested in the causal effect of a job training program on earnings. He compared the results based on a randomized experiment to the results based on observational studies. We have used the experimental data before, which is the *lalonde* dataset in the *Matching* package. We have also used an observational counterpart cps1re74.csv in Chapter 1.2.1 and Problem 1.4. LaLonde (1986) found thatmany traditional statistical or econometric methods for observational studies gave quite different estimates compared with the estimates based on the experimental data. Dehejia and Wahba (1999) re-analyzed the data using methods motivated by causal inference, and found that those methods can recover the experimental gold standard well. Since then, this has become a canonical example in causal inference with observational studies.

**Example 10.2 (smoking and homocysteine)** Bazzano et al. (2003) compared the homocysteine¹ levels in daily smokers and non-smokers based on the data from the National Health and Nutrition Examination Survey (NHANES) 2005–2006. Rosenbaum (2018) documented the data as homocyst in the package *senstrat*. The dataset has the following important covariates:

```
female      1=female, 0=male
age3       three age categories: 20-39, 40-50, ≥60
ed3        three education categories: < high school, high school, some college
bmi3       three BMI categories: <30, [30, 35), ≥ 35
pov2       TRUE=income at least twice the poverty level, FALSE otherwise
```

**Example 10.3 (school meal program and body mass index)** Chan et al. (2016) used a subsample of the data from NHANES 2007–2008 to study whether participation in school meal programs led to an increase in BMI for school children. They documented the data as *nhanes_bmi* in the package *ATE*. The dataset has the following important covariates:

```
age          Age
ChildSex     Sex (1: male, 0: female)
black        Race (1: black, 0: otherwise)
mexam        Race (1: Hispanic: 0 otherwise)
pir200_PLUS Family above 200% of the federal poverty level
WIC          Participation in the special supplemental nutrition program
Food_Stamp  Participation in food stamp program
fsdchbi      Childhood food security
AnyIns      Any insurance
RefSex       Sex of the adult respondent (1: male, 0: female)
RefAge       Age of the adult respondent
```

A common feature of Examples 10.1–10.3 is that we are interested in estimating the causal effect of a nonrandomized treatment on an outcome. They are all from observational studies.

¹Homocysteine is a type of amino acid. A high level of homocysteine in the blood is regarded as a marker of cardiovascular disease.10.2 Causal effects and selection bias under the potential outcomes framework

For unit i (i = 1, ..., n), we have pretreatment covariates Xᵢ, a binary treat-
ment indicator Zᵢ, and an observed outcome Yᵢ with two potential outcomes
Yᵢ(1) and Yᵢ(0) under the treatment and control, respectively. For simplicity,
we assume

$$
\{X_i, Z_i, Y_i(1), Y_i(0)\}_{i=1}^{n} \stackrel{\text{IID}}{\sim} \{X, Z, Y(1), Y(0)\}.
$$

So we can drop the subscript *i* for quantities of this population. The causal
effects of interest are the average causal effect

$$
\tau = E\{Y(1) - Y(0)\},
$$

the average causal effect on the treated units

$$
\tau_T = E\{Y(1) - Y(0) \mid Z = 1\},
$$

and the average causal effect on the control units:

$$
\tau_C = E\{Y(1) - Y(0) \mid Z = 0\}.
$$

By the linearity of the expectation, we have

$$
\begin{align*}
\tau_T &= E\{Y(1) | Z = 1\} - E\{Y(0) | Z = 1\} \\
&= E(Y | Z = 1) - E\{Y(0) | Z = 1\}
\end{align*}
$$

and

$$
\tau_C = E\{Y(1) | Z = 0\} - E\{Y(0) | Z = 0\} \\
= E\{Y(1) | Z = 0\} - E(Y | Z = 0).
$$

In the above two formulas of τT and τC, the quantities E(Y | Z = 1) and
E(Y | Z = 0) are directly estimable from the data, but the quantities E{Y(0) |  
Z = 1} and E{Y(1) | Z = 0} are not. The latter two are *counterfactuals*  
because they are the means of the potential outcomes corresponding to the  
treatment level that is the opposite of the actual received treatment.

The simple difference in means, also known as the *prima facie*² causal
effect,

$$
\begin{align*}
\tau_{\text{PF}} &= E(Y | Z = 1) - E(Y | Z = 0) \\
&= E\{Y(1) | Z = 1\} - E\{Y(0) | Z = 0\}
\end{align*}
$$

<sup>2</sup>It is a Latin phrase, which means “based on the first impression” or “accepted as correct until proved otherwise.” Holland (1986) used this phrase.is generally biased for the causal effects defined above. For example,

$$
\tau_{\text{PF}} - \tau_{\text{T}} = E\{Y(0) | Z = 1\} - E\{Y(0) | Z = 0\}
$$

and

$$
\tau_{\text{PF}} - \tau_{\text{C}} = E\{Y(1) | Z = 1\} - E\{Y(1) | Z = 0\}
$$

are not zero in general, and they quantify the selection bias. They measure the differences in the means of the potential outcomes across the treatment and control groups.

Why is randomization so important? Rubin (1978) first used potential outcomes to quantify the benefit of randomization. We have used the fact in Chapter 9 that

$$
Z \perp \{Y(1), Y(0)\} \qquad (10.1)
$$

in the CRE, which implies that the selection bias terms are both zero:

$$
\tau_{\text{PF}} - \tau_{\text{T}} = E\{Y(0) | Z = 1\} - E\{Y(0) | Z = 0\} = 0
$$

and

$$
\tau_{\text{PF}} - \tau_{\text{C}} = E\{Y(1) | Z = 1\} - E\{Y(1) | Z = 0\} = 0.
$$

So under the CRE in (10.1), we have

$$
\tau = \tau_{\text{T}} = \tau_{\text{C}} = \tau_{\text{PF}}. \qquad (10.2)
$$

From the above discussion, the fundamental benefit of randomization is to balance the distributions of the potential outcomes across the treatment and control groups. This is a much stronger guarantee than balancing the distributions of the observed covariates.

Without randomization, the selection bias terms can be arbitrarily large, especially for unbounded outcomes. This highlights the fundamental difficulty of causal inference with observational studies.

## 10.3 Sufficient conditions for nonparametric identification of causal effects

### 10.3.1 Identification

Causal inference with observational studies is challenging. It relies on strong assumptions. A strategy is to use the information from the pretreatment covariates and assume that conditioning on the observed covariates $X$, the selection bias terms are zero, that is,

$$
E\{Y(0) | Z = 1, X\} = E\{Y(0) | Z = 0, X\}, \qquad (10.3)
$$

$$
E\{Y(1) | Z = 1, X\} = E\{Y(1) | Z = 0, X\}. \qquad (10.4)
$$The assumptions in (10.3) and (10.4) state that the differences in the means of the potential outcomes across the treatment and control groups are entirely due to the difference in the observed covariates. So given the same value of the covariates, the potential outcomes have the same means across the treatment and control groups. Mathematically, (10.3) and (10.4) ensure that the conditional versions of the effects in (10.2) are identical:

$$
\tau(X) = \tau_{\mathrm{T}}(X) = \tau_{\mathrm{C}}(X) = \tau_{\mathrm{PF}}(X),
$$

where

$$
\begin{align*} \tau(X) &= E\{Y(1) - Y(0) \mid X\}, \\ \tau_{\mathrm{T}}(X) &= E\{Y(1) - Y(0) \mid Z = 1, X\}, \\ \tau_{\mathrm{C}}(X) &= E\{Y(1) - Y(0) \mid Z = 0, X\}, \\ \tau_{\mathrm{PF}}(X) &= E(Y \mid Z = 1, X) - E(Y \mid Z = 0, X). \end{align*}
$$

In particular, $\tau(X)$ is often called the conditional average causal effect (CATE).

A key result in this chapter is that the average causal effect $\tau$ is non-parametrically identifiable under (10.3) and (10.4). The notion of nonparametrically identifiability does not appear frequently in classic statistics, but it is key to causal inference with observational studies. I first give an abstract definition below.

**Definition 10.1 (identification)** A parameter $\theta$ is identifiable if it can be written as a function of the distribution of the observed data under certain model assumptions. A parameter $\theta$ is nonparametrically identifiable if it can be written as a function of the distribution of the observed data without any parametric model assumptions.

Definition 10.1 is too abstract at the moment. I will use more concrete examples in later chapters to illustrate its meaning. It is often neglected in classic statistics problems. For instance, the mean $\theta = E(Y)$ is nonparametrically identifiable if we have IID draws of $Y_i$'s; the Pearson correlation coefficient $\theta = \rho_{YX}$ is nonparametrically identifiable if we have IID draws of the pairs $(X_i, Y_i)$'s. In those examples, the parameters are nonparametrically identifiable automatically. However, Definition 10.1 is fundamental in causal inference with observational studies. In particular, the parameter of interest $\tau = E\{Y(1) - Y(0)\}$ depends on some unobserved random variables, so it is unclear whether it is nonparametrically identifiable based on observed data. Under the assumptions in (10.3) and (10.4), it is nonparametrically identifiable, with details below.

Because $\tau_{\mathrm{PF}}(X)$ depends only on the observables, it is nonparametrically identified by definition. Moreover, (10.3) and (10.4) ensure that the three causal effects are the same as $\tau_{\mathrm{PF}}(X)$, so $\tau(X)$, $\tau_{\mathrm{T}}(X)$ and $\tau_{\mathrm{C}}(X)$ are all nonparametrically identified. Consequently, the unconditional versions are alsononparametrically identified under (10.3) and (10.4) due to the law of total expectation:

$$
\tau = E\{\tau(X)\}, \quad \tau_T = E\{\tau_T(X) | Z = 1\}, \quad \tau_C = E\{\tau_C(X) | Z = 0\}.
$$

From now on, I will focus on $\tau$ unless stated otherwise (Chapter 13 will be an exception). The following theorem summarizes the identification formulas of $\tau$.

**Theorem 10.1** *Under (10.3) and (10.4), the average causal effect $\tau$ is identified by*

$$
\tau = E\{\tau(X)\} \qquad (10.5)
$$

$$
= E\{E(Y | Z = 1, X) - E(Y | Z = 0, X)\} \qquad (10.6)
$$

$$
= \int \{E(Y | Z = 1, X = x) - E(Y | Z = 0, X = x)\} f(x) dx. \quad (10.7)
$$

The formula (10.6) was formally established by Rosenbaum and Rubin (1983b), which is also called the g-formula by Robins (see Hernán and Robins, 2020).

With a discrete covariate, we can write the identification formula in Theorem 10.1 as

$$
\tau = \sum_{x} E(Y | Z = 1, X = x)\mathrm{pr}(X = x) - \sum_{x} E(Y | Z = 0, X = x)\mathrm{pr}(X = x), \qquad (10.8)
$$

and also the simple difference in means as

$$
\tau_{\mathrm{PF}} = \sum_{x} E(Y | Z = 1, X = x)\mathrm{pr}(X = x | Z = 1) - \sum_{x} E(Y | Z = 0, X = x)\mathrm{pr}(X = x | Z = 0) \quad (10.9)
$$

by the law of total probability. Comparing (10.8) and (10.9), we can see that although both formulas compare the conditional expectations $E(Y | Z = 1, X = x)$ and $E(Y | Z = 0, X = x)$, they average over different distributions of the covariates. The causal parameter $\tau$ averages the conditional expectations over the common distribution of the covariates, but the difference in means $\tau_{\mathrm{PF}}$ averages the conditional expectations over two different distributions of the covariates in the treated and control groups.

Usually, we impose a stronger assumption.

**Assumption 10.1 (ignorability) We have**

$$
Y(z) \perp Z \mid X \quad (z = 0, 1). \qquad (10.10)
$$10.3 *Sufficient conditions for nonparametric identification of causal effects* 145

Assumption 10.1 has many names:

1. *ignorability* due to Rubin (1978)³;
2. *unconfoundedness* which is popular among epidemiologists;
3. *selection on observables* which is popular among social scientists;
4. *conditional independence* which is merely a description of the notation $\perp$ in the assumption.

Sometimes, we impose an even stronger assumption.

**Assumption 10.2 (strong ignorability) We have**

$$
\{Y(1), Y(0)\} \perp Z \mid X. \qquad (10.11)
$$

Assumption 10.2 is called *strong ignorability* (Rubin, 1978; Rosenbaum and Rubin, 1983b). If the parameter of interest is $\tau$, then the stronger Assumptions 10.1 and 10.2 are just imposed for notational simplicity thanks to the conditional independence notation $\perp$. They are not necessary for identifying $\tau$. However, they can not be relaxed if the parameter of interest is the causal effects on other scales (for example, distribution, quantile, or some transformation of the outcome). The *strong ignorability* assumption requires that the potential outcomes vector be independent of the treatment given the covariates, but the *ignorability* assumption only requires each potential outcome be independent of the treatment given covariates. The former is stronger than the latter. However, their difference is rather technical and of pure theoretical interests; see Problem 10.5. In most reasonable statistical models, they both hold; see Section 10.3.2 below. We will not distinguish them in this book and will simply use *ignorability* to refer to both.

### 10.3.2 Plausibility of the ignorability assumption

A fundamental problem of causal inference with observational studies is the plausibility of the ignorability assumption. The discussion in Chapter 10.3.1 may seem too mathematical in the sense that the ignorability assumption serves as a sufficient condition to ensure the nonparametric identification of the average causal effect. What is its scientific meaning? Intuitively, it rules out all unmeasured covariates that affect the treatment and outcome simultaneously. Those “common causes” of the treatment and outcome are called confounders. That is why the ignorability assumption is also called the unconfoundedness assumption. More transparently, we can interpret the ignorability assumption

³The reason for using this name is unclear based on the discussion in this book. In fact, it is from the Bayesian perspective of causal inference. It is beyond the scope of this book.based on the outcome data-generating process. If

$$
\begin{align*}
Y(1) &= g_1(X, V_1), \\
Y(0) &= g_0(X, V_0), \\
Z &= 1\{g(X, V) \ge 0\}
\end{align*}
$$

with $(V_1, V_0) \perp V$, then both Assumptions 10.1 and 10.2 hold. In the above data-generating process, the “common causes” $X$ of the treatment and the outcome are all observed, and the remaining random components are independent. If the data-generating process changes to

$$
\begin{align*}
Y(1) &= g_1(X, U, V_1), \\
Y(0) &= g_0(X, U, V_0), \\
Z &= 1\{g(X, U, V) \ge 0\}
\end{align*}
$$

with $(V_1, V_0) \perp V$, then Assumptions 10.1 and 10.2 do not hold in general. The unmeasured “common cause” $U$ induces dependence between the treatment and the potential outcomes even conditional on the observed covariates $X$. If we do not have access to $U$ and analyze the data based only on $(Z, X, Y)$, the final estimator will be biased for the causal parameter in general. This type of bias is called the *omitted variable bias* in econometrics; see Problem 16.2 in a later chapter.

The ignorability assumption can be reasonable if we observe a rich set of covariates $X$ that affect the treatment and the outcome simultaneously. I start with this assumption to discuss identification and estimation strategies in Part III of this book. However, it is fundamentally untestable. We may justify it based on the scientific background knowledge, but we are often not sure whether it holds or not. Parts IV and V of this book will discuss other strategies when the ignorability assumption is not plausible.

10.4 Two simple estimation strategies and their limitations

10.4.1 Stratification or standardization based on discrete co-
variates

If the covariate $X_i \in \{1, \dots, K\}$ is discrete, then ignorability (10.10) reads as

$$
Y(z) \perp Z \mid X = k \quad (z = 0, 1; k = 1, \dots, K),
$$

which essentially assumes that the observational study is an SRE under the
superpopulation framework in Chapter 9. Therefore, we can use the estimator

$$
\hat{\tau} = \sum_{k=1}^{K} \pi_{[k]} \left\{ \hat{Y}_{[k]}(1) - \hat{Y}_{[k]}(0) \right\},
$$which is identical to the stratified or post-stratified estimator discussed in
Chapter 5.

This method is still widely used in practice. Example 10.2 contains discrete covariates, and I relegate the analysis to Problem 10.4. However, there are several obvious difficulties in implementing this method. First, it works well for the case with small K. For large K, it is very likely that many strata have $n_{[k]1} = 0$ or $n_{[k]0} = 0$, leading to the poorly defined $\hat{\tau}_{[k]}$'s for those strata. This is related to the issue of overlap which will be discussed in Chapter 20 later. Second, it is not obvious how to apply this stratification method to multidimensional continuous or mixed covariates X. A standard method is to create strata based on the initial covariates and then apply the stratification method. This may result in arbitrariness in the analysis.

10.4.2 Outcome regression

The most commonly used method based on outcome regression is to run the OLS with an additive model of the observed outcome on the treatment indicator and covariates, which assumes

$$
E(Y | Z, X) = \beta_0 + \beta_z Z + \beta_x^\top X.
$$

If the above linear model is correct, then we have

$$
\begin{align*}
\tau(X) &= E(Y | Z = 1, X) - E(Y | Z = 0, X) \\
&= (\beta_0 + \beta_z + \beta_x^\top X) - (\beta_0 + \beta_x^\top X) \\
&= \beta_z,
\end{align*}
$$

which implies that the causal effect is homogeneous with respect to the co-
variates. This, coupled with ignorability, implies that

$$
\tau = E\{\tau(X)\} = \beta_z.
$$

Therefore, if ignorability holds and the outcome model is linear, then the average causal effect equals the coefficient of Z. This is one of the most important applications of the linear model. However, the causal interpretation of the coefficient of Z is valid only under two strong assumptions: ignorability and the linear model.

We have discussed in Chapter 6, the above procedure is suboptimal even
in CREs because it ignores the treatment effect heterogeneity induced by the
covariates. If we assume

$$
E(Y | Z, X) = \beta_0 + \beta_z Z + \beta_x^\top X + \beta_{zx}^\top X Z,
$$

we have

$$
\begin{align*}
\tau(X) &= E(Y | Z = 1, X) - E(Y | Z = 0, X) \\
&= (\beta_0 + \beta_z + \beta_x^\top X + \beta_{zx}^\top X) - (\beta_0 + \beta_x^\top X) \\
&= \beta_z + \beta_{zx}^\top X,
\end{align*}
$$which, coupled with ignorability, implies that

$$
\tau = E\{\tau(X)\} = E(\beta_z + \beta_{zx}^{\top} X) = \beta_z + \beta_{zx}^{\top} E(X).
$$

The estimator for $\tau$ is then $\hat{\beta}_z + \hat{\beta}_{zx}^\top \bar{X}$, where $\hat{\beta}_z$ is the regression coefficient of $Z$ and $\bar{X}$ is the sample mean of $X$. If we center the covariates to ensure $\bar{X} = 0$, then the estimator is simply the regression coefficient of $Z$. To simplify the procedure, we usually center the covariates at the beginning; also recall Lin (2013)'s estimator introduced in Chapter 6. Rosenbaum and Rubin (1983b) and Hirano and Imbens (2001) discussed this estimator.

In general, we can use other more complex models to estimate the causal effects. For example, if we build two predictors $\hat{\mu}_1(X)$ and $\hat{\mu}_0(X)$ based on the treated and control data, respectively, then we have an estimator for the conditional average causal effect

$$
\hat{\tau}(X) = \hat{\mu}_1(X) - \hat{\mu}_0(X)
$$

and an estimator for the average causal effect:

$$
\hat{\tau}^{\text{reg}} = n^{-1} \sum_{i=1}^{n} \{\hat{\mu}_{1}(X_i) - \hat{\mu}_{0}(X_i)\}.
$$

The estimator $\hat{\tau}$ above has the same form as the projective estimator discussed in Chapter 6. It is sometimes called the *outcome regression estimator*. The OLS-based estimators above are special cases. We can use the nonparametric bootstrap (see Chapter A.6) to estimate the standard error of the outcome regression estimator.

I give another example for binary outcomes below.

**Example 10.4 (outcome regression estimator for binary outcomes)**

*With a binary outcome, we may model $Y$ using a logistic model*

$$
E(Y | Z, X) = \text{pr}(Y = 1 | Z, X) = \frac{e^{\beta_0 + \beta_z Z + \beta_x^\top X}}{1 + e^{\beta_0 + \beta_z Z + \beta_x^\top X}},
$$

then based on the estimators of the coefficients $\hat{\beta}_0, \hat{\beta}_z, \hat{\beta}_x$, we have the following estimator for the average causal effect:

$$
\hat{\tau} = n^{-1} \sum_{i=1}^{n} \left\{ \frac{e^{\hat{\beta}_0 + \hat{\beta}_z + \hat{\beta}_x^\top X_i}}{1 + e^{\hat{\beta}_0 + \hat{\beta}_z + \hat{\beta}_x^\top X_i}} - \frac{e^{\hat{\beta}_0 + \hat{\beta}_x^\top X_i}}{1 + e^{\hat{\beta}_0 + \hat{\beta}_x^\top X_i}} \right\}.
$$

*This estimator is not simply the coefficient of the treatment in the logistic model.⁴ It is a nonlinear function of all the coefficients as well as the empirical distribution of the covariates. In econometrics, this estimator is called*

⁴If the logistic outcome model is correct, then $\hat{\beta}_z$ estimates the conditional odds ratio of the treatment on the outcome given covariates, which does not equal $\tau$. Freedman (2008c) gave a warning of using the logistic regression coefficient to estimate $\tau$ in CREs. See Chapter B for more details of the logistic regression.the “average partial effect” or “average marginal effect” of the treatment in
the logistic model. Many econometric software packages can report this es-
timator associated with the standard error. Similarly, we can also derive the
corresponding estimator based on a fully interacted logistic model; see Problem
10.3.

The above predictors for the conditional means of the outcome can also be
other machine learning tools. In particular, Hill (2011) championed the use of
tree methods for estimating τ, and Wager and Athey (2018) proposed to use
them also for estimating τ(X). Wager and Athey (2018) also combined the
tree methods with the idea of the propensity score in the next chapter. Since
then, the intersection of machine learning and causal inference has been an
active research area (e.g., Hahn et al., 2020; Künzel et al., 2019).

The biggest problem with the above approach based on outcome regres-
sions is its sensitivity to the specification of the outcome model. Problem 1.4
gave such an example. Depending on the incentive of empirical research and
publications, people might report their favorable causal effects estimates after
searching over a wide set of candidate models, without confessing this model
searching process. This is a major source of *p*-hacking in causal inference.
Problem 1.4 hinted at this issue. Leamer (1978) criticized this approach in
empirical research.

**10.5 Homework Problems**

10.1 *A simple identity*

Show that $\tau = \text{pr}(Z = 1)\tau_T + \text{pr}(Z = 0)\tau_C$.

10.2 *Nonparametric identification of other causal effects*

Under ignorability, show that

1. the distributional causal effect

$$
\mathrm{DCE}_{y}=\mathrm{pr}\{Y(1)>y\}-\mathrm{pr}\{Y(0)>y\}
$$

is nonparametrically identifiable for all $y$;

2. the quantile causal effect

$$
\mathrm{QCE}_{q}=\mathrm{quantile}_{q}\{Y(1)\}-\mathrm{quantile}_{q}\{Y(0)\},
$$

is nonparametrically identifiable for all *q*, where quantile_q{·} is the
$q$th quantile of a random variable.Remark: In probability theory, $\text{pr}\{Y(z) \le y\}$ is the cumulative distribution function and $\text{pr}\{Y(z) > y\}$ is the survival function of the potential outcome $Y(z)$. The distributional causal effect compares the survival functions of the potential outcomes under treatment and control.

The quantile causal effect compares the marginal quantiles of the potential outcomes, which is different from the quantile of the individual causal effect

$$
\tau_q = \text{quantile}_q\{Y(1) - Y(0)\}.
$$

In fact, $\tau_q$ is not identifiable in the sense that the marginal distributions $\text{pr}\{Y(1) \le y\}$ and $\text{pr}\{Y(0) \le y\}$ can not uniquely determine $\tau_q$.

## 10.3 Outcome imputation estimator in the fully interacted logistic model

This problem extends Example 10.4.

Assume that a binary outcome follows a logistic model

$$
E(Y | Z, X) = \text{pr}(Y = 1 | Z, X) = \frac{e^{\beta_0 + \beta_z Z + \beta_x^\top X + \beta_{xz}^\top X Z}}{1 + e^{\beta_0 + \beta_z Z + \beta_x^\top X + \beta_{xz}^\top X Z}}
$$

What is the corresponding outcome regression estimator for the average causal effect?

## 10.4 Data analysis: stratification and regression

Use the dataset `homocyst` in the package `senstrat`. The outcome is `homocysteine`, the homocysteine level, and the treatment is `z`, where $z = 1$ for a daily smoker and $z = 0$ for a never smoker. Covariates are `female`, `age3`, `ed3`, `bmi3`, `pov2` with detailed explanations in the package, and `st` is a stratum indicator, defined by all the combinations of the discrete covariates.

1. How many strata have only treated or control units? What is the proportion of the units in these strata? Drop these strata and perform a stratified analysis of the observational study. Report the point estimator, variance estimator, and 95% confidence interval for the average causal effect.
2. Run the OLS of the outcome on the treatment indicator and covariates without interactions. Report the coefficient of the treatment and the robust standard error.
Drop the strata with only treated or control units. Re-run the OLS and report the result.
3. Apply Lin (2013)'s estimator of the average causal effect. Report the coefficient of the treatment and the robust standard error.
If you do not drop the strata with only treated or control units, what will happen?10.5 *Homework Problems*

4. Compare the results in the above three analyses. Which one is more credible?

10.5 *Ignorability versus strong ignorability*

Give an example such that the ignorability holds but the strong ignorability
does not hold.

Remark: This is related to a classic probability problem of finding three
random variables A, B, C such that

$$
A \perp C \text{ and } B \perp C \text{ but } (A, B) \not\perp C.
$$

10.6 *Recommended reading*

Cochran (1965) is a classic reference on observational studies. It contains many
useful insights but does not use the formal potential outcomes framework. Dy-
lan Small founded a new journal called *Observational Studies* in 2015 (Small,
2015) and reprinted an old article “Observational Studies” by W. G. Cochran
as Cochran (2015). Many leading researchers also made insightful comments
on Cochran (2015).111

The Central Role of the Propensity Score
in Observational Studies for Causal Effects

Rosenbaum and Rubin (1983b) proposed the key concept *propensity score* and discussed its role in causal inference with observational studies. It is one of the most cited papers in statistics, and Titterington (2013) listed it as the second most cited paper published in *Biometrika* during the past 100 years. Its number of citations has grown very fast in recent years.

Under the IID sampling assumption, we have four random variables as-
sociated with each unit: {$X, Z, Y(1), Y(0)$}. Following the basic probability
rules, we can factorize the joint distribution as

$$
\begin{align*}
& \operatorname{pr}\{X, Z, Y(1), Y(0)\} \\
= & \operatorname{pr}(X) \times \operatorname{pr}\{Y(1), Y(0) \mid X\} \times \operatorname{pr}\{Z \mid X, Y(1), Y(0)\},
\end{align*}
$$

where

1.  pr(X) is the covariate distribution,
2.  pr{Y(1), Y(0) | X} is the outcome distribution conditional on the covariates X,
3.  pr{Z | X, Y(1), Y(0)} is the treatment distribution conditional on the covariates X, also known as the treatment assignment mechanism.

Usually, we do not want to model the covariates because they are background
information happening before the treatment and outcome. If we want to go
beyond the outcome model, then we must focus on the treatment assignment
mechanism, which leads to the definition of the propensity score.

**Definition 11.1 (propensity score) Define**

$$
e(X, Y(1), Y(0)) = \mathrm{pr}\{Z = 1 | X, Y(1), Y(0)\}
$$

as the *propensity score*. Under strong ignorability, we have

$$
e(X, Y(1), Y(0)) = \mathrm{pr}\{Z = 1 | X, Y(1), Y(0)\} = \mathrm{pr}(Z = 1 | X),
$$

so the *propensity score* reduces to

$e(X) = \mathrm{pr}(Z = 1 | X),$the conditional probability of receiving the treatment given the observed covariates.

Rosenbaum and Rubin (1983b) used $e(X) = \text{pr}(Z = 1 | X)$ as the definition of the propensity score because they focused on observational studies under strong ignorability. It is sometimes helpful to view $e(X, Y(1), Y(0)) = \text{pr}\{Z = 1 | X, Y(1), Y(0)\}$ as the general definition of the propensity score even when strong ignorability fails. See Problem 11.1 for more details.

Following Rosenbaum and Rubin (1983b), this chapter will demonstrate that $e(X)$ is a key quantity in causal inference with observational studies under ignorability.

# 11.1 The propensity score as a dimension reduction tool

## 11.1.1 Theory

**Theorem 11.1** If $Z \perp \{Y(1), Y(0)\} | X$, then $Z \perp \{Y(1), Y(0)\} | e(X)$.

Theorem 11.1 states that if strong ignorability holds conditional on covariates $X$, then it also holds conditional on the scalar propensity score $e(X)$. The ignorability requires conditioning on many background characteristics $X$ of the units, but Theorem 11.1 implies that conditioning on the propensity score $e(X)$ removes all confounding induced by covariates $X$. The original covariates $X$ can be general and have many dimensions, but the propensity score $e(X)$ is a one-dimensional scalar variable bounded between 0 and 1. Therefore, the propensity score reduces the dimension of the original covariates but still maintains the ignorability. As a statistical terminology, we can view the propensity score as a *dimensional reduction* tool. We will first prove Theorem 11.1 below and then give an application of the dimension reduction property of the propensity score.

**Proof of Theorem 11.1:** By the definition of conditional independence, we need to show that

$$
\text{pr}\{Z = 1 | Y(1), Y(0), e(X)\} = \text{pr}\{Z = 1 | e(X)\}. \qquad (11.1)
$$The left-hand side of (11.1) equals

$$
\begin{align*}
& \mathrm{pr}\{Z = 1 | Y(1), Y(0), e(X)\} \\
&= E\{Z | Y(1), Y(0), e(X)\} \\
&= E\left[E\{Z | Y(1), Y(0), e(X), X\} | Y(1), Y(0), e(X)\right] \\
& \quad \text{(tower property; see Section A.1.5)} \\
&= E\left[E\{Z | Y(1), Y(0), X\} | Y(1), Y(0), e(X)\right] \\
&= E\{E(Z | X) | Y(1), Y(0), e(X)\} \quad \text{(strong ignorability)} \\
&= E\{e(X) | Y(1), Y(0), e(X)\} \\
&= e(X).
\end{align*}
$$

The right-hand side of (11.1) equals

$$
\begin{align*}
& \mathrm{pr}\{Z = 1 \mid e(X)\} \\
&= E\{Z \mid e(X)\} \\
&= E\left[E\{Z \mid e(X), X\} \mid e(X)\right] \quad \text{(tower property)} \\
&= E\{E(Z \mid X) \mid e(X)\} \\
&= E\{e(X) \mid e(X)\} \\
&= e(X).
\end{align*}
$$

So the left-hand side of (11.1) equals the right-hand side of (11.1). $\square$

11.1.2 Propensity score stratification

Theorem 11.1 motivates a simple method for estimating causal effects: propensity score stratification. Starting from the simple case, we assume that the propensity score is known and only takes *K* possible values {*e*<sub>1</sub>, . . . , *e*<sub>*K*</sub>} with *K* being much smaller than the sample size *n*. Theorem 11.1 reduces to

$$
Z \perp \{Y(1), Y(0)\} | e(X) = e_k \quad (k = 1, \dots, K).
$$

Therefore, we have an SRE, that is, we have *K* independent CREs within strata of the propensity score. We can analyze the observational data in the same way as the SRE stratified on *e(X)*.

In general, the propensity score is not known and is not discrete. We often
fit a statistical model for $\mathrm{pr}(Z = 1 | X)$ (for example, a logistic model of
the binary $Z$ given $X$) to obtain the estimated propensity score $\hat{e}(X)$. This
estimated propensity score can take as many values as the sample size, but we
can discretize it to approximate the simple case above. For example, we can
discretize the estimated propensity score by its $K$ quantiles to obtain $\hat{e}'(X)$:$\hat{e}'(X_i) = e_k$, the $k/K$-th quantile of $\hat{e}(X)$, if $\hat{e}(X_i)$ is between the $(k-1)/K$-th and $k/K$-th quantiles of the $\hat{e}(X_i)$'s. Then

$$
Z \perp \{Y(1), Y(0)\} | \hat{e}'(X) = e_k \quad (k = 1, \dots, K).
$$

holds approximately. So we can analyze the observational data in the same way as the SRE stratified on $\hat{e}'(X)$. The ignorability holds only approximately given $\hat{e}'(X)$. We can further use regression adjustment based on covariates to remove bias and improve efficiency. To be more specific, we can obtain Lin (2013)'s estimator within each stratum and construct the final estimator by a weighted average (see Chapter 6.2.4).

With an unknown propensity score, we need to fit a statistical model to obtain the estimated propensity score $\hat{e}(X)$. This makes the final estimator dependent on the model specification. However, the propensity score stratification estimator only requires the correct ordering of the estimated propensity scores rather than their exact values, which makes it relatively robust compared with other methods. This robustness property of propensity score stratification appeared in many numerical examples but its rigorous quantification is still missing in the literature.

An important practical question is how to choose $K$? If $K$ is too small, then ignorability does not hold conditional on $\hat{e}'(X)$ even approximately. If $K$ is too large, then we do not have enough units within each stratum of the estimated propensity score and many strata have only treated or control units. Therefore, we face a trade-off. Following Cochran (1968)'s heuristics, Rosenbaum and Rubin (1983b) and Rosenbaum and Rubin (1984) suggested $K = 5$ which removes a large amount of bias in many settings. However, with extremely large datasets, propensity score stratification leads to biased estimators with a fixed $K$ (Lunceford and Davidian, 2004). It is thus reasonable to increase $K$ as long as each stratum still has enough treated and control units. Wang et al. (2020) suggested a greedy choice of $K$, which is the maximum number of strata such that the stratified estimator is well-defined. However, the rigorous theory for this procedure is not fully established.

Another important practical question is how to compute the standard errors of the estimators based on propensity score stratification. Some researchers have conditioned on the discretized propensity scores $\hat{e}'(X)$ and reported standard errors based on the SRE. This effectively ignores the uncertainty in the estimated propensity scores. This often leads to an overestimation of the true variance since a surprising result in the literature is that using the estimated propensity scores decreases the asymptotic variance for estimating the average causal effect (Su et al., 2023). Other researchers bootstrapped the whole procedure to account for full uncertainty. However, the theory for the bootstrap is still unclear due to the discreteness of this estimator.![[_resources/Ding - 2023 - A First Course in Causal Inference_Part6/bf3826302f15d1a4819c041966f43102_MD5.jpg]]

FIGURE 11.1: Histograms of the estimated propensity scores based on the *nhanes_bmi* data: white for the control group and grey for the treatment group

### 11.1.3 Application

To illustrate the propensity score stratification method, I revisited Example 10.3.

```r
> nhanes_bmi = read.csv("nhanes_bmi.csv")[, -1]
> z = nhanes_bmi$School_meal
> y = nhanes_bmi$BMI
> x = as.matrix(nhanes_bmi[, -c(1, 2)])
> x = scale(x)
```

Example 10.3 introduced the covariates in the dataset. The treatment *School_meal* is the indicator for participation in the school meal plan, and the outcome *BMI* is the BMI.

Figure 11.1 shows the histograms of the estimated propensity scores with different numbers of bins ($K = 5, 10, 30$). Based on propensity score stratification, we can calculate the point estimators and the standard errors for difference choice of $K \in \{5, 10, 20, 50, 80\}$ as follows (with the function *Neyman_SRE* defined in Chapter 5 for analyzing the SRE):

```r
> pscore = glm(z ~ x, family = binomial)$fitted.values
> n.strata = c(5, 10, 20, 50, 80)
> strat.res = sapply(n.strata, FUN = function nn){
+   q.pscore = quantile(pscore, (1:(nn-1))/nn)
+   ps.strata = cut(pscore, breaks = c(0,q.pscore,1),
+                   labels = 1:nn)
+   Neyman_SRE(z, y, ps.strata))}
>
> rownames(strat.res) = c("est", "se")
> colnames(strat.res) = n.strata
``````r
> round(strat.res, 3)
5      10     20     50     80
est -0.116 -0.178 -0.200 -0.265 -0.204
se   0.283  0.282  0.279  0.272    NA
```

Increasing *K* from 5 to 50 reduces the standard error. However, we cannot go as extreme as *K* = 80 because the standard error is not well-defined in some strata with only one treated or one control unit. The above estimators show a negative but insignificant effect of the meal program on BMI.

We can also compare the above estimator with the three simple regression estimators: the one without adjusting for any covariates, and Fisher's and Lin's estimators.

```r
> DiM = lm(y ~ z)
> Fisher = lm(y ~ z + x)
> Lin = lm(y ~ z + x + z*x)
> res.regression = c(coef(DiM)[2], hccm(DiM)[2, 2]^0.5,
+                      coef(Fisher)[2], hccm(Fisher)[2, 2]^0.5,
+                      coef(Lin)[2], hccm(Lin)[2, 2]^0.5)
> res.regression = matrix(res.regression,
+                       nrow = 2, ncol = 3)
> rownames(res.regression) = c("est", "se")
> colnames(res.regression) = c("naive", "fisher", "lin")
> round(res.regression, 3)
 naiv fisher lin
est  0.534  0.061 -0.017
se   0.225  0.227  0.226
```

The naive difference in means differs greatly from the other methods due to the large imbalance in covariates. Fisher's estimator still gives a positive point estimate although it is not significant. Lin's estimator and the propensity score stratification estimators give qualitatively the same results. The propensity score stratification estimators are stable across different choices of *K*.

## 11.2 Propensity score weighting

### 11.2.1 Theory

**Theorem 11.2** If $Z \perp \{Y(1), Y(0)\} | X$ and $0 < e(X) < 1$, then

$$
E\{Y(1)\} = E\left\{\frac{ZY}{e(X)}\right\}, \quad E\{Y(0)\} = E\left\{\frac{(1-Z)Y}{1-e(X)}\right\},
$$

and

$$
\tau = E\{Y(1) - Y(0)\} = E\left\{\frac{ZY}{e(X)} - \frac{(1-Z)Y}{1-e(X)}\right\}.
$$Before proving Theorem 11.2, it is important to note the additional assumption $0 < e(X) < 1$. It is called the *overlap* or *positivity* condition. The formulas in Theorem 11.2 become infinity if $e(X) = 0$ or $1$ for some values of $X$. It is not a requirement only for the identification formulas based on propensity score weighting. Although it was not stated explicitly in Theorem 10.1, the conditional expectations $E(Y | Z = 1, X)$ and $E(Y | Z = 0, X)$ in the identification formula of $\tau$ in (10.6) is well defined only if $0 < e(X) < 1$. The overlap condition can be viewed as a technical condition to ensure that the formulas in Theorems 10.1 and 11.2 are well defined. It can also cause some philosophical issues for causal inference with observational studies. When unit $i$ has $e(X_i) = 1$, we always observe its potential outcome under the treatment, $Y_i(1)$, but can never observe its potential outcome under the control, $Y_i(0)$. In this case, the potential outcome $Y_i(0)$ may not even be well defined, making the definition of the causal effect ambiguous for unit $i$. King and Zeng (2006) called $Y_i(0)$ an *extreme counterfactual* when $e(X_i) = 1$, and discussed their dangers in causal inference. A similar problem arises if unit $i$ has $e(X_i) = 0$.

In sum, $Z \perp \{Y(1), Y(0)\} | X$ requires adequate covariates to ensure the conditional independence of the treatment and potential outcomes, and $0 < e(X) < 1$ requires residual randomness in the treatment conditional on the covariates. In fact, Rosenbaum and Rubin (1983b)'s definition of strong ignorability includes both of these conditions. In modern literature, they are often stated separately.

**Proof of Theorem 11.2:** I only prove the result for $E\{Y(1)\}$ because the proof of the result for $E\{Y(0)\}$ is similar. We have

$$
\begin{align*}
& E \left\{ \frac{ZY}{e(X)} \right\} \\
&= E \left\{ \frac{ZY(1)}{e(X)} \right\} \\
&= E \left[ E \left\{ \frac{ZY(1)}{e(X)} \mid X \right\} \right] \quad \text{(tower property)} \\
&= E \left[ \frac{1}{e(X)} E \{ZY(1) \mid X\} \right] \\
&= E \left[ \frac{1}{e(X)} E(Z \mid X) E \{Y(1) \mid X\} \right] \quad \text{(strong ignorability)} \\
&= E \left[ \frac{1}{e(X)} e(X) E \{Y(1) \mid X\} \right] \\
&= E \left[ E \{Y(1) \mid X\} \right] \\
&= E \{Y(1)\}.
\end{align*}
$$11.2.2 Inverse propensity score weighting estimators

Theorem 11.2 motivates the following moment estimator for the average causal
effect:

$$
\hat{\tau}^{\text{ht}} = \frac{1}{n} \sum_{i=1}^{n} \frac{Z_i Y_i}{\hat{e}(X_i)} - \frac{1}{n} \sum_{i=1}^{n} \frac{(1 - Z_i) Y_i}{1 - \hat{e}(X_i)},
$$

where $\hat{e}(X_i)$ is the estimated propensity score. This is the inverse propensity
score weighting (IPW) estimator, which is also called the Horvitz–Thompson
(HT) estimator. Horvitz and Thompson (1952) proposed it in survey sampling
and Rosenbaum (1987a) used in causal inference with observational studies.

However, the estimator $\hat{\tau}^{\text{ht}}$ has many problems. In particular, it is not invariant to the location transformation of the outcome. Proposition 11.1 states this problem precisely, with the proof relegated to Problem 11.3.

**Proposition 11.1 (lack of invariance for the HT estimator) If we change**

$Y_i$ to $Y_i + c$ with a constant $c$, then the HT estimator $\hat{\tau}^{\text{ht}}$ becomes $\hat{\tau}^{\text{ht}} + c(\hat{1}_{\text{T}} - \hat{1}_{\text{C}})$, where

$$
\hat{1}_{\mathrm{T}} = \frac{1}{n} \sum_{i=1}^{n} \frac{Z_i}{\hat{e}(X_i)}, \quad \hat{1}_{\mathrm{C}} = \frac{1}{n} \sum_{i=1}^{n} \frac{(1-Z_i)}{1-\hat{e}(X_i)}
$$

can be viewed as two different estimates of the constant 1.

In Proposition 11.1, I use the funny notation $\hat{1}_T$ and $\hat{1}_C$ because with the true propensity score these two terms both have expectation 1; see Problem 11.3 for more details. In general, $\hat{1}_T - \hat{1}_C$ is not zero in finite samples. Since adding a constant to every outcome should not change the average causal effect, the HT estimator is not reasonable because of its dependence on $c$. A simple fix to the problem is to normalize the weights by $\hat{1}_T$ and $\hat{1}_C$ respectively, resulting in the following estimator

$$
\hat{\tau}^{\text{hajek}} = \frac{\sum_{i=1}^{n} \frac{Z_i Y_i}{\hat{e}(X_i)}}{\sum_{i=1}^{n} \frac{Z_i}{\hat{e}(X_i)}} - \frac{\sum_{i=1}^{n} \frac{(1-Z_i) Y_i}{1-\hat{e}(X_i)}}{\sum_{i=1}^{n} \frac{1-Z_i}{1-\hat{e}(X_i)}}.
$$

This is the Hajek estimator due to Hájek (1971) in the context of survey
sampling with varying probabilities. We can verify that the Hajek estimator
is invariant to the location transformation. That is, if we replace $Y_i$ by $Y_i + c$,
then $\hat{\tau}^{\text{hajek}}$ remains the same; see Problem 11.3. Moreover, many numerical
studies have found that $\hat{\tau}^{\text{hajek}}$ is much more stable than $\hat{\tau}^{\text{ht}}$ in finite samples.

11.2.3 A problem of IPW and a fundamental problem of
causal inference

Many asymptotic analyses require a *strong overlap* condition

$0 < \alpha_L \le e(X) \le \alpha_U < 1,$that is, the true propensity score is bounded away from 0 and 1. However, D'Amour et al. (2021) pointed out that this is a rather strong assumption, especially with many covariates. Chapter 20 will discuss this problem in detail.

Even if the strong overlap condition holds for the true propensity score, the estimated propensity scores can be close to 0 or 1. When this happens, the weighting estimators blow up to infinity, which results in extremely unstable behavior in finite samples. We can either truncate the estimated propensity score by changing it to

$$
\max[\alpha_L, \min\{\hat{e}(X_i), \alpha_U\}],
$$

or trim the observations by dropping units with $\hat{e}(X_i)$ outside the interval $[\alpha_L, \alpha_U]$. Crump et al. (2009) suggested $\alpha_L = 0.1$ and $\alpha_U = 0.9$, and Kurth et al. (2005) suggested $\alpha_L = 0.05$ and $\alpha_U = 0.95$. Yang and Ding (2018b) established some asymptotic theory for trimming. Overall, although trimming often stabilizes the IPW estimators, it also injects additional arbitrariness into the procedure.

### 11.2.4 Application

The following functions can compute the IPW estimators and their bootstrap standard errors.

```matlab
ipw.est = function(z, y, x, truncps = c(0, 1))
{
    ## fitted propensity score
    pscore   = glm(z ~ x, family = binomial)$fitted.values
    pscore   = pmax(truncps[1], pmin(truncps[2], pscore))

    ace.ipw0  = mean(z*y/pscore - (1 - z)*y/(1 - pscore))
    ace.ipw   = mean(z*y/pscore)/mean(z/pscore) -
                mean((1 - z)*y/(1 - pscore))/mean((1 - z)/(1 - pscore))

    return(c(ace.ipw0, ace.ipw))
}

ipw boot = function(z, y, x, n boot = 500, truncps = c(0, 1))
{
    point.est = ipw.est(z, y, x, truncps)

    ## nonparametric bootstrap
    n.sample  = length(z)
    x         = as.matrix(x)
    boot.est = replicate(n boot, {
        id boot = sample(1:n.sample, n.sample, replace = TRUE)
        ipw.est(z[id boot], y[id boot], x[id boot, ], truncps)
    })
``````r
boot.se = apply(boot.est, 1, sd)

res = cbind(point.est, boot.se)
colnames(res) = c("est", "se")
rownames(res) = c("HT", "Hajek")

return(res)
}
```

Revisiting Example 10.3, we can obtain the IPW estimators based on different truncations of the estimated propensity scores. The following results are the two weighting estimators with the bootstrap standard errors, with truncations at (0, 1), (0.01, 0.99), (0.05, 0.95), and (0.1, 0.9):

```r
> trunc.list = list(trunc0 = c(0,1),
+                      trunc.01 = c(0.01, 0.99),
+                      trunc.05 = c(0.05, 0.95),
+                      trunc.1 = c(0.1, 0.9))
> trunc.est = lapply(trunc.list,
+                     function(t){
+                         est = ipw boot(z, y, x, truncps = t)
+                         round est, 3)
+                     })
> trunc.est
$trunc0
  est   se
HT     -1.516  0.496
Hajek  -0.156  0.258

$trunc.01
  est   se
HT     -1.516  0.501
Hajek  -0.156  0.254

$trunc.05
  est   se
HT     -1.499  0.501
Hajek  -0.152  0.255

$trunc.1
  est   se
HT     -0.713  0.425
Hajek  -0.054  0.246
```

The HT estimator gives results far away from all other estimators we discussed so far. The point estimates seem too large and they are negatively significant unless we truncate the estimated propensity scores at (0.1, 0.9). This is an example showing the instability of the HT estimator.11.3 The balancing property of the propensity score

11.3.1 Theory

**Theorem 11.3** *The propensity score satisfies*

$$
Z \perp X \mid e(X).
$$

Moreover, for any function $h(\cdot)$, we have

$$
E \left\{ \frac{Zh(X)}{e(X)} \right\} = E \left\{ \frac{(1-Z)h(X)}{1-e(X)} \right\} \quad (11.2)
$$

provided the existence of the moments on both sides of (11.2).

Theorem 11.3 does not require the ignorability assumption. It is about
the treatment Z and covariates X only. The first part of Theorem 11.3 states
that conditional on the propensity score, the treatment indicator, and the
covariates are independent. Therefore, within the same level of the propensity
score, the covariate distributions are balanced across the treatment and control
groups. The second part of Theorem 11.3 states that an equivalent form of
covariate balance based on the weighting form. I give a proof of Theorem 11.3
below.

**Proof of Theorem 11.3:** First, we show $Z \perp X | e(X)$, that is,

$$
\mathrm{pr}\{Z = 1 | X, e(X)\} = \mathrm{pr}\{Z = 1 | e(X)\}. \quad (11.3)
$$

Following similar steps as the proof of Theorem 11.1, we can show that the
left-hand side of (11.3) equals

$$
\mathrm{pr}\{Z = 1 | X, e(X)\} = \mathrm{pr}(Z = 1 | X) = e(X),
$$

and the right-hand side of (11.3) equals

$$
\begin{align*}
\mathrm{pr}\{Z = 1 | e(X)\} &= E\{Z | e(X)\} \\
&= E\left[E\{Z | X, e(X)\} | e(X)\right] \\
&= E\left[E\{Z | X\} | e(X)\right] \\
&= E\left[e(X) | e(X)\right] \\
&= e(X).
\end{align*}
$$

Therefore, (11.3) holds.

Second, we show (11.2). We can use similar steps as the proof of Theorem 11.2. But given Theorem 11.2, we have a simpler proof. If we view $h(X)$ as an outcome, then its two potential outcomes are identical and ignorability holds: $Z \perp \{h(X), h(X)\} | X$. The difference between the left-hand and right-hand sides of (11.2) is the average causal effect of $Z$ on $h(X)$, which is zero. $\square$11.3.2 Covariate balance check

The proof of Theorem 11.3 is simple. But Theorem 11.3 has useful implications for the statistical analysis. Before getting access to the outcome data, we can check whether the propensity score model is specified well enough to ensure the covariate balance in the data. Rubin (2007) viewed this as the design stage of the observational study, and Rubin (2008) argued that this can result in more objective causal inference because the design stage does not involve the values of the outcomes.¹

In the propensity score stratification, we have the discretized estimated
propensity score $\hat{e}'(X)$ and approximately

$$
Z \perp X \mid \hat{e}'(X) = e_k \quad (k = 1, \dots, K).
$$

Therefore, we can check whether the covariate distributions are the same
across the treatment and control groups within each stratum of the discretized
estimated propensity score.

In propensity score weighting, we can view $h(X)$ as a pseudo outcome and
estimate the average causal effect on $h(X)$. Because the true average causal
effect on $h(X)$ is 0, the estimate should not be significantly different from 0.
A canonical choice of $h(X)$ is $X$.

Let us revisit Example 10.3 again. Based on propensity score stratifica-
tion with *K* = 5, all the covariates are well-balanced across the treatment
and control groups. Similar results hold for the Hajek estimator. The only
exception is Food_Stamp, the 7th covariate in Figure 11.2. Figure 11.2 shows
the balance-checking results.

11.4 Homework Problems

11.1 Another version of Theorem 11.1

Prove that

$$
Z \perp \{Y(1), Y(0), X\} \mid e(X, Y(1), Y(0)). \quad (11.4)
$$

Remark: This result holds without assuming strong ignorability. It implies
that

$$
Z \perp \{Y(1), Y(0)\} \mid \{X, e(X, Y(1), Y(0))\}.
$$

Rosenbaum (2020) and Rosenbaum and Rubin (2023) pointed out the result
in (11.4) and called $e(X, Y(1), Y(0))$ the *principal unobserved covariate*.

¹While this is a useful recommendation in practice, it is not entirely clear how to quantify
the objectiveness.![[_resources/Ding - 2023 - A First Course in Causal Inference_Part6/1f1f1673de3dfce3e5dd46b8d6e632ef_MD5.jpg]]

FIGURE 11.2: Balance check: point estimates and 95% confidence intervals of the average causal effect on covariatesTABLE 11.1: Table 1 of Rosenbaum and Rubin (1983a)

<table><thead><tr><th>stratum by e&#x0302;(X)</th><th>treatment</th><th>number of patients</th><th>proportion improved</th></tr></thead><tbody><tr><td rowspan="2">1</td><td>Surgical</td><td>26</td><td>0.54</td></tr><tr><td>Medical</td><td>277</td><td>0.35</td></tr><tr><td rowspan="2">2</td><td>Surgical</td><td>68</td><td>0.70</td></tr><tr><td>Medical</td><td>235</td><td>0.40</td></tr><tr><td rowspan="2">3</td><td>Surgical</td><td>98</td><td>0.70</td></tr><tr><td>Medical</td><td>205</td><td>0.35</td></tr><tr><td rowspan="2">4</td><td>Surgical</td><td>164</td><td>0.71</td></tr><tr><td>Medical</td><td>139</td><td>0.30</td></tr><tr><td rowspan="2">5</td><td>Surgical</td><td>234</td><td>0.70</td></tr><tr><td>Medical</td><td>69</td><td>0.39</td></tr></tbody></table>

## 11.2 Another version of Theorem 11.1

Theorem 11.1 states a result under strong ignorability. An analogous result also holds under ignorability. That is, if ignorability holds conditional on covariates $X$, then it also holds conditional on the scalar propensity score $e(X)$.

**Theorem 11.4** If $Z \perp Y(z) | X$ for $z = 0, 1$, then $Z \perp Y(z) | e(X)$ for $z = 0, 1$.

Prove Theorem 11.4.

## 11.3 More results on the IPW estimators

This is related to the discussion of the HT estimator in Section 11.2.2. First, prove Proposition 11.1. Second, prove

$$
E \left\{ \frac{1}{n} \sum_{i=1}^{n} \frac{Z_i}{e(X_i)} \right\} = 1, \quad E \left\{ \frac{1}{n} \sum_{i=1}^{n} \frac{(1 - Z_i)}{1 - e(X_i)} \right\} = 1.
$$

Third, prove that if we add a constant $c$ to every observed outcome $Y_i$, the Hajek estimator $\hat{\tau}^{\text{hajek}}$ remains the same.

## 11.4 Re-analysis of Rosenbaum and Rubin (1983a)

Table 11.1 is from Rosenbaum and Rubin (1983a), which concerned the causal effect of the coronary artery bypass surgery compared with the medical therapy on the functional improvement 6 months after cardiac catheterization. They first estimated the propensity score based on 74 observed covariates and then formed 5 strata based on the discretized estimated propensity score. Because the treatment is binary and the outcome is also binary, they represented the data in a table. Based on Table 11.1, estimate the average causal effect, and report the 95% confidence interval of the average causal effect.

Remark: If you are interested, you can read the whole paper of Rosenbaumand Rubin (1983a) after reading Part IV of the book. It is a canonical paper
on sensitivity analysis in causal inference.

11.5 Balancing score and propensity score: more theoretical results

Rosenbaum and Rubin (1983b) also introduced the notion of balancing score.

**Definition 11.2 (balancing score) b(X) is a balancing score if**

$$
Z \perp X \mid b(X).
$$

In Definition 11.2, $b(X)$ can be a scalar or a vector. An obvious balancing score is $b(X) = X$, but it is not a useful one without any simplification of the original covariates. By Theorem 11.3, the propensity score is a special balancing score. More interestingly, Rosenbaum and Rubin (1983b) showed that the propensity score is the coarsest balancing score, as in Theorem 11.5 below which includes Theorem 11.3 as a special case.

**Theorem 11.5** *b(X) is a balancing score if and only if b(X) is finer than e(X) in the sense that e(X) = f(b(X)) for some function f(·).*

Theorem 11.5 is relevant in subgroup analysis. In particular, we may be interested in not only the average causal effect $\tau$ but also the subgroup effects. For instance, we may want to estimate the average causal effects among boys and girls, respectively. Without loss of generality, assume the first component of $X$ is the indicator for girls, and we are interested in estimating

$$
\tau(x_1) = E\{Y(1) - Y(0) \mid X_1 = x_1\}, \quad (x_1 = 1, 0).
$$

Theorem 11.5 implies that under ignorability, we also have

$$
Z \perp \{Y(1), Y(0)\} \mid e(X), X_1 \quad (11.5)
$$

because $b(X) = \{e(X), X_1\}$ is finer than $e(X)$ and thus a balancing score.
The conditional independence in (11.5) ensures ignorability holds given the
propensity score, within each level of $X_1$. Therefore, we can perform the same
analysis based on the propensity score, within each level of $X_1$, yielding esti-
mates for two subgroup effects.

With the above motivation in mind, now prove Theorem 11.5.

11.6 Some basics of subgroup effects

This problem is related to Problem 11.5, but you can work on it independently.

Consider a standard observational study with covariates $X = (X_1, X_2)$,
where $X_1$ denotes a binary subgroup indicator (e.g., statistics major or not
statistics major) and $X_2$ contains the rest of the covariates. The parameter of
interest is the subgroup causal effect

$$
\tau(x_1) = E\{Y(1) - Y(0) \mid X_1 = x_1\}, \quad (x_1 = 1, 0).
$$Show that

$$
\tau(x_1) = E \left\{ \frac{1(X_1 = x_1)ZY}{e(X)} - \frac{1(X_1 = x_1)(1-Z)Y}{1-e(X)} \right\} / \text{pr}(X_1 = x_1)
$$

and give the corresponding HT and Hajek estimators for $\tau(x_1)$.

11.7 *Recommended reading*

The title of this chapter is the same as the title of the classic paper by Rosenbaum and Rubin (1983b). Most results in this chapter are directly drawn from their original paper.

Rubin (2007) and Rubin (2008) highlighted the importance of the design stage of observational studies for more objective causal inference12

The Doubly Robust or the Augmented
Inverse Propensity Score Weighting
Estimator for the Average Causal Effect

Under ignorability $Z \perp \{Y(1), Y(0)\} | X$ and overlap $0 < e(X) < 1$, Chapter 11 has shown two identification formulas of the average causal effect $\tau = E\{Y(1) - Y(0)\}$. First, the outcome regression formula is

$$
\tau = E\{\mu_1(X)\} - E\{\mu_0(X)\} \tag{12.1}
$$

where

$$
\begin{align*}
\mu_1(X) &= E\{Y(1) | X\} = E(Y | Z = 1, X), \\
\mu_0(X) &= E\{Y(0) | X\} = E(Y | Z = 0, X)
\end{align*}
$$

are the two conditional mean functions of the outcome given covariates under
the treatment and control, respectively. Second, the IPW formula is

$$
\tau = E \left\{ \frac{ZY}{e(X)} \right\} - E \left\{ \frac{(1-Z)Y}{1-e(X)} \right\} \quad (12.2)
$$

where

$e(X) = \mathrm{pr}(Z = 1 | X)$

is the propensity score introduced in Chapter 11.

The outcome regression estimator requires fitting a model for the outcome
given the treatment and covariates. It is consistent if the outcome model
is correctly specified. The IPW estimator requires fitting a model for the
treatment given the covariates. It is consistent if the propensity score model
is correctly specified.

Mathematically, we have many combinations of (12.1) and (12.2) that lead to different identification formulas of the average causal effect. Below I will discuss a particular combination that has appealing theoretical properties. This combination motivates an estimator that is consistent if either the propensity score or the outcome model is correctly specified. It is called the *doubly robust* estimator, championed by James Robins (Scharfstein et al., 1999; Bang and Robins, 2005).12.1 The doubly robust estimator

12.1.1 Population version

We posit a model for the conditional means of the outcome $\mu_1(X, \beta_1)$ and $\mu_0(X, \beta_0)$, indexed by the parameters $\beta_1$ and $\beta_0$. For example, if the conditional means are linear or logistic under the working model, then the parameters are just the regression coefficients. If the outcome model is correctly specified, then $\mu_1(X, \beta_1) = \mu_1(X)$ and $\mu_0(X, \beta_0) = \mu_0(X)$. We posit a working model for the propensity score $e(X, \alpha)$, indexed by the parameter $\alpha$. For example, if the working model is logistic, then $\alpha$ is the regression coefficient. If the propensity score model is correctly specified, then $e(X, \alpha) = e(X)$. In practice, both models may be misspecified. Sometimes, we call them working models due to the possibility of misspecification.

Define

$$
\tilde{\mu}_1^{\text{dr}} = E \left[ \frac{Z\{Y - \mu_1(X, \beta_1)\}}{e(X, \alpha)} + \mu_1(X, \beta_1) \right], \quad (12.3)
$$

$$
\tilde{\mu}_{0}^{\text{dr}} = E \left[ \frac{(1-Z)\{Y - \mu_{0}(X, \beta_{0})\}}{1 - e(X, \alpha)} + \mu_{0}(X, \beta_{0}) \right], \quad (12.4)
$$

which can also be written as

$$
\tilde{\mu}_1^{\text{dr}} = E \left[ \frac{ZY}{e(X, \alpha)} - \frac{Z - e(X, \alpha)}{e(X, \alpha)} \mu_1(X, \beta_1) \right], \quad (12.5)
$$

$$
\tilde{\mu}_{0}^{\text{dr}} = E \left[ \frac{(1-Z)Y}{1-e(X, \alpha)} - \frac{e(X, \alpha) - Z}{1-e(X, \alpha)} \mu_{0}(X, \beta_{0}) \right]. \quad (12.6)
$$

The formulas in (12.3) and (12.4) augment the outcome regression estima-
tor by inverse propensity score weighting terms of the residuals. The formulas
in (12.5) and (12.6) augment the IPW estimator by the imputed outcomes. For
this reason, the doubly robust estimator is also called the *augmented inverse
propensity score weighting* (AIPW) estimator.

The augmentation strengthens the theoretical properties in the following
sense.

**Theorem 12.1** Assume ignorability $Z \perp \{Y(1), Y(0)\} | X$ and overlap $0 < e(X) < 1$.

1. If either $e(X, \alpha) = e(X)$ or $\mu_1(X, \beta_1) = \mu_1(X)$, then $\tilde{\mu}_1^{\text{dr}} = E\{Y(1)\}$.
2. If either $e(X, \alpha) = e(X)$ or $\mu_0(X, \beta_0) = \mu_0(X)$, then $\tilde{\mu}_0^{\text{dr}} = E\{Y(0)\}$.
3. If either $e(X, \alpha) = e(X)$ or $\{\mu_1(X, \beta_1) = \mu_1(X), \mu_0(X, \beta_0) = \mu_0(X)\}$, then $\tilde{\mu}_1^{\text{dr}} - \tilde{\mu}_0^{\text{dr}} = \tau$.By Theorem 12.1, $\tilde{\mu}_1^{\text{dr}} - \tilde{\mu}_0^{\text{dr}}$ equals $\tau$ if either the propensity score model or the outcome model is correctly specified. That's why it is called the doubly robust estimator.

**Proof of Theorem 12.1:** I only prove the result for $\mu_1 = E\{Y(1)\}$. The proof for the result for $\mu_0 = E\{Y(0)\}$ is similar.

We have the decomposition

$$
\begin{align*}
& \tilde{\mu}_1^{\text{dr}} - E\{Y(1)\} \\
&= E \left[ \frac{Z\{Y(1) - \mu_1(X, \beta_1)\}}{e(X, \alpha)} - \{Y(1) - \mu_1(X, \beta_1)\} \right] && \text{(by definition)} \\
&= E \left[ \frac{Z - e(X, \alpha)}{e(X, \alpha)} \{Y(1) - \mu_1(X, \beta_1)\} \right] && \text{(combining terms)} \\
&= E \left( E \left[ \frac{Z - e(X, \alpha)}{e(X, \alpha)} \{Y(1) - \mu_1(X, \beta_1)\} \mid X \right] \right) && \text{(tower property)} \\
&= E \left[ E \left\{ \frac{Z - e(X, \alpha)}{e(X, \alpha)} \mid X \right\} \times E \{Y(1) - \mu_1(X, \beta_1) \mid X\} \right] && \text{(ignorability)} \\
&= E \left[ \frac{e(X) - e(X, \alpha)}{e(X, \alpha)} \times \{\mu_1(X) - \mu_1(X, \beta_1)\} \right].
\end{align*}
$$

Therefore, $\tilde{\mu}_1^{\text{dr}} - E\{Y(1)\} = 0$ if either $e(X, \alpha) = e(X)$ or $\mu_1(X, \beta_1) = \mu_1(X)$.

□

**12.1.2 Sample version**

Based on the population versions of $\tilde{\mu}_1^{\text{dr}}$ and $\tilde{\mu}_0^{\text{dr}}$, we can obtain their sample analogs to construct a doubly robust estimator for $\tau$.

**Definition 12.1 (doubly robust estimator for the average causal effect)**

Based on the data $(X_i, Z_i, Y_i)_{i=1}^n$, we can obtain a doubly robust estimator for $\tau$ by the following steps:¹

1. obtain the fitted values of the propensity scores: $e(X_i, \hat{\alpha})$;
2. obtain the fitted values of the outcome means: $\mu_1(X_i, \hat{\beta}_1)$ and $\mu_0(X_i, \hat{\beta}_0)$;

3. construct the doubly robust estimator: $\hat{\tau}^{\text{dr}} = \hat{\mu}_1^{\text{dr}} - \hat{\mu}_0^{\text{dr}}$, where

$$
\hat{\mu}_1^{\text{dr}} = \frac{1}{n} \sum_{i=1}^{n} \left[ \frac{Z_i \{Y_i - \mu_1(X_i, \hat{\beta}_1)\}}{e(X_i, \hat{\alpha})} + \mu_1(X_i, \hat{\beta}_1) \right]
$$

and

$$
\hat{\mu}_0^{\text{dr}} = \frac{1}{n} \sum_{i=1}^{n} \left[ \frac{(1 - Z_i) \{Y_i - \mu_0(X_i, \hat{\beta}_0)\}}{1 - e(X_i, \hat{\alpha})} + \mu_0(X_i, \hat{\beta}_0) \right].
$$

¹I used $\hat{e}(X_i)$ for $e(X_i, \hat{\alpha})$ and $\hat{\mu}_z(X_i)$ for $\mu_z(X_i, \hat{\beta}_1)$ before when I did not want to emphasize the parameters in the working models.By Definition 12.1, we can also write the doubly robust estimator as

$$
\hat{\tau}^{\text{dr}} = \hat{\tau}^{\text{reg}} + \frac{1}{n} \sum_{i=1}^{n} \frac{Z_i\{Y_i - \mu_1(X_i, \hat{\beta}_1)\}}{e(X_i, \hat{\alpha})} - \frac{1}{n} \sum_{i=1}^{n} \frac{(1 - Z_i)\{Y_i - \mu_0(X_i, \hat{\beta}_0)\}}{1 - e(X_i, \hat{\alpha})}.
$$

Analogous to (12.5) and (12.6), we can also rewrite it as

$$
\hat{\tau}^{\text{dr}} = \hat{\tau}^{\text{ipw}} - \frac{1}{n} \sum_{i=1}^{n} \frac{Z_i - e(X_i, \hat{\alpha})}{e(X_i, \hat{\alpha})} \mu_1(X_i, \hat{\beta}_1) + \frac{1}{n} \sum_{i=1}^{n} \frac{e(X_i, \hat{\alpha}) - Z_i}{1 - e(X_i, \hat{\alpha})} \mu_0(X_i, \hat{\beta}_0).
$$

Funk et al. (2011) suggested to approximate the variance of $\hat{\tau}^{\text{dr}}$ via the nonparametric bootstrap by resampling from $(Z_i, X_i, Y_i)_{i=1}^n$.

## 12.2 More intuition and theory for the doubly robust estimator

Although the beginning of this chapter claims that the basic identification formulas based on outcome regression and IPW immediately yield infinitely many other identification formulas, the particular forms of the doubly robust estimators in (12.3) and (12.4) are not obvious to come up with. The original motivation for (12.3) and (12.4) was quite theoretical, and relied on something called the *semiparametric efficiency theory* in advanced mathematical statistics (Bickel et al., 1993). It is beyond the level of this book. Below I will give two intuitive perspectives to construct (12.3) and (12.4). Both Sections 12.2.1 and 12.2.2 below focus on the estimation of $E\{Y(1)\}$ since the estimation of $E\{Y(0)\}$ is similar by symmetry.

### 12.2.1 Reducing the variance of the IPW estimator

The IPW estimator for $\mu_1$ based on

$$
\mu_1 = E \left\{ \frac{ZY}{e(X)} \right\}
$$

completely ignores the outcome model of $Y$. It has the advantage of being consistent without assuming any outcome model. However, if the covariates are predictive of the outcome, the residual based on a working outcome model usually has a smaller variance than the outcome even when this working outcome model is wrong. With a possibly misspecified outcome model $\mu_1(X, \beta_1)$, a trivial decomposition holds:

$$
\mu_1 = E\{Y(1)\} = E\{Y(1) - \mu_1(X, \beta_1)\} + E\{\mu_1(X, \beta_1)\}.
$$If we apply the IPW formula to the first term in the above formula viewing $Y(1) - \mu_1(X, \beta_1)$ as a “pseudo potential outcome” under the treatment, we can rewrite the above formula as

$$
\mu_1 = E \left\{ \frac{Z\{Y - \mu_1(X, \beta_1)\}}{e(X)} \right\} + E\{\mu_1(X, \beta_1)\} \quad (12.7)
$$

$$
= E \left\{ \frac{Z\{Y - \mu_1(X, \beta_1)\}}{e(X)} + \mu_1(X, \beta_1) \right\}, \quad (12.8)
$$

which holds if the propensity score model is correct without assuming that the outcome model is correct. Using a working model to improve efficiency is an old idea from survey sampling. Little and An (2004) and Lumley et al. (2011) pointed out its connection with the doubly robust estimator.

### 12.2.2 Reducing the bias of the outcome regression estimator

The discussion in Section 12.2.1 starts with the IPW estimator and improves its efficiency based on a working outcome model. Alternatively, we can also start with an outcome regression estimator based on

$$
\tilde{\mu}_1 = E\{\mu_1(X, \beta_1)\}
$$

which may not be the same as $\mu_1$ since the outcome model may be wrong. The bias of this estimator is $E\{\mu_1(X, \beta_1) - Y(1)\}$, which can be estimated by an IPW estimator

$$
B = E \left\{ \frac{Z\{\mu_1(X, \beta_1) - Y\}}{e(X)} \right\}
$$

if the propensity score model is correct. So a de-biased estimator is $\tilde{\mu}_1 - B$, which is identical to (12.8).

## 12.3 Examples

### 12.3.1 Summary of some canonical estimators for $\tau$

The following R code implements the outcome regression, HT, Hajek, and doubly robust estimators for $\tau$. These estimators can be conveniently implemented based on the fitted values of the `glm` function. The default choice for the propensity score model is the logistic model, and the default choice for the outcome model is the linear model with `out.family = gaussian`². For binary outcomes, we can also specify `out.family = binomial` to fit the logistic model.

²The `glm` function is more general than the `lm` function. With `out.family = gaussian`, `glm` is identical to `lm`.```matlab
OS_est = function(z, y, x, out.family = gaussian,
                  truncps = c(0, 1))
{
    ## fitted propensity score
    pscore   = glm(z ~ x, family = binomial)$fitted.values
    pscore   = pmax(truncps[1], pmin(truncps[2], pscore))

    ## fitted potential outcomes
    outcome1 = glm(y ~ x, weights = z,
                   family = out.family)$fitted.values
    outcome0 = glm(y ~ x, weights = (1 - z),
                   family = out.family)$fitted.values

    ## outcome regression estimator
    ace.reg  = mean(outcome1 - outcome0)

    ## IPW estimators
    y.treat   = mean(z*y/pscore)
    y control  = mean((1 - z)*y/(1 - pscore))
    one.treat  = mean(z/pscore)
    one control = mean((1 - z)/(1 - pscore))
    ace.ipw0    = y.treat - y control
    ace.ipw     = y.treat/one.treat - y control/one control

    ## doubly robust estimator
    res1       = y - outcome1
    res0       = y - outcome0
    r.treat    = mean(z*res1/pscore)
    r control  = mean((1 - z)*res0/(1 - pscore))
    ace.dr      = ace.reg + r.treat - r control

    return(c(ace.reg, ace.ipw0, ace.ipw, ace.dr))
}
```

It is tedious to calculate the analytic formulas for the variances of the above estimators. The bootstrap provides convenient approximations to the variances based on resampling from ${Z_i, X_i, Y_i}_{i=1}^n$. Building upon the function `OS_est` above, the following function returns point estimators as well as the bootstrap standard errors.

```matlab
OS_ATE = function(z, y, x, n boot = 2*10^2,
                  out.family = gaussian, truncps = c(0, 1))
{
    point.est = OS_est(z, y, x, out.family, truncps)

    ## nonparametric bootstrap
    n          = length(z)
    x          = as.matrix(x)
    boot.est  = replicate(n boot, {
        id boot = sample(1:n, n, replace = TRUE)
        OS_est(z[id boot], y[id boot], x[id boot, :],
               out.family, truncps)
    })
``````r
})

boot.se = apply(boot.est, 1, sd)

res = rbind(point.est, boot.se)
rownames(res) = c("est", "se")
colnames(res) = c("reg", "HT", "Hajek", "DR")

return(res)
}
```

### 12.3.2 Simulation

I will use simulation to evaluate the finite-sample properties of the estimators under four scenarios:

1. both the propensity score and outcome models are correct;
2. the propensity score model is wrong but the outcome model is correct;
3. the propensity score model is correct but the outcome model is wrong;
4. both the propensity score and outcome models are wrong.

I will report the average bias, the true standard error, and the average estimated standard error of the estimators over simulation.

In case 1, the data generating process is:

```r
x = matrix(rnorm(n*2), n, 2)
x1 = cbind(1, x)
beta.z = c(0, 1, 1)
pscore = 1/(1 + exp(- as.vector(x1%*beta.z)))
z = rbinom(n, 1, pscore)
beta.y1 = c(1, 2, 1)
beta.y0 = c(1, 2, 1)
y1 = rnorm(n, x1%*beta.y1)
y0 = rnorm(n, x1%*beta.y0)
y = z*y1 + (1 - z)*y0
```

In case 2, I modify the propensity score model to be nonlinear:

```r
x1 = cbind(1, x, exp(x))
beta.z = c(-1, 0, 0, 1, -1)
pscore = 1/(1 + exp(- as.vector(x1%*beta.z)))
```

In case 3, I modify the outcome model to be nonlinear:

```r
beta.y1 = c(1, 0, 0, 0.2, -0.1)
beta.y0 = c(1, 0, 0, -0.2, 0.1)
y1 = rnorm(n, x1%*beta.y1)
y0 = rnorm(n, x1%*beta.y0)
```In case 4, I modify both the propensity score and the outcome model.

We set the sample size to be $n = 500$ and generate 500 independent data
sets according to the data-generating processes above. In case 1,

```
reg      HT   Hajek    DR
ave.bias 0.00  0.02  0.03  0.01
true.se  0.11  0.28  0.26  0.13
est.se   0.10  0.25  0.23  0.12
```

All estimators are nearly unbiased. The two weighting estimators have larger variances. In case 2,

```
reg      HT   Hajek    DR
ave.bias 0.00 -0.76 -0.75 -0.01
true.se  0.12  0.59  0.47  0.18
est.se   0.13  0.50  0.38  0.18
```

The two weighting estimators are severely biased due to the misspecification of the propensity score model. The outcome regression and doubly robust estimators are nearly unbiased.

In case 3,

```
reg      HT   Hajek    DR
ave.bias -0.05  0.00 -0.01  0.00
true.se   0.11  0.15  0.14  0.14
est.se    0.11  0.14  0.13  0.14
```

The outcome regression estimator has a larger bias than the other three estimators due to the misspecification of the outcome model. The weighting and doubly robust estimators are nearly unbiased.

In case 4,

```
reg      HT   Hajek    DR
ave.bias -0.08  0.11 -0.07  0.16
true.se   0.13  0.32  0.20  0.41
est.se    0.13  0.25  0.16  0.26
```

All estimators are biased because both the propensity score and outcome models are wrong. The HT and doubly robust estimator has the largest bias. When both models are wrong, the doubly robust estimator appears to be doubly fragile.

In all the cases above, the bootstrap standard errors are close to the true ones when the estimators are nearly unbiased for the true average causal effect.

### 12.3.3 Applications

Revisiting Example 10.3, we obtain the following estimators and bootstrap standard errors:

```
reg      HT   Hajek    DR
est      -0.017 -1.516 -0.156 -0.019
se       0.230  0.492  0.246  0.233
```The two weighting estimators are much larger than the other two estimators. Truncating the estimated propensity score at [0.1, 0.9], we obtain the following estimators and bootstrap standard errors:

<table><thead><tr><th></th><th>reg</th><th>HT</th><th>Hajek</th><th>DR</th></tr></thead><tbody><tr><td>est</td><td>-0.017</td><td>-0.713</td><td>-0.054</td><td>-0.043</td></tr><tr><td>se</td><td>0.223</td><td>0.422</td><td>0.235</td><td>0.231</td></tr></tbody></table>

The Hajek estimator becomes much closer to the outcome regression and doubly robust estimators, while the Horvitz–Thompson estimator is still an outlier.

## 12.4 Some further discussion

Recall the proof of Theorem 12.1, the key for the double robustness property is the product structure in

$$
\tilde{\mu}_1^{\text{dr}} - E\{Y(1)\} = E \left[ \frac{e(X) - e(X, \alpha)}{e(X, \alpha)} \times \{\mu_1(X) - \mu_1(X, \beta_1)\} \right],
$$

which ensures that the estimation error is zero if either $e(X) = e(X, \alpha)$ or $\mu_1(X) = \mu_1(X, \beta_1)$. This delicate structure renders the doubly robust estimator possibly doubly fragile when both the propensity score and the outcome models are misspecified. The product of two errors multiply to yield potentially much larger errors. The simulation in Chapter 12.3.2 confirms this point.

Kang and Schafer (2007) criticized the doubly robust estimator based on simulation studies. They found that the finite-sample performance of the doubly robust estimator can be even wilder than the simple outcome regression and IPW estimators. Despite the critique from Kang and Schafer (2007), the doubly robust estimator has been a standard strategy in causal inference since the seminal work of Scharfstein et al. (1999). Recently, it was resurrected in the theoretical statistics and econometrics literature with a fancier name “double machine learning” (Chernozhukov et al., 2018). The basic idea is to replace the working models for the propensity score and outcome with machine learning tools which can be viewed as more flexible models than the traditional parametric models.12.5 Homework problems

12.1 A sanity check

Consider the case in which the covariate is discrete $X \in \{1, \dots, K\}$ and the parameter of interest is $\tau$. Without imposing any model assumptions, the estimated propensity score $\hat{e}(X)$ equals $\hat{e}_{[k]} = \text{pr}(Z = 1 | X = k)$, the proportion of units receiving the treatment, and the estimated outcome means are the sample means of the outcomes $\hat{Y}_{[k]}(1) = \hat{E}(Y | Z = 1, X = k)$ and $\hat{Y}_{[k]}(0) = \hat{E}(Y | Z = 0, X = k)$ under treatment, within stratum $X = k$ ($k = 1, \dots, K$). Show that the stratified estimator, outcome regression estimator, HT estimator, Hajek estimator, and doubly robust estimator are all identical numerically.

12.2 An alternative form of the doubly robust estimator for $\tau$

Motivated by (12.7), we have an alternative form of the doubly robust estimator for $\mu_1 = E\{Y(1)\}$:

$$
\tilde{\mu}_1^{\text{dr2}} = \frac{E\left[\frac{Z\{Y - \mu_1(X, \beta_1)\}}{e(X, \alpha)}\right]}{E\left[\frac{Z}{e(X, \alpha)}\right]} + E\{\mu_1(X, \beta_1)\}.
$$

Show that $\tilde{\mu}_1^{\text{dr2}} = \mu_1$ if either $e(X, \alpha) = e(X)$ or $\mu_1(X, \beta_1) = \mu_1(X)$. Give the analogous formula for estimating $\mu_0$. Give the sample analog of the doubly robust estimator for $\tau$ based on these formulas.

Remark: This form of doubly robust estimator appeared in Robins et al. (2007).

12.3 An upper bound of the bias of the doubly robust estimator

Consider the population version of the doubly robust estimator $\tilde{\mu}_1^{\text{dr}}$ for $E\{Y(1)\}$. Show that

$$
|\tilde{\mu}_1^{\text{dr}} - E\{Y(1)\}| \le \sqrt{E\left[\frac{\{e(X) - e(X, \alpha)\}^2}{e(X, \alpha)^2}\right]} \times E\left[\{\mu_1(X) - \mu_1(X, \beta_1)\}^2\right].
$$

Find the analogous upper bound for the bias of $\tilde{\mu}_0^{\text{dr}}$ for $E\{Y(0)\}$.

Remark: You may find Section A.1.4 useful for the proof.

12.4 Data analysis of Example 10.1

Analyze the dataset cps1re74.csv using the methods discussed so far.12.5 *Homework problems*

12.5 *Analyzing a dataset from the Karolinska Institute*

Rubin (2008) used the dataset karolinska.txt to illustrate the ideas of causal
inference in observational studies. The dataset has 158 cardia cancer patients
diagnosed between 1988 and 1995 in Central and Northern Sweden, 79 diag-
nosed at large volume hospitals, defined as treating more than ten patients
with cardia cancer during that period, and 79 diagnosed at the remaining
small volume hospitals. The treatment z is the indicator of whether a patient
was diagnosed at a large volume hospital. The outcome y is whether the pa-
tient survived longer than 1 year after the diagnosis. The covariates x contain
information about age, whether a patient was from a rural area, and whether
a patient was male.

karolinska = read.table("karolinska.txt", header = TRUE)
z = karolinska$hvdiag
y = 1 - (karolinska$year.survival == 1)
x = as.matrix(karolinska[, c(3, 4, 5)])

Analyze the dataset using the methods discussed so far.

12.6 *Recommended reading*

Lunceford and Davidian (2004) gave a review and comparison of many meth-
ods discussed in Chapters 11 and 12.—13

The Average Causal Effect on the Treated
Units and Other Estimands

Chapters 10–12 focused on the identification and estimation of the average
causal effect $\tau = E\{Y(1) - Y(0)\}$ under the ignorability and overlap as-
sumptions. Conceptually, it is straightforward to extend the discussion to the
average causal effects on the treated and control units:

$$
\begin{align*}
\tau_T &= E\{Y(1) - Y(0) \mid Z = 1\}, \\
\tau_C &= E\{Y(1) - Y(0) \mid Z = 0\}.
\end{align*}
$$

If $\tau_T$ and $\tau_C$ differ from $\tau$, then the average causal effects are heterogeneous
across the treatment and control groups. Whether we should estimate $\tau_T$, $\tau_C$
or $\tau$ depends on the practical question of interest.

Because of the symmetry, this chapter focuses on $\tau_T$. Chapter 13.4 also
discusses extensions to other estimands.

**13.1 Nonparametric identification of τ<sub>T</sub>**

The average causal effect on the treated units equals

$$
\tau_T = E(Y | Z = 1) - E\{Y(0) | Z = 1\},
$$

where the first term $E(Y | Z = 1)$ is directly identifiable from the data and
the second term $E\{Y(0) | Z = 1\}$ is counterfactual. The key assumption to
identify the second term is the following ignorability and overlap assumptions.

$$
\textbf{Assumption 13.1} \quad Z \perp Y(0) \mid X \text{ and } e(X) < 1.
$$

Because the key is to identify $E\{Y(0) | Z = 1\}$, we only need the “one-sided” ignorability and overlap assumptions. Under Assumption 13.1, we have the following identification result for $\tau_T$.

**Theorem 13.1** *Under Assumption 13.1, we have*

$$
\begin{align*}
E\{Y(0) | Z = 1\} &= E\{E(Y | Z = 0, X) | Z = 1\} \\
&= \int E(Y | Z = 0, X = x)f(x | Z = 1)dx.
\end{align*}
$$18213 The Average Causal Effect on the Treated Units and Other Estimands

By Theorem 13.1 the counterfactual mean $E\{Y(0) | Z = 1\}$ equals the conditional mean of the observed outcomes under the control, averaged over the distribution of the covariates under the treatment. It implies that $\tau_T$ is nonparametrically identified by

$$
\tau_T = E(Y | Z = 1) - E\{E(Y | Z = 0, X) | Z = 1\} \quad (13.1)
$$

**Proof of Theorem 13.1:** We have

$$
\begin{align*}
E\{Y(0) | Z = 1\} &= E[E\{Y(0) | Z = 1, X\} | Z = 1] \\
&= E[E\{Y(0) | Z = 0, X\} | Z = 1] \\
&= E\{E(Y | Z = 0, X) | Z = 1\} \\
&= \int E(Y | Z = 0, X = x)f(x | Z = 1)dx.
\end{align*}
$$

□

With a discrete $X$, the identification formula in Theorem 13.1 reduces to

$$
E\{Y(0) | Z = 1\} = \sum_{k=1}^{K} E(Y | Z = 0, X = k)\mathrm{pr}(X = k | Z = 1),
$$

motivating the following stratified estimator for $\tau_T$:

$$
\hat{\tau}_T = \hat{Y}(1) - \sum_{k=1}^{K} \hat{\pi}_{[k]|1} \hat{Y}_{[k]}(0),
$$

where $\hat{\pi}_{[k]|1} = n_{[k]|1}/n_1$ is the proportion of category $k$ of $X$ among the treated units.

For continuous $X$, we need to fit an outcome model for $E(Y | Z = 0, X)$ using the control units. If the fitted values for the control potential outcomes are $\hat{\mu}_0(X_i)$, then the outcome regression estimator is

$$
\hat{\tau}_{\mathrm{T}}^{\mathrm{reg}} = \hat{Y}(1) - n_{1}^{-1} \sum_{i=1}^{n} Z_{i} \hat{\mu}_{0}(X_{i}) = n_{1}^{-1} \sum_{i=1}^{n} Z_{i} \{Y_{i} - \hat{\mu}_{0}(X_{i})\}.
$$

**Example 13.1** If we specify a linear model for all units

$$
E(Y | Z, X) = \beta_0 + \beta_z Z + \beta_x^\top X,
$$

then

$$
\begin{align*}
\tau_T &= E\{E(Y | Z = 1, X) - E(Y | Z = 0, X) | Z = 1\} \\
&= \beta_z.
\end{align*}
$$

If we run OLS to obtain $(\hat{\beta}_0, \hat{\beta}_z, \hat{\beta}_x)$, then we can use $\hat{\beta}_z$ to estimate $\tau_T$. Section 10.4.2 shows that $\hat{\beta}_z$ is an estimator for $\tau$, and this example further shows that $\hat{\beta}_z$ is an estimator for $\tau_T$. This is not surprising because the linear model assumes constant causal effects across units.13.2 Inverse propensity score weighting and doubly robust estimation of $\tau_T$ 183

**Example 13.2** The identification formula depends only on $E(Y | Z = 0, X)$, so we need only to specify a model for the control units. When this model is linear,

$$
E(Y | Z = 0, X) = \beta_{0|0} + \beta_{x|0}^{\top} X,
$$

we have

$$
\tau_T = E(Y | Z = 1) - E(\beta_{0|0} + \beta_{x|0}^{\top} X | Z = 1) \\ = E(Y | Z = 1) - \beta_{0|0} - \beta_{x|0}^{\top} E(X | Z = 1).
$$

If we run OLS with only the control units to obtain $(\hat{\beta}_{0|0}, \hat{\beta}_{x|0})$, then the estimator is

$$
\hat{\tau}_T = \hat{Y}(1) - \hat{\beta}_{0|0} - \hat{\beta}_{x|0}^{\top} \hat{X}(1).
$$

Using the property of the OLS (see B.5), we have

$$
\hat{Y}(0) = \hat{\beta}_{0|0} + \hat{\beta}_{x|0}^{\top} \hat{X}(0).
$$

Therefore, the above estimator reduces to

$$
\hat{\tau}_T = \{\hat{Y}(1) - \hat{Y}(0)\} - \hat{\beta}_{0|0}^{\top} \{\hat{X}(1) - \hat{X}(0)\},
$$

which is similar to (\ref{eq:propensity score difference}) with a different coefficient for the difference in means of the covariates.

As an algebraic fact, we can show that this estimator equals the coefficient of $Z$ in the OLS fit of the outcome on the treatment, covariates, and their interactions, with the covariates centered as $X_i - \hat{X}(1)$. See Problem 13.2 for more details.

## 13.2 Inverse propensity score weighting and doubly robust estimation of $\tau_T$

**Theorem 13.2** Under Assumption 13.1, we have

$$
E\{Y(0) | Z = 1\} = E \left\{ \frac{e(X)}{e} \frac{1-Z}{1-e(X)} Y \right\} \quad (13.2)
$$

and

$$
\tau_T = E(Y | Z = 1) - E \left\{ \frac{e(X)}{e} \frac{1-Z}{1-e(X)} Y \right\}, \quad (13.3)
$$

where $e = \text{pr}(Z = 1)$ is the marginal probability of the treatment.18413 *The Average Causal Effect on the Treated Units and Other Estimands*

**Proof of Theorem 13.2:** The left-hand side of (13.2) equals

$$
\begin{align*}
E\{Y(0) | Z = 1\} &= E\{ZY(0)\}/e \\
&= E[E(Z | X)E\{Y(0) | X\}]/e \\
&= E[e(X)E\{Y(0) | X\}]/e.
\end{align*}
$$

The right-hand side of (13.2) equals

$$
\begin{align*}
E \left\{ \frac{e(X)}{e} \frac{1-Z}{1-e(X)} Y \right\}
&= E \left[ E \left\{ \frac{e(X)}{e} \frac{1-Z}{1-e(X)} Y(0) \mid X \right\} \right] \\
&= E \left[ \frac{e(X)}{e\{1-e(X)\}} E \left\{ (1-Z)Y(0) \mid X \right\} \right] \\
&= E \left[ \frac{e(X)}{e\{1-e(X)\}} E(1-Z \mid X) E \{Y(0) \mid X\} \right] \\
&= E[e(X)E\{Y(0) \mid X\}]/e.
\end{align*}
$$

So (13.2) holds.

□

We have two IPW estimators

$$
\hat{\tau}_{\text{T}}^{\text{ht}} = \hat{Y}(1) - n_{1}^{-1} \sum_{i=1}^{n} \hat{o}(X_{i})(1 - Z_{i})Y_{i}
$$

and

$$
\hat{\tau}_{\text{T}}^{\text{hajek}} = \hat{Y}(1) - \frac{\sum_{i=1}^{n} \hat{o}(X_i)(1 - Z_i)Y_i}{\sum_{i=1}^{n} \hat{o}(X_i)(1 - Z_i)},
$$

where $\hat{o}(X_i) = \hat{e}(X_i)/\{1 - \hat{e}(X_i)\}$ is the fitted odds of the treatment given covariates.

We also have a doubly robust estimator for $E\{Y(0) | Z = 1\}$ which combines the propensity score and the outcome models. Define

$$
\tilde{\mu}_{0T}^{\text{dr}} = E \left[ o(X, \alpha)(1-Z) \{Y - \mu_0(X, \beta_0)\} + Z\mu_0(X, \beta_0) \right] / e, \quad (13.4)
$$

where $o(X, \alpha) = e(X, \alpha)/\{1 - e(X, \alpha)\}$.

**Theorem 13.3** *Under Assumption 13.1, if either $e(X, \alpha) = e(X)$ or $\mu_0(X, \beta_0) = \mu_0(X)$, then $\mu_{0T}^{dr} = E\{Y(0) | Z = 1\}$.***Proof of Theorem 13.3:** We have the decomposition

$$
\begin{align*}
& e[\tilde{\mu}_{0T}^{\text{dr}} - E\{Y(0) | Z = 1\}] \\
&= E[o(X, \alpha)(1-Z)\{Y(0) - \mu_0(X, \beta_0)\} + Z\mu_0(X, \beta_0)] - E\{ZY(0)\} \\
&= E[o(X, \alpha)(1-Z)\{Y(0) - \mu_0(X, \beta_0)\} - Z\{Y(0) - \mu_0(X, \beta_0)\}] \\
&= E[{o(X, \alpha)(1-Z) - Z}\{Y(0) - \mu_0(X, \beta_0)\}] \\
&= E\left[\frac{e(X, \alpha) - Z}{1 - e(X, \alpha)}\{Y(0) - \mu_0(X, \beta_0)\}\right] \\
&= E\left[E\left\{\frac{e(X, \alpha) - Z}{1 - e(X, \alpha)} \mid X\right\} \times E\{Y(0) - \mu_0(X, \beta_0) \mid X\}\right] \\
&= E\left[\frac{e(X, \alpha) - e(X)}{1 - e(X, \alpha)} \times \{\mu_0(X) - \mu_0(X, \beta_0)\}\right].
\end{align*}
$$

Therefore, $\tilde{\mu}_{0T}^{\text{dr}} - E\{Y(0) | Z = 1\} = 0$ if either $e(X, \alpha) = e(X)$ or $\mu_0(X, \beta_0) = \mu_0(X)$. $\square$

Based on the population versions of $\tilde{\mu}_{0T}^{\text{dr}}$ in (13.4), we can obtain its sample version to construct a doubly robust estimator for $\tau_T$.

**Definition 13.1 (doubly robust estimator for $\tau_T$)** *Based on the data* $(X_i, Z_i, Y_i)_{i=1}^n$, we can obtain a doubly robust estimator for $\tau_T$ by the following steps:

1. obtain the fitted values of the propensity scores $e(X_i, \hat{\alpha})$ and then obtain the fitted values of the odds $o(X_i, \hat{\alpha}) = e(X_i, \hat{\alpha})/(1 - e(X_i, \hat{\alpha}))$;

2. obtain the fitted values of the outcome mean under control $\mu_0(X_i, \hat{\beta}_0)$;

3. construct the doubly robust estimator: $\hat{\tau}_T^{\text{dr}} = \hat{Y}(1) - \hat{\mu}_{0T}^{\text{dr}}$, where

$$
\hat{\mu}_{0T}^{\text{dr}} = \frac{1}{n_1} \sum_{i=1}^{n} \left[ o(X_i, \hat{\alpha})(1 - Z_i)\{Y_i - \mu_0(X_i, \hat{\beta}_0)\} + Z_i \mu_0(X_i, \hat{\beta}_0) \right].
$$

By Definition 13.1, we can rewrite $\hat{\tau}_T^{\text{dr}}$ as

$$
e(X_i, \hat{\alpha}) = \hat{\tau}_T^{\text{reg}} - \frac{1}{n_1} \sum_{i=1}^{n} o(X_i, \hat{\alpha})(1 - Z_i)\{Y_i - \mu_0(X_i, \hat{\beta}_0)\}
$$

or

$$
e(X_i, \hat{\alpha}) = \hat{\tau}_T^{\text{ht}} - \frac{1}{n_1} \sum_{i=1}^{n} \{o(X_i, \hat{\alpha})(1 - Z_i) + Z_i\}\mu_0(X_i, \hat{\beta}_0).
$$

Similar to the discussion of $\hat{\tau}^{\text{dr}}$, we can estimate the variance of $\hat{\tau}_T^{\text{dr}}$ via the bootstrap by resampling from $(Z_i, X_i, Y_i)_{i=1}^n$. Hahn (1998), Mercatanti and Li (2014), Shinozaki and Matsuyama (2015) and Yang and Ding (2018b) are references on the estimation of $\tau_T$.13.3 An example

The following R function implements two outcome regression estimators, two
IPW estimators, and the doubly robust estimator for τ_T. To avoid extreme
estimated propensity scores, we can also truncate them from the above.

```R
ATT.est = function(z, y, x, out.family = gaussian, Utruncps = 1)
{
  ## sample size
  nn = length(z)
  nn1 = sum(z)

  ## fitted propensity score
  pscore = glm(z ~ x, family = binomial)$fitted.values
  pscore = pmin(Utruncps, pscore)
  odds = pscore/(1 - pscore)

  ## fitted potential outcomes
  outcome0 = glm(y ~ x, weights = (1 - z),
                 family = out.family)$fitted.values

  ## outcome regression estimator
  ace.reg0 = lm(y ~ z + x)$coef[2]
  ace.reg = mean(y[z==1]) - mean(outcome0[z==1])

  ## propensity score weighting estimator
  ace.ipw0 = mean(y[z==1]) -
    mean(odds*(1 - z)*y)*nn/nn1
  ace.ipw = mean(y[z==1]) -
    mean(odds*(1 - z)*y)/mean(odds*(1 - z))

  ## doubly robust estimator
  res0 = y - outcome0
  ace.dr = ace.reg - mean(odds*(1 - z)*res0)*nn/nn1

  return(c(ace.reg0, ace.reg, ace.ipw0, ace.ipw, ace.dr))
}
```

The following R function further implements the bootstrap variance esti-
mators.

```R
OS_ATT = function(z, y, x, n boot = 10^2,
                 out.family = gaussian, Utruncps = 1)
{
  point.est = ATT.est(z, y, x, out.family, Utruncps)

  ## nonparametric bootstrap
  n = length(z)
  x = as.matrix(x)
  boot.est = replicate(n boot, {
    id boot = sample(1:n, n, replace = TRUE)
```ATT.est(z[id boot], y[id boot], x[id boot, ],
         out.family, Utruncps)
})

boot.se = apply(boot.est, 1, sd)

res = rbind(point.est, boot.se)
rownames(res) = c("est", "se")
colnames(res) = c("reg0", "reg", "HT", "Hajek", "DR")

return(res)
}

Now we re-analyze the data in Example 10.3 to estimate $\tau_T$. We obtain

reg0 reg HT Hajek DR
est 0.061 -0.351 -1.992 -0.351 -0.187
se 0.227 0.258 0.705 0.328 0.287

without truncating the estimated propensity scores, and

reg0 reg HT Hajek DR
est 0.061 -0.351 -0.597 -0.192 -0.230
se 0.223 0.255 0.579 0.302 0.276

by truncating the estimated propensity scores from the above at 0.9. The HT estimator is sensitive to the truncation as expected. The regression estimator in Example 13.1 is quite different from other estimators. It imposes an unnecessary assumption that the regression functions in the treatment and control group share the same coefficient of X. The regression estimator in Example 13.2 is much closer to the Hajek and doubly robust estimators. The estimates above are slightly different from those in Section 12.3.3, suggesting the existence of treatment effect heterogeneity across $\tau_T$ and $\tau$.

13.4 Other estimands

Li et al. (2018a) gave a unified discussion of the causal estimands in observational studies. Starting from the conditional average causal effect $\tau(X)$, they proposed a general class of estimands

$$
\tau^h = \frac{E\{h(X)\tau(X)\}}{E\{h(X)\}}
$$

indexed by a weighting function $h(X)$ with $E\{h(X)\} \neq 0$. The normalization
in the denominator is to ensure that a constant causal effect $\tau(X) = \tau$ averages
to the same $\tau$.18813 *The Average Causal Effect on the Treated Units and Other Estimands*

Under ignorability,

$$
\tau^h = \frac{E[h(X)\{\mu_1(X) - \mu_0(X)\}]}{E\{h(X)\}}
$$

which motivates the outcome regression estimator

$$
\hat{\tau}^h = \frac{\sum_{i=1}^{n} h(X_i)\{\hat{\mu}_1(X_i) - \hat{\mu}_0(X_i)\}}{\sum_{i=1}^{n} h(X_i)}
$$

Moreover, we can show that $\tau^h$ has the following weighting form:

**Theorem 13.4** *Under the ignorability and overlap assumption, we have*

$$
\tau^h = E \left\{ \frac{ZYh(X)}{e(X)} - \frac{(1-Z)Yh(X)}{1-e(X)} \right\} / E\{h(X)\}.
$$

The proof of Theorem 13.4 is similar to those of Theorems 11.2 and 13.2 which is relegated to Problem 13.9. Based on Theorem 13.4, we can construct the corresponding IPW estimator for $\tau^h$.

By Theorem 13.4, each unit is associated with the weight due to the definition of the estimand as well as the weight due to the inverse of the propensity score. Finally, the treated units are weighted by $h(X)/e(X)$ and the control units are weighted by $h(X)/\{1 - e(X)\}$. Li et al. (2018a, Table 1) summarized several estimands, and I present a part of it below:

<table><thead><tr><th>population</th><th><i>h</i>(<i>X</i>)</th><th>estimand</th><th>weights</th></tr></thead><tbody><tr><td>combined</td><td>1</td><td>&tau;</td><td>1/<i>e</i>(<i>X</i>) and 1/{1 &minus; <i>e</i>(<i>X</i>)}</td></tr><tr><td>treated</td><td><i>e</i>(<i>X</i>)</td><td>&tau;<sub>T</sub></td><td>1 and <i>e</i>(<i>X</i>)/{1 &minus; <i>e</i>(<i>X</i>)}</td></tr><tr><td>control</td><td>1 &minus; <i>e</i>(<i>X</i>)</td><td>&tau;<sub>C</sub></td><td>{1 &minus; <i>e</i>(<i>X</i>)}/<i>e</i>(<i>X</i>) and 1</td></tr><tr><td>overlap</td><td><i>e</i>(<i>X</i>){1 &minus; <i>e</i>(<i>X</i>)}</td><td>&tau;<sub>O</sub></td><td>1 &minus; <i>e</i>(<i>X</i>) and <i>e</i>(<i>X</i>)</td></tr></tbody></table>

The overlap population and the corresponding estimand

$$
\tau_O = \frac{E[e(X)\{1 - e(X)\}\tau(X)]}{E[e(X)\{1 - e(X)\}]}
$$

is new to us. This estimand has the largest weight for units with $e(X) = 1/2$ and down weights the units with extreme propensity scores. A nice feature of this estimand is that its IPW estimator is stable without the possibly extremely small values of $e(X)$ and $1 - e(X)$ in the denominator. If $e(X) \perp \tau(X)$ including the special case of $\tau(X) = \tau$, the parameter $\tau_O$ reduces to $\tau$. In general, however, the estimand $\tau_O$ may cause controversy because it changes the initial population and depends on the propensity score which may be misspecified in practice. Li et al. (2018a) and Li et al. (2019) gave some justifications and numerical evidence. This estimand will appear again in Chapter 14.

We can also construct the doubly robust estimator for $\tau^h$. I relegate the details to Problem 13.10.13.5 Homework Problems

13.1 Comparing $\tau_T$, $\tau_C$, and $\tau$

Assume $Z \perp \{Y(1), Y(0)\} | X$. Recall $e(X) = \text{pr}(Z = 1 | X)$ is the propensity score, $e = \text{pr}(Z = 1)$ is the marginal probability of the treatment, and $\tau(X) = E\{Y(1) - Y(0) | X\}$ is the CATE. Show that

$$
\tau_T - \tau = \frac{\operatorname{cov}\{e(X), \tau(X)\}}{e}, \quad \tau_C - \tau = -\frac{\operatorname{cov}\{e(X), \tau(X)\}}{1-e}.
$$

Remark: The results above also imply that $\tau_T - \tau_C = \operatorname{cov}\{e(X), \tau(X)\} / \{e(1-e)\}$. So the differences among $\tau_T$, $\tau_C$, $\tau$ depend on the covariance between the propensity score and CATE. When $e(X)$ and $\tau(X)$ are uncorrelated, their differences are 0.

13.2 An algebraic fact about a regression estimator for $\tau_T$

This problem provides more details for Example 13.2.

Show that if we center the covariates by $X_i - \hat{X}(1)$ for all units, then $\hat{\tau}_T$ equals the coefficient of $Z$ in the OLS fit of the outcome on the intercept, the treatment, covariates, and their interactions.

13.3 Simulation for the average causal effect on the treated units

Chapter 12 ran some simulation studies for $\tau$. Run similar simulation studies for $\tau_T$ with either correct or incorrect propensity score or outcome models.

You can choose different model parameters, a larger number of simulation settings, and a larger number of bootstrap replicates. Report your findings, including at least the bias, variance, and variance estimator via the bootstrap. You can also report other properties of the estimators, for example, the asymptotic Normality and the coverage rates of the confidence intervals.

13.4 An alternative form of the doubly robust estimator for $\tau_T$

Motivated by (13.4), we have an alternative form of doubly robust estimator for $E\{Y(0) | Z = 1\}$:

$$
\tilde{\mu}_{0T}^{\text{dr2}} = \frac{E[o(X, \alpha)(1-Z)\{Y - \mu_0(X, \beta_0)\}]}{E[o(X, \alpha)(1-Z)]} + E\{Z\mu_0(X, \beta_0)\}/e.
$$

Show that under Assumption 13.1, $\tilde{\mu}_{0T}^{\text{dr2}} = E\{Y(0) | Z = 1\}$ if either $e(X, \alpha) = e(X)$ or $\mu_0(X, \beta_0) = \mu_0(X)$. Give the sample analog of the doubly robust estimator for $\tau_T$.19013 *The Average Causal Effect on the Treated Units and Other Estimands*

13.5 *Average causal effect on the control units*

Prove the identification formulas for $\tau_C$, analogous to (13.1) and (13.3). Pro-
pose the doubly robust estimator for $\tau_C$.

13.6 *Estimating individual effect and conditional average causal effect*

Assume that {$Z_i, X_i, Y_i(1), Y_i(0)$}$_{i=1}^n$ $\stackrel{\text{IID}}{\sim}$ {$Z, X, Y(1), Y(0)$}. The individual
effect is $\tau_i = Y_i(1) - Y_i(0)$ and the conditional average causal effect is $\tau(X_i) =$
$E\{Y_i(1) - Y_i(0) \mid X_i\}$. Since we will discuss the individual effect, we do not
drop the subscript $i$ since $\tau$ means the average causal effect, not the population
version of $Y(1) - Y(0)$.

1. Under randomization with $Z_i \perp \{Y_i(1), Y_i(0)\}$ and $e = \Pr(Z_i = 1)$,
show that

$$
\delta_i = \frac{Z_i Y_i}{e} - \frac{(1 - Z_i) Y_i}{1 - e}
$$

is an unbiased predictor of the individual effect in the sense that

$$
E(\delta_i - \tau_i) = 0 \quad (i = 1, \dots, n).
$$

Further show that $E(\delta_i) = \tau$ for all $i = 1, \dots, n$.

2. Under ignorability with $Z_i \perp \{Y_i(1), Y_i(0)\} \mid X_i$ and $e(X_i) =$ $\Pr(Z_i = 1 \mid X_i)$, show that

$$
\delta_i = \frac{Z_i Y_i}{e(X_i)} - \frac{(1 - Z_i) Y_i}{1 - e(X_i)}
$$

is an unbiased predictor of the individual effect and the conditional
average causal effect in the sense that

$$
E(\delta_i - \tau_i) = 0, \quad E\{\delta_i - \tau(X_i)\} = 0, \quad (i = 1, \dots, n).
$$

Further show that $E(\delta_i) = \tau$ for all $i = 1, \dots, n$.

13.7 General estimand and ($\tau_{\mathrm{T}}$,$\tau_{\mathrm{C}}$)

Assume unconfoundedness. Show that $\tau^h = \tau_T$ if $h(X) = e(X)$, and $\tau^h = \tau_C$
if $h(X) = 1 - e(X)$.

13.8 More on $\tau_O$

Show that

$$
\tau_O = \frac{E[\{1 - e(X)\}\tau(X) \mid Z = 1]}{E\{1 - e(X)\} \mid Z = 1} = \frac{E\{e(X)\tau(X) \mid Z = 0\}}{E\{e(X)\} \mid Z = 0}.
$$

13.9 IPW for the general estimand

Prove Theorem 13.4.13.10 Doubly robust estimation for general estimand

For a given $h(X)$, we have the following formulas for constructing the doubly
robust estimator for $\tau^h$:

$$
\tilde{\mu}_1^{h,\text{dr}} = E \left[ \frac{Zh(X)\{Y - \mu_1(X, \beta_1)\}}{e(X, \alpha)} + h(X)\mu_1(X, \beta_1) \right],
$$

$$
\tilde{\mu}_{0}^{h,dr} = E \left[ \frac{(1 - Z)h(X)\{Y - \mu_{0}(X, \beta_{0})\}}{1 - e(X, \alpha)} + h(X)\mu_{0}(X, \beta_{0}) \right].
$$

Show that under ignorability and overlap,

1. if either $e(X, \alpha) = e(X)$ or $\mu_1(X, \beta_1) = \mu_1(X)$, then $\tilde{\mu}_1^{h,dr} = E\{h(X)Y(1)\}$;
2. if either $e(X, \alpha) = e(X)$ or $\mu_0(X, \beta_0) = \mu_0(X)$, then $\tilde{\mu}_0^{h,dr} = E\{h(X)Y(0)\}$;
3. if either $e(X, \alpha) = e(X)$ or $\{\mu_1(X, \beta_1) = \mu_1(X), \mu_0(X, \beta_0) = \mu_0(X)\}$, then
$$ \frac{\tilde{\mu}_1^{h,dr} - \tilde{\mu}_0^{h,dr}}{E\{h(X)\}} = \tau^h. $$

Remark: Tao and Fu (2019) proved the above results. However, they hold only for a given $h(X)$. The most interesting cases of $\tau_{\text{T}}$, $\tau_{\text{C}}$ and $\tau_{\text{O}}$ all have weight depending on the propensity score $e(X)$, which must be estimated in the first place. The above formulas do not apply to constructing the doubly robust estimators for $\tau_{\text{T}}$ and $\tau_{\text{C}}$; there does not exist a doubly robust estimator for $\tau_{\text{O}}$.

13.11 Analyzing a dataset from the Karolinska Institute

Revisit Problem 12.5. Estimate $\tau_T$ based on the methods introduced in this Chapter.

13.12 *Recommended reading*

Shinozaki and Matsuyama (2015) focused on $\tau_T$, and Li et al. (2018a) discussed general $\tau^h$.—14

Using the Propensity Score in Regressions
for Causal Effects

Since Rosenbaum and Rubin (1983b)'s seminal paper, many creative uses of the propensity score have appeared in the literature (e.g., Bang and Robins, 2005; Robins et al., 2007; Van der Laan and Rose, 2011; Vansteelandt and Daniel, 2014). This chapter discusses two simple methods to use the propensity score:

1. including the propensity score as a covariate in regressions;
2. running regressions weighted by the inverse of the propensity score.

I choose to focus on these two methods because of the following reasons:

1. they are easy to implement, and involve only standard statistical software packages for regressions;
2. their properties are comparable to many more complex methods;
3. they can be easily extended to allow for flexible statistical models including machine learning algorithms.

**14.1 Regressions with the propensity score as a covariate**

By Theorem 11.1, if ignorability holds conditioning on $X$, then it also holds
conditioning on $e(X)$:

$$
Z \perp \{Y(1), Y(0)\} | e(X).
$$

Analogous to (10.6), $\tau$ is also nonparametrically identified by

$$
\tau = E\left[ E\{Y \mid Z = 1, e(X)\} - E\{Y \mid Z = 0, e(X)\} \right],
$$

which motivates methods based on regressions of $Y$ on $Z$ and $e(X)$.

The simplest regression specification is the OLS fit of $Y$ on $\{1, Z, e(X)\}$,
with the coefficient of $Z$ as an estimator, denoted by $\tau_e$. For simplicity, I will
discuss the population OLS:

$$
\arg\min_{a,b,c} E\{Y - a - bZ - ce(X)\}^2
$$with $\tau_e$ defined as the coefficient of $Z$. It is consistent for $\tau$ if we have a correct propensity score model and the outcome model is indeed linear in $Z$ and $e(X)$. The more interesting result is that $\tau_e$ estimates $\tau_O$ introduced in Chapter 13.4 if we have a correct propensity score model even if the outcome model is completely misspecified.

**Theorem 14.1** If $Z \perp \{Y(1), Y(0)\} | X$, then the coefficient of $Z$ in the population OLS fit of $Y$ on $\{1, Z, e(X)\}$ equals

$$
\tau_e = \tau_O = \frac{E\{h_O(X)\tau(X)\}}{E\{h_O(X)\}},
$$

recalling that $h_O(X) = e(X)\{1 - e(X)\}$ and $\tau(X) = E\{Y(1) - Y(0) | X\}$.

An unusual feature of Theorem 14.1 is that the overlap condition is not needed anymore. Even if some units have propensity score $e(X)$ equaling 0 or 1, their associated weight $e(X)\{1 - e(X)\}$ is zero so they do not contribute anything to the final parameter $\tau_O$.

**Proof of Theorem 14.1:** I will use the FWL theorem reviewed in Section B.3 to prove Theorem 14.1. By the FWL theorem, we can obtain $\tau_e$ in two steps:

1. we obtain the residual $\tilde{Z}$ from the OLS fit of $Z$ on $\{1, e(X)\}$;
2. we obtain $\tau_e$ from the OLS fit of $Y$ on $\tilde{Z}$.

We can use the result on covariance in Chapter A.1.5 to simplify the coefficient of $e(X)$ in the OLS fit of $Z$ on $\{1, e(X)\}$ is

$$
\begin{aligned} \frac{\operatorname{cov}\{Z, e(X)\}}{\operatorname{var}\{e(X)\}} &= \frac{E[\operatorname{cov}\{Z, e(X) \mid X\}] + \operatorname{cov}\{E(Z \mid X), e(X)\}}{\operatorname{var}\{e(X)\}} \\ &= \frac{0 + \operatorname{var}\{e(X)\}}{\operatorname{var}\{e(X)\}} = 1, \end{aligned}
$$

so the intercept is $E(Z) - E\{e(X)\} = 0$ and the residual is $\tilde{Z} = Z - e(X)$. This makes sense since $Z - e(X)$ is uncorrelated with any function of $X$.

Therefore, we can obtain $\tau_e$ from the univariate OLS fit of $Y$ on a centered variable $Z - e(X)$:

$$
\tau_e = \frac{\operatorname{cov}\{Z - e(X), Y\}}{\operatorname{var}\{Z - e(X)\}}.
$$

The denominator simplifies to

$$
\begin{aligned} \operatorname{var}\{Z - e(X)\} &= E\{Z - e(X)\}^2 \\ &= E\{Z + e(X)^2 - 2Ze(X)\} \\ &= E\{e(X) + e(X)^2 - 2e(X)^2\} \\ &= E\{h_O(X)\}. \end{aligned}
$$The numerator simplifies to

$$
\begin{align*}
& \operatorname{cov}\{Z - e(X), Y\} \\
&= E[\{Z - e(X)\}Y] \\
&= E[\{Z - e(X)\}ZY(1)] + E[\{Z - e(X)\}(1 - Z)Y(0)] \\
& \qquad \text{(by } Y = ZY(1) + (1 - Z)Y(0)\text{)} \\
&= E[\{Z - Ze(X)\}Y(1)] - E[e(X)(1 - Z)Y(0)] \\
&= E[Z\{1 - e(X)\}Y(1)] - E[e(X)(1 - Z)Y(0)] \\
&= E[e(X)\{1 - e(X)\}\mu_1(X)] - E[e(X)\{1 - e(X)\}\mu_0(X)] \\
& \qquad \text{(tower property and ignorability)} \\
&= E\{h_O(X)\tau(X)\}.
\end{align*}
$$

The conclusion follows.

□

From the proof of Theorem 14.1, we can simply run the OLS of $Y$ on the
centered treatment $Z - e(X)$. Lee (2018) proposed this procedure. Moreover,
we can also include $X$ in the OLS fit which may improve efficiency in finite
samples. However, this does not change the estimand, which is still $\tau_O$. I
summarize these two results in the corollary below.

**Corollary 14.1** If $Z \perp \{Y(1), Y(0)\} | X$, then

(1) the coefficient of $Z - e(X)$ in the population OLS fit of $Y$ on $Z - e(X)$ or $\{1, Z - e(X)\}$ equals $\tau_O$;

(2) the coefficient of $Z$ in the population OLS fit of $Y$ on $\{1, Z, e(X), X\}$ equals $\tau_O$.

**Proof of Corollary 14.1:** (1) The first result is an intermediate step in the proof of Theorem 14.1. The second result holds because regressing $Y$ on $Z - e(X)$ or $\{1, Z - e(X)\}$ does not change the coefficient of $Z - e(X)$ since it has mean zero.

(2) We can use the FWL theorem again. We can first obtain the residual from the population OLS of $Z$ on $\{1, e(X), X\}$, which is $Z - e(X)$ because

$$
Z - e(X) = Z - 0 - 1 \cdot e(X) - 0^\top X
$$

and $Z - e(X)$ is uncorrelated with any functions of $X$. Then the coefficient of $Z$ in the population OLS fit of $Y$ on $\{1, Z, e(X), X\}$ equals the coefficient of $Z$ in the population OLS fit of $Y$ on $Z - e(X)$. $\square$

![[_resources/Ding - 2023 - A First Course in Causal Inference_Part6/1f9f19c47ec56ed025b13913f7eea76b_MD5.jpg]]

Theorem 14.1 motivates a two-step estimator for $\tau_O$:

1. fit a propensity score model to obtain $\hat{e}(X_i)$;
2. run OLS of $Y_i$ on $(1, X_i, \hat{e}(X_i))$ to obtain the coefficient of $Z_i$.

Corollary 14.1(1) motivates a two-step estimator for $\tau_O$:

1. fit a propensity score model to obtain $\hat{e}(X_i)$;2. run OLS of $Y_i$ on $Z_i - \hat{e}(X_i)$ to obtain the coefficient of $Z_i$.

Corollary 14.1(1) motivates another two-step estimator for $\tau_O$:

1. fit a propensity score model to obtain $\hat{e}(X_i)$;
2. run OLS of $Y_i$ on $(1, Z_i, \hat{e}(X_i), X_i)$ to obtain the coefficient of $Z_i$.

Although OLS is convenient for obtaining point estimators, the corresponding standard errors are incorrect due to the uncertainty in the first step estimation of the propensity score. We can use the bootstrap to approximate the standard errors.

Robins et al. (1992) discussed many OLS estimators based on the propensity score. The above results seem special cases of their general theory although they did not point out the connection with the estimand under the overlap weight, which was resurrected by Li et al. (2018a). Lee (2018) proposed to regress $Y$ on $Z - e(X)$ from a different perspective without making connections to the existing results in Robins et al. (1992) and Li et al. (2018a).

Rosenbaum and Rubin (1983b) proposed to estimate the average causal effect based on the OLS fit of $Y$ on $\{1, Z, e(X), Ze(X)\}$. When this outcome model is correct, their estimator is consistent for the average causal effect. However, when the model is incorrect, the corresponding estimator has a much more complicated interpretation. Little and An (2004) suggested constructing estimators based on the OLS of $Y$ on $Z$ and a flexible function¹ of $e(X)$ and showed it enjoys certain double robustness property. Due to the complexity of implementation, I omit the discussion.

## 14.2 Regressions weighted by the inverse of the propensity score

### 14.2.1 Average causal effect

We first re-examine the Hajek estimator of $\tau$:

$$
\hat{\tau}^{\text{hajek}} = \frac{\sum_{i=1}^{n} \frac{Z_i Y_i}{\hat{e}(X_i)}}{\sum_{i=1}^{n} \frac{Z_i}{\hat{e}(X_i)}} - \frac{\sum_{i=1}^{n} \frac{(1-Z_i)Y_i}{1-\hat{e}(X_i)}}{\sum_{i=1}^{n} \frac{1-Z_i}{1-\hat{e}(X_i)}}
$$

which equals the difference between the weighted means of the outcomes in the treatment and control groups. Numerically, it is identical to the coefficient of $Z_i$ in the following weighted least squares (WLS) of $Y_i$ on $(1, Z_i)$.

¹For example, we can include polynomial terms of $e(X)$ in the regression. Little and An (2004) suggested using splines.**Proposition 14.1** $\hat{\tau}^{\text{hajek}}$ equals $\hat{\beta}$ from the following WLS:

$$
(\hat{\alpha}, \hat{\beta}) = \arg \min_{\alpha, \beta} \sum_{i=1}^{n} w_i (Y_i - \alpha - \beta Z_i)^2
$$

with weights

$$
w_i = \frac{Z_i}{\hat{e}(X_i)} + \frac{1 - Z_i}{1 - \hat{e}(X_i)} = \begin{cases} \frac{1}{\hat{e}(X_i)} & \text{if } Z_i = 1; \\ \frac{1}{1 - \hat{e}(X_i)} & \text{if } Z_i = 0. \end{cases} \quad (14.1)
$$

Imbens (2004) pointed out the result in Proposition 14.1. I leave it as a Problem 14.1. By Proposition 14.1, it is convenient to obtain $\hat{\tau}^{\text{hajek}}$ based on WLS. However, due to the uncertainty in the estimated propensity score, the standard error reported by WLS is incorrect for the true standard error of $\hat{\tau}^{\text{hajek}}$. The bootstrap provides a convenient approximation to the true standard error.

Why does the WLS give a consistent estimator for $\tau$? Recall that in the CRE with a constant propensity score, we can simply use the coefficient of $Z_i$ in the OLS fit of $Y_i$ on $(1, Z_i)$ to estimate $\tau$. In observational studies, units have different probabilities of receiving the treatment and control, respectively. If we weight the treated units by $1/e(X_i)$ and the control units by $1/\{1 - e(X_i)\}$, then both treated and control groups can represent the whole population. Thus, by weighting, we effectively have a pseudo-randomized experiment. Consequently, the difference between the weighted means is consistent for $\tau$. The numerical equivalence of $\hat{\tau}^{\text{hajek}}$ and WLS is not only a fun numerical fact itself but also useful for motivating more complex estimators with covariate adjustment. I give one extension below.

Recall that in the CRE, we can use the coefficient of $Z_i$ in the OLS fit of $Y_i$ on $(1, Z_i, X_i, Z_i X_i)$ to estimate $\tau$, where the covariates are centered with $\bar{X} = 0$. This is Lin (2013)'s estimator which uses covariates to improve efficiency. A natural extension to observational studies is to estimate $\tau$ using the coefficient of $Z_i$ in the WLS fit of $Y_i$ on $(1, Z_i, X_i, Z_i X_i)$ with weights defined in (14.1). Hirano and Imbens (2001) used this estimator in an application. The fully interacted linear model is equivalent to two separate linear models for the treated and control groups. If the linear models

$$
E(Y | Z = 1, X) = \beta_{10} + \beta_{1x}^\top X, \quad E(Y | Z = 0, X) = \beta_{00} + \beta_{0x}^\top X,
$$

are correctly specified, then both OLS and WLS give consistent estimators for the coefficients and the estimators of the coefficient of $Z$ are consistent for $\tau$. More interestingly, the estimator of the coefficient of $Z$ based on WLS is also consistent for $\tau$ if the propensity score model is correct and the outcome model is incorrect. That is, the estimator based on WLS is doubly robust. Robins et al. (2007) discussed this property and attributed this result to M. Joffe's unpublished paper. I will give more details below.

Let $e(X_i, \hat{\alpha})$ be the fitted propensity score and $(\mu_1(X_i, \hat{\beta}_1), \mu_0(X_i, \hat{\beta}_0))$ bethe fitted values of the outcome means based on the WLS. The outcome regression estimator is

$$
\hat{\tau}_{\text{wls}}^{\text{reg}} = \frac{1}{n} \sum_{i=1}^{n} \mu_{1}(X_{i}, \hat{\beta}_{1}) - \frac{1}{n} \sum_{i=1}^{n} \mu_{0}(X_{i}, \hat{\beta}_{0})
$$

and the doubly robust estimator for $\tau$ is

$$
\hat{\tau}_{\text{wls}}^{\text{dr}} = \hat{\tau}_{\text{wls}}^{\text{reg}} + \frac{1}{n} \sum_{i=1}^{n} \frac{Z_i\{Y_i - \mu_1(X_i, \hat{\beta}_1)\}}{e(X_i, \hat{\alpha})} - \frac{1}{n} \sum_{i=1}^{n} \frac{(1 - Z_i)\{Y_i - \mu_0(X_i, \hat{\beta}_0)\}}{1 - e(X_i, \hat{\alpha})}
$$

An interesting result is that this doubly robust estimator equals the outcome regression estimator, which reduces to the coefficient of $Z_i$ in the WLS fit of $Y_i$ on $(1, Z_i, X_i, Z_i X_i)$ if we use weights (14.1).

**Theorem 14.2** If $\bar{X} = 0$ and $(\mu_1(X_i, \hat{\beta}_1), \mu_0(X_i, \hat{\beta}_0)) = (\hat{\beta}_{10} + \hat{\beta}_{1x}^\top X_i, \hat{\beta}_{00} + \hat{\beta}_{0x}^\top X_i)$ based on the WLS fit of $Y_i$ on $(1, Z_i, X_i, Z_i X_i)$ with weights (14.1), then

$$
\hat{\tau}_{\text{wls}}^{\text{dr}} = \hat{\tau}_{\text{wls}}^{\text{reg}} = \hat{\beta}_{10} - \hat{\beta}_{00},
$$

which is the coefficient of $Z_i$ in the WLS fit.

**Proof of Theorem 14.2:** The WLS fit of $Y_i$ on $(1, Z_i, X_i, Z_i X_i)$ is equivalent to two WLS fits based on the treated and control data. Both WLS fits include intercepts, so the weighted residuals have mean 0 (see (B.5)):

$$
\sum_{i=1}^{n} \frac{Z_i(Y_i - \hat{\beta}_{10} - \hat{\beta}_{1x}^\top X_i)}{\hat{e}(X_i)} = 0
$$

and

$$
\sum_{i=1}^{n} \frac{(1 - Z_i)(Y_i - \hat{\beta}_{00} - \hat{\beta}_{0x}^\top X_i)}{1 - \hat{e}(X_i)} = 0.
$$

So the difference between $\hat{\tau}^{\text{dr}}$ and $\hat{\tau}^{\text{reg}}$ is exactly zero. Both reduces to

$$
\begin{aligned} \frac{1}{n} \sum_{i=1}^{n} (\hat{\beta}_{10} + \hat{\beta}_{1x}^{\top} X_i) - \frac{1}{n} \sum_{i=1}^{n} (\hat{\beta}_{00} + \hat{\beta}_{0x}^{\top} X_i) &= \hat{\beta}_{10} - \hat{\beta}_{00} + (\hat{\beta}_{1x} - \hat{\beta}_{0x})^{\top} \bar{X} \\ &= \hat{\beta}_{10} - \hat{\beta}_{00} \end{aligned}
$$

with centered covariates. So they both equal the coefficient of $Z_i$ in the WLS fit of $Y_i$ on $(1, Z_i, X_i, Z_i X_i)$. □

Freedman and Berk (2008) discouraged the use of the WLS estimator above based on some simulation studies. They showed that when the outcome model is correct, the WLS estimator is worse than the OLS estimator since the WLS estimator has large variability in their simulation setting with homoskedastic outcomes. This may not be true in general. When the errors have varianceTABLE 14.1: Regression estimators in CREs and unconfounded observational studies. The weights $w_i$'s are defined in (14.1). Assume covariates are centered at $\bar{X} = 0$.

<table><thead><tr><th></th><th>CRE</th><th>unconfounded observational studies</th></tr></thead><tbody><tr><td>without X</td><td>$Y_i \sim (1, Z_i)$</td><td>$Y_i \sim (1, Z_i)$ with weights $w_i$</td></tr><tr><td>with X</td><td>$Y_i \sim (1, Z_i, X_i, Z_i X_i)$</td><td>$Y_i \sim (1, Z_i, X_i, Z_i X_i)$ with weights $w_i$</td></tr></tbody></table>

proportional to the inverse of the propensity scores, the WLS estimator will be more efficient than the OLS estimator.

Freedman and Berk (2008) also showed that the estimated standard error based on the WLS fit is not consistent for the true standard error because it ignores the uncertainty in the estimated propensity score. This can be easily fixed by using the bootstrap to approximate the variance of the WLS estimator.

Nevertheless, Freedman and Berk (2008) found that “weighting may help under some circumstances” because when the outcome model is incorrect, the WLS estimator is still consistent if the propensity score model is correct.

I end this section with Table 14.1 summarizing the regression estimators for causal effects in both randomized experiments and observational studies.

### 14.2.2 Average causal effect on the treated units

The results for $\tau_T$ parallel those for $\tau$. First, the Hajek estimator for $\tau_T$

$$
\hat{\tau}_{T}^{\text {hajek }}=\hat{Y}(1)-\frac{\sum_{i=1}^{n} \hat{o}(X_{i})(1-Z_{i}) Y_{i}}{\sum_{i=1}^{n} \hat{o}(X_{i})(1-Z_{i})},
$$

with $\hat{o}(X_i) = \hat{e}(X_i)/\{1 - \hat{e}(X_i)\}$, equals the coefficient of $Z_i$ in the following WLS fit $Y_i$ on $(1, Z_i)$.

**Proposition 14.2** $\hat{\tau}_T^{hajek}$ is numerically identical to $\hat{\beta}$ in the following WLS:

$$
(\hat{\alpha}, \hat{\beta}) = \arg \min _{\alpha, \beta} \sum_{i=1}^{n} w_{T i}(Y_{i}-\alpha-\beta Z_{i})^{2}
$$

with weights

$$
w_{T i}=Z_{i}+(1-Z_{i}) \hat{o}(X_{i})=\left\{\begin{array}{ll}1 & \text { if } Z_{i}=1; \\ \hat{o}(X_{i}) & \text { if } Z_{i}=0.\end{array}\right. \quad (14.2)
$$

Similar to Proposition 14.1, Proposition 14.2 is a pure linear algebra result. I relegate its proof to Problem 14.1.

Second, if we center covariates at $\hat{X}(1) = 0$, then we can estimate $\tau_T$ usingthe coefficient of $Z_i$ in the WLS fit of $Y_i$ on $(1, Z_i, X_i, Z_i X_i)$ with weights
defined in (14.2). Similarly, this estimator equals the regression estimator

$$
\hat{\tau}_{T, \text{wls}}^{\text{reg}} = \hat{Y}(1) - \frac{1}{n_1} \sum_{i=1}^{n} Z_i \mu_0(X_i, \hat{\beta}_0),
$$

which also equals the doubly robust estimator

$$
\hat{\tau}_{T, \text{wls}}^{\text{dr}} = \hat{\tau}_{T, \text{wls}}^{\text{reg}} - \frac{1}{n_1} \sum_{i=1}^{n} \hat{o}(X_i)(1 - Z_i)\{Y_i - \mu_0(X_i, \hat{\beta}_0)\}.
$$

**Theorem 14.3** If $\hat{X}(1) = 0$ and $\mu_0(X_i, \hat{\beta}_0) = \hat{\beta}_{00} + \hat{\beta}_{0x}^\top X_i$ based on the WLS fit of $Y_i$ on $(1, Z_i, X_i, Z_i X_i)$ with weights (14.2), then

$$
\hat{\tau}_{T, \text{wls}}^{\text{dr}} = \hat{\tau}_{T, \text{wls}}^{\text{reg}} = \hat{\beta}_{10} - \hat{\beta}_{00},
$$

which is the coefficient of $Z_i$ in the WLS fit.

**Proof of Theorem 14.3:** Based on the WLS fits in the treatment and control groups, we have

$$
\sum_{i=1}^{n} Z_i (Y_i - \hat{\beta}_{10} - \hat{\beta}_{1x}^{\top} X_i) = 0, \quad (14.3)
$$

$$
\sum_{i=1}^{n} \hat{o}(X_i)(1 - Z_i)(Y_i - \hat{\beta}_{00} - \hat{\beta}_{0x}^{\top} X_i) = 0. \quad (14.4)
$$

The second result (14.4) ensures that $\hat{\tau}_{T,wls}^{\text{dr}} = \hat{\tau}_{T,wls}^{\text{reg}}$. Both reduces to

$$
\hat{Y}(1) - \frac{1}{n_1} \sum_{i=1}^{n} Z_i (\hat{\beta}_{00} + \hat{\beta}_{0x}^{\top} X_i) = \frac{1}{n_1} \sum_{i=1}^{n} Z_i (Y_i - \hat{\beta}_{00} - \hat{\beta}_{0x}^{\top} X_i).
$$

With covariates centered at $\hat{X}(1) = 0$, the first result (14.3) implies that
$\hat{Y}(1) = \hat{\beta}_{10}$ which further simplifies the estimator to $\hat{\beta}_{10} - \hat{\beta}_{00}$. $\square$

14.3 Homework problems

14.1 Hajek estimators as WLS estimators

Prove Propositions 14.1 and 14.2.

Remark: These are special cases of Problem B.3 on the univariate WLS.14.2 *Predictive estimator and doubly robust estimator*

Another outcome regression estimator is the predictive estimator

$$
\hat{\tau}^{\text{pred}} = \hat{\mu}_{1}^{\text{pred}} - \hat{\mu}_{0}^{\text{pred}}
$$

where

$$
\hat{\mu}_{1}^{\text{pred}} = \frac{1}{n} \sum_{i=1}^{n} \left\{ Z_{i}Y_{i} + (1 - Z_{i})\mu_{1}(X_{i}, \hat{\beta}_{1}) \right\}
$$

and

$$
\hat{\mu}_{0}^{\text{pred}} = \frac{1}{n} \sum_{i=1}^{n} \left\{ Z_{i} \mu_{0}(X_{i}, \hat{\beta}_{1}) + (1 - Z_{i}) Y_{i} \right\} .
$$

It differs from the outcome regression estimator discussed before in that it
only predicts the counterfactual outcomes but not the observed outcomes.

Show that the doubly robust estimator equals $\hat{\tau}^{\text{pred}}$ if $(\mu_1(X_i, \hat{\beta}_1), \mu_0(X_i, \hat{\beta}_1)) =$
$(\hat{\beta}_{10} + \hat{\beta}_{1x}^\top X_i, \hat{\beta}_{00} + \hat{\beta}_{0x}^\top X_i)$ are from the WLS fits of $Y_i$ on $(1, X_i)$ based on
the treated and control data, respectively, with weights

$$
w_i = Z_i/\hat{o}(X_i) + (1-Z_i)\hat{o}(X_i) = \begin{cases} \frac{1}{\hat{o}(X_i)} = \frac{1-\hat{e}(X_i)}{\hat{e}(X_i)} & \text{if } Z_i = 1; \\ \hat{o}(X_i) = \frac{\hat{e}(X_i)}{1-\hat{e}(X_i)} & \text{if } Z_i = 0. \end{cases} \quad (14.5)
$$

Remark: Cao et al. (2009) and Vermeulen and Vansteelandt (2015) motivated the weights in (14.5) from other more theoretical perspectives.

14.3 *Weighted logistic regression with a binary outcome*

With a binary outcome, we can replace linear outcome models with logistic
outcome models. Show that with weights in the logistic regressions, the doubly
robust estimators equal the outcome regression estimator. The result holds for
both $\tau$ and $\tau_T$.

14.4 *Causal inference with a misspecified linear regression*

Define the population OLS of $Y$ on $(1, Z, X)$ as

$$
(\beta_0, \beta_1, \beta_2) = \arg \min_{b_0, b_1, b_2} E\left(Y - b_0 - b_1 Z - b_2^\top X\right)^2.
$$

Recall that $e(X) = \text{pr}(Z = 1 | X)$ is the propensity score, and define $\tilde{e}(X) = \gamma_0 + \gamma_1^\top X$ as the OLS projection of $Z$ on $X$ with

$$
(\gamma_0, \gamma_1) = \arg \min_{c_0, c_1} E(Z - c_0 - c_1^\top X)^2.
$$

1. Show that

$$
\beta_1 = \frac{E[\tilde{w}(X)\{\mu_1(X) - \mu_0(X)\}]}{E\{\tilde{w}(X)\}} + \frac{E[\{e(X) - \tilde{e}(X)\}\mu_0(X)]}{E\{\tilde{w}(X)\}}
$$

where $\tilde{w}(X) = e(X)\{1 - \tilde{e}(X)\}$.# 14 Using the Propensity Score in Regressions for Causal Effects

2. When $X$ contains the dummy variables for a discrete covariate, show that

$$
\beta_1 = \frac{E[w(X)\{\mu_1(X) - \mu_0(X)\}]}{E\{w(X)\}}
$$

where $w(X) = e(X)\{1 - e(X)\}$ is the overlap weight introduced in Chapter 13.4.

Remark: Vansteelandt and Dukes (2022) gave the formula in part 1 without a detailed proof. The result in part 2 was derived many times in the literature (e.g., Angrist, 1998; Ding, 2021).

## 14.5 Analyzing a dataset from the Karolinska Institute

Revisit Problem 12.5. Estimate $\tau_O$ and $\tau$ based on the methods introduced in this Chapter.

## 14.6 Recommended reading

Kang and Schafer (2007) gave a critical review of the doubly robust estimator, using simulation to compare it with many other estimators. Robins et al. (2007) gave a very insightful comment on Kang and Schafer (2007).15

Matching in Observational Studies

Matching has a long history in empirical research. W. Cochran and D. Rubin popularized it in statistical causal inference. Cochran and Rubin (1973) is an early review paper. Rubin (2006b) collects Rubin's contributions to this topic. This chapter also discusses modern contributions by Abadie and Imbens (2006, 2008, 2011) based on the asymptotic analysis of matching estimators.

15.1 A simple starting point: many more control units

![[_resources/Ding - 2023 - A First Course in Causal Inference_Part6/b0c09f9d09bcdedca1cac5e915a1fc9a_MD5.jpg]]

FIGURE 15.1: Illustration of matching in observational studiesFigure 15.1 illustrates the basic idea of matching in treatment-control observational studies. Consider a simple case with the number of control units $n_0$ being much larger than the number of treated units $n_1$. For unit $i = 1, \dots, n_1$ in the treated group, we find a unit $m(i)$ in the control group such that $X_i = X_{m(i)}$. In the ideal case, we have exact matches. Therefore, the units within a matched pair have the same propensity score $e(X_i) = e(X_{m(i)})$. Consequently, conditional on the event that one unit receives the treatment and the other receives the control, the probability of unit $i$ receiving the treatment and unit $m(i)$ receiving the control is

$$
\mathrm{pr}(Z_i = 1, Z_{m(i)} = 0 | Z_i + Z_{m(i)} = 1, X_i, X_{m(i)}) = 1/2
$$

by a symmetry argument.¹ That is, the treatment assignment is identical to the MPE conditioning on the covariates and the event that each pair has a treated unit and a control unit. So we can analyze the exactly matched observational study as if it is an MPE, using either the FRT or the Neymanian approach in Chapter 7. This gives us inference on the causal effect on the treated units.

We can also find multiple control units for each treated unit. In general, we can find $M_i$ matched control units for the treated unit $i$. When the $M_i$'s vary, it is called the *variable-ratio matching* (Ming and Rosenbaum, 2000, 2001; Pimentel et al., 2015). With perfect matching, the treatment assignment mechanism is identical to the general matched experiment discussed in Section 7.7. We can use the analytic results in that section to analyze the matched observational study.

Rosenbaum (2002b) advocated the above analysis strategy. In most observational studies, however, $X_i = X_{m(i)}$ does not hold for all units. The above reasoning for FRT does not hold. Recently, Guo and Rothenhäusler (2022) reported negative results on the consequence of inexact matching in FRT. This is a warning of this strategy.

¹The rigorous argument is

$$
\begin{align*}
& \frac{\mathrm{pr}(Z_i = 1, Z_{m(i)} = 0 | Z_i + Z_{m(i)} = 1, X_i, X_{m(i)})}{\mathrm{pr}(Z_i = 1, Z_{m(i)} = 0 | X_i, X_{m(i)})} \\
&= \frac{\mathrm{pr}(Z_i = 1, Z_{m(i)} = 0 | X_i, X_{m(i)})}{\mathrm{pr}(Z_i = 1, Z_{m(i)} = 0 | X_i, X_{m(i)}) + \mathrm{pr}(Z_i = 0, Z_{m(i)} = 1 | X_i, X_{m(i)})} \\
&= \frac{e(X_i)\{1 - e(X_{m(i)})\}}{e(X_i)\{1 - e(X_{m(i)})\} + \{1 - e(X_i)\}e(X_{m(i)})} \\
&= \frac{1}{2}.
\end{align*}
$$15.2 A more complicated but realistic scenario

Even if the control group is large, we often do not have exact matches. What
we can achieve is that $X_i \approx X_{m(i)}$ or $X_i - X_{m(i)}$ is small under some distance
metric. So we have only approximate matches. For example, we define

$$
m(i) = \arg \min_{k:Z_k=0} d(X_i, X_k),
$$

where $d(X_i, X_k)$ measures the distance between $X_i$ and $X_k$. Some canonical
choices of the distance are the Euclidean distance

$$
d(X_i, X_k) = (X_i - X_k)^T (X_i - X_k),
$$

and the Mahalanobis distance

$$
d(X_i, X_k) = (X_i - X_k)^T \Omega^{-1} (X_i - X_k)
$$

with Ω being the sample covariance matrix of the Xᵢ's from the whole population or only the control group.

I review some subtle issues about matching below. See Stuart (2010) for a
review paper.

1. (one-to-one or one-to-M matching) The above discussion focused on one-to-one matching. We can also extend the discussion to one-to-M matching.
2. I focus on matching with replacement but some practitioners prefer matching without replacement. If the pool of control units is large, these two methods will not differ too much for the final result. Matching with replacement is computationally more convenient, but matching without replacement involves computationally intensive discrete optimization. Matching with replacement usually gives matches of higher quality but it introduces dependence by using the same units multiple times. In contrast, the advantage of matching without replacement is the independence of matched units and the simplicity in the subsequent data analysis.
3. Because of the residual covariate imbalance within matched pairs, it is crucial to use covariate adjustment when analyzing the data. In this case, covariate adjustment is not only for efficiency gain but also for bias correction.
4. If X is “high dimensional”, it is likely that $d(X_i, X_k)$ is too large for some unit i in the treated group and for all choices of the units in the control group. If this happens, we may have to drop some units that are hard to find matches. By doing this, we effectively change the study population of interest.5. It is hard to avoid the above problem. For example, if $X_i \sim N(0, I_p)$, $X_k \sim N(0, I_p)$, and $X_i \perp X_k$, then

$$
(X_i - X_k)^{\top} (X_i - X_k) \sim 2\chi_p^2
$$

which has mean $2p$ and variance $8p$ (see Chapter A.1.3). Theory shows that with large $p$, imperfect matching causes a large bias in causal effect estimation. This suggests that if $p$ is large, we must do some dimension reduction before matching. Rosenbaum and Rubin (1983b) proposed to use matching based on the propensity score. With the estimated propensity score, we find pairs of units $\{i, m(i)\}$ with small values of $|\hat{e}(X_i) - \hat{e}(X_{m(i)})|$ or $|\text{logit}\{\hat{e}(X_i)\} - \text{logit}\{\hat{e}(X_{m(i)})\}|^2$, i.e., we have a one-dimensional matching problem.

## 15.3 Matching estimator for the average causal effect

In a sequence of papers, Abadie and Imbens (AI) rigorously characterized the asymptotic properties of the matching estimator and proposed the corresponding large-sample confidence intervals for the average causal effect. They chose the standard setup for observational studies with $\{X_i, Z_i, Y_i(1), Y_i(0)\}_{i=1}^n \stackrel{\text{IID}}{\sim} \{X, Z, Y(1), Y(0)\}$.

### 15.3.1 Point estimation and bias correction

AI focused on 1-$M$ matching with replacement. For a treated unit $i$, we can simply impute the potential outcome under the treatment as $\hat{Y}_i(1) = Y_i$, and impute the potential outcome under the control as

$$
\hat{Y}_i(0) = M^{-1} \sum_{k \in J_i} Y_k,
$$

where $J_i$ is the set of matched units from the control group for unit $i$. For example, we can compute $d(X_i, X_k)$ for all $k$ in the control group, and then define $J_i$ as the indices of $k$ with the $M$ smallest values of $d(X_i, X_k)$.

For a control unit $i$, we simply impute the potential outcome under the control as $\hat{Y}_i(0) = Y_i$, and impute the potential outcome under the treatment as

$$
\hat{Y}_i(1) = M^{-1} \sum_{k \in J_i} Y_k,
$$

where $J_i$ is the set of matched units from the treatment group for unit $i$.

²Define $\text{logit}(w) = \log \frac{w}{1-w}$. The logit function is a map from $[0, 1]$ to $(-\infty, \infty)$.The matching estimator is

$$
\hat{\tau}^{\mathrm{m}}=n^{-1} \sum_{i=1}^{n}\{\hat{Y}_{i}(1)-\hat{Y}_{i}(0)\}.
$$

AI showed that $\hat{\tau}^m$ has non-negligible bias especially when $X$ is multidimensional and the number of control units is comparable to the number of treated units. Through some technical derivations, they proposed the following estimator for the bias:

$$
\hat{B}=n^{-1} \sum_{i=1}^{n} \hat{B}_{i}
$$

where

$$
\hat{B}_i = (2Z_i - 1)M^{-1} \sum_{k \in J_i} \{\hat{\mu}_{1-Z_i}(X_i) - \hat{\mu}_{1-Z_i}(X_k)\}
$$

with $\{\hat{\mu}_1(X_i), \hat{\mu}_0(X_i)\}$ being the predicted outcomes by, for example, OLS fits.
For a treated unit with $Z_i = 1$, the estimated bias is

$$
\hat{B}_i = M^{-1} \sum_{k \in J_i} \{\hat{\mu}_0(X_i) - \hat{\mu}_0(X_k)\}
$$

which corrects the discrepancy in predicted control potential outcomes due to
the mismatch in covariates; for a control unit with $Z_i = 0$, the estimated bias
is

$$
\hat{B}_i = -M^{-1} \sum_{k \in J_i} \{\hat{\mu}_1(X_i) - \hat{\mu}_1(X_k)\}
$$

which corrects the discrepancy in predicted treated potential outcomes due to
the mismatch in covariates.

The final bias-corrected matching estimator is

$$
\hat{\tau}^{\text{mbc}} = \hat{\tau}^{\text{m}} - \hat{B},
$$

which has the following linear expansion.

**Proposition 15.1** *We have*

$$
\hat{\tau}^{\text{mbc}} = n^{-1} \sum_{i=1}^{n} \hat{\psi}_i \qquad (15.1)
$$

where

$$
\hat{\psi}_i = \hat{\mu}_1(X_i) - \hat{\mu}_0(X_i) + (2Z_i - 1)(1 + K_i/M)\{Y_i - \hat{\mu}_{Z_i}(X_i)\}
$$

with $K_i$ being the times that unit $i$ is used as a match.The linear expansion in Proposition 15.1 follows from simple but tedious algebra. I leave its proof as Problem 15.1. The linear expansion motivates a simple variance estimator

$$
\hat{V}^{\text{mbc}} = \frac{1}{n^2} \sum_{i=1}^{n} (\hat{\psi}_i - \hat{\tau}^{\text{mbc}})^2,
$$

by viewing $\hat{\tau}^{\text{mbc}}$ as sample averages of the $\hat{\psi}_i$'s. Abadie and Imbens (2008) first showed that the simple bootstrap by resampling the original data does not work for estimating the variance of the matching estimators, but their proposed variance estimation procedure is not easy to implement. Otsu and Rai (2017) proposed to bootstrap the $\hat{\psi}_i$'s in the linear expansion. However, Otsu and Rai (2017)'s bootstrap essentially yields the variance estimator $\hat{V}^{\text{mbc}}$, which is simple to calculate.

### 15.3.2 Connection with the doubly robust estimators

The bias-corrected matching estimators and the doubly robust estimators are closely related. They both equal the outcome regression estimator with some modifications based on the residuals

$$
\hat{R}_i = \begin{cases} Y_i - \hat{\mu}_1(X_i) & \text{if } Z_i = 1; \\ Y_i - \hat{\mu}_0(X_i) & \text{if } Z_i = 0. \end{cases}
$$

For the average causal effect $\tau$, recall the outcome regression estimator

$$
\hat{\tau}^{\text{reg}} = n^{-1} \sum_{i=1}^{n} \{\hat{\mu}_1(X_i) - \hat{\mu}_0(X_i)\}
$$

and the doubly robust estimator

$$
\hat{\tau}^{\text{dr}} = \hat{\tau}^{\text{reg}} + n^{-1} \sum_{i=1}^{n} \left\{ \frac{Z_i \hat{R}_i}{\hat{e}(X_i)} - \frac{(1-Z_i) \hat{R}_i}{1-\hat{e}(X_i)} \right\}.
$$

Furthermore, we can verify that $\hat{\tau}^{\text{mbc}}$ has a form similar to $\hat{\tau}^{\text{dr}}$.

**Proposition 15.2** *The bias-corrected matching estimator for $\tau$ equals*

$$
\hat{\tau}^{\text{mbc}} = \hat{\tau}^{\text{reg}} + n^{-1} \sum_{i=1}^{n} \left\{ \left( 1 + \frac{K_i}{M} \right) Z_i \hat{R}_i - \left( 1 + \frac{K_i}{M} \right) (1 - Z_i) \hat{R}_i \right\}.
$$

I leave the proof of Proposition 15.2 as Problem 15.2. From Proposition 15.2, we can view matching as a nonparametric method to estimate the propensity score, and the resulting bias-corrected matching estimator as a doubly robust estimator. For instance, $1+K_i/M$ should be close to $1/\hat{e}(X_i)$. When a treated unit has a small $e(X_i)$, the resulting weight based on theestimated propensity score $1/\hat{e}(X_i)$ will be large, and at the same time, it will be matched to many control units, resulting in large $K_i$ and thus large $1+K_i/M$. However, this connection also raised an obvious question regarding matching. With a fixed $M$, the estimator $1+K_i/M$ for $1/e(X_i)$ will be very noisy. Allowing $M$ to grow with the sampling size is likely to improve the matching-based nonparametric estimator for the propensity score and thus improve the asymptotic properties of the matching and bias-corrected matching estimators. Lin et al. (2023) provided a formal theory that once we allow $M$ to grow at a proper rate, the bias-corrected matching estimator $\hat{\tau}^{\text{mbc}}$ can achieve similar properties as the doubly robust estimator.

## 15.4 Matching estimator for the average causal effect on the treated

For the average causal effect on the treated

$$
\tau_T = E(Y | Z = 1) - E\{Y(0) | Z = 1\},
$$

we only need to impute the missing potential outcomes under control for all the treated units, resulting in the following estimator

$$
\hat{\tau}_{\text{T}}^{\text{m}} = n_{1}^{-1} \sum_{i=1}^{n} Z_{i}\{Y_{i} - \hat{Y}_{i}(0)\}.
$$

Again it is biased with multidimensional $X$. Otsu and Rai (2017) propose to estimate its bias by

$$
\hat{B}_{\text{T}} = n_{1}^{-1} \sum_{i=1}^{n} Z_{i} \hat{B}_{\text{T},i}
$$

where

$$
\hat{B}_{T,i} = M^{-1} \sum_{k \in J_i} \{\hat{\mu}_0(X_i) - \hat{\mu}_0(X_k)\}
$$

corrects the bias due to the mismatch of covariates for a treated unit with $Z_i = 1$.

The final bias-corrected estimator is

$$
\hat{\tau}_{\text{T}}^{\text{mbc}} = \hat{\tau}_{\text{T}}^{\text{m}} - \hat{B}_{\text{T}},
$$

which has the following linear expansion.

**Proposition 15.3 We have**

$$
\hat{\tau}_{\text{T}}^{\text{mbc}} = n_{1}^{-1} \sum_{i=1}^{n} \hat{\psi}_{\text{T},i}, \qquad (15.2)
$$where

$$
\hat{\psi}_{T,i} = Z_i\{Y_i - \hat{\mu}_0(X_i)\} - (1 - Z_i)K_i/M\{Y_i - \hat{\mu}_0(X_i)\}.
$$

I leave the proof to Problem 15.1. Motivated by Otsu and Rai (2017), we
can view $\hat{\tau}_{T}^{\text{mbc}}$ as $n/n_1$ multiplied by the sample average of the $\hat{\psi}_{T,i}$'s, so an
intuitive variance estimator is

$$
\hat{V}_{T}^{\text{mbc}} = \left(\frac{n}{n_1}\right)^2 \frac{1}{n^2} \sum_{i=1}^{n} \left(\hat{\psi}_{T,i} - \hat{\tau}_{T}^{\text{mbc}} n_1 / n\right)^2 = \frac{1}{n_1^2} \sum_{i=1}^{n} \left(\hat{\psi}_{T,i} - \hat{\tau}_{T}^{\text{mbc}} n_1 / n\right)^2.
$$

Similar to the discussion in Section 15.3.2, we can compare the doubly
robust and bias-corrected matching estimators with the outcome regression
estimator. For the average causal effect on the treated units $\tau_T$, recall the
outcome regression estimator

$$
\hat{\tau}_{T}^{\text{reg}} = n_{1}^{-1} \sum_{i=1}^{n} Z_{i} \{Y_{i} - \hat{\mu}_{0}(X_{i})\},
$$

and the doubly robust estimator

$$
\hat{\tau}_{T}^{\text{dr}} = \hat{\tau}_{T}^{\text{reg}} - n_{1}^{-1} \sum_{i=1}^{n} \frac{\hat{e}(X_{i})}{1 - \hat{e}(X_{i})} (1 - Z_{i}) \hat{R}_{i}.
$$

Furthermore, we can verify that $\hat{\tau}_T^{\text{mbc}}$ has a form similar to $\hat{\tau}_T^{\text{dr}}$.

**Proposition 15.4** *The bias correction matching estimator for τ<sub>T</sub> equals*

$$
\hat{\tau}_{T}^{\text{mbc}} = \hat{\tau}_{T}^{\text{reg}} - n_{1}^{-1} \sum_{i=1}^{n} \frac{K_{i}}{M} (1 - Z_{i}) \hat{R}_{i}.
$$

I leave the proof of Proposition 15.4 as Problem 15.3. Proposition 15.4
suggests that matching essentially uses $K_i/M$ to estimate the odds of the
treatment given covariates.

15.5 A case study

**15.5.1 Experimental data**

Now I revisit the LaLonde data using Sekhon (2011)'s **Matching** package. We
have used this package several times for the dataset **lalonde**, and now we
will use its key function **Match**. The experimental part gives us the following
results:15.5 *A case study*

Matched number of observations.................. 185
Matched number of observations (unweighted). 248

Ignoring the ties in the matched data, we can also use the matched-pairs
analysis, which again yields results similar to those based on the experimental
data:

> diff = y[matchest$index.treated] -
+         y[matchest$index control]
> round(summary(lm(diff ~ 1))$coef[1, ], 2)
  Estimate Std. Error   t value   Pr(>|t|)
 1581.44    558.55      2.83     0.01

> diff.x = x[matchest$index.treated, ] -
+         x[matchest$index control, ]
> round(summary(lm(diff ~ diff.x))$coef[1, ], 2)
  Estimate Std. Error   t value   Pr(>|t|)
 1842.06    578.37      3.18     0.00

15.5.3 Covariate balance checks

Moreover, we can use simple OLS to check covariate balance. Before matching,
the covariates are highly imbalanced, signified by many stars associated with
the coefficients.

> lm before = lm(z ~ x)
> summary(lm before)

Residuals:

Min 1Q Median 3Q Max
-0.18508 -0.01057 0.00303 0.01018 1.01355

Coefficients:

Estimate   Std. Error   t value   Pr(>|t|)
(Intercept)  1.404e-03  6.326e-03  0.222  0.8243
xage        -4.043e-04  8.512e-05  -4.750  2.05e-06 ***
xeduc       3.220e-04  4.073e-04  0.790  0.4293
xblack      1.070e-01  2.902e-03  36.871  < 2e-16 ***
xhispan      6.377e-03  3.103e-03  2.055  0.0399 *
xmarried    -1.525e-02  2.023e-03  -7.537  5.06e-14 ***
xnodegree    1.345e-02  2.523e-03  5.331  9.89e-08 ***
xre74       7.601e-07  1.806e-07  4.208  2.59e-05 ***
xre75       -1.231e-07  1.829e-07  -0.673  0.5011
xu74        4.224e-02  3.271e-03  12.914  < 2e-16 ***
xu75        2.424e-02  3.399e-03  7.133  1.02e-12 ***

However, after matching, the covariates are well-balanced, signified by the
absence of stars for all coefficients.

> lm after = lm(z ~ x,+ subset = c(matchest$index.treated,
           matchest$index/control))
> summary(lm.after)

Residuals:

<table><thead><tr><th>Min</th><th>1Q</th><th>Median</th><th>3Q</th><th>Max</th></tr></thead><tbody><tr><td>-0.66864</td><td>-0.49161</td><td>-0.03679</td><td>0.50378</td><td>0.65122</td></tr></tbody></table>

Coefficients:

<table><thead><tr><th></th><th>Estimate</th><th>Std. Error</th><th>t value</th><th>Pr(&gt;|t|)</th></tr></thead><tbody><tr><td>(Intercept)</td><td>6.003e-01</td><td>2.427e-01</td><td>2.474</td><td>0.0137 *</td></tr><tr><td>xage</td><td>3.199e-03</td><td>3.427e-03</td><td>0.933</td><td>0.3511</td></tr><tr><td>xeduc</td><td>-1.501e-02</td><td>1.634e-02</td><td>-0.918</td><td>0.3590</td></tr><tr><td>xblack</td><td>6.141e-05</td><td>7.408e-02</td><td>0.001</td><td>0.9993</td></tr><tr><td>xhispan</td><td>1.391e-02</td><td>1.208e-01</td><td>0.115</td><td>0.9084</td></tr><tr><td>xmarried</td><td>-1.328e-02</td><td>6.729e-02</td><td>-0.197</td><td>0.8437</td></tr><tr><td>xnodegree</td><td>-3.023e-02</td><td>7.144e-02</td><td>-0.423</td><td>0.6723</td></tr><tr><td>xre74</td><td>6.754e-06</td><td>9.864e-06</td><td>0.685</td><td>0.4939</td></tr><tr><td>xre75</td><td>-9.848e-06</td><td>1.279e-05</td><td>-0.770</td><td>0.4417</td></tr><tr><td>xu74</td><td>2.179e-02</td><td>1.027e-01</td><td>0.212</td><td>0.8321</td></tr><tr><td>xu75</td><td>-2.642e-02</td><td>8.327e-02</td><td>-0.317</td><td>0.7512</td></tr></tbody></table>

## 15.6 Discussion

With many covariates, matching based on the original covariates may suffer from the curse of dimensionality. Rosenbaum and Rubin (1983b) suggested to use matching based on the estimated propensity score. Abadie and Imbens (2016) provided a form theory for this strategy.

## 15.7 Homework Problems

15.1 Linear expansions of the bias-corrected estimators

Prove Propositions 15.1 and 15.3.

15.2 Doubly robust form of the bias-corrected matching estimator for $\tau$

Prove Proposition 15.2.

15.3 Doubly robust form of the bias-corrected matching estimator for $\tau_T$

Prove Proposition 15.4.15.7 *Homework Problems*

15.4 Revisit Example 10.3

Analyze the dataset in Example 10.3 using the matching estimator. Compare
the results with previous results. You should check the covariate balance before
and after matching. You can also choose a different number of matches for the
matching estimator. Moreover, you can even apply various estimators to the
matched data. Are your results sensitive to your choices?

15.5 Revisit Chapter 15.5

Chapter 15.5 analyzed the LaLonde observational study using matching. Matching performs well because it gives an estimator that is close to the experimental gold standard. Reanalyze the data using the outcome regression, propensity score stratification, two IPW, and the doubly robust estimators. Compare the results to the matching estimator and to the estimator from the experimental gold standard.

Note that you have many choices. For example, the number of strata for
stratification and the threshold to trim to data based on the estimated propen-
sity scores. You may consider fitting different propensity score and outcome
models, e.g., including some quadratic terms of the basic covariates. You can
even apply these estimators to the matched data.

This is a classic dataset and hundreds of papers have used it. You can read
some references (Dehejia and Wahba, 1999; Hainmueller, 2012) and you can
also be creative in your data analysis.

15.6 Data re-analyses

Ho et al. (2007) is an influential paper in political science, based on which
the authors have developed an R package MatchIt (Ho et al., 2011). Ho et al.
(2007) analyzed two datasets, both of which are available from the Harvard
Dataverse.

Re-analyze these two datasets using the methods discussed so far. You can
also try other methods as long as you can justify them.

15.7 *Recommended reading*

The literature on matching estimators is massive, and three excellent review
papers are Sekhon (2009), Stuart (2010), and Imbens (2015).![[_resources/Ding - 2023 - A First Course in Causal Inference_Part6/e6ec6d7e41032f40450acccb97541dce_MD5.jpg]]

![[_resources/Ding - 2023 - A First Course in Causal Inference_Part6/d0616ed7b4a25c5c418c9042e528806b_MD5.jpg]]

![[_resources/Ding - 2023 - A First Course in Causal Inference_Part6/5a01de1bca90f7846b78b70b9d226ad4_MD5.jpg]]

![[_resources/Ding - 2023 - A First Course in Causal Inference_Part6/f09e0367d325873e08956b87be368fee_MD5.jpg]]