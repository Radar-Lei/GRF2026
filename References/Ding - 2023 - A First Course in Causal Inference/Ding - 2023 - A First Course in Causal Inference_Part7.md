Part IV

Difficulties and challenges of observational studies—# 16

## *Difficulties of Unconfoundedness in Observational Studies for Causal Effects*

Part III of this book discusses causal inference with observational studies under two assumptions: unconfoundedness and overlap. Both are strong assumptions and are likely to be violated in practice. This chapter will discuss the difficulties of the unconfoundedness assumption. Chapters 17–19 will discuss various strategies for sensitivity analysis in observational studies with unmeasured confounding. Chapter 20 will discuss the difficulties of the overlap assumption.

### 16.1 Some basics of the causal diagram

Pearl (1995) introduced the causal diagram as a powerful tool for causal inference in empirical research. Pearl (2000) is a textbook on the causal diagram. Here I introduce the causal diagram as an intuitive tool for illustrating the causal relationships among variables.

For example, if we have the causal diagram

![[_resources/Ding - 2023 - A First Course in Causal Inference_Part7/931914230a0264b45c27929be670e4f4_MD5.jpg]]

and focus on the causal effect of $Z$ on $Y$, we can read it as the following data-generating process:

$$
\begin{cases} X \sim F_X(x), \\ Z = f_Z(X, \varepsilon_Z), \\ Y(z) = f_Y(X, z, \varepsilon_Y(z)), \end{cases}
$$

where $\varepsilon_Z \perp \varepsilon_Y(z)$ for both $z = 0, 1$. In the above, covariates $X$ are generated from a distribution $F_X(x)$, the treatment assignment is a function of $X$ with a random error term $\varepsilon_Z$, and the potential outcome $Y(z)$ is a function of $X$, $z$ and a random error term $\varepsilon_Y(z)$. We can easily read from the equations that $Z \perp Y(z) | X$, i.e., the unconfoundedness assumption holds.If we have a causal diagram

![[_resources/Ding - 2023 - A First Course in Causal Inference_Part7/3a4325856a62e2bbff8deabc430ec37c_MD5.jpg]]

we can read it as the following data-generating process:

$$
\begin{cases}
X \sim F_X(x), \\
U \sim F_U(u), \\
Z = f_Z(X, U, \varepsilon_Z), \\
Y(z) = f_Y(X, U, z, \varepsilon_Y(z)),
\end{cases}
$$

where $\varepsilon_Z \perp \varepsilon_Y(z)$ for both $z = 0, 1$. We can easily read from the equations
that $Z \perp Y(z) | (X,U)$ but $Z \not\perp Y(z) | X$, i.e., the unconfoundedness assump-
tion holds conditional on $(X,U)$ but does not hold conditional on $X$ only.
In this case, $U$ is an unmeasured confounder. In this diagram, $U$ is called an
unmeasured confounder.

16.2 Assessing the unconfoundedness assumption

The unconfoundedness assumption

$$
Z \perp Y(1) | X, \quad Z \perp Y(0) | X
$$

implies that

$$
\begin{align*}
\mathrm{pr}\{Y(1) | Z = 1, X\} &= \mathrm{pr}\{Y(1) | Z = 0, X\}, \\
\mathrm{pr}\{Y(0) | Z = 1, X\} &= \mathrm{pr}\{Y(0) | Z = 0, X\}.
\end{align*}
$$

So the unconfoundedness assumption basically requires that the counter-
factual distribution $\text{pr}\{Y(1) | Z = 0, X\}$ equals the observed distribution
$\text{pr}\{Y(1) | Z = 1, X\}$, and the counterfactual distribution $\text{pr}\{Y(0) | Z = 1, X\}$
equals the observed distribution $\text{pr}\{Y(0) | Z = 0, X\}$. Because the coun-
terfactual distributions are not directly identifiable from the data, the un-
confoundedness assumption is fundamentally untestable without additional
assumptions. I will discuss two strategies to assess the unconfoundedness as-
umption. Here, “assess” is a weaker notion than “test”. The former is referred
to as supplementary analysis that supports or undermines the initial analysis,
but the latter is referred to as formal statistical testing.16.2.1 Using negative outcomes

Assume that $Y^n$ is an outcome similar to $Y$ and ideally, shares the same confounding structure as $Y$. If we believe $Z \perp Y(z) | X$, then we also tend to believe $Z \perp Y^n(z) | X$. Moreover, we know, a priori, the effect of $Z$ on $Y^n$:

$$
\tau(Z \to Y^n) = E\{Y^n(1) - Y^n(0)\}.
$$

An important example is that $\tau(Z \to Y^n) = 0$. A causal diagram satisfying these requirements is below:

![[_resources/Ding - 2023 - A First Course in Causal Inference_Part7/6843bfc493abe6f7bf7f62758f2c1884_MD5.jpg]]

**Example 16.1** Cornfield et al. (1959) studied the causal role of cigarette smoking on lung cancer based on observational studies. They controlled for many important background variables but it is still possible to have some unmeasured confounders biasing the observed effects. To strengthen the evidence for causation, they also reported the effect of cigarette smoking on car accidents, which was close to zero, the anticipated effect based on biology. So even if they could not rule out unmeasured confounding in the analysis, this supplementary analysis based on a negative outcome makes the evidence of the causal effect of cigarette smoking on lung cancer stronger.

**Example 16.2** Imbens and Rubin (2015) suggested using the lagged outcome as a negative outcome. In most cases, it is reasonable to believe that the lagged outcome and the outcome have a similar confounding structure. Since the lagged outcome happens before the treatment, the average causal effect on it must be 0. However, their suggestion should be used with caution since in most studies we simply treat lagged outcomes as an observed confounder.

In some sense, the covariate balance check in Chapter 11 is a special case of using negative controls. Similar to the problem of using lagged outcomes as negative controls, those covariates are usually a part of the unconfoundedness assumption. Therefore, the failure of the covariate balance check does not really falsify the unconfoundedness assumption but rather the model specification of the propensity score.

**Example 16.3** Observational studies of elderly persons have shown that vaccination against influenza remarkably reduces one’s risk of pneumonia/influenza hospitalization and all-cause mortality in the following season, after adjustment for measured covariates. Jackson et al. (2006) were skeptical about the large magnitude and thus conducted supplementary analysis on negative outcomes. Vaccination often begins in the fall, but influenza transmission is often minimal until the winter. Based on biology, the effect of vaccination should be most prominent during influenza season. But Jackson et al. (2006)22216 *Difficulties of Unconfoundedness in Observational Studies for Causal Effects*

found a greater effect before the influenza season, suggesting that the observed
effect is due to unmeasured confounding.

Jackson et al. (2006) seems the most convincing one since the influenza-
related outcomes before and during the influenza season should have simi-
lar confounding patterns. Cornfield et al. (1959)'s additional evidence seems
weaker since car accidents and lung cancer have very different causal mecha-
nisms with respect to cigarette smoking. In fact, Fisher (1957)'s critique was
that the relationship between cigarette smoking on lung cancer may be due
to an unobserved genetic factor (see Chapter 17). Such a genetic factor might
affect cigarette smoking and lung cancer simultaneously, but it seems unlikely
that it also affects car accidents.

Lipsitch et al. (2010) is a recent article on negative outcomes. Rosenbaum (1989) discussed the role of known effects in causal inference.

16.2.2 Using negative exposures

Negative exposures are duals of negative outcomes. Assume $Z^n$ is a treatment variable similar to $Z$ and shares the same confounding structure as $Z$. If we believe $Z \perp Y(z) | X$, then we tend to believe $Z^n \perp Y(z) | X$. Moreover, we know, a priori, the effect of $Z^n$ on $Y$

$$
\tau(Z^n \rightarrow Y) = E\{Y(1^n) - Y(0^n)\}.
$$

An important example is that $\tau(Z^n \to Y) = 0$. A causal diagram satisfying
these requirements is below:

![[_resources/Ding - 2023 - A First Course in Causal Inference_Part7/8003dc52461d80a7489ccee8f4ca4b32_MD5.jpg]]

**Example 16.4** Sanderson et al. (2017) give many examples of negative exposures in determining the effect of intrauterine exposure on later outcomes by comparing the association of maternal exposure during pregnancy with the outcome of interest, with the association of paternal exposure with the same outcome. They review studies on the effect of maternal and paternal smoking on offspring outcomes, and studies on the effect of maternal and paternal BMI on later offspring BMI and autism spectrum disorder. In these examples, we expect the association of maternal exposure with the outcome to be larger than that of paternal exposure with the outcome.

16.2.3 Summary

The unconfoundedness assumption is fundamentally untestable without ad-
ditional assumptions. Although negative outcomes and negative controls inobservational studies cannot prove or disprove unconfoundedness, using them in supplementary analyses can strengthen the evidence for causation. However, it is often non-trivial to conduct this type of supplementary analysis because it involves more data and more importantly, a deeper understanding of the causal problems to find convincing negative outcomes and negative controls.

## 16.3 Problems of over-adjustment

We have discussed many methods for estimating causal effects under the unconfoundedness assumption:

$$
Z \perp \{Y(1), Y(0)\} | X.
$$

This is an assumption conditioning on $X$. It is crucial to select the right set of $X$ that ensures the conditional independence. Rosenbaum (2002b) wrote that “there is no reason to avoid adjustment for a variable describing subjects before treatment.” Similarly, Rubin (2007) wrote that “typically, the more conditional an assumption, the more acceptable it is.” Both argued that we should control for all observed pretreatment covariates. VanderWeele and Shpitser (2011) called it the *pretreatment criterion*. Pearl disagreed with this recommendation and gave two counterexamples below.

### 16.3.1 M-bias

M-bias appears in the following causal diagram with an M-structure:

![[_resources/Ding - 2023 - A First Course in Causal Inference_Part7/a61846256cdd09f506c287b90b8d8de2_MD5.jpg]]

We can read from the diagram the data-generating process:

$$
\begin{cases} U_1 \perp U_2, \\ X = f_X(U_1, U_2, \varepsilon_X), \\ Z = f_Z(U_1, \varepsilon_Z), \\ Y = Y(z) = f_Y(U_2, \varepsilon_Y), \end{cases}
$$

where $(\varepsilon_X, \varepsilon_Z, \varepsilon_Y)$ are independent random error terms. In the above causaldiagram, $X$ is observed, but $U_1$ and $U_2$ are unobserved. If we change the value of $Z$, the value of $Y$ will not change at all. So the true causal effect of $Z$ on $Y$ must be 0. From the data-generating equations, we can read that $Z \perp Y$, so the association between $Z$ and $Y$ is 0, and, in particular,

$$
\tau_{\text{PF}} = E(Y | Z = 1) - E(Y | Z = 0) = 0.
$$

This means that without adjusting for the covariate $X$, the simple estimator is unbiased for the true parameter.

However, if we condition on $X$, then $U_1 \perp U_2 | X$, and consequently, $Z \perp Y | X$ and

$$
\int \{E(Y | Z = 1, X = x) - E(Y | Z = 0, X = x)\} f(x) dx \neq 0
$$

in general. To gain intuition, we consider the case with Normal linear models¹:

$$
\begin{cases} X = aU_1 + bU_2 + \varepsilon_X, \\ Z = cU_1 + \varepsilon_Z, \\ Y = Y(z) = dU_2 + \varepsilon_Y, \end{cases}
$$

where $(U_1, U_2, \varepsilon_X, \varepsilon_Z, \varepsilon_Y) \stackrel{\text{IID}}{\sim} \text{N}(0, 1)$. We have

$$
\operatorname{cov}(Z, Y) = \operatorname{cov}(cU_1 + \varepsilon_Z, dU_2 + \varepsilon_Y) = 0,
$$

but by the result in Problem 1.3, the partial correlation coefficient between $Z$ and $Y$ given $X$ is²

$$
\begin{align*} \rho_{ZY|X} &= \frac{\rho_{ZY} - \rho_{ZX}\rho_{YX}}{\sqrt{1 - \rho_{ZX}^2}\sqrt{1 - \rho_{YX}^2}} \\ &\propto -\rho_{ZX}\rho_{YX} \\ &\propto -\operatorname{cov}(Z, X)\operatorname{cov}(Y, X) \\ &= -abcd, \end{align*}
$$

the product of the coefficients on the path from $Z$ to $Y$. So the unadjusted estimator is unbiased but the adjusted estimator has a bias proportional to $abcd$.

The following simple example illustrates M-bias.

```R
> ## M bias with large sample size
> n = 10^6
> U1 = rnorm(n)
> U2 = rnorm(n)
```

¹It is not ideal for our discussion of binary $Z$, but it simplifies the derivations. Ding and Miratrix (2015) gave a detailed discussion with more natural models for binary $Z$.

²The notation $\propto$ reads as “proportional to” and allows us to drop some unimportant constants.```R
> X = U1 + U2 + rnorm(n)
> Y = U2 + rnorm(n)
> ## with a continuous treatment Z
> Z = U1 + rnorm(n)
> round(summary(lm(Y ~ Z))$coef[2, 1], 3)
[1] 0
> round(summary(lm(Y ~ Z + X))$coef[2, 1], 3)
[1] -0.2
>
> ## with a binary treatment Z
> Z = (Z >= 0)
> round(summary(lm(Y ~ Z))$coef[2, 1], 3)
[1] 0.002
> round(summary(lm(Y ~ Z + X))$coef[2, 1], 3)
[1] -0.42
```

### 16.3.2 Z-bias

Consider the following causal diagram:

![[_resources/Ding - 2023 - A First Course in Causal Inference_Part7/e7c1c272a6fccd065bbc48955877ea9f_MD5.jpg]]

with the data generating process³

$$
\begin{cases}
Z = aX + bU + \varepsilon_Z, \\
Y(z) = \tau z + cU + \varepsilon_Y,
\end{cases}
$$

where $(U, X, \varepsilon_Z, \varepsilon_Y)$ are IID N(0, 1). In this data-generating process, we have $X \perp U$, $X \not\perp Z$, and $X$ affects $Y$ only through $Z$.

