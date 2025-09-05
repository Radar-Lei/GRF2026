Part V

Instrumental variables—21

An Experimental Perspective of the
Instrumental Variable

The *instrumental variable method* has been a powerful tool in econometrics.
It identifies causal effects in studies without unconfoundedness between the
treatment and the outcome. It relies on an additional variable, called the
*instrumental variable* (IV), that satisfies certain conditions. These conditions
may not be easy to digest when you learn them for the first time. In some sense,
the IV method is like magic. This chapter presents a not-so-magic perspective
based on the encouragement design. This again echos Dorn (1953)'s suggestion
that the planner of an observational study should always ask himself the
following question:¹

How would the study be conducted if it were possible to do it by controlled
experimentation?

The experimental analog of the IV method is *noncompliance* in the *encouragement design* (Zelen, 1979; Powers and Swinton, 1984; Holland, 1986).

**21.1 Encouragement Design and Noncompliance**

Consider an experiment with units indexed by $i = 1, \dots, n$. Let $Z_i$ be the treatment assigned, with 1 for the treatment and 0 for the control. Let $D_i$ be the treatment received, with 1 for the treatment and 0 for the control. When $Z_i \neq D_i$ for some unit $i$, the noncompliance problem arises. Noncompliance is a very common problem, especially in encouragement designs involving human beings as experimental units. In those cases, the experimenters cannot force the units to take the treatment but rather only encourage them to do so. Let $Y_i$ be the outcome of interest.

Consider complete randomization of *Z* and ignore covariates *X* for now.
We have the potential values for the treatment received {*D*<sub>*i*</sub>(1), *D*<sub>*i*</sub>(0)}
and the potential values for the outcome {*Y*<sub>*i*</sub>(1), *Y*<sub>*i*</sub>(0)}, all with respect to
the treatment assignment levels 1 and 0. Their observed values are *D*<sub>*i*</sub> =
*Z*<sub>*i*</sub>*D*<sub>*i*</sub>(1) + (1 − *Z*<sub>*i*</sub>)*D*<sub>*i*</sub>(0) and *Y*<sub>*i*</sub> = *Z*<sub>*i*</sub>*Y*<sub>*i*</sub>(1) + (1 − *Z*<sub>*i*</sub>)*Y*<sub>*i*</sub>(0), respectively.

¹This quote also appeared in Chapter 10 before.For notational simplicity, we assume {$Z_i, D_i(1), D_i(0), Y_i(1), Y_i(0)$}$_{i=1}^n$ IID
$\{Z, D(1), D(0), Y(1), Y(0)\}$ and sometimes drop the subscript $i$ when it should
not cause confusions.

We start with the CRE.

**Assumption 21.1 (randomization) Z ⊥ {D(1), D(0), Y(1), Y(0)}.**

Randomization allows for the identification of the average causal effects
on D and Y:

$$
\tau_D = E\{D(1) - D(0)\} = E(D | Z = 1) - E(D | Z = 0)
$$

and

$$
\tau_Y = E\{Y(1) - Y(0)\} = E(Y | Z = 1) - E(Y | Z = 0).
$$

We can use simple difference-in-means estimators $\hat{\tau}_D$ and $\hat{\tau}_Y$ to estimate $\tau_D$ and $\tau_Y$, respectively.

Reporting the estimate $\hat{\tau}_Y$ with the associated standard error is called the intention-to-treat (ITT) analysis. It estimates the effect of the treatment assignment on the outcome, and the CRE in Assumption 21.1 justifies this analysis. However, it may not answer the scientific question, that is, the causal effect of the treatment received on the outcome.

21.2 Latent Compliance Status and Effects

21.2.1 Nonparametric identification

Following Imbens and Angrist (1994) and Angrist et al. (1996), we stratify
the population based on the joint potential values of $U_i = \{D_i(1), D_i(0)\}$.
Because $D$ is binary, we have four possible combinations:

$$
U_i = \begin{cases}
a, & \text{if } D_i(1) = 1 \text{ and } D_i(0) = 1; \\
c, & \text{if } D_i(1) = 1 \text{ and } D_i(0) = 0; \\
d, & \text{if } D_i(1) = 0 \text{ and } D_i(0) = 1; \\
n, & \text{if } D_i(1) = 0 \text{ and } D_i(0) = 0,
\end{cases}
$$

where “a” is for “always taker,” “c” is for “complier,” “d” is for “defier,”
and “n” is for “never taker.” Because we cannot observe $D_i(1)$ and $D_i(0)$
simultaneously, $U_i$ is a latent variable for the compliance behavior of unit $i$.

Based on $U$, we can use the law of total probability to decompose the
average causal effect on $Y$ into four terms:

$$
\tau_Y =
\begin{aligned}[t]
  & E\{Y(1) - Y(0) \mid U = a\} \operatorname{pr}(U = a) \\
  & + E\{Y(1) - Y(0) \mid U = c\} \operatorname{pr}(U = c) \\
  & + E\{Y(1) - Y(0) \mid U = d\} \operatorname{pr}(U = d) \\
  & + E\{Y(1) - Y(0) \mid U = n\} \operatorname{pr}(U = n).
\end{aligned}
\tag{21.1}
$$Therefore, $\tau_Y$ is a weighted average of four latent subgroup effects. We will look into more details of the latent groups below.

Assumption 21.2 below restricts the third term in (21.1) to be zero.

**Assumption 21.2 (monotonicity) pr($U_i$ = d) = 0 or $D_i(1) \ge D_i(0)$ for all $i$, that is, there are no defiers.**

Assumption 21.2 holds automatically with *one-sided noncompliance* when the units assigned to the control arm have no access to the treatment, i.e., $D_i(0) = 0$ for all units. Under randomization, Assumption 21.2 has a testable implication that

$$
\mathrm{pr}(D = 1 | Z = 1) \ge \mathrm{pr}(D = 1 | Z = 0). \quad (21.2)
$$

But Assumption 21.2 is much stronger than the inequality (21.2). The former restricts $D_i(1)$ and $D_i(0)$ at the individual level whereas the latter restricts them only on average. Nevertheless, when the testable implication (21.2) holds, we cannot use the observed data to refute Assumption 21.2.

Assumption 21.3 below restricts the first and last terms in (21.1) to be zero based on the mechanism of the treatment assignment on the outcome through only the treatment received.

**Assumption 21.3 (exclusion restriction) $Y_i(1) = Y_i(0)$ for always takers with $U_i$ = a and never takers with $U_i$ = n.**

As equivalent statement of Assumption 21.3 is that $D_i(1) = D_i(0)$ must imply $Y_i(1) = Y_i(0)$ for all $i$. It requires that the treatment assignment affects the outcome only if it affects the treatment received. In double-blind RCTs², it is biologically plausible because the outcome only depends on the actual treatment received. That is, if the treatment assignment does not change the treatment received, it does not change the outcome either. It can be violated if the treatment assignment has *direct effects*³ on the outcome, not through the treatment received. For example, some RCTs are not double-blinded, and the treatment assignment can have some unknown pathways to the outcome.

Under Assumptions 21.2 and 21.3, the decomposition (21.1) only has the second term:

$$
\tau_Y = E\{Y(1) - Y(0) | U = c\} \mathrm{pr}(U = c). \quad (21.3)
$$

²In general, it is better to blind the experiment to avoid various biases arising from placebo effects, patients’ expectations, etc. In double-blind RCTs, both doctors and patients do not know the treatment; in single-blind RCTs, the patients do not know the treatment but the doctors know. Sometimes, it is impossible to conduct double or even single-blind trials; those trials are called open trials.

³I use “direct effects” informally here. See more detailed discussion of the concept in Chapters 27 and 28 later.Similarly, we can decompose the average causal effect on $D$ into four terms:

$$
\begin{align*}
\tau_D &= E\{D(1) - D(0) \mid U = a\}\Pr(U = a) \\
&\quad + E\{D(1) - D(0) \mid U = c\}\Pr(U = c) \\
&\quad + E\{D(1) - D(0) \mid U = d\}\Pr(U = d) \\
&\quad + E\{D(1) - D(0) \mid U = n\}\Pr(U = n) \\
&= 0 \times \Pr(U = a) + 1 \times \Pr(U = c) + (-1) \times \Pr(U = d) + 0 \times \Pr(U = n),
\end{align*}
$$

which, under Assumption 21.2, reduces to

$$
\tau_D = \Pr(U = c). \tag{21.4}
$$

By (21.4), the proportion of the compliers $\pi_c = \Pr(U = c)$ equals the average causal effect of the treatment assigned on $D$, an identifiable quantity under the CRE. Although we do not know all the compliers based on the observed data, we can identify their proportion in the whole population based on (21.4). Combining (21.3) and (21.4), we have the following result.

**Theorem 21.1** *Under Assumptions 21.2–21.3, we have*

$$
E\{Y(1) - Y(0) \mid U = c\} = \frac{\tau_Y}{\tau_D}
$$

if $\tau_D \neq 0$.

Following Imbens and Angrist (1994) and Angrist et al. (1996), we define a new causal effect below.

**Definition 21.1 (CACE or LATE) Define**

$$
\tau_c = E\{Y(1) - Y(0) \mid U = c\}
$$

as the “complier average causal effect (CACE)” or the “local average treatment effect (LATE)”. It has alternative forms:

$$
\begin{align*}
\tau_c &= E\{Y(1) - Y(0) \mid D(1) = 1, D(0) = 0\} \\
&= E\{Y(1) - Y(0) \mid D(1) > D(0)\}.
\end{align*}
$$

The CACE is the average causal effect of $Z$ on $Y$ among compliers with $D(1) = 1, D(0) = 0$, or, equivalently, units with $D(1) > D(0)$ under the monotonicity. Based on Definition 21.1, we can rewrite Theorem 21.1 as

$$
\tau_c = \frac{\tau_Y}{\tau_D},
$$

that is, the CACE or LATE equals the ratio of the average causal effects on $Y$ over that on $D$. Under Assumption 21.1, we further identify the CACE below.**Corollary 21.1** *Under Assumptions 21.1–21.3, we have*

$$
\tau_c = \frac{E(Y | Z = 1) - E(Y | Z = 0)}{E(D | Z = 1) - E(D | Z = 0)}.
$$

Therefore, under CRE, monotonicity, and exclusion restriction, we can nonparametrically identify the CACE as the ratio of the difference in means of the outcome over the difference in means of the treatment received.

### 21.2.2 Estimation

Based on Corollary 21.1, we can estimate $\tau_c$ by a simple ratio

$$
\hat{\tau}_c = \frac{\hat{\tau}_Y}{\hat{\tau}_D},
$$

which is called the Wald estimator (Wald, 1940) or the IV estimator. In the above discussion, $Z$ acts as the IV for $D$.

We can obtain the variance estimator based on the following heuristics (see Example A.3):

$$
\hat{\tau}_c - \tau_c = (\hat{\tau}_Y - \tau_c \hat{\tau}_D)/\hat{\tau}_D \approx (\hat{\tau}_Y - \tau_c \hat{\tau}_D)/\tau_D = \hat{\tau}_A/\tau_D,
$$

where $\hat{\tau}_A$ is the difference-in-means of the adjusted outcome $A_i = Y_i - \tau_c D_i$. So the asymptotic variance of $\hat{\tau}_c$ is close to the variance of $\hat{\tau}_A$ divided by $\tau_D^2$. The variance estimation proceeds in the following steps:

1. obtain the adjusted outcomes $\hat{A}_i = Y_i - \hat{\tau}_c D_i$ ($i = 1, \dots, n$);

2. obtain the Neyman-type variance estimate based on the adjusted outcomes:

$$
\hat{V}_{\hat{A}} = \frac{\hat{S}_{\hat{A}}^2(1)}{n_1} + \frac{\hat{S}_{\hat{A}}^2(0)}{n_0},
$$

where $\hat{S}_{\hat{A}}^2(1)$ and $\hat{S}_{\hat{A}}^2(0)$ are the sample variances of the $\hat{A}_i$'s under the treatment and control, respectively;

3. obtain the final variance estimator $\hat{V}_{\hat{A}}/\hat{\tau}_D^2$.

See Problem 21.2 for the justification of the above variance estimator. Alternatively, we can also use the bootstrap to approximate the variance of $\hat{\tau}_c$. The following functions can calculate the point estimator $\hat{\tau}_c$ and the standard error with the formula $\hat{V}_{\hat{A}}$ and the bootstrap.

#### IV point estimator

