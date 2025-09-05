# Part VI

## Causal Mechanisms with Post-Treatment Variables![[_resources/Ding - 2023 - A First Course in Causal Inference_Part9/6cba99d7d19220521c4a6b70a6a78541_MD5.jpg]]

![[_resources/Ding - 2023 - A First Course in Causal Inference_Part9/15a3e90135aa712de44e42b1fbbc1964_MD5.jpg]]

![[_resources/Ding - 2023 - A First Course in Causal Inference_Part9/4b01de357d6551f2e42cb898926b7d52_MD5.jpg]]

![[_resources/Ding - 2023 - A First Course in Causal Inference_Part9/168059d359ba0b83700166888f94b7ac_MD5.jpg]]26

Principal Stratification

Parts II–V of this book focus on the causal effects of a treatment on an out-
come, possibly adjusting for some observed pretreatment covariates. Many
applications also have some post-treatment variable *M* which happens after
the treatment and is related to the outcome. An important question is how
to use the post-treatment variable *M* appropriately. I will start with several
motivating examples and then introduce Frangakis and Rubin (2002)'s formu-
lation of this problem based on potential outcomes.

**26.1 Motivating Examples**

**Example 26.1 (noncompliance)** *In randomized experiments with noncompliance, we can use *M* to represent the treatment received, which is affected by the treatment assignment *Z* and affects the outcome *Y*. In this example, *M* has the same meaning as *D* in Chapter 21.*

**Example 26.2 (truncation by death)** In randomized experiments to patients with severe diseases, some patients may die before the measurement of the outcome Y, e.g., the quality of life. The post-treatment variable *M* in this example is the binary indicator of the survival status.

**Example 26.3 (unemployment)** In job training programs, units are randomly assigned to treatment and control groups, and report their employment status *M* and wage *Y*. Then the post-treatment variable is the binary indicator of the employment status *M*.

**Example 26.4 (surrogate endpoint)** In clinical trials, the outcomes of interest (e.g., 30 years of survival) require a long and costly follow-up. Practitioners instead collect data on some other variables early in the follow-up that are easy to measure. These variables are called the “surrogate endpoints.” A concrete example is from clinical trials on HIV patients, where the candidate surrogate endpoint *M* is the CD4 cell count (recall that CD4 cells are white blood cells that fight infection).

Examples 26.1–26.4 above have the similarity that a variable *M* occursafter the treatment and is related to the outcome. It is possible that *M* is on the causal pathway from *Z* to *Y*. Figure 26.1(a) illustrates this mechanism. Example 26.1 corresponds to Figure 26.1(a). It is also possible that *M* is not on the causal pathway from *Z* to *Y*. Figure 26.1(b) illustrates this mechanism. Examples 26.2 and 26.3 correspond to Figure 26.1(b). Example 26.4 can correspond to Figure 26.1(a) or (b), depending on the choice of the surrogate endpoint.

![[_resources/Ding - 2023 - A First Course in Causal Inference_Part9/ff92480f859c3f4494201f7dfe5acf2b_MD5.jpg]]

(a) *M* is on the causal pathway from *Z* to *Y*, with *Z* randomized and *U* representing unmeasured confounding

![[_resources/Ding - 2023 - A First Course in Causal Inference_Part9/dc58933365b82c9e21174fc5eef6f5c6_MD5.jpg]]

(b) *M* is not on the causal pathway from *Z* to *Y*, with *Z* randomized and *U* representing unmeasured confounding

FIGURE 26.1: Causal diagrams with a post-treatment variable *M*

In practice, the underlying causal diagrams can be much more complex
than those in Figure 26.1. This chapter follows Frangakis and Rubin (2002)'s
formulation which does not assume the underlying causal diagrams.

## 26.2 The Problem of Conditioning on the Post-Treatment Variable

A naive method to deal with the post-treatment variable *M* is to condition
on its observed value as if it were a pretreatment covariate. However, *M*
is fundamentally different from *X*, because *M* is affected by the treatment
in general whereas *X* is not. It is also a “rule of thumb” that data analyzers
should not condition on any post-treatment variables in evaluating the average
causal effect of the treatment on the outcome (Cochran, 1957; Rosenbaum,
1984). Based on potential outcomes, Frangakis and Rubin (2002) gave the
following insightful explanation.For simplicity, we focus on the CRE in this chapter.

**Assumption 26.1 (CRE with an intermediate variable) We have**

$$
Z \perp \{M(1), M(0), Y(1), Y(0), X\}.
$$

Conditioning on $M = m$, we compare

$$
\mathrm{pr}(Y \mid Z = 1, M = m) \qquad (26.1)
$$

and

$$
\mathrm{pr}(Y \mid Z = 0, M = m). \tag{26.2}
$$

This comparison seems intuitive because it measures the difference in the
outcome distributions in the treated and control groups given the same value
of the post-treatment variable. When *M* is a pre-treatment covariate, this
comparison yields a reasonable subgroup effect. However, when *M* is a post-
treatment variable, the interpretation of this comparison is problematic. Under
Assumption 26.1, we can re-write the probabilities in (26.1) and (26.2) as

$$
\begin{align*}
\mathrm{pr}(Y \mid Z = 1, M = m) &= \mathrm{pr}\{Y(1) \mid Z = 1, M(1) = m\} \\
&= \mathrm{pr}\{Y(1) \mid M(1) = m\}
\end{align*}
$$

and

$$
\begin{align*}
\operatorname{pr}(Y \mid Z = 0, M = m) &= \operatorname{pr}\{Y(0) \mid Z = 0, M(0) = m\} \\
&= \operatorname{pr}\{Y(0) \mid M(0) = m\}.
\end{align*}
$$

Therefore, under CRE, comparing (26.1) and (26.2) is equivalent to comparing
the distributions of $Y(1)$ and $Y(0)$ for different subsets of units because the
units with $M(1) = m$ are different from the units with $M(0) = m$ if the $Z$
affects $M$. Consequently, the comparison conditioning on $M = m$ does not
have a causal interpretation in general unless $M(1) = M(0)$.¹

Revisit Example 26.1. Comparing pr(Y | Z = 1, M = 1) and pr(Y | Z = 0, M = 1) is equivalent to comparing the treated potential outcomes for compliers and always-takers with the control potential outcomes for always-takers, under the monotonicity assumption that M(1) ≥ M(0). Part 3 of Problem 22.8 has pointed out the drawbacks of this analysis.

Revisit Example 26.2. If the treatment improves the survival status, the treatment can save more weak patients than the control. In this case, units with $M(1) = 1$ are weaker than units with $M(0) = 1$, so the naive comparison gives biased results that are in favor of the control.

¹Based on the causal diagrams, we can reach the same conclusion. In Figure 26.1, even though $Z \perp U$ by randomization of $Z$, conditioning on $M$ introduces the “collider bias” that causes $Z \perp U$.26.3 Conditioning on the Potential Values of the Post-Treatment Variable

Frangakis and Rubin (2002) proposed to condition on the joint potential value
of the post-treatment variable $U = \{M(1), M(0)\}$ and compare

$$
\mathrm{pr}\{Y(1) | M(1) = m_1, M(0) = m_0\}
$$

and

$$
\mathrm{pr}\{Y(0) | M(1) = m_1, M(0) = m_0\}
$$

for some $(m_1, m_0)$. This is a comparison of the potential outcomes under
treatment and control for the same subset of units with $M(1) = m_1$ and
$M(0) = m_0$. Frangakis and Rubin (2002) called this strategy *principal strat-ification*, viewing $\{M(1), M(0)\}$ as a pre-treatment covariate. Based on this
idea, we can define

$$
\tau(m_1, m_0) = E\{Y(1) - Y(0) \mid M(1) = m_1, M(0) = m_0\}
$$

as the principal stratification average causal effect for the subgroup with
$M(1) = m_1, M(0) = m_0$. For a binary $M$, we have four subgroups