The unadjusted estimator is

$$
\begin{align*}
\tau_{\text{unadj}} &= \frac{\operatorname{cov}(Z, Y)}{\operatorname{var}(Z)} \\
&= \frac{\operatorname{cov}(Z, \tau Z + cU)}{\operatorname{var}(Z)} \\
&= \tau + \frac{\operatorname{ccov}(aX + bU, U)}{\operatorname{var}(Z)} \\
&= \tau + \frac{cb}{a^2 + b^2 + 1},
\end{align*}
$$

³Again, we generate continuous Z from a linear model to simplify the derivations. Ding et al. (2017b) extended the theory to more general causal models, especially for binary Z.which has bias $bc/(a^2 + b^2 + 1)$. The adjusted estimator from the OLS of $Y$ on $(Z, X)$ satisfies

$$
egin{cases} E\{Z(Y - \tau_{\text{adj}}Z - \alpha X)\} = 0, \\ E\{X(Y - \tau_{\text{adj}}Z - \alpha X)\} = 0. \end{cases}
$$

Solve the above linear system of $(\tau_{\text{adj}}, \alpha)$ to obtain the formula of $\tau_{\text{adj}}$:

$$
\tau_{\text{adj}} = \tau + \frac{bc}{b^2 + 1}, \qquad (16.1)
$$

which has bias $bc/(b^2 + 1)$. I relegate the details for solving the linear system of $(\tau_{\text{adj}}, \alpha)$ as Problem 16.1.

So the unadjusted estimator has a smaller bias than the adjusted estimator. More interestingly, the stronger the association between $X$ and $Z$ is (measured by $a$), the larger the bias of the adjusted estimator is.

The mathematical derivation is not extremely hard. But this type of bias seems rather mysterious. Here is the intuition. The treatment is a function of $X$, $U$, and other random errors. If we condition on $X$, it is merely a function of $U$ and other random errors. Therefore, conditioning on $X$ makes $Z$ less random, and more critically, makes the unmeasured confounder $U$ play a more important role in $Z$. Consequently, the confounding bias due to $U$ is amplified by conditioning on $X$. This idealized example illustrates the danger of over-adjusting for some covariates.

Heckman and Navarro-Lozano (2004) observed this phenomenon in simulation studies. Wooldridge (2016, technical report in 2006) verified it in linear models. Pearl (2010a, 2011) explained it using causal diagrams. Ding et al. (2017b) provided a more general theory as well as some intuition for this phenomenon. This type of bias is called Z-bias because, in Pearl's original papers, he used the symbol $Z$ for our variable $X$. Throughout the book, however, $Z$ is used for the treatment variable. In Part V of this book, we will call $Z$ an instrumental variable if it satisfies the causal diagram presented in this subsection. This justifies the *instrumental variable bias* as another name for this type of bias.

The following simple example illustrates Z-bias.

```R
## Z bias with large sample size
n = 10^6
X = rnorm(n)
U = rnorm(n)
Z = X + U + rnorm(n)
Y = U + rnorm(n)

round(summary(lm(Y ~ Z))$coef[2, 1], 3)
[1] 0.333

round(summary(lm(Y ~ Z + X))$coef[2, 1], 3)
[1] 0.501
``````R
## stronger association between X and Z
Z = 2*X + U + rnorm(n)
round(summary(lm(Y ~ Z))$coef[2, 1], 3)
[1] 0.167
round(summary(lm(Y ~ Z + X))$coef[2, 1], 3)
[1] 0.501

## even stronger association between X and Z
Z = 10*X + U + rnorm(n)
round(summary(lm(Y ~ Z))$coef[2, 1], 3)
[1] 0.01
round(summary(lm(Y ~ Z + X))$coef[2, 1], 3)
[1] 0.5
```

### 16.3.3 What covariates should we adjust for in observational studies?

We never know the true underlying data-generating process which can be quite complicated. However, the following causal diagram helps to clarify many ideas. It already rules out the possibility of *M*-bias discussed in Section 16.3.1.

$$
X_R
$$

![[_resources/Ding - 2023 - A First Course in Causal Inference_Part7/d559a14983519b820386b592502c3a98_MD5.jpg]]

The covariates above have different features:

1. *X* affects both the treatment and the outcome. Conditioning on *X* ensures the unconfoundedness assumption, so we should control for *X*.
2. *X*<sub>*R*</sub> is pure random noise not affecting either the treatment or the outcome. Including it in the analysis does not bias the estimate but introduces unnecessary variability in finite samples.3. $X_Z$ is an instrumental variable that affects the outcome only through the treatment. In the diagram above, including it in the analysis does not bias the estimate but increases the variability of the estimate. However, with unmeasured confounding, including it in the analysis amplifies the bias as shown in Section 16.3.1.
4. $X_Y$ affects the outcome only but not the treatment. Without conditioning on it, the unconfoundedness assumption still holds. Since they are predictive of the outcome, including them in analysis often improves precision.
5. $X_I$ is affected by the treatment and outcome. It is a post-treatment variable, not a pretreatment covariate. We should not include it if the goal is to infer the effect of the treatment on the outcome. We will discuss issues with post-treatment variables in causal inference in Part VI of this book.

If we believe the above causal diagram, we should adjust for at least $X$ to remove bias and more ideally, further adjust for $X_Y$ to reduce variance.

## 16.4 Homework Problems

### 16.1 More details for the formula of Z-bias

Verify (16.1).

### 16.2 Cochran's formula or the omitted variable bias formula

Sir David Cox calls the following result *Cochran's formula* (Cochran, 1938; Cox, 2007) and econometricians call it the *omitted variable bias formula* (Angrist and Pischke, 2008). A special case appeared in Fisher (1925). It is also a counterpart of the Frisch-Waugh-Lovell theorem in Chapter B.3.

The formula has two versions. All vectors below are column vectors.

1. (Population version) Assume $(y_i, x_{1i}, x_{2i})_{i=1}^n$ are IID, where $y_i$ is a scalar, $x_{i1}$ has dimension $K$, and $x_{i2}$ has dimension $L$.

We have the following OLS decompositions of random variables

$$
\begin{align}
y_i &= \beta_1^\top x_{i1} + \beta_2^\top x_{2i} + \varepsilon_i, \tag{16.2} \\
y_i &= \gamma^\top x_{i1} + e_i, \tag{16.3} \\
x_{i2} &= \delta^\top x_{i1} + v_i. \tag{16.4}
\end{align}
$$

Equation (16.2) is called the long regression, and Equation (16.3) is called the short regression. In Equation (16.4), $\delta$ is a matrix becauseit is a regression of a vector on a vector. You can view (16.4) as
regression of each component of $x_{i2}$ on $x_{i1}$.

Show that $\gamma = \beta_1 + \delta\beta_2$.

2. (Sample version) We have an $n \times 1$ vector $Y$, an $n \times K$ matrix $X_1$, and an $n \times L$ matrix $X_2$. We do not assume any randomness. All results below are purely linear algebra.

We can obtain the following OLS fits:

$$
\begin{align*}
Y &= X_1\hat{\beta}_1 + X_2\hat{\beta}_2 + \hat{\varepsilon}, \\
Y &= X_1\hat{\gamma} + \hat{e}, \\
X_2 &= X_1\hat{\delta} + \hat{v},
\end{align*}
$$

where $\hat{\varepsilon}, \hat{e}, \hat{v}$ are the residuals. Again, the last OLS fit means the
OLS fit of each column of $X_2$ on $X_1$, and therefore the residual $\hat{v}$ is
an $n \times L$ matrix.

Show that $\hat{\gamma} = \hat{\beta}_1 + \hat{\delta}\hat{\beta}_2$.

Remark: The product terms $\delta\beta_2$ and $\hat{\delta}\hat{\beta}_2$ are often referred to as the omitted-variable bias at the population level and sample level, respectively.

16.3 *Recommended reading*

Imbens (2020) reviews and compares the roles of potential outcomes and
causal diagrams for causal inference.—17

E-Value: Evidence for Causation in
Observational Studies with Unmeasured
Confounding

All the methods discussed in Part III rely crucially on the ignorability assumption. They require controlling for all confounding between the treatment and outcome. However, we cannot use the data to validate the ignorability assumption. Observational studies are often criticized due to the possibility of unmeasured confounding. The famous Yule-Simpson Paradox reviewed in Chapter 1 demonstrates that an unmeasured binary confounder can completely overturn an observed association between the treatment and outcome. However, to overturn a larger observed association, this unmeasured confounder must have a stronger association with the treatment and the outcome. In other words, not all observational studies are created equal. Some provide stronger evidence for causation than others.

The following three chapters will discuss various sensitivity analysis tech-
niques that can quantify the evidence of causation based on observational
studies in the presence of unmeasured confounding. This chapter starts with
the E-value, introduced by VanderWeele and Ding (2017) based on the theory
in Ding and VanderWeele (2016). It is more useful for observational studies
using logistic regressions to estimate the conditional risk ratio of a treatment
on a binary outcome. Chapter 18 discusses sensitivity analysis for the average
causal effect based on outcome regression, IPW, and doubly robust estima-
tion. Chapter 19 discusses Rosenbaum's framework for sensitivity analysis for
matched observational studies.

17.1 Cornfield-type sensitivity analysis

Although we do not assume ignorability given $X$:

$$
Z \perp \{Y(1), Y(0)\} | X,
$$

we still assume latent ignorability given $X$ and an unmeasured confounder $U$:

$$
Z \perp \{Y(1), Y(0)\} | (X, U).
$$The technique in this chapter works the best for a binary outcome Y although it can be extended to other non-negative outcomes (Ding and VanderWeele, 2016). Focus on binary Y now. The true conditional causal effect on the risk ratio scale is defined as

$$
RR_{ZY|x}^{\text{true}} = \frac{\text{pr}\{Y(1) = 1 | X = x\}}{\text{pr}\{Y(0) = 1 | X = x\}},
$$

and the observed conditional risk ratio equals

$$
RR_{ZY|x}^{\text{obs}} = \frac{\text{pr}(Y = 1 | Z = 1, X = x)}{\text{pr}(Y = 1 | Z = 0, X = x)}.
$$

In general, with an unmeasured confounder $U$, they are different:

$$
RR_{ZY|x}^{\text{true}} \neq RR_{ZY|x}^{\text{obs}}
$$

because

$$
RR_{ZY|x}^{\text{true}} = \frac{\int \text{pr}(Y = 1 | Z = 1, X = x, U = u) f(u | X = x) du}{\int \text{pr}(Y = 1 | Z = 0, X = x, U = u) f(u | X = x) du}
$$

and

$$
RR_{ZY|x}^{\text{obs}} = \frac{\int \text{pr}(Y = 1 | Z = 1, X = x, U = u) f(u | Z = 1, X = x) du}{\int \text{pr}(Y = 1 | Z = 0, X = x, U = u) f(u | Z = 0, X = x) du}
$$

are averaged over different distributions of $U$.

Historically, Doll and Hill (1950) found that the risk ratio of cigarette smoking on lung cancer was 9 even after adjusting for many observed covariates $X^1$. Fisher (1957) criticized their result to be noncausal because it is possible that a hidden gene simultaneously causes cigarette smoking and lung cancer although the true causal effect of cigarette smoking on lung cancer is absent. This is the *common cause* hypothesis, also discussed by Reichenbach (1957). Cornfield et al. (1959) took a more constructive perspective and asked: how strong this unmeasured confounder must be to explain away the observed association between cigarette smoking and lung cancer? Below we will use Ding and VanderWeele (2016)'s general formulation of the problem.

Consider the following causal diagram:

![[_resources/Ding - 2023 - A First Course in Causal Inference_Part7/59873786eaab60cc67cf04cf8c6b2483_MD5.jpg]]

which conditions on $X$. So $Z \perp Y | (X, U)$. Conditioning on $X$ and $U$, we

¹Their original analysis was based on a case-control study and estimated the odds ratio of cigarette smoking on lung cancer. But the risk ratio is close to the odds ratio since lung cancer is a rare outcome; see Proposition 1.1.observe no association between Z and Y; but conditioning on only X, we
observe an association between Z and Y. Although we can allow U to be
general as Ding and VanderWeele (2016), we assume that U is binary to
simplify the presentation.

Define two sensitivity parameters:

$$
\mathrm{RR}_{ZU|x} = \frac{\mathrm{pr}(U = 1 | Z = 1, X = x)}{\mathrm{pr}(U = 1 | Z = 0, X = x)}
$$

measures the treatment-confounder association, and

$$
\mathrm{RR}_{UY|x} = \frac{\mathrm{pr}(Y = 1 | U = 1, X = x)}{\mathrm{pr}(Y = 1 | U = 0, X = x)},
$$

measures the confounder-outcome association, conditional on covariates $X = x$. We can show the main result below.

**Theorem 17.1** Under $Z \perp Y | (X, U)$, assume

$$
\mathrm{RR}_{ZY|x}^{\mathrm{obs}} > 1, \quad \mathrm{RR}_{ZU|x} > 1, \quad \mathrm{RR}_{UY|x} > 1. \qquad (17.1)
$$

We have

$$
\mathrm{RR}_{ZY|x}^{\mathrm{obs}} \le \frac{\mathrm{RR}_{ZU|x} \mathrm{RR}_{UY|x}}{\mathrm{RR}_{ZU|x} + \mathrm{RR}_{UY|x} - 1}.
$$

In Theorem 17.1, we assume (17.1) without loss of generality. If $\mathrm{RR}_{ZY|x}^{\mathrm{obs}} < 1$, we can relabel the treatment and control levels to ensure $\mathrm{RR}_{ZY|x}^{\mathrm{obs}} > 1$. If $\mathrm{RR}_{ZU|x} < 1$, we can redefine the unmeasured confounder $U$ as $1 - U$ to ensure $\mathrm{RR}_{ZU|x} > 1$. If $\mathrm{RR}_{ZY|x}^{\mathrm{obs}} > 1$ and $\mathrm{RR}_{ZU|x} > 1$, then $\mathrm{RR}_{UY|x} > 1$ holds automatically. I relegate this subtle technical detail to Problem 17.2.