IV_Wald = function(Z, D, Y)
{
  tau_D = mean(D[Z==1]) - mean(D[Z==0])
  tau_Y = mean(Y[Z==1]) - mean(Y[Z==0])
  CACE = tau_Y/tau_D```matlab
c(tau_D, tau_Y, CACE)
}

## IV se via the delta method
IV_Wald_delta = function(Z, D, Y)
{
    est = IV_Wald(Z, D, Y)
    AdjustedY = Y - D*est[3]
    VarAdj = var(AdjustedY[Z==1])/sum(Z) +
              var(AdjustedY[Z==0])/sum(1 - Z)

    c est[3], sqrt(VarAdj)/abs est[1])
}

##IV se via the bootstrap
IV_Wald_bootstrap = function(Z, D, Y, n boot = 200)
{
    est = IV_Wald(Z, D, Y)

    CACEboot = replicate(n boot, {
        id boot = sample(1:length(Z), replace = TRUE)
        IV_Wald(Z[id boot], D[id boot], Y[id boot])[3]
    })

    c est[3], sd(CACEboot))
}
```

Under the null hypothesis that $\tau_c = 0$, we can approximate the variance by $\hat{V}_Y/\hat{\tau}_D^2$, where $\hat{V}_Y$ is the Neyman-type variance estimate for the difference in means of $Y$. This variance estimator is inconsistent if the true $\tau_c$ is not zero. Therefore, it works for testing but not for estimation. Nevertheless, it gives insights for the ITT estimator and the Wald estimator. The ITT estimator $\hat{\tau}_Y$ has estimated standard error $\sqrt{\hat{V}_Y}$. The Wald estimator $\hat{\tau}_Y/\hat{\tau}_D$ essentially equals the ITT estimator multiplied by $1/\hat{\tau}_D > 1$, which is larger in magnitude but at the same time, its estimated standard error increases by the same factor. Based on the variance estimators $\hat{V}_Y$ and $\hat{V}_Y/\hat{\tau}_D^2$, the confidence intervals for $\tau_Y$ and $\tau_c$ are

$$
\hat{\tau}_Y \pm z_{1-\alpha/2} \sqrt{\hat{V}_Y}
$$

and

$$
\hat{\tau}_Y/\hat{\tau}_D \pm z_{1-\alpha/2} \sqrt{\hat{V}_Y}/\hat{\tau}_D = \left( \hat{\tau}_Y \pm z_{1-\alpha/2} \sqrt{\hat{V}_Y} \right)/\hat{\tau}_D
$$

respectively, where $z_{1-\alpha/2}$ is the $1-\alpha/2$ upper quantile of the standard Normal random variable. These confidence intervals give the same qualitative conclusions since they will both cover zero or not. In some sense, the IV analysis provides the same qualitative information as the ITT analysis of $Y$ although it involves more complicated procedures.ratio formula $\hat{\tau}_c = \hat{\tau}_Y/\hat{\tau}_D$ and use the bootstrap to approximate the asymptotic variance. I do not implement the corresponding estimator and variance estimator but relegate it as Problem 21.8.

## 21.4 Weak IV

### 21.4.1 Some simulation

Even if $\tau_D > 0$, there is a positive probability that $\hat{\tau}_D$ is zero, so the variance of $\hat{\tau}_c$ is infinity (see Problem 21.1). The variance from the Normal approximation discussed before is not the variance of $\hat{\tau}_c$ but rather the variance of its asymptotic distribution. This is a subtle technical point. When $\tau_D$ is close to 0, which is referred to as the weak IV case, the ratio estimator $\hat{\tau}_c = \hat{\tau}_Y/\hat{\tau}_D$ has poor finite-sample properties. In this scenario, $\hat{\tau}_c$ has finite-sample bias and non-Normal asymptotic distribution, and the corresponding Wald-type confidence intervals have poor coverage properties$^4$. In the simple case with a binary outcome $Y$, we know that $\tau_Y$ must be bounded between -1 and 1, but there is no guarantee that $\hat{\tau}_c$ is bounded between -1 and 1.

Figures 21.1a and 21.1b show the histograms of $\hat{\tau}_c$ and $\hat{\tau}_{c,L}$ over simulation with different $\pi_c$. I leave the detailed data-generating processes to the R code. From the figures, the distributions of the estimators $\hat{\tau}_c$ and $\hat{\tau}_{c,L}$ are far from Normal when $\pi_c$ equals 0.2 and 0.1. Statistical inference based on asymptotic Normality is unlikely to be reliable.

### 21.4.2 A procedure robust to weak IV

How do we deal with a weak IV? From a testing perspective, there is an easy solution. Because $\tau_c = \tau_Y/\tau_D$, so the following two null hypotheses are equivalent:

$$
H_0: \tau_c = 0 \iff H'_0: \tau_Y = 0
$$

if $\tau_D > 0$. Therefore, we simply test $H'_0$, i.e., the average causal effect of $Z$ on $Y$ is zero. This echoes our discussion in Section 21.2.2 about the relationship between the ITT analysis and the IV analysis.

From an estimation perspective, we can focus on the confidence interval although the point estimator has poor finite-sample properties. Because $\tau_c = \tau_Y/\tau_D$, this is similar to the classical Fieller–Creasy problem in statistics. Below we discuss a strategy for constructing confidence intervals for $\tau_c$

$^4$The theory often assumes that $\tau_D$ has the order $n^{-1/2}$. Under this regime, the proportion of compliers goes to 0 as $n$ goes to infinity. The IV method can only identify a subgroup average causal effect with the proportion shrinking to 0. This is a contrived regime for theoretical analysis. It is hard to justify this assumption in practice. The following discussion does not assume it.![[_resources/Ding - 2023 - A First Course in Causal Inference_Part8/01b495850eb994ec444f715e635e420c_MD5.jpg]]

FIGURE 21.1: Simulation with strong and weak IVsmotivated by Fieller (1954); see Chapter A.4.2. By the duality between confidence intervals and hypothesis tests (See Chapter A.2.5), we can construct a confidence set for $\tau_c$ by inverting a sequence of null hypotheses

$$
H_0(b) : \tau_c = b.
$$

Given the true value $\tau_c = b$, we have

$$
\tau_Y - b\tau_D = 0.
$$

The null hypothesis $H_0(b)$ is equivalent to the null hypothesis of zero average causal effect on the outcome $A_i(b) = Y_i - bD_i$:

$$
H_0(b) : \tau_{A(b)} = 0.
$$

Let $\hat{\tau}_A(b)$ be a generic point estimator for $\tau_{A(b)}$ with the associated variance estimator $\hat{V}_A(b)$. The point and variance estimators depend on the settings. In the CRE without covariates, $\hat{\tau}_A(b)$ is the difference in means of the outcome $A_i(b)$ and $\hat{V}_A(b)$ is the Neyman-type variance estimator. In the CRE with covariates, $\hat{\tau}_A(b)$ is Lin (2013)'s estimator for the outcome $A_i(b)$ and $\hat{V}_A(b)$ is the EHW variance estimator in the associated OLS fit of $Y_i - bD_i$ on $(Z_i, X_i, Z_i X_i)$ with the correction term⁵ discussed in Chapter 9.1. In unconfounded observational studies, we can obtain the estimator for the average causal effect on $A_i(b)$ and the associated variance estimator based on many existing strategies in Part III of the book.

Based on $\hat{\tau}_A(b)$ and $\hat{V}_A(b)$, we can construct a Wald-type test for $H_0(b)$. Inverting tests, we can construct the following confidence set for $\tau_c$:

$$
\left\{ b : \frac{\hat{\tau}_A^2(b)}{\hat{V}_A(b)} \le z_{1-\alpha/2}^2 \right\}
$$

where $z_{1-\alpha/2}$ is the $1 - \alpha/2$ upper quantile of the standard Normal random variable. This is close to the Anderson–Rubin-type confidence interval in econometrics (Anderson and Rubin, 1950). Due to its connection to Fieller (1954), I will call it the Fieller–Anderson–Rubin (FAR) confidence interval. These weak-IV confidence intervals reduce to the asymptotic confidence intervals when the IV is strong. But they have additional guarantees when the IV is weak. I recommend using them in practice.

**Example 21.1** To gain intuition about the FAR confidence interval, we look into the simple case of the CRE without covariates. The quadratic inequality in the confidence interval reduces to

$$
(\hat{\tau}_Y - b\hat{\tau}_D)^2 \\ \le z_{1-\alpha/2} \left[ n_1^{-1} \{\hat{S}_Y^2(1) + b^2 \hat{S}_D^2(1) - 2b \hat{S}_{YD}(1)\} \right. \\ \left. \qquad + n_0^{-1} \{\hat{S}_Y^2(0) + b^2 \hat{S}_D^2(0) - 2b \hat{S}_{YD}(0)\} \right],
$$

⁵If we adopt the finite-population perspective, then we do not need this correction.where {$\hat{S}_Y^2(1), \hat{S}_D^2(1), \hat{S}_{YD}(1)$} and {$\hat{S}_Y^2(0), \hat{S}_D^2(0), \hat{S}_{YD}(0)$} are the sample variances and covariances of $Y$ and $D$ under the treatment and control, respectively. The confidence set can be a close interval, two disconnected intervals, an empty set, or the whole real line. I relegate the detailed discussion to Problem 21.4.

### 21.4.3 Implementation and simulation

The following functions can compute a sequence of *p*-values as a function of *b*. The function FARci does not use covariates, and the function FARciX uses covariates which relies on the function `linestimator` defined in Chapter 9.2.

```matlab
FARci = function(Z, D, Y, Lower, Upper, grid)
{
    CIrange = seq(Lower, Upper, grid)
    Pvalue  = sapply(CIrange, function(t){
        Y_t      = Y - t*D
        Tauadj   = mean(Y_t[Z==1]) - mean(Y_t[Z==0])
        VarAdj   = var(Y_t[Z==1])/sum(Z) +
                   var(Y_t[Z==0])/sum(1 - Z)
        Tstat    = Tauadj/sqrt(VarAdj)
        (1 - pnorm(abs(Tstat)))*2
    })

    return(list(CIrange = CIrange, Pvalue = Pvalue))
}

FARciX = function(Z, D, Y, X, Lower, Upper, grid)
{
    CIrange = seq(Lower, Upper, grid)
    X        = scale(X)
    Pvalue   = sapply(CIrange, function(t){
        Y_t      = Y - t*D
        linest   = linestimator(Z, Y_t, X)
        Tstat    = linest[1]/linest[3]
        (1 - pnorm(abs(Tstat)))*2
    })

    return(list(CIrange = CIrange, Pvalue = Pvalue))
}
```

Figure 21.2 displays the *p*-value as a function of *b* in simulated data with different $\pi_c$. Figures 21.2a and 21.2b are based on two realizations of the same data-generating process, with details relegated to the R code. In Figure 21.2a, the FAR confidence sets are all closed intervals, whereas, in Figure 21.2b, the confidence sets are not closed intervals with $\pi_c = 0.2$ and $\pi_c = 0.1$. The shapes of the confidence sets remain stable across two realizations with $\pi_c = 0.5$.![[_resources/Ding - 2023 - A First Course in Causal Inference_Part8/9501df2b83a161b24e3ba0db34fdda74_MD5.jpg]]

FIGURE 21.2: FAR confidence interval based on simulated data with different $\pi_c$: two realizations21.5 Application

The `mediation` package contains a dataset `jobs` from the Job Search Intervention Study (JOBS II), which was a randomized field experiment that investigated the efficacy of a job training intervention on unemployed workers. The variable `treat` is the indicator for whether a participant was randomly selected for the JOBS II training program, and the variable `comply` is the indicator for whether a participant actually participated in the JOBS II program. An outcome of interest is `job_seek` for measuring the level of job-search self-efficacy with values from 1 to 5. Covariates include `sex`, `age`, `marital`, `nonwhite`, `educ`, and `income`.

```r
> jobsdata = read.csv("jobsdata.csv")
> Z = jobsdata$treat
> D = jobsdata$comply
> Y = jobsdata$job_seek
> getX = lm(treat ~ sex + age + marital
+               + nonwhite + educ + income,
+               data = jobsdata)
> X = model.matrix(getX)[, -1]
```

We can estimate $\tau_c$ by $\hat{\tau}_c$ and obtain the standard error based on $\hat{V}_{\hat{\Lambda}}$ and the bootstrap. We can further conduct covariate adjustment to obtain $\hat{\tau}_{c,L}$ and obtain the standard error based on the bootstrap. The results are below. The point estimator and the standard error are stable across methods.

```r
## without covariates
> res = rbind(IV_Wald_delta(Z, D, Y),
+               IV_Wald_bootstrap(Z, D, Y, n boot = 10^3))
## with covariates
> res = rbind(res,
+               IV_Lin_bootstrap(Z, D, Y, X, n boot = 10^3))
> res = cbind(res, res[, 1] - 1.96*res[, 2],
+               res[, 1] + 1.96*res[, 2])
> row.names(res) = c("delta", "bootstrap", "with covariates")
> colnames(res) = c("est", "se", "lower CI", "upper CI")
> round(res, 3)

             est      se   lower CI   upper CI
delta          0.109   0.081  -0.050     0.268
bootstrap      0.109   0.083  -0.054     0.271
with covariates 0.118   0.082  -0.042     0.278
```

We can also construct the FAR confidence sets by inverting tests. They are similar to the confidence intervals above.

```
lower CI upper CI
without covariates -0.050  0.267
with covariates      -0.047  0.282
```Figure 21.3 plots the *p*-values for a sequence of tests.

![[_resources/Ding - 2023 - A First Course in Causal Inference_Part8/47f34dd1d19750f2fce441df6a97a1bd_MD5.jpg]]

FIGURE 21.3: Confidence interval of $\tau_c$ by inverting tests: upper panel without covariate adjustment, and lower panel with covariate adjustment

## 21.6 Interpreting the CACE

The notation for potential outcomes {$D(1), D(0), Y(1), Y(0)$} is with respect to the hypothetical intervention of the treatment assigned $Z$. So $\tau_c$ is the average causal effect of the treatment assigned on the outcome for compliers. Fortunately, $D = Z$ for compliers, so we can also interpret $\tau_c$ as the averagecausal effect of the treatment received on the outcome for compliers. This partially answers the scientific question.

Some papers use different notation. For instance, Angrist et al. (1996) use $Y_i(z, d)$ for the potential outcome of unit $i$ under a two-by-two factorial experiment⁶ with the treatment assigned $z$ and treatment received $d$. Angrist (2022, Section 3.1) comments on the intellectual history of this choice of notation. With the notation, the exclusion restriction assumption then has the following form.

**Assumption 21.4 (exclusion restriction)** $Y_i(z, d) = Y_i(d)$ for all $i$, that is, the potential outcome is only a function of $d$.

Based on the causal diagram below, Assumption 21.4 rules out the direct arrow from $Z$ to $Y$. In such a case, $Z$ is an IV for $D$.

![[_resources/Ding - 2023 - A First Course in Causal Inference_Part8/f706bf74a7e73195be7823039545375e_MD5.jpg]]

Under Assumption 21.4, the augmented notation $Y_i(z, d)$ reduces to $Y_i(d)$, which justifies the name of “exclusion restriction.” Therefore, $Y_i(1, d) = Y_i(0, d)$ for $d = 0, 1$, which, coupled with Assumption 21.2, implies that

$$
\begin{align*} 
Y_i(z = 1) - Y_i(z = 0) &= Y_i(1, D_i(1)) - Y_i(0, D_i(0)) \\ 
&= \begin{cases} 
0, & \text{if } U_i = \text{a}, \\ 
0, & \text{if } U_i = \text{n}, \\ 
Y_i(d = 1) - Y_i(d = 0), & \text{if } U_i = \text{c}. 
\end{cases} 
\end{align*}
$$

In the above, I emphasize the potential outcomes are with respect to $z$, $d$, or both, to avoid confusion. The previous decomposition of $\tau_Y$ holds and we have the following result from Imbens and Angrist (1994) and Angrist et al. (1996).

Recall the average causal effect on $D$, $\tau_D = E\{D(1) - D(0)\}$, define the average causal effect on $Y$ as $\tau_Y = E\{Y(D(1)) - Y(D(0))\}$, and define the complier average causal effect as

$$
\tau_c = E\{Y(d = 1) - Y(d = 0) | U = c\}.
$$

**Theorem 21.2** *Under Assumptions 21.2–21.4, we have*

$$
Y(D(1)) - Y(D(0)) = \{D(1) - D(0)\} \times \{Y(d = 1) - Y(d = 0)\}
$$

and $\tau_c = \tau_Y / \tau_D$.

⁶The name “factorial experiment” is from the experimental design literature (Dasgupta et al., 2015). The experimenter randomizes multiple factors to each unit. The treatment in the factorial experiment has multiple levels.The proof is almost identical to the proof of Theorem 21.1 with modifications of the notation. I leave it as Problem 21.3. From the notation $Y_i(d)$, it is more convenient to interpret $\tau_c$ as the average causal effect of the treatment received on the outcome for compliers.

## 21.7 Homework problems

### 21.1 Variance of the Wald estimator

Show that $\text{var}(\hat{\tau}_c) = \infty$.

### 21.2 Asymptotic variance of the Wald estimator and its estimation

Consider the large-sample regime with $n \to \infty$. First show that $\sqrt{n}(\hat{\tau}_c - \tau_c) \to N(0, V)$ in distribution and find $V$. Then show that $\hat{V}_{\hat{A}}/V \to 1$ in probability.

### 21.3 Proof of the main theorem of Imbens and Angrist (1994) and Angrist et al. (1996)

Prove Theorem 21.2.

### 21.4 More on the FAR confidence set

The confidence set in Example 21.1 can be a close interval, two disconnected intervals, an empty set, or the whole real line. Find the precise condition for each case.

### 21.5 More simulation for the FAR confidence set

Figure 21.2 shows the FAR confidence sets without using covariates. Conduct parallel simulation for the FAR confidence sets adjusting for covariates in CRE.

### 21.6 Binary IV and ordinal treatment received

Angrist and Imbens (1995) discussed a more general setting with a binary IV $Z$, an ordinal treatment received $D \in \{0, 1, \dots, J\}$, and an outcome $Y$. The ordinal treatment received has potential outcomes $D(1)$ and $D(0)$ with respect to the binary IV, and the outcome has potential outcomes $Y(z, d)$ with respect to both the binary IV and the ordinal treatment received. Extend the discussion in Section 21.6 and the corresponding IV assumptions as below.

**Assumption 21.5** We have (1) randomization that $Z \perp\{D(z), Y(z, d) : z = 0, 1; d = 0, 1, \dots, J\}$; (2) monotonicity that $D(1) \ge D(0)$; and (3) exclusion restriction that $Y(z, d) = Y(d)$ for all $z = 0, 1$ and $d = 0, 1, \dots, J$.They proved Theorem 21.3 below.

**Theorem 21.3** *Under Assumption 21.5, we have*

$$
\frac{E(Y | Z = 1) - E(Y | Z = 0)}{E(D | Z = 1) - E(D | Z = 0)} = \sum_{j=1}^{J} w_j E\{Y(j) - Y(j-1) | D(1) \ge j > D(0)\}
$$

where

$$
w_j = \frac{\mathrm{pr}\{D(1) \geq j > D(0)\}}{\sum_{j'=1}^{J} \mathrm{pr}\{D(1) \geq j' > D(0)\}}.
$$

Prove Theorem 21.3.

Remark: When $J = 1$, Theorem 21.3 reduces to Theorem 21.2. With a general $J$, it states that the standard IV formula identifies a weighted average of some latent subgroup effects. The weights are proportional to the probability of the latent groups defined by $D(1) \geq j > D(0)$, and the latent subgroup effect $E\{Y(j) - Y(j-1) | D(1) \geq j > D(0)\}$ compares the adjacent levels of the treatment received. However, this weighted average may not be easy to interpret because the latent groups overlap.

The proof can be tedious. A trick is to write the treatment received and
outcome under treatment assignment *z* as

$$
D(z) = \sum_{j=0}^{J} j1\{D(z) = j\}, \quad Y(D(z)) = \sum_{j=0}^{J} Y(j)1\{D(z) = j\}
$$

to obtain

$$
D(1) - D(0) = \sum_{j=0}^{J} j[1\{D(1) = j\} - 1\{D(0) = j\}]
$$

and

$$
Y(D(1)) - Y(D(0)) = \sum_{j=0}^{J} Y(j)[1\{D(1) = j\} - 1\{D(0) = j\}].
$$

Then use the following *Abel's lemma*, also called *summation by parts*:

$$
\sum_{j=0}^{J} f_j (g_{j+1} - g_j) = f_J g_{J+1} - f_0 g_0 - \sum_{j=1}^{J} g_j (f_j - f_{j-1})
$$

for appropriately specified sequences ($f_j$) and ($g_j$).

21.7 Data analysis: a flu shot encouragement design (McDonald et al., 1992)

The dataset in *fluidata.txt* is from a randomized encouragement design of McDonald et al. (1992), which was also re-analyzed by Hirano et al. (2000). It contains the following variables:21 An Experimental Perspective of the Instrumental Variable

<table><tr><td>assign</td><td>binary encouragement to receive the flu shot</td></tr><tr><td>receive</td><td>binary indicator for receiving the flu shot</td></tr><tr><td>outcome</td><td>binary outcome for flu-related hospitalization</td></tr><tr><td>age</td><td>age of the patient</td></tr><tr><td>sex</td><td>sex of the patient</td></tr><tr><td>race</td><td>race of the patient</td></tr><tr><td>copd</td><td>chronic obstructive pulmonary disease</td></tr><tr><td>dm</td><td>diabetes</td></tr><tr><td>heartd</td><td>heart disease</td></tr><tr><td>renal</td><td>renal disease</td></tr><tr><td>liverd</td><td>liver disease</td></tr></table>

Analyze the data with and without adjusting for the covariates.

21.8 IV estimation conditional on covariates

Implement the estimators and corresponding variance estimators mentioned in Chapter 21.3.2 in $\mathbb{R}$.

Remark: The problem is useful for Problem 21.9.

21.9 Data analysis: the Karolinska data

Revisit Problem 12.5. Rubin (2008) used the Karolinska data as an example for the IV method. In karolinska.txt, whether a patient was diagnosed at a large volume hospital can be viewed as an IV for whether a patient was treated at a large volume hospital. This is plausible conditional on other observed covariates. See Rubin (2008)'s analysis for more details.

Re-analyze the data assuming that the IV is randomly assigned conditional on observed covariates.

21.10 Data analysis: a job training program

The file jobtraining.rtf contains the description of the data files X.csv and Y.csv.

The dataset X.csv contains the pretreatment covariates. You can view the sampling weight variable wgt as a covariate too. Many previous analyses made this simplification although this is always a controversial issue in statistical analysis of survey data. Conduct analyses with and without covariates.

The dataset Y.csv contains the sampling weight, treatment assigned, treatment received, and many post-treatment variables. Therefore, this dataset contains many outcomes depending on your questions of interest. The data also have many complications. First, some outcomes are missing. Second, unemployed individuals do not have wages. Third, the outcomes are repeatedly observed over time. When you analyze the data, please give details about your choice of the questions of interest and estimators.

Remark: Schochet et al. (2008) analyzed the original data. Frumento et al. (2012) provided a more sophisticated analysis based on the framework in Chapter 26 later.Angrist et al. (1996) bridged the econometric IV perspective and statistical causal inference based on potential outcomes and demonstrated its usefulness with an application.

Some other early references on IV are Permutt and Hebel (1989), Sommer and Zeger (1991), Baker and Lindeman (1994), and Cuzick et al. (1997).—22

Disentangle Mixture Distributions and
Instrumental Variable Inequalities

The IV model in Chapter 21 imposes Assumptions 21.1–21.3:

1. $Z \perp\{D(1), D(0), Y(1), Y(0)\}$;
2. $\text{pr}(U = d) = 0$;
3. $Y(1) = Y(0)$ for $U = \text{a or n.}$

Table 22.1 summarizes the observed groups and the corresponding latent groups under the monotonicity assumption.

TABLE 22.1: Observed groups and latent groups under Assumption 21.2

<table>
  <thead>
    <tr>
      <th>Z</th>
      <th>D</th>
      <th>D(1)</th>
      <th>latent groups</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Z = 1</td>
      <td>D = 1</td>
      <td>D(1) = 1</td>
      <td>U = c or a</td>
    </tr>
    <tr>
      <td>Z = 1</td>
      <td>D = 0</td>
      <td>D(1) = 0</td>
      <td>U = n</td>
    </tr>
    <tr>
      <td>Z = 0</td>
      <td>D = 1</td>
      <td>D(0) = 1</td>
      <td>U = a</td>
    </tr>
    <tr>
      <td>Z = 0</td>
      <td>D = 0</td>
      <td>D(0) = 0</td>
      <td>U = c or n</td>
    </tr>
  </tbody>
</table>

Interestingly, Assumptions 21.1–21.3 together have some testable implica-
tions. Balke and Pearl (1997) called them the *instrumental variable inequal-
ities*. This chapter will give an intuitive derivation of a special case of these
inequalities. The proof is a direct consequence of identifying the means of the
potential outcomes for all latent groups defined by *U*.

**22.1 Disentangle Mixture Distributions**

We summarize the main results in Theorem 22.1 below. Define

$$
\pi_u = \mathrm{pr}(U = u) \quad (u = a, n, c)
$$

as the proportion of type $U = u$, and

$$
\mu_{zu} = E\{Y(z) \mid U = u\} \quad (z = 0, 1; u = a, n, c).
$$30222 Disentangle Mixture Distributions and Instrumental Variable Inequalities

as the mean of the potential outcome $Y(z)$ for type $U = u$. Exclusion restriction implies that $\mu_{1n} = \mu_{0n}$ and $\mu_{1a} = \mu_{0a}$. Let $\mu_n$ and $\mu_a$ denote them, respectively.

**Theorem 22.1** *Under Assumptions 21.1–21.3, we can identify the proportions of the latent types by*

$$
\begin{align*}
\pi_n &= \operatorname{pr}(D = 0 | Z = 1), \\
\pi_a &= \operatorname{pr}(D = 1 | Z = 0), \\
\pi_c &= E(D | Z = 1) - E(D | Z = 0),
\end{align*}
$$

and the type-specific means of the potential outcomes by

$$
\begin{align*}
\mu_n &= E(Y | Z = 1, D = 0), \\
\mu_a &= E(Y | Z = 0, D = 1), \\
\mu_{1c} &= \pi_c^{-1} \{E(DY | Z = 1) - E(DY | Z = 0)\}, \\
\mu_{0c} &= \pi_c^{-1} [E\{(1 - D)Y | Z = 0\} - E\{(1 - D)Y | Z = 1\}].
\end{align*}
$$

**Proof of Theorem 22.1: Part I:** We first identify the proportions of the latent compliance types. We can identify the proportion of the never takers by

$$
\begin{align*}
\operatorname{pr}(D = 0 | Z = 1) &= \operatorname{pr}(U = n | Z = 1) \\
&= \operatorname{pr}(U = n) \\
&= \pi_n,
\end{align*}
$$

and the proportion of the always takers by

$$
\begin{align*}
\operatorname{pr}(D = 1 | Z = 0) &= \operatorname{pr}(U = a | Z = 0) \\
&= \operatorname{pr}(U = a) = \pi_a.
\end{align*}
$$

Therefore, the proportion of compliers is

$$
\begin{align*}
\pi_c &= \operatorname{pr}(U = c) \\
&= 1 - \pi_n - \pi_a \\
&= 1 - \operatorname{pr}(D = 0 | Z = 1) - \operatorname{pr}(D = 1 | Z = 0) \\
&= E(D | Z = 1) - E(D | Z = 0) \\
&= \tau_D,
\end{align*}
$$

which is coherent with our previous discussion. Although we do not know individual latent compliance types for all units, we can identify the proportions of never-takers, always-takers, and compliers.

Part II: We then identify the means of the potential outcomes within latent compliance types. The observed group ($Z = 1, D = 0$) only has never takers, so

$$
E(Y | Z = 1, D = 0) = E\{Y(1) | Z = 1, U = n\} = E\{Y(1) | U = n\} = \mu_n.
$$The observed group ($Z = 0, D = 1$) only has always takers, so

$$
E(Y | Z = 0, D = 1) = E\{Y(0) | Z = 0, U = a\} = E\{Y(0) | U = a\} = \mu_a.
$$

The observed group ($Z = 1, D = 1$) has both compliers and always takers, so

$$
\begin{align*}
E(Y | Z = 1, D = 1) &= E\{Y(1) | Z = 1, D(1) = 1\} \\
&= E\{Y(1) | D(1) = 1\} \\
&= \operatorname{pr}\{D(0) = 1 | D(1) = 1\} E\{Y(1) | D(1) = 1, D(0) = 1\} \\
&\quad + \operatorname{pr}\{D(0) = 0 | D(1) = 1\} E\{Y(1) | D(1) = 1, D(0) = 0\} \\
&= \frac{\pi_c}{\pi_c + \pi_a} \mu_{1c} + \frac{\pi_a}{\pi_c + \pi_a} \mu_a.
\end{align*}
$$

Solve the linear equation above to obtain

$$
\begin{align*}
\mu_{1c} &= \pi_c^{-1} \{(\pi_c + \pi_a)E(Y | Z = 1, D = 1) - \pi_a E(Y | Z = 0, D = 1)\} \\
&= \pi_c^{-1} \{\operatorname{pr}(D = 1 | Z = 1)E(Y | Z = 1, D = 1) \\
&\qquad - \operatorname{pr}(D = 1 | Z = 0)E(Y | Z = 0, D = 1)\} \\
&= \pi_c^{-1} \{E(DY | Z = 1) - E(DY | Z = 0)\}.
\end{align*}
$$

The observed group ($Z = 0, D = 0$) has both compliers and never takers, so

$$
\begin{align*}
E(Y | Z = 0, D = 0) &= E\{Y(0) | Z = 0, D(0) = 0\} \\
&= E\{Y(0) | D(0) = 0\} \\
&= \operatorname{pr}\{D(1) = 1 | D(0) = 0\} E\{Y(0) | D(1) = 1, D(0) = 0\} \\
&\quad + \operatorname{pr}\{D(1) = 0 | D(0) = 0\} E\{Y(0) | D(1) = 0, D(0) = 0\} \\
&= \frac{\pi_c}{\pi_c + \pi_n} \mu_{0c} + \frac{\pi_n}{\pi_c + \pi_n} \mu_n.
\end{align*}
$$

Solve the linear equation above to obtain

$$
\begin{align*}
\mu_{0c} &= \pi_c^{-1} \{(\pi_c + \pi_n)E(Y | Z = 0, D = 0) - \pi_n E(Y | Z = 1, D = 0)\} \\
&= \pi_c^{-1} \{\operatorname{pr}(D = 0 | Z = 0)E(Y | Z = 0, D = 0) \\
&\qquad - \operatorname{pr}(D = 0 | Z = 1)E(Y | Z = 1, D = 0)\} \\
&= \pi_c^{-1} [E\{(1 - D)Y | Z = 0\} - E\{(1 - D)Y | Z = 1\}].
\end{align*}
$$

Based on the formulas of $\mu_{1c}$ and $\mu_{0c}$ in Theorem 22.1, we can simplify
$\tau_c = \mu_{1c} - \mu_{0c}$ as

$$
\tau_c = \{E(Y | Z = 1) - E(Y | Z = 0)\}/\pi_c,
$$

which is the same as the formula in Theorem 21.1 before.

Theorem 22.1 focuses on identifying the means of the potential outcomes, $\mu_{zu}$. Imbens and Rubin (1997) derived more general identification formulas for the distribution of the potential outcomes; I leave the details to Problem 22.3.## 22.2 Testable implications: Instrumental Variable Inequalities

Is there any additional value of the detour to derive the formula of $\tau_c$ through Theorem 22.1? The answer is yes. For binary outcome, the following inequalities must be true:

$$
0 \le \mu_{1c} \le 1, \quad 0 \le \mu_{0c} \le 1,
$$

which implies four inequalities:

$$
E(DY | Z = 1) - E(DY | Z = 0) \ge 0,
$$

$$
E(DY | Z = 1) - E(DY | Z = 0) \le E(D | Z = 1) - E(D | Z = 0),
$$

$$
E\{(1 - D)Y | Z = 0\} - E\{(1 - D)Y | Z = 1\} \ge 0,
$$

$$
E\{(1 - D)Y | Z = 0\} - E\{(1 - D)Y | Z = 1\} \le E(D | Z = 1) - E(D | Z = 0).
$$

Rearranging terms, we obtain the following unified inequalities.

**Theorem 22.2 (Instrumental Variable Inequalities)** With a binary outcome $Y$, Assumptions 21.1–21.3 imply

$$
E(Q | Z = 1) - E(Q | Z = 0) \ge 0, \qquad (22.1)
$$

where $Q = DY, D(1 - Y), (D - 1)Y$ and $D + Y - DY$.

Under the IV assumptions 21.1–21.3, the difference in means for $Q = DY, D(1 - Y), (D - 1)Y$ and $D + Y - DY$ must all be non-negative. Importantly, these implications only involve the distribution of the observed variables. Rejection of the IV inequalities leads to rejection of the IV assumptions.

Balke and Pearl (1997) derived more general IV inequalities with and without assuming monotonicity. The proving strategy above is due to Jiang and Ding (2020) for a slightly more complex setting. Theorem 22.2 states the testable implications only for a binary outcome. Problem 22.4 gives an equivalent form, and Problem 22.5 gives the result for a general outcome.

## 22.3 Examples

For a binary outcome, we can estimate all the parameters by the method of moments below.

IVbinary = function(n111, n110, n101, n100,
                 n011, n010, n001, n000){```r
n_tr = n111 + n110 + n101 + n100
n_co = n011 + n010 + n001 + n000
n = n_tr + n_co

## proportions of the latent strata
pi_n = (n101 + n100)/n_tr
pi_a = (n011 + n010)/n_co
pi_c = 1 - pi_n - pi_a

## four observed means of the outcomes (Z=z, D=d)
mean_y_11 = n111/(n111 + n110)
mean_y_10 = n101/(n101 + n100)
mean_y_01 = n011/(n011 + n010)
mean_y_00 = n001/(n001 + n000)

## means of the outcomes of two strata
mu_n1 = mean_y_10
mu_a0 = mean_y_01

## ER implies the following two means
mu_n0 = mu_n1
mu_a1 = mu_a0

## stratum (Z=1, D=1) is a mixture of c and a
mu_c1 = ((pi_c + pi_a)*mean_y_11 - pi_a*mu_a1)/pi_c

## stratum (Z=0, D=0) is a mixture of c and n
mu_c0 = ((pi_c + pi_n)*mean_y_00 - pi_n*mu_n0)/pi_c

## identifiable quantities from the observed data
list(pi_c = pi_c,
    pi_n = pi_n,
    pi_a = pi_a,
    mu_c1 = mu_c1,
    mu_c0 = mu_c0,
    mu_n1 = mu_n1,
    mu_n0 = mu_n0,
    mu_a1 = mu_a1,
    mu_a0 = mu_a0,
    tau_c = mu_c1 - mu_c0)
}
```

We then re-visit two canonical examples with binary data.

**Example 22.1** Investigators et al. (2014) assess the effectiveness of the emergency endovascular versus the open surgical repair strategies for patients with a clinical diagnosis of ruptured aortic aneurism. Patients are randomized to either the emergency endovascular or the open repair strategy. The primary outcome is the survival status after 30 days. Let Z be the treatment assigned, with Z = 1 for the endovascular strategy and Z = 0 for the open repair. Let D be the treatment received. Let Y be the survival status, with Y = 1 for dead,30622 Disentangle Mixture Distributions and Instrumental Variable Inequalities

and $Y = 0$ for alive. Table 22.2a summarizes the observed data. Using the IVbinary function above, we can obtain the following estimates:

```
> investigators_analysis = IVbinary(n111 = 107,
+                                     n110 = 42,
+                                     n101 = 68,
+                                     n100 = 42,
+                                     n011 = 24,
+                                     n010 = 8,
+                                     n001 = 131,
+                                     n000 = 79)
>
> investigators_analysis
$pi_c
[1] 0.4430582

$pi_n
[1] 0.4247104

$pi_a
[1] 0.1322314

$mu_c1
[1] 0.7086064

$mu_c0
[1] 0.6292042

$mu_n1
[1] 0.6181818

$mu_n0
[1] 0.6181818

$mu_a1
[1] 0.75

$mu_a0
[1] 0.75

$tau_c
[1] 0.07940223
```

There is no evidence of violating the IV assumptions.

**Example 22.2** In Hirano et al. (2000), physicians are randomly selected to receive a letter encouraging them to inoculate patients at risk for flu. The treatment is the actual flu shot, and the outcome is an indicator of flu-related hospital visits. However, some patients do not comply with their assignments. Let $Z_i$ be the indicator of encouragement to receive the flu shot, with $Z = 1$ ifthe physician receives the encouragement letter, and Z = 0 otherwise. Let D be the treatment received. Let Y be the outcome, with Y = 0 if for a flu-related hospitalization during the winter, and Y = 1 otherwise. See Problem 21.7 for more details of the data. Table 22.2b summarizes the observed data. Using the IVbinary function above, we can obtain the following estimates:

```R
> flu_analysis = IVbinary(n111 = 31,
+                         n110 = 422,
+                         n101 = 84,
+                         n100 = 935,
+                         n011 = 30,
+                         n010 = 233,
+                         n001 = 99,
+                         n000 = 1027)
> flu_analysis
pi_c
[1] 0.1183997

pi_n
[1] 0.6922554

pi_a
[1] 0.1893449

mu_c1
[1] -0.004548064

mu_c0
[1] 0.1200094

mu_n1
[1] 0.08243376

mu_n0
[1] 0.08243376

mu_a1
[1] 0.1140684

mu_a0
[1] 0.1140684

tau_c
[1] -0.1245575
```

Since $\hat{\mu}_{1c} < 0$, there is evidence of violating the IV assumptions.30822 Disentangle Mixture Distributions and Instrumental Variable Inequalities

TABLE 22.2: Binary data and IV inequalities

<table><thead><tr><th colspan="3">(a) Investigators et al. (2014)'s study</th></tr><tr><th></th><th colspan="2">Z = 1</th><th colspan="2">Z = 0</th></tr><tr><th></th><th>D = 1</th><th>D = 0</th><th>D = 1</th><th>D = 0</th></tr></thead><tbody><tr><th>Y = 1</th><td>107</td><td>68</td><td>24</td><td>131</td></tr><tr><th>Y = 0</th><td>42</td><td>42</td><td>8</td><td>79</td></tr></tbody><thead><tr><th colspan="3">(b) Hirano et al. (2000)'s study</th></tr><tr><th></th><th colspan="2">Z = 1</th><th colspan="2">Z = 0</th></tr><tr><th></th><th>D = 1</th><th>D = 0</th><th>D = 1</th><th>D = 0</th></tr></thead><tbody><tr><th>Y = 1</th><td>31</td><td>85</td><td>30</td><td>99</td></tr><tr><th>Y = 0</th><td>424</td><td>944</td><td>237</td><td>1041</td></tr></tbody></table>

## 22.4 Homework problems

### 22.1 More detailed data analysis

Examples 22.1 and 22.2 ignored the uncertainty in the estimates. Calculate the confidence intervals for the true parameters.

### 22.2 Risk ratio for compliers

With a binary outcome, we can define the risk ratio for compliers as

$$
RR_c = \frac{\mathrm{pr}\{Y(1) = 1 | U = c\}}{\mathrm{pr}\{Y(0) = 1 | U = c\}}
$$

Show that under Assumptions 21.1–21.3, we can identify it by

$$
RR_c = \frac{E(DY | Z = 1) - E(DY | Z = 0)}{E\{(D-1)Y | Z = 1\} - E\{(D-1)Y | Z = 0\}}
$$

Remark: Using Theorem 22.1, we can identify any comparisons between $E\{Y(1) | U = c\}$ and $E\{Y(0) | U = c\}$.

### 22.3 Disentangle the mixtures: distributional results

This problem extends Theorem 22.1. Define

$$
f_{zu}(y) = \mathrm{pr}\{Y(z) = y | U = u\}, \quad (z = 0, 1; u = a, n, c)
$$

as the density of $Y(z)$ for latent stratum $U = u$, and define

$$
g_{zd}(y) = \mathrm{pr}(Y = y | Z = z, D = d)
$$as the density of the outcome within the observed group ($Z = z, D = d$). Exclusion restriction implies that $f_{1n}(y) = f_{0n}(y)$ and $f_{1a}(y) = f_{0a}(y)$. Let $f_n(y)$ and $f_a(y)$ denote them, respectively.

Prove Theorem 22.3 below.

**Theorem 22.3** Under Assumptions 21.1–21.3, we can identify the type-specific densities of the potential outcomes by

$$
\begin{align*} 
f_n(y) &= g_{10}(y), \\ 
f_a(y) &= g_{01}(y), \\ 
f_{1c}(y) &= \pi_c^{-1}\{\text{pr}(D=1|Z=1)g_{11}(y) - \text{pr}(D=1|Z=0)g_{01}(y)\}, \\ 
f_{0c}(y) &= \pi_c^{-1}\{\text{pr}(D=0|Z=0)g_{00}(y) - \text{pr}(D=0|Z=1)g_{10}(y)\}. 
\end{align*}
$$

## 22.4 Alternative form of Theorem 22.2

The inequalities in (22.1) can be re-written as

$$
\begin{align*} 
\text{pr}(D = 1, Y = y | Z = 1) &\ge \text{pr}(D = 1, Y = y | Z = 0), \\ 
\text{pr}(D = 0, Y = y | Z = 0) &\ge \text{pr}(D = 0, Y = y | Z = 1) 
\end{align*}
$$

for both $y = 0, 1$.

## 22.5 IV inequalities for a general outcome

For a general outcome $Y$, show that Assumptions 21.1–21.3 imply

$$
\begin{align*} 
\text{pr}(D = 1, Y \ge y | Z = 1) &\ge \text{pr}(D = 1, Y \ge y | Z = 0), \\ 
\text{pr}(D = 1, Y < y | Z = 1) &\ge \text{pr}(D = 1, Y < y | Z = 0), \\ 
\text{pr}(D = 0, Y \ge y | Z = 0) &\ge \text{pr}(D = 0, Y \ge y | Z = 1), \\ 
\text{pr}(D = 0, Y < y | Z = 0) &\ge \text{pr}(D = 0, Y < y | Z = 1) 
\end{align*}
$$

for all $y$.

Remark: Imbens and Rubin (1997) and Kitagawa (2015) discussed similar results. We can test the first inequality based on an analog of the Kolmogorov–Smirnov statistic:

$$
\text{KS}_1 = \max_y \left| \frac{\sum_{i=1}^n Z_i D_i 1(Y_i \le y)}{\sum_{i=1}^n Z_i D_i} - \frac{\sum_{i=1}^n (1-Z_i) D_i 1(Y_i \le y)}{\sum_{i=1}^n (1-Z_i) D_i} \right|
$$

## 22.6 Example for the IV inequalities

Give an example in which all the IV inequalities hold and another example in which not all the IV inequalities hold. You need to specify the joint distribution of $(Z, D, Y)$ with binary variables.31022 Disentangle Mixture Distributions and Instrumental Variable Inequalities

22.7 Violations of the key assumptions

Theorem 21.1 relies on randomization, monotonicity, and exclusion restriction. The latter two are not testable even in randomized experiments. When they are violated, the IV estimator no longer identifies the CACE. This problem gives two cases below, which are restatements of Propositions 2 and 3 in Angrist et al. (1996). Recall $\pi_u = \text{pr}(U = u)$ and $\tau_u = E\{Y(1) - Y(0) | U = u\}$ for $u = a, n, c, d$.

**Theorem 22.4 (a) Under Assumptions 21.1 and 21.2 without the exclusion restriction, we have**

$$
\frac{E(Y | Z = 1) - E(Y | Z = 0)}{E(D | Z = 1) - E(D | Z = 0)} - \tau_c = \frac{\pi_a \tau_a + \pi_n \tau_n}{\pi_c}
$$

(b) Under Assumptions 21.1 and 21.3 without the monotonicity, we have

$$
\frac{E(Y | Z = 1) - E(Y | Z = 0)}{E(D | Z = 1) - E(D | Z = 0)} - \tau_c = \frac{\pi_d(\tau_c + \tau_d)}{\pi_c - \pi_d}
$$

Prove Theorem 22.4.

22.8 Problems of other analyses

In the process of deriving the IV inequalities in Section 22.1, we disentangled the mixture distributions by identifying the proportions of the latent strata as well as the conditional means of their potential outcomes. These results help to understand the drawbacks of other seemingly reasonable analyses. I review three estimators below and suppose Assumptions 21.1–21.3 hold.

1. The *as-treated analysis* compares the means of the outcomes among units receiving the treatment and control, yielding

$$
\tau_{\text{AT}} = E(Y | D = 1) - E(Y | D = 0).
$$

Show that

$$
\tau_{\text{AT}} = \frac{\pi_a \mu_a + \text{pr}(Z = 1) \pi_c \mu_{1c}}{\text{pr}(D = 1)} - \frac{\pi_n \mu_n + \text{pr}(Z = 0) \pi_c \mu_{0c}}{\text{pr}(D = 0)}.
$$

2. The *per-protocol analysis* compares the units that comply with the treatment assigned in treatment and control groups, yielding

$$
\tau_{\text{PP}} = E(Y | Z = 1, D = 1) - E(Y | Z = 0, D = 0).
$$

Show that

$$
\tau_{\text{PP}} = \frac{\pi_a \mu_a + \pi_c \mu_{1c}}{\pi_a + \pi_c} - \frac{\pi_n \mu_n + \pi_c \mu_{0c}}{\pi_n + \pi_c}.
$$3. We may also want to compare the outcomes among units receiving the treatment and control, conditioning on their treatment assignment, yielding

$$
\begin{align*} 
\tau_{Z=1} &= E(Y | Z = 1, D = 1) - E(Y | Z = 1, D = 0), \\ 
\tau_{Z=0} &= E(Y | Z = 0, D = 1) - E(Y | Z = 0, D = 0). 
\end{align*}
$$

Show that they reduce to

$$
\tau_{Z=1} = \frac{\pi_a \mu_a + \pi_c \mu_{1c}}{\pi_a + \pi_c} - \mu_n, \quad \tau_{Z=0} = \mu_a - \frac{\pi_n \mu_n + \pi_c \mu_{0c}}{\pi_n + \pi_c}.
$$

## 22.9 Bounds on the average causal effect on the whole population

Extend the discussion in Section 22.1 based on the notation in Section 21.6. With the potential outcome $Y(d)$, define the average causal effect of the treatment received on the outcome as

$$
\delta = E\{Y(d = 1) - Y(d = 0)\},
$$

and modify the definition of $\mu_{zu}$ as

$$
m_{du} = E\{Y(d) | U = u\}, \quad (z = 0, 1; u = a, n, c)
$$

due to the change of the notation. They satisfy

$$
\delta = \sum_{u=a,n,c} \pi_u (m_{1u} - m_{0u}).
$$

Section 22.1 identifies $\pi_a$, $\pi_n$, $\pi_c$, $m_{1a} = \mu_{1a}$, $m_{0n} = \mu_{0n}$, $m_{1c} = \mu_{1c}$ and $m_{0c} = \mu_{0c}$. But the data do not contain any information about $m_{0a}$ and $m_{1n}$. Therefore, we cannot identify $\delta$. With a bounded outcome, we can bound $\delta$.

**Theorem 22.5** *Under Assumptions 21.2–21.4 with a bounded outcome in $[\underline{y}, \bar{y}]$, we have $\underline{\delta} \le \delta \le \bar{\delta}$, where*

$$
\underline{\delta} = \delta' - \bar{y}\text{pr}(D = 1 | Z = 0) + \underline{y}\text{pr}(D = 0 | Z = 1)
$$

and

$$
\bar{\delta} = \delta' - \underline{y}\text{pr}(D = 1 | Z = 0) + \bar{y}\text{pr}(D = 0 | Z = 1)
$$

$$
\text{with } \delta' = E(DY | Z = 1) - E(Y - DY | Z = 0).
$$

Prove Theorem 22.5.

Remark: In the special case with a binary outcome, the bounds simplify to

$$
\underline{\delta} = E(DY | Z = 1) - E(D + Y - DY | Z = 0)
$$

and

$$
\bar{\delta} = E(DY + 1 - D | Z = 1) - E(Y - DY | Z = 0).
$$31222 Disentangle Mixture Distributions and Instrumental Variable Inequalities

22.10 One-sided noncompliance and statistical inference

Consider a randomized encouragement design where the units assigned to the control have no access to the treatment. For unit $i$, let $Z_i$ be the binary treatment assigned, $D_i$ be the binary treatment received, and $Y_i$ be the outcome of interest. One-sided noncompliance happens when

$$
Z_i = 0 \implies D_i = 0 \quad (i = 1, \dots, n).
$$

Suppose that Assumption 21.1 holds.

1. Does monotonicity Assumption 21.2 hold in this case? How many latent strata defined by $\{D_i(1), D_i(0)\}$ are there in this problem? How do we identify their proportions by the observed data distribution?
2. State the assumption of exclusion restriction. Under exclusion restriction, show that $E\{Y(z) | U = u\}$ can be identified by the observed data distributions. Give the formulas for all possible values of $z$ and $u$. How do we identify the CACE in this case?
3. If we observe pretreatment covariates $X_i$ for all units $i$, how do we use the covariate information to improve the estimation efficiency of the CACE?
4. Under Assumption 21.1, the exclusion restriction Assumption 21.3 has testable implications, which are the IV inequalities for one-sided noncompliance. State the IV inequalities.
5. Sommer and Zeger (1991) provided the following dataset:

<table><thead><tr><th rowspan="2"></th><th colspan="2">Z = 1</th><th colspan="2">Z = 0</th></tr><tr><th>D = 1</th><th>D = 0</th><th>D = 1</th><th>D = 0</th></tr></thead><tbody><tr><th>Y = 1</th><td>9663</td><td>2385</td><td>0</td><td>11514</td></tr><tr><th>Y = 0</th><td>12</td><td>34</td><td>0</td><td>74</td></tr></tbody></table>

The treatment assigned $Z$ is whether or not the child was assigned to the vitamin A supplement, the treatment received indicator $D$ is whether or not the child received the vitamin A supplement, and the binary outcome $Y$ is the survival indicator. The original RCT was conducted in Indonesia. Re-analyze the data.

Remark: Bloom (1984) first discussed one-sided noncompliance and proposed the estimator $\hat{\tau}_c = \hat{\tau}_Y/\hat{\tau}_D$, which is sometimes called the Bloom estimator. Bloom (1984)'s notation is different from this chapter.

22.11 One-sided noncompliance with partial adherence

Sanders and Karim (2021, Table 3) reported the following data from an RCT aiming to estimate the efficacy of smoking cessation interventions among individuals with psychotic disorders.<table><thead><tr><th>group assigned</th><th>treatment received</th><th>group size</th><th># positive outcomes</th></tr></thead><tbody><tr><td>Control</td><td>None</td><td>151</td><td>25</td></tr><tr><td>Treatment</td><td>None</td><td>35</td><td>7</td></tr><tr><td>Treatment</td><td>Partial</td><td>42</td><td>17</td></tr><tr><td>Treatment</td><td>Full</td><td>70</td><td>40</td></tr></tbody></table>

Three tiers of treatment received are defined as follows: “full” treatment corresponds to attending all 8 treatment sessions, “partial” corresponds to attending 5 to 7 sessions, and “none” corresponds to < 5 sessions. The outcome is defined as the binary indicator of smoking reduction of 50% or greater relative to baseline, measured at three months.

In this problem, the treatment assignment $Z$ is binary but the treatment received $D$ takes three values 0, 0.5, 1 for “none”, “partial”, and “full.” The three-leveled $D$ causes complications, but it can only be 0 under the control assignment. How many latent strata $U = \{D(1), D(0)\}$ do we have in this problem? Can we identify their proportions?

How do we extend the exclusion restriction to this problem? What can be the causal effects of interest? Can we identify them?

Analyze the data based on the questions above.

### 22.12 Recommended reading

Balke and Pearl (1997) derived more general IV inequalities.![[_resources/Ding - 2023 - A First Course in Causal Inference_Part8/edbc9209660f3edca7dd20bad58fb633_MD5.jpg]]

![[_resources/Ding - 2023 - A First Course in Causal Inference_Part8/06bb0e299687a25cf1855d879460a847_MD5.jpg]]

![[_resources/Ding - 2023 - A First Course in Causal Inference_Part8/c41b41bf75768efdb7ee65154fd86e05_MD5.jpg]]

![[_resources/Ding - 2023 - A First Course in Causal Inference_Part8/23fcbcd7bdaa22634c264f3f4a849382_MD5.jpg]]23

An Econometric Perspective of the
Instrumental Variable

Chapters 21 and 22 discuss the IV method from the experimental perspective.
Figure 23.1 illustrates the intuition behind the discussion.

![[_resources/Ding - 2023 - A First Course in Causal Inference_Part8/c9c2eb52e0761fb34ea42f3c58fcf468_MD5.jpg]]

FIGURE 23.1: Causal diagram for IV

In an encouragement design with noncompliance, *Z* is randomized, so it is independent of the confounder *U* between the treatment received *D* and the outcome *Y*. Importantly, the treatment assignment *Z* does not have any direct effect on the outcome *Y*. It acts as an IV for the treatment received *D* in the sense that it affects the outcome *Y* only through the treatment received *D*. This IV is generated by the experimenter.

In many applications, randomization is infeasible. Then how can we draw
causal inference in the presence of unmeasured confounding between the treat-
ment *D* and outcome *Y*? A clever idea from econometrics is to find *natural
experiments* to mimic the setting of encouragement designs. To identify the
causal effect of *D* on *Y* with unmeasured confounding, we can find another
variable *Z* that satisfies the assumptions of the diagram in Figure 23.1. The
variable *Z* must satisfy the following conditions:

1. it should be close to being randomized so that it is independent of the unmeasured confounding *U*;
2. it should change the distribution of *D*;
3. it should affect the outcome *Y* only indirectly through *D* but not directly.

If all these conditions hold, then *Z* is a valid IV for estimating the effect of *D* on *Y*.

This chapter will provide the traditional econometrics perspective on IV.
It is based on linear regression. Imbens and Angrist (1994) and Angrist et al.
(1996) made a fundamental contribution by clarifying the connection betweenthis perspective and the experimental perspective in Chapters 21 and 22. I
will start with examples and then give more algebraic details.

**23.1 Examples of studies with IVs**

Finding IV for causal inference is more an art than a science. The algebraic details in later sections are not the most complicated ones in statistics. However, it is fundamentally challenging to find IVs in empirical research. Below are some famous examples.

**Example 23.1** In an encouragement design, Z is the randomly assigned treatment, D is the final treatment received, and Y is the outcome. The IV assumptions encoded by Figure 23.1 are plausible in double-blind RCTs as discussed in Chapter 21. This is the ideal case for IV.

**Example 23.2** Hearst et al. (1986) reported that men with low lottery numbers in the Vietnam Era draft lottery had higher mortality rates afterward. They attributed this to the negative effect of military service. Angrist (1990) further reported that men with low lottery numbers in the Vietnam Era draft lottery had lower subsequent earnings. He attributed this to the negative effect of military service. These explanations are plausible because the lottery numbers were randomly generated, men with low lottery numbers were more likely to have military service, and the lottery numbers were unlikely to affect the subsequent mortality or earnings. That is, Figure 23.1 is plausible. Angrist et al. (1996) reanalyzed the data using the IV framework. Here, the lottery number is the IV, military service is the treatment, and mortality or earnings is the outcome.

**Example 23.3** Angrist and Krueger (1991) studied the return of schooling in years on earnings, using the quarter of birth as an IV. This IV is plausible because of the pseudo-randomization of the quarter of birth. It affected the years of schooling because (1) most states in the U.S. required the students to enter school in the calendar year in which they turned six, and (2) compulsory schooling laws typically required students to remain in school before their sixteenth birthday. More importantly, it is plausible that the quarter of birth did not affect earnings directly.

**Example 23.4** Angrist and Evans (1998) studied the effect of family size on mothers' employment and work, using the sibling sex composition as an IV. This IV is plausible because of the pseudo-randomization of the sibling sex composition. Moreover, parents in the U.S. with two children of the same sex are more likely to have a third child than those parents with two children of different sex. It is also plausible that the sibling sex composition does not affect the mother's employment and work directly.**Example 23.5** Card (1993) studied the effect of schooling on wages, using the geographic variation in college proximity as an IV. In particular, Z contains dummy variables for whether a subject grew up near a two-year college or a four-year college. Although this study is classic, it might be a poor example for IV because parents' choices of where to live might not be random, and moreover, where a subject grew up might matter for the subsequent wage.

**Example 23.6** Voight et al. (2012) studied the causal effect of plasma high-density lipoprotein (HDL) cholesterol on the risk of heart attack based on Mendelian randomization. They used some single-nucleotide polymorphisms (SNPs) as genetic IV for HDL, which are random with respect to the unmeasured confounders between HDL and heart attack by Mendel's second law, and affect heart attack only through HDL. I will give more details of Mendelian randomization in Chapter 25.

## 23.2 Brief Review of the Ordinary Least Squares

Before discussing the econometric view of IV, I will first review the OLS (see Chapter B). This is a standard topic in statistics. However, it has different mathematical formulations, and the choice of formulation matters for the interpretation.

The first view is based on projection. Given a random variable $Y$ and a random variable or vector $D$ with finite second moments, define the population OLS coefficient as

$$
\begin{aligned}
\beta &= \arg \min_b E(Y - D^\top b)^2 \\
&= E(DD^\top)^{-1} E(DY),
\end{aligned}
$$

and then define the population residual as $\varepsilon = Y - D^\top \beta$. By definition, $Y$ decomposes into

$$
Y = D^\top \beta + \varepsilon, \qquad (23.1)
$$

which must satisfy

$$
E(D\varepsilon) = 0.
$$

Based on $(D_i, Y_i)_{i=1}^n \stackrel{\text{IID}}{\sim} (D, Y)$, the OLS estimator of $\beta$ is the moment estimator

$$
\hat{\beta} = \left( \sum_{i=1}^{n} D_i D_i^\top \right)^{-1} \sum_{i=1}^{n} D_i Y_i.
$$Because

$$
\begin{align*}
\hat{\beta} &= \left( \sum_{i=1}^{n} D_i D_i^{\top} \right)^{-1} \sum_{i=1}^{n} D_i (D_i^{\top} \beta + \varepsilon_i) \\
&= \beta + \left( \sum_{i=1}^{n} D_i D_i^{\top} \right)^{-1} \sum_{i=1}^{n} D_i \varepsilon_i,
\end{align*}
$$

we can show that $\hat{\beta}$ is consistent for $\beta$ by the law of large numbers and the fact $E(\varepsilon D) = 0$. The classic EHW robust variance estimator for $\mathrm{cov}(\hat{\beta})$ is

$$
\hat{V}_{\text{EHW}} = \left( \sum_{i=1}^{n} D_i D_i^{\top} \right)^{-1} \left( \sum_{i=1}^{n} \hat{\varepsilon}_i^2 D_i D_i^{\top} \right) \left( \sum_{i=1}^{n} D_i D_i^{\top} \right)^{-1}
$$

where $\hat{\varepsilon}_i = Y_i - D_i^\top \hat{\beta}$ is the residual.

The second view is to treat

$$
Y = D^{\top}\beta + \varepsilon, \tag{23.2}
$$

as a true model for the data-generating process. That is, given the random
variables (D, ε), we generate Y based on the linear equation (23.2). Im-
portantly, in the data-generating process, ε and D may be correlated with
E(Dε) ≠ 0. Figure 23.2 gives such an example. This is the fundamental dif-
ference compared with the first view where E(εD) = 0 holds by the definition
of the population OLS. Consequently, the OLS estimator can be inconsistent:

$$
\hat{\beta} \rightarrow \beta + E(DD^{\top})^{-1}E(D\varepsilon) \neq \beta
$$

in probability, as the sample size *n* approaches infinity.

I end this section with definitions of *endogenous* and *exogenous* regressors
based on (23.2), although their definitions are not unique in econometrics.

**Definition 23.1** When $E(\varepsilon D) \neq 0$, the regressor *D* is called *endogenous*; when $E(\varepsilon D) = 0$, the regressor *D* is called *exogenous*.

The terminology in Definition 23.1 is standard in econometrics. When $E(\varepsilon D) \neq 0$, we also say that we have *endogeneity*; when $E(\varepsilon D) = 0$, we also say that we have *exogeneity*.

In the first view of OLS, the notions of endogeneity and exogeneity do
not play any roles because $E(\varepsilon D) = 0$ by definition. Statisticians holding the
first view usually find the notions of endogeneity and exogeneity strange, and
consequently, find the idea of IV unnatural. To understand the econometric
view of IV, we must switch to the second view of OLS.![[_resources/Ding - 2023 - A First Course in Causal Inference_Part8/071620d27426a2cec510ba4cd1787a18_MD5.jpg]]

FIGURE 23.2: Different representations of the endogenous regressor *D*. In the upper panel, *U* represents unmeasured common causes of *D* and *ε*.

## 23.3 Linear Instrumental Variable Model

When *D* is endogenous, the OLS estimator is inconsistent. We must use additional information to construct a consistent estimator for *β*. I will focus on the following linear IV model:

**Definition 23.2 (linear IV model) We have**

$$
Y = D^{\top}\beta + \varepsilon,
$$

with

$$
E(\varepsilon Z) = 0. \tag{23.3}
$$

The linear IV model in Definition 23.2 can be illustrated by the following causal graph:

![[_resources/Ding - 2023 - A First Course in Causal Inference_Part8/7704ce6b01e3f87a59080dc1dcfe1497_MD5.jpg]]

The above linear IV model allows that $E(\varepsilon D) \neq 0$ but requires an alternative moment condition (23.3). With $E(\varepsilon) = 0$ by incorporating the intercept, the new condition states that $Z$ is uncorrelated with the error term $\varepsilon$. But any randomly generated noise is uncorrelated with $\varepsilon$, so an additional condition must hold to ensure that $Z$ is useful for estimating $\beta$. Intuitively, the additional condition requires that $Z$ is correlated to $D$, with more technical details stated below.The mathematical requirement (23.3) seems simple. However, it is a
key challenge in empirical research to find such a variable Z that satisfies
(23.3). Since the condition (23.3) involves the unobservable ε, it is generally
untestable.

**23.4 The Just-Identified Case**

We first consider the case in which Z and D have the same dimension and
$E(ZD^T)$ has full rank. The condition $E(\varepsilon Z) = 0$ implies that

$$
E\{Z(Y - D^T \beta)\} = 0.
$$

Solve the linear equations to obtain

$$
E(ZY) = E(ZD^{\top})\beta \implies \beta = E(ZD^{\top})^{-1}E(ZY)
$$

if $E(ZD^T)$ is not degenerate. The OLS is a special case if $E(\varepsilon D) = 0$, i.e., $D$
acts as an IV for itself. The resulting moment estimator is

$$
\hat{\beta}_{\text{IV}} = \left( \sum_{i=1}^{n} Z_i D_i^{\top} \right)^{-1} \sum_{i=1}^{n} Z_i Y_i. \quad (23.4)
$$

It can be insightful to work out the details for the case with a scalar *D*
and *Z*. See Example 23.7 below.

**Example 23.7** In the simple case with an intercept and scalar *D* and *Z*, we
*have the model*

$$
\begin{cases}
Y = \alpha + \beta D + \varepsilon, \\
E(\varepsilon) = 0, \quad \operatorname{cov}(\varepsilon, Z) = 0,
\end{cases}
$$

Under this model, we have

$$
\operatorname{cov}(Z, Y) = \beta \operatorname{cov}(Z, D)
$$

which implies

$$
\beta = \frac{\operatorname{cov}(Z, Y)}{\operatorname{cov}(Z, D)}.
$$

Standardize the numerator and denominator by var(Z) to obtain

$$
\beta = \frac{\text{cov}(Z, Y)/\text{var}(Z)}{\text{cov}(Z, D)/\text{var}(Z)},
$$

which equals the ratio between the coefficients of Z in the OLS fits of Y and Don Z. If Z is binary, these coefficients are differences in means (see Problem B.2), and $\beta$ reduces to

$$
\beta = \frac{E(Y | Z = 1) - E(Y | Z = 0)}{E(D | Z = 1) - E(D | Z = 0)}.
$$

This is identical to the identification formula in Theorem 21.1. That is, with a binary IV Z and a binary treatment D, the IV estimator recovers the CACE under the potential outcomes framework. This is a key result in Imbens and Angrist (1994) and Angrist et al. (1996).

## 23.5 The Over-Identified Case

The discussion in Section 23.4 focuses on the *just-identified* case. When Z has a lower dimension than D and $E(ZD^T)$ does not have full column rank, the equation $E(ZY) = E(ZD^T)\beta$ has infinitely many solutions. This is the *under-identified* case in which the coefficient $\beta$ cannot be uniquely determined even with Z. It is a challenging case beyond the scope of this book. To ensure identifiability, we need at least as many IVs as the endogenous regressors.

When Z has a higher dimension than D and $E(ZD^T)$ has full column rank, we have many ways to determine $\beta$ from $E(ZY) = E(ZD^T)\beta$. What is more, the sample analog

$$
n^{-1} \sum_{i=1}^{n} Z_i Y_i = n^{-1} \sum_{i=1}^{n} Z_i D_i^T \beta
$$

may not have any solution because the number of equations is larger than the number of unknown parameters.

A computational trick for the over-identified case is the *two-stage least squares* (TSLS) estimator (Theil, 1953; Basmann, 1957). It is a clever computational trick, which has two steps.

**Definition 23.3 (Two-stage least squares)** *Define the TSLS estimator of the coefficient of D with Z being the IV as follows.*

1. Run OLS of D on Z, and obtain the fitted value $\hat{D}_i$ ($i = 1, \dots, n$). If $D_i$ is a vector, then we need to run component-wise OLS to obtain $\hat{D}_i$. Put the fitted vectors in a matrix $\hat{D}$ with rows $\hat{D}_i^T$;

2. Run OLS of Y on $\hat{D}$, and obtain the coefficient $\hat{\beta}_{\text{TSLS}}$.To see why TSLS works, we need more algebra. Write it more explicitly as

$$
\begin{align*}
\hat{\beta}_{\text{TSLS}} &= \left( \sum_{i=1}^{n} \hat{D}_i \hat{D}_i^{\top} \right)^{-1} \sum_{i=1}^{n} \hat{D}_i Y_i \tag{23.5} \\
&= \left( \sum_{i=1}^{n} \hat{D}_i \hat{D}_i^{\top} \right)^{-1} \sum_{i=1}^{n} \hat{D}_i (D_i^{\top} \beta + \varepsilon_i) \\
&= \left( \sum_{i=1}^{n} \hat{D}_i \hat{D}_i^{\top} \right)^{-1} \sum_{i=1}^{n} \hat{D}_i D_i^{\top} \beta + \left( \sum_{i=1}^{n} \hat{D}_i \hat{D}_i^{\top} \right)^{-1} \sum_{i=1}^{n} \hat{D}_i \varepsilon_i.
\end{align*}
$$

The first stage OLS fit ensures $D_i = \hat{D}_i + \check{D}_i$ with orthogonal fitted values and residuals, that is,

$$
\sum_{i=1}^{n} \hat{D}_{i} \check{D}_{i}^{\top}=0
\qquad(23.6)
$$

is a zero square matrix with the same dimension as $D_i$. The orthogonality
(23.6) implies

$$
\sum_{i=1}^{n} \hat{D}_{i} D_{i}^{\top} = \sum_{i=1}^{n} \hat{D}_{i} \hat{D}_{i}^{\top},
$$

which further implies that

$$
\hat{\beta}_{\text{TSLS}} = \beta + \left( \sum_{i=1}^{n} \hat{D}_i \hat{D}_i^{\top} \right)^{-1} \sum_{i=1}^{n} \hat{D}_i \varepsilon_i. \quad (23.7)
$$

The first stage OLS fit also ensures

$$
\hat{D}_i = \hat{\Gamma}^\top Z_i \tag{23.8}
$$

which implies that

$$
\hat{\beta}_{\text{TSLS}} = \beta + \left\{ \hat{\Gamma}^{\top} \left( n^{-1} \sum_{i=1}^{n} Z_i Z_i^{\top} \right) \hat{\Gamma} \right\}^{-1} \hat{\Gamma}^{\top} \left( n^{-1} \sum_{i=1}^{n} Z_i \varepsilon_i \right). \quad (23.9)
$$

Based on (23.9), we can see the consistency of the TSLS estimator by the law
of large numbers and the fact that the term $n^{-1} \sum_{i=1}^n Z_i \varepsilon_i$ has probability
limit $E(Z\varepsilon) = 0$. We can also use (23.9) to show that when $Z$ and $D$ have the
same dimension, $\hat{\beta}_{\text{TSLS}}$ is numerically identical to $\hat{\beta}_{\text{IV}}$ defined in Section 23.4,
which is left as Problem 23.1.

Based on (23.7), we can obtain the standard error as follows. We first
obtain the residual $\hat{\varepsilon}_i = Y_i - \hat{\beta}_{\text{TSLS}}^{\top} D_i$, and then obtain the robust variance
estimator as

$$
\hat{V}_{\text{TSLS}} = \left( \sum_{i=1}^{n} \hat{D}_i \hat{D}_i^{\top} \right)^{-1} \left( \sum_{i=1}^{n} \hat{\varepsilon}_i^2 \hat{D}_i \hat{D}_i^{\top} \right) \left( \sum_{i=1}^{n} \hat{D}_i \hat{D}_i^{\top} \right)^{-1} .
$$Importantly, the $\hat{\varepsilon}_i$'s are not the residual from the second stage OLS $Y_i - \hat{\beta}_{\text{TSLS}}^{\top} \hat{D}_i$, so $\hat{V}_{\text{TSLS}}$ differs from the robust variance estimator from the second stage OLS.

## 23.6 A Special Case: A Single IV for a Single Endogenous Treatment

This section focuses on a simple case with a single IV and a single endogenous treatment. It has wide applications. Consider the following *structural equations*:

$$
egin{cases} Y_i = \beta_0 + \beta_1 D_i + \beta_2^\top X_i + \varepsilon_i, \\ D_i = \gamma_0 + \gamma_1 Z_i + \gamma_2^\top X_i + \varepsilon_{2i}, \end{cases} \qquad (23.10)
$$

where $D_i$ is a scalar endogenous regressor representing the treatment variable of interest (i.e., $E(\varepsilon_i D_i) \neq 0$), $Z_i$ is a scalar IV for $D_i$ (i.e., $E(\varepsilon_i Z_i) = 0$), and $X_i$ contains other exogenous regressors (i.e., $E(\varepsilon_i X_i) = 0$). This is a special case with $D$ replaced by $(1, D, X)$ and $Z$ replaced by $(1, Z, X)$.

### 23.6.1 Two-stage least squares

The TSLS estimator in Definition 23.3 simplifies to the following form.

**Definition 23.4 (TSLS with a single endogenous regressor)** *Based on (23.10), the TSLS estimator has the following two steps.*

1. Run OLS of $D$ on $(1, Z, X)$, obtain the fitted values $\hat{D}_i$ ($i = 1, \dots, n$), and vectorize them as $\hat{D}$;

2. Run OLS of $Y$ on $(1, \hat{D}, X)$, and obtain the coefficient $\hat{\beta}_{\text{TSLS}}$, and in particular, $\hat{\beta}_{1,\text{TSLS}}$, the coefficient of $\hat{D}$.

### 23.6.2 Indirect least squares

The structural equation (23.10) implies

$$
egin{aligned} Y_i &= \beta_0 + \beta_1(\gamma_0 + \gamma_1Z_i + \gamma_2^\top X_i + \varepsilon_{2i}) + \beta_2^\top X_i + \varepsilon_i \\ &= (\beta_0 + \beta_1\gamma_0) + \beta_1\gamma_1Z_i + (\beta_2 + \beta_1\gamma_2)^\top X_i + (\varepsilon_i + \beta_1\varepsilon_{2i}). \end{aligned}
$$

Define $\Gamma_0 = \beta_0 + \beta_1\gamma_0$, $\Gamma_1 = \beta_1\gamma_1$, $\Gamma_2 = \beta_2 + \beta_1\gamma_2$, and $\varepsilon_{1i} = \varepsilon_i + \beta_1\varepsilon_{2i}$. We have the following equations

$$
egin{cases} Y_i = \Gamma_0 + \Gamma_1 Z_i + \Gamma_2^\top X_i + \varepsilon_{1i}, \\ D_i = \gamma_0 + \gamma_1 Z_i + \gamma_2^\top X_i + \varepsilon_{2i}, \end{cases} \qquad (23.11)
$$which is called the reduced form, in contrast to the structural form in (23.10).
The parameter of interest equals the ratio of two coefficients

$$
\beta_1 = \Gamma_1 / \gamma_1.
$$

In the reduced form, the left-hand side are dependent variables *Y* and *D*, and
the right-hand side are the exogenous variable *Z* and *X* satisfying

$$
E(Z\varepsilon_{1i}) = E(Z\varepsilon_{2i}) = 0, \quad E(X\varepsilon_{1i}) = E(X\varepsilon_{2i}) = 0.
$$

More importantly, OLS gives consistent estimators for the coefficients in the reduced form (23.11).

The reduced form (23.11) suggests that the ratio of two OLS coefficients
$\hat{\Gamma}_1$ and $\hat{\gamma}_1$ is a reasonable estimator for $\beta_1$. This is called the *indirect least squares* (ILS) estimator:

$$
\hat{\beta}_{1,\text{ILS}} = \hat{\Gamma}_1 / \hat{\gamma}_1.
$$

Interestingly, it is numerically identical to the TSLS estimator under (23.10).

**Theorem 23.1** *With a single endogenous treatment and a single IV in (23.10), we have*

$$
\hat{\beta}_{1,\text{ILS}} = \hat{\beta}_{1,\text{TSLS}}.
$$

Theorem 23.1 is an algebraic fact. Imbens (2014, Section A.3) pointed it
out without giving a proof. I relegate its proof to Problem 23.2. The ratio for-
mula makes it clear that the TSLS estimator has poor finite sample properties
with a weak instrument variable, i.e., $\gamma_1$ is close to zero.

**23.6.3 Weak IV**

The following inferential procedure is simpler, more transparent, and more
robust to weak IV. It is more computationally intensive though. The reduced
form (23.11) also implies that

$$
Y_i - bD_i = (\Gamma_0 - b\gamma_0) + (\Gamma_1 - b\gamma_1)Z_i + (\Gamma_2 - b\gamma_2)^{\top}X_i + (\varepsilon_{1i} - b\varepsilon_{2i}) \quad (23.12)
$$

for any *b*. At the true value *b* = *β*₁, the coefficient of *Z*ᵢ must be 0. This simple fact suggests a confidence interval for *β*₁ by inverting tests for *H*₀(*b*) : *β*₁ = *b*:

$$
\{b : |t_Z(b)| \le z_{1-\alpha/2}\},
$$

where $t_Z(b)$ is the *t*-statistic for the coefficient of *Z* based on the OLS fit
of (23.12) with the EHW standard error, and $z_{1-\alpha/2}$ is the $1 - \alpha/2$ upper
quantile of the standard Normal random variable. This confidence interval
is more robust than the Wald-type confidence interval based on the TSLS
estimator. It is similar to the FAR confidence set discussed in Chapter 21.
This procedure makes the TSLS estimator unnecessary. What is more, we
only need to run the OLS fit of *Y* based on the reduced form if the goal is to
test $\beta_1 = 0$ under (23.10).```R
+   Tstat = coefZ/seZ
+   (1 - pnorm(abs(Tstat))) * 2
+ })
```

Figure 23.3 shows the *p*-values for a sequence of tests for the coefficient of *D* based on following R code:

```R
> plot(PvalueAR ~ BetaAR, type = "l",
+       xlab = "coefficient of D",
+       ylab = "p-value",
+       main = "Fieller-Anderson-Rubin interval based on Card's data")
> point.est = BetaAR[which.max(PvalueAR)]
> abline(h = 0.05, lty = 2, col = "grey")
> abline(v = point.est, lty = 2, col = "grey")
> ARCI = range(BetaAR[PvalueAR >= 0.05])
> abline(v = ARCI[1], lty = 2, col = "grey")
> abline(v = ARCI[2], lty = 2, col = "grey")
```

We report the point estimate as the value of *b* with the largest *p*-value as well as the confidence interval as the region of *b* with *p*-values larger than 0.05.

```R
> FARres = c(point.est, ARCI)
> names(FARres) = c("FAR est", "lower CI", "upper CI")
> round(FARres, 3)
FAR est lower CI upper CI
0.132 0.028 0.282
```

Comparing the TSLS and FAR methods, the lower confidence limits are very close but the upper confidence limits are slightly different due to the possibly heavy right tail of the distribution of the TSLS estimator. Overall, the TSLS and FAR methods give similar results in this example because the IV is not weak.

## 23.8 Homework

### 23.1 More algebra for TSLS in Section 23.5

1. Show that the $\hat{\Gamma}$ in (23.8) equals

$$
\hat{\Gamma} = \left( \sum_{i=1}^{n} Z_i Z_i^T \right)^{-1} \sum_{i=1}^{n} Z_i D_i^T.
$$

2. Show $\hat{\beta}_{\text{TSLS}}$ defined in (23.5) reduces to $\hat{\beta}_{\text{IV}}$ defined in (23.4) if $Z$ and $D$ have the same dimension and

$$
n^{-1} \sum_{i=1}^{n} Z_i Z_i^T, \quad n^{-1} \sum_{i=1}^{n} Z_i D_i^T
$$![[_resources/Ding - 2023 - A First Course in Causal Inference_Part8/8be9f55682e40750fa8f279b6a521db5_MD5.jpg]]

FIGURE 23.3: Re-analysis of Card (1993)'s data by inverting tests

are both invertible.

23.2 *Equivalence between TSLS and ILS*

Prove Theorem 23.1.

Remark: Use the FWL theorem in Chapter B.

23.3 *Control function in the linear instrumental variable model*

Definition 23.5 below parallels Definition 23.3 above.

**Definition 23.5 (control function)** *Define the control function estimator* $\hat{\beta}_{\text{CF}}$ *as follows.*

1. Run OLS of $D$ on $Z$, and obtain the residuals $\tilde{D}_i$ ($i = 1, \dots, n$). If $D_i$ is a vector, then we need to run component-wise OLS to obtain $\tilde{D}_i$. Put the residual vectors in a matrix $\tilde{D}$ with rows $\tilde{D}_i^T$;

2. Run OLS of $Y$ on $D$ and $\tilde{D}$, and obtain the coefficient of $D$, $\hat{\beta}_{\text{CF}}$.

Show that $\hat{\beta}_{\text{CF}} = \hat{\beta}_{\text{TSLS}}$.

Remark: To prove the result, you can use the results in Problems B.4 and B.5. In Definition 23.5, $\tilde{D}$ from Step 1 is called the control function for Step 2. Hausman (1978) pointed out this result. Wooldridge (2015) provided a more general discussion of the control function methods in more complex models.23.4 Data analysis: Efron and Feldman (1991)

Efron and Feldman (1991) was one of the early studies dealing with noncom-
pliance under the potential outcomes framework. The original randomized
experiment, the Lipid Research Clinics Coronary Primary Prevention Trial
(LRC-CPPT), was designed to evaluate the effect of the drug cholestyramine
on cholesterol levels. In the dataset EF.csv, the first column contains the bi-
nary indicators for treatment and control, the second column contains the
proportions of the nominal cholestyramine dose actually taken, and the last
three columns are cholesterol levels. Note that the individuals did not know
whether they were assigned to cholestyramine or to the placebo, but differ-
ences in adverse side effects could induce differences in compliance behavior
by treatment status. All individuals were assigned the same nominal dose of
the drug or placebo, for the same time period. Column 3, C3, was taken before
communication about the benefits of a low-cholesterol diet, Column 4, C4, was
taken after this suggestion, but before the random assignment to cholestyra-
mine or placebo, and Column 5, C5, an average of post-randomization choles-
terol readings, averaged over two-month readings for a period of time averag-
ing 7.3 years for all the individuals in the study. Efron and Feldman (1991)
used the change in cholesterol level as the final outcome of interest, defined as
C5 − 0.25C3 − 0.75C4. Their original paper contains more detailed descriptions.

The data structure here is more complicated than the noncompliance prob-
lem discussed in Chapters 21 and 22. Jin and Rubin (2008) re-analyzed the
data based on the idea in Chapter 26 later. You can analyze the data based
on your understanding of the problem, but you need to justify your choice of
the method. There is no gold-standard solution for this problem.

23.5 *Recommended reading*

Imbens (2014) gave an econometrician’s perspective of IV.24

Application of the Instrumental Variable
Method: Fuzzy Regression Discontinuity

The regression discontinuity method introduced in Chapter 20 and the IV method introduced in Chapters 21–23 are two important examples of *natural experiments*. The study designs are not as ideal as randomized experiments in Part II, but they have features similar to randomized experiments. That’s why they are called natural experiments.

Compounding the regression discontinuity method with the IV method
yields the *fuzzy regression discontinuity* method, another important natural
experiment. I will start with examples and then provide a mathematical for-
mulation.

**24.1 Motivating examples**

Chapter 20 introduces the regression discontinuity method. The following three examples are slightly different because the treatments received are not deterministic functions of the running variables. Rather, the running variables discontinuously change the probabilities of the treatments received at the cutoff points.

**Example 24.1** In 2000, the Government of India launched the Prime Minister's Village Road Program, and by 2015, this program had funded the construction of all-weather roads to nearly 200,000 villages. Based on village-level data, Asher and Novosad (2020) use the regression discontinuity method to estimate the effect of new feeder roads on various economic variables. The national program guidelines prioritized larger villages according to arbitrary thresholds based on the 2001 Population Census. The treatment variable equals 1 if the village received a new road before the year in which the outcomes were measured. The difference between the population size of a village and the threshold did not determine the treatment variable but affected its probability discontinuously at the cutoff point 0.

**Example 24.2** Li et al. (2015) used the data on the first-year students enrolled in 2004 to 2006 from two Italian universities to evaluate the causal effect33024 Application of the Instrumental Variable Method: Fuzzy Regression Discontinuity

of a university grant on the dropout rate. The students were eligible for this
grant if their standardized family income was below 15,000 euros. For sim-
plicity, we use the running variable defined as 15,000 minus the standardized
family income. To receive this grant, the students must apply first. Therefore,
the eligibility and the application status jointly determined the final treatment
status. The running variable alone did not determine the treatment status al-
though it changed the treatment probability at the cutoff point 0.

**Example 24.3** Amarante et al. (2016) estimated the impact of in-utero expo-
sure to a social assistance program on children’s birth outcomes. They used a
regression discontinuity induced by the Uruguayan Plan de Atención Nacional
a la Emergencia Social. It was a temporary social assistance program targeted
to the poorest 10 percent of households, implemented between April 2005 and
December 2007. Households with a predicted low-income score below a prede-
termined threshold were assigned to the program. The predicted income score
did not determine whether the mother received at least one program trans-
fer during the pregnancy but it changed the probability of the final treatment
received. The birth outcomes included birth weight, weeks of gestation, etc.

The above examples are called fuzzy regression discontinuity in contrast
to the (sharp) regression discontinuity in Chapter 20. I will analyze the data
in Examples 24.1 and 24.2 in Chapter 24.3 below.

**24.2 Mathematical formulation**

Let $X_i$ denote the running variable which determines

$$
Z_i = I(X_i \geq x_0)
$$

with the cutoff point $x_0$. The treatment received $D_i$ may not equal $Z_i$, but
$\Pr(D_i = 1 | X_i = x)$ has a jump at $x_0$. Figure 24.1 compares the treatment
received probabilities of the sharp regression discontinuity and fuzzy regression
discontinuity. It shows a special case of fuzzy regression discontinuity with
$\Pr(D = 1 | X < x_0) = 0$, which is coherent to Example 24.2.

Let $Y_i$ denote the outcome of interest. Viewing $Z_i$ as the treatment assigned, we can define potential outcomes $\{D_i(1), D_i(0), Y_i(1), Y_i(0)\}$. The sharp regression discontinuity of $Z$ allows for the identification of

$$
\begin{align*}
\tau_D(x_0) &= E\{D(1) - D(0) \mid X = x_0\} \\
&= \lim_{\epsilon \to 0+} E(D \mid Z = 1, X = x_0 + \epsilon) - \lim_{\epsilon \to 0+} E(D \mid Z = 0, X = x_0 - \epsilon)
\end{align*}
$$

and

$$
\begin{align*}
\tau_Y(x_0) &= E\{Y(1) - Y(0) \mid X = x_0\} \\
&= \lim_{\epsilon \to 0+} E(Y \mid Z = 1, X = x_0 + \epsilon) - \lim_{\epsilon \to 0+} E(Y \mid Z = 0, X = x_0 - \epsilon)
\end{align*}
$$![[_resources/Ding - 2023 - A First Course in Causal Inference_Part8/bb1024374bbcb13cdc711b2e17ac0559_MD5.jpg]]

FIGURE 24.1: The treatment assignments of sharp regression discontinuity (left) and fuzzy regression discontinuity (right)

based on Theorem 20.2. Using $Z$ as an IV for $D$ and imposing the IV assumptions at $X = x_0$, we can identify the local complier average causal effect by applying Theorem 21.1.

**Theorem 24.1** Assume that the treatment is determined by $Z = I(X \ge x_0)$ where $x_0$ is a predetermined threshold. Assume monotonicity

$$
D_i(1) \ge D_i(0)
$$

and exclusion restriction

$$
D_i(1) = D_i(0) \implies Y_i(1) = Y_i(0)
$$

in the infinitesimal neighborhood of $x_0$. The local complier average causal effect, defined as

$$
\tau_c(x_0) = E\{Y(1) - Y(0) \mid D(1) > D(0), X = x_0\},
$$

can be identified by

$$
\tau_c(x_0) = \frac{E\{Y(1) - Y(0) \mid X = x_0\}}{E\{D(1) - D(0) \mid X = x_0\}}.
$$

Further assume that $E\{D(1) | X = x\}$ and $E\{Y(1) | X = x\}$ are continuous from the right at $x = x_0$, and $E\{D(0) | X = x\}$ and $E\{Y(0) | X = x\}$ are continuous from the left at $x = x_0$. The local complier average causal effect can be identified by

$$
\tau_c(x_0) = \frac{\lim_{\epsilon \to 0^+} E(Y | Z = 1, X = x_0 + \epsilon) - \lim_{\epsilon \to 0^+} E(Y | Z = 0, X = x_0 - \epsilon)}{\lim_{\epsilon \to 0^+} E(D | Z = 1, X = x_0 + \epsilon) - \lim_{\epsilon \to 0^+} E(D | Z = 0, X = x_0 - \epsilon)}
$$

if $E(D | X = x)$ has a non-zero jump at $x = x_0$.

Theorem 24.1 is a superposition of Theorems 20.2 and 21.1. I leave its proof as Problem 24.1.In both sharp and fuzzy regression discontinuity, the key is to specify the neighborhood around the cutoff point. Practically, a smaller neighborhood leads to a smaller bias but a larger variance, while a larger neighborhood leads to a larger bias but a smaller variance. That is, we face a bias-variance trade-off. Some automatic procedures exist based on some statistical criteria, which rely on some strong conditions. It seems wiser to conduct sensitivity analysis over a range of the choice of the neighborhood.

Assume that we have specified the neighborhood of $x_0$ determined by a bandwidth $h$. For data with $X_i \in [x_0 - h, x_0 + h]$, we can estimate $\tau_D(x_0)$ by

$\hat{\tau}_D(x_0)$ = the coefficient of $Z_i$ in the OLS fit of $D_i$ on $\{1, Z_i, R_i, L_i\}$,

and estimate $\tau_Y(x_0)$

$\hat{\tau}_Y(x_0)$ = the coefficient of $Z_i$ in the OLS fit of $Y_i$ on $\{1, Z_i, R_i, L_i\}$,

recalling the definitions $R_i = \max(X_i - x_0, 0)$ and $L_i = \min(X_i - x_0, 0)$. Then we can estimate the local complier average causal effect by

$$
\hat{\tau}_c(x_0) = \hat{\tau}_Y(x_0) / \hat{\tau}_D(x_0).
$$

This is an indirect least squares estimator. By Theorem 23.1, it is numerically identical to

the coefficient of $D_i$ in the TSLS fit of $Y_i$ on $\{1, D_i, R_i, L_i\}$

with $D_i$ instrumented by $Z_i$. In sum, after specifying $h$, the estimation of $\tau_c(x_0)$ reduces to a TSLS procedure with the local data around the cutoff point.

## 24.3 Application

### 24.3.1 Re-analyzing Asher and Novosad (2020)'s data

Revisit Example 24.1. We can compute the point estimates and standard errors for a sequence of $h$ based on the outcome `occupation_index_andrsn`.

```r
library("car")
road_dat = read.csv("indianroad.csv")
table(road_dat$t, road_dat$r2012)
road_dat$runv = road_dat$left + road_dat$right
## sensitivity analysis
seq.h = seq(10, 80, 1)
frd_sa = lapply(seq.h, function(h){
  road_sub = subset(road_dat, abs(runv)<=h)
  road_sub$r2012hat = lm(r2012 ~ t + left + right,
```![[_resources/Ding - 2023 - A First Course in Causal Inference_Part8/21cc2faee066c472354a8edd6a389048_MD5.jpg]]

FIGURE 24.2: Re-analyzing Asher and Novosad (2020)'s data, with point estimates and standard errors from TSLS.![[_resources/Ding - 2023 - A First Course in Causal Inference_Part8/ede9b46e6ac3ec2eec8b5d68353dd26d_MD5.jpg]]

FIGURE 24.3: Re-analyzing Li et al. (2015)'s data, with point estimates and standard errors from TSLS.identifies the local effects precisely at the cutoff point of the running variable. Hahn et al. (2001) started this line of literature.

An alternative, not so dominant perspective is based on *local randomization* (Cattaneo et al., 2015; Li et al., 2015). If we view the running variable as a noisy measure of some underlying truth and the cutoff point is somewhat arbitrarily chosen, the units near the cutoff point do not differ systematically. This suggests that in a small neighborhood of the cutoff point, the units receive the treatment and the control in a random fashion just as in a randomized experiment. Similar to the issue of choosing *h* in the first perspective, it is crucial to decide how local should the randomized experiment be under the regression discontinuity. It is not easy to quantify the intuition mathematically, and again conducting sensitivity analysis with a range of *h* seems a reasonable approach in the second perspective as well.

See Sekhon and Titiunik (2017) for a more conceptual discussion of regression discontinuity.

## 24.5 Homework Problems

### 24.1 *Proof of Theorem 24.1*

Prove Theorem 24.1.

### 24.2 *Data analysis*

Section 24.3.1 reports the estimate of the effect on *occupation_index_andrsn*. Four other outcome variables are *transport_index_andrsn*, *firms_index_andrsn*, *consumption_index_andrsn*, and *agriculture_index_andrsn*, with meanings defined in the original paper. Estimate the effects on these outcomes.

### 24.3 *Reflection on the analysis of Li et al. (2015)'s data*

In Li et al. (2015), a key variable determining the treatment status is the binary application status *A*, which has potential outcomes *A*(1) and *A*(0) corresponding to the treatment *Z* = 1 and control *Z* = 0. By definition,

$$
D(1) = A(1), \quad D(0) = 0,
$$

so the compliers {$D(1), D(0)$} = (1, 0) is equivalent to $A(1) = 1$. So

$$
\tau_c(x_0) = E\{Y(1) - Y(0) \mid A(1) = 1, X = x_0\}.
$$

Section 24.3.2 used the whole data set to estimate $\tau_c(x_0)$.

An alternative analysis is to use the units with *A* = 1 only. Then the treatment status is determined by *X*. However, this analysis can be problematicbecause

$$
\begin{align}
& \lim_{\epsilon \to 0^+} \mathbb{E}\{Y \mid A = 1, X = x_0 + \epsilon\} - \lim_{\epsilon \to 0^+} \mathbb{E}\{Y \mid A = 1, X = x_0 - \epsilon\} \nonumber \\
&= \mathbb{E}\{Y(1) \mid A(1) = 1, X = x_0\} - \mathbb{E}\{Y(0) \mid A(0) = 1, X = x_0\}. \tag{24.1}
\end{align}
$$

Prove (24.1) and explain why this analysis can be problematic.

Remark: The left-hand side of (24.1) is the identification formula of the local average treatment effect at $X = x_0$, conditional on $A = 1$. The right-hand side of (24.1) is the difference in means of the potential outcomes for the subgroups of units with ($A(1) = 1, X = x_0$) and ($A(0) = 1, X = x_0$), respectively. See Chapter 26 later for related discussions.

24.4 *Recommended reading*

Imbens and Lemieux (2008) gave practical guidance to regression discontinuity based on the potential outcomes framework. Lee and Lemieux (2010) reviewed regression discontinuity and its applications in economics.25

Application of the Instrumental Variable
Method: Mendelian Randomization

Katan (1986) was concerned with the observational studies suggesting that low serum cholesterol levels were associated with the risk of cancer. As we have discussed, however, observational studies suffer from unmeasured confounding. Consequently, it is difficult to interpret the observed association as causality. In the particular problem studied by Katan (1986), it is even possible that early stages of cancer reversely cause low serum cholesterol levels. Disentangling the causal effect of the serum cholesterol level on cancer seems a hard problem using standard epidemiologic studies. Katan (1986) argued that Apolipoprotein E genes are associated with serum cholesterol levels but do not directly affect the cancer status. So if low serum cholesterol levels cause cancer, we should observe differences in cancer risks among people with and without the genotype that leads to different serum cholesterol levels. Using our language for causal inference, Katan (1986) proposed to use Apolipoprotein E genes as IVs.

Katan (1986) did not conduct any data analysis but just proposed a con-
ceptual design that could address not only *unmeasured confounding* but also
*reverse causality*. Since then, more complicated and sophisticated studies have
been conducted thanks to the modern genome-wide association studies. These
studies used genetic information as IVs for exposures in epidemiologic studies
to estimate the causal effects of exposures on outcomes. They were all moti-
vated by *Mendel's second law*, the law of *random assortment*, which suggests
that the inheritance of one trait is independent of the inheritance of other
traits. Therefore, the method of using genetic information as IV is called
*Mendelian Randomization* (MR).

**25.1 Background and motivation**

Graphically, Figure 25.1 shows the causal diagram on the treatment *D*, outcome *Y*, unmeasured confounder *U*, as well as the genetic IVs *G*₁, ..., *G*ₚ. In many MR studies, the genetic IVs are single nucleotide polymorphisms![[_resources/Ding - 2023 - A First Course in Causal Inference_Part8/35b8a7e87061903aacd44d4a337eddcd_MD5.jpg]]

FIGURE 25.1: Causal graph for MR

(SNPs). Because of pleiotropy,¹ it is possible that the genetic IVs have a direct effect on the outcome of interest, so Figure 25.1 also allows for the violation of the exclusion restriction assumption.

The standard linear IV model assumes away the direct effect of the IVs on the outcome. Definition 25.1 below gives both the structural and reduced forms.

**Definition 25.1 (linear IV model) The standard linear IV model**

$$
Y = \beta_0 + \beta D + \beta_u U + \varepsilon_Y, \quad (25.1)
$$

$$
D = \gamma_0 + \gamma_1 G_1 + \dots + \gamma_p G_p + \gamma_u U + \varepsilon_D, \quad (25.2)
$$

has reduced form

$$
Y = \beta_0 + \beta\gamma_0 + \beta\gamma_1 G_1 + \dots + \beta\gamma_p G_p + (\beta_u + \beta_0\gamma_u)U + \varepsilon_Y, \quad (25.3)
$$

$$
D = \gamma_0 + \gamma_1 G_1 + \dots + \gamma_p G_p + \gamma_u U + \varepsilon_D, \quad (25.4)
$$

Definition 25.2 below allows for the violation of exclusion restriction. Then, $G_1, \dots, G_p$ are not valid IVs.

**Definition 25.2 (linear model with possibly invalid IVs) The linear model**

$$
Y = \beta_0 + \beta D + \alpha_1 G_1 + \dots + \alpha_p G_p + \beta_u U + \varepsilon_Y, \quad (25.5)
$$

$$
D = \gamma_0 + \gamma_1 G_1 + \dots + \gamma_p G_p + \gamma_u U + \varepsilon_D, \quad (25.6)
$$

¹Pleiotropy occurs when one gene influences two or more seemingly unrelated phenotypic traits.has reduced form

$$
\begin{equation}
\begin{aligned}
Y ={}& (\beta_0 + \beta\gamma_0) + (\alpha_1 + \beta\gamma_1)G_1 + \cdots + (\alpha_p + \beta\gamma_p)G_p \\
      & + (\beta_u + \beta\gamma_u)U + \varepsilon_Y,
\end{aligned}
\tag{25.7}
\end{equation}
$$

$$
D = \gamma_0 + \gamma_1 G_1 + \dots + \gamma_p G_p + \gamma_u U + \varepsilon_D. \quad (25.8)
$$

Definitions 25.1 and 25.2 are slightly different from the linear IV model in
Chapter 23. They include the confounder *U* explicitly. But this slight difference
does not change the discussion fundamentally.

In Definition 25.1 with exclusion restriction, we have

$$
\Gamma_j = \beta\gamma_j, \quad (j = 1, \dots, p).
$$

In Definition 25.2 without exclusion restriction, we have

$$
\Gamma_j = \alpha_j + \beta\gamma_j, \quad (j = 1, \dots, p).
$$

If we have individual data, we can apply the classic TSLS estimator to
estimate $\beta$ under the linear IV model in Definition 25.1. However, most MR
studies do not have individual data but rather summary statistics from mul-
tiple genome-wide association studies. A canonical MR study with summary
statistics has the following data structure.

**Assumption 25.1 (MR study with summary statistics) (a) We have**
*the regression coefficients of the treatment on the genetic IVs* $\hat{\gamma}_1, \dots, \hat{\gamma}_p$ *as*
*well as the standard errors* $\text{se}_{D1}, \dots, \text{se}_{Dp}$. *Assume*

$$
\hat{\gamma}_1 \rightarrow \gamma_1, \dots, \hat{\gamma}_p \rightarrow \gamma_p \qquad (25.9)
$$

in probability, and ignore the uncertainty in the standard errors.

(b) We have the regression coefficients of the outcome on the genetic IVs $\hat{\Gamma}_1, \dots, \hat{\Gamma}_p$ as well as with standard errors $\text{se}_{Y1}, \dots, \text{se}_{Yp}$. Assume

$$
\hat{\Gamma}_1 \rightarrow \Gamma_1, \dots, \hat{\Gamma}_p \rightarrow \Gamma_p \quad (25.10)
$$

in probability, and ignore the uncertainty in the standard errors.

(c) Assume $\hat{\gamma}_1, \dots, \hat{\gamma}_p, \hat{\Gamma}_1, \dots, \hat{\Gamma}_p$ are jointly Normal and independent.

The asymptotic Normality of the regression coefficients can be justified
by the CLT. The standard errors are accurate estimates of the true standard
errors in large samples. Therefore, the only subtle assumption is the joint
independence of the regression coefficients. The independence of the $\hat{\gamma}_j$'s and
the $\hat{\Gamma}_j$'s are reasonable because they are often calculated based on different
samples.

The independence among the $\hat{\gamma}_j$'s can be reasonable if the $G_j$'s are in-
dependent and the true linear model for $D$ holds with homoskedastic error
terms. See Chapter B.4. However, this assumption can be tricky if the errorterm of the linear model is heteroskedastic. Without the independence of the $G_j$'s, it is hard to justify the independence. If the regression coefficients are from nonlinear models, then it is even harder to justify the independence. The independence among the $\hat{\Gamma}_j$'s follows from a similar argument.

This chapter focuses on the statistical inference of $\beta$ based on the above summary statistics in Assumption 25.1.

## 25.2 MR based on summary statistics

### 25.2.1 Fixed-effect estimator

Under Definition 25.1, $\alpha_j = 0$ which implies that $\beta = \Gamma_j/\gamma_j$ for all $j$. A simple approach is based on the so-called *meta-analysis* (Bowden et al., 2018), that is, combining multiple estimates $\hat{\beta}_j = \hat{\Gamma}_j/\hat{\gamma}_j$ for the common parameter $\beta$, also called the fixed effect. Using delta method (see Example A.3), the ratio estimator $\hat{\beta}_j$ has approximate squared standard error

$$
\text{se}_j^2 = (\text{se}_{Y_j}^2 + \hat{\beta}_j^2 \text{se}_{D_j}^2)/\hat{\gamma}_j^2.
$$

Therefore, the best linear combination to estimate $\beta$ is the Fisher weighting based on the inverses of the variances (see Problem A.6):

$$
\hat{\beta}_{\text{fisher0}} = \frac{\sum_{j=1}^{p} \hat{\beta}_j / \text{se}_j^2}{\sum_{j=1}^{p} 1 / \text{se}_j^2}
$$

which has variance $(\sum_{j=1}^p 1/\text{se}_j^2)^{-1}$. Ignoring the uncertainty due to $\hat{\gamma}_j$ quantified by $\text{se}_{D_j}$, the estimator reduces to

$$
\hat{\beta}_{\text{fisher1}} = \frac{\sum_{j=1}^{p} \hat{\beta}_j \hat{\gamma}_j^2 / \text{se}_{Y_j}^2}{\sum_{j=1}^{p} \hat{\gamma}_j^2 / \text{se}_{Y_j}^2} = \frac{\sum_{j=1}^{p} \hat{\Gamma}_j \hat{\gamma}_j / \text{se}_{Y_j}^2}{\sum_{j=1}^{p} \hat{\gamma}_j^2 / \text{se}_{Y_j}^2},
$$

which has variance $(\sum_{j=1}^p \hat{\gamma}_j^2 / \text{se}_{Y_j}^2)^{-1}$. Inference based on $\hat{\beta}_{\text{fisher1}}$ is suboptimal although it is more widely used in practice (Bowden et al., 2018). Both $\hat{\beta}_{\text{fisher0}}$ and $\hat{\beta}_{\text{fisher1}}$ are called the *fixed-effect estimators*.

Focus on the suboptimal yet simpler estimator $\hat{\beta}_{\text{fisher1}}$. Under Definition 25.2, we can show that

$$
\hat{\beta}_{\text{fisher1}} \rightarrow \frac{\sum_{j=1}^{p} \Gamma_j \gamma_j / \text{se}_{Y_j}^2}{\sum_{j=1}^{p} \gamma_j^2 / \text{se}_{Y_j}^2} = \beta + \frac{\sum_{j=1}^{p} \alpha_j \gamma_j / \text{se}_{Y_j}^2}{\sum_{j=1}^{p} \gamma_j^2 / \text{se}_{Y_j}^2}
$$

in probability. If $\alpha_j = 0$ for all $j$, $\hat{\beta}_{\text{fisher1}}$ is consistent. Even if this does not hold, it is still possible that $\hat{\beta}_{\text{fisher1}}$ is consistent as long as the inner product between $\alpha_j$ and $\gamma_j$ weighted by $1/\text{se}_{Y_j}^2$ is zero. This holds if we have many genetic instruments and violation of the exclusion restriction, captured by $\alpha_j$, is an independent random draw from a distribution with mean zero.25.2.2 Egger regression

Start with Definition 25.1. With the true parameters, we have

$$
\Gamma_j = \beta\gamma_j \quad (j = 1, \dots, p);
$$

with the estimates, the above identity holds only approximately

$$
\hat{\Gamma}_j \approx \beta \hat{\gamma}_j \quad (j = 1, \dots, p).
$$

This seems a classic least-squares problem of {$\hat{\Gamma}_j$}$_{j=1}^p$ on {$\hat{\gamma}_j$}$_{j=1}^p$. We can fit
a WLS of $\hat{\Gamma}_j$ on $\hat{\gamma}_j$, with or without an intercept, possibly weighted by $w_j$,
to estimate $\beta$. The following results hold thanks to the algebraic properties of
the WLS reviewed in Chapter B.5.

Without an intercept, the coefficient of $\hat{\gamma}_j$ is

$$
\hat{\beta}_{\text{egger1}} = \frac{\sum_{j=1}^{p} \hat{\gamma}_j \hat{\Gamma}_j w_j}{\sum_{j=1}^{p} \hat{\gamma}_j^2 w_j},
$$

which reduces to $\hat{\beta}_{\text{fisher1}}$ if $w_j = 1/\text{se}_{Y_j}^2$. The WLS is called the *Egger regression*. It is more general than the fixed-effect estimators in Section 25.2.1. With an intercept, the coefficient of $\hat{\gamma}_j$ is

$$
\hat{\beta}_{\text{egger0}} = \frac{\sum_{j=1}^{p} (\hat{\gamma}_j - \hat{\gamma}_w)(\hat{\Gamma}_j - \hat{\Gamma}_w)w_j}{\sum_{j=1}^{p} (\hat{\gamma}_j - \hat{\gamma}_w)^2 w_j}
$$

where $\hat{\gamma}_w = \sum_{j=1}^{p} \hat{\gamma}_j w_j / \sum_{j=1}^{p} w_j$ and $\hat{\Gamma}_w = \sum_{j=1}^{p} \hat{\Gamma}_j w_j / \sum_{j=1}^{p} w_j$ are the weighted averages of the $\hat{\gamma}_j$'s and $\hat{\Gamma}_j$'s, respectively.

Even without assuming that all $\gamma_j$'s are zero under Definition 25.2, we
have

$$
\hat{\beta}_{\text{egger0}} \rightarrow \frac{\sum_{j=1}^{p} (\gamma_j - \gamma_w)(\Gamma_j - \Gamma_w)w_j}{\sum_{j=1}^{p} (\gamma_j - \gamma_w)^2 w_j} = \beta + \frac{\sum_{j=1}^{p} (\gamma_j - \gamma_w)(\alpha_j - \alpha_w)w_j}{\sum_{j=1}^{p} (\gamma_j - \gamma_w)^2 w_j}
$$

in probability, where $\gamma_w$, $\Gamma_w$ and $\alpha_w$ are the corresponding weighted averages
of the true parameters. So $\hat{\beta}_{\text{egger0}}$ is consistent for $\beta$ as long as the WLS
coefficient of $\alpha_j$ on $\gamma_j$ is zero. This is weaker than $\alpha_j = 0$ for all $j$. This
weaker assumption holds if $\gamma_j$ and $\alpha_j$ are realizations of independent random
variables, which is called the Instrument Strength Independent of Direct Effect
(InSIDE) assumption (Bowden et al., 2015). More interestingly, the intercept
from the Egger regression is

$$
\hat{\alpha}_{\text{egger0}} = \hat{\Gamma}_w - \hat{\beta}_{\text{egger0}} \hat{\gamma}_w,
$$

which, under the InSIDE assumption, converges to

$$
\Gamma_w - \beta\gamma_w = \alpha_w
$$

in probability. So the intercept estimates the weighted average of the direct
effects.25.3 An example

First, the following function can implement Fisher weighting.

fisher weight = function (est, se)
{
  n = sum (est/se^2)
  d = sum (1/se^2)
  res = c (n/d, sqrt (1/d))
  names (res) = c ("est", "se")
  res
}

I use the `bmi.sbp` data in the `mr.raps` package (Zhao et al., 2020) to illustrate the Fisher weighting based on different variance estimates. The results based on $\hat{\beta}_{\text{fisher0}}$ and $\hat{\beta}_{\text{fisher1}}$ are similar.

> bmisbp = read.csv("mr_bmisbp.csv")
> bmisbp$iv = with(bmisbp, beta.outcome/beta.exposure)
> bmisbp$se.iv = with(bmisbp, se.outcome/beta.exposure)
> bmisbp$se.iv1 = with(bmisbp,
+                      sqrt(se.outcome^2 + iv^2*se.exposure^2)/beta.exposure)
> fisher.weight(bmisbp$iv, bmisbp$se.iv)
  est      se
0.31727680 0.05388827

> fisher.weight(bmisbp$iv, bmisbp$se.iv1)
  est      se
0.31576007 0.05893783

The Egger regressions with or without the intercept also give very similar
results. But the standard errors are quite different from those based on Fisher
weighting.

> mr.egger = lm
+         data = bmisbp,
+         weights = 1/se.outcome^2)
> summary(mr.egger)$coef
  Estimate   Std. Error   t value   Pr(>\|t\|)
beta.exposure  0.3172768   0.1105994   2.868704   0.004681659
>
> mr.egger.w = lm(beta.outcome ~ beta.exposure,
+                 data = bmisbp,
+                 weights = 1/se.outcome^2)
> summary(mr.egger.w)$coef
  Estimate   Std. Error   t value   Pr(>\|t\|)
(Intercept)  0.0001133328  0.002079418  0.05450217  0.956603931
beta.exposure  0.3172989306  0.110948506  2.85987564  0.004811017

Figure 25.2 shows the raw data as well as the fitted Egger regression line
with the intercept.![[_resources/Ding - 2023 - A First Course in Causal Inference_Part8/935f35cd8c54066d2cf61a1acfcb3626_MD5.jpg]]

FIGURE 25.2: Scatter plot proportional to the inverse of the variance, with the Egger regression line25.4 Critiques of the analysis based on MR

MR is an application of the idea of IV. It relies on strong assumptions. I
provide three sets of critiques from the conceptual, biological, and technical
perspectives.

Conceptually, the treatments in most studies based on MR are not well
defined from the potential outcomes perspective. For instance, the treatments
are often defined as the cholesterol level or the BMI. They are composite
variables and can correspond to complex, non-unique definitions of the hypo-
thetical experiments. The SUTVA often does not hold for these treatments.
Recall the discussion in Chapter 2.

Biologically, the fundamental assumptions for the IV analysis may not hold. Mendel's second law ensures that the inheritances of different traits are independent. However, it does not ensure that the candidate IVs are independent of the hidden confounders between the treatment and the outcome. It is possible that these IVs have direct effects on the confounders. It is also possible that some unmeasured genes affect both the IVs and the confounders. Mendel's second law does not ensure the exclusion restriction assumption either. It is possible that the IVs have other causal pathways to the outcome, beyond the pathway through the treatment of interest.

Technically, the statistical assumptions for MR are quite strong. Clearly, the linear IV model is a strong modeling assumption. The independence of the ŷ_j's and the ȳ_j's is also quite strong. Other issues in the data-collecting process can further complicate the interpretation of the IV assumptions. For instance, the treatments and outcomes are often measured with errors, and the genome-wide associate studies are often based on the case-control design with the samples conditional on the outcomes (see Chapter B.6.3).

VanderWeele et al. (2014) is an excellent review paper that discusses the
methodological challenges in MR.

25.5 Homework Problems

25.1 *Data analysis*

Analyze the `bmi.bmi` data in the R package `mr.raps`. See the package and Zhao et al. (2020, Section 7.2) for more details.

25.2 *Recommended reading*

Davey Smith and Ebrahim (2003) reviewed the potentials and limitations of
MR.