$$
\left\{
\begin{array}{l}
\tau(1,1) = E\{Y(1) - Y(0) \mid M(1) = 1, M(0) = 1\}, \\
\tau(1,0) = E\{Y(1) - Y(0) \mid M(1) = 1, M(0) = 0\}, \\
\tau(0,1) = E\{Y(1) - Y(0) \mid M(1) = 0, M(0) = 1\}, \\
\tau(0,0) = E\{Y(1) - Y(0) \mid M(1) = 0, M(0) = 0\}.
\end{array}
\right.
\qquad (26.3)
$$

Since {$M(1), M(0)$} is unaffected by the treatment, it is a covariate so
$\tau(m_1, m_0)$ is a subgroup causal effect. For subgroups with $M(1) = M(0)$, the
treatment does not change the intermediate variable, so $\tau(1, 1)$ and $\tau(0, 0)$
measure the *dissociative effects*. For other subgroups with $m_1 \neq m_0$, the principal stratification average causal effects $\tau(m_1, m_0)$ measure the *associative effects*.
The terminology is from Frangakis and Rubin (2002), which does not
assume that $M$ is on the causal pathway from $Z$ to $Y$. When we have Figure
26.1(a), we can interpret the dissociative effects as direct effects of $Z$ on $Y$
that act independent of $M$, although we cannot simply interpret the associative effects as direct or indirect effects of $Z$ on $Y$.

**Example 26.1 (noncompliance)** With noncompliance, (26.3) consists of
*the average causal effects for always takers, compliers, defiers, and never tak-
ers (Imbens and Angrist, 1994; Angrist et al., 1996).*

**Example 26.2 (truncation by death)** *Because the outcome is well-defined only if the patient survives, three subgroup causal effects in (26.3) are not meaningful, and the only well-defined subgroup effect is*

$$
\tau(1, 1) = E\{Y(1) - Y(0) \mid M(1) = 1, M(0) = 1\}. \quad (26.4)
$$It is called the survivor average causal effect (Rubin, 2006a). It is the average causal effect of the treatment on the outcome for those units who survive regardless of the treatment status.

**Example 26.3 (unemployment)** The unemployment problem is isomorphic to the truncation-by-death problem because the wage is well-defined only if the unit is employed in the first place. Therefore, the only well-defined subgroup effect is (26.4), the employed average causal effect. Previously, Heckman (1979) proposed a model, now called the Heckman Selection Model, to deal with unemployment in modeling the wage, viewing the wages of those unemployed as missing values². However, Zhang and Rubin (2003) and Zhang et al. (2009) argued that $\tau(1, 1)$ is a more meaningful quantity under the potential outcomes framework.

**Example 26.4 (surrogate endpoint)** Intuitively, we want to assess the effect of the treatment on the outcome via the effect of the treatment on the surrogate endpoint. Therefore, a good surrogate endpoint should satisfy two conditions: first, if the treatment does not affect the surrogate, then it does not affect the outcome either; second, if the treatment affects the surrogate, then it affects the outcome too. The first condition is called the “causal necessity” by Frangakis and Rubin (2002), and the second condition is called the “causal sufficiency” by Gilbert and Hudgens (2008). Based on (26.3) for a binary surrogate endpoint, causal necessity requires that $\tau(1, 1)$ and $\tau(0, 0)$ are zero, and causal sufficiency requires that $\tau(1, 0)$ and $\tau(0, 1)$ are not zero.

## 26.4 Statistical Inference and Its Difficulty

In Example 26.1, if we have randomization, monotonicity, and exclusion restriction, then we can identify the complier average causal effect $\tau(1, 0)$. This is the key result derived in Chapter 21.

However, in other examples, we cannot impose the exclusion restriction assumption. For instance, $\tau(1, 1)$ is the main parameter of interest in Examples 26.2 and 26.3, and $\tau(1, 1)$ and $\tau(0, 0)$ are both of interest in Example 26.4.

²Heckman won the Nobel prize of economics in 2000 “for his development of theory and methods for analyzing selective samples.” His model contains two stages. First, the employment status is determined by a latent linear model

$$
M_i = 1(X_i^\top \beta + u_i \geq 0).
$$

Second, the latent log wage is determined by a linear model

$$
Y_i^* = W_i^\top \gamma + v_i
$$

and $Y_i^*$ is observed as $Y_i$ only if $M_i = 1$. In his two-stage model, the covariates $X_i$ and $W_i$ may differ, and the errors $(u_i, v_i)$ are correlated bivariate Normal.Without the exclusion restriction assumption, it is very challenging to identify the principal stratification average causal effect. Sometimes, we cannot even impose the monotonicity assumption, and thus cannot identify the proportions of the latent strata in the first place.

### 26.4.1 Special case: truncation by death with binary outcome

I use the simple setting with a binary treatment, binary survival status, and binary outcome to illustrate the idea and especially the difficulty of statistical inference based on principal stratification.

In addition to Assumption 26.1, we impose the monotonicity.

**Assumption 26.2 (monotonicity) $M(1) \geq M(0)$**.

Theorem 22.1 demonstrates that under Assumptions 26.1 and 26.2, we can identify the proportions of the three latent strata by

$$
\begin{align*}
\pi_{(1,1)} &= \text{pr}(M = 1 | Z = 0), \\
\pi_{(0,0)} &= \text{pr}(M = 0 | Z = 1), \\
\pi_{(1,0)} &= \text{pr}(M = 1 | Z = 1) - \text{pr}(M = 1 | Z = 0).
\end{align*}
$$

Our goal is to identify the survivor average causal effect $\tau(1, 1)$. First, we can easily identify $E\{Y(0) | M(1) = 1, M(0) = 1\}$ because the observed group $(Z = 0, M = 1)$ consists of only survivors:

$$
E\{Y(0) | M(1) = 1, M(0) = 1\} = E(Y | Z = 0, M = 1).
$$

The key is then to identify $E\{Y(1) | M(1) = 1, M(0) = 1\}$. The observed group $(Z = 1, M = 1)$ is a mixture of two strata (1, 1) and (1, 0), therefore we have

$$
\begin{align}
E(Y | Z = 1, M = 1) = & \frac{\pi_{(1,1)}}{\pi_{(1,1)} + \pi_{(1,0)}} E\{Y(1) | M(1) = 1, M(0) = 1\} \nonumber \\
& + \frac{\pi_{(1,0)}}{\pi_{(1,1)} + \pi_{(1,0)}} E\{Y(1) | M(1) = 1, M(0) = 0\}. \tag{26.5}
\end{align}
$$

We have two unknown parameters but only one equation in (26.5). So we cannot uniquely determine $E\{Y(1) | M(1) = 1, M(0) = 1\}$ from the above equation (26.5). Nevertheless, (26.5) contains some information about the quantity of interest. That is, $E\{Y(1) | M(1) = 1, M(0) = 1\}$ is partially identified by Definition 18.1.

For a binary outcome $Y$, we know that $E\{Y(1) | M(1) = 1, M(0) = 0\}$ is bounded between 0 and 1, and consequently, $E\{Y(1) | M(1) = 1, M(0) = 1\}$is bounded between the solutions to the following two equations:

$$
E(Y | Z = 1, M = 1) = \frac{\pi_{(1,1)}}{\pi_{(1,1)} + \pi_{(1,0)}} E\{Y(1) | M(1) = 1, M(0) = 1\} + \frac{\pi_{(1,0)}}{\pi_{(1,1)} + \pi_{(1,0)}}
$$

and

$$
E(Y | Z = 1, M = 1) = \frac{\pi_{(1,1)}}{\pi_{(1,1)} + \pi_{(1,0)}} E\{Y(1) | M(1) = 1, M(0) = 1\}.
$$

Therefore, $E\{Y(1) | M(1) = 1, M(0) = 1\}$ has lower bound

$$
\frac{\{\pi_{(1,1)} + \pi_{(1,0)}\}E(Y | Z = 1, M = 1) - \pi_{(1,0)}}{\pi_{(1,1)}}
$$

and upper bound

$$
\frac{\{\pi_{(1,1)} + \pi_{(1,0)}\}E(Y | Z = 1, M = 1)}{\pi_{(1,1)}}
$$

We can then derive the bounds on $\tau(1, 1)$, summarized in Theorem 26.1 below.

**Theorem 26.1** *Under Assumptions 26.1 and 26.2 with a binary Y, we have*

$$
\frac{\{\pi_{(1,1)} + \pi_{(1,0)}\}E(Y | Z = 1, M = 1) - \pi_{(1,0)}}{\pi_{(1,1)}} - E(Y | Z = 0, M = 1) \\ \le \tau(1, 1) \\ \le \frac{\{\pi_{(1,1)} + \pi_{(1,0)}\}E(Y | Z = 1, M = 1)}{\pi_{(1,1)}} - E(Y | Z = 0, M = 1).
$$

We can use Imbens and Manski (2004)'s confidence interval for $\tau(1, 1)$ which involves two steps: first, we obtain the estimated lower and upper bounds $[\hat{l}, \hat{u}]$ with estimated standard errors $(se_l, se_u)$; second, we construct the confidence interval as $[\hat{l} - z_{1-\alpha}se_l, \hat{u} + z_{1-\alpha}se_u]$, where $z_{1-\alpha}$ is the $1 - \alpha$ quantile of the standard Normal distribution. The validity of Imbens and Manski (2004)'s confidence interval relies on some regularity conditions. In most truncation by death problems, those conditions hold because the lower and upper bounds are quite different, and they are bounded away from the extreme values $-1$ and $1$. I omit the technical details here.

To summarize, this is a challenging problem since we cannot identify the parameter based on the observed data even with an infinite sample size. We can derive large-sample bounds for $\tau(1, 1)$ but the statistical inference based on the bounds is not standard. If we do not have monotonicity, the large-sample bounds have even more complex forms; see Zhang and Rubin (2003) and Jiang et al. (2016, Appendix A).TABLE 26.1: Data truncated by death with * indicating the outcomes for dead patients

<table><thead><tr><th colspan="4">Treatment Z = 1</th></tr><tr><th></th><th>Y = 1</th><th>Y = 0</th><th>total</th></tr></thead><tbody><tr><th>M = 1</th><td>54</td><td>268</td><td>322</td></tr><tr><th>M = 0</th><td>*</td><td>*</td><td>109</td></tr></tbody></table><table><thead><tr><th colspan="4">Control Z = 0</th></tr><tr><th></th><th>Y = 1</th><th>Y = 0</th><th>total</th></tr></thead><tbody><tr><th>M = 1</th><td>59</td><td>218</td><td>277</td></tr><tr><th>M = 0</th><td>*</td><td>*</td><td>152</td></tr></tbody></table>

### 26.4.2 An application

I use the data in Yang and Small (2016) from the Acute Respiratory Distress Syndrome Network study which involves 861 patients with lung injury and acute respiratory distress syndrome. Patients were randomized to receive mechanical ventilation with either lower tidal volumes or traditional tidal volumes. The outcome is the binary indicator for whether patients could breathe without assistance by day 28. Table 26.1 summarizes the observed data.

We first obtain the point estimators of the latent strata:

$$
\begin{align*} 
\hat{\pi}_{(1,1)} &= \frac{277}{277 + 152} = 0.646, \\ 
\hat{\pi}_{(0,0)} &= \frac{109}{109 + 322} = 0.253, \\ 
\hat{\pi}_{(1,0)} &= 1 - 0.646 - 0.253 = 0.101. 
\end{align*}
$$

The sample means of the outcome for surviving patients are:

$$
\begin{align*} 
\hat{E}(Y | Z = 1, M = 1) &= \frac{54}{302} = 0.168, \\ 
\hat{E}(Y | Z = 0, M = 1) &= \frac{59}{277} = 0.213. 
\end{align*}
$$

The estimates for the bounds on $E\{Y(1) | M(1) = 1, M(0) = 1\}$ are:

$$
\left[ \frac{(0.646 + 0.101) \times 0.168 - 0.101}{0.101}, \frac{(0.646 + 0.101) \times 0.168}{0.101} \right] = [0.037, 0.194],
$$

so the bounds on $\tau(1, 1)$ are:

$$
[0.037 - 0.213, 0.194 - 0.213] = [-0.176, -0.019].
$$

Incorporating the sampling uncertainty based on the bootstrap, the confidence interval based on Imbens and Manski (2004)'s method is $[-0.267, 0.039]$, which covers 0.

### 26.4.3 Extensions

Zhang and Rubin (2003) started the literature of large-sample bounds. Imai(2008a) and Lee (2009) were two follow-up papers. Cheng and Small (2006) derived the bounds with multiple treatment arms. Yang and Small (2016) used a secondary outcome and Yang and Ding (2018a) used detailed survival information to sharpen the bounds on the survivor average causal effect.

## 26.5 Principal score method

Without additional assumptions, we can only derive bounds on the causal effects within principal strata, but cannot identify them in general. We must impose additional assumptions to achieve nonparametric identification of the $\tau(m_1, m_0)$'s. There is no consensus on the choice of the assumptions. Those additional assumptions are not testable, and their plausibility depends on the application.

A line of research based on the *principal score* under the *principal ignorability* assumption parallels causal inference with unconfounded observational studies. For simplicity, I focus on the case with strong monotonicity.

### 26.5.1 Principal score method under strong monotonicity

**Assumption 26.3 (strong monotonicity) $M(0) = 0$**.

Similar to the ignorability assumption, we now assume the *principal ignorability* assumption.

**Assumption 26.4 (principal ignorability) We have**

$$
E\{Y(0) | M(1) = 1, X\} = E\{Y(0) | M(1) = 0, X\}.
$$

Assumption 26.4 implies that $E\{Y(0) | M(1), X\} = E\{Y(0) | X\}$ or, equivalently,

$$
E\{Y(0)M(1) | X\} = E\{Y(0) | X\}E\{M(1) | X\}, \quad (26.6)
$$

that is, $Y(0)$ and $M(1)$ are mean independent (or uncorrelated) given $X$.

Assumptions 26.1, 26.3 and 26.4 ensure nonparametric identification of the causal effects within principal strata, as summarized by Theorem 26.2 below.

**Theorem 26.2** *Under Assumptions 26.1, 26.3 and 26.4,*

1. the conditional and marginal probabilities of $M(1)$, $\pi(X) = \text{pr}\{M(1) = 1 | X\}$ and $\pi = \text{pr}\{M(1) = 1\}$, can be identified by

$$
\pi(X) = \text{pr}(M = 1 | Z = 1, X)
$$

and

$$
\pi = \text{pr}(M = 1 | Z = 1)
$$

respectively;2. the principal stratification average causal effects can be identified
by

$$
\tau(1, 0) = E(Y | Z = 1, M = 1) - E\{\pi(X)Y | Z = 0\} / \pi
$$

and

$$
\tau(0,0) = E(Y | Z = 1, M = 0) - E\{(1 - \pi(X))Y | Z = 0\} / (1 - \pi).
$$

The conditional probability $\pi(X) = \text{pr}\{M(1) = 1 | X\}$ is called the *prin- cipal score*. Theorem 26.2 states that $\tau(1,0)$ and $\tau(0,0)$ can be identified by the difference in means with appropriate weights depending on the principal score.

**Proof of Theorem 26.2:** I will only prove the result for $\tau(1,0)$. We have

$$
E(Y | Z = 1, M = 1) = E\{Y(1) | Z = 1, M(1) = 1\} = E\{Y(1) | M(1) = 1\}.
$$

Moreover,

$$
\begin{align*}
& E\{\pi(X)Y \mid Z = 0\}/\pi \\
&= E\{\pi(X)Y(0) \mid Z = 0\}/\pi \\
&= E\{\pi(X)Y(0)\}/\pi \quad \text{(Assumption 26.1)} \\
&= E[E\{\pi(X)Y(0) \mid X\}] / \pi \quad \text{(tower property)} \\
&= E[\pi(X)E\{Y(0) \mid X\}] / \pi \\
&= E[E\{M(1) \mid X\}E\{Y(0) \mid X\}] / \pi \\
&= E[E\{M(1)Y(0) \mid X\}] / \pi \quad \text{(by (26.6))} \\
&= E\{M(1)Y(0)\}/\pi \\
&= E\{Y(0) \mid M(1) = 1\}.
\end{align*}
$$

I relegate the proof of the result for $\tau(0,0)$ as Problem 26.1.

Theorem 26.2 motivates the following simple estimators for $\tau(1,0)$ and $\tau(0,0)$, respectively:

1. fit a logistic regression of $M$ on $X$ using only data from the treated group to obtain $\hat{\pi}(X_i)$;

2. estimate $\pi$ by $\hat{\pi} = \frac{\sum_{i=1}^{n} Z_i M_i}{\sum_{i=1}^{n} Z_i}$;

3. obtain moment estimators:

$$
\hat{\tau}(1,0) = \frac{\sum_{i=1}^{n} Z_i M_i Y_i}{\sum_{i=1}^{n} Z_i M_i} - \frac{\sum_{i=1}^{n} (1-Z_i) \hat{\pi}(X_i) Y_i}{\hat{\pi} \sum_{i=1}^{n} (1-Z_i)}
$$

and

$$
\hat{\tau}(0,0) = \frac{\sum_{i=1}^{n} Z_i (1-M_i) Y_i}{\sum_{i=1}^{n} Z_i (1-M_i)} - \frac{\sum_{i=1}^{n} (1-Z_i)(1-\hat{\pi}(X_i)) Y_i}{(1-\hat{\pi}) \sum_{i=1}^{n} (1-Z_i)};
$$

4. use the bootstrap to approximate the variances of $\hat{\tau}(1,0)$ and $\hat{\tau}(0,0)$.26.5.2 An example

The following function can compute the point estimates of $\hat{\tau}(1,0)$ and $\hat{\tau}(0,0)$.

```R
psw = function(Z, M, Y, X) {
  ## probabilities of 10 and 00
  pi.10 = mean(M[Z==1])
  pi.00 = 1 - pi.10

  ## conditional probabilities of 10 and 00
  ps.10 = glm(M ~ X, family = binomial,
              weights = Z)$fitted.values
  ps.00 = 1 - ps.10

  ## PCEs 10 and 00
  tau.10 = mean(Y[Z==1&M==1]) - mean(Y[Z==0]*ps.10[Z==0])/pi.10
  tau.00 = mean(Y[Z==1&M==0]) - mean(Y[Z==0]*ps.00[Z==0])/pi.00
  c(tau.10, tau.00)
}
```

The following function can compute the point estimators as well as the
bootstrap standard errors.

```R
psw boot = function(Z, M, Y, X, n boot = 500) {
  ## point estimates
  point.est = psw(Z, M, Y, X)
  ## bootstrap standard errors
  n = length(Z)
  boot.est = replicate(n boot, {
    id boot = sample(1:n, n, replace = TRUE)
    psw(Z[id boot], M[id boot], Y[id boot], X[id boot, ]])
  })
  boot.se = apply(boot.est, 1, sd)
  ## results
  res = rbind(point.est, boot.se)
  rownames(res) = c("est", "se")
  colnames(res) = c("tau10", "tau00")
  return(res)
}
```

Revisit the data used in Chapter 21.5. Previously, we assumed exclusion restriction for the IV analysis. Now, we drop the exclusion restriction but assume principal ignorability. The results are below.

```R
> jobsdata = read.csv("jobsdata.csv")
> getX = lm(treat ~ sex + age + marital
+               + nonwhite + educ + income,
+               data = jobsdata)
> X = model.matrix(getX)[, -1]
> Z = jobsdata$treat
> M = jobsdata$comply
> Y = jobsdata$job_seek
``````r
> table(Z, M)
  M
Z     0    1
  0  299   0
  1  228  372
> psw boot(Z, M, Y, X)
  tau10      tau00
est  0.1694979 -0.09904909
se   0.1042405  0.15612983
```

The point estimator $\hat{\tau}(1,0)$ does not differ much from the one based on the IV analysis. The point estimator $\hat{\tau}(0,0)$ is close to zero with a large standard error. In this example, exclusion restriction seems a reasonable assumption.

### 26.5.3 Extensions

Follmann (2000), Hill et al. (2002), Jo and Stuart (2009), Jo et al. (2011) and Stuart and Jo (2015) started the literature of using the principal score to identify causal effects within principal strata. Ding and Lu (2017) provided a theoretical foundation for this strategy. They proved Theorem 26.2 as well as a more general version under monotonicity; see Problem 26.2.

## 26.6 Other methods

To estimate principal stratification average causal effects without the exclusion restriction assumption, Zhang et al. (2009) proposed to use the Normal mixture models. However, the inference based on the Normal mixture models can be quite fragile. A strategy is to use additional information to improve the inference under some restrictions (Ding et al., 2011; Mealli and Pacini, 2013; Mattei et al., 2013; Jiang et al., 2016).

Conceptually, the principal stratification framework works for general $M$. A multi-valued $M$ generates many latent principal strata, and a continuous $M$ generates infinitely many latent principal strata. In those cases, identifying the probability of the principal strata is non-trivial in the first place let alone identifying the principal stratification average causal effects. Jiang and Ding (2021) reviewed some useful strategies.## 26.7 Homework problems

### 26.1 Complete the proof of Theorem 26.2

Prove the result for $\tau(0, 0)$ in Theorem 26.2.

### 26.2 Principal score method under monotonicity

This problem extends Theorem 26.2, with Assumption 26.3 replaced by Assumption 26.2 and Assumption 26.4 replaced by Assumption 26.5 below.

**Assumption 26.5 (principal ignorability) We have**

$$
E\{Y(1) | M(1) = 1, M(0) = 0, X\} = E\{Y(1) | M(1) = 1, M(0) = 1, X\}
$$

and

$$
E\{Y(0) | M(1) = 1, M(0) = 0, X\} = E\{Y(0) | M(1) = 0, M(0) = 0, X\}.
$$

**Theorem 26.3 Under Assumptions 26.1, 26.2 and 26.5,**

1. the conditional and marginal principal scores can be identified by

$$
\begin{align*}
\pi_{(0,0)}(X) &= \operatorname{pr}(M = 0 | Z = 1, X), \\
\pi_{(1,1)}(X) &= \operatorname{pr}(M = 1 | Z = 0, X), \\
\pi_{(1,0)}(X) &= \operatorname{pr}(M = 1 | Z = 1, X) - \operatorname{pr}(M = 1 | Z = 0, X).
\end{align*}
$$

and

$$
\begin{align*}
\pi_{(0,0)} &= \operatorname{pr}(M = 0 | Z = 1), \\
\pi_{(1,1)} &= \operatorname{pr}(M = 1 | Z = 0), \\
\pi_{(1,0)} &= \operatorname{pr}(M = 1 | Z = 1) - \operatorname{pr}(M = 1 | Z = 0)
\end{align*}
$$

respectively;

2. the principal stratification average causal effects can be identified by

$$
\begin{align*}
\tau(1,0) &= E\{w_{1,(1,0)}(X)Y | Z=1, M=1\} \\
&\quad - E\{w_{0,(1,0)}(X)Y | Z=0, M=0\}, \\
\tau(0,0) &= E(Y | Z=1, M=0) - E\{w_{0,(0,0)}(X)Y | Z=0, M=0\}, \\
\tau(1,1) &= E\{w_{1,(1,1)}(X)Y | Z=1, M=1\} - E(Y | Z=0, M=1)
\end{align*}
$$with

$$
\begin{align*}
w_{1,(1,0)}(X) &= \frac{\pi_{(1,0)}(X)}{\pi_{(1,0)}(X) + \pi_{(1,1)}(X)} \bigg/ \frac{\pi_{(1,0)}}{\pi_{(1,0)} + \pi_{(1,1)}}, \\
w_{0,(1,0)}(X) &= \frac{\pi_{(1,0)}(X)}{\pi_{(1,0)}(X) + \pi_{(0,0)}(X)} \bigg/ \frac{\pi_{(1,0)}}{\pi_{(1,0)} + \pi_{(0,0)}}, \\
w_{0,(0,0)}(X) &= \frac{\pi_{(0,0)}(X)}{\pi_{(1,0)}(X) + \pi_{(0,0)}(X)} \bigg/ \frac{\pi_{(0,0)}}{\pi_{(1,0)} + \pi_{(0,0)}}, \\
w_{1,(1,1)}(X) &= \frac{\pi_{(1,1)}(X)}{\pi_{(1,0)}(X) + \pi_{(1,1)}(X)} \bigg/ \frac{\pi_{(1,1)}}{\pi_{(1,0)} + \pi_{(1,1)}}.
\end{align*}
$$

Remark: Based on Theorem 26.3, we can construct weighting estimators.
Theorem 26.3 is Proposition 2 in Ding and Lu (2017), which also provided
more details for the estimation.

26.3 *Principal score method in observational studies*

This problem extends Theorem 26.2, with Assumption 26.1 replaced by the
ignorability assumption below.

**Assumption 26.6** $Z \perp \{M(1), M(0), Y(1), Y(0)\} | X$.

Recall the definition of the propensity score $e(X) = \text{pr}(Z = 1 | X)$. We
have the following identification result.

**Theorem 26.4** *Under Assumptions 26.6, 26.3 and 26.4,*

1. the conditional and marginal probabilities of $M(1)$, $\pi(X) =$ $\text{pr}\{M(1) = 1 | X\}$ and $\pi = \text{pr}\{M(1) = 1\}$, can be identified by

$$
\pi(X) = \mathrm{pr}(M = 1 | Z = 1, X)
$$

and

$$
\pi = E\{\mathrm{pr}(M = 1 | Z = 1, X)\}
$$

respectively;

2. the principal stratification average causal effects can be identified by

$$
\tau(1,0) = E \left\{ \frac{M Z}{\pi e(X)} Y \right\} - E \left\{ \frac{\pi(X)}{\pi} \frac{1-Z}{1-e(X)} Y \right\}
$$

and

$$
\tau(0,0) = E \left\{ \frac{1-M}{1-\pi} \frac{Z}{e(X)} Y \right\} - E \left\{ \frac{1-\pi(X)}{1-\pi} \frac{1-Z}{1-e(X)} Y \right\}.
$$

Prove Theorem 26.4.<table>
   <tr>
    <td>26.7</td>
    <td>Homework problems</td>
    <td>363</td>
   </tr>
   <tr>
    <td>26.4</td>
    <td>General principal score method</td>
    <td></td>
   </tr>
   <tr>
    <td colspan="2">Extend Theorems 26.3 and 26.4 under Assumptions 26.6, 26.2 and 26.5.</td>
    <td></td>
   </tr>
   <tr>
    <td colspan="2">Remark: See Jiang et al. (2022).</td>
    <td></td>
   </tr>
  </table>

26.5 *Recommended reading*

Frangakis and Rubin (2002) proposed the principal stratification framework. Zhang and Rubin (2003) derived large-sample bounds on the survivor average causal effect. Jiang and Ding (2021) reviewed various strategies to identify the causal effects within principal strata. Jiang et al. (2022) gave a unified discussion of this strategy for observational studies and proposed multiply robust estimators for causal effects within principal strata.127

Mediation Analysis: *Natural Direct and*
*Indirect Effects*

With an intermediate variable *M* between the treatment *Z* and outcome *Y*, the causal effects within principal strata defined by *U* = {*M*(1), *M*(0)} can assess the treatment effect heterogeneity across latent groups *U*. When *M* is indeed on the causal pathway from *Z* to *Y*, causal effects within some principal strata, τ(1, 1) and τ(0, 0), can give information about the direct effect of *Z* on *Y*. However, these direct effects are only for two latent groups. The causal effects within the other two principal strata, τ(1, 0) and τ(0, 1), contain both direct and indirect effects. Fundamentally, principal stratification does not provide any information about the indirect effect of *Z* on *Y* through *M* because it does not even assume that *M* can be intervened.

In the above discussion, I use the notions of “direct effect” and “indirect effect” in a casual way. When *M* lies on the pathway from *Z* to *Y*, researchers often want to assess the extent to which the effect of *Z* on *Y* is through *M* and the extent to which the effect is through other pathways. This is called *mediation analysis*. It is the topic of this chapter.

**27.1 Motivating Examples**

In mediation analysis, we have a treatment *Z*, an outcome *Y*, a mediator *M*, and some background covariates *X*. Figure 27.1 illustrates their relationship.
Below we give some concrete examples.

![[_resources/Ding - 2023 - A First Course in Causal Inference_Part9/b57693776039822ed20364a6163b6d64_MD5.jpg]]

FIGURE 27.1: Causal diagram for mediation analysis**Example 27.1** VanderWeele et al. (2012) conducted mediation analysis to assess the extent to which the effect of variants on chromosome 15q25.1 on lung cancer is mediated through smoking and the extent to which it operates through other causal pathways¹. The exposure levels correspond to changes from 0 to 2 C alleles, smoking intensity is measured by the square root of cigarettes per day, and the outcome is the lung cancer indicator. VanderWeele et al. (2012)'s study contained many sociodemographic covariates.

**Example 27.2** Rudolph et al. (2018) studied the causal mechanism from neighborhood poverty to adolescent substance use, mediated by the school and peer environment. They used data from the National Comorbidity Survey Replication Adolescent Supplement, a nationally representative survey of U.S. adolescents conducted during 2001–2004. The treatment is the binary indicator of neighborhood disadvantage, defined as living in the lowest tertile of neighborhood socioeconomic status based on data from the 2000 U.S. Census. Four binary mediators are measures of school and peer environments, and six binary outcomes are measures of substance use. Baseline covariates included the adolescent's sex, age, race, immigration generation, family income, etc.

**Example 27.3** The *mediation* package in R contains a dataset called *jobs*, which is from JOBS II, a randomized field experiment that investigates the efficacy of a job training intervention on unemployed workers. We used this dataset in Chapter 21.5. The program is designed to not only increase reemployment among the unemployed but also enhance the mental health of the job seekers. It is therefore of interest to assess the indirect effect of the intervention on mental health through job search efficacy and its direct effect acting through other pathways. We will revisit this example in Chapter 27.4.2 later.

## 27.2 Nested Potential Outcomes

### 27.2.1 Natural Direct and Indirect Effects

Below we drop the index *i* for unit *i* and assume all random variables are IID draws from a superpopulation. For simplicity, we focus on a binary treatment *Z*.

We first consider the hypothetical intervention on *z* and define potential mediators and outcomes corresponding to the intervention on *z*:

$$
\{M(z), Y(z) : z = 0, 1\}.
$$

We then consider hypothetical intervention on both *z* and *m* and define po-

¹Recall Chapter 17 for Fisher's hypothesis of a common genetic factor that affects the smoking behavior and lung cancer simultaneously.tential outcomes corresponding to the interventions on z and m:

$$
\{Y(z, m) : z = 0, 1; m \in \mathcal{M}\},
$$

where $\mathcal{M}$ contains all possible values of $m$. Robins and Greenland (1992) and Pearl (2001) further consider the nested potential outcomes corresponding to intervention on $z$ and $m = M(z')$:

$$
\{Y(z, M_{z'}) : z = 0, 1; z' = 0, 1\}
$$

where I write $M(z')$ as $M_{z'}$ to avoid excessive parentheses. The notation $Y(z, M_{z'})$ is the hypothetical outcome if the treatment were set at level $z$ and the mediator were set at its potential level $M(z')$ under treatment $z'$. Importantly, $z$ and $z'$ can be different. With a binary treatment, we have four nested potential outcomes in total:

$$
\{Y(1, M_1), Y(1, M_0), Y(0, M_1), Y(0, M_0)\}.
$$

The nested potential outcome $Y(1, M_1)$ is the hypothetical outcome if the treatment were set at $z = 1$ and the mediator were set at what would happen under $z = 1$. Similarly, $Y(0, M_0)$ is the outcome if the treatment were set at $z = 0$ and the mediator were set at what would happen under $z = 0$. It would be surprising if $Y(1, M_1) \neq Y(1)$ or $Y(0, M_0) \neq Y(0)$. Therefore, we make the following composition assumption throughout this chapter.

**Assumption 27.1 (composition) $Y(z, M_z) = Y(z)$ for $z = 0, 1$**

The composition assumption cannot be proved. It is indeed an assumption. Without causing philosophical debates, we can even define $Y(1)$ as $Y(1, M_1)$, and define $Y(0)$ as $Y(0, M_0)$. Then by definition, Assumption 27.1 holds.

The nested potential outcome $Y(1, M_0)$ is the hypothetical outcome if the unit received treatment 1 but its mediator were set at its natural value $M_0$ without the treatment. Similarly, $Y(0, M_1)$ is the hypothetical outcome if the unit received control 0 but its mediator were set at its natural value $M_1$ under the treatment. They are two cross-world counterfactual terms and are useful for defining the direct and indirect effects.

**Definition 27.1 (total, direct and indirect effects) Define the total effect of the treatment on the outcome as**

$$
\tau = E\{Y(1) - Y(0)\}.
$$

*Define the natural direct effect as*

$$
\text{NDE} = E\{Y(1, M_0) - Y(0, M_0)\}.
$$

*Define the natural indirect effect as*

$$
\text{NIE} = E\{Y(1, M_1) - Y(1, M_0)\}.
$$The total effect is the standard average causal effect of $Z$ on $Y$. The natural direct effect measures the effect of the treatment on the outcome if the mediator were set at the natural value $M_0$ without the intervention. The natural indirect effect measures the effect of the treatment through changing the mediator if the treatment itself were set at $z = 1$. Under the composition assumption, the natural direct and indirect effects reduce to

$$
\text{NDE} = E\{Y(1, M_0) - Y(0)\}, \quad \text{NIE} = E\{Y(1) - Y(1, M_0)\},
$$

and therefore, we can decompose the total effect as the sum of the natural direct and indirect effects.

**Proposition 27.1** By Definition 27.1 and Assumption 27.1, we have

$$
\tau = \text{NDE} + \text{NIE}.
$$

Mathematically, we can also define the natural indirect effect as $E\{Y(0, M_1) - Y(0, M_0)\}$ where the treatment is fixed at 0. However, this definition does not lead to the decomposition in Proposition 27.1.

Unfortunately, the nest potential outcome $Y(1, M_0)$ is not an easy quantity to understand due to the cross-world nature of the interventions: the treatment is set at $z = 1$ but the mediator is set at its natural value $M_0$ under treatment $z = 0$. Clearly, these two interventions on the treatment cannot simultaneously happen in any realized experiment. To understand the cross-world potential outcome $Y(1, M_0)$, we need to imagine the existence of parallel worlds as shown in Figure 27.2. Let's focus on $Y(1, M_0)$. When the treatment is set at $z = 1$, the mediator must take value $M_1$. If at the same time, we want to set the mediator at $m = M_0$, we must know the value of $M_0$ for the same unit from another experiment in the parallel world. This can be an unrealistic physical experiment because it requires that the same unit is intervened at two different levels of the treatment. Under some strong assumptions about the homogeneity of units, we may use another unit's mediator value under control as a proxy for $M_0$.

### 27.2.2 Metaphysics or Science

Causal inference is hard, and there is no agreement even on its mathematical notation. Robins and Greenland (1992) and Pearl (2001) used the nested potential outcomes to define the natural direct and indirect effects. However, Frangakis and Rubin (2002) called $Y(1, M_0)$ and $Y(0, M_1)$ a priori *counterfactuals* because we can not observe them in any physical experiments. In this sense, they do not exist a priori. According to Popper (1963), a way to distinguish science and metaphysics is the falsifiability of the statements. That is, if a statement is not falsifiable based on any physical experiments or observations, then it is not a scientific but rather a metaphysical statement. Because we can not observe $Y(1, M_0)$ and $Y(0, M_1)$ in any experiments, we can notfalsify any statements involving them except for the trivial ones (e.g., some outcomes are binary, or continuous, or bounded). Therefore, a strict Popperian statistician would view mediation analysis as metaphysics.

More strikingly, Dawid (2000) criticized the potential outcomes framework to be metaphysical, and he called Rubin’s “Science Table” defined in Chapter 2.2 a “metaphysical array.” This is a critique on not only the a priori counter-factuals $Y(1, M_0)$ and $Y(0, M_1)$ but also the simpler potential outcomes $Y(1)$ and $Y(0)$. Dawid (2000) argued that because we can never observe $Y(1)$ and $Y(0)$ jointly, then introducing the notation $\{Y(1), Y(0)\}$ is a metaphysical activity. He is correct about the metaphysical nature of the joint distribution of $\text{pr}\{Y(1), Y(0)\}$, but he is incorrect about the marginal distributions. Based on the observed data, we indeed can falsify some statements about the marginal distributions, although we cannot falsify any statements about the joint distribution.² Therefore, even according to Popper (1963), Rubin’s Science Table is not metaphysical because it has some nontrivial falsifiable implications although not all implications are falsifiable. This is the fundamental difference between $\{Y(1), Y(0)\}$ and $\{Y(1, M_0), Y(0, M_1)\}$.

![[_resources/Ding - 2023 - A First Course in Causal Inference_Part9/b0d52253fb9e89fbaef2e57854df61e3_MD5.jpg]]

FIGURE 27.2: Cross-world potential outcomes $Y(1, M_0)$ and $Y(0, M_1)$

²By the probability theory, given the marginal distributions of $\text{pr}(Y(1) \le y_1)$ and $\text{pr}(Y(0) \le y_0)$, we can bound the joint distribution of $\text{pr}(Y(1) \le y_1, Y(0) \le y_0)$ by the Frechet-Hoeffding inequality:

$$
\begin{align*} 
& \max\{0, \text{pr}(Y(1) \le y_1) + \text{pr}(Y(0) \le y_0) - 1\} \\ 
\le & \text{pr}(Y(1) \le y_1, Y(0) \le y_0) \\ 
\le & \min\{\text{pr}(Y(1) \le y_1), \text{pr}(Y(0) \le y_0)\}. 
\end{align*}
$$

This is often a loose inequality. Unfortunately, we do not have any information beyond this inequality without imposing additional assumptions.## 27.3 The Mediation Formula

Pearl (2001)'s mediation formula relies on the following four assumptions. The first three essentially assume that the treatment and the mediator are both randomized conditional on observed covariates.

**Assumption 27.2** *There is no treatment-outcome confounding:*

$$
Z \perp Y(z, m) | X
$$

for all z and m.

**Assumption 27.3** *There is no mediator-outcome confounding:*

$$
M \perp Y(z, m) | (X, Z)
$$

for all z and m.

Assumptions 27.2 and 27.3 together are often called sequential ignorability. They are equivalent to the assumption that $(Z, M)$ are jointly randomized conditioning on $X$:

$$
(Z, M) \perp Y(z, m) | X \qquad (27.1)
$$

for all $z$ and $m$. I leave the proof of (27.1) as Problem 27.2.

**Assumption 27.4** *There is no treatment-mediator confounding:*

$$
Z \perp M(z) | X
$$

for all $z$.

The last assumption is the cross-world independence.

**Assumption 27.5** *There is no cross-world independence between the potential outcomes and potential mediators:*

$$
Y(z, m) \perp M(z') | X
$$

for all $z, z'$ and $m$.

Assumptions 27.2–27.4 are very strong, but at least they hold under experiments with randomized treatment and mediator. Assumption 27.5 is stronger because no physical experiment can ensure it. Because we can never observe $Y(z, m)$ and $M(z')$ in any experiment if $z \neq z'$, Assumption 27.5 can never be validated so it is fundamentally metaphysical.

I give an example below in which Assumptions 27.2–27.5 all hold.**Example 27.4** Given $X$, we generate

$$
\begin{align*}
Z &= 1\{g_Z(X, \varepsilon_Z) \ge 0\}, \\
M(z) &= 1\{g_M(X, z, \varepsilon_M) \ge 0\}, \\
Y(z, m) &= g_Y(X, z, m, \varepsilon_Y),
\end{align*}
$$

for $z, m = 0, 1$, where $\varepsilon_Z, \varepsilon_M, \varepsilon_Y$ are all independent random errors. Consequently, we generate the observed values of $M$ and $Y$ from

$$
\begin{align*}
M &= M(Z) = 1\{g_M(X, Z, \varepsilon_M) \ge 0\}, \\
Y &= Y(Z, M) = g_Y(X, Z, M, \varepsilon_Y).
\end{align*}
$$

We can verify that Assumptions 27.2–27.5 hold under this data-generating
process. On the contrary, if we allow $\varepsilon_M$ and $\varepsilon_Y$ to be $\varepsilon_M(z)$ and $\varepsilon_Y(z, m)$,
then Assumptions 27.2–27.5 can fail. See Problem 27.3 for more details.

Pearl (2001) proved the following key result for mediation analysis.

**Theorem 27.1** *Under Assumptions 27.2–27.5, we have*

$$
E\{Y(z, M_{z'}) | X = x\} = \sum_{m} E(Y | Z = z, M = m, X = x)\mathrm{pr}(M = m | Z = z', X = x)
$$

and therefore,

$$
\begin{align*}
& E\{Y(z, M_{z'})\} \\
&= \sum_{x} E\{Y(z, M_{z'}) | X = x\} \mathrm{pr}(X = x) \\
&= \sum_{x} \sum_{m} E(Y | Z = z, M = m, X = x) \mathrm{pr}(M = m | Z = z', X = x) \mathrm{pr}(X = x).
\end{align*}
$$

Theorem 27.1 assumes that both *M* and *X* are discrete. With general *M*
and *X*, the mediation formulas become

$$
E\{Y(z, M_{z'}) | X = x\} = \int E(Y | Z = z, M = m, X = x)f(m | Z = z', X = x)dm
$$

and

$$
\begin{align*}
& E\{Y(z, M_{z'})\} \\
&= \int E\{Y(z, M_{z'}) | X = x\} f(x) dx \\
&= \iint E(Y | Z = z, M = m, X = x) f(m | Z = z', X = x) f(x) dmdx.
\end{align*}
$$

From Theorem 27.1, the identification formulas for the means of the nested
potential outcomes depend on the conditional mean of the outcome given thetreatment, mediator, and covariates, as well as the conditional mean of the
mediator given the treatment and covariates. We need to evaluate these two
conditional means at different treatment levels if the nested potential outcome
involves cross-world interventions.

If we drop the cross-world independence assumption, we can modify the
definition of the natural direct and indirect effects and the same formulas hold.
See Problem 27.11 for more details.

I give the proof below.

**Proof of Theorem 27.1:** By the tower property, $E\{Y(z, M_{z'})\} = E[E\{Y(z, M_{z'}) | X\}]$, so we need only to prove the formula for $E\{Y(z, M_{z'}) | X = x\}$. Starting with the law of total probability, we have

$$
\begin{align*}
& E\{Y(z, M_{z'}) | X = x\} \\
&= \sum_m E\{Y(z, M_{z'}) | M_{z'} = m, X = x\} \underbrace{\text{pr}(M_{z'} = m | X = x)}_{\text{Assumption 27.5}} \\
&= \sum_m E\{Y(z, m) | M_{z'} = m, X = x\} \underbrace{\text{pr}(M_{z'} = m | X = x)}_{\text{Assumption 27.4}} \\
&= \sum_m \underbrace{E(Y | Z = z, M = m, X = x)}_{\text{Assumptions 27.2 and 27.3}} \text{pr}(M = m | Z = z', X = x).
\end{align*}
$$

□

The above proof is trivial from a mathematical perspective. It illustrates
the necessity of Assumptions 27.2–27.5.

Conditional on $X = x$, the mediation formulas for $Y(1, M_1)$ and $Y(0, M_0)$ simplify to

$$
\begin{align*}
& E\{Y(1, M_1) | X = x\} \\
&= \sum_m E(Y | Z = 1, M = m, X = x) \underbrace{\text{pr}(M = m | Z = 1, X = x)}_{} \\
&= E(Y | Z = 1, X = x)
\end{align*}
$$

and

$$
\begin{align*}
& E\{Y(0, M_0) | X = x\} \\
&= \sum_m E(Y | Z = 0, M = m, X = x) \underbrace{\text{pr}(M = m | Z = 0, X = x)}_{} \\
&= E(Y | Z = 0, X = x)
\end{align*}
$$

based on the law of total probability; the mediation formula for $Y(1, M_0)$
simplifies to

$$
\begin{align*}
& E\{Y(1, M_0) | X = x\} \\
&= \sum_m E(Y | Z = 1, M = m, X = x) \underbrace{\text{pr}(M = m | Z = 0, X = x)}_{},
\end{align*}
$$where the conditional expectation of the outcome is given $Z = 1$ but the conditional distribution of the mediator is given $Z = 0$. This leads to the identification formulas of the natural direct and indirect effects.

**Corollary 27.1** *Under Assumptions 27.2–27.5, the conditional natural direct and indirect effects are identified by*

$$
\begin{align*}
\text{NDE}(x) &= E\{Y(1, M_0) - Y(0, M_0) \mid X = x\} \\
&= \sum_m \{E(Y \mid Z = 1, M = m, X = x) - E(Y \mid Z = 0, M = m, X = x)\} \\
&\quad \times \text{pr}(M = m \mid Z = 0, X = x)
\end{align*}
$$

and

$$
\begin{align*}
\text{NIE}(x) &= E\{Y(1, M_1) - Y(1, M_0) \mid X = x\} \\
&= \sum_m E(Y \mid Z = 1, M = m, X = x) \\
&\quad \times \{\text{pr}(M = m \mid Z = 1, X = x) - \text{pr}(M = m \mid Z = 0, X = x)\};
\end{align*}
$$

the unconditional ones can be identified by $\text{NDE} = \sum_x \text{NDE}(x)\text{pr}(X = x)$ and
$\text{NIE} = \sum_x \text{NIE}(x)\text{pr}(X = x)$.

As a special case, with a binary $M$, the formula of the $\text{NIE}$ reduces to a product form below.

**Corollary 27.2** *Under Assumptions 27.2–27.5, for a binary mediator *M*, we have*

$$
\text{NIE}(x) = \tau_{Z \to M}(x) \tau_{M \to Y}(1, x)
$$

and $\text{NIE} = E\{\text{NIE}(X)\}$, where

$$
\tau_{Z \to M}(x) = \mathrm{pr}(M = 1 | Z = 1, X = x) - \mathrm{pr}(M = 1 | Z = 0, X = x).
$$

and

$$
\tau_{M \to Y}(z, x) = E(Y | Z = z, M = 1, X = x) - E(Y | Z = z, M = 0, X = x)
$$

I leave the proof of Corollary 27.2 as Problem 27.6. Corollary 27.2 gives a simple formula in the case of a binary *M*. With randomized *Z* conditional on *X*, we can view $\tau_{Z \to M}(x)$ as the conditional average causal effect of *Z* on *M*. With randomized *M* conditional on ($X, Z$), we can view $\tau_{M \to Y}(z, x)$ as the conditional average causal effect of *M* on *Y*. The conditional natural indirect effect equals their product. This is coherent with our intuition that the indirect effect acts from *Z* to *M* and then from *M* to *Y*.## 27.4 The Mediation Formula Under Linear Models

Theorem 27.1 gives the nonparametric identification formula for mediation analysis. It allows us to derive various formulas for mediation analysis under different models. I will introduce the famous Baron–Kenny method under linear models below. VanderWeele (2015) gives explicit formulas for the natural direct and indirect effects for many commonly used models. I relegate the details of other models to Section 27.6.

### 27.4.1 The Baron–Kenny Method

![[_resources/Ding - 2023 - A First Course in Causal Inference_Part9/3fdb42cbb10dba58ea4cd5c67e008bba_MD5.jpg]]

FIGURE 27.3: The Baron–Kenny method for mediation under linear models

The Baron–Kenny method assumes the following linear models for the mediator and outcome given the treatment and covariates.

**Assumption 27.6 (linear models for the Baron–Kenny method)** *Both the mediator and outcome follow linear models:*

$$
egin{cases} E(M | Z, X) = \beta_0 + \beta_1 Z + \beta_2^T X, \\ E(Y | Z, M, X) = \theta_0 + \theta_1 Z + \theta_2 M + \theta_4^T X. \end{cases}
$$

Under these linear models, the formulas for the natural direct and indirect effects simplify to functions of the coefficients.

**Corollary 27.3 (Baron–Kenny formulas for mediation)** *Under Assumptions 27.2–27.5 and 27.6, we have*

$$
\text{NDE} = \theta_1, \quad \text{NIE} = \theta_2\beta_1.
$$

The formulas in Corollary 27.3 are intuitive based on Figure 27.3. Thedirect effect equals the coefficient on the path $Z \to Y$, and the indirect effect equals the product of the coefficients on the path $Z \to M \to Y$. I give the proof below based on Theorem 27.1.

**Proof of Corollary 27.3:** The conditional NDE equals

$$
\text{NDE}(x) = \sum_m \theta_1 \text{pr}(M = m | Z = 0, X = x) = \theta_1
$$

and the conditional NIE equals

$$
\begin{align*} \text{NIE}(x) &= \sum_m (\theta_0 + \theta_1 + \theta_2 m + \theta_4^\top x) \\ & \quad \times \{\text{pr}(M = m | Z = 1, X = x) - \text{pr}(M = m | Z = 0, X = x)\} \\ &= \theta_2 \{E(M = m | Z = 1, X = x) - E(M = m | Z = 0, X = x)\} \\ &= \theta_2 \beta_1, \end{align*}
$$

which do not depend on $x$. Therefore, they are also the formulas for the unconditional natural direct and indirect effects. □

If we obtain OLS estimators of these coefficients, we can estimate the direct and indirect effects by

$$
\text{N}\hat{\text{D}}\text{E} = \hat{\theta}_1, \quad \text{N}\hat{\text{I}}\text{E} = \hat{\theta}_2 \hat{\beta}_1,
$$

which is called the Baron–Kenny method (Judd and Kenny, 1981; Baron and Kenny, 1986) although it had several antecedents (e.g., Hyman, 1955; Alwin and Hauser, 1975; Judd and Kenny, 1981; Sobel, 1982).

Standard software packages report the standard error of $\text{N}\hat{\text{D}}\text{E}$ from OLS. Sobel (1982, 1986) used the delta method to obtain the standard error of $\text{N}\hat{\text{I}}\text{E}$. Based on the formula in Example A.2, the asymptotic variance of $\hat{\theta}_2\hat{\beta}_1$ equals $\text{var}(\hat{\theta}_2)\beta_1^2 + \theta_2^2\text{var}(\hat{\beta}_1)$. So the estimated variance is

$$
\text{v}\text{a}\text{r}(\hat{\theta}_2)\hat{\beta}_1^2 + \hat{\theta}_2^2\text{v}\text{a}\text{r}(\hat{\beta}_1).
$$

Testing the null hypothesis of NIE based on $\hat{\theta}_2\hat{\beta}_1$ and the estimated variance above is called Sobel's test in the literature of mediation analysis.

## 27.4.2 An Example

We can easily implement the Baron–Kenny method via the following code.

```matlab
library("car")
BKmediation = function(Z, M, Y, X)
{
    ## two regressions and coefficients
    mediator.reg    = lm(M ~ Z + X)
    mediator.Zcoef  = mediator.reg$coef[2]
    mediator.Zse     = sqrt(hccm(mediator.reg)[2, 2])
``````r
outcome.reg      = lm(Y ~ Z + M + X)
outcome.Zcoef    = outcome.reg$coef[2]
outcome.Zse      = sqrt(hccm(outcome.reg)[2, 2])
outcome.Mcoef    = outcome.reg$coef[3]
outcome.Mse      = sqrt(hccm(outcome.reg)[3, 3])

## Baron-Kenny point estimates
NDE = outcome.Zcoef
NIE = outcome.Mcoef*mediator.Zcoef

## Sobel's variance estimate based on the delta method
NDE.se = outcome.Zse
NIE.se = sqrt(outcome.Mse^2*mediator.Zcoef^2 +
               outcome.Mcoef^2*mediator.Zse^2)

res = matrix(c(NDE, NIE,
               NDE.se, NIE.se,
               NDE/NDE.se, NIE/NIE.se),
               2, 3)
rownames(res) = c("NDE", "NIE")
colnames(res) = c("est", "se", "t")

res
}
```

Revisiting Example 27.3, we obtain the following estimates for the direct and indirect effects:

```r
> jobsdata = read.csv("jobsdata.csv")
> Z = jobsdata$treat
> M = jobsdata$job_seek
> Y = jobsdata$depress2
> getX = lm(treat ~ econ_hard + depress1 +
+       sex + age + occp + marital +
+       nonwhite + educ + income,
+       data = jobsdata)
> X = model.matrix(getX)[, -1]
> res = BKmediation(Z, M, Y, X)
> round(res, 3)
  est   se      t
NDE -0.037  0.042 -0.885
NIE -0.014  0.009 -1.528
```

Both the estimates for the direct and indirect effects are negative although they are insignificant.## 27.5 Sensitivity analysis

Mediation analysis relies on strong and untestable assumptions. One crucial assumption is that there is no unmeasured confounding among the treatment, mediator, and outcome. Various sensitivity analysis methods appeared in the literature. In particular, Ding and Vanderweele (2016) proposed Cornfield-type sensitivity bounds, and Zhang and Ding (2022) proposed a sensitivity analysis method tailored to the Baron–Kenny method based on linear structural equation models. These are beyond the scope of this book.

## 27.6 Homework problems

27.1 Robins and Greenland (1992)'s clarification of the units based on nested potential outcomes

Assume $(Z, M, Y)$ are all binary. Based on the joint value of

$M(1), M(0), Y(1, M_1), Y(1, M_0), Y(0, M_1), Y(0, M_0),$

how many types of units do we have?

If we assume monotonicity of $Z$ on $M$, that is,

$M(1) \geq M(0),$

then how many types of units do we have?

If we further assume monotonicity of $Z$ and $M$ on $Y$, that is,

$Y(1, m) \geq Y(0, m), \quad Y(z, 1) \geq Y(z, 0)$

for all $z$ and $m$, then how many types of units do we have?

27.2 Sequential randomization and joint randomization

Show (27.1) is equivalent to Assumptions 27.2 and 27.3.

27.3 Verifying the assumptions for mediation analysis

Show that Assumptions 27.2–27.5 hold under the data generating process in Example 27.4. Also show that if we allow $\varepsilon_M$ and $\varepsilon_Y$ to be $\varepsilon_M(z)$ and $\varepsilon_Y(z, m)$, then Assumptions 27.2–27.5 can fail.

27.4 Another set of assumptions for the mediation formula

Imai et al. (2010) invoked the following set of assumptions to derive the mediation formula.**Assumption 27.7** We have

$$
\{Y(z, m), M(z')\} \perp Z \mid X
$$

and

$$
Y(z, m) \perp M(z') \mid (Z = z', X)
$$

for all z, z', m.

**Theorem 27.2** *Under Assumption 27.7, the mediation formula in Theorem 27.1 holds.*

Prove Theorem 27.2.

27.5 Difference method and product method are identical

In the main text, we first obtain the OLS fits

$$
\begin{cases}
\hat{M}_i = \hat{\beta}_0 + \hat{\beta}_1 Z_i + \hat{\beta}_2^\top X_i, \\
\hat{Y}_i = \hat{\theta}_0 + \hat{\theta}_1 Z_i + \hat{\theta}_2 M_i + \hat{\theta}_4^\top X_i.
\end{cases}
$$

The estimate for the NIE is the product $\hat{\theta}_2\hat{\beta}_1$, which is called the product method.

Alternatively, we can first obtain OLS fits:

$$
\begin{cases}
\hat{Y}_i = \hat{\alpha}_0 + \hat{\alpha}_1 Z_i + \hat{\alpha}_1^\top X_i, \\
\hat{Y}_i = \hat{\theta}_0 + \hat{\theta}_1 Z_i + \hat{\theta}_2 M_i + \hat{\theta}_4^\top X_i.
\end{cases}
$$

Another estimate for the NIE is the difference $\hat{\alpha}_1 - \hat{\theta}_1$, which is called the difference method.

Show that $\hat{\alpha}_1 - \hat{\theta}_1 = \hat{\theta}_2 \hat{\beta}_1$.

Remark: Recall Cochran's formula in Problem 16.2.

27.6 *Natural indirect effect with a binary mediator*

Prove Corollary 27.2.

27.7 With treatment-outcome interaction on the outcome

VanderWeele (2015) suggested using the following linear models:

$$
\begin{cases}
E(M | Z, X) = \beta_0 + \beta_1 Z + \beta_2^\top X, \\
E(Y | Z, M, X) = \theta_0 + \theta_1 Z + \theta_2 M + \theta_3 ZM + \theta_4^\top X,
\end{cases}
$$

where the outcome model has the interaction term between the treatment and
the mediator.

Under the above linear models, show that

$$
\text{NDE} = \theta_1 + \theta_3 \{ \beta_0 + \beta_2^\top E(X) \}, \quad \text{NIE} = (\theta_2 + \theta_3) \beta_1.
$$How do we estimate NDE and NIE with IID data?

Remark: Consider the simple case with a binary Z and binary M. Under the linear models, the average causal effect of Z of M equals $\beta_1$, and the average causal effect of M on Y equals $\theta_2 + \theta_3 E(Z)$. Therefore, it is possible that both of these effects are positive, but the natural indirect effect is negative. For instance:

$$
\beta_1 = 1, \quad \theta_2 = 1, \quad \theta_3 = -1.5, \quad E(Z) = 0.5.
$$

This is somewhat paradoxical and can be called the *mediator paradox*. Chen et al. (2007) reported a related *surrogate endpoint paradox* or *intermediate variable paradox*.

## 27.8 Mediation analysis with continuous mediator and binary outcome

Consider the following Normal linear model for the mediator and logistic model for the binary outcome:

$$
\begin{cases} M | Z, X \sim N(\beta_0 + \beta_1 Z + \beta_2^\top X, \sigma_M^2), \\ \text{logit}\{\text{pr}(Y = 1 | Z, M, X)\} = \theta_0 + \theta_1 Z + \theta_2 M + \theta_4^\top X, \end{cases}
$$

where $\text{logit}(w) = \log\{w/(1-w)\}$ with inverse $\text{expit}(w) = (1+e^{-w})^{-1}$. Express NDE and NIE in terms of the model parameters and the distribution of X. How do we estimate NDE and NIE with IID data?

## 27.9 Mediation analysis with binary mediator and continuous outcome

Consider the following logistic model for the binary mediator and linear model for the outcome:

$$
\begin{cases} \text{logit}\{\text{pr}(M = 1 | Z, X)\} = \beta_0 + \beta_1 Z + \beta_2^\top X, \\ E(Y | Z, M, X) = \theta_0 + \theta_1 Z + \theta_2 M + \theta_4^\top X. \end{cases}
$$

Under these models, show that

$$
\text{NDE} = \theta_1, \quad \text{NIE} = \theta_2 E \{ \text{expit}(\beta_0 + \beta_1 + \beta_2^\top X) - \text{expit}(\beta_0 + \beta_2^\top X) \}.
$$

How do we estimate NDE and NIE with IID data?

## 27.10 Mediation analysis with binary mediator and outcome

Consider the following logistic models for the binary mediator and outcome:

$$
\begin{cases} \text{logit}\{\text{pr}(M = 1 | Z, X)\} = \beta_0 + \beta_1 Z + \beta_2^\top X, \\ \text{logit}\{\text{pr}(Y = 1 | Z, M, X)\} = \theta_0 + \theta_1 Z + \theta_2 M + \theta_4^\top X. \end{cases}
$$

Express NDE and NIE in terms of the model parameters and the distribution of X. How do we estimate NDE and NIE with IID data?27.11 Modify the definitions to drop the cross-world independence

Define

$$
Y(z, F_{M_{z'}|X}) = \int Y(z, m) f(M_{z'} = m | X) dm
$$

as the potential outcome under treatment *z* and a random draw from the distribution of *M*<sub>*z*'</sub> | *X*. With a discrete *M*, the definition simplifies to

$$
Y(z, F_{M_{z'}|X}) = \sum_m Y(z, m)\Pr(M_{z'} = m | X).
$$

The key difference between $Y(z, M_{z'})$ and $Y(z, F_{M_{z'}|X})$ is that $M_{z'}$ is the potential mediator for the same unit whereas $F_{M_{z'}|X}$ is a random draw from the conditional distribution of the potential mediator in the whole population. Define the natural direct and indirect effects as

$$
\text{NDE} = E\{Y(1, F_{M_0|X}) - Y(0, F_{M_0|X})\}, \quad \text{NIE} = E\{Y(1, F_{M_1|X}) - Y(1, F_{M_0|X})\}.
$$

Show that under Assumptions 27.2–27.4, the identification formulas for NDE and NIE remain the same as in the main text.

Remark: Modifying the definitions of the nested potential outcomes al-
lows us to relax the strong cross-world independence assumption but weakens
the interpretation of the natural direct and indirect effects. See VanderWeele
(2015) for more discussion and VanderWeele and Tchetgen Tchetgen (2017)
for an application to a more complex setting with time-varying treatment and
mediator.

27.12 Connections between principal stratification and mediation analysis

VanderWeele (2008) and Forastiere et al. (2018) reviewed and compared prin-
cipal stratification and mediation analysis.28

Controlled Direct Effect

The formulation of mediation analysis in Chapter 27 relies on the nested potential outcomes, and fundamentally, some nested potential outcomes are not observable in any physical experiments. If we stick to the Popperian philosophy of science reviewed in Chapter 27.2.2, we should only define causal parameters in terms of quantities that are observable under some experiments. This chapter discusses an alternative view of causal inference with an intermediate variable. In this view, we only define the direct effect but can not define the indirect effect.

**28.1 Definition of the controlled direct effect**

We view $Z$ and $M$ as two treatment factors that can be manipulated, and define potential outcomes $Y(z, m)$ for $z = 0, 1$ and $m \in \mathcal{M}$. Based on these potential outcomes, we can define the *controlled direct effect* (CDE) below.

**Definition 28.1 (CDE) Define**

$$
\mathrm{CDE}(m) = E\{Y(1, m) - Y(0, m)\}.
$$

By definition, $\mathrm{CDE}(m)$ is the average causal effect of the treatment if the intermediate variable is fixed at $m$. The parameter $\mathrm{CDE}(m)$ can capture the direct effect of the treatment holding the mediator at $m$. However, this formulation cannot capture the indirect effect. In particular, the parameter $E\{Y(z, 1) - Y(z, 0)\}$ only measures the effect of the mediator on the outcome holding the treatment at $z$. This is not a meaningful definition of the indirect effect.

**28.2 Identification and estimation of the controlled direct effect**

To identify $\mathrm{CDE}(m)$, we need the following assumption, which requires that $Z$ and $M$ are jointly randomized given $X$.**Assumption 28.1** Sequential ignorability requires

$$
Z \perp Y(z, m) | X, \quad M \perp Y(z, m) | (Z, X)
$$

or, equivalently (see Problem 27.2),

$$
(Z, M) \perp Y(z, m) | X.
$$

I will focus on the case with a binary Z and M. Mathematically, we can
just view this problem as an observational study with four treatment levels

$$
(z, m) \in \{(0,0), (0,1), (1,0), (1,1)\}.
$$

The following theorem extends the results for observational studies with a
binary treatment, identifying

$$
\mu_{zm} = E\{Y(z, m)\}
$$

based on outcome regression, IPW, and doubly robust estimation.
Define

$$
\mu_{zm}(x) = E(Y | Z = z, M = m, X = x)
$$

as the outcome mean conditional on the treatment, mediator, and covariates.
Define

$$
\begin{align*}
e_{zm}(x) &= \operatorname{pr}(Z = z, M = m | X = x) \\
&= \operatorname{pr}(Z = z | X = x)\operatorname{pr}(M = m | Z = z, X = x)
\end{align*}
$$

as the probability of the joint value of Z and M conditional on the covariates.

**Theorem 28.1** *Under Assumption 28.1, we have*

$$
\mu_{zm} = E\{\mu_{zm}(X)\} = E\left\{\frac{I(Z = z, M = m)Y}{e_{zm}(X)}\right\}.
$$

Moreover, based on the working models $e_{zm}(X, \alpha)$ and $\mu_{zm}(X, \beta)$ for $e_{zm}(X)$ and $\mu_{zm}(X)$, respectively, we have the doubly robust formula

$$
\mu_{zm}^{\text{dr}} = E\{\mu_{zm}(X, \beta)\} + E\left[ \frac{I(Z = z, M = m)\{Y - \mu_{zm}(X, \beta)\}}{e_{zm}(X, \alpha)} \right],
$$

which equals $\mu_{zm}$ if either $e_{zm}(X, \alpha) = e_{zm}(X)$ or $\mu_{zm}(X, \beta) = \mu_{zm}(X)$.

The proof of Theorem 28.1 is similar to those for the standard uncon-
founded observational studies. Problem 28.2 gives a general result. Based on
the outcome mean model, we can obtain $\hat{\mu}_{zm}(x)$ for $\mu_{zm}(x)$. Based on the
treatment model, we can obtain $\hat{e}_z(x)$ for $\mathrm{pr}(Z = z | X = x)$; based on theintermediate variable model, we can obtain $\hat{e}_m(z, x)$ for $\mathrm{pr}(M = m | Z = z, X = x)$. We can then estimate $\mu_{zm}$ by outcome regression

$$
\hat{\mu}_{zm}^{\mathrm{reg}} = n^{-1} \sum_{i=1}^{n} \hat{\mu}_{zm}(X_i),
$$

by IPW

$$
\begin{aligned} \hat{\mu}_{zm}^{\mathrm{ht}} &= n^{-1} \sum_{i=1}^{n} \frac{I(Z_i = z, M_i = m)Y_i}{\hat{e}_z(X_i)\hat{e}_m(z, X_i)}, \\ \hat{\mu}_{zm}^{\mathrm{haj}} &= \sum_{i=1}^{n} \frac{I(Z_i = z, M_i = m)Y_i}{\hat{e}_z(X_i)\hat{e}_m(z, X_i)} \bigg/ \sum_{i=1}^{n} \frac{I(Z_i = z, M_i = m)}{\hat{e}_z(X_i)\hat{e}_m(z, X_i)}, \end{aligned}
$$

or by augmented IPW

$$
\hat{\mu}_{zm}^{\mathrm{dr}} = \hat{\mu}_{zm}^{\mathrm{reg}} + n^{-1} \sum_{i=1}^{n} \frac{I(Z_i = z, M_i = m)\{Y_i - \hat{\mu}_{zm}(X_i)\}}{\hat{e}_z(X_i)\hat{e}_m(z, X_i)}.
$$

We can then estimate $\mathrm{CDE}(m)$ by $\hat{\mu}_{1m}^* - \hat{\mu}_{0m}^*$ ($*$ = reg, ht, haj, dr) and use the bootstrap to approximate the standard error.

If we are willing to assume a linear outcome model, the controlled direct effect simplifies to the coefficient of the treatment. Example 28.1 below gives the details.

**Example 28.1** *Under Assumption 28.1 and a linear outcome model,*

$$
E(Y | Z, M, X) = \theta_0 + \theta_1 Z + \theta_2 M + \theta_4^\top X,
$$

we can show that $\mathrm{CDE}(m)$ equals the coefficient $\theta_1$, which coincides with the natural direct effect in the Baron-Kenny method. I relegate the proof to *Problem 28.3*.

## 28.3 Discussion

The formulation of the controlled direct effect does not involve nested or a priori counterfactual potential outcomes, and its identification does not require the cross-world counterfactual independence assumption. The parameter $\mathrm{CDE}(m)$ can capture the direct effect of the treatment holding the mediator at $m$. However, this formulation cannot capture the indirect effect. I summarize the causal frameworks for intermediate variables in Table 28.1.

The mediation analysis framework can decompose the total effect into natural direct and indirect effects, but it requires nested potential outcomesTABLE 28.1: Causal frameworks for intermediate variables

<table><thead><tr><th>chapter</th><th>framework</th><th>direct effect</th><th>indirect effect</th></tr></thead><tbody><tr><td>26</td><td>principal stratification</td><td>τ(1, 1), τ(0, 0)</td><td>?</td></tr><tr><td>27</td><td>mediation analysis</td><td>NDE</td><td>NIE</td></tr><tr><td>28</td><td>controlled direct effect</td><td>CDE(m)</td><td>?</td></tr></tbody></table>

and cross-world independence. The principal stratification and controlled direct effect frameworks cannot define indirect effects but they do not involve nested potential outcomes and cross-world independence. Moreover, the principal stratification framework does not necessarily require that $M$ lies on the causal pathway from the treatment to the outcome. However, its identification and estimation involves disentangling mixture distributions, which is a nontrivial task in statistics.

## 28.4 Homework problems

### 28.1 CDE and NDE

Show that under cross-world independence $Y(z, m) \perp M(z') | X$ for all $z, z'$ and $m$, the conditional controlled direct effect $\text{CDE}(m | x) = E\{Y(1, m) - Y(0, m) | X = x\}$ and the conditional natural direct effect $\text{NDE}(x) = E\{Y(1, M_0) - Y(0, M_0) | X = x\}$ have the following relationship:

$$
\text{NDE}(x) = \sum_m \text{CDE}(m | x)\text{pr}(M_0 = m | X = x)
$$

for a discrete $M$. Without the cross-world independence, does this relationship still hold in general?

### 28.2 Observational studies with a multi-valued treatment

Theorem 28.1 is a special case of the following theorem for unconfounded observational studies with multiple treatment levels (Imai and Van Dyk, 2004; Cattaneo, 2010). Below, I state the general problem and theorem.

Consider an observational study with a multi-valued treatment $Z \in \{1, \dots, K\}$, covariates $X$, and outcome $Y$. Unit $i$ has $K$ potential outcomes $Y_i(1), \dots, Y_i(K)$ corresponding to the $K$ treatment levels. In general, we can define causal effect in terms of contrasts of the potential outcomes:

$$
\tau_C = \sum_{k=1}^{K} C_k E\{Y(k)\}
$$where $\sum_{k=1}^{K} C_k = 0$. The canonical choice of the pairwise comparison

$$
\tau_{k,k'} = E\{Y(k) - Y(k')\}.
$$

Therefore, the key is to identify and estimate the means of the potential outcomes $\mu_k = E\{Y(k)\}$ under the ignorability and overlap assumptions below based on IID data of $(Z_i, X_i, Y_i)_{i=1}^n$.

**Assumption 28.2** $Z \perp \{Y(1), \dots, Y(K)\} | X$ and $\text{pr}(Z = k | X) > 0$ for $k = 1, \dots, K$.

Define the generalized propensity score as

$$
e_k(X) = \text{pr}(Z = k | X),
$$

and define the conditional outcome mean as

$$
\mu_k(X) = E(Y | Z = k, X)
$$

for $k = 1, \dots, K$. We have the following theorem.

**Theorem 28.2** *Under Assumption 28.2, we have*

$$
\mu_k = E\{\mu_k(X)\} = E\left\{\frac{I(Z = k)Y}{e_k(X)}\right\}.
$$

Moreover, based on the working models $e_k(X, \alpha)$ and $\mu_k(X, \beta)$ for $e_k(X)$ and $\mu_k(X)$, respectively, we have the doubly robust formula

$$
\mu_k^{\text{dr}} = E\{\mu_k(X, \beta)\} + E\left[\frac{I(Z = k)\{Y - \mu_k(X, \beta)\}}{e_k(X, \alpha)}\right],
$$

which equals $\mu_k$ if either $e_k(X, \alpha) = e_k(X)$ or $\mu_k(X, \beta) = \mu_k(X)$.

Prove Theorem 28.2.

**Remark:** Theorem 28.1 is a special case of Theorem 28.2 if we view the $(Z, M)$ in Theorem 28.1 as a treatment with four levels. The $\text{CDE}(m)$ is a special case of $\tau_C$.

## 28.3 CDE in the linear outcome model

Show that under Assumption 28.1, if $E(Y | Z, M, X) = \theta_0 + \theta_1 Z + \theta_2 M + \theta_4^\top X$, then

$$
\text{CDE}(m) = \theta_1
$$

for all $m$; if $E(Y | Z, M, X) = \theta_0 + \theta_1 Z + \theta_2 M + \theta_3 ZM + \theta_4^\top X$, then

$$
\text{CDE}(m) = \theta_1 + \theta_3 m.
$$28.4 CDE in the logistic outcome model

Show that for a binary outcome, under Assumption 28.1, if

$$
\operatorname{logit}\{\operatorname{pr}(Y = 1 | Z, M, X)\} = \theta_0 + \theta_1 Z + \theta_2 M + \theta_4^\top X,
$$

then

$$
\mathrm{CDE}(m) = E\{\mathrm{expit}(\theta_0 + \theta_1 + \theta_2 m + \theta_4^\top X) - \mathrm{expit}(\theta_0 + \theta_2 m + \theta_4^\top X)\};
$$

if

$$
\operatorname{logit}\{\operatorname{pr}(Y = 1 | Z, M, X)\} = \theta_0 + \theta_1 Z + \theta_2 M + \theta_3 ZM + \theta_4^\top X,
$$

then

$$
\mathrm{CDE}(m) = E\{\mathrm{expit}(\theta_0 + \theta_1 + \theta_2 m + \theta_3 m + \theta_4^\top X) - \mathrm{expit}(\theta_0 + \theta_2 m + \theta_4^\top X)\}.
$$

28.5 Recommended reading

Nguyen et al. (2021) provided a friendly review of the topics in Chapters
27 and 28.29

Time-Varying Treatment and Confounding

Studies with time-varying treatments are common in biomedical and social sciences. James Robins championed the research in biostatistics. A classic example is that HIV patients may take azidothymidine, an antiretroviral medication, on and off over time (Robins et al., 2000; Hernán et al., 2000). Similar problems also exist in other fields. In education, a classic example is that students may receive different types of instructions over time (Hong and Rau-denbush, 2008). In political science, a classic example is that candidates continuously recalibrate their campaign strategy based on time-varying polls and opponent actions (Blackwell, 2013).

Causal inference with time-varying treatments is not a simple extension of causal inference with a treatment at a single time point. The main challenge is time-varying confounding. Even if we assume all time-varying confounders are observed, we still face statistical challenges in adjusting for those confounders. On the one hand, we should stratify on these confounders to adjust for confounding; on the other hand, stratifying on post-treatment variables will cause bias. Due to these two conflicting goals, causal inference with time-varying treatments and confounding requires more sophisticated statistical methods. It is the main topic of this chapter.

To minimize the notational burden, I will use the setting with treatments at two time points to convey the most important ideas. Extensions to treatments at multiple time points can be conceptually straightforward although technical complexities will arise in finite samples. I will discuss the complexities and relegate general results to Problems 29.7–29.10.

29.1 Basic setup and sequential ignorability

Start with treatments at two time points. The temporal order (not the causal diagram) of the variables with two time points is below:

$$
X_0 \to Z_1 \to X_1 \to Z_2 \to Y
$$

where

• $X_0$ denotes the baseline pre-treatment covariates;![[_resources/Ding - 2023 - A First Course in Causal Inference_Part9/4eadc370931189a71a8e8ea6616c78d0_MD5.jpg]]

FIGURE 29.1: Assumption 29.1 holds without unmeasured confounding *U* between *X*₁ and *Y*. The causal diagram conditions on the pre-treatment co-variates *X*₀.

* Z₁ denotes the treatment at time point 1;
* X₁ denotes the time-varying covariates between the treatments at time points 1 and 2;
* Z₂ denotes the treatment at time point 2;
* Y denotes the outcome.

With binary treatments (Z₁, Z₂), each unit has four potential outcomes

$Y(z_1, z_2)$ for $z_1, z_2 = 0, 1$.

The observed outcome equals

$$
Y = Y(Z_1, Z_2) = \sum_{z_1=0,1} \sum_{z_2=0,1} 1(Z_1 = z_1)1(Z_2 = z_2)Y(z_1, z_2).
$$

I will focus on the canonical setting with sequential ignorability, that is, the treatments are sequentially randomized given the observed history.

**Assumption 29.1 (sequential ignorability) (1) Z₁ is randomized given**
**X₀:**

$$
Z_1 \perp Y(z_1, z_2) \mid X_0 \text{ for } z_1, z_2 = 0, 1.
$$

(2) *Z*₂ *is randomized given* (*Z*₁, *X*₁, *X*₀):

$$
Z_2 \perp Y(z_1, z_2) \mid (Z_1, X_1, X_0) \text{ for } z_1, z_2 = 0, 1.
$$

Figure 29.1 is a simple causal diagram corresponding to Assumption 29.1, which does not contain any unmeasured confounding.

Figure 29.2 is a more complex causal diagram corresponding to Assump-
tion 29.1. Sequential ignorability rules out only the confounding between the
treatment (Z₁, Z₂) and the outcome Y, but allows for unmeasured confound-
ing between the time-varying covariate X₁ and the outcome Y. The possible
existence of *U* causes many subtle issues even under sequential ignorability.![[_resources/Ding - 2023 - A First Course in Causal Inference_Part9/79b9902e32d5f0114768b533b4382f48_MD5.jpg]]

FIGURE 29.2: Assumption 29.1 holds with unmeasured confounding between $X_1$ and $Y$. The causal diagram conditions on the pre-treatment covariates $X_0$.

**29.2 g-formula and outcome modeling**

Recall the outcome-based identification formula with a treatment at a single time point:

$$
E\{Y(z)\} = E\{E(Y | Z = z, X)\}.
$$

With discrete $X$, it reduces to

$$
E\{Y(z)\} = \sum_{x} E(Y | Z = z, X = x)\mathrm{pr}(X = x);
$$

with continuous $X$, it reduces to

$$
E\{Y(z)\} = \int E(Y | Z = z, X = x)f(x)dx.
$$

The following result extends it to the setting with treatments at two time points.

**Theorem 29.1** *Under Assumption 29.1,*

$$
E\{Y(z_1, z_2)\} = E\left[E\{E(Y | z_2, z_1, X_1, X_0) | z_1, X_0\}\right]. \quad (29.1)
$$

In Theorem 29.1, I simplify the notation '$Z_2 = z_2$' to "$z_2$". To void complex formulas in this chapter, I will use the lowercase letter to represent the event that the random variable takes the corresponding value. With discrete $X_0$ and $X_1$, the identification formula (29.1) reduces to

$$
E\{Y(z_1, z_2)\} = \sum_{x_0} \sum_{x_1} E(Y | z_2, z_1, x_1, x_0)\mathrm{pr}(x_1 | z_1, x_0)\mathrm{pr}(x_0); \quad (29.2)
$$

with continuous $X_0$ and $X_1$, the identification formula (29.1) reduces to

$$
E\{Y(z_1, z_2)\} = \iint E(Y | z_2, z_1, x_1, x_0)f(x_1 | z_1, x_0)f(x_0)dx_1dx_0. \quad (29.3)
$$Compare (29.2) with the formula based on the law of total probability to gain
more insights:

$$
E(Y) = \sum_{x_0} \sum_{z_1} \sum_{x_1} \sum_{z_2} E(Y \mid z_2, z_1, x_1, x_0) \\
\qquad \mathrm{pr}(z_2 \mid z_1, x_1, x_0) \mathrm{pr}(x_1 \mid z_1, x_0) \mathrm{pr}(z_1 \mid x_0) \mathrm{pr}(x_0). \quad (29.4)
$$

Erasing the probabilities of $Z_2$ and $Z_1$ in (29.4), we can obtain the formula (29.3). This is intuitive because the potential outcome $Y(z_1, z_2)$ has the meaning of fixing $Z_1$ and $Z_2$ at $z_1$ and $z_2$, respectively.

Robins called (29.2) and (29.3) the g-formulas. Now I will prove Theorem
29.1.

**Proof of Theorem 29.1:** By the tower property,

$$
E\{Y(z_1, z_2)\} = E[E\{Y(z_1, z_2) | X_0\}],
$$

so I will focus on $E\{Y(z_1, z_2) | X_0\}$. By Assumption 29.1(1) and the tower property,

$$
\begin{align*}
E\{Y(z_1, z_2) | X_0\} &= E\{Y(z_1, z_2) | z_1, X_0\} \\
&= E[E\{Y(z_1, z_2) | z_1, X_1, X_0\} | z_1, X_0].
\end{align*}
$$

By Assumption 29.1(2),

$$
\begin{align*}
E\{Y(z_1, z_2) | X_0\} &= E[E\{Y(z_1, z_2) | z_2, z_1, X_1, X_0\} | z_1, X_0] \\
&= E[E\{Y | z_2, z_1, X_1, X_0\} | z_1, X_0].
\end{align*}
$$

The formula (29.1) follows.

![[_resources/Ding - 2023 - A First Course in Causal Inference_Part9/8f2361fb3a541c7b1a0a366c174aff4e_MD5.jpg]]

**29.2.1 Plug-in estimation based on outcome modeling**

The g-formulas (29.2) and (29.3) suggest that to estimate the means of the potential outcomes, we need to model $E(Y | z_2, z_1, x_1, x_0)$, $\mathrm{pr}(x_1 | z_1, x_0)$ and $\mathrm{pr}(x_0)$. With these fitted models, we can plug them into the g-formulas.

With some special functional forms, this task can be simplified. Example
29.1 below gives the results under a linear model for the outcome.

**Example 29.1** Assume a linear outcome model

$$
E(Y \mid z_2, z_1, x_1, x_0) = \beta_0 + \beta_1 z_2 + \beta_2 z_1 + \beta_3 x_1 + \beta_4 x_0.
$$

We can verify that

$$
\begin{align*}
E\{Y(z_1, z_2)\} &= \sum_{x_0} \sum_{x_1} (\beta_0 + \beta_1 z_2 + \beta_2 z_1 + \beta_3 x_1 + \beta_4 x_0) \mathrm{pr}(x_1 \mid z_1, x_0) \mathrm{pr}(x_0) \\
&= \beta_0 + \beta_1 z_2 + \beta_2 z_1 + \beta_3 \sum_{x_0} E(X_1 \mid z_1, x_0) \mathrm{pr}(x_0) + \beta_4 E(X_0).
\end{align*}
$$Define

$$
E\{X_1(z_1)\} = \sum_{x_0} E(X_1 | z_1, x_0)\Pr(x_0) \quad (29.5)
$$

to simplify the formula as

$$
E\{Y(z_1, z_2)\} = \beta_0 + \beta_1 z_1 + \beta_2 z_2 + \beta_3 E\{X_1(z_1)\} + \beta_4 E\{X_0\}.
$$

In (29.5), I introduce the potential outcome of $X_1$ under the treatment $Z_1 = z_1$
at time point 1. It is reasonable because the right-hand side of (29.5) is the
identification formula of $E\{X_1(z_1)\}$ under ignorability $X_1(z_1) \perp Z_1 | X_0$ for
$z_1 = 0, 1$. We do not really need the potential outcome $X_1(z_1)$ and the ignor-
ability, but it is a convenient notation and matches our previous discussion.

Define $\tau_{Z_1 \to X_1} = E\{X_1(1) - X_1(0)\}$. We can verify that

$$
\begin{align*}
E\{Y(1,0) - Y(0,0)\} &= \beta_2 + \beta_3 \tau_{Z_1 \to X_1}, \\
E\{Y(0,1) - Y(0,0)\} &= \beta_1, \\
E\{Y(1,1) - Y(0,0)\} &= \beta_1 + \beta_2 + \beta_3 \tau_{Z_1 \to X_1}.
\end{align*}
$$

Therefore, we can estimate the effect of (Z₁, Z₂) on Y based on the above for-
mulas by first estimating the regression coefficients βs and the average causal
effect of Z₁ on X₁ using standard methods.

If we further assume a linear model for $X_1$

$$
E(X_1 | Z_1, X_0) = \gamma_0 + \gamma_1 z_1 + \gamma_2 x_0,
$$

then $\tau_{Z_1 \to X_1} = \gamma_1$ and

$$
E\{Y(1,0) - Y(0,0)\} = \beta_2 + \beta_3 \gamma_1, \quad (29.6)
$$

$$
E\{Y(0,1) - Y(0,0)\} = \beta_1, \tag{29.7}
$$

$$
E\{Y(1,1) - Y(0,0)\} = \beta_1 + \beta_2 + \beta_3\gamma_1. \quad (29.8)
$$

The formulas in (29.6)-(29.8) are intuitive based on Figure 29.3 with regres-
sion coefficients on the arrows. In (29.6), the effect of Z₁ equals the sum of
the coefficients on the paths Z₁ → Y and Z₁ → X₁ → Y; in (29.7), the effect
of Z₂ equals the coefficient on the path Z₂ → Y; in (29.8), the total effect of
(Z₁, Z₂) equals the sum of the coefficients on the paths Z₁ → Y, Z₁ → X₁ → Y
and Z₂ → Y.

However, Robins and Wasserman (1997) pointed out a surprising drawback
of the plug-in estimation based on outcome modeling. They showed that with
model misspecification in this strategy, data analyzers may falsely reject the
null hypothesis of zero causal effect of (Z₁, Z₂) on Y even when the true
effect is zero in the data-generating process. They called it the *g-null paradox*.
Perhaps surprisingly, they show that the g-null paradox may even arise in the
simple linear outcome model in Example 29.1. McGrath et al. (2021) revisited
this paradox. See Problem 29.1 for more details.![[_resources/Ding - 2023 - A First Course in Causal Inference_Part9/80c2a785c8b63f34cb2fafaa214c9d59_MD5.jpg]]

FIGURE 29.3: A linear causal diagram with coefficients on the arrows, conditional on the pre-treatment covariates $X_0$.

### 29.2.2 Recursive estimation based on outcome modeling

The plug-in estimation in Section 29.2.1 involves modeling the time-varying confounder $X_1$ and causes the unpleasant g-null paradox. It is not a desirable method.

Recall the outcome regression estimator with a treatment at a single time based on $E\{Y(z)\} = E\{E(Y | Z = z, X)\}$. We first fit a model of $Y$ on $X$ using the subset of the data with $Z = z$, and obtain the fitted values $\hat{Y}_i(z)$ for all units. We then obtain the estimator

$$
\hat{E}\{Y(z)\} = n^{-1} \sum_{i=1}^{n} \hat{Y}_{i}(z).
$$

Similarly, the recursive expectation formula in (29.1) motivates a simpler method for estimation. Start from the inner conditional expectation, denoted by

$$
\tilde{Y}_2(z_1, z_2) = E(Y | Z_2 = z_2, Z_1 = z_1, X_1, X_0).
$$

We can fit a model of $Y$ on $(X_1, X_0)$ using the subset of the data with $(Z_2 = z_2, Z_1 = z_1)$, and obtain the fitted values $\hat{Y}_{2i}(z_1, z_2)$ for all units. Move on to outer conditional expectation, denoted by

$$
\tilde{Y}_1(z_1, z_2) = E\{\tilde{Y}_2(z_1, z_2) | Z_1 = z_1, X_0\}.
$$

We can fit a model of $\hat{Y}_2(z_1, z_2)$ on $X_0$ using the subset of data with $Z_1 = z_1$, and obtain the fitted values $\hat{Y}_{1i}(z_1, z_2)$ for all units. The final estimator for $E\{Y(z_1, z_2)\}$ is then

$$
\hat{E}\{Y(z_1, z_2)\} = n^{-1} \sum_{i=1}^{n} \hat{Y}_{1i}(z_1, z_2).
$$

The above recursive estimation does not involve fitting a model for $X_1$ and avoids the g-null paradox. See Problem 29.2 for a special case. However, the estimator based on recursive regression is not easy to implement because it involves modeling variables that do not correspond to the natural structure of the causal diagram, e.g., $\tilde{Y}_2(z_1, z_2)$.29.3 Inverse propensity score weighting

Recall the IPW identification formula with a treatment at a single time point:

$$
E\{Y(z)\} = E \left\{ \frac{1(Z = z)Y}{\mathrm{pr}(Z = z | X)} \right\}.
$$

The following result extends it to the setting with a treatment at two time
points. Define

$$
e(z_1, X_0) = \mathrm{pr}(Z_1 = z_1 | X_0)
$$

and

$$
e(z_2, Z_1, X_1, X_0) = \mathrm{pr}(Z_2 = z_2 | Z_1, X_1, X_0)
$$

as the propensity scores at time points 1 and 2, respectively.

**Theorem 29.2** *Under Assumption 29.1,*

$$
E\{Y(z_1, z_2)\} = E \left\{ \frac{1(Z_1 = z_1)1(Z_2 = z_2)Y}{e(z_1, X_0)e(z_2, Z_1, X_1, X_0)} \right\}. \quad (29.9)
$$

Theorem 29.2 reveals the omitted overlap assumption:

$$
0 < e(z_1, X_0) < 1, \quad 0 < e(z_2, Z_1, X_1, X_0) < 1
$$

for all $z_1$ and $z_2$. If some propensity scores are 0 or 1, then the identification formula (29.9) blows up to infinity.

**Proof of Theorem 29.2:** Conditioning on $(Z_1, X_1, X_0)$ and using Assumption 29.1(2), we can simplify the right-hand side of (29.9) as

$$
\begin{align*}
&= E \left\{ \frac{1(Z_1 = z_1) 1(Z_2 = z_2) Y(z_1, z_2)}{\mathrm{pr}(Z_1 = z_1 | X_0) \mathrm{pr}(Z_2 = z_2 | Z_1, X_1, X_0)} \right\} \\
&= E \left\{ \frac{1(Z_1 = z_1) \mathrm{pr}(Z_2 = z_2 | Z_1, X_1, X_0) E(Y(z_1, z_2) | Z_1, X_1, X_0)}{\mathrm{pr}(Z_1 = z_1 | X_0) \mathrm{pr}(Z_2 = z_2 | Z_1, X_1, X_0)} \right\} \\
&= E \left\{ \frac{1(Z_1 = z_1)}{\mathrm{pr}(Z_1 = z_1 | X_0)} E(Y(z_1, z_2) | Z_1, X_1, X_0) \right\} \\
&= E \left\{ \frac{1(Z_1 = z_1)}{\mathrm{pr}(Z_1 = z_1 | X_0)} Y(z_1, z_2) \right\}, \tag{29.10}
\end{align*}
$$

where (29.10) follows from the tower property.

Conditioning on $X_0$ and using Assumption 29.1(1), we can simplify the
right-hand side of (29.10) as

$$
\[
\begin{aligned}
& E \left\{ \frac{\mathrm{pr}(Z_1 = z_1 | X_0)}{\mathrm{pr}(Z_1 = z_1 | X_0)} E(Y(z_1, z_2) | X_0) \right\} \\
&= E \{ E(Y(z_1, z_2) | X_0) \} \\
&= E\{Y(z_1, z_2)\},
\end{aligned}
\]
$$where, again, the last line follows from the tower property. □

The estimator based on IPW is much simpler which only involves modeling two binary treatment indicators. First, we can fit a model of $Z_1$ on $X_0$ to obtain the fitted values $\hat{e}_1(z_1, X_{0i})$ and fit a model of $Z_2$ on $(Z_1, X_1, X_0)$ to obtain the fitted values $\hat{e}_2(z_2, Z_{1i}, X_{1i}, X_{0i})$ for all units. Then, we obtain the following IPW estimator:

$$
\hat{E}^{\text{ht}}\{Y(z_1, z_2)\} = n^{-1} \sum_{i=1}^{n} \frac{1(Z_{1i} = z_1)1(Z_{2i} = z_2)Y_i}{\hat{e}_1(z_1, X_{0i})\hat{e}_2(z_2, Z_{1i}, X_{1i}, X_{0i})}
$$

Similar to the discussion in Chapter 11, the HT estimator is not invariant to the location shift of the outcome and suffers from instability in finite samples. A modified Hajek-type estimator is $\hat{E}^{\text{haj}}\{Y(z_1, z_2)\} = \hat{E}^{\text{ht}}\{Y(z_1, z_2)\}/\hat{1}^{\text{ht}}(z_1, z_2)$, where

$$
\hat{1}^{\text{ht}}(z_1, z_2) = n^{-1} \sum_{i=1}^{n} \frac{1(Z_{1i} = z_1)1(Z_{2i} = z_2)}{\hat{e}_1(z_1, X_{0i})\hat{e}_2(z_2, Z_{1i}, X_{1i}, X_{0i})}
$$

## 29.4 Multiple time points

Extending the estimation strategies in Sections 29.2 and 29.3 is not immediate with multiple time points. Even with a binary treatment and $K$ time points, the number of treatment combinations grows exponentially with $K$ (for example, $2^5 = 32$ and $2^{10} = 1024$). Consequently, the outcome regression and IPW estimators in Sections 29.2 and 29.3 are not feasible in finite samples because they require enough data for every combination of the treatment levels.

### 29.4.1 Marginal structural model

A powerful approach is based on the marginal structural model (MSM) (Robins et al., 2000; Hernán et al., 2000). For simplicity of notation, I will only present the MSM with $K = 2$ although its main use is in the general case.

**Definition 29.1 (MSM)** *The marginal mean of $Y(z_1, z_2)$ equals*

$$
E\{Y(z_1, z_2)\} = f(z_1, z_2; \beta).
$$

A leading example of Definition 29.1 is $E\{Y(z_1, z_2)\} = \beta_0 + \beta_1 z_1 + \beta_2 z_2$. It is also straightforward to include the baseline covariates in the model. Definition 29.2 below extends Definition 29.1.

**Definition 29.2 (MSM with baseline covariates)** *The mean of $Y(z_1, z_2)$ conditional on $X_0$ equals*

$$
E\{Y(z_1, z_2) | X_0\} = f(z_1, z_2, X_0; \beta).
$$A leading example of Definition 29.2 is

$$
E\{Y(z_1, z_2) | X_0\} = \beta_0 + \beta_1 z_1 + \beta_2 z_2 + \beta_3^\top X_0. \quad (29.11)
$$

If we observe all the potential outcomes, we can solve $\beta$ from the following minimization problem:

$$
\beta = \arg \min_b \sum_{z_2} \sum_{z_1} E\{Y(z_1, z_2) - f(z_1, z_2, X_0; b)\}^2. \quad (29.12)
$$

For simplicity, I focus on the least squares formulation. We can also extend the discussion to general models; see Problem 29.4 for an example of the logistic model.

Under sequential ignorability, we can solve $\beta$ from the following minimiza-
tion problem that only involves observables.

**Theorem 29.3 (IPW under MSM) Under Assumption 29.1 and Definition 29.2, the $\beta$ in (29.12) equals**

$$
\beta = \arg \min_b \sum_{z_2} \sum_{z_1} E \left[ \frac{1(Z_1 = z_1) 1(Z_2 = z_2)}{e(z_1, X_0) e(z_2, Z_1, X_1, X_0)} \{Y - f(z_1, z_2, X_0; b)\}^2 \right].
$$

The proof of Theorem 29.3 is similar to that of Theorem 29.2. I relegate
it to Problem 29.3.

Theorem 29.3 implies a simple estimation strategy based on weighted re-
gressions. For instance, under (29.11), we can fit WLS of $Y_i$ on $(1, Z_{1i}, Z_{2i}, X_{0i})$
with weights $\hat{e}_1^{-1}(Z_{1i}, X_{0i})\hat{e}_{2i}^{-1}(Z_{2i}, Z_{i1}, X_{1i}, X_{0i})$.

**29.4.2 Structural nested model**

A key problem of IPW is that it is not applicable if the overlap assumption
is violated. To address this challenge, Robins proposed the structural nested
model. Again, to simplify the presentation, I only review the version with two
time points.

**Definition 29.3 (structural nested model) The conditional effect at time**
*point 1 is*

$$
E\{Y(z_1, 0) - Y(0, 0) \mid Z_1 = z_1, X_0\} = g_1(z_1, X_0; \beta)
$$

for all $z_1$, and the conditional effect at time point 2 is

$$
E\{Y(z_1, z_2) - Y(z_1, 0) \mid Z_2 = z_2, Z_2 = z_1, X_1, X_0\} = g_2(z_2, z_1, X_1, X_0; \beta)
$$

for all $z_1, z_2$.In Definition 29.3, two logical restrictions are

$$
g_1(0, X_0; \beta) = 0
$$

and

$$
g_2(0, z_1, X_1, X_0; \beta) = 0 \text{ for all } z_1.
$$

Two leading choices of Definition 29.3 are below.

**Example 29.2** Assume

$$
\begin{cases} g_1(z_1, X_0; \beta) = \beta_1 z_1, \\ g_2(z_2, z_1, X_1, X_0; \beta) = (\beta_2 + \beta_3 z_1) z_2. \end{cases}
$$

**Example 29.3** Assume

$$
\begin{cases} g_1(z_1, X_0; \beta) = (\beta_1 + \beta_2^\top X_0) z_1, \\ g_2(z_2, z_1, X_1, X_0; \beta) = (\beta_3 + \beta_4 z_1 + \beta_5^\top X_1) z_2. \end{cases}
$$

Compare Definitions 29.2 and 29.3. The structural nested model allows for adjusting for the baseline covariates as well as the time-varying covariates whereas the marginal structural model only allows for adjusting for the baseline covariates. The estimation under Definition 29.3 is more involved. A strategy is to estimate the parameter based on estimating equations.

I first introduce two important building blocks for discussing the estimation. Define

$$
U_2(\beta) = Y - g_2(Z_2, Z_1, X_1, X_0; \beta)
$$

and

$$
U_1(\beta) = Y - g_2(Z_2, Z_1, X_1, X_0; \beta) - g_1(Z_1, X_0; \beta).
$$

They are not directly computable from the data because they depend on the true value of the parameter $\beta$. At the true value, they have the following properties.

**Lemma 29.1** Under Assumption 29.1 and Definition 29.3, we have

$$
\begin{aligned} E\{U_2(\beta) | Z_2, Z_1, X_1, X_0\} &= E\{U_2(\beta) | Z_1, X_1, X_0\} \\ &= E\{Y(Z_1, 0) | Z_1, X_1, X_0\} \end{aligned}
$$

and

$$
\begin{aligned} E\{U_1(\beta) | Z_1, X_0\} &= E\{U_1(\beta) | X_0\} \\ &= E\{Y(0, 0) | X_0\}. \end{aligned}
$$

Lemma 29.1 involves a subtle notation $Y(Z_1, 0)$ because $Z_1$ is random. It should be read as $Y(Z_1, 0) = Z_1 Y(1, 0) + (1 - Z_1) Y(0, 0)$. Based on the definitions and Lemma 29.1, $U_1(\beta)$ acts as the control potential outcome beforereceiving any treatment and $U_2(\beta)$ acts as the control potential outcome after
receiving the treatment at time point 1.

**Proof of Lemma 29.1: Part 1.** We have

$$
\begin{align*}
& E\{U_2(\beta) \mid Z_2 = 1, Z_1, X_1, X_0\} \\
&= E\{Y(Z_1, 1) - g_2(1, Z_1, X_1, X_0; \beta) \mid Z_2 = 1, Z_1, X_1, X_0\} \\
&= E\{Y(Z_1, 0) \mid Z_2 = 1, Z_1, X_1, X_0\}
\end{align*}
$$

and

$$
\begin{align*}
& E\{U_2(\beta) \mid Z_2 = 0, Z_1, X_1, X_0\} \\
&= E\{Y(Z_1, 0) - g_2(0, Z_1, X_1, X_0; \beta) \mid Z_2 = 0, Z_1, X_1, X_0\} \\
&= E\{Y(Z_1, 0) \mid Z_2 = 0, Z_1, X_1, X_0\}
\end{align*}
$$

so

$$
\begin{align*}
E\{U_2(\beta) \mid Z_2, Z_1, X_1, X_0\} &= E\{Y(Z_1, 0) \mid Z_2, Z_1, X_1, X_0\} \\
&= E\{Y(Z_1, 0) \mid Z_1, X_1, X_0\}
\end{align*}
$$

where the last identity follows from sequential ignorability. Since the last term
does not depend on $Z_2$, we also have

$$
E\{U_2(\beta) \mid Z_2, Z_1, X_1, X_0\} = E\{U_2(\beta) \mid Z_1, X_1, X_0\}.
$$

**Part 2.** Using the above results, we have

$$
\begin{align*}
& E\{U_1(\beta) \mid Z_1, X_0\} \\
&= E\{U_2(\beta) - g_1(Z_1, X_0; \beta) \mid Z_1, X_0\} && \text{(Definition 29.3)} \\
&= E[E\{U_2(\beta) - g_1(Z_1, X_0; \beta) \mid X_1, Z_1, X_0\} \mid Z_1, X_0] && \text{(tower property)} \\
&= E[E\{Y(Z_1, 0) - g_1(Z_1, X_0; \beta) \mid X_1, Z_1, X_0\} \mid Z_1, X_0] && \text{(part 1)} \\
&= E\{Y(Z_1, 0) - g_1(Z_1, X_0; \beta) \mid Z_1, X_0\} && \text{(tower property)} \\
&= E\{Y(0, 0) \mid Z_1, X_0\} && \text{(Definition 29.3)} \\
&= E\{Y(0, 0) \mid X_0\} && \text{(sequential ignorability).}
\end{align*}
$$

Since the last term does not depend on $Z_1$, we also have

$$
E\{U_1(\beta) \mid Z_1, X_0\} = E\{U_1(\beta) \mid X_0\}.
$$

With Lemma 29.1, we can prove Theorem 29.4 below.

**Theorem 29.4** *Under Assumption 29.1 and Definition 29.3,*

$$
E[h_2(Z_1, X_1, X_0)\{Z_2 - e(1, Z_1, X_1, X_0)\}U_2(\beta)] = 0
$$

and

$$
E[h_1(X_0)\{Z_1 - e(1, X_0)\}U_1(\beta)] = 0.
$$

for any functions $h_1$ and $h_2$, provided that the moments exist.**Proof of Theorem 29.2:** Use the tower property by conditioning on $(Z_2, Z_1, X_1, X_0)$ and Lemma 29.1 to obtain

$$
\begin{aligned}
& E[h_2(Z_1, X_1, X_0)\{Z_2 - e(1, Z_1, X_1, X_0)\}E\{U_2(\beta) \mid Z_2, Z_1, X_1, X_0\}] \\
&= E[h_2(Z_1, X_1, X_0)\{Z_2 - e(1, Z_1, X_1, X_0)\}E\{U_2(\beta) \mid Z_1, X_1, X_0\}].
\end{aligned}
$$

Use the tower property by conditioning on $(Z_1, X_1, X_0)$ to show that the last identity equals 0 because $E\{Z_2 - e(1, Z_1, X_1, X_0) \mid Z_1, X_1, X_0\} = 0$.

Similarly, use the tower property by conditioning on $(Z_1, X_0)$ and Lemma 29.1 to obtain

$$
\begin{aligned}
& E[h_1(X_0)\{Z_1 - e(1, X_0)\}E\{U_1(\beta) \mid Z_1, X_0\}] \\
&= E[h_1(X_0)\{Z_1 - e(1, X_0)\}E\{U_1(\beta) \mid X_0\}].
\end{aligned}
$$

Use the tower property by conditioning on $X_0$ to show that the last identity equals 0 because $E\{Z_1 - e(1, X_0) \mid X_0\} = 0$. □

To use Theorem 29.4, we must specify $h_1$ and $h_2$ to ensure that there are enough equations for solving $\beta$. Example 29.4 below revisits Example 29.2.

**Example 29.4** Under Example 29.2, we can choose $h_1 = 1$ and $h_2 = (1, Z_1)$ to obtain

$$
\begin{aligned}
& E[\{Z_2 - e(1, Z_1, X_1, X_0)\}\{Y - (\beta_2 + \beta_3 Z_1)Z_2\}] = 0, \\
& E[Z_1\{Z_2 - e(1, Z_1, X_1, X_0)\}\{Y - (\beta_2 + \beta_3 Z_1)Z_2\}] = 0, \\
& E[\{Z_1 - e(1, X_0)\}\{Y - (\beta_2 + \beta_3 Z_1)Z_2 - \beta_1 Z_1\}] = 0.
\end{aligned}
$$

We can then solve for the $\beta$'s from the above linear equations; see Problem 29.6. A natural question is whether alternative choices of $(h_1, h_2)$ can lead to more efficient estimators. The answer is yes. For example, we can choose many $(h_1, h_2)$ and use the generalized method of moment (Hansen, 1982). The technical details are beyond this book.

Naimi et al. (2017) and Vansteelandt and Joffe (2014) provided tutorials on the structural nested models.

## 29.5 Homework problems

### 29.1 g-null paradox

Consider the simple causal diagram in Figure 29.4 without pre-treatment covariates $X_0$ and without the arrows from $(Z_1, Z_2)$ to $Y$. So the effect of $(Z_1, Z_2)$ on $Y$ is zero.

Revisit Example 29.1. Show that the expectation $E\{Y(z_1, z_2)\}$ does not depend on $(z_1, z_2)$ if

$$
\beta_1 = \beta_2 = 0 \text{ and } \beta_3 = 0
$$![[_resources/Ding - 2023 - A First Course in Causal Inference_Part9/82b2c3645f07bab0388f9e3b9b8b1075_MD5.jpg]]

FIGURE 29.4: With unmeasured confounding between $X_1$ and $Y$. The causal diagram ignores the pre-treatment covariates $X_0$.

or

$\beta_1 = \beta_2 = 0$ and $E\{X_1(z_1)\}$ does not depend on $z_1$.

holds.

Remark: However, $\beta_3 = 0$ in the first condition rules out the dependence of $Y$ on $X_1$, contradicting the existence of unmeasured confounder $U$ between $X_1$ and $Y$; the independence of $E\{X_1(z_1)\}$ on $z_1$ rules out the dependence of $X_1$ on $Z_1$, contradicting with the existence of the arrow from $Z_1$ on $X_1$. That is, if there is an unmeasured confounder $U$ between $X_1$ and $Y$ and there is an arrow from $Z_1$ on $X_1$, then the formula of $E\{Y(z_1, z_2)\}$ in Example 29.1 must depend on $(z_1, z_2)$, which leads to a contradiction with the absence of arrows from $(Z_1, Z_2)$ to $Y$.

## 29.2 Recursive estimation under the null model

Consider the recursive estimation method in 29.2.2 under the causal diagram in Problem 29.1. Show that based on linear models, the estimator converges to 0.

## 29.3 IPW under MSM

Prove Theorem 29.3.

## 29.4 A nonlinear example of Definition 29.2

Another leading example of Definition 29.2 is

$$
\text{logit } [\text{pr}\{Y(z_1, z_2) = 1 | X_0\}] = \beta_0 + \beta_1 z_1 + \beta_2 z_2 + \beta_3^\top X_0. \quad (29.13)
$$

If we observe all potential outcomes, we can solve $\beta$ by minimizing the expectation of the negative log-likelihood function (see Chapter B.6.2 for a simpler version):

$$
\beta = \arg \min_b \sum_{z_2} \sum_{z_1} E \{ \log(1 + e^\ell) - Y(z_1, z_2) \ell \} \quad (29.14)
$$

where $\ell = \beta_0 + \beta_1 z_1 + \beta_2 z_2 + \beta_3^\top X_0$. Under sequential ignorability, we can solve $\beta$ from the following minimization problem that only involves observables.**Theorem 29.5 (IPW under MSM) Under Assumption 29.1 and Definition 29.2, the $\beta$ in (29.14) equals**

$$
\beta = \arg \min_b \sum_{z_2} \sum_{z_1} E \left[ \frac{1(Z_1 = z_1)1(Z_2 = z_2)}{e(z_1, X_0)e(z_2, Z_1, X_1, X_0)} \{ \log(1 + e^\ell) - Y(z_1, z_2)\ell \} \right].
$$

Prove Theorem 29.5.

Remark: Theorem 29.5 implies a simple estimation strategy based on weighted regressions. For instance, under (29.13), we can fit weighted logistic regression of $Y_i$ on $(1, Z_{1i}, Z_{2i}, X_{0i})$ with weights $\hat{e}_1^{-1}(Z_{1i}, X_{0i})\hat{e}_{2i}^{-1}(Z_{2i}, Z_{i1}, X_{1i}, X_{0i})$.

## 29.5 Structural nested model with a single time point

Recall the standard setting of observational studies with IID data drawn from $\{X, Z, Y(1), Y(0)\}$. Define the propensity score as $e(X) = \text{pr}(Z = 1 | X)$. Assume

$$
Z \perp Y(0) | X
$$

and the following structural nested model.

**Definition 29.4 (structural nested model with a single time point) The conditional mean of the individual effect is**

$$
E\{Y(z) - Y(0) \mid Z = z, X\} = g(z, X; \beta).
$$

In Definition 29.4, a logical restriction is $g(0, X; \beta) = 0$. Prove the following results.

1. We have

$$
E\{Y - g(Z, X; \beta) \mid X, Z\} = E\{Y - g(Z, X; \beta) \mid X\} = E\{Y(0) \mid X\}.
$$

2. We have

$$
E[h(X)\{Z - e(X)\}\{Y - g(Z, X; \beta)\}] = 0 \quad (29.15)
$$

for any function $h$, provided that the moment exists.

Remark: Equation (29.15) is the basis for parameter estimation. Consider a special case of Definition 29.4 with $g(z, X; \beta) = \beta z$. Choose $h(X) = 1$ to obtain

$$
E\{(Z - e(X))(Y - \beta Z)\} = 0.
$$

Solve for $\beta$ to obtain

$$
\beta = \frac{E\{(Z - e(X))Y\}}{E\{(Z - e(X))Z\}}.
$$

Therefore, $\beta$ equals the coefficient of $Z$ in the TSLS of $Y$ on $Z$ with $Z - e(X)$ being the IV for $Z$. With some basic calculations, we can also show that

$$
\beta = \frac{\text{cov}\{Z - e(X), Y\}}{\text{cov}\{Z - e(X)\}}.
$$Therefore, $\beta$ equals the coefficient of $Z - e(X)$ in the OLS of $Y$ on $Z - e(X)$, which appeared in Chapter 14.1 before.

Consider another special case of Definition 29.4 with $g(z, X; \beta) = (\beta_0 + \beta_1^\top X)z$. Choose $h(X) = (1, X)$ to obtain

$$
E \left\{ \begin{pmatrix} Z - e(X) \\ (Z - e(X))X \end{pmatrix} (Y - \beta_0 Z - \beta_1^\top X Z) \right\} = 0.
$$

That is, $(\beta_0, \beta_1)$ equal the coefficients in the TSLS of $Y$ on $(Z, XZ)$ with $(Z - e(X), (Z - e(X))X)$ being the IV for $(Z, XZ)$.

## 29.6 Estimation under Example 29.4

We can estimate the $\beta$'s by solving the empirical version of the estimating equations in Example 29.4. We first estimate the two propensity scores and obtain the centered treatment

$$
\tilde{Z}_{1i} = Z_{1i} - \hat{e}(1, X_{0i})
$$

at time point 1 and

$$
\tilde{Z}_{2i} = Z_{2i} - \hat{e}(1, Z_{1i}, X_{1i}, X_{0i})
$$

at time point 2.

Show that we can estimate $\beta_2$ and $\beta_3$ by running TSLS of $Y_i$ on $(Z_{2i}, Z_{1i}Z_{2i})$ with $(\tilde{Z}_{2i}, Z_{1i}\tilde{Z}_{2i})$ as the IV for $(Z_{2i}, Z_{1i}Z_{2i})$, and then we can estimate $\beta_1$ by running TSLS of $Y_i - (\hat{\beta}_2 + \hat{\beta}_3 Z_{1i})Z_{2i}$ on $Z_{1i}$ with $\tilde{Z}_{1i}$ as the IV for $Z_{1i}$.

## 29.7 *g*-formula with a treatment at multiple time points

Extend the discussion to the setting with $K$ time points. The temporal ordering (but not the causal diagram) of the variables is

$$
X_0 \to Z_1 \to X_1 \to Z_2 \to \dots \to X_{K-1} \to Z_K.
$$

Introduce the notation $\bar{Z}_k = (Z_1, \dots, Z_k)$ and $\bar{X}_k = (X_0, X_1, \dots, X_k)$ with lower case $\bar{z}_k$ and $\bar{x}_k$ denoting the corresponding realized values. With $k = 0$, we have $\bar{X}_0 = X_0$ and $\bar{Z}_0$ is empty. Each unit has $2^K$ potential outcomes:

$$
Y(\bar{z}_K) \text{ for all } z_1, \dots, z_K = 0, 1.
$$

Assume sequential ignorability below.

**Assumption 29.2 (sequential ignorability at multiple time points) We have**

$$
Z_k \perp Y(\bar{z}_K) \mid (\bar{Z}_{k-1}, \bar{X}_{k-1})
$$

for all $k = 1, \dots, K$ and all $z_1, \dots, z_K = 0, 1$.Prove Theorem 29.6 below.

**Theorem 29.6 (g-formula with multiple time points) Under Assumption 29.2,**

$$
E\{Y(\bar{z}_K)\} = E[\dots E\{E(Y | \bar{z}_K, \bar{X}_{K-1}) | \bar{z}_{K-1}, \bar{X}_{K-2}\} \dots | z_1, X_0].
$$

Remark: In Theorem 29.6, I use the simplified notation “$\bar{z}_k$” for “$\bar{Z}_k = \bar{z}_k$.”
With discrete $X$, Theorem 29.6 reduces to

$$
E\{Y(\bar{z}_K)\} = \sum_{x_0} \sum_{x_1} \cdots \sum_{x_{K-1}} E(Y | \bar{z}_K, \bar{x}_{K-1}) \\
\qquad \cdot \Pr(x_{K-1} | \bar{z}_{K-1}, \bar{x}_{K-2}) \cdots \Pr(x_1 | z_1, x_0) \Pr(x_0);
$$

with continuous $X$, Theorem 29.6 reduces to

$$
E\{Y(\bar{z}_K)\} = \int E(Y | \bar{z}_K, \bar{x}_{K-1}) \\
\qquad \cdot f(x_{K-1} | \bar{z}_{K-1}, \bar{x}_{K-2}) \cdots f(x_1 | z_1, x_0) f(x_0) d\bar{x}_{K-1}.
$$

29.8 IPW with treatments at multiple time points

Inherit the setting of Problem 29.7. Define the propensity score at *K* time points as

$$
\begin{align*}
e(z_1, X_0) &= \operatorname{pr}(Z_1 = z_1 | X_0), \\
\vdots \\
e(z_k, \bar{Z}_{k-1}, \bar{X}_{k-1}) &= \operatorname{pr}(Z_k = z_k | \bar{Z}_{k-1}, \bar{X}_{k-1}), \\
\vdots \\
e(z_K, \bar{Z}_{K-1}, \bar{X}_{K-1}) &= \operatorname{pr}(Z_K = z_K | \bar{Z}_{K-1}, \bar{X}_{K-1}).
\end{align*}
$$

Prove Theorem 29.8 below assuming overlap implicitly.

**Theorem 29.7 (IPW with multiple time points) Under Assumption 29.2,**

$$
E\{Y(\bar{z}_K)\} = E \left\{ \frac{1(Z_1 = z_1) \cdots 1(Z_K = z_K) Y}{e(z_1, X_0) \cdots e(z_K, \bar{Z}_{K-1}, \bar{X}_{K-1})} \right\} .
$$

Based on Theorem 29.8, construct the Horvitz–Thompson and Hajek es-
timators.

29.9 MSM with treatments at multiple time points

The number of potential outcomes grows exponentially with *K*. The formulas
in Problems 29.7 and 29.8 are not directly applicable in finite samples. We
can impose the following structural assumptions on the potential outcomes.**Definition 29.5 (MSM with multiple time points) Assume**

$$
E\{Y(\bar{z}_K) | X_0\} = f(\bar{z}_K, X_0; \beta).
$$

Two leading examples of Definition 29.5 are

$$
E\{Y(\bar{z}_K) | X_0\} = \beta_0 + \beta_1 \sum_{k=1}^{K} z_k + \beta_2^\top X_0
$$

and

$$
E\{Y(\bar{z}_K) | X_0\} = \beta_0 + \sum_{k=1}^{K} \beta_k z_k + \beta_{K+1}^{\top} X_0.
$$

If we know all the potential outcomes, we can solve $\beta$ from the following minimization problem:

$$
\beta = \arg \min_b \sum_{\bar{z}_K} E\{Y(\bar{z}_K) - f(\bar{z}_K, X_0; \beta)\}^2.
$$

Theorem 29.8 below shows that under Assumption 29.2, we can solve $\beta$ from
a minimization problem that only involves observables.

**Theorem 29.8 (IPW for MSM with multiple time points) Under Assumption 29.2,**

$$
\beta = \arg \min_b \sum_{\bar{z}_K} E \left[ \frac{1(Z_1 = z_1) \cdots 1(Z_K = z_K)}{e(z_1, X_0) \cdots e(z_K, \bar{Z}_{K-1}, \bar{X}_{K-1})} \{Y - f(\bar{z}_K, X_0; \beta)\}^2 \right].
$$

29.10 *Structural nested model with treatments at multiple time points*

Inherit the setting from Problem 29.7 and the notation from Problem 29.8.
This problem presents a general structural nested model.

**Definition 29.6 (structural nested model with multiple time points)**

The conditional effect at time *k* is

$$
E\{Y(\bar{z}_k, 0) - Y(\bar{z}_{k-1}, 0) \mid \bar{z}_k, \bar{X}_{k-1}\} = g_k(\bar{z}_k, \bar{X}_{k-1}; \beta)
$$

for all $\bar{z}_k$ and all $k = 1, \dots, K$.

In Definition 29.6, a logical restriction is

$$
g_k(0, \bar{z}_{k-1}, \bar{X}_{k-1}; \beta) = 0
$$

for all $\bar{z}_{k-1}$ and all $k = 1, \dots, K$.

Define

$$
U_k(\beta) = Y - \sum_{s=1}^{k} g_s(\bar{Z}_s, \bar{X}_{s-1}; \beta)
$$

for all $k = 1, \dots, K$. Theorem 29.9 below extends Theorem 29.4.**Theorem 29.9** *Under Assumption 29.2 and Definition 29.6, we have*

$$
E[h_k(\bar{Z}_{k-1}, \bar{X}_{k-1})\{Z_k - e(1, \bar{Z}_{k-1}, \bar{X}_{k-1})\}U_k(\beta)] = 0
$$

for any functions $h_k$ ($k = 1, \dots, K$), provided that the moment exists.

Remark: Choosing appropriate $h_k$'s, we can estimate $\beta$ by solving the empirical version of Theorem 29.9.

29.11 *Recommended reading*

Robins et al. (2000) reviewed the MSM. Naimi et al. (2017) reviewed the g-methods.