Theorem 17.1 shows the upper bound of the observed risk ratio of the
treatment on the outcome if the conditional independence $Z \perp Y | (X, U)$
holds. Under this conditional independence assumption, the association be-
tween the treatment and the outcome is purely due to the association be-
tween the treatment and the confounder $RR_{ZU|x}$, and the association be-
tween the confounder and the outcome, $RR_{UY|x}$. The upper bound equals
$RR_{ZU|x} \times RR_{UY|x} / (RR_{ZU|x} + RR_{UY|x} - 1)$. A similar inequality appeared in
Lee (2011). It is also related to Cochran's formula or the omitted-variable bias
formula for linear models, which was reviewed in Problem 16.2.

Reversely, to generate a certain value of the observed risk ratio $RR_{ZY|x}^{\text{obs}}$, the two confounding measures $RR_{ZU|x}$ and $RR_{UY|x}$ cannot be arbitrary. Their function $RR_{ZU|x} \times RR_{UY|x} / (RR_{ZU|x} + RR_{UY|x} - 1)$ must be at least at large as $RR_{ZY|x}^{\text{obs}}$.

I will give the proof of Theorem 17.1 below.

**Proof of Theorem 17.1:** Define

$$
f_{1,x} = \mathrm{pr}(U = 1 | Z = 1, X = x), \quad f_{0,x} = \mathrm{pr}(U = 1 | Z = 0, X = x).
$$We can decompose $\text{RR}_{ZY|x}^{\text{obs}}$ as

$$
\begin{align*}
&= \frac{\text{RR}_{ZY|x}^{\text{obs}}}{\text{pr}(Y=1|Z=1, X=x) \text{pr}(Y=1|Z=0, X=x)} \\
&= \frac{\left[ \text{pr}(U=1|Z=1, X=x)\text{pr}(Y=1|Z=1, U=1, X=x) + \text{pr}(U=0|Z=1, X=x)\text{pr}(Y=1|Z=1, U=0, X=x) \right]}{\left[ \text{pr}(U=1|Z=0, X=x)\text{pr}(Y=1|Z=0, U=1, X=x) + \text{pr}(U=0|Z=0, X=x)\text{pr}(Y=1|Z=0, U=0, X=x) \right]} \\
&= \frac{\left[ \text{pr}(U=1|Z=1, X=x)\text{pr}(Y=1|U=1, X=x) + \text{pr}(U=0|Z=1, X=x)\text{pr}(Y=1|U=0, X=x) \right]}{\left[ \text{pr}(U=1|Z=0, X=x)\text{pr}(Y=1|U=1, X=x) + \text{pr}(U=0|Z=0, X=x)\text{pr}(Y=1|U=0, X=x) \right]} \\
&= \frac{f_{1,x}\text{RR}_{UY|x} + 1 - f_{1,x}}{f_{0,x}\text{RR}_{UY|x} + 1 - f_{0,x}} \\
&= \frac{(\text{RR}_{UY|x} - 1)f_{1,x} + 1}{\frac{\text{RR}_{UY|x}-1}{\text{RR}_{ZU|x}}f_{1,x} + 1}.
\end{align*}
$$

We can verify that $\text{RR}_{ZY|x}^{\text{obs}}$ is increasing in $f_{1,x}$ using the result in Problem 17.1. So letting $f_{1,x} = 1$, we have

$$
\text{RR}_{ZY|x}^{\text{obs}} \le \frac{(\text{RR}_{UY|x} - 1) + 1}{\frac{\text{RR}_{UY|x}-1}{\text{RR}_{ZU|x}} + 1} = \frac{\text{RR}_{ZU|x}\text{RR}_{UY|x}}{\text{RR}_{ZU|x} + \text{RR}_{UY|x} - 1}.
$$

□

In the proof of Theorem 17.1, we have obtained an identity

$$
\text{RR}_{ZY|x}^{\text{obs}} = \frac{(\text{RR}_{UY|x} - 1)f_{1,x} + 1}{\frac{\text{RR}_{UY|x}-1}{\text{RR}_{ZU|x}}f_{1,x} + 1}. \quad (17.2)
$$

But this identity involves three parameters

$$
\{f_{1,x}, \text{RR}_{ZU|x}, \text{RR}_{UY|x}\};
$$

see Problem 17.4 for a related formula. In contrast, the upper bound in Theorem 17.1 involves only two parameters

$$
\{\text{RR}_{ZU|x}, \text{RR}_{UY|x}\}
$$

which measure the strength of the confounder. Mathematically, the identity 17.2 is stronger than the inequality in Theorem 17.1. However, 17.2 involves more sensitivity parameters compared with Theorem 17.1. Therefore, we face a trade-off of accuracy and convenience in sensitivity analysis.## 17.2 E-value

Lemma 17.1 below is useful for deriving interesting corollaries of Theorem 17.1. I relegate its proof to Problem 17.3.

**Lemma 17.1** *Define $\beta(w_1, w_2) = w_1w_2/(w_1+w_2-1)$ for $w_1 > 1$ and $w_2 > 1$.*

1. $\beta(w_1, w_2)$ is symmetric in $w_1$ and $w_2$;
2. $\beta(w_1, w_2)$ is increasing in both $w_1$ and $w_2$;
3. $\beta(w_1, w_2) \le w_1$ and $\beta(w_1, w_2) \le w_2$;
4. $\beta(w_1, w_2) \le w^2/(2w-1)$, where $w = \max(w_1, w_2)$.

Using Theorem 17.1 and Lemma 17.1(3), we have

$$
RR_{ZU|x} \ge RR_{ZY|x}^{\text{obs}}, \quad RR_{UY|x} \ge RR_{ZY|x}^{\text{obs}},
$$

or, equivalently,

$$
\min(RR_{ZU|x}, RR_{UY|x}) \ge RR_{ZY|x}^{\text{obs}}.
$$

Therefore, to explain away the observed relative risk, both confounding measures $RR_{ZU|x}$ and $RR_{UY|x}$ must be at least as large as $RR_{ZY|x}^{\text{obs}}$. Cornfield et al. (1959) first derived the inequality $RR_{ZU|x} \ge RR_{ZY|x}^{\text{obs}}$, also called the *Cornfield inequality* (Gastwirth et al., 1998). Schlesselman (1978) derived the inequality $RR_{UY|x} \ge RR_{ZY|x}^{\text{obs}}$. These are related to the *data processing inequality* in information theory².

If we define $w = \max(RR_{ZU|x}, RR_{UY|x})$, then we can use Theorem 17.1 and Lemma 17.1(4) to obtain

$$
\begin{align*} w^2/(2w-1) &\ge \beta(RR_{ZU|x}, RR_{UY|x}) \ge RR_{ZY|x}^{\text{obs}} \\ \implies w^2 - 2RR_{ZY|x}^{\text{obs}}w + RR_{ZY|x}^{\text{obs}} &\ge 0, \end{align*}
$$

which is a quadratic inequality. One root $RR_{ZY|x}^{\text{obs}} - \sqrt{RR_{ZY|x}^{\text{obs}}(RR_{ZY|x}^{\text{obs}} - 1)}$ is always smaller than or equal to 1, so we have

$$
w = \max(RR_{ZU|x}, RR_{UY|x}) \ge RR_{ZY|x}^{\text{obs}} + \sqrt{RR_{ZY|x}^{\text{obs}}(RR_{ZY|x}^{\text{obs}} - 1)}.
$$

²In information theory, the *mutual information*

$$
I(A, B) = \iint p(a, b) \log_2 \frac{p(a, b)}{p(a)p(b)} \mathrm{d}a \mathrm{d}b
$$

measures the dependence between two random variables A and B, where $p(\cdot)$ denotes the joint or marginal density of (A, B). The *data processing inequality* is a famous result: if $Z \perp Y | U$, then $I(Z, Y) \le I(Z, U)$ and $I(Z, Y) \le I(U, Y)$. Lihua Lei and Bin Yu both pointed out to me the connection between Cornfield's inequality and the data processing inequality.Therefore, to explain away the observed relative risk, the maximum of the confounding measures $RR_{ZU|x}$ and $RR_{UY|x}$ must be at least as large as $RR_{ZY|x}^{\text{obs}} + \sqrt{RR_{ZY|x}^{\text{obs}}(RR_{ZY|x}^{\text{obs}} - 1)}$. Based on this result, VanderWeele and Ding (2017) introduced the following notion of E-value for measuring the evidence of causation with observational studies.

**Definition 17.1 (E-Value)** With the observed conditional risk ratio $RR_{ZY|x}^{\text{obs}}$, define the E-Value as

$$
RR_{ZY|x}^{\text{obs}} + \sqrt{RR_{ZY|x}^{\text{obs}}(RR_{ZY|x}^{\text{obs}} - 1)}.
$$

The E-value is defined for the parameter $RR_{ZY|x}^{\text{obs}}$. In practice, $RR_{ZY|x}^{\text{obs}}$ is estimated with sampling error. We can calculate the E-value based on the estimated $RR_{ZY|x}^{\text{obs}}$, as well as the corresponding E-values for the lower and upper confidence limits of $RR_{ZY|x}^{\text{obs}}$.

Fisher's *p*-value measures the evidence for causal effects in randomized experiments. We have discussed the *p*-value based on the FRT in Part II of this book. However, in observational studies with large sample sizes, *p*-values can be a poor measure of evidence for causal effects. Even if the true causal effects are 0, a tiny amount of unmeasured confounding can bias the estimate, which can result in extremely small *p*-values given the small sampling uncertainty. The sampling uncertainty is usually secondary in observational studies with large sample sizes, but the uncertainty due to unmeasured confounding is often the first-order problem that does not diminish with increased sample sizes. VanderWeele and Ding (2017) argued that the E-value is a better measure of the evidence for causal effects in observational studies.

## 17.3 A classic example

I revisit a classic example below.

**Example 17.1** Hammond and Horn (1958) used the U.S. population to study the cigarette smoking and lung cancer relationship. Ignoring covariates, their data can be represented by a two-by-two table below:

<table><thead><tr><th></th><th>Lung cancer</th><th>No lung cancer</th></tr></thead><tbody><tr><th>Smoker</th><td>397</td><td>78557</td></tr><tr><th>Non-smoker</th><td>51</td><td>108778</td></tr></tbody></table>

Based on the data, they obtained an estimate of the risk ratio 10.73 with a 95% confidence interval [8.02, 14.36] (see Section A.3.2 for the formulas). To explain away the point estimate, the E-value is

$$
10.73 + \sqrt{10.73 \times (10.73 - 1)} = 20.95;
$$to explain away the lower confidence limit, the E-value is

$$
8.02 + \sqrt{8.02 \times (8.02 - 1)} = 15.52.
$$

Figure 17.1 shows the joint values of the two confounding measures to explain away the point estimate and lower confidence limit of the risk ratio. In particular, to explain away the point estimate, they must lie in the area above the solid curve; to explain away the lower confidence limit, they must lie in the area above the dashed curve.³

The simple R code below computes the numbers in Example 17.1:

```R
## e-value based on RR
evalue = function rr
  {
    rr + sqrt rr * (rr - 1)
  }

p1 = 397/(397+78557)
p0 = 51/(51+108778)
rr = p1/p0
logrr = log p1/p0
se = sqrt(1/397+1/51-1/(397+78557)-1/(51+108778))
upper = exp(logrr+1.96*se)
lower = exp(logrr-1.96*se)

## point estimate
rr
[1] 10.72978

## lower CI
lower
[1] 8.017414

## e-value based on rr
evalue rr
[1] 20.94733

## e-value based on lower CI
evalue lower
[1] 15.51818
```

# 17.4 Extensions

## 17.4.1 E-value and Bradford Hill's criteria for causation

The E-value provides evidence for causation. But evidence is not a proof. With a larger E-value, we need a stronger unmeasured confounder to explain

³Based on some simple algebra, the solid curve and dashed curve are both hyperbolas.![[_resources/Ding - 2023 - A First Course in Causal Inference_Part7/8a563fe27bdf9b0baa0c0a75ad050335_MD5.jpg]]

FIGURE 17.1: Magnitude of confounding to explain away the observed risk ratio based on the data from Hammond and Horn (1958)

away the observed risk ratio; the evidence for causation is stronger. With a smaller E-value, we need a weaker unmeasured confounder to explain away the observed risk ratio; the evidence for causation is weaker. Coupled with the discussion in Section 17.5.1, a larger observed risk ratio has stronger evidence for causation. This is closely related to Sir Bradford Hill's first criterion for causation: *strength* of the association (Bradford Hill, 1965). Theorem 17.1 provides a mathematical quantification of his heuristic argument.

In a famous paper, Bradford Hill (1965) proposed a set of nine criteria to provide evidence for causation between a presumed cause and outcome.

**Definition 17.2** *Bradford Hill gave nine criteria for causation:*

1. *strength*;
2. *consistency*;
3. *specificity*;
4. *temporality*;5. biological gradient;
6. plausibility;
7. coherence;
8. experiment;
9. analogy.

The E-value is a way to justify his first criterion. That is, stronger association often provides stronger evidence for causation because to explain away stronger association, we need stronger confounding measures. We have discussed randomized experiments in Part II, which corroborates his eighth criterion. Due to the space limit, I omit the detailed discussion of his other criteria and encourage the readers to read Bradford Hill (1965). Recently, this paper has been re-printed as Bradford Hill (2020) with insightful comments from many leading researchers in causal inference.

### 17.4.2 E-value after logistic regression

With a binary outcome, it is common for epidemiologists to use a logistic regression of the outcome $Y_i$ on the treatment indicator $Z_i$ and covariates $X_i$:

$$
\text{pr}(Y_i = 1 | Z_i, X_i) = \frac{e^{\beta_0 + \beta_1 Z_i + \beta_2^\top X_i}}{1 + e^{\beta_0 + \beta_1 Z_i + \beta_2^\top X_i}}
$$

In the logistic model above, the coefficient of $Z_i$ is the log of the conditional odds ratio between the treatment and the outcome given the covariates:

$$
\beta_1 = \log \frac{\text{pr}(Y_i = 1 | Z_i = 1, X_i = x)}{\text{pr}(Y_i = 1 | Z_i = 0, X_i = x)}
$$

Importantly, the logistic model assumes a common odds ratio across all values of the covariates. Moreover, when the outcome is rare in that $\text{pr}(Y_i = 1 | Z_i = 1, X_i = x)$ and $\text{pr}(Y_i = 1 | Z_i = 0, X_i = x)$ are close to 0, the conditional odds ratio approximates the conditional risk ratio (see Proposition 1.1(3)):

$$
\beta_1 \approx \log \frac{\text{pr}(Y_i = 1 | Z_i = 1, X_i = x)}{\text{pr}(Y_i = 1 | Z_i = 0, X_i = x)} = \log \text{RR}_{ZY|x}^{\text{obs}}
$$

Therefore, based on the estimated logistic regression coefficient and the corresponding confidence limits, we can calculate the E-value immediately. This is the leading application of the E-value.

**Example 17.2** The NCHS2003.txt contains the National Center for Health Statistics birth certificate data, with the following binary indicator variables useful for us:PTbirth pre-term birth
preeclampsia pre-eclampsia
ageabove35 an older mother with age ≥ 35 (the treatment)
somecollege college education
mar marital status
smoking smoking status
drinking drinking status
hispanic mother's ethnicity
black mother's ethnicity
nativeamerican mother's ethnicity
asian mother's ethnicity

This version of the data is from Valeri and Vanderweele (2014). This ex-
ample focuses on the outcome PTbirth and Problem 17.5 focuses on the out-
come pre-eclampsia, a multisystem hypertensive disorder of pregnancy. The
following R code computes the E-values after fitting a logistic regression. Based
on the E-values, we conclude that to explain away the point estimate, the max-
imum confounding measure must be larger than 1.94, and to explain away the
lower confidence limit, the maximum confounding measure must be larger than
1.91. Although these confounding measures are not as strong as those in Sec-
tion 17.3, they appear to be fairly large in epidemiologic studies.

The simple R code below computes the numbers in Example 17.2:

```R
> NCHS2003 = read.table("NCHS2003.txt", header = TRUE, sep = "\t")
> ## outcome: PTbirth
> y_logit = glm(PTbirth ~ ageabove35 +
+                 mar + smoking + drinking + somecollege +
+                 hispanic + black + nativeamerican + asian,
+                 data = NCHS2003,
+                 family = binomial)
> log_or   = summary(y_logit)$coef[2, 1:2]
> est     = exp(log_or[1])
> lower.ci = exp(log_or[1] - 1.96*log_or[2])
> est
Estimate
1.305982
> evalue est
Estimate
1.938127
> lower.ci
Estimate
1.294619
> evalue(lower.ci)
Estimate
1.912211
```17.4.3 Non-zero true causal effect

Theorem 17.1 assumes no true causal effect of the treatment on the outcome.
Ding and VanderWeele (2016) proved a general theorem allowing for a non-
zero true causal effect.

**Theorem 17.2** *Modify the definition of $RR_{UY|x}$ as*

$$
RR_{UY|x} = \max_{z=0,1} \frac{\Pr(Y = 1 | Z = z, U = 1, X = x)}{\Pr(Y = 1 | Z = z, U = 0, X = x)}.
$$

Assume (17.1). We have

$$
RR_{ZY|x}^{\text{true}} \ge RR_{ZY|x}^{\text{obs}} / \frac{RR_{ZU|x}^{\text{true}} RR_{UY|x}}{RR_{ZU|x} + RR_{UY|x} - 1}.
$$

Theorem 17.1 is a special case of Theorem 17.2 with $RR_{ZY|x}^{\text{true}} = 1$. See the original paper of Ding and VanderWeele (2016) for the proof of Theorem 17.2. Without assuming any additional assumptions, Theorem 17.2 states a lower bound of the true risk ratio $RR_{ZY|x}^{\text{true}}$ given the observed risk ratio $RR_{ZY|x}^{\text{obs}}$ and the two sensitivity parameters $RR_{ZU|x}$ and $RR_{UY|x}$.

When the treatment is apparently preventive to the outcome, the observed
risk ratio is smaller than 1. In this case, Theorems 17.1 and 17.2 are not
directly useful, and we must re-label the treatment levels and calculate the
E-value based on 1/RR<sub>ZY|x</sub><sup>obs</sup>.

17.5 Critiques and responses

Since the original paper was published, the E-value has become a standard
number reported in many epidemiologic studies. Nevertheless, it also attracted
critiques (Ioannidis et al., 2019). I will review some limitations of E-values
below.

17.5.1 E-value is just a monotone transformation of the risk ratio

From Figure 17.2, we can see that if the risk ratio is large, then the E-value
$RR_{ZY|x}^{\text{obs}} + \sqrt{RR_{ZY|x}^{\text{obs}}(RR_{ZY|x}^{\text{obs}} - 1)}$ is nearly $2RR_{ZY|x}^{\text{obs}}$ which is linear in the risk
ratio. For a small risk ratio, the E-value is more nonlinear in $RR_{ZY|x}^{\text{obs}}$. Critics
often say that the E-value is merely a monotone transformation of the point
estimator or the confidence limits of the risk ratio. So it does not provide any
additional information.

This is partially true. Indeed, the E-value is entirely based on the point![[_resources/Ding - 2023 - A First Course in Causal Inference_Part7/27b884a4fcb9d0bbefd429e03f805cfe_MD5.jpg]]

FIGURE 17.2: E-value as a monotone transformation of the risk ratio: three figures have different ranges of the risk ratio.

estimator or the confidence limits of the risk ratio. However, it has a meaningful interpretation based on Theorem 17.1: to explain away the observed risk ratio, the maximum of the confounding measures must be at least as large as the E-value.

### 17.5.2 Calibration of the E-value

The E-value equals the maximum value of the association between the confounder and the treatment and that between the confounder and the outcome to completely explain away an observed association. An obvious problem is that this confounder is fundamentally latent. So it is not trivial to decide whether a certain E-value is large or small. Another related problem is that the E-value depends on how many observed covariates $X$ we have controlled for since it quantifies the strength of the residual confounding given $X$. Therefore, E-values across studies are not directly comparable. The E-value provides evidence for causation but this evidence should be assessed carefully based on background knowledge of the problem of interest.

The following leave-one-covariate-out approach is an intuitive approach to calibrating the E-value. With $X = (X_1, \dots, X_p)$, we can pretend that the component $X_j$ were not observed and compute the $Z-X_j$ and $X_j-Y$ risk ratios given other observed covariates ($j = 1, \dots, p$). These risk ratios provide the range for the confounding measures due to $U$ if we believe that the unmeasured $U$ is not as strong as some of the observed covariates. However, I am not aware of any formal justification for this approach.

### 17.5.3 It works the best for a binary outcome and the risk ratio

Theorem 17.1 works well for a binary outcome and the risk ratio. Ding and VanderWeele (2016) also proposed sensitivity analysis methods for othercausal parameters, including the risk difference for binary outcomes, the mean ratio for non-negative outcomes, and the hazard ratio for survival outcomes. However, they are not as elegant as the E-value for binary outcomes based on the risk ratio. The next chapter will propose a simple sensitivity analysis method for the average causal effect that can include the outcome regression, IPW, and doubly robust estimators in Part III as special cases.

**17.6 Homework Problems**

**17.1 A technical lemma for the proof of Theorem 17.1**

Show that

$$
f(x) = \frac{ax + 1}{bx + 1}
$$

is increasing in $x$ if $a > b$ and decreasing in $x$ if $a < b$.

**17.2 Technical assumption for Theorem 17.1**

Revisit the proof of Theorem 17.1. Assume $Z \perp Y | (X, U)$. Show that if $RR_{ZU|x} > 1$ but $RR_{UY|x} < 1$, then $RR_{ZY|x}^{\text{obs}} < 1$.

Remark: This result is intuitive. Condition on $X$. It says that if the Z-U relationship is positive and the U-Y relationship is negative, then the Z-Y relationship is negative given the conditional independence of $Z$ and $Y$ given $U$. Based on this result, if we assume $RR_{ZY|x}^{\text{obs}} > 1$ and $RR_{ZU|x} > 1$, then $RR_{UY|x} > 1$ must be true. Therefore, the third condition in (17.1) is in fact redundant.

**17.3 Lemma 17.1**

Prove Lemma 17.1.

**17.4 Schlesselman (1978)'s formula**

For simplicity, we condition on $X$ implicitly in this problem. Consider a binary treatment $Z$, outcome $Y$, and unmeasured confounder $U$. Assume a common risk ratio of the treatment on the outcome within both $U = 0$ and $U = 1$:

$$
RR_{ZY|U=0} = RR_{ZY|U=1},
$$

and also a common risk ratio of the confounder on the outcome within both $Z = 0$ and $Z = 1$:

$$
RR_{UY|Z=0} = RR_{UY|Z=1}, \text{ denoted by } \gamma.
$$

Show that

$$
\frac{RR_{ZY}^{\text{obs}}}{RR_{ZY}^{\text{true}}} = \frac{1 + (\gamma - 1)\text{pr}(U = 1 | Z = 1)}{1 + (\gamma - 1)\text{pr}(U = 1 | Z = 0)}.
$$Remark: First verify that if $RR_{ZY|U=0} = RR_{ZY|U=1}$ then

$$
RR_{ZY}^{\text{true}} = RR_{ZY|U=0} = RR_{ZY|U=1}.
$$

This identity shows the *collapsibility* of the risk ratio. In epidemiology, the risk ratio is a *collapsible* measure of association.

Schlesselman (1978)'s formula does not assume conditional independence $Z \perp Y | U$, but assumes homogeneity of the Z-Y and U-Y risk ratios. It is a classic formula for sensitivity analysis. It is an identity that is simple to implement with pre-specified

$$
\{\gamma, \text{pr}(U = 1 | Z = 1), \text{pr}(U = 1 | Z = 0)\}.
$$

However, it involves more sensitivity parameters than Theorem 17.1. Even though Theorem 17.1 only gives an inequality, it is not a loose inequality compared to Schlesselman (1978)'s formula under stronger assumptions. With Theorem 17.1, Schlesselman (1978)'s formula is only of historical interest.

## 17.5 E-value after logistic regression: data analysis

This problem uses the same dataset as Example 17.2.

Report the E-value for the outcome *preeclampsia*.

## 17.6 Cornfield-type inequalities for the risk difference

Consider binary $Z, Y, U$, and condition on $X$ implicitly. Assume latent ignorability given $U$. Show that under $Z \perp Y | U$, we have

$$
RD_{ZY}^{\text{obs}} = RD_{ZU} \times RD_{UY} \qquad (17.3)
$$

where $RD_{ZY}^{\text{obs}}$ is the observed risk difference of $Z$ on $Y$, and $RD_{ZU}$ and $RD_{UY}$ are the treatment-confounder and confounder-outcome risk differences, respectively (recall the definition of the risk difference in Chapter 1.2.2).

Remark: Without loss of generality, assume that $RD_{ZY}^{\text{obs}}$, $RD_{ZU}$, $RD_{UY}$ are all positive. Then (17.3) implies that

$$
\min(RD_{ZU}, RD_{UY}) \geq RD_{ZY}^{\text{obs}}
$$

and

$$
\max(RD_{ZU}, RD_{UY}) \geq \sqrt{RD_{ZY}^{\text{obs}}}.
$$

These are the Cornfield inequalities for the risk difference with a binary confounder. They show that for an unmeasured confounder to explain away an observed risk difference $RD_{ZY}^{\text{obs}}$, the treatment-confounder and confounder-outcome risk differences must both be larger than $RD_{ZY}^{\text{obs}}$, and the maximum of them must be larger than the square root of $RD_{ZY}^{\text{obs}}$.

Cornfield et al. (1959) obtained, but did not appreciate the significance of (17.3). Gastwirth et al. (1998) and Poole (2010) discussed the first Cornfield17.6 *Homework Problems*

condition for the risk difference, and Ding and VanderWeele (2014) discussed
the second.

Ding and VanderWeele (2014) also derived more general results without assuming a binary *U*. Unfortunately, the results for a general *U* are weaker than those above for a binary *U*, that is, the inequalities become looser with more levels of *U*. This motivated Ding and VanderWeele (2016) to focus on the Cornfield inequalities for the risk ratio, which do not deteriorate with more levels of *U*.

17.7 *Recommended reading*

Ding and VanderWeele (2016) extended and unified the Cornfield-type sensi-
tivity analysis, which is the theoretical basis for the notion of E-value.18

Sensitivity Analysis for the Average Causal
Effect with Unmeasured Confounding

Cornfield-type sensitivity analysis works best for binary outcomes on the risk ratio scale, conditional on the observed covariates. Although Ding and VanderWeele (2016) also proposed Cornfield-type sensitivity analysis methods for the average causal effect, they are not general enough and are not convenient to apply. Below I give a more direct approach to sensitivity analysis based on the conditional expectations of the potential outcomes. The advantage of this approach is that it can deal with commonly used estimators for the average causal effect under the sensitivity analysis framework. The idea appeared in the early work of Robins (1999) and Scharfstein et al. (1999). This chapter is based on Lu and Ding (2023)'s recent formulation.

The approach is closely related to the idea of deriving worse-case bounds on
the average potential outcomes. I will first review the simpler idea of bounds,
and then extend the approach to sensitivity analysis.

18.1 Introduction

Recall the canonical setup of an observational study with {$Z_i, X_i, Y_i(1), Y_i(0)$}$_{i=1}^n$ IID
{$Z, X, Y(1), Y(0)$} and focus on the average causal effect

$$
\tau = E\{Y(1) - Y(0)\}.
$$

It decomposes to

$$
\tau = [E(Y | Z = 1)\mathrm{pr}(Z = 1) + E\{Y(1) | Z = 0\}\mathrm{pr}(Z = 0)] \\
- [E\{Y(0) | Z = 1\}\mathrm{pr}(Z = 1) + E(Y | Z = 0)\mathrm{pr}(Z = 0)].
$$

So the fundamental difficulty is to estimate the counterfactual means

$$
E\{Y(1) | Z = 0\}, \quad E\{Y(0) | Z = 1\}.
$$

There are in general two extreme strategies to estimate them.

We have discussed the first strategy in Part III, which relies on ignorability.TABLE 18.1: Science Table with bounded outcome [y, ŷ], where y and ŷ are
two constants

<table>
  <thead>
    <tr>
      <th>Z</th>
      <th>Y(1)</th>
      <th>Y(0)</th>
      <th>Lower Y(1)</th>
      <th>Upper Y(1)</th>
      <th>Lower Y(0)</th>
      <th>Upper Y(0)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Y<sub>1</sub>(1)</td>
      <td>?</td>
      <td>Y<sub>1</sub>(1)</td>
      <td>Y<sub>1</sub>(1)</td>
      <td>y&#773;</td>
      <td>y&#773;</td>
    </tr>
    <tr>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <td>1</td>
      <td>Y<sub>n<sub>1</sub></sub>(1)</td>
      <td>?</td>
      <td>Y<sub>n<sub>1</sub></sub>(1)</td>
      <td>Y<sub>n<sub>1</sub></sub>(1)</td>
      <td>y&#773;</td>
      <td>y&#773;</td>
    </tr>
    <tr>
      <td>0</td>
      <td>?</td>
      <td>Y<sub>n<sub>1</sub>+1</sub>(0)</td>
      <td>y&#773;</td>
      <td>y&#773;</td>
      <td>Y<sub>n<sub>1</sub>+1</sub>(0)</td>
      <td>Y<sub>n<sub>1</sub>+1</sub>(0)</td>
    </tr>
    <tr>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <td>0</td>
      <td>?</td>
      <td>Y<sub>n</sub>(0)</td>
      <td>y&#773;</td>
      <td>y&#773;</td>
      <td>Y<sub>n</sub>(0)</td>
      <td>Y<sub>n</sub>(0)</td>
    </tr>
  </tbody>
</table>

Assuming

$$
E\{Y(1) | Z = 1, X\} = E\{Y(1) | Z = 0, X\},
$$

$$
E\{Y(0) | Z = 1, X\} = E\{Y(0) | Z = 0, X\},
$$

we can identify the counterfactual means by the observables:

$$
E\{Y(1) | Z = 0\} = E\{E(Y | Z = 1, X) | Z = 0\}
$$

and, similarly,

$$
E\{Y(0) | Z = 1\} = E\{E(Y | Z = 0, X) | Z = 1\}.
$$

The second strategy in the next section assumes nothing except that the outcomes are bounded between *y* and *ŷ*. This is natural for binary outcomes with *y* = 0 and *ŷ* = 1. With this assumption, the two counterfactual means are also bounded between *y* and *ŷ*, which implies the worst-case bounds on *τ*. Table 18.1 illustrates the basic idea and Chapter 18.2 below reviews this strategy in more detail.

18.2 Manski-type worse-case bounds on the average
causal effect without assumptions

Assume that the outcome is bounded between *y* and *ŷ*. From the decomposition

$$
E\{Y(1)\} = E\{Y(1) | Z = 1\}\mathrm{pr}(Z = 1) + E\{Y(1) | Z = 0\}\mathrm{pr}(Z = 0),
$$

we can derive that $E\{Y(1)\}$ has lower bound

$$
E\{Y | Z = 1\} \mathrm{pr}(Z = 1) + y \mathrm{pr}(Z = 0)
$$18.2 *Manski-type worse-case bounds on the average causal effect without assumptions* 249

and upper bound

$$
E\{Y \mid Z = 1\}\mathrm{pr}(Z = 1) + \bar{y}\mathrm{pr}(Z = 0).
$$

Similarly, from the decomposition

$$
E\{Y(0)\} = E\{Y(0) \mid Z = 1\}\mathrm{pr}(Z = 1) + E\{Y(0) \mid Z = 0\}\mathrm{pr}(Z = 0),
$$

we can derive that $E\{Y(0)\}$ has lower bound

$$
\underline{y}\mathrm{pr}(Z = 1) + E\{Y \mid Z = 0\}\mathrm{pr}(Z = 0)
$$

and upper bound

$$
\bar{y}\mathrm{pr}(Z = 1) + E\{Y \mid Z = 0\}\mathrm{pr}(Z = 0).
$$

Combining these bounds, we can derive that the average causal effect $\tau = E\{Y(1)\} - E\{Y(0)\}$ has the lower bound

$$
E\{Y \mid Z = 1\}\mathrm{pr}(Z = 1) + \underline{y}\mathrm{pr}(Z = 0) - \bar{y}\mathrm{pr}(Z = 1) - E\{Y \mid Z = 0\}\mathrm{pr}(Z = 0)
$$

and the upper bound

$$
E\{Y \mid Z = 1\}\mathrm{pr}(Z = 1) + \bar{y}\mathrm{pr}(Z = 0) - \underline{y}\mathrm{pr}(Z = 1) - E\{Y \mid Z = 0\}\mathrm{pr}(Z = 0).
$$

The length of the bounds is $\bar{y} - \underline{y}$. The bounds are not informative but are better than the a priori bounds [$\underline{y} - \bar{y}, \bar{y} - \underline{y}$] with length $2(\bar{y} - \underline{y})$. Without further assumptions, the observed data distribution does not uniquely determine $\tau$. In this case, we say that $\tau$ is *partially identified*, with the formal definition below.

**Definition 18.1 (partial identification)** A parameter $\theta$ is partially identified if the observed data distribution is compatible with multiple values of $\theta$.

Compare Definitions 10.1 and 18.1. If the parameter $\theta$ is uniquely determined by the observed data distribution, then it is identifiable; otherwise, it is only partially identifiable. Therefore, $\tau$ is identifiable with the ignorability assumption, but only partially identifiable without the ignorability assumption.

Cochran (1953) used the idea of worse-case bounds in surveys with missing data but abandoned the idea because it often gives very conservative results. Similarly, the above worst-case bounds on $\tau$ are often uninteresting from a practical perspective because they often cover 0. Moreover, this strategy does not apply to the settings with unbounded outcomes.

Manski applied the idea to causal inference (Manski, 1990) and many other econometric models (Manski, 2003). This idea of bounding causal parameters with minimal assumptions is powerful when coupled with other qualitativeassumptions. Manski (2003) surveyed many strategies. For instance, we may believe that the treatment does not harm any units, so the monotonicity assumption holds: $Y(1) \ge Y(0)$. Then the lower bound on $\tau$ is zero but the upper bound is unchanged. Another type of assumption is $Z = I\{Y(1) \ge Y(0)\}$, that is, the treatment selection is based on the difference between the latent potential outcomes. This assumption can also improve the bounds on $\tau$. A more detailed discussion of this approach is beyond the scope of this book.

## 18.3 Sensitivity analysis for the average causal effect

The first strategy is optimistic and assumes that the potential outcomes do not differ across treatment and control groups, conditional on the observed covariates. The second strategy is pessimistic and does not infer the counterfactual means based on the observed data at all. The following strategy is in-between.

### 18.3.1 Identification formulas

Define

$$
\begin{aligned}
\frac{E\{Y(1) | Z = 1, X\}}{E\{Y(1) | Z = 0, X\}} &= \varepsilon_1(X), \\
\frac{E\{Y(0) | Z = 1, X\}}{E\{Y(0) | Z = 0, X\}} &= \varepsilon_0(X),
\end{aligned}
$$

which are the sensitivity parameters. For simplicity, we can further assume that they are constant independent of $X$. In practice, we need to fix them or vary them in a pre-specified range. Recall that $\mu_1(X) = E(Y | Z = 1, X)$ and $\mu_0(X) = E(Y | Z = 0, X)$ are the conditional mean functions of the observed outcomes under treatment and control, respectively. We can identify the two counterfactual means and the average causal effect as follows.

**Theorem 18.1** With known $\varepsilon_1(X)$ and $\varepsilon_0(X)$, we have

$$
\begin{aligned}
E\{Y(1) | Z = 0\} &= E\{\mu_1(X)/\varepsilon_1(X) | Z = 0\}, \\
E\{Y(0) | Z = 1\} &= E\{\mu_0(X)\varepsilon_0(X) | Z = 1\}
\end{aligned}
$$

and therefore

$$
\begin{aligned}
\tau &= E\{ZY + (1-Z)\mu_1(X)/\varepsilon_1(X)\} \\
&\quad -E\{Z\mu_0(X)\varepsilon_0(X) + (1-Z)Y\}
\end{aligned}
 \quad (18.1)
$$

$$
\begin{aligned}
&= E\{Z\mu_1(X) + (1-Z)\mu_1(X)/\varepsilon_1(X)\} \\
&\quad -E\{Z\mu_0(X)\varepsilon_0(X) + (1-Z)\mu_0(X)\}.
\end{aligned}
 \quad (18.2)
$$I leave the proof of Theorem 18.1 to Problem 18.1. With the fitted outcome model, (18.1) and (18.2) motivate the following predictive and projective estimators for $\tau$:

$$
\hat{\tau}^{\text{pred}} = \left\{ n^{-1} \sum_{i=1}^{n} Z_i Y_i + n^{-1} \sum_{i=1}^{n} (1-Z_i) \hat{\mu}_1(X_i) / \varepsilon_1(X_i) \right\} - \left\{ n^{-1} \sum_{i=1}^{n} Z_i \hat{\mu}_0(X_i) \varepsilon_0(X_i) + n^{-1} \sum_{i=1}^{n} (1-Z_i) Y_i \right\},
$$

and

$$
\hat{\tau}^{\text{proj}} = \left\{ n^{-1} \sum_{i=1}^{n} Z_i \hat{\mu}_1(X_i) + n^{-1} \sum_{i=1}^{n} (1-Z_i) \hat{\mu}_1(X_i) / \varepsilon_1(X_i) \right\} - \left\{ n^{-1} \sum_{i=1}^{n} Z_i \hat{\mu}_0(X_i) \varepsilon_0(X_i) + n^{-1} \sum_{i=1}^{n} (1-Z_i) \hat{\mu}_0(X_i) \right\}.
$$

The terminology “predictive” and “projective” is from the survey sampling literature (Firth and Bennett, 1998; Ding and Li, 2018); see also Chapter 6.2.2.2. The estimators $\hat{\tau}^{\text{pred}}$ and $\hat{\tau}^{\text{proj}}$ differ slightly: the former uses the observed outcomes when available, whereas the latter replaces the observed outcomes with the fitted values.

More interesting, we can also identify $\tau$ by an inverse probability weighting formula.

**Theorem 18.2** With known $\varepsilon_1(X)$ and $\varepsilon_0(X)$, we have

$$
E\{Y(1)\} = E\left\{w_1(X) \frac{Z}{e(X)} Y\right\}, \quad E\{Y(0)\} = E\left\{w_0(X) \frac{1-Z}{1-e(X)} Y\right\},
$$

where

$$
w_1(X) = e(X) + \frac{1 - e(X)}{\varepsilon_1(X)}, \quad w_0(X) = e(X)\varepsilon_0(X) + 1 - e(X).
$$

I leave the proof of Theorem 18.2 to Problem 18.2. Theorem 18.2 modifies the classic IPW formulas with two extra factors $w_1(X)$ and $w_0(X)$, which depend on both the propensity score and the sensitivity parameters. With the fitted propensity scores, Theorem 18.2 motivates the following estimators for $\tau$:

$$
\hat{\tau}^{\text{ht}} = n^{-1} \sum_{i=1}^{n} \frac{\{\hat{e}(X_i)\varepsilon_1(X_i) + 1 - \hat{e}(X_i)\}Z_iY_i}{\varepsilon_1(X_i)\hat{e}(X_i)} - n^{-1} \sum_{i=1}^{n} \frac{\{\hat{e}(X_i)\varepsilon_0(X_i) + 1 - \hat{e}(X_i)\}(1-Z_i)Y_i}{1 - \hat{e}(X_i)}
$$and

$$
\begin{align*}
\hat{\tau}^{\text{haj}} &= \frac{\sum_{i=1}^{n} \frac{\{\hat{e}(X_i)\varepsilon_1(X_i) + 1 - \hat{e}(X_i)\}Z_iY_i}{\varepsilon_1(X_i)\hat{e}(X_i)}}{\sum_{i=1}^{n} \frac{Z_i}{\hat{e}(X_i)}} \\
&\quad - n^{-1} \frac{\sum_{i=1}^{n} \frac{\{\hat{e}(X_i)\varepsilon_0(X_i) + 1 - \hat{e}(X_i)\}(1 - Z_i)Y_i}{1 - \hat{e}(X_i)}}{\sum_{i=1}^{n} \frac{1 - Z_i}{1 - \hat{e}(X_i)}}
\end{align*}
$$

More interestingly, with fitted propensity score and outcome models, the
following estimator for τ is doubly robust:

$$
\hat{\tau}^{\text{ht}} = \hat{\tau}^{\text{ht}} - n^{-1} \sum_{i=1}^{n} \{Z_i - \hat{e}(X_i)\} \left\{ \frac{\hat{\mu}_1(X_i)}{\hat{e}(X_i)\varepsilon_1(X_i)} + \frac{\hat{\mu}_0(X_i)\varepsilon_0(X_i)}{1 - \hat{e}(X_i)} \right\}.
$$

That is, with known ε₁(Xᵢ) and ε₀(Xᵢ), the estimator ̂τ<sup>dr</sup> is consistent for τ if either the propensity score model or the outcome model is correctly specified. We can use the bootstrap to approximate the variance of the above estimators. See Lu and Ding (2023) for technical details.

When $\varepsilon_1(X_i) = \varepsilon_0(X_i) = 1$, the above estimators reduce to the predictive estimator, IPW estimator, and the doubly robust estimators introduced in Part III.

18.3.2 Example

18.3.2.1 R functions for sensitivity analysis

The following R function can compute the point estimates for sensitivity anal-
ysis.

```R
OS_est_sa = function(z, y, x, out.family = gaussian,
                     truncps = c(0, 1), e1 = 1, e0 = 1)
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
  ace.reg  = mean(z*y) + mean((1-z)*outcome1/e1) -
             mean(z*outcome0*e0) - mean((1-z)*y)

  ## IPW estimators
  w1 = pscore + (1-pscore)/e1
  w0 = pscore*e0 + (1-pscore)
```ace.ipw0 = mean(z*y*w1/pscore) - mean((1 - z)*y*w0/(1 - pscore))
ace.ipw = mean(z*y*w1/pscore)/mean(z/pscore) - mean((1 - z)*y*w0/(1 - pscore))/mean((1 - z)/(1 - pscore))
## doubly robust estimator
aug = outcome1/pscore/e1 + outcome0*e0/(1-pscore)
ace.dr = ace.ipw0 + mean((z-pscore)*aug)

return(c(ace.reg, ace.ipw0, ace.ipw, ace.dr))

I relegate the calculation of the standard errors to Problem 18.3.

18.3.2.2 Revisit Example 10.3

With

$$
\varepsilon_1(X) = \varepsilon_0(X) \in \{1/2, 1/1.7, 1/1.5, 1/1.3, 1, 1.3, 1.5, 1.7, 2\},
$$

we obtain an array of doubly robust estimates of τ based on the following R
code:

> nhanes_bmi = read.csv("nhanes_bmi.csv")[, -1]
> z = nhanes_bmi$School_meal
> y = nhanes_bmi$BMI
> x = as.matrix(nhanes_bmi[, -c(1, 2)])
> x = scale(x)
>
>
> E1 = c(1/2, 1/1.7, 1/1.5, 1/1.3, 1, 1.3, 1.5, 1.7, 2)
> E0 = c(1/2, 1/1.7, 1/1.5, 1/1.3, 1, 1.3, 1.5, 1.7, 2)
> EST = outer(E1, E0)
> lll = length(E1)
> llo = length(E0)
> for(i in 1:lll)
+   for(j in 1:ll0)
+     EST[i, j] = OS_estsa(z, y, x, e1 = E1[i], e0 = E0[j])[4]

Table 18.2 presents the point estimates. The signs of the estimates are not sensitive to sensitivity parameters larger than 1, but they are quite sensitive to sensitivity parameters smaller than 1. When the participants of the meal plan tend to have higher BMI (that is, ε₁(X) > 1 and ε₀(X) > 1), the average causal effect of the meal plan on BMI is negative. However, this conclusion can be quite sensitive if the participants of the meal plan tend to have lower BMI.TABLE 18.2: Sensitivity analysis for the average causal effect

<table><thead><tr><th></th><th>1/2</th><th>1/1.7</th><th>1/1.5</th><th>1/1.3</th><th>1</th><th>1.3</th><th>1.5</th><th>1.7</th><th>2</th></tr></thead><tbody><tr><th>1/2</th><td>11.62</td><td>10.44</td><td>9.40</td><td>8.03</td><td>4.96</td><td>0.97</td><td>-1.69</td><td>-4.35</td><td>-8.34</td></tr><tr><th>1/1.7</th><td>9.22</td><td>8.05</td><td>7.00</td><td>5.64</td><td>2.57</td><td>-1.42</td><td>-4.08</td><td>-6.75</td><td>-10.74</td></tr><tr><th>1/1.5</th><td>7.63</td><td>6.45</td><td>5.41</td><td>4.05</td><td>0.97</td><td>-3.02</td><td>-5.68</td><td>-8.34</td><td>-12.33</td></tr><tr><th>1/1.3</th><td>6.03</td><td>4.86</td><td>3.81</td><td>2.45</td><td>-0.62</td><td>-4.61</td><td>-7.27</td><td>-9.94</td><td>-13.93</td></tr><tr><th>1</th><td>3.64</td><td>2.47</td><td>1.42</td><td>0.06</td><td>-3.01</td><td>-7.01</td><td>-9.67</td><td>-12.33</td><td>-16.32</td></tr><tr><th>1.3</th><td>1.80</td><td>0.63</td><td>-0.42</td><td>-1.78</td><td>-4.85</td><td>-8.85</td><td>-11.51</td><td>-14.17</td><td>-18.16</td></tr><tr><th>1.5</th><td>0.98</td><td>-0.19</td><td>-1.24</td><td>-2.60</td><td>-5.67</td><td>-9.66</td><td>-12.33</td><td>-14.99</td><td>-18.98</td></tr><tr><th>1.7</th><td>0.36</td><td>-0.82</td><td>-1.86</td><td>-3.23</td><td>-6.30</td><td>-10.29</td><td>-12.95</td><td>-15.61</td><td>-19.60</td></tr><tr><th>2</th><td>-0.35</td><td>-1.52</td><td>-2.57</td><td>-3.93</td><td>-7.00</td><td>-10.99</td><td>-13.65</td><td>-16.32</td><td>-20.31</td></tr></tbody></table>

## 18.4 Homework Problems

18.1 *Proof of Theorem 18.1*

Prove Theorem 18.1.

18.2 *Proof of Theorem 18.2*

Prove Theorem 18.2.

18.3 *Standard errors in sensitivity analysis*

Chapter 18.3.2 only presents the point estimates. Report the corresponding bootstrap standard errors.

18.4 *Sensitivity analysis for the average causal effect on the treated units* $\tau_T$

This problem extends Chapter 13 to allow for unmeasured confounding for estimating

$$
\tau_T = E\{Y(1) - Y(0) | Z = 1\} = E(Y | Z = 1) - E(Y(0) | Z = 1).
$$

We can easily estimate $E(Y | Z = 1)$ by the sample moment, $\hat{\mu}_{T1} = \frac{\sum_{i=1}^{n} Z_i Y_i}{\sum_{i=1}^{n} Z_i}$. The only counterfactual term is $E\{Y(0) | Z = 1\}$. Therefore, we only need the sensitivity parameter $\varepsilon_0(X)$. We have the following two identification formulas with a known $\varepsilon_0(X)$.

**Theorem 18.3** With known $\varepsilon_0(X)$, we have

$$
\begin{aligned} E\{Y(0) | Z = 1\} &= E\{Z\mu_0(X)\varepsilon_0(X)\} / e \\ &= E\left\{e(X)\varepsilon_0(X) \frac{1-Z}{1-e(X)} Y\right\} / e, \end{aligned}
$$

where $e = \text{pr}(Z = 1)$Prove Theorem 18.3.

Remark: Theorem 18.3 motivates using $\hat{\tau}_{\text{T}}^{*} = \hat{\mu}_{\text{T1}} - \hat{\mu}_{\text{T0}}^{*}$ to estimate $\tau_{\text{T}}$, where

$$
\begin{align*}
\hat{\mu}_{\text{T0}}^{\text{reg}} &= n_1^{-1} \sum_{i=1}^{n} Z_i \varepsilon_0(X_i) \hat{\mu}_0(X_i), \\
\hat{\mu}_{\text{T0}}^{\text{ht}} &= n_1^{-1} \sum_{i=1}^{n} \varepsilon_0(X_i) \hat{o}(X_i) (1 - Z_i) Y_i, \\
\hat{\mu}_{\text{T0}}^{\text{haj}} &= \sum_{i=1}^{n} \varepsilon_0(X_i) \hat{o}(X_i) (1 - Z_i) Y_i / \sum_{i=1}^{n} \hat{o}(X_i) (1 - Z_i),
\end{align*}
$$

with $\hat{o}(X_i) = \hat{e}(X_i)/\{1 - \hat{e}(X_i)\}$ being the estimated conditional odds of the treatment given the observed covariates. Moreover, we can construct the doubly robust estimator $\hat{\tau}_{\text{T}}^{\text{dr}} = \hat{\mu}_{\text{T1}} - \hat{\mu}_{\text{T0}}^{\text{dr}}$ for $\tau_{\text{T}}$, where

$$
\hat{\mu}_{\text{T0}}^{\text{dr}} = \hat{\mu}_{\text{T0}}^{\text{ht}} - n_1^{-1} \sum_{i=1}^{n} \varepsilon_0(X_i) \frac{\hat{e}(X_i) - Z}{1 - \hat{e}(X_i)} \hat{\mu}_0(X_i).
$$

Lu and Ding (2023) provide more details.

## 18.5 *R code*

Implement the estimators in Problem 18.4. Analyze the data used in Chapter 18.3.2.

## 18.6 *Recommended reading*

Rosenbaum and Rubin (1983a) and Imbens (2003) are two classic papers on sensitivity analysis which, however, involve more complicated procedures.![[_resources/Ding - 2023 - A First Course in Causal Inference_Part7/beae6f378d4656e91ed7aa68f2ee7af8_MD5.jpg]]

![[_resources/Ding - 2023 - A First Course in Causal Inference_Part7/13a430d07a16e9d7e3f706f4abc204e9_MD5.jpg]]

![[_resources/Ding - 2023 - A First Course in Causal Inference_Part7/daa7faa4dc6e9b9351955af282754eb5_MD5.jpg]]

![[_resources/Ding - 2023 - A First Course in Causal Inference_Part7/5bc5126e96d5213464797e0d2af15ef6_MD5.jpg]]19

Rosenbaum-Style *p*-Values for Matched
Observational Studies with Unmeasured
Confounding

Rosenbaum (1987b) introduced a sensitivity analysis technique for matched observational studies. Although it works for general matched studies (Rosenbaum, 2002b), the theory is most elegant for one-to-one matching. Different from Chapters 17 and 18, Rosenbaum-type sensitivity analysis works best for matched observational studies for testing the sharp null hypothesis of no individual treatment effect.

19.1 A model for sensitivity analysis with matched data

Consider a matched observational study, with (i, j) indexing unit j in pair i (i = 1, ..., n; j = 1, 2). With exactly matched pairs, unit (i, 1) and unit (i, 2) have the same covariates X<sub>i</sub>. Assume IID sampling, and extend Definition 11.1 to define the propensity score as

$$
e_{ij} = \mathrm{pr}\{Z_{ij} = 1 | X_i, Y_{ij}(1), Y_{ij}(0)\}.
$$

Let $\mathbb{S}_i = \{Y_{i1}(1), Y_{i1}(0), Y_{i2}(1), Y_{i2}(0)\}$ denote the set of all potential outcomes within pair $i$. Conditioning on the event that $Z_{i1} + Z_{i2} = 1$, we have

$$
\begin{align*}
\pi_{i1} &= \operatorname{pr}\{Z_{i1} = 1 | X_i, \mathbb{S}_i, Z_{i1} + Z_{i2} = 1\} \\
&= \frac{\operatorname{pr}\{Z_{i1} = 1, Z_{i2} = 0 | X_i, \mathbb{S}_i\}}{\operatorname{pr}\{Z_{i1} + Z_{i2} = 1 | X_i, \mathbb{S}_i\}} \\
&= \frac{\operatorname{pr}\{Z_{i1} = 1, Z_{i2} = 0 | X_i, \mathbb{S}_i\}}{\operatorname{pr}\{Z_{i1} = 1, Z_{i2} = 0 | X_i, \mathbb{S}_i\} + \operatorname{pr}\{Z_{i1} = 0, Z_{i2} = 1 | X_i, \mathbb{S}_i\}} \\
&= \frac{e_{i1}(1 - e_{i2})}{e_{i1}(1 - e_{i2}) + (1 - e_{i1})e_{i2}}
\end{align*}
$$

Define $o_{ij} = e_{ij}/(1 - e_{ij})$ as the odds of the treatment for unit $(i, j)$, and we have

$$
\pi_{i1} = \frac{o_{i1}}{o_{i1} + o_{i2}}.
$$Under ignorability, $e_{ij}$ is only a function of $X_i$, and therefore, $e_{i1} = e_{i2}$ and $\pi_{i1} = 1/2$. Thus the treatment assignment mechanism conditional on covariates and potential outcomes is equivalent to that from an MPE with equal treatment and control probabilities. This is a strategy to analyze matched observational studies we discussed in Chapter 15.1.

In general, $e_{ij}$ is also a function of the unobserved potential outcomes, and it can range from 0 to 1. Rosenbaum (1987b)'s model for sensitivity analysis imposes bounds on the odds ratio $o_{i1}/o_{i2}$.

**Assumption 19.1 (Rosenbaum's sensitivity analysis model) The odds ratios are bounded by**

$$
o_{i1}/o_{i2} \le \Gamma, \quad o_{i2}/o_{i1} \le \Gamma, \quad (i = 1, \dots, n)
$$

for some pre-specified $\Gamma \ge 1$. Equivalently,

$$
\frac{1}{1+\Gamma} \le \pi_{i1} \le \frac{\Gamma}{1+\Gamma} \quad (i = 1, \dots, n)
$$

for some pre-specified $\Gamma \ge 1$.

Under Assumption 19.1, we have a biased MPE with unequal and varying treatment and control probabilities across pairs. When $\Gamma = 1$, we have $\pi_{i1} = 1/2$ and thus a standard MPE. Therefore, $\Gamma > 1$ measures the deviation from the ideal MPE due to the omitted variables in matching.

## 19.2 Worst-case *p*-values under Rosenbaum's sensitivity analysis model

Consider testing the sharp null hypothesis

$$
H_{0F}: Y_{ij}(1) = Y_{ij}(0) \text{ for } i = 1, \dots, n \text{ and } j = 1, 2
$$

based on the within-pair differences $\hat{\tau}_i = (2Z_{i1} - 1)(Y_{i1} - Y_{i2})$ ($i = 1, \dots, n$). Under $H_{0F}$, $|\hat{\tau}_i|$ is fixed but $S_i = I(\hat{\tau}_i > 0)$ is random if $\hat{\tau}_i \ne 0$. Consider the following class of test statistics:

$$
T = \sum_{i=1}^{n} S_{i}q_{i},
$$

where $q_i \ge 0$ is a function of ($|\hat{\tau}_1|, \dots, |\hat{\tau}_n|$). Special cases include the sign statistic, the pair *t* statistic (up to some constant shift), and the Wilcoxon signed-rank statistic:

$$
T = \sum_{i=1}^{n} S_i, \quad T = \sum_{i=1}^{n} S_i |\hat{\tau}_i|, \quad T = \sum_{i=1}^{n} S_i R_i,
$$where $(R_1, \dots, R_n)$ are the ranks of $(|\hat{\tau}_1|, \dots, |\hat{\tau}_n|)$.

What is the null distribution of the test statistic $T$ under Assumption 19.1 with a general $\Gamma$? It can be quite complicated because Assumption 19.1 does not fully specify the exact values of the $\pi_{i1}$'s. Fortunately, we do not need to know the exact distribution of $T$ but rather the worst-case distribution of $T$ that yields the largest $p$-value under Assumption 19.1. This worst-case distribution corresponds to

$$
S_i \stackrel{\text{IID}}{\sim} \text{Bernoulli}\left(\frac{\Gamma}{1+\Gamma}\right).
$$

The corresponding distribution of $T$ has mean

$$
E_{\Gamma}(T) = \frac{\Gamma}{1+\Gamma} \sum_{i=1}^{n} q_i,
$$

and variance

$$
\text{var}_{\Gamma}(T) = \frac{\Gamma}{(1+\Gamma)^2} \sum_{i=1}^{n} q_i^2,
$$

with a Normal approximation

$$
\frac{T - \frac{\Gamma}{1+\Gamma} \sum_{i=1}^{n} q_i}{\sqrt{\frac{\Gamma}{(1+\Gamma)^2} \sum_{i=1}^{n} q_i^2}} \rightarrow \text{N}(0, 1)
$$

in distribution. In practice, we can report a sequence of $p$-values as a function of $\Gamma$.

# 19.3 Examples

## 19.3.1 Revisiting the LaLonde data

We conduct Rosenbaum-style sensitivity analysis in the matched LaLonde data. Using the `Matching` package, we can construct the matched dataset.

```r
library("Matching")
library("sensitivitymv")
library("sensitivitymw")
dat <- read.table("cps1re74.csv", header=T)
dat$u74 <- as.numeric.dat$re74==0)
dat$u75 <- as.numeric.dat$re75==0)
y = dat$re78
z = dat$treat
x = as.matrix.dat[, c("age", "educ", "black",
"hispan", "married", "nodegree"),
``````r
"re74", "re75", "u74", "u75")])
matchest = Match(Y = y, Tr = z, X = x)
ytreated = y[matchest$index.treated]
ycontrol = y[matchest$index control]
datamatched = cbind(ytreated, ycontrol)
```

We consider using the test statistic $T = \sum_{i=1}^{n} S_i |\hat{\tau}_i|$. Under the ideal MPE with $\Gamma = 1$, we can simulate the distribution of $T$ and obtain the $p$-value 0.002, as shown in the first subfigure in Figure 19.1. With a slightly larger $\Gamma = 1.1$, the worst-case distribution of $T$ shifts to the right, and the $p$-value increases to 0.011. If we further increase $\Gamma$ to 1.3, then the worst-case distribution of $T$ shifts further and the $p$-value exceeds 0.05. Figure 19.2 shows the histogram of the $\hat{\tau}_i$'s and the $p$-value as a function of $\Gamma$; $\Gamma = 1.233$ measures the maximum confounding that we can still reject the null hypothesis at level 0.05.

We can also use the `senmw` function in the `sensitivitymw` package to obtain a sequence of $p$-values against $\Gamma$.

```r
Gamma = seq(1, 1.4, 0.001)
Pvalue = Gamma
for(i in 1:length(Gamma))
{
  Pvalue[i] = senmw.datamatched, gamma = Gamma[i],
             method = "t")$pval
}
```

Figure 19.2 shows the plot of the $p$-value against $\Gamma$.

### 19.3.2 Two examples from Rosenbaum's packages

The `erpcp` dataset is from the R package `sensitivitymw`. It contains $n = 39$ matched pairs of a welder and a control, based on observed covariates age and smoking. The outcome is the DNA elution rate. Figure 19.3(a) shows the histogram of the within-pair differences of the outcomes and the $p$-value against $\Gamma$ based on the pair $t$-statistic. The following R code generates Figure 19.3a.

```r
par(mfrow = c(1, 2), mai = c(0.8, 0.8, 0.3, 0.3))
data(erpcp)
hist(erpcp[, 1] - erpcp[, 2], main = "erpcp",
      xlab = expression(hat(tau)[i]),
      freq = FALSE)

Gamma = seq(1, 5, 0.005)
Pvalue = Gamma
for(i in 1:length(Gamma))
{
  Pvalue[i] = senmw(erpcp, gamma = Gamma[i], method = "t")$pval
}
gammastar = Gamma[which(Pvalue >= 0.05)[1]]
```![[_resources/Ding - 2023 - A First Course in Causal Inference_Part7/01b047055ab6a69fbc04a7ac1547224f_MD5.jpg]]

FIGURE 19.1: The worst-case distributions of $T = \sum_{i=1}^{n} S_i|\hat{\tau}_i|$ with $S_i$ IID Bernoulli($\Gamma/(1+\Gamma)$), based on the matched LaLonde data.![[_resources/Ding - 2023 - A First Course in Causal Inference_Part7/fab1a2664fca9a4fa6d4eadbb072410f_MD5.jpg]]

FIGURE 19.2: *p*-value as a function of Γ, based on the matched LaLonde data.gammastar

plot(Pvalue ~ Gamma, type = "l",
       xlab = expression(Gamma),
       ylab = "p-value")
abline(h = 0.05, lty = 2)
abline(v = gammastar, lty = 2)

The `lead250` dataset is from the R package `sensitivitymw`. It contains $n = 250$ matched pairs of a daily smoker and a control of nonsmoker, based on observed covariates gender, age, race, education level, and household income from NHANES. The outcome is the blood lead level in µg/l. Figure 19.3(b) shows the histogram of the within-pair differences of the outcomes and the *p*-value against Γ based on the pair *t*-statistic. The following R code generates Figure 19.3b.

```r
par(mfrow = c(1, 2), mai = c(0.8, 0.8, 0.3, 0.3))
data(lead250)
hist(lead250[, 1] - lead250[, 2],
      main = "lead250",
      xlab = expression(hat(tau)[i]),
      freq = FALSE)

Gamma = seq(1, 2.5, 0.001)
Pvalue = Gamma
for(i in 1:length(Gamma))
{
  Pvalue[i] = senmw(lead250, gamma = Gamma[i], method = "t")$pval
}
gammastar = Gamma[which(Pvalue >= 0.05)[1]]
gammastar

plot(Pvalue ~ Gamma, type = "l",
      xlab = expression(Gamma), ylab = "p-value")
abline(h = 0.05, lty = 2)
abline(v = gammastar, lty = 2)
```

## 19.4 Homework Problems

### 19.1 *A model for Assumption 19.1*

Assumption 19.1 has the following equivalent form.

**Assumption 19.2** *The propensity score satisfies the following model*

$$
\log \frac{\pi_{ij}}{1 - \pi_{ij}} = g(X_i) + \gamma U_{ij}, \quad (i = 1, \dots, n; j = 1, 2)
$$![[_resources/Ding - 2023 - A First Course in Causal Inference_Part7/1bd2d71e1934b13c272e7bea9b54b905_MD5.jpg]]

FIGURE 19.3: Two examples: histogram of the $\hat{\tau}_i$'s and p-value as a function of $\Gamma$where $g(\cdot)$ is an unknown function and $U_{ij} \in [0, 1]$ is a a bounded unobserved covariate for unit $(i, j)$.

Show that if Assumption 19.2 holds, then Assumption 19.1 must hold with $\Gamma = e^{\gamma}$.

Remark: Rosenbaum (2002b, page 108) also shows that if Assumption 19.1 holds, then Assumption 19.2 must hold for some $U_{ij}$'s. Assumption 19.2 may be easier to interpret because $\gamma$ measures the log of the conditional odds ratio of $U$ on the treatment; see Chapter B.6 for the interpretation of the coefficients in the logistic regression.

19.2 *Application of Rosenbaum's approach*

Re-analyze Example 10.3 using Rosenbaum's approach based on matching.

19.3 *Recommended reading*

Rosenbaum (2015) provides a tutorial for his two R packages for sensitivity analysis with matched observational studies.1120

Overlap in Observational Studies:
Difficulties and Opportunities

**20.1 Implications of overlap**

In Part III of this book, causal inference with observational studies relies on
two critical assumptions: ignorability

$$
Z \perp \{Y(1), Y(0)\} | X
$$

and overlap

$$
0 < e(X) < 1.
$$

D'Amour et al. (2021) pointed out the tension between these two assump-
tions: typically, more covariates make the ignorability assumption more plau-
sible (ignoring M-bias discussed in Chapter 16.3.1), but more covariates make
the overlap assumption less plausible because the treatment becomes more
predictable given more covariates.

If some units have e(X) = 0 or e(X) = 1, then we have philosophic
difficulty in thinking about the counterfactual potential outcomes (King and
Zeng, 2006). In particular, if a unit deterministically receives the treatment,
then it may not be meaningful to conceive its potential outcome under the
control; if a unit deterministically receives the control, then it may not be
meaningful to conceive its potential outcome under the treatment. Even if the
true propensity score is not exactly 0 or 1, the estimated propensity score can
be very close to 0 or 1 in finite samples, which makes the estimators based on
IPW numerically unstable. I have discussed this issue in Chapter 11.

Many statistical analyses in fact require a strict version of overlap:

**Assumption 20.1 (strict overlap) η ≤ e(X) ≤ 1−η for some η ∈ (0, 1/2).**

However, D'Amour et al. (2021, Corollary 1) showed that Assumption
20.1 has very strong implications when the number of covariates is large. For
simplicity, I present only one of their results. Let X_k (k = 1, . . . , p) be the kth
component of the covariate X = (X_1, . . . , X_p), and

$$
e = \mathrm{pr}(Z = 1)
$$

be the proportion of the treated units.**Theorem 20.1** Assumption 20.1 implies that $\eta \le e \le 1 - \eta$ and

$$
\begin{align}
& p^{-1} \sum_{k=1}^{p} |E(X_k | Z = 1) - E(X_k | Z = 0)| \nonumber \\
\le{}& p^{-1/2} C^{1/2} \{e \lambda_1^{1/2} + (1-e) \lambda_0^{1/2}\}, \tag{20.1}
\end{align}
$$

where

$$
C = \frac{(e - \eta)(1 - e - \eta)}{e^2(1 - e)^2\eta(1 - \eta)}
$$

is a positive constant depending only on $(e, \eta)$, and $\lambda_1$ and $\lambda_0$ are the maximum eigenvalues of the covariance matrices $\operatorname{cov}(X | Z = 1)$ and $\operatorname{cov}(X | Z = 0)$, respectively.

What is the order of the maximum eigenvalues in Theorem 20.1? D'Amour et al. (2021) showed that it is usually smaller than $O(p)$ unless the components of $X$ are highly correlated. If the components of $X$ are highly correlated, then some components are redundant after including other components. If the components of $X$ are not highly correlated, then the right-hand side converges to zero. So the average difference in means of the covariates is close to zero, that is, the treatment and control groups are nearly balanced in means averaged over all dimensions of the covariates. Mathematically, the left-hand side of (20.1) converging to zero rules out the possibility that all dimensions of $X$ have non-vanishing differences in means across the treatment and control groups. It is a strong requirement in observational studies with many covariates.

### 20.1.1 Trimming in the presence of limited overlap

When Assumption 20.1 does not hold, it is common to trim the units based on the estimated propensity scores (Crump et al., 2009; Yang and Ding, 2018b). Trimming drops units within regions of little overlap, which changes the population and estimand. The restrictive implications of overlap in Assumption 20.1 suggest that trimming must be employed more often and one may need to trim a large proportion of units to achieve desirable overlap in high dimensions.

### 20.1.2 Outcome modeling in the presence of limited overlap

The somewhat negative results in D'Amour et al. (2021) also highlight the limitation of focusing only on the propensity score in the presence of limited overlap. This in some sense challenges Rubin (2008)'s view that “for objective causal inference, design trumps analysis.” Rubin (2008) argued strongly for the role of the “design” stage in observational studies. The “design” stage focuses on the propensity score which may not satisfy the overlap condition with many covariates.With high dimensional covariates, outcome modeling becomes more im-
portant. In particular, if the outcome means only depend on a function of the
original covariates in that

$$
E\{Y(z) | X\} = f_z(r(X)), \quad (z = 0, 1)
$$

then it suffices to control for r(X), a lower-dimensional summary of the orig-
inal covariates. See Problem 20.1 for more details. Due to the dimension re-
duction, the strict overlap condition on r(X) can be much weaker than the
strict overlap condition on X. This is conceptually straightforward, but the
corresponding theory and methods are missing.

20.2 Causal inference with no overlap: regression discontinuity

Let us start from the simple case with a univariate $X$. An extreme treatment
assignment mechanism is a deterministic one:

$$
Z = I(X \geq x_0),
$$

where $x_0$ is a predetermined threshold. An interesting consequence of this
assignment is that the ignorability assumption holds automatically:

$$
Z \perp \{Y(1), Y(0)\} | X
$$

because $Z$ is a deterministic function of $X$ and a constant is independent of any
random variables. However, the overlap assumption is violated by definition:

$$
e(X) = \Pr(Z = 1 | X) = \mathbf{1}(X \geq x_0) = \begin{cases} 1 & \text{if } X \geq x_0, \\ 0 & \text{if } X < x_0. \end{cases}
$$

So our analytic strategies discussed in Part IV are no longer applicable here.
We must change our perspective.

The discussion above seems contrived, with a deterministic treatment as-
signment. Interestingly, it has many applications in practice and is called
*regression discontinuity*. Below, I first review some canonical examples and
then give a mathematical formulation of this type of study.

**20.2.1 Examples and graphical diagnostics**

**Example 20.1** *Thistlethwaite and Campbell (1960) first proposed the idea of regression-discontinuity analysis. Their motivating example was to study the effect of students' winning the Certificate of Merit on later career plans, where*![[_resources/Ding - 2023 - A First Course in Causal Inference_Part7/528005d7e4bcd5327dd240d38bfab3fd_MD5.jpg]]

FIGURE 20.1: A graph from Thistlethwaite and Campbell (1960) with minor modifications of the unclear text in the original paper

the Certificate of Merit was determined by whether the Scholarship Qualifying Test score was above a certain threshold. Their initial analysis was mainly graphical. Figure 20.1 shows one of their graphs.

**Example 20.2** Bor et al. (2014) used regression discontinuity to study the effect of when to start HIV patients with antiretroviral on their mortality, where the treatment is determined by whether the patients’ CD4 counts were below 200 cells/µL (note that CD4 cells are white blood cells that fight infection.)

**Example 20.3** Carpenter and Dobkin (2009) studied the effect of alcohol consumption on mortality, which leverages the minimum legal drinking age as a discontinuity for alcohol consumption. They derived mortality data from the National Center for Health Statistics, including the decedent's date of birth and date of death. They computed the age profile of deaths per![[_resources/Ding - 2023 - A First Course in Causal Inference_Part7/4150a99b59700fcb5bf861093f9a8bf9_MD5.jpg]]

FIGURE 20.2: Minimum legal drinking age example from Carpenter and Dobkin (2009)

100,000 person-years with outcomes measured by the following nine variables:

<table><tr><td><em>all</em></td><td><em>all deaths</em>, the sum of <em>internal</em> and <em>external</em></td></tr><tr><td><em>internal</em></td><td>deaths due to internal causes</td></tr><tr><td><em>external</em></td><td>deaths due to external causes, the sum of the rest</td></tr><tr><td><em>homicide</em></td><td><em>homicides</em></td></tr><tr><td><em>suicide</em></td><td><em>suicides</em></td></tr><tr><td><em>mva</em></td><td>motor vehicle accidents</td></tr><tr><td><em>alcohol</em></td><td>deaths with a mention of alcohol</td></tr><tr><td><em>drugs</em></td><td>deaths with a mention of drug use</td></tr><tr><td><em>externalother</em></td><td>deaths due to other external causes</td></tr></table>

Figure 20.2 plots the number of deaths per 100,000 person-years for nine measures based on the data used by Angrist and Pischke (2014). From the jumps at age 21, it seems obvious that there is an increase in mortality at age 21, primarily due to motor vehicle accidents. I leave the formal analysis as Problem 20.4.

### 20.2.2 A mathematical formulation of regression discontinuity

The technical term for the variable $X$ that determines the treatment is the *running variable*. Intuitively, regression discontinuity can identify a *local average causal effect* at the cutoff point $x_0$:

$$
\tau(x_0) = E\{Y(1) - Y(0) \mid X = x_0\}.
$$In particular, for the potential outcome under treatment, we have

$$
E\{Y(1) | X = x_0\} = \lim_{\epsilon \to 0^+} E\{Y(1) | X = x_0 + \epsilon\} \quad (20.2)
$$

$$
= \lim_{\epsilon \to 0^+} E\{Y(1) | Z = 1, X = x_0 + \epsilon\} \quad (20.3)
$$

$$
= \lim_{\epsilon \to 0^+} E(Y | Z = 1, X = x_0 + \epsilon), \quad (20.4)
$$

where (20.2) holds if $E\{Y(1) | X = x\}$ is continuous from the right at $x_0$ and (20.3) follows by the definition of $Z$. Similarly, for the potential outcome under control, we have

$$
E\{Y(0) | X = x_0\} = \lim_{\epsilon \to 0^+} E(Y | Z = 0, X = x_0 - \epsilon)
$$

if $E\{Y(0) | X = x\}$ is continuous from the left at $x_0$. So the local average causal effect at $x_0$ can be identified by the difference of the two limits. I summarize the key identification result below.

**Theorem 20.2** Assume that the treatment is determined by $Z = I(X \ge x_0)$ where $x_0$ is a predetermined threshold. Assume that $E\{Y(1) | X = x\}$ is continuous from the right at $x_0$ and $E\{Y(0) | X = x\}$ is continuous from the left at $x_0$. Then the local average treatment effect at $X = x_0$ is identified by

$$
\tau(x_0) = \lim_{\epsilon \to 0^+} E(Y | Z = 1, X = x_0 + \epsilon) - \lim_{\epsilon \to 0^+} E(Y | Z = 0, X = x_0 - \epsilon).
$$

Since the right-hand side of the above equation only involves observables, the parameter $\tau(x_0)$ is nonparametrically identified. However, the form of the identification formula is totally different from what we derived before. In particular, the identification formula involves limits of two conditional expectation functions.

### 20.2.3 Regressions near the boundary

If we are lucky, graphical diagnostics sometimes can clearly show the causal effect at the cutoff point. However, many outcomes are noisy so graphical diagnostics are not enough in finite samples. Figure 20.3 shows two simulated examples with obvious jumps at the cutoff point and two examples without obvious jumps, although the underlying data-generating processes all have discontinuities.

Assume that $E(Y | Z = 1, X = x) = \gamma_1 + \beta_1 x$ and $E(Y | Z = 0, X = x) = \gamma_0 + \beta_0 x$ are linear in $x$. We can run OLS based on the treated and control data to obtain the fitted lines $\hat{\gamma}_1 + \hat{\beta}_1 x$ and $\hat{\gamma}_0 + \hat{\beta}_0 x$, respectively. We can then estimate the average causal effect at the point $X = x_0$ as

$$
\hat{\tau}(x_0) = (\hat{\gamma}_1 - \hat{\gamma}_0) + (\hat{\beta}_1 - \hat{\beta}_0)x_0.
$$

Numerically, $\hat{\tau}(x_0)$ is identical to the coefficient of $Z_i$ in the OLS

$$
Y_i \sim \{1, Z_i, X_i - x_0, Z_i(X_i - x_0)\}, \quad (20.5)
$$![[_resources/Ding - 2023 - A First Course in Causal Inference_Part7/4d324f8030352a5a7ed7180ac637d6f2_MD5.jpg]]

FIGURE 20.3: Examples of regression discontinuity. The black points are the observed outcomes whereas the grey points are the unobserved counterfactual outcomes. In the first column, the data-generating processes result in visible jumps at the cutoff points; in the second column, the jumps are not so visible. In the first row, the data generating processes have constant $\tau(x)$; in the second row, $\tau(x)$ varies with $x$.and it is also identical to the coefficient of $Z_i$ in the OLS

$$
Y_i \sim \{1, Z_i, R_i, L_i\}, \qquad (20.6)
$$

where

$$
R_i = \max(X_i - x_0, 0), \quad L_i = \min(X_i - x_0, 0)
$$

indicate the right and left parts of $X_i - x_0$, respectively. I leave the algebraic details to Problem 20.2.

However, this approach may be sensitive to the violation of the linear model assumption. Theory suggests running regression using only the local observations near the cutoff point¹. However, the rules for choosing the “local points” are quite involved. Fortunately, the `rdrobust` function in the `rdrobust` package in R implements various choices of “local points.” Since choosing the “local points” is the key to regression discontinuity, it seems more sensible to report estimates and confidence intervals based on various choices of the “local points.” This can be viewed as a sensitivity analysis for regression discontinuity.

### 20.2.4 An example

Lee (2008) gave a famous example of using regression discontinuity to study the incumbency advantage in the U.S. House. He wrote that “incumbents are, by definition, those politicians who were successful in the previous election. If what makes them successful is somewhat persistent over time, they should be expected to be somewhat more successful when running for re-election.” Therefore, this is a fundamentally challenging causal inference problem. The regression discontinuity is a clever study design to study this problem.

The running variable is the lagged vote in the previous election centered at 0, and the outcome is the vote in the current election, with units being the congressional districts. The treatment is the binary indicator for being the current incumbent party in a district, determined by the lagged vote. The following R code generates Figure 20.4 that shows the raw data.

```r
house = read.csv("house.csv")[, -1]
plot(y ~ x, data = house, pch = 19, cex = 0.1)
abline(v = 0, col = "grey")
```

The `rdrobust` function gives three sets of the point estimate and confidence intervals. They all suggest a positive incumbency advantage.

```r
> library(rdrobust)
> RDDest = rdrobust(house$y, house$x)
Warning message:
In rdrobust(house$y, house$x) :
Mass points detected in the running variable.
```

¹This is called *local linear regression* in nonparametric statistics, which belongs to a broader class of *local polynomial regression* (Fan and Gijbels, 1996).![[_resources/Ding - 2023 - A First Course in Causal Inference_Part7/a8fbdf745a821edbddbd92dfe31cf8cd_MD5.jpg]]

FIGURE 20.4: Raw data of Lee (2008)

```r
> cbind(RDDest$coef, RDDest$ci)
```

| | Coeff | CI Lower | CI Upper |
| :--- | :--- | :--- | :--- |
| Conventional | 0.06372533 | 0.04224798 | 0.08520269 |
| Bias-Corrected | 0.05937028 | 0.03789292 | 0.08084763 |
| Robust | 0.05937028 | 0.03481238 | 0.08392818 |

We can also obtain the point estimates and the confidence intervals based on OLS with different choices of the local points defined by $|X| < h$ based on the following R code.

```R
house$z = (house$x >= 0)
hh = seq(0.05, 1, 0.01)
local.lm = sapply(hh, function(h){
  Greg = lm(y ~ z + x + z*x, data = house,
           subset = (abs(x)<=h))
  cbind(coef(Greg)[2], confint(Greg, 'zTRUE'))
})
plot(local.lm[1, ] ~ hh, type = "p",
     pch = 19, cex = 0.3,
     ylim = range(local.lm),
     xlab = "h",
     ylab = "point and interval estimates",
     main = "subset linear regression: |X|<h")
lines(local.lm[2, ] ~ hh, type = "p",
     pch = 19, cex = 0.1)
lines(local.lm[3, ] ~ hh, type = "p",
     pch = 19, cex = 0.1)
```

Figure 20.5 shows the point estimates and the confidence intervals as a function of *h*. While the point estimates and the confidence intervals are sensitive to the choice of *h*, the qualitative result remains the same as above.![[_resources/Ding - 2023 - A First Course in Causal Inference_Part7/9f20e68afe55c68cccb7eebf4a4c24b3_MD5.jpg]]

FIGURE 20.5: Estimates and confidence intervals based on local linear regressions

20.2.5 Problems of regression discontinuity

What can go wrong with the regression discontinuity analysis? The technical challenge is to specify the neighborhood near the cutoff point. We have discussed this issue above.

In addition, Theorem 20.2 holds under a continuity condition. It may be violated in practice. For instance, if the mortality rate jumps at the age of 21, then we may not be able to attribute the jumps in Figure 20.2 to the change in drinking behavior due to the legal drinking age. However, it is hard to check the violation of the continuity condition empirically.

McCrary (2008) proposed an indirect test for the validity of the regression discontinuity. He suggested checking the density of the running variable at the cutoff point. The discontinuity in the density of the running variable at the cutoff point may suggest that some units were able to manipulate their treatment status perfectly. The *DCdensity* function in the *R* package *rdd* implements this test. I omit the details.## 20.3 Homework Problems

### 20.1 A theorem for the role of outcome modeling in the presence of limited overlap

This problem extends the discussion in Section 20.1.2. I state a formal theorem below.

**Theorem 20.3** *Assume*

$$
Z \perp Y(z) | X, \quad (z = 0, 1)
$$

and

$$
E\{Y(z) | X\} = f_z(r(X)), \quad (z = 0, 1)
$$

for some function $r(X)$. The average causal effect $\tau = E\{Y(1) - Y(0)\}$ can be identified by

$$
\tau = E\{E(Y | Z = 1, r(X)) - E(Y | Z = 0, r(X))\}
$$

or

$$
\tau = E \left\{ \frac{ZY}{e(r(X))} \right\} - E \left\{ \frac{(1-Z)Y}{1-e(r(X))} \right\}
$$

where $e(r(X)) = \text{pr}\{Z = 1 | r(X)\}$.

Prove Theorem 20.3.

Remark: When $r(X) = X$, Theorem 20.3 reduces to the standard IPW formula for the average causal effect. When $r(X)$ has a lower dimension than $X$, Theorem 20.3 has broader applicability if the overlap condition on $e(X)$ fails whereas the overlap condition on $e(r(X))$ may still hold.

### 20.2 Linear potential outcome models

This problem gives more details for the numerical equivalence in Section 20.2.3.

Show that $\hat{\tau}(x_0)$ equals the coefficients of $Z_i$ in OLS fits (20.5) and (20.5).

Remark: It is helpful to start with the figures of $Z_i(X_i - x_0)$, $L_i$, and $R_i$ with $X_i$ on the x-axis. The conclusion holds by a reparametrization of the OLS regressions.

### 20.3 Simulation for regression discontinuity

In Figure 20.3, the potential outcomes are simulated from linear models. Change them to nonlinear models, and compare different point estimators and confidence intervals, including the biases and variances of the point estimators, and the coverage properties of confidence intervals.20.4 *Re-analysis of the data on the minimum legal drinking age*

Figure 20.2 shows the jumps at the cutoff point. Analyze the data mlda.csv
of Carpenter and Dobkin (2009).

20.5 *Re-analysis of Lee (2008)'s data*

Figure 20.5 plots the confidence intervals based on the standard errors assum-
ing homoskedasticity. Generate a figure with confidence intervals based on the
EHW standard errors in OLS.

20.6 *Recommended reading*

D'Amour et al. (2021) discussed the implications of overlap with high dimen-
sional covariates.

Thistlethwaite and Campbell (1960)'s original paper on regression dis-
continuity was re-printed as Thistlewaite and Campbell (2016) with many
insightful comments. Coincidentally, Thistlethwaite and Campbell (1960) and
Rubin (1974) were both published in the *Journal of Educational Psychology*.