# Part II

## Randomized experiments![[_resources/Ding - 2023 - A First Course in Causal Inference_Part5/e110b7680563eed7d24be3a89200581d_MD5.jpg]]

![[_resources/Ding - 2023 - A First Course in Causal Inference_Part5/554d8839c5bd2d81d9def613a4aadbea_MD5.jpg]]

![[_resources/Ding - 2023 - A First Course in Causal Inference_Part5/63fe4b4cc78513289042842fd14bb071_MD5.jpg]]

![[_resources/Ding - 2023 - A First Course in Causal Inference_Part5/e8612590565a2b3987acd01bcb40b551_MD5.jpg]]# 3

## The Completely Randomized Experiment and the Fisher Randomization Test

The potential outcomes framework has intrinsic connections with randomized experiments. Understanding causal inference in various randomized experiments is fundamental and helpful for understanding causal inference in more complicated non-experimental studies.

Part II of this book focuses on randomized experiments. This chapter focuses on the simplest experiment, the completely randomized experiment (CRE).

### 3.1 CRE

Consider an experiment with $n$ units, with $n_1$ receiving the treatment and $n_0$ receiving the control. We can define the CRE based on its treatment assignment mechanism¹.

**Definition 3.1 (CRE)** Fix $n_1$ and $n_0$ with $n = n_1 + n_0$. A CRE has the treatment assignment mechanism:

$$
\mathrm{pr}(\mathbf{Z} = \mathbf{z}) = 1 / \binom{n}{n_1},
$$

where $\mathbf{z} = (z_1, \dots, z_n)$ satisfies $\sum_{i=1}^n z_i = n_1$ and $\sum_{i=1}^n (1 - z_i) = n_0$.

In Definition 3.1, we assume that the potential outcome vector under treatment $\mathbf{Y}(1) = (Y_1(1), \dots, Y_n(1))$ and the potential outcome vector under control $\mathbf{Y}(0) = (Y_1(0), \dots, Y_n(0))$ are both fixed. Even if we view them as random, we can condition on them and the treatment assignment mechanism becomes

$$
\mathrm{pr}\{\mathbf{Z} = \mathbf{z} \mid \mathbf{Y}(1), \mathbf{Y}(0)\} = 1 / \binom{n}{n_1}
$$

¹Readers may think that a CRE has $Z_i$'s as independent and identically distributed (IID) Bernoulli random variables with probability $\pi$, in which $n_1$ is a Binomial($n, \pi$) random variable. This is called the Bernoulli randomized experiment (BRE), which reduces to the CRE if we condition on $(n_1, n_0)$. I will give more details for the BRE in Problem 4.7 in Chapter 4.because $Z \perp \{Y(1), Y(0)\}$ in a CRE. In a CRE, the treatment vector $Z$ is
from a random permutation of $n_1$ 1's and $n_0$ 0's.

In his seminal book *Design of Experiments*, Fisher (1935) pointed out the
following advantages of randomization:

1. It creates comparable treatment and control groups on average.
2. It serves as a “reasoned basis” for statistical inference.

Point 1 is intuitive because the random treatment assignment does not bias toward the treatment or the control. Most people understand point 1 well. Point 2 is more subtle. What Fisher meant is that randomization justifies a statistical test, which is now called the Fisher Randomization Test (FRT). This chapter illustrates the basic idea of the FRT under a CRE.

3.2 FRT

Fisher (1935) was interested in testing the following null hypothesis:²

$$
H_{0F} : Y_i(1) = Y_i(0) \text{ for all units } i = 1, \dots, n.
$$

Rubin (1980) called it the *sharp null hypothesis* in the sense that it can deter-
mine all the potential outcomes based on the observed data: **Y**(1) = **Y**(0) =
**Y** = (Y<sub>1</sub>, . . . , Y<sub>n</sub>), the vector of the observed outcomes. It is also called the
*strong null hypothesis* (e.g., Wu and Ding, 2021).

Conceptually, under $H_{0F}$, the FRT works for any test statistic

$$
T = T(\mathbf{Z}, \mathbf{Y}), \tag{3.1}
$$

which is a function of the observed data. The observed outcome vector **Y**
is fixed under *H*₀**F**, so the only random component in the test statistic *T* is
the treatment vector **Z**. The experimenter determines the distribution of **Z**,
which in turn determines the distribution of *T* under *H*₀**F**. This is the basis
for calculating the *p*-value. I will give more details below.

In a CRE, **Z** is uniform over the set

$$
\{z^1, \dots, z^M\}
$$

where $M = \binom{n}{n_1}$, and the $z^m$'s are all possible vectors with $n_1$ 1's and $n_0$ 0's.
For instance, with $n = 5$ and $n_1 = 3$, we can enumerate $M = \binom{5}{3} = 10$ vectors
as follows:

<sup>2</sup>Actually, Fisher (1935) did not use this form of $H_{0F}$ since he did not use the notation of potential outcomes. This form was due to Rubin (1980).```matlab
> permutation10 = function(n, n1){
+     M = choose(n, n1)
+     treat.index = combn(n, n1)
+     Z = matrix(0, n, M)
+     for(m in 1:M){
+         treat = treat.index[, m]
+         Z[treat, m] = 1
+     }
+     Z
+ }
>
> permutation10(5, 3)
    [,1] [,2] [,3] [,4] [,5] [,6] [,7] [,8] [,9] [,10]
[1,]    1    1    1    1    1    1    0    0    0    0
[2,]    1    1    1    0    0    0    1    1    1    0
[3,]    1    0    0    1    1    0    1    1    0    1
[4,]    0    1    0    1    0    1    1    0    1    1
[5,]    0    0    1    0    1    1    0    1    1    1


As a consequence, $T$ is uniform over the set (with possible duplications)

$$
\{T(\mathbf{z}^1, \mathbf{Y}), \dots, T(\mathbf{z}^M, \mathbf{Y})\}.
$$

That is, the distribution of $T$ is known due to the design of the CRE. We will call this distribution of $T$ the *randomization distribution*.

If larger values are more extreme for $T$, we can use the following tail probability to measure the extremeness of the test statistic with respect to its randomization distribution:³

$$
p_{\text{FRT}} = M^{-1} \sum_{m=1}^{M} I\{T(\mathbf{z}^m, \mathbf{Y}) \ge T(\mathbf{Z}, \mathbf{Y})\}, \quad (3.2)
$$

which is called the *p*-value by Fisher. Figure 3.1 illustrates the computational process of $p_{\text{FRT}}$.

The *p*-value, $p_{\text{FRT}}$, in (3.2) works for any choice of test statistic and any outcome-generating process. It also extends naturally to any experiment, which will be a topic repeatedly discussed in the following chapters. Importantly, it is finite-sample exact in the sense⁴ that under $H_{0F}$,

$$
\mathrm{pr}(p_{\text{FRT}} \le u) \le u \quad \text{for all} \quad 0 \le u \le 1. \qquad (3.3)
$$

³Because of this, the $p_{\text{FRT}}$ in (3.2) is one-sided. Sometimes, we may want to define two-sided *p*-values. One possibility is to use the absolute value of $T$ if it is distributed around 0.

⁴This is the standard definition of the *p*-value in mathematical statistics. The inequality is often due to the discreteness of the test statistic, and when the equality holds, the *p*-value is Uniform(0, 1) under the null hypothesis. Let $F(\cdot)$ be the distribution function of $T(\mathbf{Z}, \mathbf{Y})$. Even though it is a step function, we assume that it is continuous and strictly increasing as if it is the distribution function of a continuous random variable taking values on the whole real line. So $p_{\text{FRT}} = 1 - F(T)$, and
$$ \mathrm{pr}(p_{\text{FRT}} \le u) = \mathrm{pr}\{1 - F(T) \le u\} = \mathrm{pr}\{T \ge F^{-1}(1-u)\} = 1 - F(F^{-1}(1-u)) = u. $$![[_resources/Ding - 2023 - A First Course in Causal Inference_Part5/7865abfa4346947d5bb4274a2809d9ec_MD5.jpg]]

FIGURE 3.1: Illustration of the FRT

In practice, $M$ is often too large (e.g., with $n = 100, n_1 = 50$, we have $M > 10^{29}$), and it is computationally infeasible to enumerate all possible values of the treatment vector. We often approximate $p_{\text{FRT}}$ by Monte Carlo (see Section A.5 for a review of the basic Monte Carlo method). To be more specific, we take independent random draws from all possible values of the treatment vector, or, equivalently, we randomly permute $Z$, and approximate $p_{\text{FRT}}$ by

$$
\hat{p}_{\text{FRT}} = R^{-1} \sum_{r=1}^{R} I\{T(\mathbf{z}^r, \mathbf{Y}) \geq T(\mathbf{Z}, \mathbf{Y})\}, \quad (3.4)
$$

where the $\mathbf{z}^r$'s are the $R$ random permutations of $Z$. The $p$-value in (3.4) has Monte Carlo error decreasing fast with an increasing $R$; see Problem 3.2. Because the calculation of the $p$-value in (3.4) involves permutations of $Z$, the FRT is sometimes called the *permutation test* in the context of the CRE. However, the idea of FRT is more general than the permutation test in more complex experiments.

## 3.3 Canonical choices of the test statistic

From the above discussion, the FRT generates finite-sample exact $p$-value for any choice of the test statistic. This is a feature of the FRT. However, this feature should not encourage arbitrary choice of the test statistic. Intuitively, we must choose test statistics that give information for possible violations of $H_{0F}$. Below I will review some canonical choices.

The discreteness of $T$ does cause some technical issues in the proof, yielding an inequality instead of an equality. I leave the technical details to Problem 3.1.**Example 3.1 (difference-in-means)** *The difference-in-means statistic is*

$$
\hat{\tau} = \hat{Y}(1) - \hat{Y}(0)
$$

where

$$
\hat{Y}(1) = n_1^{-1} \sum_{Z_i=1} Y_i = n_1^{-1} \sum_{i=1}^{n} Z_i Y_i
$$

is the sample mean of the outcomes under the treatment and

$$
\hat{Y}(0) = n_0^{-1} \sum_{Z_i=0} Y_i = n_0^{-1} \sum_{i=1}^{n} (1 - Z_i) Y_i
$$

is the sample mean of the outcomes under the control, respectively. Under $H_{0F}$,
it has mean

$$
E(\hat{\tau}) = n_1^{-1} \sum_{i=1}^{n} E(Z_i)Y_i - n_0^{-1} \sum_{i=1}^{n} E(1-Z_i)Y_i = 0
$$

and variance

$$
\begin{align*}
\operatorname{var}(\hat{\tau}) &= \operatorname{var} \left\{ n_1^{-1} \sum_{i=1}^{n} Z_i Y_i - n_0^{-1} \sum_{i=1}^{n} (1-Z_i) Y_i \right\} \\
&= \operatorname{var} \left( \frac{n}{n_0} \frac{1}{n_1} \sum_{i=1}^{n} Z_i Y_i \right) \\
&=_* \frac{n^2}{n_0^2} \left(1 - \frac{n_1}{n}\right) \frac{s^2}{n_1} \\
&= \frac{n}{n_1 n_0} s^2,
\end{align*}
$$

where $\equiv_*$ follows from Lemma C.2 for simple random sampling with

$$
\bar{Y} = n^{-1} \sum_{i=1}^{n} Y_i, \quad s^2 = (n-1)^{-1} \sum_{i=1}^{n} (Y_i - \bar{Y})^2.
$$

Furthermore, the randomization distribution of $\hat{\tau}$ is approximately Normal due
to the finite population central limit theorem (CLT) in Lemma C.4:

$$
\frac{\hat{\tau}}{\sqrt{\frac{n}{n_1 n_0} s^2}} \rightarrow N(0, 1) \qquad (3.5)
$$

in distribution. Since $s^2$ is fixed under $H_{0F}$, it is equivalent to use

$$
\frac{\hat{\tau}}{\sqrt{\frac{n}{n_1 n_0} s^2}}
$$

as the test statistic in the FRT, which is asymptotically N(0,1) as shown in
(3.5). Then we can calculate an approximate p-value.The observed data are {$Y_i : Z_i = 1$} and {$Y_i : Z_i = 0$}, so the problem is essentially a two-sample problem. Under the assumption of independent and identically distributed (IID) Normal outcomes (see Section A.4.1), the classic two-sample *t*-test assuming equal variance is based on

$$
\frac{\hat{\tau}}{\sqrt{\frac{n}{n_1 n_0 (n-2)} \left[ \sum_{Z_i=1} \{Y_i - \hat{Y}(1)\}^2 + \sum_{Z_i=0} \{Y_i - \hat{Y}(0)\}^2 \right]}} \sim t_{n-2}. \quad (3.6)
$$

Based on some algebra (see Problem 3.8), we have the expansion

$$
(n-1)s^2 = \sum_{Z_i=1} \{Y_i - \hat{Y}(1)\}^2 + \sum_{Z_i=0} \{Y_i - \hat{Y}(0)\}^2 + \frac{n_1 n_0}{n} \hat{\tau}^2. \quad (3.7)
$$

With a large sample size *n*, we can ignore the difference between N(0, 1) and $t_{n-2}$ and the difference between *n* − 1 and *n* − 2. Moreover, under $H_{0F}$, $\hat{\tau}$ converges to zero in probability, so $n_1n_0/n\hat{\tau}^2$ can be ignored asymptotically. Therefore, under $H_{0F}$, the approximate *p*-value in Example 3.1 is close to the *p*-value from the classic two-sample *t*-test assuming equal variance, which can be calculated by *t.test* with *var equal* = TRUE. Under alternative hypotheses with nonzero $\tau$, the additional term $\frac{n_1n_0}{n}\hat{\tau}^2$ in the expansion (3.7) can make the FRT less powerful than the usual *t*-test; Ding (2016) made this point.

Based on the above discussion, the FRT with $\hat{\tau}$ effectively uses a pooled variance ignoring the heteroskedasticity between these two groups. In classical statistics, the two-sample problem with heteroskedastic Normal outcomes is called the Behrens-Fisher problem (see Section A.4.1). In the Behrens-Fisher problem, a standard choice of the test statistic is the studentized statistic below.

**Example 3.2 (studentized statistic)** *The studentized statistic*⁵ *is*

$$
t = \frac{\hat{Y}(1) - \hat{Y}(0)}{\sqrt{\frac{\hat{S}^2(1)}{n_1} + \frac{\hat{S}^2(0)}{n_0}}}
$$

where

$$
\hat{S}^2(1) = (n_1 - 1)^{-1} \sum_{Z_i=1} \{Y_i - \hat{Y}(1)\}^2, \quad \hat{S}^2(0) = (n_0 - 1)^{-1} \sum_{Z_i=0} \{Y_i - \hat{Y}(0)\}^2
$$

are the sample variances of the observed outcomes under the treatment and control, respectively. Under $H_{0F}$, the finite population CLT again implies that *t* is asymptotically Normal:

$$
t \rightarrow N(0, 1)
$$

in distribution. Then we can calculate an approximate *p*-value which is close to the *p*-value from *t.test* with *var equal* = FALSE.

⁵The *t* notation is intentional because it is related to the *t* distribution. But it should not be confused with the notation *t*<sub>*v*</sub>, which denotes the *t* distribution with degrees of freedom *v*.An extremely important point is that the FRT justifies the traditional *t*-tests using *t.test* with either `var equal = TRUE` or `var equal = FALSE`, even if the underlying distributions are not Normal. Standard statistics textbooks motivate the *t*-tests based on the Normality assumption, but the assumption can be too strong in practice. Fortunately, the *t*-test procedures can still be used as long as the finite population CLTs hold. Even if we do not believe the CLTs, we can still use $\hat{\tau}$ and *t* as test statistics in the FRT to obtain finite-sample exact *p*-values.

We will motivate this studentized statistic from another perspective in Chapter 8. The theory there shows that using *t* in FRT is more robust to heteroskedasticity across the two groups.

The following test statistic is robust to outliers resulting from heavy-tailed outcome data.

**Example 3.3 (Wilcoxon rank sum)** The difference-in-means statistic $\hat{\tau}$ uses the sample means of the original outcomes, and its sampling distribution depends on the variances of the outcomes. The studentized statistic $t$ uses the sample means and variances of the original outcomes, and its sampling distribution depends on higher moments of the outcomes. This makes $\hat{\tau}$ and *t* sensitive to outliers.

Another popular test statistic is based on the ranks of the pooled observed outcomes. Let $R_i$ denote the rank of $Y_i$ in the pooled samples $\mathbf{Y}$:

$$
R_i = \#\{j : Y_j \le Y_i\}.
$$

The Wilcoxon rank sum statistic is the sum of the ranks under treatment:

$$
W = \sum_{i=1}^{n} Z_i R_i.
$$

For algebraic simplicity, we assume that there are no ties in the outcomes.⁶ Because the sum of the ranks of the pooled samples is fixed at $1+2+\cdots+n = n(n+1)/2$, the Wilcoxon statistic is equivalent to the difference in the means of the ranks under the treatment and control. Under $H_{0F}$, the $R_i$'s are fixed, so $W$ has mean

$$
E(W) = \sum_{i=1}^{n} E(Z_i) R_i = \frac{n_1}{n} \sum_{i=1}^{n} i = \frac{n_1}{n} \times \frac{n(n+1)}{2} = \frac{n_1(n+1)}{2}
$$

⁶The FRT can be applied regardless of the existence of ties. With ties, we can either add small random noises to the original outcomes or use the average ranks for the tied outcomes. For the case with ties, see Lehmann (1975, Chapter 1 Section 4).and variance

$$
\begin{align*}
\operatorname{var}(W) &= \operatorname{var} \left( n_1 \frac{1}{n_1} \sum_{i=1}^{n} Z_i R_i \right) \\
&=_* n_1^2 \left(1 - \frac{n_1}{n}\right) \frac{1}{n_1} \frac{1}{n-1} \sum_{i=1}^{n} \left(R_i - \frac{n+1}{2}\right)^2 \\
&= \frac{n_1 n_0}{n(n-1)} \sum_{i=1}^{n} \left(i - \frac{n+1}{2}\right)^2 \\
&= \frac{n_1 n_0}{n(n-1)} \left\{ \sum_{i=1}^{n} i^2 - n \left(\frac{n+1}{2}\right)^2 \right\} \\
&= \frac{n_1 n_0}{n(n-1)} \left\{ \frac{n(n+1)(2n+1)}{6} - n \left(\frac{n+1}{2}\right)^2 \right\} \\
&= \frac{n_1 n_0 (n+1)}{12},
\end{align*}
$$

where $=*$ follows from Lemma C.2. Furthermore, under $H_{0F}$, the finite popu-
lation CLT ensures that the randomization distribution of $\hat{\tau}$ is approximately
Normal:

$$
\frac{\sum_{i=1}^{n} Z_i R_i - \frac{\frac{n_1(n+1)}{2}}{\sqrt{\frac{n_1 n_0(n+1)}{12}}} \rightarrow \mathrm{N}(0,1)}{(3.8)}
$$

in distribution. Based on (3.8), we can conduct an asymptotic test. In R, the
function wilcox.test can compute both exact and asymptotic p-values based on
the statistic W − n₁(n₁ + 1)/2. Based on some asymptotic analyses, Lehmann
(1975) showed that the FRT using W has reasonable power over a wide range
of data-generating processes.

**Example 3.4 (Kolmogorov–Smirnov statistic)** *The treatment may af-
fect the outcome in different ways. It seems natural to summarize the treatment*
*outcomes and control outcomes based on the empirical distributions:*

$$
\hat{F}_1(y) = n_1^{-1} \sum_{i=1}^{n} Z_i I(Y_i \le y), \quad \hat{F}_0(y) = n_0^{-1} \sum_{i=1}^{n} (1 - Z_i) I(Y_i \le y).
$$

Comparing these two empirical distributions yields the famous Kolmogorov-
Smirnov statistic

$$
D = \max_y \left| \hat{F}_1(y) - \hat{F}_0(y) \right|.
$$

It is a challenging mathematics problem to derive the distribution of D. With
large sample sizes $n_1 \to \infty$ and $n_0 \to \infty$, its distribution function converges
to

$$
\mathrm{pr} \left( \frac{n_1 n_0}{n} D \leq x \right) \rightarrow \frac{\sqrt{2\pi}}{x} \sum_{j=1}^{\infty} e^{-(2j-1)^2 \pi^2 / (8x^2)},
$$based on which we calculate an asymptotic p-value (Van der Vaart, 2000). In R, the function *ks.test* can compute both exact and asymptotic p-values.

## 3.4 A case study of the LaLonde experimental data

I use LaLonde (1986)'s experimental data to illustrate the FRT. The data are
available in the *Matching* package (Sekhon, 2011):

```r
> library(Matching)
> data(lalonde)
> z = lalonde$treat
> y = lalonde$re78
```

In the above, *z* denotes the binary treatment vector indicating whether a
unit was randomly assigned to the job training program or not, and *y* is the
outcome vector representing a unit's real earnings in 1978. Figure 3.2 shows
the histograms of the outcomes under the treatment and control.

The following code computes the observed values of the test statistics using
existing functions:

```r
> tauhat = t.test(y[z == 1], y[z == 0],
+                 var equal = TRUE)$statistic
> tauhat
t
2.835321
> student = t.test(y[z == 1], y[z == 0],
+                 var equal = FALSE)$statistic
> student
t
2.674146
> W = wilcox.test(y[z == 1], y[z == 0])$statistic
> W
W
27402.5
> D = ks.test(y[z == 1], y[z == 0])$statistic
> D
D
0.1321206
```

By randomly permuting the treatment vector, we can obtain the Monte
Carlo approximation of the randomization distributions of the test statistics,
stored in four vectors *Tauhat*, *Student*, *Wilcox*, and *Ks*.

```r
> MC = 10^4
> Tauhat = rep(0, MC)
> Student = rep(0, MC)
> Wilcox = rep(0, MC)
```![[_resources/Ding - 2023 - A First Course in Causal Inference_Part5/6b5d5e12d04df993ac8ac5808d56ffbe_MD5.jpg]]

FIGURE 3.2: Histograms of the outcomes in the LaLonde experimental data: the treatment in white and the control in grey. The vertical lines are the sample means of the outcomes: the solid line for the treatment and the dashed line for the control.

```R
> Ks = rep(0, MC)
> for(mc in 1:MC)
+ {
+   zperm = sample(z)
+   Tauhat.mc = t.test(y[zperm == 1], y[zperm == 0],
+                     var equal = TRUE)$statistic
+   Student.mc = t.test(y[zperm == 1], y[zperm == 0],
+                     var equal = FALSE)$statistic
+   Wilcox.mc = wilcox.test(y[zperm == 1],
+                         y[zperm == 0])$statistic
+   Ks.mc = ks.test(y[zperm == 1],
+                 y[zperm == 0])$statistic
+ }
```

The one-sided *p*-values based on the FRT are all smaller than 0.05:

```R
> exact.pv = c(mean(Tauhat >= tauhat),
+               mean(Student >= student),
```3.5 Some history of randomized experiments and FRT

+           mean(Wilcox >= W),
+           mean(Ks >= D))
> round(exact.pv, 3)
[1] 0.002 0.002 0.006 0.040

Without using Monte Carlo, we can also compute the asymptotic *p*-values
which are all smaller than 0.05:

> asym.pv = c(t.test(y[z == 1], y[z == 0],
+                 var equal = TRUE)$p.value,
+             t.test(y[z == 1], y[z == 0],
+                 var equal = FALSE)$p.value,
+             wilcox.test(y[z == 1], y[z == 0])$p.value,
+             ks.test(y[z == 1], y[z == 0])$p.value)
> round(asym.pv, 3)
[1] 0.005 0.008 0.011 0.046

The differences between the *p*-values are due to the asymptotic approxi-
mations as well as the fact that the default choices for *t.test* and *wilcox.test*
are two-sided tests. To make fair comparisons, we need to multiply the first
three *p*<sub>FRT</sub>'s by a factor of 2.

Figure 3.3 shows the histograms of the randomization distributions of four
test statistics, as well as their corresponding observed values. For the first
three test statistics, the Normal approximations work quite well even though
the underlying outcome data distribution is far from Normal as shown in
Figure 3.2. In general, a figure like Figure 3.3 can give clearer information for
testing the sharp null hypothesis. Recently, Bind and Rubin (2020) proposes,
in the title of their paper, that “when possible, report a Fisher-exact *p*-value
and display its underlying null randomization distribution.” I agree.

3.5 Some history of randomized experiments and FRT

3.5.1 James Lind’s experiment

James Lind (1716—1794) was a Scottish doctor and a pioneer of naval hygiene in the Royal Navy. At his time, scurvy was a major cause of death among sailors. He conducted one of the earliest randomized experiments with clear documentation of the details and concluded that citrus fruits cured scurvy before the discovery of Vitamin C.

In Lind (1753), he described the following randomized experiment with
12 patients of scurvy assigned to 6 groups. With some simplifications, the 6
groups are:

1. two received a quart of cider every day;
2. two received twenty-five drops of sulfuric acid three times every day;![[_resources/Ding - 2023 - A First Course in Causal Inference_Part5/566fcae7195c7f8d1775777b3452ad12_MD5.jpg]]

FIGURE 3.3: The randomization distributions of four test statistics based on the LaLonde experimental data

3. two received two spoonfuls of vinegar three times every day;
4. two received half a pint of seawater every day;
5. two received two oranges and one lemon every day;
6. two received a spicy paste plus a drink of barley water every day.

After six days, patients in the fifth group recovered, but patients in other groups did not. If we simplify the treatment as

$$
Z_i = 1(\text{unit } i \text{ received citrus fruits})
$$

and the outcome as

$$
Y_i = 1(\text{unit } i \text{ recovered after six days}),
$$

then we have a two-by-two table

<table><thead><tr><th></th><th>Y = 1</th><th>Y = 0</th></tr></thead><tbody><tr><th>Z = 1</th><td>2</td><td>0</td></tr><tr><th>Z = 0</th><td>0</td><td>10</td></tr></tbody></table>This is the extremest possible two-by-two table we can observe under this experiment, and the data contain strong evidence for the positive effect of citrus fruits for curing scurvy. Statistically, how do we measure the strength of the evidence?

Following the logic of the FRT, if the treatment has no effect at all (under $H_{0F}$), this extreme two-by-two table will occur with probability

$$
\frac{1}{\binom{12}{2}} = \frac{1}{66} = 0.015
$$

which is the $p_{FRT}$. This seems a surprise under $H_{0F}$: we can easily reject $H_{0F}$ at the level of 0.05.

### 3.5.2 Lady tasting tea

Fisher (1935) described the following famous experiment of Lady Tasting Tea.⁷ A lady claimed that she could tell the difference between the two ways of making milk tea: one with milk added first, and the other with tea added first. This might sound odd to most people. As a statistician, Fisher designed an experiment to test whether the lady could actually tell the difference between the two ways of making milk tea.

He made 8 cups of tea, 4 with milk added first and the other 4 with tea added first. Then he presented these 8 cups of tea in a random order to the lady and asked the lady to pick up the 4 with milk added first. The final experiment result can be summarized in the following two-by-two table:

<table><thead><tr><th></th><th>milk first (lady)</th><th>tea first (lady)</th><th>column sum</th></tr></thead><tbody><tr><th>milk first (Fisher)</th><td>X</td><td>4 &minus; X</td><td>4</td></tr><tr><th>tea first (Fisher)</th><td>4 &minus; X</td><td>X</td><td>4</td></tr><tr><th>row sum</th><td>4</td><td>4</td><td>8</td></tr></tbody></table>

The $X$ can be 0, 1, 2, 3, 4. In the real experiment, $X = 4$, which is the most extreme data, strongly suggesting that the lady could tell the difference between the two ways of making milk tea. Again, how do we measure the strength of the evidence?

Under the null hypothesis that the lady could not tell the difference, only one of the $\binom{8}{4} = 70$ possible orders yields the two-by-two table with $X = 4$. So the $p$-value is

$$
p_{\text{FRT}} = \frac{1}{70} = 0.014.
$$

Given the significance level of 0.05, we reject the null hypothesis.

⁷This later became the title of a book on the modern history of statistics by Salsburg (2001).3.5.3 Two Fisherian principles for experiments

In the above two examples in Sections 3.5.1 and 3.5.2, the *p*<sub>FRT</sub>'s are justified
by the randomization of the experiments. This highlights the first Fisherian
principle of experiments: *randomization*.

Moreover, the above two experiments are in some sense the smallest pos-
sible experiments that can yield statistically meaningful results. For instance,
if Lind only assigned one patient to each of the six groups, then the smallest
*p*-value is

$$
\binom{6}{1} = \frac{1}{6} = 0.167;
$$

if Fisher only made 6 cups of tea, 3 with milk added first and the other 3 with
tea added first, then the smallest *p*-value is

$$
\frac{1}{\binom{6}{3}} = \frac{1}{20} = 0.05.
$$

We can never reject the null hypotheses at the level of 0.05. This highlights
the second Fisherian principle of experiments: *replications*. This is, to ensure
the FRT to have power, we must have enough units in experiments.

Chapter 5 will discuss the third Fisherian principle of experiments: *block-
ing*.

3.6 Discussion

3.6.1 Other sharp null hypotheses and confidence intervals

I focus on the sharp null hypothesis $H_{0F}$ above. In fact, the logic of the FRT
also works for other sharp null hypotheses. For instance, we can test

$$
H_0(\tau) : Y_i(1) - Y_i(0) = \tau_i \text{ for all } i = 1, \dots, n
$$

for a known vector **τ** = (τ₁, ..., τₙ). Because the individual causal effects are
all known under H₀(**τ**), we can impute all missing potential outcomes based
on the observed data. With known potential outcomes, the distribution of any
test statistic T = T(**Z**, **Y**(1), **Y**(0)) is completely determined by the treatment
assignment mechanism, and therefore, we can compute the corresponding pFRT
as a function of **τ**, denoted by pFRT(**τ**). If we can specify all possible **τ**'s, then
we can compute a series of pFRT(**τ**)'s. By duality of hypothesis testing and
confidence set (see Section A.2.5), we can obtain a (1 − α)-level confidence set
for the average causal effect:

$$
\left\{ \tau = n^{-1} \sum_{i=1}^{n} \tau_i : p_{\text{FRT}}(\tau) \ge \alpha \right\} .
$$Although this strategy is conceptually straightforward, it has practical com-
plexities due to the large number of all possible τ's. In the special case of a
binary outcome, Rigdon and Hudgens (2015) and Li and Ding (2016) proposed
some computationally feasible approaches to constructing confidence intervals
for τ based on the FRT. For general unbounded outcomes, this strategy is of-
ten computationally infeasible.

A canonical simplification (Rosenbaum, 2002b, 2010) is to consider a sub-
class of the sharp null hypotheses with constant individual causal effects:

$$
H_0(c) : Y_i(1) - Y_i(0) = c \text{ for all } i = 1, \dots, n
$$

for a known constant c. Given c, we can compute $p_{\text{FRT}}(c)$. By duality, we can
obtain a (1 − α)-level confidence set for the average causal effect:

$$
\{c : p_{\text{FRT}}(c) \geq \alpha\}.
$$

Because this procedure only involves a one-dimensional search, it is compu-
tationally feasible. However, the constant individual causal effect assumption
is too strong. In particular, it does not hold for binary outcomes unless all
units have effects 0, −1, or 1. In general, the constant individual causal effect
assumption has testable implications that can be rejected by the observed
data; Ding et al. (2016) proposed a formal statistical test.

**3.6.2 Other test statistics**

The FRT is a general strategy because it is applicable in any randomized ex-
periment with any test statistic. I have given several examples of test statistics
in Section 3.3. In fact, the definition of a test statistic can be much more gen-
eral. For instance, with pre-treatment covariate matrix **X** with the *i*th row
being **X**ᵢ for unit *i* (*i* = 1, ..., *n*) ⁸, we can allow the test statistic T(**Z**, **Y**, **X**)
to be a function of the treatment vector, outcome vector, and the covariate
matrix. Problem 3.6 gives an example.

**3.6.3 Final remarks**

For a general experiment, the probability distribution of **Z** is not uniform
over all possible permutations of *n*₁ 1's and *n*₀ 0's. However, its distribution
is completely known by the experimenter. Therefore, we can always simulate
its distribution which in turn implies the distribution of any test statistic
under the sharp null hypothesis. A finite-sample exact *p*-value equals

$$
p_{\text{FRT}} = \text{pr}'\{T(\mathbf{Z}', \mathbf{Y}) \geq T(\mathbf{Z}, \mathbf{Y})\}
$$

⁸In causal inference, we call $X_i$ a covariate if it is not affected by the treatment. That is, if the covariate has two potential outcomes $X_i(1)$ and $X_i(0)$, then they must satisfy $X_i(1) = X_i(0)$. Standard statistics books often do not distinguish the treatment and covariates because they often appear on the right-hand side of a regression model for the outcome. They are both called covariates in those statistical models. This book distinguishes the treatment and covariates because they play different roles in causal inference.where $pr'$ is average over the distribution of $Z'$ conditional on data. I will discuss other experiments in the subsequent chapters and I want to emphasize that the FRT works beyond the specific experiments discussed in this book.

The FRT works with any test statistic. However, this does not answer the practical question of how to choose a test statistic in the data analysis. If the goal is to find surprises with respect to the sharp null hypothesis, it is desirable to choose a test statistic that yields high power under alternative hypotheses. In general, no test statistic can dominate others in terms of power because power depends on the alternative hypothesis. The four test statistics in Section 3.3 are motivated by different alternative hypotheses. For instance, $\hat{\tau}$ and $t$ are motivated by an alternative hypothesis with a nonzero average treatment effect; $W$ is motivated by an alternative hypothesis with a constant causal effect with heavy-tailed outcomes. Specifying a working alternative hypothesis is often helpful for constructing a test statistic although it does not have to be precise to guarantee the validity of the FRT. Problems 3.6 and 3.7 illustrate the idea of using a working alternative hypothesis or statistical model to construct test statistics.

## 3.7 Homework Problems

### 3.1 Exactness of $p_{FRT}$

Prove (3.3).

### 3.2 Monte Carlo error of $\hat{p}_{FRT}$

Given data, $p_{FRT}$ is a fixed number while its Monte Carlo estimator $\hat{p}_{FRT}$ in (3.4) is random. Show that

$$
E_{mc}(\hat{p}_{FRT}) = p_{FRT}
$$

and

$$
\text{var}_{mc}(\hat{p}_{FRT}) \leq \frac{1}{4R},
$$

where the subscript “mc” signifies the randomness due to Monte Carlo, that is, $\hat{p}_{FRT}$ is random because $z^r$'s are $R$ independent random draws from all possible values of $Z$.

Remark: $p_{FRT}$ is random because $Z$ is random. But in this problem, we condition on data, so $p_{FRT}$ becomes a fixed number. $\hat{p}_{FRT}$ is random because the $z^r$'s are random permutations of $Z$. Problem 3.2 shows that $\hat{p}_{FRT}$ is unbiased for $p_{FRT}$ over the Monte Carlo randomness and gives an upper bound on the variance of $\hat{p}_{FRT}$. Luo et al. (2021, Theorem 2) gives a more delicate bound on the Monte Carlo error.## 3.7 *Homework Problems*

### 3.3 A finite-sample valid Monte Carlo approximation of $p_{\text{FRT}}$

Although $\hat{p}_{\text{FRT}}$ is unbiased for $p_{\text{FRT}}$ by the result in Problem 3.2, it may not be a valid $p$-value in the sense that $\text{pr}(\hat{p}_{\text{FRT}} \le u) \le u$ for all $u \in (0, 1)$ due to Monte Carlo error with a finite $R$. The following modified Monte Carlo approximation is always a finite-sample valid $p$-value. Phipson and Smyth (2010) pointed out this trick in the permutation test.

Define

$$
\tilde{p}_{\text{FRT}} = \frac{1 + \sum_{r=1}^{R} I\{T(\mathbf{z}^r, \mathbf{Y}) \ge T(\mathbf{Z}, \mathbf{Y})\}}{1 + R}
$$

where the $\mathbf{z}^r$'s the $R$ random permutations of $\mathbf{Z}$. Show that with an arbitrary $R$, the Monte Carlo approximation $\tilde{p}_{\text{FRT}}$ is always a finite-sample valid $p$-value in the sense that $\text{pr}(\tilde{p}_{\text{FRT}} \le u) \le u$ for all $u \in (0, 1)$.

Remark: You can use the following two basic probability results to prove the claim in Problem 3.3.

**Lemma 3.1** For two Binomial random variables $X_1 \sim \text{Binomial}(R, p_1)$ and $X_2 \sim \text{Binomial}(R, p_2)$ with $p_1 \ge p_2$, we have $\text{pr}(X_1 \le x) \le \text{pr}(X_2 \le x)$ for all $x$.

**Lemma 3.2** If $p \sim \text{Uniform}(0, 1)$ and $X$ | $p \sim \text{Binomial}(R, p)$, then, marginally, $X$ is a uniform random variable over $\{0, 1, \dots, R\}$.

### 3.4 Fisher's exact test

Consider a CRE with a binary outcome, with data summarized in the following two-by-two table:

<table><thead><tr><th></th><th>Y = 1</th><th>Y = 0</th><th>total</th></tr></thead><tbody><tr><th>Z = 1</th><td>n<sub>11</sub></td><td>n<sub>10</sub></td><td>n<sub>1</sub></td></tr><tr><th>Z = 0</th><td>n<sub>01</sub></td><td>n<sub>00</sub></td><td>n<sub>0</sub></td></tr></tbody></table>

Under $H_{0F}$, show that any test statistic $T(n_{11}, n_{10}, n_{01}, n_{00})$ is a function of $n_{11}$ and other non-random fixed constants, and the exact distribution of $n_{11}$ is Hypergeometric. Specify the parameters for the Hypergeometric distribution.

Remark: Barnard (1947) and Ding and Dasgupta (2016) pointed out the equivalence of Fisher's exact test (reviewed in Section A.3.1) and the FRT under a CRE with a binary outcome.

### 3.5 More details for lady tasting tea

Recall the example in Section 3.5.2. Calculate $\text{pr}(X = k)$ for $k = 0, 1, 2, 3, 4$.

### 3.6 Covariate-adjusted FRT

This problem gives more details for Section 3.6.2.

Section 3.4 re-analyzed the LaLonde experimental data using the FRT with four test statistics. With additional covariates, the FRT can be more general3 *Completely Randomized Experiment and FRT*

with at least the following two additional strategies. Assume all potential
outcomes and covariates are fixed numbers.

First, we can use test statistics based on residuals from the linear regres-
sion. Run a linear regression of the outcomes on the covariates, and obtain
the residuals (i.e., view the residuals as the “pseudo outcomes”). Then define
the four test statistics based on the residuals. Conduct the FRT using these
four new test statistics. Report the corresponding *p*-values.

Second, we can define the test statistic as the coefficient in the linear
regression of the outcomes on the treatment and covariates. Conduct the FRT
using this test statistic. Report the corresponding *p*-value.

Why are the five *p*-values from the above two strategies finite-sample ex-
act? Justify them.

3.7 *FRT with a generalized linear model*

Use the same dataset as Problem 3.6 but change the outcome to a binary
indicator for whether re78 is positive or not. Run logistic regression of the
outcome on the treatment and covariates. Is the coefficient of the treatment
significant and what is the *p*-value? Calculate the *p*-value from the FRT using
the coefficient of the treatment as the test statistic.

3.8 *An algebraic detail*

Verify (3.7).

3.9 *Recommended reading*

Bind and Rubin (2020) is a recent paper advocating the use of *p*-values as well as the display of the corresponding randomization distributions in analyzing complex experiments.# 4

## Neymanian Repeated Sampling Inference in Completely Randomized Experiments

In his seminal paper, Neyman (1923) not only proposed the notation of potential outcomes but also derived rigorous mathematical results for making inference for the average causal effect under a CRE. In contrast to Fisher's idea of calculating the *p*-value under the sharp null hypothesis, Neyman (1923) proposed an unbiased point estimator and a conservative confidence interval based on the sampling distribution of the point estimator. This chapter will introduce Neyman (1923)'s fundamental results, which are very important for understanding later chapters in Part II of this book.

### 4.1 Finite population quantities

Consider a CRE with $n$ units, where $n_1$ of them receive the treatment and $n_0$ of them receive the control. For unit $i = 1, \dots, n$, we have potential outcomes $Y_i(1)$ and $Y_i(0)$, and individual effect $\tau_i = Y_i(1) - Y_i(0)$. The potential outcomes have finite population means

$$
\bar{Y}(1) = n^{-1} \sum_{i=1}^{n} Y_{i}(1), \quad \bar{Y}(0) = n^{-1} \sum_{i=1}^{n} Y_{i}(0),
$$

variances¹

$$
S^2(1) = (n-1)^{-1} \sum_{i=1}^{n} \{Y_i(1) - \bar{Y}(1)\}^2, \quad S^2(0) = (n-1)^{-1} \sum_{i=1}^{n} \{Y_i(0) - \bar{Y}(0)\}^2,
$$

and covariance

$$
S(1,0) = (n-1)^{-1} \sum_{i=1}^{n} \{Y_i(1) - \bar{Y}(1)\} \{Y_i(0) - \bar{Y}(0)\}.
$$

¹Here the divisor $n-1$ makes the main theorems in this chapter more elegant. Changing the divisor to $n$ complicates the formulas but does not change the results fundamentally. With large $n$, the difference is minor.The individual effects have mean

$$
\tau = n^{-1} \sum_{i=1}^{n} \tau_i = \bar{Y}(1) - \bar{Y}(0).
$$

and variance

$$
S^2(\tau) = (n-1)^{-1} \sum_{i=1}^{n} (\tau_i - \tau)^2.
$$

We have the following relationship between the variances and covariance.

$$
\textbf{Lemma 4.1} \quad 2S(1,0) = S^2(1) + S^2(0) - S^2(\tau).
$$

Lemma 4.1 is a basic result and will be useful for later discussion. The proof of Lemma 4.1 follows from elementary algebra. I leave it as Problem 4.1.

These fixed quantities are functions of the Science Table {$Y_i(1), Y_i(0)$}^n_{i=1}.
We are interested in estimating the average causal effect $\tau$ based on the data
$(Z_i, Y_i)_{i=1}^n$ from a CRE.

4.2 Neyman (1923)'s theorem

Based on the observed outcomes, we can calculate the sample means

$$
\hat{Y}(1) = n_1^{-1} \sum_{i=1}^{n} Z_i Y_i, \quad \hat{Y}(0) = n_0^{-1} \sum_{i=1}^{n} (1 - Z_i) Y_i,
$$

the sample variances

$$
\hat{S}^2(1) = (n_1 - 1)^{-1} \sum_{i=1}^{n} Z_i \{Y_i - \hat{Y}(1)\}^2, \quad \hat{S}^2(0) = (n_0 - 1)^{-1} \sum_{i=1}^{n} (1 - Z_i) \{Y_i - \hat{Y}(0)\}^2.
$$

But there are no sample versions of $S(1,0)$ and $S^2(\tau)$ because the potential outcomes $Y_i(1)$ and $Y_i(0)$ are never jointly observed for each unit $i$. Neyman (1923) proved the following theorem.

**Theorem 4.1** *Under a CRE,*

1. *the difference-in-means estimator* $\hat{\tau} = \hat{Y}(1) - \hat{Y}(0)$ *is unbiased for* $\tau$:

$E(\hat{\tau}) = \tau;$

2. $\hat{\tau}$ has variance

$$
\begin{align}
\mathrm{var}(\hat{\tau}) &= \frac{S^2(1)}{n_1} + \frac{S^2(0)}{n_0} - \frac{S^2(\tau)}{n} \tag{4.1} \\
&= \frac{n_0}{n_1 n} S^2(1) + \frac{n_1}{n_0 n} S^2(0) + \frac{2}{n} S(1,0); \tag{4.2}
\end{align}
$$

$$
= \frac{n_0}{n_1 n} S^2(1) + \frac{n_1}{n_0 n} S^2(0) + \frac{2}{n} S(1,0); \quad (4.2)
$$3. the variance estimator

$$
\hat{V} = \frac{\hat{S}^2(1)}{n_1} + \frac{\hat{S}^2(0)}{n_0}
$$

is conservative for estimating var($\hat{\tau}$) in the sense that

$$
E(\hat{V}) - \text{var}(\hat{\tau}) = \frac{S^2(\tau)}{n} \geq 0
$$

with equality holding if and only if $\tau_i = \tau$ for all units.

I will present the proof of Theorem 4.1 in Section 4.3. Before proving Theorem 4.1, it is important to clarify the meanings of $E(\cdot)$ and var(·) in Theorem 4.1. The potential outcomes are all fixed numbers, and only the treatment indicators $Z_i$'s are random. Therefore, the expectations and variances are all over the randomness of the $Z_i$'s, which are random permutations of $n_1$ 1's and $n_0$ 0's. Figure 4.1 illustrates the randomness of $\hat{\tau}$, which is a discrete uniform distribution over $\{\hat{\tau}^1, \dots, \hat{\tau}^M\}$ induced by $M = \binom{n}{n_1}$ possible treatment allocations. Compare Figure 4.1 with Figure 3.1 to see the key differences between the FRT and Neyman (1923)'s theorem:

1. The FRT works for any test statistic but Neyman (1923)'s theorem is only about the difference in means. Although we could derive the properties of other estimators similar to Neyman (1923)'s theorem, this mathematical exercise is often quite challenging for general estimators.
2. In Figure 3.1, the observed outcome vector $\mathbf{Y}$ is fixed but in Figure 4.1, the observed outcome vector $\mathbf{Y}(\mathbf{z}^m)$ changes as $\mathbf{z}^m$ changes.
3. The $T(\mathbf{z}^m, \mathbf{Y})$'s In Figure 3.1 are all computable based on the observed data, but the $\hat{\tau}^m$'s in Figure 4.1 are hypothetical values because not all potential outcomes are known.

The point estimator $\hat{\tau}$ is standard but it has a non-trivial variance under the potential outcomes framework with a CRE. The variance formula (4.1) differs from the classic variance formula for the difference in means² because it not only depends on the finite population variances of the potential outcomes but also depends on the finite population variance of the individual effects, or, equivalently, the finite population covariance of the potential outcomes.

²In the classic two-sample problem, the outcomes under the treatment are IID draws from a distribution with mean $\mu_1$ and variance $\sigma_1^2$, and the outcomes under the control are IID draws from a distribution with mean $\mu_0$ and variance $\sigma_0^2$. Under this assumption, we have

$$
\text{var}(\hat{\tau}) = \frac{\sigma_1^2}{n_1} + \frac{\sigma_0^2}{n_0}.
$$

Here, var(·) is over the randomness of the outcomes. This variance formula does not involve a third term that depends on the variance of the individual causal effects.![[_resources/Ding - 2023 - A First Course in Causal Inference_Part5/066bcd8d253c3c638e18dd1b3b69ca84_MD5.jpg]]

FIGURE 4.1: Illustration of Neyman (1923)'s theorem, where $\mathbf{Y}(\mathbf{z}^m)$ is the observed outcome vector under the treatment vector $\mathbf{z}^m$.

Unfortunately, $S^2(\tau)$ and $S(1,0)$ are not identifiable from the data because $Y_i(1)$ and $Y_i(0)$ are never jointly observed.

The formula (4.1) is a little puzzling in that the more heterogeneous the individual effects are the smaller the variability of $\hat{\tau}$ is. Section 4.5.1 will use numerical examples to verify (4.1). What is the intuition here? I give an explanation based on the equivalent form (4.2). Compare the case with positively correlated potential outcomes and the case with negatively correlated potential outcomes. Although the treatment group is a simple random sample from the finite population of $n$ units, it is possible to observe relatively large treatment potential outcomes in a realized experiment. Assume this happens.

1. If $S(1,0) > 0$, then those treated units also have relatively large control potential outcomes. Consequently, the observed outcomes under control are relatively small, which results in large $\hat{\tau}$.
2. If $S(1,0) < 0$, then those treated units have relatively small control potential outcomes. Consequently, the observed outcomes under control are relatively large, which results in small $\hat{\tau}$.

The reverse can also happen if we observe relatively small treatment potential outcomes in a realized experiment. Overall, although the unbiasedness of $\hat{\tau}$ does not depend on the correlation between the potential outcomes, it is more likely to observe more extreme $\hat{\tau}$ under $S(1,0) > 0$ than under $S(1,0) < 0$. So the variance of $\hat{\tau}$ is larger when the potential outcomes are positively correlated.

Li and Ding (2017, Theorem 5 and Proposition 3) further proved the following asymptotic Normality of $\hat{\tau}$ based on the finite population CLT.

**Theorem 4.2** Let $n \to \infty$ and $n_1 \to \infty$. If $n_1/n$ has a limiting value in$(0,1), \{S^2(1), S^2(0), S(1,0)\} \text{ have limiting values, and}$

$$
\max_{1 \le i \le n} \{Y_i(1) - \bar{Y}(1)\}^2 / n \to 0, \quad \max_{1 \le i \le n} \{Y_i(0) - \bar{Y}(0)\}^2 / n \to 0,
$$

then

$$
\frac{\hat{\tau} - \tau}{\sqrt{\mathrm{var}(\hat{\tau})}} \rightarrow \mathrm{N}(0, 1)
$$

in distribution, and

$$
\hat{S}^2(1) \rightarrow S^2(1), \quad \hat{S}^2(0) \rightarrow S^2(0)
$$

in probability.

The proof of Theorem 4.2 is technical and beyond the scope of this book. It ensures that the sampling distribution of $\hat{\tau}$ can be approximated by a Normal distribution with a large sample size and some regularity conditions. Moreover, it ensures that the sample variances of the outcomes are consistent for the population variances, which further ensures that the probability limit of Neyman (1923)'s variance estimator is larger than the true variance of $\hat{\tau}$. This justifies a conservative large-sample confidence interval for $\tau$:

$$
\hat{\tau} \pm z_{1-\alpha/2} \sqrt{\hat{V}},
$$

where $z_{1-\alpha/2}$ is the $1 - \alpha/2$ upper quantile of the standard Normal random variable. It is the same as the confidence interval for the standard two-sample problem asymptotically (see Chapter A.4.1). This confidence interval covers $\tau$ with probability at least as large as $1 - \alpha$ when the sample size is large enough. By duality, the confidence interval implies a test for

$H_{0N}: \tau = 0,$

which is called the weak null hypothesis.

Due to the fundamental problem of missing one potential outcome, we can at most obtain a conservative variance estimator. In statistics, the definition of the confidence interval allows for over coverage and thus conservativeness in variance estimation (see Chapter A.2). Conservativeness is not a big problem if underreporting the treatment effect is not a big problem in practice. Sometimes, it can be problematic if the outcomes measure the side effects of a treatment. In medical experiments, underreporting the side effects of a new drug can have severe consequences on patients’ health.

4.3 Proofs

In this section, I will prove Theorem 4.1.First, the unbiasedness of $\hat{\tau}$ follows from the representation

$$
\begin{align*}
\hat{\tau} &= n_1^{-1} \sum_{i=1}^{n} Z_i Y_i - n_0^{-1} \sum_{i=1}^{n} (1 - Z_i) Y_i \\
&= n_1^{-1} \sum_{i=1}^{n} Z_i Y_i(1) - n_0^{-1} \sum_{i=1}^{n} (1 - Z_i) Y_i(0)
\end{align*}
$$

and the linearity of the expectation:

$$
\begin{align*}
E(\hat{\tau}) &= E \left\{ n_1^{-1} \sum_{i=1}^{n} Z_i Y_i(1) - n_0^{-1} \sum_{i=1}^{n} (1-Z_i) Y_i(0) \right\} \\
&= n_1^{-1} \sum_{i=1}^{n} E(Z_i) Y_i(1) - n_0^{-1} \sum_{i=1}^{n} E(1-Z_i) Y_i(0) \\
&= n_1^{-1} \sum_{i=1}^{n} \frac{n_1}{n} Y_i(1) - n_0^{-1} \sum_{i=1}^{n} \frac{n_0}{n} Y_i(0) \\
&= n^{-1} \sum_{i=1}^{n} Y_i(1) - n^{-1} \sum_{i=1}^{n} Y_i(0) \\
&= \tau.
\end{align*}
$$

Second, we can further write $\hat{\tau}$ as

$$
\hat{\tau} = \sum_{i=1}^{n} Z_i \left\{ \frac{Y_i(1)}{n_1} + \frac{Y_i(0)}{n_0} \right\} - n_0^{-1} \sum_{i=1}^{n} Y_i(0).
$$

The variance of $\hat{\tau}$ follows from Lemma C.2 of simple random sampling:

$$
\begin{align*}
\operatorname{var}(\hat{\tau}) &= \frac{n_1 n_0}{n(n-1)} \sum_{i=1}^{n} \left\{ \frac{Y_i(1)}{n_1} + \frac{Y_i(0)}{n_0} - \frac{\bar{Y}(1)}{n_1} - \frac{\bar{Y}(0)}{n_0} \right\}^2 \\
&= \frac{n_1 n_0}{n(n-1)} \left[ \begin{aligned}
& \frac{1}{n_1^2} \sum_{i=1}^{n} \{Y_i(1) - \bar{Y}(1)\}^2 + \frac{1}{n_0^2} \sum_{i=1}^{n} \{Y_i(0) - \bar{Y}(0)\}^2 \\
& + \frac{2}{n_1 n_0} \sum_{i=1}^{n} \{Y_i(1) - \bar{Y}(1)\} \{Y_i(0) - \bar{Y}(0)\}
\end{aligned} \right] \\
&= \frac{n_0}{n_1 n} S^2(1) + \frac{n_1}{n_0 n} S^2(0) + \frac{2}{n} S(1, 0).
\end{align*}
$$

From Lemma 4.1, we can also write the variance as

$$
\begin{align*}
\operatorname{var}(\hat{\tau}) &= \frac{n_0}{n_1 n} S^2(1) + \frac{n_1}{n_0 n} S^2(0) + \frac{1}{n}\{S^2(1) + S^2(0) - S^2(\tau)\} \\
&= \frac{S^2(1)}{n_1} + \frac{S^2(0)}{n_0} - \frac{S^2(\tau)}{n}.
\end{align*}
$$Third, because the treatment group is a simple random sample of size $n_1$ from the $n$ units, Lemma C.3 ensures that the sample variance of $Y_i(1)$'s is unbiased for its population variance:

$$
E\{\hat{S}^2(1)\} = S^2(1).
$$

Similarly, $E\{\hat{S}^2(0)\} = S^2(0)$. Therefore, $\hat{V}$ is unbiased for the first two terms in (4.1).

## 4.4 Regression analysis of the CRE

Practitioners often use regression-based inference for the average causal effect $\tau$. A standard approach is to run the ordinary least squares (OLS) of the outcomes on the treatment indicators with an intercept

$$
(\hat{\alpha}, \hat{\beta}) = \arg \min_{(a,b)} \sum_{i=1}^{n} (Y_i - a - bZ_i)^2,
$$

and use the coefficient of the treatment $\hat{\beta}$ as the estimator for the average causal effect. We can show the coefficient $\hat{\beta}$ equals the difference in means:

$$
\hat{\beta} = \hat{\tau}. \qquad (4.3)
$$

However, the usual variance estimator from the OLS (see (B.4) in Chapter B), e.g., the output from the lm function of R, equals

$$
\begin{align} \hat{V}_{\text{OLS}} &= \frac{n(n_1-1)}{(n-2)n_1n_0} \hat{S}^2(1) + \frac{n(n_0-1)}{(n-2)n_1n_0} \hat{S}^2(0) \tag{4.4} \\ &\approx \frac{\hat{S}^2(1)}{n_0} + \frac{\hat{S}^2(0)}{n_1}, \notag \end{align}
$$

where the approximation holds with large $n_1$ and $n_0$. It differs from $\hat{V}$ even with large $n_1$ and $n_0$.

Fortunately, the Eicker-Huber-White (EHW) robust variance estimator (see (B.3) in Chapter B) is close to $\hat{V}$:

$$
\begin{align} \hat{V}_{\text{EHW}} &= \frac{\hat{S}^2(1)}{n_1} \frac{n_1-1}{n_1} + \frac{\hat{S}^2(0)}{n_0} \frac{n_0-1}{n_0} \tag{4.5} \\ &\approx \frac{\hat{S}^2(1)}{n_1} + \frac{\hat{S}^2(0)}{n_0} \notag \end{align}
$$

where the approximation holds with large $n_1$ and $n_0$. It is almost identical to $\hat{V}$. Moreover, the so-called HC2 variant of the EHW robust variance estimator is identical to $\hat{V}$. The hccm function in the car package returns the EHW robust variance estimator as well as its HC2 variant.

Problem 4.3 provides more technical details for (4.3)–(4.5).4.5 Examples

4.5.1 Simulation

I first choose the sample size as $n = 100$ with 60 treated and 40 control units,
and generate the potential outcomes with constant individual causal effects.

```
n = 100
n1 = 60
n0 = 40
y0 = rexp(n)
y0 = sort(y0, decreasing = TRUE)
y1 = y0 + 1
```

With the Science Table fixed, I repeatedly generate CREs and apply Theorem 4.1 to obtain the point estimator, the conservative variance estimator, and the confidence interval based on the Normal approximation. The (1,1)th panel of Figure 4.2 shows the scatter plot of the potential outcomes, and the (1,2)th panel of Figure 4.2 shows the histogram of $\hat{\tau} - \tau$.

I then change the potential outcomes by sorting the control potential outcomes in reverse order

```
y0 = sort(y0, decreasing = FALSE)
```

and repeat the above simulation. The (2, 1)th panel of Figure 4.2 shows the scatter plot of the potential outcomes, and the (2, 2)th panel of Figure 4.2 shows the histogram of $\hat{\tau} - \tau$.

I finally permute the control potential outcomes randomly

```
y0 = sample(y0)
```

and repeat the above simulation. The (3, 1)th panel of Figure 4.2 shows the scatter plot of the potential outcomes, and the (2, 2)th panel of Figure 4.2 shows the histogram of $\hat{\tau} - \tau$.

Importantly, in the above three sets of simulations, the correlations between potential outcomes are different but the marginal distributions are the same. The following table compares the true variances, the average estimated variances, and the coverage rates of the 95% confidence intervals.

<table><thead><tr><th></th><th>constant</th><th>negative</th><th>independent</th></tr></thead><tbody><tr><th>var</th><td>0.036</td><td>0.007</td><td>0.020</td></tr><tr><th>estimated var</th><td>0.036</td><td>0.036</td><td>0.036</td></tr><tr><th>coverge rate</th><td>0.947</td><td>1.000</td><td>0.989</td></tr></tbody></table>

The true variance depends on the correlation between the potential outcomes, with positively correlated potential outcomes corresponding to a larger sampling variance. This verifies (4.2). The estimated variances are almost identical because the formula of $\hat{V}$ depends only on the marginal distributions of the potential outcomes. Due to the discrepancy between the true and estimated4.5 Examples

variances, the coverage rates differ across the three sets of simulations. Only
with constant causal effects, the estimated variance is identical to the true
variance, verifying point 3 of Theorem 4.1.

Figure 4.2 also shows the Normal density curves based on the CLT for $\hat{\tau}$. They are very close to the histogram over simulations, verifying Theorem 4.2.

4.5.2 Heavy-tailed outcome and failure of Normal approximations

The CLT of $\hat{\tau}$ in Theorem 4.2 holds under some regularity conditions. Those conditions will be violated with heavy-tailed potential outcomes. We can modify the above simulation studies to illustrate this point. Assume the individual causal effects are constant but the control potential outcomes are contaminated by a Cauchy component with probability 0.1, 0.3, or 0.5. The following code generates the potential outcomes with the probability of contamination being 0.1.

```r
eps = rbinom(n, 1, 0.1)
y0 = (1 - eps)*rexp(n) + eps*rcauchy(n)
y1 = y0 + 1
```

Figures 4.3 and 4.4 show two realizations of the histograms of $\hat{\tau}-\tau$ with the corresponding Normal approximations. With heavy-tailed potential outcomes, the Normal approximations are quite poor. Moreover, unlike Figure 4.2, the histograms are quite sensitive to the random seed of the simulation.

4.5.3 Application

I analyzed the *lalonde* data in Chapter 3.4 to illustrate the idea of the FRT.
Now I use the data to illustrate the theory in this chapter.

```r
> library(Matching)
> data(lalonde)
> z = lalonde$treat
> y = lalonde$re78
```

We can easily calculate the point estimator and standard error based on
the formulas in Theorem 4.1:

```r
> n1 = sum(z)
> n0 = length(z) - n1
> tauhat = mean(y[z==1]) - mean(y[z==0])
> vhat = var(y[z==1])/n1 + var(y[z==0])/n0
> sehat = sqrt(vhat)
> tauhat
[1] 1794.343
> sehat
[1] 670.9967
```![[_resources/Ding - 2023 - A First Course in Causal Inference_Part5/e9d81b3bfb201e6b024ad26daf97bace_MD5.jpg]]

FIGURE 4.2: Left: joint distributions of the potential outcomes with the same marginal distributions. Right: sampling distribution of $\hat{\tau} - \tau$ over $10^4$ simulations with different joint distributions of the potential outcomes.4.5 Examples

![[_resources/Ding - 2023 - A First Course in Causal Inference_Part5/b1166c18bf6e6f8d0f511d6cf0797e77_MD5.jpg]]

FIGURE 4.3: Sampling distribution of $\hat{\tau} - \tau$ with contaminated potential outcomes (with different contamination probabilities): realization one![[_resources/Ding - 2023 - A First Course in Causal Inference_Part5/5a1d230154ba96762fe4d30db545979f_MD5.jpg]]

FIGURE 4.4: Sampling distribution of $\hat{\tau} - \tau$ with contaminated potential outcomes (with different contamination probabilities): realization two## 4.6 Homework Problems

Practitioners often use OLS to estimate the average causal effect which also gives a standard error.

```r
> olsfit = lm(y ~ z)
> summary(olsfit)$coef[2, 1: 2]
Estimate Std. Error
1794.3431   632.8536
```

However, the above standard error seems too small compared to the one based on Theorem 4.1. This can be solved by using the EHW robust standard error.

```r
> library(car)
> sqrt(hccm(olsfit)[2, 2])
[1] 672.6823
> sqrt(hccm(olsfit, type = "hc0"))[2, 2])
[1] 669.3155
> sqrt(hccm(olsfit, type = "hc2"))[2, 2])
[1] 670.9967
```

# 4.6 Homework Problems

## 4.1 *Proof of Lemma 4.1*

Prove Lemma 4.1.

## 4.2 *Alternative proof of Theorem 4.1*

Under a CRE, calculate

$$
\text{var}\{\hat{Y}(1)\}, \text{var}\{\hat{Y}(0)\}, \text{cov}\{\hat{Y}(1), \hat{Y}(0)\}
$$

and use these formulas to calculate $\text{var}(\hat{\tau})$.

Remark: Use the results in Chapter C.

## 4.3 *Neymanian inference and OLS*

Prove (4.3)–(4.5). Moreover, prove that the HC2 variant of the EHW robust variance estimator recovers $\hat{V}$ exactly.

Remark: Chapter B reviews some important technical results about OLS.

## 4.4 *Treatment effect heterogeneity*

Show that $S^2(\tau) = 0$ implies that $S^2(1) = S^2(0)$. Given a counterexample with $S^2(1) = S^2(0)$ but $S^2(\tau) \neq 0$.

Show that $S^2(1) < S^2(0)$ implies that

$$
S(Y(0), \tau) = (n-1)^{-1} \sum_{i=1}^{n} \{Y_i(0) - \bar{Y}(0)\} (\tau_i - \tau) < 0.
$$Give a counterexample with $S^2(1) > S^2(0)$ but $S(Y(0), \tau) < 0$.

Remark: The first result states that no treatment effect heterogeneity implies equal variances in the treated and control potential outcomes. But the converse is not true. The second result states that if the treated potential outcome has a smaller variance than the control potential outcome, then the individual treatment effect is negatively correlated with the control potential outcome. But the converse is not true. Gerber and Green (2012, page 293) and Ding et al. (2019, Appendix B.3) gave related discussions.

4.5 *A better bound of the variance formula*

Neyman (1923)'s conservative variance estimator essentially uses the following upper bound on the true variance:

$$
\mathrm{var}(\hat{\tau}) = \frac{S^2(1)}{n_1} + \frac{S^2(0)}{n_0} - \frac{S^2(\tau)}{n} \le \frac{S^2(1)}{n_1} + \frac{S^2(0)}{n_0},
$$

which uses the trivial fact that $S^2(\tau) \ge 0$. Show the following upper bound

$$
\mathrm{var}(\hat{\tau}) \le \frac{1}{n} \left\{ \sqrt{\frac{n_0}{n_1}} S(1) + \sqrt{\frac{n_1}{n_0}} S(0) \right\}^2 . \quad (4.6)
$$

When does the equality in (4.6) hold?

The upper bound (4.6) motivates another conservative variance estimator

$$
\hat{V}' = \frac{1}{n} \left\{ \sqrt{\frac{n_0}{n_1}} \hat{S}(1) + \sqrt{\frac{n_1}{n_0}} \hat{S}(0) \right\}^2 .
$$

Section 4.5.1 used $\hat{V}$ in the simulation. Repeat the simulation with an addi-
tional comparison with the variance estimator $\hat{V}'$ and the associated confi-
dence interval.

Remark: You may find Section A.1.4 useful for the proof. The upper bound (4.6) can be further improved. Aronow et al. (2014) derived the sharp upper bound for var(τ̂) using the Frechet–Hoeffding inequality. Those improvements are rarely used in practice mainly for two reasons. First, they are more complicated than V̂ which can be conveniently implemented by OLS. Second, the confidence interval based on V̂ also works under other formulations, for example, under a true linear model of the outcome on the treatment, but those improvements do not. Although they are theoretically interesting, those improvements have little practical impact.

4.6 Vector version of Neyman (1923)

The classic result of Neyman (1923) is about a scalar outcome. It is common
to have multiple outcomes in practice. Therefore, we now extend the potential
outcomes to vectors. We consider the average causal effect on a vector outcome## 4.6 *Homework Problems*

$$
V \in \mathbb{R}^K :
$$

$$
\tau_V = \frac{1}{n} \sum_{i=1}^{n} \{V_i(1) - V_i(0)\},
$$

where $V_i(1)$ and $V_i(0)$ are the potential outcomes of $V$ for unit $i$. The Neyman-type estimator for $\tau_V$ is the difference between the sample mean vectors of the observed outcomes under treatment and control:

$$
\hat{\tau}_V = \bar{V}_1 - \bar{V}_0 = \frac{1}{n_1} \sum_{i=1}^{n_1} Z_i V_i - \frac{1}{n_0} \sum_{i=1}^{n_0} (1 - Z_i) V_i.
$$

Consider a CRE. Show that $\hat{\tau}_V$ is unbiased for $\tau_V$. Find the covariance matrix of $\hat{\tau}_V$. Find a (possibly conservative) estimator for the variance.

## 4.7 *Inference in the BRE*

In this book, I use the following definition for the BRE.

**Definition 4.1 (BRE)** The treatment indicators $Z_i$'s are IID Bernoulli($\pi$) with $n_1 = \sum_{i=1}^n Z_i$ receiving the treatment and $n_0 = \sum_{i=1}^n (1-Z_i)$ receiving the control, respectively.

First, we can use the FRT to analyze the BRE. How do we test $H_{0F}$ in the BRE? Can we use the same FRT procedure as in the CRE if the actual experiment is the BRE? If yes, give a justification; if no, explain why.

Second, we can obtain point estimators for $\tau$ and find the associated variance estimators, as Neyman (1923) did for the CRE.



1. Is $\hat{\tau}$ unbiased for $\tau$? Is it consistent?



2. Find an unbiased estimator for $\tau$.



3. Compare the variance of the above unbiased estimator and the asymptotic variance of $\hat{\tau}$.

**Remark:** Under the BRE, the estimator $\hat{\tau}$ does not have finite variance but the variance of its asymptotic distribution is finite.

## 4.8 *Recommended reading*

Ding (2016) compared the Fisherian approach and Neymanian approach to analyzing the CRE.![[_resources/Ding - 2023 - A First Course in Causal Inference_Part5/823a4576505589dbc0cb38e7742aeb16_MD5.jpg]]

![[_resources/Ding - 2023 - A First Course in Causal Inference_Part5/d8aca3c061ad0d77e921dec04868d461_MD5.jpg]]

![[_resources/Ding - 2023 - A First Course in Causal Inference_Part5/d2249bd6bf3e6bcca7dd475ff2529cac_MD5.jpg]]

![[_resources/Ding - 2023 - A First Course in Causal Inference_Part5/feba7460b3432e152c7077932161da5d_MD5.jpg]]# 5

Stratification and Post-Stratification in
Randomized Experiments

Block what you can and randomize what you cannot.
— Box et al. (1978, page 103)

This is the second most famous quote from George Box¹. This chapter will
explain its meaning.

**5.1 Stratification**

A CRE may generate an undesired treatment allocation by chance. Let us
start with a CRE with a discrete covariate $X_i \in \{1, \dots, K\}$, and define $n_{[k]} =$
$\#\{i : X_i = k\}$ and $\pi_{[k]} = n_{[k]}/n$ as the number and proportion of units in
stratum $k$ ($k = 1, \dots, K$). A CRE assigns $n_1$ units to the treatment group
and $n_0$ units to the control group, which results in

$$
n_{[k]1} = \#\{i : X_i = k, Z_i = 1\}, \quad n_{[k]0} = \#\{i : X_i = k, Z_i = 0\}
$$

units in the treatment and control groups, respectively, within stratum *k*. With positive probability, *n*_{[*k*]1} or *n*_{[*k*]0} is zero for some *k*, that is, it is possible that some strata only have treated or control units. Even if none of the *n*_{[*k*]1}’s or *n*_{[*k*]0}’s are zero, with high probability

$$
\frac{n_{[k]1}}{n_1} - \frac{n_{[k]0}}{n_0} \neq 0, \qquad (5.1)
$$

and the magnitude can be quite large. So the proportions of units in stratum
$k$ are different across the treatment and control groups although on average
their difference is zero (see Problem 5.1):

$$
E \left( \frac{n_{[k]1}}{n_1} - \frac{n_{[k]0}}{n_0} \right) = 0. \qquad (5.2)
$$

¹His most famous quote is “all models are wrong but some are useful” (Box, 1979, page 202).When $n_{[k]1}/n_1 - n_{[k]0}/n_0$ is large for some strata $k$'s, the treatment and control groups have undesirable covariate imbalance. Such covariate imbalance deteriorates the quality of the experiment, making it difficult to interpret the results of the experiment since the difference in the outcomes may be attributed to the treatment or the covariate imbalance.

How can we actively avoid covariate imbalance in the experiment? We can conduct stratified randomized experiments (SRE).

**Definition 5.1 (SRE)** Fix the $n_{[k]1}$'s or $n_{[k]0}$'s. We conduct K independent CREs within the K strata of a discrete covariate X.

In agricultural experiments, the SRE is also called the *randomized block design*, with the strata called the blocks. Analogously, *stratified randomization* is also called *block randomization*.² The total number of randomizations in an SRE equals

$$
\prod_{k=1}^{K} \binom{n_{[k]}}{n_{[k]1}}
$$

and each feasible randomization has equal probability. Within stratum $k$, the proportion of units receiving the treatment is

$$
e_{[k]} = \frac{n_{[k]1}}{n_{[k]}}
$$

which is also called the *propensity score*, a concept that will play a central role in Part III of this book (see Definition 11.1). An SRE is different from a CRE: first, all feasible randomizations in an SRE form a subset of all feasible randomizations in a CRE, so

$$
\prod_{k=1}^{K} \binom{n_{[k]}}{n_{[k]1}} < \binom{n}{n_1};
$$

second, $e_{[k]}$ is fixed in an SRE but random in a CRE.

For every unit $i$, we have potential outcomes $Y_i(1)$ and $Y_i(0)$, and individual causal effect $\tau_i = Y_i(1) - Y_i(0)$. For stratum $k$, we have the stratum-specific average causal effect

$$
\tau_{[k]} = n_{[k]}^{-1} \sum_{X_i=k} \tau_i.
$$

The average causal effect is

$$
\tau = n^{-1} \sum_{i=1}^{n} \tau_i = n^{-1} \sum_{k=1}^{K} \sum_{X_i=k} \tau_i = \sum_{k=1}^{K} \pi_{[k]} \tau_{[k]},
$$

²Chapter 3.5.3 mentioned two Fisherian principles for experiments: *randomization* and *replication*. *Blocking* is the third Fisherian principle.which is a weighted average of the stratum-specific average causal effects.

If we are interested in $\tau_{[k]}$, then we can use the methods in Chapters 3 and 4 for the CRE within stratum $k$. Below I will discuss statistical inference for $\tau$.

## 5.2 FRT

### 5.2.1 Theory

In parallel with the discussion of a CRE, I will start with the FRT in an SRE.
The sharp null hypothesis is still

$$
H_{0F}: Y_i(1) = Y_i(0) \text{ for all units } i = 1, \dots, n.
$$

The fundamental idea of the FRT applies to any randomized experiment: we can use any test statistic $T = T(\mathbf{Z}, \mathbf{Y}, \mathbf{X})$, where $\mathbf{Z}, \mathbf{Y}$ and $\mathbf{X}$ are the treatment vector, observed outcome vector and the covariate matrix, respectively. Under the SRE and $H_{0F}$, the test statistic $T$ has a known distribution because $\mathbf{Z}$ has a known distribution under the SRE. However, we must be careful with two subtle issues. First, when we simulate the treatment vector, we must permute the treatment indicators within strata of $\mathbf{X}$ according to Definition 5.1. The resulting FRT is sometimes called the *conditional randomization test* or *conditional permutation test*. Second, we should choose test statistics that can reflect the nature of the SRE. Below I give some canonical choices of the test statistic.

**Example 5.1 (Stratified estimator)** *Motivated by estimating $\tau$ (see Chapter 5.3 below), we can use the following stratified estimator in the FRT:*

$$
\hat{\tau}_S = \sum_{k=1}^{K} \pi_{[k]} \hat{\tau}_{[k]}
$$

where

$$
\hat{\tau}_{[k]} = n_{[k]1}^{-1} \sum_{i=1}^{n} I(X_i = k, Z_i = 1) Y_i - n_{[k]0}^{-1} \sum_{i=1}^{n} I(X_i = k, Z_i = 0) Y_i
$$

is the stratum-specific difference-in-means within stratum $k$.

**Example 5.2 (Studentized stratified estimator)** *Motivated by the studentized statistic in the simple two-sample problem, we can use the following studentized statistic for the stratified estimator in the FRT:*

$$
t_S = \frac{\hat{\tau}_S}{\sqrt{\hat{V}_S}},
$$with

$$
\hat{V}_S = \sum_{k=1}^{K} \pi_{[k]}^2 \left( \frac{\hat{S}_{[k]}^2(1)}{n_{[k]1}} + \frac{\hat{S}_{[k]}^2(0)}{n_{[k]0}} \right)
$$

where $\hat{S}_{[k]}^2(1)$ and $\hat{S}_{[k]}^2(0)$ are the stratum-specific sample variances of the outcomes under the treatment and control, respectively. The exact form of this statistic is motivated by the Neymanian perspective discussed in Section 5.3 below.

**Example 5.3 (Combining Wilcoxon rank-sum statistics)** We first compute the Wilcoxon rank sum statistic $W_{[k]}$ within stratum k (recall Example 3.3) and then combine them as

$$
W_S = \sum_{k=1}^{K} c_{[k]} W_{[k]}.
$$

Based on different asymptotic schemes and optimality criteria, Van Elteren (1960) proposed two weighting methods, one with

$$
c_{[k]} = \frac{1}{n_{[k]1} n_{[k]0}},
$$

and the other with

$$
c_{[k]} = \frac{1}{n_{[k]} + 1}.
$$

The motivations for these weights are quite technical, and other choices of weights may also be reasonable.

**Example 5.4 (Hodges and Lehmann (1962)'s aligned rank statistic)**

Van Elteren (1960)'s statistic works well with a few large strata. However, it does not work well with many small strata since it does not make enough comparisons, potentially losing information in the data. Hodges and Lehmann (1962) proposed a test statistic that makes more comparisons across strata after standardizing the outcomes. They suggested first centering the outcomes as

$$
\tilde{Y}_i = Y_i - \bar{Y}_{[k]}
$$

with the stratum-specific mean $\bar{Y}_{[k]} = n_{[k]}^{-1} \sum_{X_i=k} Y_i$ if $X_i = k$, then obtaining the ranks $(\tilde{R}_1, \dots, \tilde{R}_n)$ of the pooled outcomes $(\tilde{Y}_1, \dots, \tilde{Y}_n)$, and finally constructing the test statistic

$$
\tilde{W} = \sum_{i=1}^{n} Z_i \tilde{R}_i.
$$

We can simulate the exact distributions of the above test statistics under the SRE. We can also calculate their means and variances and obtain the p-values based on Normal approximations.

After searching for a while, I failed to find a detailed discussion of the Kolmogorov-Smirnov statistic for the SRE. Below is my proposal.**Example 5.5 (Kolmogorov–Smirnov statistic)** We compute $D_{[k]}$, the maximum difference between the empirical distributions of the outcomes under treatment and control within stratum $k$. The final test statistic can be

$$
D_S = \sum_{k=1}^{K} c_{[k]} D_{[k]}
$$

or

$$
D_{\max} = \max_{1 \le k \le K} c_{[k]} D_{[k]},
$$

where $c_{[k]} = \sqrt{n_{[k]1}n_{[k]0}/n_{[k]}}$ is motivated by the limiting distribution of $D_{[k]}$ with $n_{[k]1}$ and $n_{[k]0}$ approaching infinity (see Example 3.4). The statistics $D_S$ and $D_{\max}$ are more appropriate when all strata have large sample sizes. Another reasonable choice is

$$
D = \max_{y} \left| \sum_{k=1}^{K} \pi_{[k]} \{ \hat{F}_{[k]1}(y) - \hat{F}_{[k]0}(y) \} \right|,
$$

where $\hat{F}_{[k]1}(y)$ and $\hat{F}_{[k]0}(y)$ are the stratum-specific empirical distribution functions of the outcomes under the treatment and control, respectively. The statistic $D$ is appropriate in both the cases with large strata and the cases with many small strata.

### 5.2.2 An application

The Penn Bonus experiment is an example to illustrate the FRT in the SRE. The dataset used by Koenker and Xiao (2002) is from a job training program stratified on *quarter*, with the outcome being the duration before employment.

```matlab
> penndata = read.table("Penn46 CHAR.txt")
> z = penndata*treatment
> y = log(penndata$duration)
> block = penndata$quarter
> table(penndata*treatment, penndata$quarter)
0    1    2    3    4    5
0  234  41  687  794  738  860
1   87  48  757  866  811  461
```

I will focus on $\hat{\tau}_S$ and $W_S$, and leave the FRT with other statistics as Problem 5.6. The following function computes $\hat{\tau}_S$ and $W_S$:

```matlab
stat_SRE = function(z, y, x)
{
    xlevels = unique(x)
    K        = length(xlevels)
    PiK      = rep(0, K)
    TauK     = rep(0, K)
``````R
WK = rep(0, K)
for(k in 1:K)
{
  xk = xlevels[k]
  zk = z[x == xk]
  yk = y[x == xk]
  PiK[k] = length(zk)/length(z)
  TauK[k] = mean(yk[zk==1]) - mean(yk[zk==0])
  WK[k] = wilcox.test(yk[zk==1], yk[zk==0])$statistic
}

return(c(sum(PiK*TauK), sum(WK/PiK)))
}
```

The following function generates a random treatment assignment in the SRE based on the observed data:

```R
zRandomSRE = function(z, x)
{
  xlevels = unique(x)
  K = length(xlevels)
  zrandom = z
  for(k in 1:K)
  {
    xk = xlevels[k]
    zrandom[x == xk] = sample(z[x == xk])
  }
  return(zrandom)
}
```

Based on the above data and functions, we can simulate the randomization distributions of the test statistics and compute the *p*-values.

```R
> statobs = stat_SRE(z, y, block)
> MC = 10^3
> statSREMC = matrix(0, MC, 2)
> for(mc in 1:MC)
+ {
+   zrandom = zRandomSRE(z, block)
+   statSREMC[mc, ] = stat_SRE(zrandom, y, block)
+ }
> mean(statSREMC[, 1] <= statobs[1])
[1] 0.002
> mean(statSREMC[, 2] <= statobs[2])
[1] 0.001
```

In the above, I calculate the *p*-values based on left-tail probabilities because the treatment has a negative effect on the outcome. See Figure 5.1 for more details about the observed test statistics and randomization distributions.![[_resources/Ding - 2023 - A First Course in Causal Inference_Part5/11cfbd347f4895dbd6f35140b0b1d65d_MD5.jpg]]

FIGURE 5.1: The randomization distributions of $\hat{\tau}_S$ and $W_S$ based on the data from the Penn Bonus experiment, with $10^4$ Monte Carlo draws.## 5.3 Neymanian inference

### 5.3.1 Point and interval estimation

Statistical inference for an SRE builds on the fact that it essentially consists of K independent CREs. Based on this, we can extend Neyman (1923)'s results to the SRE. Within stratum k, the difference-in-means $\hat{\tau}_{[k]}$ is unbiased for $\tau_{[k]}$ with variance

$$
\mathrm{var}(\hat{\tau}_{[k]}) = \frac{S_{[k]}^2(1)}{n_{[k]1}} + \frac{S_{[k]}^2(0)}{n_{[k]0}} - \frac{S_{[k]}^2(\tau)}{n_{[k]}},
$$

where $S_{[k]}^2(1)$, $S_{[k]}^2(0)$ and $S_{[k]}^2(\tau)$ are the stratum-specific variances of potential outcomes and the individual causal effects, respectively. Therefore, the stratified estimator $\hat{\tau}_S = \sum_{k=1}^K \pi_{[k]} \hat{\tau}_{[k]}$ is unbiased for $\tau = \sum_{k=1}^K \pi_{[k]} \tau_{[k]}$ with variance

$$
\mathrm{var}(\hat{\tau}_S) = \sum_{k=1}^{K} \pi_{[k]}^2 \mathrm{var}(\hat{\tau}_{[k]}).
$$

If $n_{[k]1} \ge 2$ and $n_{[k]0} \ge 2$, then we can obtain the sample variances $\hat{S}_{[k]}^2(1)$ and $\hat{S}_{[k]}^2(0)$ of the outcomes within stratum k and construct a conservative variance estimator

$$
\hat{V}_S = \sum_{k=1}^{K} \pi_{[k]}^2 \left( \frac{\hat{S}_{[k]}^2(1)}{n_{[k]1}} + \frac{\hat{S}_{[k]}^2(0)}{n_{[k]0}} \right),
$$

where $\hat{S}_{[k]}^2(1)$ and $\hat{S}_{[k]}^2(0)$ are the stratum-specific sample variances of the outcomes under treatment and control, respectively. Based on a Normal approximation of $\hat{\tau}_S$, we can construct a Wald-type $1 - \alpha$ confidence interval for $\tau$:

$$
\hat{\tau}_S \pm z_{1-\alpha/2} \sqrt{\hat{V}_S}.
$$

From a hypothesis testing perspective, under $H_{0N}: \tau = 0$, we can compare $t_S = \hat{\tau}_S/\sqrt{\hat{V}_S}$ with the standard Normal quantiles to obtain asymptotic p-values. The statistic $t_S$ appears in Example 5.2 for the FRT. Chapter 8 later will show that using $t_S$ in the FRT yields finite-sample exact p-value under $H_{0F}$ and asymptotically valid p-value under $H_{0N}$.

Here I omit the technical details for the CLT of $\hat{\tau}_S$. See Liu and Yang (2020) for a proof, which includes the two regimes with a few large strata and many small strata. I will illustrate this theoretical issue using numerical examples in Chapter 5.3.2 below.

### 5.3.2 Numerical examples

The following function computes the Neymanian point and variance estimators under the SRE:Neyman_SRE = function(z, y, x)
{
    xlevels = unique(x)
    K        = length(xlevels)
    PiK      = rep(0, K)
    TauK     = rep(0, K)
    varK     = rep(0, K)
    for(k in 1:K)
    {
        xk        = xlevels[k]
        zk        = z[x == xk]
        yk        = y[x == xk]
        PiK[k]    = length(zk)/length(z)
        TauK[k]   = mean(yk[zk==1]) - mean(yk[zk==0])
        varK[k]   = var(yk[zk==1])/sum(zk) +
                    var(yk[zk==0])/sum(1 - zk)
    }

    return(c(sum(PiK*TauK), sum(PiK^2*varK)))
}

The first simulation setting has $K = 5$ and each stratum has 80 units. TauHat and VarHat are the point and variance estimators over $10^4$ simulations.

```R
> K = 5
> n = 80
> n1 = 50
> n0 = 30
> x = rep(1:K, each = n)
> y0 = rexp(n*K, rate = x)
> y1 = y0 + 1
> zb = c(1, n1), get(0, n0))
> MC = 10^4
> TauHat = rep(0, MC)
> VarHat = rep(0, MC)
> for(mc in 1:MC)
+ {
+   z = replicate(K, sample(zb))
+   z = as.vector(z)
+   y = z*y1 + (1-z)*y0
+   est = Neyman_SRE(z, y, x)
+   TauHat[mc] = est[1]
+   VarHat[mc] = est[2]
+ }
> var(TauHat)
[1] 0.002248925
> mean(VarHat)
[1] 0.002266396
```

The upper panel of Figure 5.2 shows the histogram of the point estimator,which is symmetric and bell-shaped around the true parameter. From the
above, the average value of the variance estimator is almost identical to the
variance of the estimators because the individual causal effects are constant.

The second simulation setting has $K = 50$ and each stratum has 8 units.

```r
> K = 50
> n = 8
> n1 = 5
> n0 = 3
> x = rep(1:K, each = n)
> y0 = rexp(n*K, rate = log(x + 1))
> y1 = y0 + 1
> zb = crep(1, n1), rep(0, n0))
> MC = 10^4
> TauHat = rep(0, MC)
> VarHat = rep(0, MC)
> for(mc in 1:MC)
+ {
+   z = replicate(K, sample(zb))
+   z = as.vector(z)
+   y = z*y1 + (1-z)*y0
+   est = Neyman_SRE(z, y, x)
+   TauHat[mc] = est[1]
+   VarHat[mc] = est[2]
+ }
>
> hist(TauHat, xlab = expression(hat(tau)[S]),
+       ylab = "", main = "many small strata",
+       border = FALSE, col = "grey",
+       breaks = 30, yaxt = 'n',
+       xlim = c(0.8, 1.2))
> abline(v = 1)
>
> var(TauHat)
[1] 0.001443111
> mean(VarHat)
[1] 0.001473616
```

The lower panel of Figure 5.2 shows the histogram of the point estimator, which is symmetric and bell-shaped around the true parameter. Again, the average value of the variance estimator is almost identical to the variance of the estimators because the individual causal effects are constant.

We finally use the Penn Bonus Experiment to illustrate the Neymanian
inference in an SRE. Applying the function Neyman_SRE to the dataset, we
obtain:

```r
> pendata = read.table("Penn46 CHAR.txt")
> z = pendata$treatment
> y = log(pendata$duration)
> block = pendata$quarter
```![[_resources/Ding - 2023 - A First Course in Causal Inference_Part5/4d20559f47c742e702a7c05af93f54e1_MD5.jpg]]

FIGURE 5.2: Normal approximations under two regimes```r
> est = Neyman_SRE(z, y, block)
> est[1]
[1] -0.08990646
> sqrt est[2])
[1] 0.03079775
```

So the job training program significantly shortens the log of the duration time before employment.

### 5.3.3 Comparing the SRE and the CRE

What are the benefits of the SRE compared with the CRE? I have motivated the SRE from the covariate balance perspective. In addition, I will show that better covariate balance in turn results in better estimation precision of the average causal effect. To make a fair comparison, I assume that $e_{[k]} = e$ for all $k$ which ensures that the difference in means equals the stratified estimator:

$$
\hat{\tau} = \hat{\tau}_S. \qquad (5.3)
$$

I leave the proof of (5.3) as Problem 5.2.

We now compare the sampling variances. The classic analysis of variance technique motivates the decomposition of the total variance into the summation of the within-strata and between-strata variances, yielding

$$
\begin{align*}
S^2(1) &= (n-1)^{-1} \sum_{i=1}^{n} \{Y_i(1) - \bar{Y}(1)\}^2 \\
&= (n-1)^{-1} \sum_{k=1}^{K} \sum_{X_i=k} \{Y_i(1) - \bar{Y}_{[k]}(1) + \bar{Y}_{[k]}(1) - \bar{Y}(1)\}^2 \\
&= (n-1)^{-1} \sum_{k=1}^{K} \sum_{X_i=k} \left[ \{Y_i(1) - \bar{Y}_{[k]}(1)\}^2 + \{\bar{Y}_{[k]}(1) - \bar{Y}(1)\}^2 \right] \\
&= \sum_{k=1}^{K} \left[ \frac{n_{[k]} - 1}{n-1} S_{[k]}^2(1) + \frac{n_{[k]}}{n-1} \{\bar{Y}_{[k]}(1) - \bar{Y}(1)\}^2 \right],
\end{align*}
$$

and similarly,

$$
\begin{align*}
S^2(0) &= \sum_{k=1}^{K} \left[ \frac{n_{[k]} - 1}{n-1} S_{[k]}^2(0) + \frac{n_{[k]}}{n-1} \{\bar{Y}_{[k]}(0) - \bar{Y}(0)\}^2 \right], \\
S^2(\tau) &= \sum_{k=1}^{K} \left[ \frac{n_{[k]} - 1}{n-1} S_{[k]}^2(\tau) + \frac{n_{[k]}}{n-1} \{\tau_{[k]} - \tau\}^2 \right].
\end{align*}
$$

The variance of the difference-in-means estimator under the CRE decomposesinto

$$
\begin{align*}
& \operatorname{var}_{\text{CRE}}(\hat{\tau}) \\
&= \frac{S^2(1)}{n_1} + \frac{S^2(0)}{n_0} - \frac{S^2(\tau)}{n} \\
&= \sum_{k=1}^{K} \left[ \frac{n_{[k]} - 1}{(n-1)n_1} S_{[k]}^2(1) + \frac{n_{[k]} - 1}{(n-1)n_0} S_{[k]}^2(0) - \frac{n_{[k]} - 1}{(n-1)n} S_{[k]}^2(\tau) \right] \\
&\quad + \sum_{k=1}^{K} \left[ \frac{n_{[k]} - 1}{(n-1)n_1} \{\bar{Y}_{[k]}(1) - \bar{Y}(1)\}^2 + \frac{n_{[k]} - 1}{(n-1)n_0} \{\bar{Y}_{[k]}(0) - \bar{Y}(0)\}^2 \right. \\
&\qquad \left. - \frac{n_{[k]} - 1}{(n-1)n} \{\tau_{[k]} - \tau\}^2 \right].
\end{align*}
$$

With large $n_{[k]}$'s, it is approximately

$$
\begin{align*}
& \operatorname{var}_{\text{CRE}}(\hat{\tau}) \\
&\approx \sum_{k=1}^{K} \left[ \frac{\pi_{[k]}}{n_1} S_{[k]}^2(1) + \frac{\pi_{[k]}}{n_0} S_{[k]}^2(0) - \frac{\pi_{[k]}}{n} S_{[k]}^2(\tau) \right] \\
&\quad + \sum_{k=1}^{K} \left[ \frac{\pi_{[k]}}{n_1} \{\bar{Y}_{[k]}(1) - \bar{Y}(1)\}^2 + \frac{\pi_{[k]}}{n_0} \{\bar{Y}_{[k]}(0) - \bar{Y}(0)\}^2 - \frac{\pi_{[k]}}{n} \{\tau_{[k]} - \tau\}^2 \right].
\end{align*}
$$

The constant propensity scores assumption ensures

$$
\pi_{[k]}/n_{[k]1} = 1/(ne), \quad \pi_{[k]}/n_{[k]0} = 1/\{n(1-e)\}, \quad \pi_{[k]}/n_{[k]} = 1/n,
$$

which allow us to rewrite the variance of $\hat{\tau}_S$ under the SRE as

$$
\begin{align*}
\operatorname{var}_{\text{SRE}}(\hat{\tau}_{\text{S}}) &= \sum_{k=1}^{K} \pi_{[k]}^2 \left[ \frac{S_{[k]}^2(1)}{n_{[k]1}} + \frac{S_{[k]}^2(0)}{n_{[k]0}} - \frac{S_{[k]}^2(\tau)}{n_{[k]}} \right] \\
&= \sum_{k=1}^{K} \left[ \frac{\pi_{[k]}}{n_1} S_{[k]}^2(1) + \frac{\pi_{[k]}}{n_0} S_{[k]}^2(0) - \frac{\pi_{[k]}}{n} S_{[k]}^2(\tau) \right].
\end{align*}
$$

With large $n_{[k]}$'s, approximately, the difference between $\operatorname{var}_{\text{CRE}}(\hat{\tau})$ and $\operatorname{var}_{\text{SRE}}(\hat{\tau}_{\text{S}})$ is

$$
\sum_{k=1}^{K} \left[ \frac{\pi_{[k]}}{n_1} \{\bar{Y}_{[k]}(1) - \bar{Y}(1)\}^2 + \frac{\pi_{[k]}}{n_0} \{\bar{Y}_{[k]}(0) - \bar{Y}(0)\}^2 - \frac{\pi_{[k]}}{n} (\tau_{[k]} - \tau)^2 \right]
$$

which is nonnegative because it equals (see Problem 5.4)

$$
\sum_{k=1}^{K} \frac{\pi_{[k]}}{n} \left\{ \sqrt{\frac{n_0}{n_1}} \{\bar{Y}_{[k]}(1) - \bar{Y}(1)\} + \sqrt{\frac{n_1}{n_0}} \{\bar{Y}_{[k]}(0) - \bar{Y}(0)\} \right\}^2 \geq 0, \quad (5.4)
$$The difference in (5.4) is zero only in the extreme case that

$$
\sqrt{\frac{n_0}{n_1}} \{\bar{Y}_{[k]}(1) - \bar{Y}(1)\} + \sqrt{\frac{n_1}{n_0}} \{\bar{Y}_{[k]}(0) - \bar{Y}(0)\} = 0
$$

for $k = 1, \dots, K$. When the covariate is predictive of the potential outcomes, the above quantities are usually not all zeros, which ensures the efficiency gain of the SRE compared with the CRE. Only in the extreme cases that the covariate is not predictive at all, the large-sample efficiency gain is zero. In those cases, the SRE can even result in less efficient estimators in finite samples. The above discussion corroborates the quote from George Box at the beginning of this chapter.

I will end this section with several remarks. First, the above comparison is based on the sampling variance, and we can also compare the estimated variances under the SRE and the CRE. The results are similar. Second, increasing *K* improves efficiency, but this argument depends on the large strata assumption. So we face a trade-off in practice. We cannot arbitrarily increase *K*, and the most extreme case is *n*_{[k]1} = *n*_{[k]0} = 1, which is called the matched-pairs experiment and will be discussed in Chapter 7.

5.4 Post-stratification in a CRE

In a CRE with a discrete covariate $X$, the numbers of units receiving the treatment and control are random within stratum $k$. In a SRE, these numbers are fixed. But if we conduct conditional inference given $\boldsymbol{n} = \{n_{[k]1}, n_{[k]0}\}_{k=1}^K$, then a CRE becomes a SRE. Mathematically, if none of the components of $\boldsymbol{n}$ are zero, then

$$
\mathrm{pr}_{\mathrm{CRE}}(\mathbf{Z} = \mathbf{z} | \mathbf{n}) = \frac{\mathrm{pr}_{\mathrm{CRE}}(\mathbf{Z} = \mathbf{z}, \mathbf{n})}{\mathrm{pr}_{\mathrm{CRE}}(\mathbf{n})} = \frac{1}{\prod_{k=1}^{K} \binom{n_{[k]}}{n_{[k]1}}}, \quad (5.5)
$$

that is, the conditional distribution of $\mathbf{Z}$ from a CRE given $\mathbf{n}$ is identical to
the distribution of $\mathbf{Z}$ from an SRE. I leave the proof of (5.5) as Problem 5.5.
So conditional on $\mathbf{n}$, we can analyze a CRE with a discrete covariate $X$ in the
same way as in a SRE. In particular, the FRT becomes a *conditional FRT*,
and the Neymanian analysis becomes *post-stratification*:

$$
\hat{\tau}_{\text{PS}} = \sum_{k=1}^{K} \pi_{[k]} \hat{\tau}_{[k]},
$$

which has an identical form as $\hat{\tau}_S$. The variance of $\hat{\tau}_{PS}$ conditioning on $\boldsymbol{n}$ is identical to the variance of $\hat{\tau}_S$ under the SRE.Hennessy et al. (2016) used simulation to show that the conditional FRT is often more powerful than the unconditional one. Miratrix et al. (2013) used theory to show that in many cases, post-stratification improves efficiency compared with $\hat{\tau}$. Both results hold if $X$ is predictive of the outcome. However, the simulation is based on a limited number of data-generating processes, and the theory assumes all strata are large enough. We can not go too extreme in the conditional FRT or post-stratification because with a larger $K$ it is more likely that some $n_{[k]1}$ or $n_{[k]0}$ become zero. Small or zero values of $n_{[k]1}$ or $n_{[k]0}$ greatly reduce the number of randomizations in the FRT, possibly reducing the power dramatically. The problem for the Neymanian counterpart is more salient because we cannot even define $\hat{\tau}_{\text{PS}}$ and the corresponding variance estimator.

Stratification uses $X$ in the design stage and post-stratification uses $X$ in the analysis stage. They are duals for using $X$. Asymptotically, their difference is small with large strata (Miratrix et al., 2013).

### 5.4.1 Meinert et al. (1970)'s Example

We use the data from a CRE reported in Meinert et al. (1970), which were also used by Rothman et al. (2008). The treatment is tolbutamide and the control is a placebo.

<table><thead><tr><th colspan="3">Age &lt; 55</th><th colspan="3">Age ≥ 55</th></tr><tr><th></th><th>Surviving</th><th>Dead</th><th></th><th>Surviving</th><th>Dead</th></tr></thead><tbody><tr><th>Z = 1</th><td>98</td><td>8</td><th>Z = 1</th><td>76</td><td>22</td></tr><tr><th>Z = 0</th><td>115</td><td>5</td><th>Z = 0</th><td>69</td><td>16</td></tr></tbody><tfoot><tr><td colspan="6" style="text-align: center;">Total</td></tr><tr><td colspan="3"></td><th>Surviving</th><th>Dead</th><th></th></tr><tr><th>Z = 1</th><td>174</td><td>30</td><th>Z = 0</th><td>184</td><td>21</td></tr></tfoot></table>

The following table shows the estimates for two strata separately, the post-stratified estimator, and the crude estimator ignoring the binary covariate, as well as the corresponding standard errors.

<table><thead><tr><th></th><th>stratum 1</th><th>stratum 2</th><th>post-stratification</th><th>crude</th></tr></thead><tbody><tr><th>est</th><td>-0.034</td><td>-0.036</td><td>-0.035</td><td>-0.045</td></tr><tr><th>se</th><td>0.031</td><td>0.060</td><td>0.032</td><td>0.033</td></tr></tbody></table>

The crude estimator and the post-stratification estimator do not lead to fundamentally different results. However, the crude estimator is larger than both of the stratum-specific estimators, whereas the post-stratification estimator is within the range.

### 5.4.2 Chong et al. (2016)'s Example

Chong et al. (2016) conducted an SRE on 219 students of a rural secondaryschool in the Cajamarca district of Peru during the 2009 school year. They first
provided the village clinic with iron supplements and trained the local staff
to distribute one free iron pill to any adolescent who requested one in person.
They then randomly assigned students to three arms with three different types
of videos: in the first video, a popular soccer player was encouraging the use
of iron supplements to maximize energy ("soccer" arm); in the second video,
a physician was encouraging the use of iron supplements to improve overall
health ("physician" arm); the third video did not mention iron at all ("control"
arm). The experiment was stratified on the class level (1-5). The treatment
and control group sizes within classes are shown below:

```r
> library("foreign")
> dat_chong = read.dta("chong.dta")
> table.dat_chong$treatment, dat_chong$class_level)

          1  2  3  4  5
Soccer Player 16 19 15 10 10
Physician    17 20 15 11 10
Placebo      15 19 16 12 10
```

One outcome of interest is the average grades in the third and fourth
quarters of 2009, and an important background covariate was the anemia
status at baseline. I will only use a subset of the original data in this chapter.

```r
> use_vars = c("treatment",
+               "gradesq34",
+               "class_level",
+               "anemic_base_re")
> dat physician = subset.dat_chong,
+       treatment != "Soccer Player",
+       select = use_vars)
> dat physician$z = (dat physician$treatment == "Physician")
> dat physician$y = dat physician$gradesq34
> table.dat physician$z,
+       dat physician$class_level)

          1  2  3  4  5
FALSE  15 19 16 12 10
TRUE    17 20 15 11 10

> table.dat physician$z,
+       dat physician$class_level,
+       dat physician$anemic_base_re)
, , = No

          1  2  3  4  5
FALSE   6 14 12  7  4
TRUE    8 12  9  5  6

, , = Yes
```1 2 3 4 5
FALSE 9 5 4 5 6
TRUE 9 8 6 6 4

We can use the Neyman_SRE function defined before to compute the stratified estimator and its estimated variance.

tauS = with ( dat_physician ,
               Neyman_SRE ( z , gradesq34 , class_level ))

An important additional covariate is the baseline anemic indicator which
is quite important for predicting the outcome. Further conditioning the base-
line anemic indicator, we have an experiment with 5 × 2 = 10 strata, with
the treatment and control group sizes shown above. Again we can use the
Neyman_SRE function defined before to compute the post-stratified estimator
and its estimated variance.

> tauSPS = with (dat_phsician, {
+   sps = interaction (class_level, anemic_base_re)
+   Neyman_SRE (z, gradesq34, sps)
+ })

The following table compares these two estimators. The post-stratified
estimator yields a much smaller *p*-value.

| stratify | est | se | t.stat | p.value |
|---|---|---|---|---|
| stratify and post-stratify | 0.463 | 0.190 | 2.434 | 0.015 |

This example illustrates that post-stratification can be used not only in
the CRE but also in the SRE with additional discrete covariates.

5.5 Practical questions

How do we choose *X* to construct an SRE? Theoretically, *X* should be pre-
dictive of the potential outcomes. In some cases, the experimenter has enough
background knowledge about the predictive covariates based on, for exam-
ple, some pilot studies. Then the choice of *X* should be straightforward. In
some other cases, this background knowledge may not be clear enough. Ex-
perimenters instead choose *X* based on logistical convenience, for example, *X*
can be the indicator for the study areas or the cohort of students.

The choice of *K* is a related problem. Theoretically, more stratification
increases the estimation efficiency if all strata are large enough. However,
extremely large *K* may even decrease the estimation efficiency. In simulationstudies, we observe diminishing marginal returns of increasing $K$. Anecdotally, $K = 5$ often suffices for efficiency gain (the magic number 5 will appear again in Chapter 11). Some experimenter prefers the most extreme version of the SRE with $K = n/2$. This results in the matched-pairs experiment, which will be discussed in Chapter 7 later.

Some experiments have multidimensional continuous covariates. Can the SRE still be used? If we have a pilot study, we can build a model for the potential outcome $Y(0)$ given those covariates, and then we can choose $X$ as a discretized version of the predictor $\hat{Y}(0)$. In general, if we do not have such a pilot study or we do not want to make ad hoc discretizations, we can use a more general strategy called rerandomization, which will be the topic for Chapter 6.

## 5.6 Homework Problems

### 5.1 Covariate balance in the CRE

Under the CRE, prove (5.2).

### 5.2 Consequence of the constant propensity score

Prove (5.3).

### 5.3 Consequence of constant individual causal effects

Assume that the individual causal effects are constant $\tau_i = \tau$ for all $i = 1, \dots, n$. Consider the following class of weighted estimator for $\tau$:

$$
\hat{\tau}_w = \sum_{k=1}^{K} w_{[k]} \hat{\tau}_{[k]},
$$

where the weights $w_{[k]}$'s are non-negative for all $k$.

Find the condition on the $w_{[k]}$'s such that $\hat{\tau}_w$ is unbiased for $\tau$. Among all unbiased estimators, find the weights that give the $\hat{\tau}_w$ with the minimum variance.

### 5.4 Compare the CRE and SRE

Prove (5.4).

### 5.5 From the CRE to the SRE

Prove (5.5).## 5.6 Homework Problems

### 5.6 More FRTs for Section 5.2.2

Extend the analysis in Section 5.2.2 using FRTs with other test statistics.

### 5.7 FRT for an SRE in Imbens and Rubin (2015)

Imbens and Rubin (2015) discussed an SRE from the Student/Teacher Achievement Ratio experiment conducted in 1985–1986 in Tennessee. The kindergarten data are below:

```
treatment = list(c(1,1,0,0),
                 c(1,1,0,0),
                 c(1,1,1,0,0),
                 c(1,1,0,0),
                 c(1,1,0,0),
                 c(1,1,0,0),
                 c(1,1,0,0),
                 c(1,1,1,0,0),
                 c(1,1,0,0),
                 c(1,1,0,0),
                 c(1,1,0,0),
                 c(1,1,1,0,0),
                 c(1,1,0,0),
                 c(1,1,0,0),
                 c(1,1,0,0),
                 c(1,1,0,0))
outcome = list(c(0.165,0.321,-0.197,0.236),
               c(0.918,-0.202,1.19,0.117),
               c(0.341,0.561,-0.059,-0.496,0.225),
               c(-0.024,-0.450,-1.104,-0.956),
               c(-0.258,-0.083,-0.126,0.106),
               c(1.151,0.707,0.597,-0.495),
               c(0.077,0.371,0.685,0.270),
               c(-0.870,-0.496,-0.444,0.392,-0.934,-0.633),
               c(-0.568,-1.189,-0.891,-0.856),
               c(-0.727,-0.580,-0.473,-0.807),
               c(-0.533,0.458,-0.383,0.313),
               c(1.001,0.102,0.484,0.474,0.140),
               c(0.855,0.509,0.205,0.296),
               c(0.618,0.978,0.742,0.175),
               c(-0.545,0.234,-0.434,-0.293),
               c(-0.240,-0.150,0.355,-0.130))
```

The strata correspond to schools, and the unit of analysis is the teacher or class. The treatment equals 1 for small classes (13–17 students per teacher) and 0 for regular classes (22–25 students per teacher). The outcome is the standardized average mathematics score.

Reanalyze the Project STAR data below using the FRT. Use $\hat{\tau}_S$, $W_S$ and $\tilde{W}$ in the FRT. Compare the *p*-values.Remark: This book uses Z for the treatment indicator but Imbens and Rubin (2015) use W.

5.8 A multi-center trial

Gould (1998, Table 1) reported the following data from a multi-center trial:

> multicenter = read.csv("multicenter.csv")
> multicenter
  center n0 mean0 sd0 n1 mean1 sd1 n5 mean5 sd5
  1      1   7  0.43  4.58   7  -5.43  5.53   8  -2.63  3.38
  2     2  11  0.10  4.21  11  -2.59  3.95  12  -2.21  4.14
  3      3   6  2.58  4.80   6  -3.94  4.25   7   1.29  7.39
  4     4  10  -2.30  3.86  10  -1.23  5.17  10  -1.40  2.27
  5     5  10   2.08  6.46  10  -6.70  7.45  10  -5.13  3.91
  6      6   6  1.13  3.24   5   3.40  8.17   5  -1.59  3.19
  7      7   5  1.20  7.85   6  -3.67  4.89   5  -1.40  2.61
  8     8  12  -1.21  2.66  13  0.18  3.81  12  -4.08  6.32
  9      9   8  1.13  5.28   8  -2.19  5.17   9  -1.96  5.84
 10     10   9  -0.11  3.62  10  -2.00  5.35  10   0.60  3.53
 11    11  15  -4.37  6.12  14  -2.68  5.34  15  -2.14  4.27
 12     12   8  -1.06  5.27   9   0.44  4.39   9  -2.03  5.76
 13    13  12  -0.08  3.32  12  -4.60  6.16  11  -6.22  5.33
 14     14   9   0.00  5.20   9  -0.25  8.23   7  -3.29  5.12
 15     15   6  1.83  5.85   7  -1.23  4.33   6  -1.00  2.61
 16    16  14  -4.21  7.53  14  -2.10  5.78  12  -5.75  5.63
 17    17  13   0.76  3.82  13   0.55  2.53  13  -0.63  5.41
 18    18  15  -1.05  4.54  13   2.54  4.16  14  -2.80  2.89
 19    19  15   2.07  4.88  15  -1.67  4.95  15  -3.43  4.71
 20    20  11  -1.46  5.48  10  -1.99  5.63  10  -6.77  5.19
 21     21   5   0.80  4.21   5  -3.35  4.73   5  -0.23  4.14
 22    22  11  -2.92  5.42  10  -1.22  5.95  11  -4.45  6.65
 23     23   9  -3.37  4.73   9  -1.38  4.17   7   0.57  2.70
 24    24  12  -1.92  2.91  12  -0.66  3.55  12  -2.39  2.27
 25     25   9  -3.89  4.76   9  -3.22  5.54   8  -1.23  4.91
 26    26  15  -3.48  5.98  15  -2.13  3.25  14  -3.71  5.30
 27    27  11  -1.91  6.49  12  -1.33  4.40  11  -1.52  4.68
 28    28  10  -2.66  3.80  10  -1.29  3.18  10  -4.70  3.43
 29    29  13  -0.77  4.73  13  -2.31  3.88  13  -0.47  4.95

This is a SRE with centers being the strata. The trial was conducted to study the efficacy and tolerability of finasteride, a drug for treating benign prostatic hyperplasia. Within each of the 29 centers, patients were randomized into three arms: control, finasteride 1mg, and finasteride 5mg. The above dataset provides summary statistics for the outcome, which is the change from baseline in total symptom score. The total symptom score is the sum of the responses to nine questions (score 0 to 4) about symptoms of various aspects of impaired urinary ability. The meanings of the columns are:

1. center: ID of the centers;## 5.6 *Homework Problems*

2. n0, n1, n5: sample sizes under the three arms;
3. mean0, mean1, mean5: means of the outcomes under the three arms;
4. sd0, sd1, sd5: standard deviations of the outcomes under the three arms.

The individual-level outcomes are not reported so we cannot implement the FRT. However, the Neymanian inference only requires the summary statistics. Report the point estimators and variance estimators for comparing “finasteride 1mg” and “finasteride 5mg” to “control”, separately.

## 5.9 *Data re-analyses*

Re-analyze the LaLonde data used in Chapter 4.5.3. Conduct both Fisherian and Neymanian inferences.

The original experiment is a CRE. Now we pretend that the original experiment is an SRE. First, re-analyze the data pretending that the experiment is stratified on the race (black, Hispanic, or other). Second, re-analyze the data pretending that the experiment is stratified on marital status. Third, re-analyze the data pretending that the experiment is stratified on the indicator of a high school diploma.

Compare with the results obtained under a CRE.

## 5.10 *Recommended reading*

Miratrix et al. (2013) provided a solid theory for post-stratification and compared it with stratification. A main theoretical result is that their difference is small asymptotically although they can differ in finite samples.![[_resources/Ding - 2023 - A First Course in Causal Inference_Part5/d675f6e5d7eb2972c5ed2d48214e7396_MD5.jpg]]

![[_resources/Ding - 2023 - A First Course in Causal Inference_Part5/136ee96a05bdec4d219dc8e4d56f07df_MD5.jpg]]# 6

## *Rerandomization and Regression Adjustment*

Stratification and post-stratification in Chapter 5 are duals for discrete co-
variates in the design and analysis of randomized experiments. How should
we deal with multidimensional, possibly continuous, covariates? We can dis-
cretize continuous covariates, but this is not an ideal strategy with many
covariates. Rerandomization and regression adjustment are duals for general
covariates, which are the topics for this chapter.

The following table summarizes the topics of Chapters 5 and 6:

<table>
  <thead>
    <tr>
      <th></th>
      <th>design</th>
      <th>analysis</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>discrete covariate</th>
      <td>stratification</td>
      <td>post-stratification</td>
    </tr>
    <tr>
      <th>general covariate</th>
      <td>rerandomization</td>
      <td>regression adjustment</td>
    </tr>
  </tbody>
</table>

**6.1 Rerandomization**

**6.1.1 Experimental design**

Again we consider a finite population of *n* experimental units, where *n*₁ of
them receive the treatment and *n*₀ of them receive the control. Let **Z** =
(Z₁, . . . , Zₙ) be the treatment vector for these units. Unit *i* has covariate
*X*ᵢ ∈ ℝ<sup>*K*</sup> which can have continuous or binary components. Concatenate
them as an *n* × *K* covariate matrix **X** = (X₁, . . . , Xₙ)ᵀ and center them at
mean zero X̄ = *n*⁻¹ Σ<sub>i=1</sub><sup>*n*</sup> Xᵢ = 0 to simplify the presentation.

The CRE balances the covariates in the treatment and control groups on
average, for instance, the difference in means of the covariates

$$
\hat{\tau}_X = n_1^{-1} \sum_{i=1}^{n} Z_i X_i - n_0^{-1} \sum_{i=1}^{n} (1 - Z_i) X_i
$$

has mean zero under the CRE. However, it can result in undesired covariate
balance across the treatment and control groups in the realized treatment
allocation, that is, the realized value of $\hat{\tau}_X$ is often not zero. Using the vector
form of Neyman (1923) in Problem 4.6 before, we can show that

$$
\operatorname{cov}(\hat{\tau}_X) = \frac{1}{n_1} S_X^2 + \frac{1}{n_0} S_X^2 = \frac{n}{n_1 n_0} S_X^2,
$$where $S_X^2 = (n-1)^{-1} \sum_{i=1}^n X_i X_i^\top$ is the finite-population covariance matrix
of the covariates. The following Mahalanobis distance measures the difference
between the treatment and control groups:

$$
M = \hat{\tau}_X^\top \operatorname{cov}(\hat{\tau}_X)^{-1} \hat{\tau}_X = \hat{\tau}_X^\top \left( \frac{n}{n_1 n_0} S_X^2 \right)^{-1} \hat{\tau}_X. \quad (6.1)
$$

Technically, the above formula for *M* in (6.1) is meaningful only if $S_X^2$ is invertible, which means that the columns of the covariate matrix **X** are linearly independent. If a column can be represented by a linear combination of other columns, it is redundant and should be dropped before the experiment. A nice feature of *M* is that it is invariant under non-degenerate linear transformations of **X**. Lemma 6.1 below summarizes the result with the proof relegated to Problem 6.2.

**Lemma 6.1** *M* in (6.1) *remains the same if we transform* $X_i$ *to* $b_0 + B X_i$ *for all units* $i = 1, \dots, n$ *where* $b_0 \in \mathbb{R}^K$ *and* $B \in \mathbb{R}^{K \times K}$ *is invertible*.

The finite population CLT (Li and Ding, 2017) ensures that with large *n*, the Mahalanobis distance *M* is approximately $\chi_K^2$ under the CRE. Therefore, it is likely that *M* has a large realized value under the CRE with asymptotic mean *K* and variance $2K$. Rerandomization avoids covariate imbalance by discarding the treatment allocations with large values of *M*. Below I give a formal definition of the rerandomization using the Mahalanobis distance (ReM), which was proposed by Cox (1982) and further studied by Morgan and Rubin (2012).

**Definition 6.1 (ReM)** *Draw* **Z** *from* CRE *and accept it if and only if*

$M \leq a,$

for some predetermined constant $a > 0$.

The problem of choosing *a* is similar to the problem of choosing the num-
ber of strata in the SRE, which is non-trivial in practice. At one extreme,
*ā* = ∞, we just conduct the CRE. At the other extreme, *ā* = 0, there are very
few feasible treatment allocations, and consequently, the experiment has little
randomness, rendering randomization-based inference useless. As a compro-
mise, we choose a small but not extremely small *ā*, for example, *ā* = 0.001 or
some upper quantile of a χ²_K distribution.

ReM has many desirable properties. As mentioned above, it is invariant
to linear transformations of the covariates. Moreover, it has nice geometric
properties and elegant mathematical theory. This chapter will focus on ReM.

**6.1.2 Statistical inference**

An important question is how to analyze the data under ReM. Bruhn and McKenzie (2009) and Morgan and Rubin (2012) argued that we can alwaysuse the FRT as long as we simulate $\mathbf{Z}$ under the constraint $M \le a$. This always yields finite-sample exact $p$-values under the sharp null hypothesis. See Problem 6.1.

It is a challenging problem to derive the finite sample properties of ReM without assuming the sharp null hypothesis. Instead, Li et al. (2018b) derived the asymptotic distribution of the difference in means of the outcome $\hat{\tau}$ under ReM and the regularity conditions below.

**Condition 6.1** As $n \to \infty$,

1. $n_1/n$ and $n_0/n$ have positive limits;
2. the finite population covariance of $\{X_i, Y_i(1), Y_i(0), \tau_i\}$ has a finite limit;
3. $\max_{1 \le i \le n}\{Y_i(1) - \bar{Y}(1)\}^2/n \to 0$, $\max_{1 \le i \le n}\{Y_i(0) - \bar{Y}(0)\}^2/n \to 0$, and $\max_{1 \le i \le n} X_i^\top X_i/n \to 0$,

Below is the main theorem for ReM, which relies on additional notation. Let

$$
L_{K,a} \sim D_1 | \mathbf{D}^\top \mathbf{D} \le a
$$

where $\mathbf{D} = (D_1, \dots, D_K)$ follows a $K$-dimensional standard Normal distribution; let $\varepsilon$ follow a univariate standard Normal distribution; $L_{K,a} \perp \varepsilon$.

**Theorem 6.1** Under ReM with $M \le a$ and Condition 6.1, we have¹

$$
\hat{\tau} - \tau \sim \sqrt{\mathrm{var}(\hat{\tau})} \left\{ \sqrt{R^2} L_{K,a} + \sqrt{1 - R^2 \varepsilon} \right\},
$$

where

$$
\mathrm{var}(\hat{\tau}) = \frac{S^2(1)}{n_1} + \frac{S^2(0)}{n_0} - \frac{S^2(\tau)}{n}
$$

is Neyman (1923)'s variance formula proved in Chapter 4, and

$$
R^2 = \mathrm{corr}^2(\hat{\tau}, \hat{\tau}_X)
$$

is the squared multiple correlation coefficient (see Section A.1.1 for the definition) between $\hat{\tau}$ and $\hat{\tau}_X$ under the CRE.

Although the proof of Li et al. (2018b) is technical, the asymptotic distribution in Theorem 6.1 has a clear geometric interpretation, as shown in Figure 6.1. It shows that $\hat{\tau}$ decomposes into a component that is a linear combination of $\hat{\tau}_X$ and a component that is orthogonal to $\hat{\tau}_X$. Geometrically, $\cos^2 \theta = R^2$, where $\theta$ is the angle between $\hat{\tau}$ and $\hat{\tau}_X$. ReM affects the first component but does not change the second component. The truncated Normal distribution $L_{K,a}$ is due to the restriction of ReM on the first component.

¹The notation “$A \sim B$” means that A and B have the same asymptotic distributions.![[_resources/Ding - 2023 - A First Course in Causal Inference_Part5/09feaef1097949060a0dbbc74ba625dd_MD5.jpg]]

FIGURE 6.1: Geometry of the asymptotic distribution of $\hat{\tau}$ under ReM

When $a = \infty$, the asymptotic distribution simplifies to the one under the CRE:

$$
\hat{\tau} - \tau \sim \sqrt{\mathrm{var}(\hat{\tau})\varepsilon}.
$$

When the threshold $a$ is close to zero, the asymptotic distribution simplifies to

$$
\hat{\tau} - \tau \sim \sqrt{\mathrm{var}(\hat{\tau})(1 - R^2)}\varepsilon;
$$

see Wang and Li (2022) for a rigorous proof. So with a small threshold $a$, the efficiency gain due to ReM depends on $R^2$, which has the following equivalent form.

**Proposition 6.1** *Under the CRE, we have*

$$
R^2 = \mathrm{corr}^2(\hat{\tau}, \hat{\tau}_X) = \frac{n_1^{-1} S^2(1 | X) + n_0^{-1} S^2(0 | X) - n^{-1} S^2(\tau | X)}{n_1^{-1} S^2(1) + n_0^{-1} S^2(0) - n^{-1} S^2(\tau)},
$$

where {$S^2(1), S^2(0), S^2(\tau)$} are the finite population variances of {$Y_i(1), Y_i(0), \tau_i$}$_{i=1}^n$, and {$S^2(1 | x), S^2(0 | x), S^2(\tau | x)$} are the corresponding finite population variances of their linear projections on $(1, X_i)$; see Section B.2 for the definition of linear projections. Under the constant causal effect assumption with $\tau_i = \tau$, the $R^2$ reduces to $S^2(0 | X)/S^2(0)$, the finite population squared multiple correlation between $Y_i(0)$ and $X_i$.

I leave the proof of Proposition 6.1 to Problem 6.4.

When $0 < a < \infty$, the asymptotic distribution of $\hat{\tau}$ has a more complicated form and is more concentrated at $\tau$ and thus the difference in means $\hat{\tau}$ is more precise under ReM than under the CRE.

If we ignore the design of ReM and still use the confidence interval based on Neyman (1923)'s variance formula and the Normal approximation, it isoverly conservative and overcovers $\tau$ even if the individual causal effects are constant. Li et al. (2018b) proposed to construct confidence intervals based on Theorem 6.1. We omit the discussion here but will come back to the inference issue in Section 6.3.

# 6.2 Regression adjustment

What if we do not conduct rerandomization in the design stage but want to adjust for covariate imbalance in the analysis stage of the CRE? We will discuss several regression adjustment strategies.

## 6.2.1 Covariate-adjusted FRT

The covariates $X$ are all fixed, and furthermore, under $H_{0F}$, the observed outcomes are all fixed. Therefore, we can simulate the distribution of any test statistic $T = T(Z, Y, X)$ and calculate the $p$-value. The basic idea of the FRT remains the same in the presence of additional covariates.

There are two general strategies to construct the test statistic. Problem 3.6 before hints at both of them. I summarize them below, using the terminology from Zhao and Ding (2021a).

**Definition 6.2 (pseudo-outcome strategy for covariate-adjusted FRT)**

*We can construct the test statistic based on residuals from fitted statistical models. We can regress $Y_i$ on $X_i$ to obtain residual $\hat{\varepsilon}_i$, and then treat $\hat{\varepsilon}_i$ as the pseudo outcome to construct test statistics.*

**Definition 6.3 (model-output strategy for covariate-adjusted FRT)**

*We can use a regression coefficient as a test statistic. We can regress $Y_i$ on $(Z_i, X_i)$ to obtain the coefficient of $Z_i$ as the test statistic.*

In the pseudo-outcome strategy in Definition 6.2, the regression of $Y_i$ on $X_i$ should not include the treatment $Z_i$ because we want to ensure that the pseudo outcome satisfies $H_{0F}$ if the original outcome satisfies $H_{0F}$. In the model-output strategy in Definition 6.3, the regression of $Y_i$ on $(Z_i, X_i)$ includes the treatment $Z_i$ because we want to use the coefficient of $Z_i$ to measure the deviation from $H_{0F}$. Computationally, in strategy one, we only need to run regression once, whereas in strategy two, we need to run regression many times.

In the above, “regression” is a generic term, which can be linear regression, logistic regression, or even machine learning algorithms. The FRT with any test statistics from these two strategies will be finite-sample exact under $H_{0F}$ although they differ under alternative hypotheses. The rest of this section will review some test statistics based on OLS.6.2.2 Analysis of covariance and extensions

Now we turn to direct estimation of the average causal effect τ that adjusts
for the observed covariates.

Historically, Fisher (1925) proposed to use the analysis of covariance (AN-
COVA) to improve estimation efficiency. This remains a standard strategy in
many fields. He suggested running the OLS of Yᵢ on (1, Zᵢ, Xᵢ) and obtaining
the coefficient of Zᵢ as an estimator for τ. Let τ̂F denote Fisher's ANCOVA
estimator.

A former Berkeley Statistics Professor, David A. Freedman, reanalyzed
Fisher's ANCOVA under Neyman (1923)'s potential outcomes framework.
Freedman (2008a,b) found the following negative results:

1. $\hat{\tau}_{\text{F}}$ is biased, but the simple difference in means $\hat{\tau}$ is unbiased.
2. The asymptotic variance of $\hat{\tau}_{\text{F}}$ may be even larger than that of $\hat{\tau}$ when $n_1 \neq n_0$.
3. The standard error from the OLS is inconsistent for the true standard error of $\hat{\tau}_{\text{F}}$ under the CRE.

A former Berkeley Ph.D. student, Winston Lin, wrote a thesis in response
to Freedman’s critiques. Lin (2013) found the following positive results:

1. The bias of $\hat{\tau}_F$ is small in large samples, and it goes to zero as the sample size approaches infinity.
2. We can improve the asymptotic efficiency of both $\hat{\tau}$ and $\hat{\tau}_F$ by using the coefficient of $Z_i$ in the OLS of $Y_i$ on $(1, Z_i, X_i, Z_i \times X_i)$. Let $\hat{\tau}_L$ denote Lin (2013)'s estimator. Moreover, the EHW standard error is a conservative estimator for the true standard error of $\hat{\tau}_L$ under the CRE.
3. The EHW standard error² for $\hat{\tau}_F$ in the OLS fit of $Y_i$ on $(1, Z_i, X_i)$ is a conservative estimator for the true standard error of $\hat{\tau}_F$ under the CRE.

6.2.2.1 Some heuristics for Lin (2013)'s results

Neyman (1923)'s result demonstrates that the variance of the difference-in-
means estimator $\hat{\tau}$ depends on the variances of the potential outcomes. Intu-
itively, we can reduce the variance of the estimator by reducing the variances

²Without covariates, the HC2 correction yields identical variance estimator as Neyman (1923)'s classic one; see Problem 4.3. For coherence, we can also use the HC2 correction for Lin (2013)'s estimator with covariate adjustment. When the number of covariates is small compared with the sample size and the covariates do not contain outliers, the variants of the EHW standard error perform similarly to the original one. When the number of covariates is large compared with the sample size or the covariates contain outliers, the variants can outperform the original one. In those cases, Lei and Ding (2021) recommend using the HC3 variant of the EHW standard error.of the potential outcomes. A family of linearly adjusted estimators is

$$
\begin{align}
\hat{\tau}(\beta_1, \beta_0) &= n_1^{-1} \sum_{i=1}^{n} Z_i (Y_i - \beta_1^\top X_i) - n_0^{-1} \sum_{i=1}^{n} (1-Z_i)(Y_i - \beta_0^\top X_i) \tag{6.2} \\
&= \{\hat{Y}(1) - \beta_1^\top \hat{X}(1)\} - \{\hat{Y}(0) - \beta_0^\top \hat{X}(0)\}, \tag{6.3}
\end{align}
$$

where {$\hat{Y}(1), \hat{Y}(0)$} are the sample means of the outcomes, and {$\hat{X}(1), \hat{X}(0)$}
are the sample means of the covariates. This covariate-adjusted estimator
$\hat{\tau}(\beta_1, \beta_0)$ tries to reduce the variance of $\hat{\tau}$ by residualizing the potential out-
comes. It reduces to $\hat{\tau}$ with $\beta_1 = \beta_0 = 0$. It has mean $\tau$ for any fixed values
of $\beta_1$ and $\beta_0$ because $\bar{X} = 0$. We are interested in finding the $(\beta_1, \beta_0)$ that
minimize the variance of $\hat{\tau}(\beta_1, \beta_0)$. This estimator is essentially the difference
in means of the adjusted potential outcomes $\{Y_i(1) - \beta_1^\top X_i, Y_i(0) - \beta_0^\top X_i\}_{i=1}^n$.
Applying Neyman (1923)'s result, this estimator has variance

$$
\mathrm{var}\{\hat{\tau}(\beta_1, \beta_0)\} = \frac{S^2(1; \beta_1)}{n_1} + \frac{S^2(0; \beta_0)}{n_0} - \frac{S^2(\tau; \beta_1, \beta_0)}{n},
$$

where $S^2(z; \beta_z) (z = 1, 0)$ and $S^2(\tau; \beta_1, \beta_0)$ are the finite population variances
of the adjusted potential outcomes and individual causal effects, respectively;
moreover, a conservative variance estimate is

$$
\hat{V}(\beta_1, \beta_0) = \frac{\hat{S}^2(1; \beta_1)}{n_1} + \frac{\hat{S}^2(0; \beta_0)}{n_0},
$$

where

$$
\begin{align*}
\hat{S}^2(1; \beta_1) &= (n_1 - 1)^{-1} \sum_{i=1}^{n} Z_i (Y_i - \gamma_1 - \beta_1^\top X_i)^2, \\
\hat{S}^2(0; \beta_0) &= (n_0 - 1)^{-1} \sum_{i=1}^{n} (1 - Z_i) (Y_i - \gamma_0 - \beta_0^\top X_i)^2
\end{align*}
$$

are the sample variances of the adjusted potential outcomes with $\gamma_1$ and $\gamma_0$
being the sample means of $Y_i - \beta_1^\top X_i$ under treatment and $Y_i - \beta_0^\top X_i$ under
control. To minimize $\hat{V}(\beta_1, \beta_0)$, we need to solve two OLS problems³:

$$
\min_{\gamma_1, \beta_1} \sum_{i=1}^{n} Z_i (Y_i - \gamma_1 - \beta_1^\top X_i)^2, \quad \min_{\gamma_0, \beta_0} \sum_{i=1}^{n} (1-Z_i)(Y_i - \gamma_0 - \beta_0^\top X_i)^2.
$$

We run OLS of $Y_i$ on $X_i$ for the treatment and control groups separately and
obtain $(\hat{\gamma}_1, \hat{\beta}_1)$ and $(\hat{\gamma}_0, \hat{\beta}_0)$. The final estimator is

$$
\begin{align*}
\hat{\tau}(\hat{\beta}_1, \hat{\beta}_0) &= n_1^{-1} \sum_{i=1}^{n} Z_i (Y_i - \hat{\beta}_1^\top X_i) - n_0^{-1} \sum_{i=1}^{n} (1-Z_i)(Y_i - \hat{\beta}_0^\top X_i) \\
&= \{\hat{Y}(1) - \hat{\beta}_1^\top \hat{X}(1)\} - \{\hat{Y}(0) - \hat{\beta}_0^\top \hat{X}(0)\}.
\end{align*}
$$

<sup>3</sup>We can also minimize the true variance of $\hat{\tau}(\beta_1, \beta_0)$. See Problem 6.6 for more details.From the properties of the OLS fits (see (B.5)), we know

$$
\hat{Y}(1) = \hat{\gamma}_1 + \hat{\beta}_1^\top \hat{X}(1), \quad \hat{Y}(0) = \hat{\gamma}_0 + \hat{\beta}_0^\top \hat{X}(0).
$$

Therefore, we can rewrite the estimator as

$$
\hat{\tau}(\hat{\beta}_1, \hat{\beta}_0) = \hat{\gamma}_1 - \hat{\gamma}_0 \quad (6.4)
$$

The equivalent form in (6.4) suggests that we can obtain $\hat{\tau}(\hat{\beta}_1, \hat{\beta}_0)$ from a
single OLS fit below.

**Proposition 6.2** *The estimator $\hat{\tau}(\hat{\beta}_1, \hat{\beta}_0)$ in (6.4) equals the coefficient of $Z_i$ in the OLS fit of $Y_i$ on $(1, Z_i, X_i, Z_i \times X_i)$, which is Lin (2013)'s estimator $\hat{\tau}_L$ introduced before.*

I leave the proof of Proposition 6.2 to Problem 6.7, which is a pure linear
algebra fact.

Based on the discussion above, a conservative variance estimator for $\hat{\tau}_L$ is

$$
\begin{align*}
\hat{V}(\hat{\beta}_1, \hat{\beta}_0) &= \frac{1}{n_1(n_1-1)} \sum_{i=1}^{n} Z_i (Y_i - \hat{\gamma}_1 - \hat{\beta}_1^\top X_i)^2 \\
&\quad + \frac{1}{n_0(n_0-1)} \sum_{i=1}^{n} (1-Z_i) (Y_i - \hat{\gamma}_0 - \hat{\beta}_0^\top X_i)^2.
\end{align*}
$$

Based on quite technical calculations, Lin (2013) further showed that the EHW standard error from the OLS in Proposition 6.2 is almost identical to $\hat{V}(\hat{\beta}_1, \hat{\beta}_0)$ which is a conservative estimator of the true standard error of $\hat{\tau}_L$ under the CRE. Intuitively, this is because we do not assume that the linear model is correctly specified, and the EHW standard error is robust to model misspecification.

There is a subtle issue with the discussion above. The variance formula
$\text{var}\{\hat{\tau}(\hat{\beta}_1, \hat{\beta}_0)\}$ works for fixed $(\beta_1, \beta_0)$, but the estimator $\hat{\tau}(\hat{\beta}_1, \hat{\beta}_0)$ uses two
estimated coefficients $(\tilde{\beta}_1, \tilde{\beta}_0)$. The additional uncertainty in the estimated
coefficients may cause finite-sample bias in the final estimator. Lin (2013)
showed that this issue goes away asymptotically because $\hat{\tau}(\hat{\beta}_1, \hat{\beta}_0)$ behaves
similarly to $\hat{\tau}(\tilde{\beta}_1, \tilde{\beta}_0)$, where $\tilde{\beta}_1$ and $\tilde{\beta}_0$ are the limit of $\hat{\beta}_1$ and $\hat{\beta}_0$, respectively.
Heuristically, the difference between $\hat{\tau}(\hat{\beta}_1, \hat{\beta}_0)$ and $\hat{\tau}(\tilde{\beta}_1, \tilde{\beta}_0)$ depends on

$$
(\hat{\beta}_z - \tilde{\beta}_z)^{\top} \hat{X}(z), \quad (z = 0, 1)
$$

which is a product of two terms of small order. As a warning, the asymptotic
theory requires a large sample size and some regularity conditions on the
potential outcomes and covariates. In finite samples, regression adjustment can
be even harmful due to the additional uncertainty in the estimated coefficients
$\hat{\beta}_1$ and $\hat{\beta}_0$.TABLE 6.1: Predicting the potential outcomes

<table><thead><tr><th>X</th><th>Z</th><th>Y(1)</th><th>Y(0)</th><th>ŷ(1)</th><th>ŷ(0)</th></tr></thead><tbody><tr><td>X<sub>1</sub></td><td>1</td><td>Y<sub>1</sub>(1)</td><td>?</td><td>μ̂<sub>1</sub>(X<sub>1</sub>)</td><td>μ̂<sub>0</sub>(X<sub>1</sub>)</td></tr><tr><td>...</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>X<sub>n<sub>1</sub></sub></td><td>1</td><td>Y<sub>n<sub>1</sub></sub>(1)</td><td>?</td><td>μ̂<sub>1</sub>(X<sub>n<sub>1</sub></sub>)</td><td>μ̂<sub>0</sub>(X<sub>n<sub>1</sub></sub>)</td></tr><tr><td>X<sub>n<sub>1</sub>+1</sub></td><td>0</td><td>?</td><td>Y<sub>n<sub>1</sub>+1</sub>(0)</td><td>μ̂<sub>1</sub>(X<sub>n<sub>1</sub>+1</sub>)</td><td>μ̂<sub>0</sub>(X<sub>n<sub>1</sub>+1</sub>)</td></tr><tr><td>...</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>X<sub>n</sub></td><td>0</td><td>?</td><td>Y<sub>n</sub>(0)</td><td>μ̂<sub>1</sub>(X<sub>n</sub>)</td><td>μ̂<sub>0</sub>(X<sub>n</sub>)</td></tr></tbody></table>

### 6.2.2.2 Understanding Lin (2013)'s estimator via predicting the potential outcomes

We can view Lin (2013)'s estimator as a *predictive estimator* based on OLS fits of the potential outcomes on the covariates. We build a prediction model for $Y(1)$ based on $X$ using the data from the treatment group:

$$
\hat{\mu}_1(X) = \hat{\gamma}_1 + \hat{\beta}_1^\top X. \qquad (6.5)
$$

Similarly, we build a prediction model for $Y(0)$ based on $X$ using the data from the control group:

$$
\hat{\mu}_0(X) = \hat{\gamma}_0 + \hat{\beta}_0^\top X. \qquad (6.6)
$$

Table 6.1 illustrates the prediction of the potential outcomes. If we predict the missing potential outcomes, then we have the following predictive estimator:

$$
\hat{\tau}_{\text{pred}} = n^{-1} \left\{ \sum_{Z_i=1} Y_i + \sum_{Z_i=0} \hat{\mu}_1(X_i) - \sum_{Z_i=1} \hat{\mu}_0(X_i) - \sum_{Z_i=0} Y_i \right\}. \quad (6.7)
$$

We can verify that with (6.5) and (6.6), the predictive estimator equals Lin (2013)'s estimator:

$$
\hat{\tau}_{\text{pred}} = \hat{\tau}_{\text{L}}. \qquad (6.8)
$$

If we predict all potential outcomes even if they are observed, we have the following *projective estimator*:

$$
\hat{\tau}_{\text{proj}} = n^{-1} \sum_{i=1}^{n} \{ \hat{\mu}_{1}(X_{i}) - \hat{\mu}_{0}(X_{i}) \}. \qquad (6.9)
$$

We can verify that with (6.5) and (6.6), the projective estimator equals Lin (2013)'s estimator:

$$
\hat{\tau}_{\text{proj}} = \hat{\tau}_{\text{L}}. \qquad (6.10)
$$I leave the proofs of (6.8) and (6.10) to Problem 6.8.

The terminology “predictive” and “projective” is from the survey sampling literature (Firth and Bennett, 1998; Ding and Li, 2018). The more general formulas (6.7) and (6.9) are well-defined with other predictors of the potential outcomes. To make connections with Lin (2013)'s estimator, I focus on the linear predictors here. The predictors $\hat{\mu}_1(X)$ and $\hat{\mu}_0(X)$ can be quite general, including much more complicated machine learning algorithms. However, constructing a point estimator is just the first step in analyzing the CRE. A more important second step is to quantify the uncertainty associated with the estimator, which depends on the properties of the predictors of the potential outcomes. Nevertheless, without doing additional theoretical analysis, we can always use (6.7) and (6.9) as the test statistics in the FRT.

### 6.2.2.3 Understanding Lin (2013)'s estimator via adjusting for co-variate imbalance

The linearly adjusted estimator has an equivalent form

$$
\hat{\tau}(\beta_1, \beta_0) = \hat{\tau} - \gamma^\top \hat{\tau}_X \quad (6.11)
$$

where $\gamma = \frac{n_0}{n}\beta_1 + \frac{n_1}{n}\beta_0$, so we can also write it as $\hat{\tau}(\gamma) = \hat{\tau}(\beta_1, \beta_0)$. Similarly, Lin (2013)'s estimator has an equivalent form

$$
\hat{\tau}_L = \hat{\tau} - \hat{\gamma}^\top \hat{\tau}_X, \quad (6.12)
$$

where $\hat{\gamma} = \frac{n_0}{n}\hat{\beta}_1 + \frac{n_1}{n}\hat{\beta}_0$. I leave the proofs of (6.11) and (6.12) to Problem 6.9. The forms (6.11) and (6.12) are the mathematical statements of “adjusting for the covariate imbalance.” They essentially subtract some linear combinations of the difference in means of the covariates. Since $\hat{\tau}$ and $\hat{\tau}_X$ are correlated under the CRE, the covariate adjustment with an appropriately chosen $\gamma$ reduces the variance of $\hat{\tau}$. Another interesting feature of (6.11) and (6.12) is that the final estimators depend only on $\gamma$ or $\hat{\gamma}$, so the choice of the $\beta$-coefficients is not unique. Li and Ding (2020) pointed out this simple fact. Therefore, Lin (2013)'s estimator is just one of the optimal estimators. However, it can be easily implemented via the standard OLS with the EHW standard error. That's why this book focuses on it.

## 6.2.3 Some additional remarks on regression adjustment

### 6.2.3.1 Duality between ReM and regression adjustment

Li et al. (2018b) pointed out that ReM and Lin (2013)'s regression adjustment are duals in using covariates in the design and analysis stages of the experiment. To be more specific, when $a$ is small, the asymptotic distribution of $\hat{\tau}$ under ReM is almost identical to the asymptotic distribution of $\hat{\tau}_L$ under the CRE. So ReM uses covariates in the design stage and Lin (2013)'s regression adjustment uses covariates in the analysis stage, achieving nearly the same asymptotic efficiency gain when $a$ is small.6.2.3.2 Equivalence of regression adjustment and post-stratification

If we have discrete covariate $C_i$ with $K$ categories, we can create $K-1$ centered
dummy variables

$$
X_i = (I(C_i = 1) - \pi_{[1]}, \dots, I(C_i = K-1) - \pi_{[K-1]})
$$

where $\pi_{[k]}$ equals the proportion of units with $C_i = k$. In this case, Lin (2013)'s regression adjustment is equivalent to post-stratification, as summarized by the following proposition.

**Proposition 6.3** $\hat{\tau}_{\text{L}}$ based in $X_i$ is numerically identical to the post-stratification estimator $\hat{\tau}_{\text{PS}}$ based on $C_i$ (see Chapter 5.4).

I leave the proof of Proposition 6.3 as Problem 6.11.

6.2.3.3 Difference-in-difference as a special case of covariate ad-
justment $\hat{\tau}(\beta_1, \beta_0)$

An important covariate $X$ in many studies is the lagged outcome before the treatment. For instance, the covariate $X$ is the pre-test score if the outcome $Y$ is the post-test score in educational research; the covariate $X$ is the log wage before the job training program if the outcome $Y$ is the log wage after the job training program. With the lagged outcome $X$ as a covariate, a popular estimator is the *gain score* or *difference-in-difference* estimator with $\beta_1 = \beta_0 = 1$ in (6.2) and (6.3):

$$
\begin{align*}
\hat{\tau}(1,1) &= n_1^{-1} \sum_{i=1}^{n} Z_i (Y_i - X_i) - n_0^{-1} \sum_{i=1}^{n} (1 - Z_i) (Y_i - X_i) \\
&= \left\{ \hat{Y}(1) - \hat{Y}(0) \right\} - \left\{ \hat{X}(1) - \hat{X}(0) \right\}.
\end{align*}
$$

The first form of $\hat{\tau}(1,1)$ justifies the name *gain score* because it is essentially
the difference in means of the gain score $g_i = Y_i - X_i$. The second form of
$\hat{\tau}(1,1)$ justifies the name *difference-in-difference* because it is the difference
between two differences in means. This estimator is different from Lin (2013)'s
estimator: it fixes $\beta_1 = \beta_0 = 1$ in advance while Lin (2013)'s estimator in-
volves two estimated $\beta$'s. The $\hat{\tau}(1,1)$ is unbiased with a conservative variance
estimator

$$
\hat{V}(1,1) = \frac{1}{n_1(n_1-1)} \sum_{i=1}^{n} Z_i \{g_i - \hat{g}(1)\}^2 \\
+ \frac{1}{n_0(n_0-1)} \sum_{i=1}^{n} (1-Z_i) \{g_i - \hat{g}(0)\}^2,
$$

where $\hat{g}(1)$ and $\hat{g}(0)$ are the sample means of the gain score $g_i = Y_i - X_i$ under
the treatment and control, respectively. When the lagged outcome is a strongpredictor of the outcome, the gain score $g_i = Y_i - X_i$ often has a much smaller variance than the outcome itself. In this case, $\hat{\tau}(1,1)$ often greatly reduces the variance of the simple difference in means of the outcome. See Problem 6.12 for more details.

In theory, Lin (2013)'s estimator is always more efficient than $\hat{\tau}(1,1)$ with large samples. However, Lin (2013)'s estimator is biased in finite samples, whereas $\hat{\tau}(1,1)$ is always unbiased.

### 6.2.4 Extension to the SRE

It is possible that we have an experiment stratified on a discrete variable $C$ and we also observe additional covariates $X$. If all strata are large, then we can obtain Lin (2013)'s estimators within strata $\hat{\tau}_{L,[k]}$ and obtain the final estimator as

$$
\hat{\tau}_{L,S} = \sum_{k=1}^{K} \pi_{[k]} \hat{\tau}_{L,[k]}.
$$

A conservative variance estimator is

$$
\hat{V}_{L,S} = \sum_{k=1}^{K} \pi_{[k]}^{2} \hat{V}_{\text{EHW},[k]},
$$

where $\hat{V}_{\text{EHW},[k]}$ is the EHW variance estimator from the OLS fit of the outcome on the intercept, the treatment indicator, the covariates, and their interactions within stratum $k$. Importantly, we need to center covariates by their stratum-specific means.

## 6.3 Unification, combination, and comparison

Li and Ding (2020) unified the literature and showed that we can combine rerandomization and regression adjustment. That is, if we rerandomize in the design stage, we can use Lin (2013)'s estimator with the EHW standard error in the analysis stage. The combination of rerandomization and regression adjustment improves covariate balance in the design stage and estimation efficiency in the analysis stage.

Table 6.2 summarizes the literature from Neyman (1923) to Li and Ding (2020). Arrow 1 illustrates the efficiency gain of covariate adjustment in the CRE: asymptotically, $\hat{\tau}_L$ has a smaller variance than $\hat{\tau}$. Arrow 2 illustrates the efficiency gain of ReM: asymptotically, $\hat{\tau}$ has narrower quantile ranges under the ReM than under the CRE. Arrows 3 and 4 illustrate the benefits of the combination of ReM and the CRE.![[_resources/Ding - 2023 - A First Course in Causal Inference_Part5/6036efae44b9d79c4c5aebb862aa6799_MD5.jpg]]

FIGURE 6.2: Simulation with 2000 Monte Carlo replicates and *a* = 0.05 for ReM

```r
> rownames(res) = c("Neyman", "Lin")
> colnames(res) = c("estimate", "s.e.", "t-stat", "p-value")
> round(res, 3)
```

|             | estimate | s.e. | t-stat | p-value |
|-------------|----------|-------|--------|---------|
| Neyman      | 0.054    | 0.076 | 0.719  | 0.472   |
| Lin         | 0.075    | 0.072 | 1.036  | 0.300   |

The adjusted estimator has a smaller standard error although it gives the
same insignificant result as the unadjusted estimator.

I also use this dataset to conduct simulation studies to evaluate the four
design and analysis strategies summarized in Table 6.2. I fit quadratic func-
tions of the outcome on the covariates and use them to impute all the missing
potential outcomes, separately for the treated and control groups. To show the
improvement of ReM and regression adjustment, I also rescale the error terms
by 0.1 and 0.25 to increase the signal-to-noise ratio. With the imputed Science
Table, I generate 2000 treatments, obtain the observed data, and calculate the
estimators. In the simulation, the “true” outcome model is nonlinear, but we
still use linear adjustment for estimation. By doing this, we can evaluate the
properties of the estimators even when the linear model is misspecified.

Figure 6.2 shows the violin plots⁴ of the four combinations, subtracting
the true τ from the estimates. As predicted by the theory, all estimators are
nearly unbiased, and both ReM and regression adjustment improve efficiency.
They are more effective when the noise level is smaller.

⁴A violin plot is similar to a box plot, with the addition of a rotated kernel density plot on each side.6.5 Final remarks

ReM uses the Mahalanobis distance as the balance criterion. We can consider
general rerandomization with the balance criterion defined as a function of
Z and X. For example, we can use the following criterion based on marginal
tests for all coordinates of $X_i = (x_{i1}, \dots, x_{iK})^T$. We accept Z if and only if

$$
\left| \frac{\hat{\tau}_{xk}}{\sqrt{\frac{n}{n_1 n_0} S_{xk}^2}} \right| \le a \quad (k = 1, \dots, K) \qquad (6.13)
$$

for some predetermined constant $a > 0$, where $S_{xk}^2$ is the finite-population
variance of covariate $x_{ik}$. For example, $a$ is some upper quantile of a stan-
dard Normal distribution. See Zhao and Ding (2021b) for the theory for the
rerandomization based on criterion (6.13) as well as other criteria.

With a continuous outcome, Fisher's ANCOVA has been the standard approach for many years. Lin (2013)'s improvement has better theoretical properties even when the linear model is misspecified. With a binary outcome, it is common to use the coefficient of the treatment in the logistic regression of the observed outcome on the intercept, the treatment indicator, and covariates to estimate the causal effects. However, Freedman (2008c) showed that this logistic regression does not have nice properties under the potential outcomes framework. Even if the logistic model is correct, the coefficient estimates the conditional odds ratio (see Chapter B.6) which may not be the parameter of interest; when the logistic model is incorrect, it is even harder to interpret the coefficient. From the discussion above, if the parameter of interest is the average causal effect, we can still use Lin (2013)'s estimator to analyze the binary outcome data in the CRE. Guo and Basse (2023) extend Lin (2013)'s theory to allow for using generalized linear models to construct estimators for the average causal effect under the potential outcomes framework.

Other extensions of Lin (2013)'s theory focus on high dimensional covariates. Bloniarz et al. (2016) focus on the regime with many covariates than the sample size, and suggest replacing the OLS fits with the least absolute shrinkage and selection operator (LASSO) fits (Tibshirani, 1996) of the outcome on the intercept, the treatment, covariates and their interactions. Lei and Ding (2021) focus on the regime with a diverging number of covariates without assuming sparsity, and under certain regularity conditions, they show that Lin (2013)'s estimator is still consistent and asymptotically Normal. Wager et al. (2016) propose to use machine learning methods to analyze high dimensional experimental data.**6.6 Homework Problems**

6.1 *FRT under ReM*

Describe the FRT under ReM.

6.2 *Invariance of the Mahalanobis Distance*

Prove Lemma 6.1.

6.3 *Bias of the difference-in-means estimator under rerandomization*

Assume that we draw $\mathbf{Z} = (Z_1, \dots, Z_n)$ from a CRE and accept it if and only if $\phi(\mathbf{Z}, \mathbf{X}) = 1$, where $\phi$ is a predetermined balance criterion. Show that if $n_1 = n_0$ and

$$
\phi(\mathbf{Z}, \mathbf{X}) = \phi(\mathbf{1}_n - \mathbf{Z}, \mathbf{X}), \quad (6.14)
$$

then $\hat{\tau}$ is unbiased for $\tau$. Verify that rerandomization using the Mahalanobis
distance satisfies (6.14) if $n_1 = n_0$. Give a counterexample that $\hat{\tau}$ is biased for
$\tau$ when these two conditions do not hold.

Remark: $\phi(\mathbf{Z}, \mathbf{X})$ can be a general balance criterion in this problem. ReM is a special case with $\phi(\mathbf{Z}, \mathbf{X}) = I(M \le a)$.

6.4 Equivalent form of R² in the CRE

Prove Proposition 6.1.

6.5 More on linear projections of the potential outcomes onto covariates

Show that

$$
S^2(1 | X) = S_{Y(1)X} (S_X^2)^{-1} S_{XY(1)}
$$

where $S_{XY(1)}$ is the finite population covariance between $Y_i(1)$'s and $X_i$'s,
$S_{Y(1)X} = S_{XY(1)}^T$, and $S_X^2$ is the finite population covariance matrix of $X_i$'s.
Find the analogous formulas for $S^2(0 | X)$ and $S^2(\tau | X)$.

6.6 Comparing the true variances within the family of linearly adjusted estimator

Show that the variance $\hat{\tau}(\beta_1, \beta_0)$ decomposes into

$$
\mathrm{var}\{\hat{\tau}(\beta_1, \beta_0)\} = \mathrm{var}\{\hat{\tau}(\tilde{\beta}_1, \tilde{\beta}_0)\} + \mathrm{var}\{\hat{\tau}(\beta_1, \beta_0) - \hat{\tau}(\tilde{\beta}_1, \tilde{\beta}_0)\}
$$

where $\tilde{\beta}_1$ and $\tilde{\beta}_0$ are the coefficients of $X_i$ in the OLS projection of $Y_i(1)$'s and $Y_i(0)$'s onto $(1, X_i)$'s, respectively.

Remark: Li and Ding (2017, Example 9) derived the decomposition. It shows that based on the true variance, $\hat{\tau}(\tilde{\beta}_1, \tilde{\beta}_0)$ is an optimal choice within## 6.6 *Homework Problems*

the family of linearly adjusted estimator because $\text{var}\{\hat{\tau}(\beta_1, \beta_0) - \hat{\tau}(\tilde{\beta}_1, \tilde{\beta}_0)\}$ is always non-negative.

## 6.7 *Lin's estimator for covariate adjustment*

Prove Proposition 6.2.

## 6.8 *Predictive and projective estimators*

Prove (6.8) and (6.10).

## 6.9 *Equivalent form of the covariate-adjusted estimator*

Prove (6.11) and (6.12).

## 6.10 *ANCOVA also adjusts for covariate imbalance*

This problem gives a result for ANCOVA that is similar to (6.12).

Show that

$$
\hat{\tau}_{\mathrm{F}} = \hat{\tau} - \hat{\gamma}_{\mathrm{F}}^{\top} \hat{\tau}_{X},
$$

where $\hat{\gamma}_{\mathrm{F}}$ is the coefficient of $X_i$ in the OLS fit of $Y_i$ on $(1, Z_i, X_i)$.

## 6.11 *Regression adjustment / post-stratification of CRE*

Prove Proposition 6.3.

Remark: Sometimes $\hat{\tau}_{\mathrm{PS}}$ or $\hat{\tau}_{\mathrm{L}}$ may not be well-defined. In those cases, we treat $\hat{\tau}_{\mathrm{PS}}$ and $\hat{\tau}_{\mathrm{L}}$ as equal. You can ignore this complexity in the proof.

## 6.12 *More on the difference-in-difference estimator in the CRE*

This problem gives more details for the difference-in-difference estimator in the CRE in Section 6.2.3.3.

Show that $\hat{\tau}(1,1)$ is unbiased for $\tau$, calculate its variance, and show that $\hat{V}(1,1)$ is a conservative estimator for the true variance of $\hat{\tau}(1,1)$. When does $E\{\hat{V}(1,1)\} = \text{var}\{\hat{\tau}(1,1)\}$ hold?

Compare the variances of $\hat{\tau}(0,0)$ and $\hat{\tau}(1,1)$ to show that

$$
\text{var}\{\hat{\tau}(0,0)\} \geq \text{var}\{\hat{\tau}(1,1)\}
$$

if and only if

$$
2 \frac{n_0}{n} \beta_1 + 2 \frac{n_1}{n} \beta_0 \geq 1,
$$

where

$$
\beta_1 = \frac{\sum_{i=1}^{n} (X_i - \bar{X})\{Y_i(1) - \bar{Y}(1)\}}{\sum_{i=1}^{n} (X_i - \bar{X})^2}, \quad \beta_0 = \frac{\sum_{i=1}^{n} (X_i - \bar{X})\{Y_i(0) - \bar{Y}(0)\}}{\sum_{i=1}^{n} (X_i - \bar{X})^2}
$$

are the coefficients of $X_i$ in the OLS fits of $Y_i(1)$ and $Y_i(0)$ on $(1, X_i)$, respectively.# 6 Rerandomization and Regression Adjustment

Remark: Gerber and Green (2012, page 28) discussed a special case of this problem with $n_1 = n_0$.

## 6.13 Data re-analyses of the Penn Bonus Experiment

Re-analyze the Penn Bonus Experiment data. The analysis in Chapter 5 uses the treatment indicator, the outcome, and the block indicator. Now we want to use all other covariates.

Conduct regression adjustments within the strata of the experiment, and then combine these adjusted estimators to estimate the average causal effect. Report the point estimator, estimated standard error, and 95% confidence interval. Compare them with those without regression adjustment.

## 6.14 Missing outcomes in randomized experiments

The data analysis in Section 6.4 uses a naive imputation method to deal with missing outcomes. It is somewhat arbitrary.

Impute the missing outcomes under the treatment and control, respectively, based on the observed means. Do the results change?

Impute the missing outcomes under the treatment and control, respectively, based on linear regressions of the observed outcomes on the covariates. Do the results change?

Do you have other ways to deal with missing outcomes? Justify them and implement them to analyze the dataset.

## 6.15 Recommended reading

The title of this chapter is the same as that of Li and Ding (2020), which studied the roles of rerandomization and regression adjustment in the design and analysis stages of randomized experiments, respectively.# 7

## *Matched-Pairs Experiment*

The matched-pairs experiment (MPE) is the most extreme version of the SRE with only one treated unit and one control unit within each stratum. In this case, the strata are also called pairs. Although this type of experiment is a special case of the SRE discussed in Chapter 5, it has its own estimation and inference strategy. Moreover, it has many new features and it is closely related to the “matching” strategy in observational studies which will be covered in Chapter 15 later. So we discuss the MPE here, in its own chapter.

### 7.1 Design of the experiment and potential outcomes

Consider an experiment with $2n$ units. If we have predictive covariates to the outcomes, we can pair units based on the similarity of covariates. With a scalar covariate, we can order units based on this covariate and then form pairs based on the adjacent units. With many covariates, we can define pairwise distances between units and then form pairs based on these distances. In this case, pair matching can be done using a greedy algorithm or an optimal nonbipartite matching algorithm. The greedy algorithm pairs the two units with the smallest distance, drops them from the pool of units, pairs the two remaining units with the smallest distance, etc. The optimal nonbipartite matching algorithm divides the $2n$ units into $n$ pairs of two units to minimize the sum of the within-pair distances. See Greevy et al. (2004) for more details of the computational aspect of the MPE. In this chapter, we assume that the pairs are formed based on the covariates, and discuss the subsequent design and analysis issues.

Let $(i, j)$ index the unit $j$ in pair $i$, where $i = 1, \dots, n$ and $j = 1, 2$. Unit $(i, j)$ has potential outcomes $Y_{ij}(1)$ and $Y_{ij}(0)$ under the treatment and control, respectively. Within each pair, we randomly assign one unit to receive the treatment and the other to receive the control. Let

$$
Z_i = \begin{cases} 1, & \text{if the first unit receives the treatment,} \\ 0, & \text{if the second unit receives the treatment.} \end{cases}
$$

We can formally define MPE based on the treatment assignment mechanism.**Definition 7.1 (MPE) We have**

$$
(Z_i)_{i=1}^n \stackrel{\text{IID}}{\sim} \text{Bernoulli}(1/2). \qquad (7.1)
$$

The observed outcomes within pair *i* are

$$
Y_{i1} = Z_i Y_{i1}(1) + (1 - Z_i) Y_{i1}(0) = \begin{cases} Y_{i1}(1), & \text{if } Z_i = 1; \\ Y_{i1}(0), & \text{if } Z_i = 0; \end{cases}
$$

and

$$
Y_{i2} = Z_i Y_{i2}(0) + (1 - Z_i) Y_{i2}(1) = \begin{cases} Y_{i2}(0), & \text{if } Z_i = 1; \\ Y_{i2}(1), & \text{if } Z_i = 0. \end{cases}
$$

So the observed data are $(Z_i, Y_{i1}, Y_{i2})_{i=1}^n$.

7.2 FRT

Similar to the discussion before, we can always use the FRT to test the sharp
null hypothesis:

$$
H_{0F}: Y_{ij}(1) = Y_{ij}(0) \text{ for all } i = 1, \dots, n \text{ and } j = 1, 2.
$$

When conducting the FRT, we need to simulate the distribution of
(Z₁, ..., Zₙ) from (7.1). I will discuss some canonical choices of test statistics
based on the within-pair differences between the treated and control outcomes:

$$
\begin{align*}
\hat{\tau}_i &= \text{outcome under treatment} - \text{outcome under control (within pair } i) \\
&= (2Z_i - 1)(Y_{i1} - Y_{i2}) \\
&= S_i(Y_{i1} - Y_{i2}),
\end{align*}
$$

where the $S_i = 2Z_i - 1$ are IID random signs with mean 0 and variance
1, for $i = 1, \dots, n$. Since the pairs with zero $\hat{\tau}_i$'s do not contribute to the
randomization distribution, we drop those pairs in the discussion of the FRT.

**Example 7.1 (paired t statistic)** *The average of the within-pair differences is*

$$
\hat{\tau} = n^{-1} \sum_{i=1}^{n} \hat{\tau}_{i}.
$$

Under $H_{0F}$,

$E(\hat{\tau}) = 0$

and

$$
\mathrm{var}(\hat{\tau}) = n^{-2} \sum_{i=1}^{n} \mathrm{var}(\hat{\tau}_i) = n^{-2} \sum_{i=1}^{n} \mathrm{var}(S_i)(Y_{i1} - Y_{i2})^2 = n^{-2} \sum_{i=1}^{n} \hat{\tau}_i^2.
$$Based on the CLT for the sum of independent random variables, we have the Normal approximation:

$$
\frac{\hat{\tau}}{\sqrt{n^{-2} \sum_{i=1}^{n} \hat{\tau}_{i}^{2}}} \rightarrow N(0, 1)
$$

in distribution. We can use this Normal approximation to construct an asymptotic test. Many standard textbooks suggest using the following paired t statistic in the MPE:

$$
t_{\text{pair}} = \frac{\hat{\tau}}{\sqrt{\{n(n-1)\}^{-1} \sum_{i=1}^{n} (\hat{\tau}_i - \hat{\tau})^2}},
$$

which is almost identical to $\hat{\tau}$ with large n and small $\hat{\tau}$ under $H_{0F}$.

In classic statistics, the motivation for using $t_{pair}$ is under a different framework. When $\hat{\tau}_i \stackrel{\text{IID}}{\sim} N(0, \sigma^2)$, we can show that $t_{pair} \sim t(n-1)$, i.e., the exact distribution of $t_{pair}$ is $t$ with degrees of freedom $n-1$, which is close to $N(0, 1)$ with a large $n$. The R function `t.test` with `paired=TRUE` can implement this test. With a large $n$, these procedures give similar results. The discussion in Example 7.1 gives another justification of the classic paired $t$ test without assuming the Normality of the data.

**Example 7.2 (Wilcoxon sign-rank statistic)** *Based on the ranks (R<sub>1</sub>, . . . , R<sub>n</sub>) of (|τ̂<sub>1</sub>|, . . . , |τ̂<sub>n</sub>|), we can define a test statistic*

$$
W = \sum_{i=1}^{n} I(\tau_i > 0)R_i.
$$

Under $H_{0F}$, the $|\hat{\tau}_i|$'s are fixed so the $R_i$'s are also fixed, which implies that

$$
E(W) = \frac{1}{2} \sum_{i=1}^{n} R_i = \frac{1}{2} \sum_{i=1}^{n} i = \frac{n(n+1)}{4}
$$

and

$$
\operatorname{var}(W) = \frac{1}{4} \sum_{i=1}^{n} R_{i}^{2} = \frac{1}{4} \sum_{i=1}^{n} i^{2} = \frac{n(n+1)(2n+1)}{24}.
$$

The CLT for the sum of independent random variables ensures the following Normal approximation:

$$
\frac{W - n(n + 1)/4}{\sqrt{n(n + 1)(2n + 1)/24}} \rightarrow N(0, 1)
$$

in distribution. We can use this Normal approximation to construct an asymptotic test. The R function `wilcox.test` with `paired=TRUE` can implement both the exact and asymptotic tests.**Example 7.3 (Kolmogorov–Smirnov-type statistic)** Under $H_{0F}$, the ab-
solute values ($|\hat{\tau}_1|, \dots, |\hat{\tau}_n|$) are fixed but their signs are random. So $(\hat{\tau}_1, \dots, \hat{\tau}_n)$
and $-(\hat{\tau}_1, \dots, \hat{\tau}_n)$ should have the same distribution. Let

$$
\hat{F}(t) = n^{-1} \sum_{i=1}^{n} I(\hat{\tau}_i \le t)
$$

be the empirical distribution of $(\hat{\tau}_1, \dots, \hat{\tau}_n)$, and

$$
1 - \hat{F}(-t-) = n^{-1} \sum_{i=1}^{n} I(-\hat{\tau}_i \le t)
$$

be the empirical distribution of $-(\hat{\tau}_1, \dots, \hat{\tau}_n)$, where $\hat{F}(-t^-)$ is the left limit
of the function $\hat{F}(\cdot)$ at $-t$. A Kolmogorov-Smirnov-type statistic is then

$$
D = \max_t |\hat{F}(t) + \hat{F}(-t^-) - 1|.
$$

Butler (1969) proposed this test statistic and derived its exact and asymp-
totic distributions. Unfortunately, this is not implemented in standard software
packages. Nevertheless, we can simulate its exact distribution and compute the
p-value based on the FRT. ¹

**Example 7.4 (sign statistic)** *The sign statistic uses only the signs of the within-pair differences*

$$
\Delta = \sum_{i=1}^{n} I(\hat{\tau}_{i} > 0).
$$

Under $H_{0F}$,

$$
I(\hat{\tau}_i > 0) \stackrel{\text{IID}}{\sim} \text{Bernoulli}(1/2)
$$

and therefore

$$
\Delta \sim \text{Binomial}(n, 1/2).
$$

Based on this we have an exact Binomial test, which is implemented in the
R function binom.test with p=1/2. Using the CLT, we can also conduct a test
based on the following Normal approximation of the Binomial distribution:

$$
\frac{\Delta - n/2}{\sqrt{n/4}} \rightarrow \text{N}(0, 1)
$$

¹Butler (1969)'s proposed this test statistic under a slightly different framework. Given IID draws of $(\hat{\tau}_1, \dots, \hat{\tau}_n)$ from a distribution $F(y)$, if they are symmetrically distributed around 0, then

$$
F(t) = \Pr(\hat{\tau}_i \le t) = \Pr(-\hat{\tau}_i \le t) = 1 - \Pr(\hat{\tau}_i < -t) = 1 - F(-t-).
$$

Therefore, $\hat{F}(t) + \hat{F}(-t^-) - 1$ measures the deviation from the null hypothesis of symmetry, which motivates the definition of $D$ in Example 7.3. A naive definition of the Kolmogorov-Smirnov-type statistic is to compare the empirical distributions of the outcomes under treatment and control as in Example 3.4. Using that definition, we effectively break the pairs. Although it can still be used in the FRT for the MPE, it does not capture the matched-pairs structure of the experiment.TABLE 7.1: Counts of four types of pairs

<table><thead><tr><th></th><th>control outcome 1</th><th>control outcome 0</th></tr></thead><tbody><tr><th>treated outcome 1</th><td><i>m</i><sub>11</sub></td><td><i>m</i><sub>10</sub></td></tr><tr><th>treated outcome 0</th><td><i>m</i><sub>01</sub></td><td><i>m</i><sub>00</sub></td></tr></tbody></table>

in distribution.

**Example 7.5 (McNemar's statistic for a binary outcome)** If the outcome is binary, we can summarize the observed data from the MPE in a more compact way. Given a pair, the treated outcome can be either 1 or 0 and the control outcome can be either 1 or 0, yielding a two-by-two table as in Table 7.1.

Under $H_{0F}$, the numbers of concordant pairs $m_{11}$ and $m_{00}$ are fixed, and $m_{10} + m_{01}$ is also fixed. So the only random component is $m_{10}$ which has distribution

$$
m_{10} \sim \text{Binomial}(m_{10} + m_{01}, 1/2).
$$

This implies an exact test based on the Binomial distribution. The R function `mcnemar.test` gives an asymptotic test based on the Normal approximation of the Binomial distribution:

$$
\frac{m_{10} - (m_{10} + m_{01})/2}{\sqrt{(m_{10} + m_{01})/4}} = \frac{m_{10} - m_{01}}{\sqrt{m_{10} + m_{01}}} \rightarrow \text{N}(0, 1)
$$

in distribution. Both the exact FRT and the asymptotic test do not depend on $m_{11}$ or $m_{00}$. Only the numbers of discordant pairs matter in these tests.

## 7.3 Neymanian inference

The average causal effect within pair $i$ is

$$
\tau_i = \frac{1}{2} \{ Y_{i1}(1) + Y_{i2}(1) - Y_{i1}(0) - Y_{i2}(0) \},
$$

and the average causal effect for all units is

$$
\tau = n^{-1} \sum_{i=1}^{n} \tau_i = (2n)^{-1} \sum_{i=1}^{n} \sum_{j=1}^{2} \{Y_{ij}(1) - Y_{ij}(0)\}.
$$

It is intuitive that $\hat{\tau}_i$ is unbiased for $\tau_i$, so $\hat{\tau}$ is unbiased for $\tau$. We can also calculate the variance of $\hat{\tau}$. I relegate the exact formula to Problem 7.1 because the MPE is just a special case of the SRE.

However, we cannot follow the strategy under the SRE to estimate thevariance of $\hat{\tau}$ under the MPE. The within-pair sample variances of the out-
comes are not well defined because, within each pair, we have only one treated
and one control unit. The data do not allow us to estimate the variance of $\hat{\tau}_i$
within pair $i$.

Is it possible to estimate the variance of $\hat{\tau}$ in the MPE? Let us forget about
the MPE and change the perspective to the classic IID sampling. If the $\hat{\tau}_i$'s
are IID with mean $\mu$ and $\sigma^2$, then the variance of $\hat{\tau} = n^{-1} \sum_{i=1}^n \hat{\tau}_i$ is $\sigma^2/n$.
An unbiased estimator for $\sigma^2$ is the sample variance $(n-1)^{-1} \sum_{i=1}^n (\hat{\tau}_i - \hat{\tau})^2$,
so an unbiased estimator for $\text{var}(\hat{\tau})$ is

$$
\hat{V} = \{n(n-1)\}^{-1} \sum_{i=1}^{n} (\hat{\tau}_i - \hat{\tau})^2. \qquad (7.2)
$$

The discussion also extends to the independent but not IID setting; see Prob-
lem A.1 in Chapter A. The above discussion seems a digression from the MPE
which has completely different statistical assumptions. But at least it moti-
vates a variance estimator $\hat{V}$, which uses the between-pair variance of $\hat{\tau}_i$ to
estimate the variance of $\hat{\tau}$. Of course, it is derived under different assumptions.
Does it also work for the MPE? Theorem 7.1 below is a positive result.

**Theorem 7.1** *Under the MPE, $\hat{V}$ defined in (7.2) is a conservative estimator for the true variance of $\hat{\tau}$:*

$$
E(\hat{V}) - \text{var}(\hat{\tau}) = \{n(n-1)\}^{-1} \sum_{i=1}^{n} (\tau_i - \tau)^2 \geq 0.
$$

If the $\tau_i$'s are constant across pairs, then $E(\hat{V}) = \text{var}(\hat{\tau})$.

Theorem 7.1 states that under the MPE, $\hat{V}$ is a conservative variance estimator in general and becomes unbiased if the average causal effects are constant across pairs. It is somewhat surprising because $\hat{V}$ depends on the between-pair variance of the $\hat{\tau}_i$'s whereas $\text{var}(\hat{\tau})$ depends on the within-pair variance of each of $\hat{\tau}_i$. The proof below might provide some insights into this surprising result.

**Proof of Theorem 7.1:** Recall the basic algebraic fact that $\sum_{i=1}^{n}(a_i - \bar{a})^2 = \sum_{i=1}^{n} a_i^2 - n\bar{a}^2$ which parallels the fact that $\text{var}(W) = E(W^2) - (EW)^2$ for arandom variable $W$. Use it in the following steps 2 and 5, we have

$$
\begin{align*}
n(n-1)E(\hat{V}) &= E\left\{\sum_{i=1}^{n} (\hat{\tau}_i - \hat{\tau})^2\right\} \\
&= E\left(\sum_{i=1}^{n} \hat{\tau}_i^2 - n\hat{\tau}^2\right) \\
&= \sum_{i=1}^{n} \{\text{var}(\hat{\tau}_i) + \tau_i^2\} - n\{\text{var}(\hat{\tau}) + \tau^2\} \\
&= \sum_{i=1}^{n} \text{var}(\hat{\tau}_i) - n\text{var}(\hat{\tau}) + \sum_{i=1}^{n} \tau_i^2 - n\tau^2 \\
&= n^2\text{var}(\hat{\tau}) - n\text{var}(\hat{\tau}) + \sum_{i=1}^{n} (\tau_i - \tau)^2.
\end{align*}
$$

Therefore,

$$
E(\hat{V}) = \mathrm{var}(\hat{\tau}) + \{n(n-1)\}^{-1} \sum_{i=1}^{n} (\tau_i - \tau)^2 \geq \mathrm{var}(\hat{\tau}).
$$

Similar to the discussions for other experiments, the Neymanian approach
relies on the large-sample approximation:

$$
\frac{\hat{\tau} - \tau}{\sqrt{\mathrm{var}(\hat{\tau})}} \rightarrow \mathrm{N}(0, 1)
$$

in distribution if $n \to \infty$ and some regularity conditions hold. Due to the
over-estimation of the variance, the Wald-type confidence interval

$$
\hat{\tau} \pm z_{1-\alpha/2} \sqrt{\hat{V}}
$$

covers $\tau$ with probability at least $1 - \alpha$.

Both the point estimator $\hat{\tau}$ and the variance estimator $\hat{V}$ can be conveniently obtained by OLS, as shown in the proposition below.

**Proposition 7.1** $\hat{\tau}$ and $\hat{V}$ are identical to the coefficient and variance estimator of the intercept from the OLS fit of the vector $(\hat{\tau}_1, \dots, \hat{\tau}_n)^\top$ on the intercept only.

I leave the proof of Proposition 7.1 as Problem 7.3.

7.4 Covariate adjustment

Although we have matched on covariates in the design stage, it is possible that
the matching is not perfect ($X_{i1} \neq X_{i2}$) and sometimes we have additionalcovariates beyond those used in the pair-matching stage. In those cases, we
can adjust for the covariates to further improve estimation efficiency. Assume
that each unit (i, j) has covariates $X_{ij}$. Similar to the discussion in the CRE,
there are two general strategies of covariate adjustment in the MPE.

7.4.1 FRT

I start with the covariate-adjusted FRT in the MPE. In parallel with Definition 6.2, we can construct test statistics based on the residuals from a model fitting of the outcome on the covariates, since those residuals are fixed numbers under the sharp null hypothesis. A canonical choice is to fit OLS of all observed $Y_{ij}$'s on $X_{ij}$'s to obtain the residuals $\hat{\varepsilon}_{ij}$'s. We can then construct test statistics pretending that the $\hat{\varepsilon}_{ij}$'s are the observed outcomes. Rosenbaum (2002a) advocated this strategy in particular to the MPE.

In parallel with Definition 6.3, we can directly use some coefficients from
model fitting as the test statistics. The discussion in the next subsection will
suggest a choice of the test statistic for this strategy.

7.4.2 Regression adjustment

I now focus on estimating $\tau$. We can compute the within-pair differences in
covariates $\hat{\tau}_{X,i}$ and their average $\hat{\tau}_X$ in the same way as the outcome. We can
show that

$$
E(\hat{\tau}_{X,i}) = 0, \quad E(\hat{\tau}_X) = 0,
$$

and

$$
\operatorname{cov}(\hat{\tau}_X) = n^{-2} \sum_{i=1}^{n} \hat{\tau}_{X,i} \hat{\tau}_{X,i}^{\top}.
$$

In a realized MPE, cov(τ̂X) is not zero unless all the τ̂X,i's are zero. With an
unlucky draw of (Z₁, . . . , Zn), it is possible that τ̂X differs substantially from
zero. Similar to the discussion under the CRE in Chapter 6.2.2.3, adjusting for
the imbalance of the covariate means is likely to improve estimation efficiency.

Similar to the discussion in Section 6.2.2.3, we can consider a class of
estimators indexed by $\gamma$:

$$
\hat{\tau}(\gamma) = \hat{\tau} - \gamma^{\top} \hat{\tau}_{X}
$$

which has mean 0 for any fixed $\gamma$. We want to choose $\gamma$ to minimize the
variance of $\hat{\tau}(\gamma)$. Its variance is a quadratic function of $\gamma$:

$$
\begin{align*}
\operatorname{var}\{\hat{\tau}(\gamma)\} &= \operatorname{var}(\hat{\tau} - \gamma^{\top}\hat{\tau}_{X}) \\
&= \operatorname{var}(\hat{\tau}) + \gamma^{\top}\operatorname{cov}(\hat{\tau}_{X})\gamma - 2\gamma^{\top}\operatorname{cov}(\hat{\tau}_{X}, \hat{\tau}),
\end{align*}
$$

which is minimized at

$$
\tilde{\gamma} = \operatorname{cov}(\hat{\tau}_X)^{-1} \operatorname{cov}(\hat{\tau}_X, \hat{\tau}).
$$We have obtained the formula for cov($\hat{\tau}_X$) in the above, which can also be
written as

$$
\mathrm{cov}(\hat{\tau}_X) = n^{-2} \sum_{i=1}^{n} |\hat{\tau}_{X,i}| |\hat{\tau}_{X,i}|^{\top},
$$

where |·| denotes the component-wise absolute value of a vector. So cov(τ̂X) is
fixed and known from the observed data. However, cov(τ̂X, τ) depends on un-
known potential outcomes. Fortunately, we can obtain an unbiased estimator
for it, as shown in Theorem 7.2 below.

**Theorem 7.2** An unbiased estimator for cov(τ̃X, τ) is

$$
\hat{\theta} = \{n(n-1)\}^{-1} \sum_{i=1}^{n} (\hat{\tau}_{X,i} - \hat{\tau}_{X})(\hat{\tau}_{i} - \hat{\tau}).
$$

The proof of Theorem 7.2 is similar to that of Theorem 7.1. I leave it to
Problem 7.2.

Therefore, we can estimate the optimal coefficient $\tilde{\gamma}$ by

$$
\begin{align*}
\hat{\gamma} &= \left( n^{-2} \sum_{i=1}^{n} \hat{\tau}_{X,i} \hat{\tau}_{X,i}^{\top} \right)^{-1} \left\{ \{n(n-1)\}^{-1} \sum_{i=1}^{n} (\hat{\tau}_{X,i} - \hat{\tau}_{X})(\hat{\tau}_{i} - \hat{\tau}) \right\} \\
&\approx \left( \sum_{i=1}^{n} (\hat{\tau}_{X,i} - \hat{\tau}_{X})(\hat{\tau}_{X,i} - \hat{\tau}_{X})^{\top} \right)^{-1} \sum_{i=1}^{n} (\hat{\tau}_{X,i} - \hat{\tau}_{X})(\hat{\tau}_{i} - \hat{\tau}),
\end{align*}
$$

which is approximately the coefficient of the $\hat{\tau}_{X,i}$ in the OLS fit of the $\hat{\tau}_i$'s on
the $\hat{\tau}_{X,i}$'s with an intercept. The final estimator is

$$
\hat{\tau}_{\text{adj}} = \hat{\tau}(\hat{\gamma}) = \hat{\tau} - \hat{\gamma}^{\top} \hat{\tau}_{X},
$$

which, by the property of OLS, is approximately the intercept in the OLS fit
of the $\hat{\tau}_i$'s on the $\hat{\tau}_{X,i}$'s with an intercept.

A conservative variance estimator for $\hat{\tau}_{\text{adj}}$ is then

$$
\begin{align*}
\hat{V}_{\text{adj}} &= \hat{V} + \hat{\gamma}^{\top} \text{cov}(\hat{\tau}_X) \hat{\gamma} - 2 \hat{\gamma}^{\top} \hat{\theta} \\
&= \hat{V} - \hat{\theta}^{\top} \text{cov}(\hat{\tau}_X)^{-1} \hat{\theta}.
\end{align*}
$$

A subtle technical issue is whether $\hat{\tau}(\hat{\gamma})$ has the same optimality as $\hat{\tau}(\tilde{\gamma})$.
We have encountered a similar issue in the discussion of Lin (2013)'s estimator.
With large samples, we can show $\hat{\tau}(\hat{\gamma}) - \hat{\tau}(\tilde{\gamma}) = -(\hat{\gamma} - \tilde{\gamma})^\top \hat{\tau}_X$ is of higher order
since it is the product of two "small" terms $\hat{\gamma} - \tilde{\gamma}$ and $\hat{\tau}_X$.

Moreover, Fogarty (2018b) discussed the asymptotically equivalent regression formulation of the above covariate-adjusted procedure and gave a rigorous proof for the associated CLT. I summarize the regression formulation below without giving the regularity conditions.**Proposition 7.2** *Under the MPE, the covariate-adjusted estimator $\hat{\tau}_{adj}$ and the associated variance estimator $\hat{V}_{adj}$ can be conveniently approximated by the intercept and the associated variance estimator from the OLS fit of the vector of the $\hat{\tau}_i$'s on the 1's and the matrix of the $\hat{\tau}_{X,i}$'s.*

I leave the proof of Proposition 7.2 as Problem 7.3. Interestingly, neither Proposition 7.1 nor 7.2 requires the EHW correction of the variance estimator. See Fogarty (2018b) for more technical details. Because we reduce the data from the MPE to the within-pair differences, it is unnecessary to center the covariates, which is different from the implementation of Lin (2013)'s estimator under the CRE.

## 7.5 Examples

### 7.5.1 Darwin's data comparing cross-fertilizing and self-fertilizing on the height of corns

This is a classical example from Fisher (1935). It contains 15 pairs of corns with either cross-fertilizing or self-fertilizing, with the height being the outcome. The R package *HistData* provides the original data, where *cross* and *self* are the heights under cross-fertilizing and self-fertilizing, respectively, and *diff* denotes their difference.

```r
> library("HistData")
> ZeaMays
  pair pot   cross   self   diff
  1        1   23.500  17.375  6.125
  2        2   12.000  20.375 -8.375
  3        3   21.000  20.000  1.000
  4        4   22.000  20.000  2.000
  5        5   19.125  18.375  0.750
  6        6   21.500  18.625  2.875
  7        7   22.125  18.625  3.500
  8        8   30.375  15.250  5.125
  9        9   18.250  16.500  1.750
 10       10   21.625  18.000  3.625
 11       11   23.250  16.250  7.000
 12       12   21.000  18.000  3.000
 13       13   22.125  12.750  9.375
 14       14   23.000  15.500  7.500
 15       15   12.000  18.000 -6.000
```

In total, the MPE has $2^{15} = 32768$ possible treatment assignment which is a tractable number in $\mathbb{R}$. The following function can enumerate all possible treatment assignments for the MPE:MP_enumerate = function(i, n.pairs)
{
  if(i > 2^n.pairs) print("i is too large.")
  a = 2^((n.pairs-1):0)
  b = 2*a
  2*sapply(i-1,
    function(x)
    asoadjust((x %*% b)>=a)) - 1
}

So we enumerate all the treatment assignments and calculate the corre-
sponding $\hat{\tau}$'s and the one-sided exact *p*-value.

```r
> difference = ZeaMays$diff
> n.pairs     = length(difference)
> abs.diff    = abs(difference)
> tobs        = mean(difference)
> t.ran       = sapply(1:2^15,
+                       function(x){
+                         sum(MP_enumerate(x, 15)*abs.diff)
+                     })/n.pairs
> pvalue      = mean(t.ran>=tobs)
> pvalue
[1] 0.02633667
```

Figure 7.1 shows the exact randomization distribution of $\hat{\tau}$ under $H_{0F}$.

![[_resources/Ding - 2023 - A First Course in Causal Inference_Part5/f77a57c2028f6f50f85fa3a86a5a1b9e_MD5.jpg]]

FIGURE 7.1: Exact randomization distribution of $\hat{\tau}$ using Darwin's data```r
> unadj = summary(lm(diffy ~ 1, data = dataxy))$coef
> round(unadj, 3)
   Estimate Std. Error t value Pr(>\|t\|)
(Intercept)  13.425    4.636    2.896    0.023
```

Adjusting for covariates, we have

```r
> adj = summary(lm(diffy ~ diffx, data = dataxy))$coef
> round(adj, 3)
   Estimate Std. Error t value Pr(>\|t\|)
(Intercept)   8.994    1.410    6.381    0.001
diffx         5.371    0.599    8.964    0.000
```

The above results assume large *n*, and *p*-values are justified if we believe the large-*n* approximation. However, *n* = 8 is not large. In total, we have $2^8 = 256$ possible treatment assignments, so the smallest possible *p*-value is $1/256 = 0.0039$, which is much larger than the *p*-value based on the Normal approximation of the covariate-adjusted estimator. In this example, it will be more reasonable to use the FRT with the studentized statistic, which is the *t* value from the *lm* function, to calculate exact *p*-values². The following R code calculates the *p*-values based on two *t*-statistics.

```r
> t.ran = sapply(1:2^8, function(x){
+   z.mpe = MP_enumerate(x, 8)
+   diffy.mpe = diffy*z.mpe
+   diffx.mpe = diffx*z.mpe
+   c(summary(lm(diffy.mpe ~ 1))$coef[1, 3],
       summary(lm(diffy.mpe ~ diffx.mpe))$coef[1, 3])
+ })
> p.unadj = mean(abs(t.ran[1,])) >= abs(unadj[1, 3])
> p.unadj
[1] 0.03125
> p.adj = mean(abs(t.ran[2,])) >= abs(adj[1, 3])
> p.adj
[1] 0.0078125
```

Figure 7.2 shows the exact distributions of the two studentized statistics, as well as the two-sided *p*-values. The figure highlights the fact that the randomization distributions of the test statistics are discrete, taking at most 256 possible values. The Normal approximations are unlikely to be accurate, especially at the tails. We should report the *p*-values based on the FRT.

²See Chapter 8 for a justification.![[_resources/Ding - 2023 - A First Course in Causal Inference_Part5/a4bbab7a99fc67b0074dc4f9118f2b16_MD5.jpg]]

FIGURE 7.2: Exact randomization distributions of the studentized statistics in Section 7.5.2

7.6 Comparing the MPE and CRE

Imai (2008b) compared the MPE and CRE. Heuristically, the conclusion is that the MPE gives more precise estimators if the matching is well done and the covariates are predictive of the outcome. However, without the outcome data in the design stage, it is hard to decide whether this is true or not. In the FRT, if covariates are predictive of the outcome, the MPE usually gives more powerful tests compared with the CRE. Greevy et al. (2004) illustrated this using simulation based on the Wilcoxon sign-rank statistic. However, this can be a subtle issue with finite samples. Consider an experiment with 2n units, with *n* units receiving the treatment and *n* units receiving the control. If we test the sharp null hypothesis at level 0.05, then in the MPE, we need at least 2 × 5 = 10 units since the smallest *p*-value is 1/2⁵ = 1/32 < 0.05 but 1/2⁴ = 1/16 > 0.05, but in the CRE, we need at least 2 × 4 = 8 units since the smallest *p*-value is 1/(8) = 1/70 < 0.05 but 1/(6) = 1/20 = 0.05. So with 8 units, it is impossible to reject the sharp null hypothesis in the MPE but it is possible in the CRE. Even if the covariates are perfect predictors of the outcome, the MPE is not superior to the CRE based on the FRT.7.7 Extension to the general matched experiment

It is straightforward to extend the MPE to the general matched experiment
with varying numbers of control units. Assume that we have *n* matched sets
indexed by *i* = 1, ..., *n*. For the matched set *i*, we have 1 + *M*<sub>*i*</sub> units. The *M*<sub>*i*</sub>'s
can vary. The total number of experimental units is *N* = *n* + Σ<sub>*i*=1</sub><sup>*n*</sup> *M*<sub>*i*</sub>. Let
*ij* index the unit *j* within matched set *i* (*i* = 1, ..., *n* and *j* = 1, ..., *M*<sub>*i*</sub> + 1).
Unit *ij* has potential outcomes *Y*<sub>*ij*</sub>(1) and *Y*<sub>*ij*</sub>(0) under the treatment and
control, respectively.

Within the matched set *i* (*i* = 1, . . . , *n*), the experimenter randomly selects exactly one unit to receive the treatment with the rest *M*<sub>*i*</sub> units receiving the control. This general matched experiment is also a special case of the SRE with *n* strata of size 1 + *M*<sub>*i*</sub> (*i* = 1, . . . , *n*). Let *Z*<sub>*ij*</sub> be the treatment indicator for unit *ij*, which reveals one of the potential outcomes as

$$
Y_{ij} = Z_{ij}Y_{ij}(1) + (1 - Z_{ij})Y_{ij}(0).
$$

The average causal effect within the matched set *i* equals

$$
\tau_i = (M_i + 1)^{-1} \sum_{j=1}^{1+M_i} \{Y_{ij}(1) - Y_{ij}(0)\}.
$$

Since the general matched experiment is a SRE, an unbiased estimator of $\tau_i$
is

$$
\hat{\tau}_i = \sum_{j=1}^{M_i+1} Z_{ij} Y_{ij} - M_i^{-1} \sum_{j=1}^{M_i+1} (1 - Z_{ij}) Y_{ij}
$$

which is the difference in means of the outcomes within matched set *i*.

Below we discuss the statistical inference with the general matched exper-
iment.

7.7.1 FRT

As usual, we can always use the FRT to test the sharp null hypothesis

$$
H_{0F}: Y_{ij}(1) = Y_{ij}(0) \text{ for all } i = 1, \dots, n; j = 1, \dots, M_i + 1.
$$

Because the general matched experiment is a special case of the SRE with
many small strata, we can use the test statistics defined in Examples 5.4, 5.5,
7.2, 7.3, 7.4, as well as the estimators and the corresponding *t*-statistics from
the following two subsections.7.7.2 Estimating the average of the within-strata effects

We first focus on estimating the average of the within-strata effects:

$$
\tau = n^{-1} \sum_{i=1}^{n} \tau_i.
$$

It has an unbiased estimator

$$
\hat{\tau} = n^{-1} \sum_{i=1}^{n} \hat{\tau}_i.
$$

Interestingly, we can show that Theorem 7.1 holds for the general matched experiment, and so are other results for the MPE. In particular, we can use the OLS fit of the $\hat{\tau}_i$'s on the intercept to obtain the point and variance estimators for $\tau$. With covariates, we can use the OLS fit of the $\hat{\tau}_i$'s on the intercept and the $\hat{\tau}_{X,i}$'s, where

$$
\hat{\tau}_{X,i} = \sum_{j=1}^{M_i+1} Z_{ij}X_{ij} - M_i^{-1} \sum_{j=1}^{M_i+1} (1 - Z_{ij})X_{ij}
$$

is the corresponding difference in means of the covariates within matched set
i.

**7.7.3 A more general causal estimand**

Importantly, the $\tau$ above is the average of the $\tau_i$'s, which does not equal the
average causal effect for the $N$ units in the experiment when the $M_i$'s vary.
The average causal effect equals

$$
\tau' = N^{-1} \sum_{i=1}^{n} \sum_{j=1}^{1+M_i} \{Y_{ij}(1) - Y_{ij}(0)\} = \sum_{i=1}^{n} \frac{1+M_i}{N} \tau_i.
$$

To unify the discussion, I consider the weighted causal effect

$$
\tau_w = \sum_{i=1}^{n} w_i \tau_i
$$

with $\sum_{i=1}^n w_i = 1$, which includes $\tau$ as a special case with $w_i = n^{-1}$ and $\tau'$ as a special case with $w_i = (1+M_i)/N$ for $i = 1, \dots, n$. It is straightforward to obtain an unbiased estimator

$$
\hat{\tau}_w = \sum_{i=1}^{n} w_i \hat{\tau}_i,
$$and calculate its variance

$$
\mathrm{var}(\hat{\tau}_w) = \sum_{i=1}^{n} w_i^2 \mathrm{var}(\hat{\tau}_i).
$$

However, estimating the variance of $\hat{\tau}_w$ is quite tricky because the $\hat{\tau}_i$'s are in-
dependent random variables without any replicates. This is a famous problem
in theoretical statistics studied by Hartley et al. (1969) and Rao (1970). Fog-
arty (2018a) also discussed this problem without recognizing these previous
works. I will give the final form of the variance estimator without detailing
the motivation:

$$
\hat{V}_w = \sum_{i=1}^{n} c_i (\hat{\tau}_i - \hat{\tau}_w)^2
$$

where

$$
c_i = \frac{\frac{w_i^2}{1-2w_i}}{1 + \sum_{i=1}^{n} \frac{w_i^2}{1-2w_i}}.
$$

As a sanity check, $c_i$ reduces to $\{n(n-1)\}^{-1}$ in the MPE with $M_i = 1$ and $w_i = n^{-1}$. For simplicity, we focus on the case with $w_i < 1/2$ for all $i$'s, that is, there is no matched set containing more than half of the total weights. The following theorem extends Theorem 7.1.

**Theorem 7.3** Under the general matched experiment with varying $M_i$'s, if $w_i < 1/2$ for all $i$'s, then

$$
E(\hat{V}_w) - \mathrm{var}(\hat{\tau}_w) = \sum_{i=1}^{n} c_i (\tau_i - \tau_w)^2 \geq \mathrm{var}(\hat{\tau}_w) \geq 0
$$

with equality holding if the $\tau_i$'s are constant.

Although the theoretical motivation for $\hat{V}_w$ is quite complicated, it is not
too difficult to verify Theorem 7.3 directly. I relegate the proof to Problem
7.9.

**7.8 Homework Problems**

7.1 *The true variance of $\hat{\tau}$ in the MPE*

Express var(τ̂) in terms of the finite-population variances of the potential outcomes.

7.2 *A covariance estimator*

Prove Theorem 7.2.7.3 *Variance estimators via OLS*

Prove Propositions 7.1 and 7.2.

7.4 Point and variance estimator with binary outcome

This problem extends Example 7.5 to Neymanian inference.

Express $\hat{\tau}$ and $\hat{V}$ in terms of the counts in Table 7.1.

7.5 Minimum sample size for the FRT

Extend the discussion in Section 7.6. Consider an experiment with 2n units,
with *n* units receiving the treatment and *n* units receiving the control, and
test the sharp null hypothesis at level 0.001. What is the minimum value of
*n* for an MPE so that the smallest *p*-value does not exceed than 0.001, and
what is the corresponding minimum value of *n* for a CRE?

7.6 *Re-analyzing Darwin's data*

Chapter 7.5.1 analyzed Darwin’s data using the FRT based on the test statistic
$\hat{\tau}$.

Re-analyze this dataset using the FRT with the Wilcoxon sign-rank statistic.

Re-analyze this dataset based on the Neymanian inference: report the un-
biased point estimator, conservative variance estimator, and 95% confidence
interval.

7.7 *Re-analyzing children's television workshop experiment data*

Chapter 7.5.2 analyzed the data from based on Neymanian inference.

Re-analyze this dataset using the FRT with different test statistics.

Re-analyze this dataset using the FRT with covariate adjustment.

7.8 *Re-analyzing Angrist and Lavy (2009)'s data*

The original analysis of Angrist and Lavy (2009)' was quite complicated. For
this problem, please focus only on Table A1 of the original paper and view
the schools as the experimental units. Angrist and Lavy (2009) essentially
conducted an MPE on the schools. Dropping pair 6 and all the pairs with
noncompliance results in 14 complete pairs, with data shown below and also
in AL2009.csv:

<table>
  <thead>
    <tr>
      <th></th>
      <th>pair</th>
      <th>z</th>
      <th>pr99</th>
      <th>pr00</th>
      <th>pr01</th>
      <th>pr02</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>1</td>
      <td>0</td>
      <td>0.046</td>
      <td>0.000</td>
      <td>0.091</td>
      <td>0.185</td>
    </tr>
    <tr>
      <td>2</td>
      <td>1</td>
      <td>1</td>
      <td>0.036</td>
      <td>0.051</td>
      <td>0.000</td>
      <td>0.047</td>
    </tr>
    <tr>
      <td>3</td>
      <td>2</td>
      <td>0</td>
      <td>0.054</td>
      <td>0.094</td>
      <td>0.184</td>
      <td>0.034</td>
    </tr>
    <tr>
      <td>4</td>
      <td>2</td>
      <td>1</td>
      <td>0.050</td>
      <td>0.108</td>
      <td>0.110</td>
      <td>0.095</td>
    </tr>
    <tr>
      <td>5</td>
      <td>3</td>
      <td>0</td>
      <td>0.114</td>
      <td>0.000</td>
      <td>0.056</td>
      <td>0.075</td>
    </tr>
    <tr>
      <td>6</td>
      <td>3</td>
      <td>1</td>
      <td>0.098</td>
      <td>0.054</td>
      <td>0.030</td>
      <td>0.068</td>
    </tr>
  </tbody>
</table>7.8 *Homework Problems*

<table>
  <tr>
    <td>7</td>
    <td>4</td>
    <td>0</td>
    <td>0.148</td>
    <td>0.162</td>
    <td>0.082</td>
    <td>0.075</td>
  </tr>
  <tr>
    <td>8</td>
    <td>4</td>
    <td>1</td>
    <td>0.134</td>
    <td>0.390</td>
    <td>0.339</td>
    <td>0.458</td>
  </tr>
  <tr>
    <td>9</td>
    <td>5</td>
    <td>0</td>
    <td>0.152</td>
    <td>0.105</td>
    <td>0.083</td>
    <td>0.129</td>
  </tr>
  <tr>
    <td>10</td>
    <td>5</td>
    <td>1</td>
    <td>0.145</td>
    <td>0.077</td>
    <td>0.579</td>
    <td>0.167</td>
  </tr>
  <tr>
    <td>11</td>
    <td>6</td>
    <td>0</td>
    <td>0.188</td>
    <td>0.214</td>
    <td>0.375</td>
    <td>0.545</td>
  </tr>
  <tr>
    <td>12</td>
    <td>6</td>
    <td>1</td>
    <td>0.179</td>
    <td>0.165</td>
    <td>0.483</td>
    <td>0.444</td>
  </tr>
  <tr>
    <td>13</td>
    <td>7</td>
    <td>0</td>
    <td>0.193</td>
    <td>0.771</td>
    <td>0.328</td>
    <td>0.583</td>
  </tr>
  <tr>
    <td>14</td>
    <td>7</td>
    <td>1</td>
    <td>0.189</td>
    <td>0.186</td>
    <td>0.168</td>
    <td>0.368</td>
  </tr>
  <tr>
    <td>15</td>
    <td>8</td>
    <td>0</td>
    <td>0.197</td>
    <td>0.350</td>
    <td>0.000</td>
    <td>0.383</td>
  </tr>
  <tr>
    <td>16</td>
    <td>8</td>
    <td>1</td>
    <td>0.200</td>
    <td>0.071</td>
    <td>0.667</td>
    <td>0.429</td>
  </tr>
  <tr>
    <td>17</td>
    <td>9</td>
    <td>0</td>
    <td>0.213</td>
    <td>0.176</td>
    <td>0.164</td>
    <td>0.172</td>
  </tr>
  <tr>
    <td>18</td>
    <td>9</td>
    <td>1</td>
    <td>0.209</td>
    <td>0.165</td>
    <td>0.092</td>
    <td>0.151</td>
  </tr>
  <tr>
    <td>19</td>
    <td>10</td>
    <td>0</td>
    <td>0.211</td>
    <td>0.667</td>
    <td>0.250</td>
    <td>0.617</td>
  </tr>
  <tr>
    <td>20</td>
    <td>10</td>
    <td>1</td>
    <td>0.219</td>
    <td>0.250</td>
    <td>0.500</td>
    <td>0.350</td>
  </tr>
  <tr>
    <td>21</td>
    <td>11</td>
    <td>0</td>
    <td>0.219</td>
    <td>0.153</td>
    <td>0.185</td>
    <td>0.219</td>
  </tr>
  <tr>
    <td>22</td>
    <td>11</td>
    <td>1</td>
    <td>0.224</td>
    <td>0.363</td>
    <td>0.372</td>
    <td>0.342</td>
  </tr>
  <tr>
    <td>23</td>
    <td>12</td>
    <td>0</td>
    <td>0.255</td>
    <td>0.226</td>
    <td>0.213</td>
    <td>0.327</td>
  </tr>
  <tr>
    <td>24</td>
    <td>12</td>
    <td>1</td>
    <td>0.257</td>
    <td>0.098</td>
    <td>0.107</td>
    <td>0.095</td>
  </tr>
  <tr>
    <td>25</td>
    <td>13</td>
    <td>0</td>
    <td>0.261</td>
    <td>0.071</td>
    <td>0.000</td>
    <td>NA</td>
  </tr>
  <tr>
    <td>26</td>
    <td>13</td>
    <td>1</td>
    <td>0.263</td>
    <td>0.441</td>
    <td>0.448</td>
    <td>0.435</td>
  </tr>
  <tr>
    <td>27</td>
    <td>14</td>
    <td>0</td>
    <td>0.286</td>
    <td>0.161</td>
    <td>0.126</td>
    <td>0.181</td>
  </tr>
  <tr>
    <td>28</td>
    <td>14</td>
    <td>1</td>
    <td>0.285</td>
    <td>0.389</td>
    <td>0.353</td>
    <td>0.309</td>
  </tr>
</table>

The outcomes are the Bagrut passing rates in the years 2001 and 2002, with the Bagrut passing rates in 1999 and 2000 as pretreatment covariates. Re-analyze the data based on the Neymanian inference with and without covariates. In particular, how do you deal with the missing outcome in pair 25?

7.9 *Variance estimation in the general matched experiment*

This problem contains more details for Section 7.7.

First, prove Theorem 7.1 for the general matched experiment. Second, prove Theorem 7.3.

Remark: For the second part, we can first verify that $\hat{\tau}_i - \hat{\tau}_w$ has mean $\tau_i - \tau_w$ and variance

$$
\mathrm{var}(\hat{\tau}_i - \hat{\tau}_w) = \mathrm{var}(\hat{\tau}_w) + (1 - 2w_i)\mathrm{var}(\hat{\tau}_i).
$$

7.10 *Recommended readings*

Greevy et al. (2004) provided an algorithm to form matched pairs based on covariates. Imai (2008b) discussed the estimation of the average causal effect without covariates, and Fogarty (2018b) discussed covariate adjustment in MPEs.![[_resources/Ding - 2023 - A First Course in Causal Inference_Part5/24507f2e14f9e81a2539ab4dc2a34dd7_MD5.jpg]]

![[_resources/Ding - 2023 - A First Course in Causal Inference_Part5/39f01926125690adada8c4f5032b4096_MD5.jpg]]

![[_resources/Ding - 2023 - A First Course in Causal Inference_Part5/2f4b06faf0880fca84fe597b7f02224a_MD5.jpg]]

![[_resources/Ding - 2023 - A First Course in Causal Inference_Part5/470f2eb928ab931429e2949b9b9cb52c_MD5.jpg]]8

Unification of the Fisherian and Neymanian
Inferences in Randomized Experiments

Chapters 3–7 cover both the Fisherian and Neymanian inferences for different types of experiments. The Fisherian perspective focuses on the finite-sample exact *p*-values for testing the strong null hypothesis of no causal effects for any units whatsoever, whereas the Neymanian perspective focuses on unbiased estimation with a conservative large-sample confidence interval for the average causal effect. Both of them are justified by the physical randomization which is ensured by the design of the experiments. Because of this, they are both called *randomization-based inference* or *design-based inference*. Because they concern a finite population of units in the experiments, they are also called *finite-population inference*. They are related but also have distinct features.

In 1935, Neyman presented his seminal paper on randomization-based in-
ference to the Royal Statistical Society. His paper (Neyman, 1935) was at-
tacked by Fisher in the discussion session. Sabbaghi and Rubin (2014) re-
viewed this famous Neyman–Fisher controversy and presented some new re-
sults for this old problem. Instead of going to the philosophical issues, this
chapter tries to provide a unified discussion.

8.1 Testing strong and weak null hypotheses in the CRE

Let us revisit the treatment-control CRE. The Fisherian perspective focuses on testing the strong null hypothesis

$$
H_{0F}: Y_i(1) = Y_i(0) \text{ for all units } i = 1, \dots, n.
$$

The FRT delivers a finite-sample exact $p_{\text{FRT}}$ defined in (3.2).

By duality of the confidence interval and hypothesis testing, the Neyma-
nian perspective gives a test for the weak null hypothesis

$$
H_{0N} : \tau = 0 \iff H_{0N} : \bar{Y}(1) = \bar{Y}(0)
$$

based on

$$
t = \frac{\hat{\tau}}{\sqrt{\hat{V}}}
$$By the CLT of $\hat{\tau}$ and the conservativeness of the variance estimator, we have

$$
t = \sqrt{\frac{\mathrm{var}(\hat{\tau})}{\hat{V}}} \times \frac{\hat{\tau}}{\sqrt{\mathrm{var}(\hat{\tau})}} \rightarrow C \times \mathrm{N}(0, 1)
$$

in distribution, where $C$ is smaller than or equal to 1 but depends on the unknown potential outcomes. Using $N(0, 1)$ quantiles for the studentized statistic $t$, we have a conservative large-sample test for $H_{0N}$.

Furthermore, Ding and Dasgupta (2017) show that the FRT with the studentized statistic $t$ has the dual guarantees:

1. $p_{\text{FRT}}$ is finite-sample exact under $H_{0F}$;
2. $p_{\text{FRT}}$ is asymptotically conservative under $H_{0N}$.

Importantly, this is a feature of the studentized statistic $t$. Ding and Dasgupta (2017) showed that the FRT with other test statistics may not have the dual guarantees. In particular, the FRT with $\hat{\tau}$ may be asymptotically anti-conservative under $H_{0N}$. I give some heuristics below to illustrate the importance of studentization in the FRT.

Under $H_{0N}$, we have

$$
\hat{\tau} \sim N\left(0, \frac{S^2(1)}{n_1} + \frac{S^2(0)}{n_0} - \frac{S^2(\tau)}{n}\right).
$$

The FRT pretends that the Science Table is $(Y_i, Y_i)_{i=1}^n$ induced by $H_{0F}$, so the randomization distribution of $\hat{\tau}$ is

$$
(\hat{\tau})^{\pi} \sim N\left(0, \frac{s^2}{n_1} + \frac{s^2}{n_0}\right),
$$

where $(\cdot)^{\pi}$ denotes the randomization distribution¹ and $s^2$ is the sample variance of the observed outcomes. Based on (3.7) in Chapter 3, we can approximate the asymptotic variance of $(\hat{\tau})^{\pi}$ under $H_{0F}$ as

$$
\begin{align*}
\frac{s^2}{n_1} + \frac{s^2}{n_0} &= \frac{n}{n_1 n_0} \left\{ \frac{n_1 - 1}{n-1} \hat{S}^2(1) + \frac{n_0 - 1}{n-1} \hat{S}^2(0) + \frac{n_1 n_0}{n(n-1)} \hat{\tau}^2 \right\} \\
&\approx \frac{\hat{S}^2(1)}{n_0} + \frac{\hat{S}^2(0)}{n_1} \\
&\approx \frac{S^2(1)}{n_0} + \frac{S^2(0)}{n_1},
\end{align*}
$$

which does not match the asymptotic variance of $\hat{\tau}$. Ideally, we should compute the $p$-value under $H_{0N}$ based on the true distribution of $\hat{\tau}$, which, however, depends on the unknown potential outcomes. In contrast, we use the FRT to compute the $p_{\text{FRT}}$ based on the permutation distribution $(\hat{\tau})^{\pi}$, which does not

¹$\pi$ is a standard notation for a random permutation.match the true distribution of $\hat{\tau}$ under $H_{0N}$ even with large samples. Therefore, the FRT with $\hat{\tau}$ may not control the type one error rate under $H_{0N}$ even with large samples.

Fortunately, the undesired property of the FRT with $\hat{\tau}$ goes away if we replace the test statistic $\hat{\tau}$ with the studentized version $t$. Under $H_{0N}$, we have

$$
t \sim N(0, C^2)
$$

where $C^2 \le 1$ with equality holding if $Y_i(1) - Y_i(0) = \tau$ for all units $i = 1, \dots, n$. The FRT pretends that $Y_i(1) = Y_i(0) = Y_i$ for all $i$'s and generates the permutation distribution

$$
t^{\pi} \sim N(0, 1)
$$

where the variance equals 1 because the Science Table used by the FRT has zero individual causal effects. Under $H_{0N}$, because the true distribution of $t$ is more dispersed than the corresponding permutation distribution, the $p_{FRT}$ based on $t$ is asymptotically conservative.

## 8.2 Covariate-adjusted FRTs in the CRE

Extending the discussion in Section 8.1 to the case with covariates, Zhao and Ding (2021a) recommend using the FRT with the studentized Lin (2013)'s estimator:

$$
t_L = \frac{\hat{\tau}_L}{\sqrt{\hat{V}_L}},
$$

which is the robust $t$-statistic for the coefficient of $Z_i$ in the OLS fit of $Y_i$ on $(1, Z_i, X_i, Z_i X_i)$. They show that the FRT with $t_L$ has multiple guarantees:

1. $p_{FRT}$ is finite-sample exact under $H_{0F}$;
2. $p_{FRT}$ is asymptotically conservative under $H_{0N}$;
3. $p_{FRT}$ is asymptotically more powerful than the FRT with $t$ when $H_{0N}$ does not hold and the covariates are predictive to the outcomes;
4. the above properties hold even when the linear outcome model is misspecified.

Similarly, this is a feature of the studentized statistic $t_L$. Zhao and Ding (2021a) show that other covariate-adjusted FRTs reviewed in Section 6.2.1 may be either anti-conservative under $H_{0N}$ or less powerful than the FRT with $t_L$ when $H_{0N}$ does not hold.## 8.3 A simulation study

Now I use simulation to evaluate the finite-sample properties of the $p_{\text{FRT}}$'s under the weak null hypothesis. I will use the following twelve test statistics.

1. The first three test statistics are from the OLS implementation of Neyman (1923), including the coefficient of the treatment, the t-statistic based on the classic standard error, and the t-statistic based on the EHW standard error.
2. The next three test statistics are based on the pseudo-outcome strategy in Definition 6.2, advocated by Rosenbaum (2002a). We first residualize the outcomes by regressing $Y_i$ on $(1, X_i)$, and then obtain the three test statistics similar to the first three.
3. The next three test statistics are based on the OLS implementation of Fisher (1925), as discussed in Chapter 6.2.2.
4. The final three test statistics are based on the OLS implementation of Lin (2013), as discussed in Chapter 6.2.2.

Consider a finite population of $n = 100$ units subjected to a CRE of size $(n_1, n_0) = (20, 80)$. For each $i$, we draw a univariate covariate $X_i$ from $\text{Unif}(-1, 1)$ and generate potential outcomes as $Y_i(1) \sim \text{N}(X_i^3, 1)$ and $Y_i(0) \sim \text{N}(-X_i^3, 0.5^2)$. Center the $Y_i(1)$'s and $Y_i(0)$'s to ensure $\tau = 0$. Fix $\{Y_i(1), Y_i(0), X_i\}_{i=1}^n$ in simulation. We draw a random permutation of $n_1$ 1's and $n_0$ 0's to obtain the observed outcomes and conduct FRTs. The procedure is repeated 500 times, with the $p$-values approximated by 500 independent permutations of the treatment vector in each replication.

Figure 8.1 shows the $p$-values under the weak null hypothesis. The four robust $t$-statistics, as shown in the last row, are the only ones that preserve the correct type one error rates. In fact, they are conservative, which is coherent with the theory. All the other eight statistics yield type one error rates greater than the nominal levels and are thus not proper for testing the weak null hypothesis.

## 8.4 General recommendations

The recommendations for the SRE parallel those for the CRE if both the strong and weak null hypotheses are of interest. Recall the estimators in Chapters 5 and 6.2.4. Without additional covariates, Zhao and Ding (2021a)8.4 General recommendations

![[_resources/Ding - 2023 - A First Course in Causal Inference_Part5/baa8cb980d657b59f43faed2b96ab7bf_MD5.jpg]]

FIGURE 8.1: Histograms of $p_{\text{FRT}}$ under the weak null hypothesisrecommend using the FRT with

$$
t_S = \frac{\hat{\tau}_S}{\sqrt{\hat{V}_S}}
$$

with additional covariates, they recommend using the FRT with

$$
t_{L,S} = \frac{\hat{\tau}_{L,S}}{\sqrt{\hat{V}_{L,S}}}.
$$

The analysis of ReM is trickier. Zhao and Ding (2021a) show that the FRT with $t$ does not have the dual guarantees in Section 8.1, but the FRT with $t_L$ still has the guarantees in Section 8.2. This highlights the importance of both covariate adjustment and studentization in ReM.

Similar results hold for the MPE. Without covariates, we recommend using the FRT with the $t$-statistic for the intercept in the OLS fit of $\hat{\tau}_i$ on 1; with covariates, we recommend using the FRT with the $t$-statistic for the intercept in the OLS fit of $\hat{\tau}_i$ on 1 and $\hat{\tau}_{X,i}$. Figure 7.2 in Chapter 7 are based on these recommended FRTs.

Overall, the FRTs with studentized statistics are safer choices. When the large-sample Normal approximations to the studentized statistics are accurate, the $p_{\text{FRT}}$'s are almost identical to the $p$-values based on Normal approximations. When the large-sample approximations are inaccurate, the FRTs at least guarantee valid $p$-values under the strong null hypotheses. This is the recommendation of this book.

## 8.5 A case study

Recall the SRE in Chong et al. (2016) analyzed in Chapter 5.4.2. I compare the “soccer” arm versus the “control” arm and the “physician” arm versus the “control” arm. We also compare the FRTs with and without using the covariate indicating the baseline anemia status. We use their dataset to illustrate the FRTs in the CRE and SRE. The ten subgroup analyses within the same class levels use the FRTs with $t$ and $t_L$ for the CRE and the two overall analyses averaging over all class levels use the FRTs with $t_S$ and $t_{L,S}$ for the SRE.

Table 8.1 shows the point estimators, standard errors, the $p$-value based on the Normal approximation of the robust $t$-statistics, and the $p$-value based on the FRTs. In most strata, covariate adjustment decreases the standard error since the baseline anemia status is predictive of the outcome. Table 8.1 also exhibits two exceptions: within class 2, covariate adjustment increases the standard error when comparing “soccer” and “control”; in class 4, covariate adjustment increases the standard error when comparing “physician” and“control”. This is due to the small group sizes within these strata, causing the asymptotic approximation inaccurate. Nevertheless, in these two scenarios, the differences in the standard error are in the third digit. The *p*-values from the Normal approximation and the FRT are close with the latter being slightly larger in most cases. Based on the theory, the *p*-values based on the FRT should be trusted since it has an additional guarantee of being finite-sample exact under the sharp null hypothesis. This becomes important in this example since the group sizes are quite small within strata.

Figure 8.2 compares the histograms of the randomization distributions of the robust *t*-statistics with the asymptotic approximations. In the subgroup analysis, we can observe discrepancies between the randomization distributions and N(0, 1); averaged over all class levels, the discrepancy becomes unnoticeable. Overall, in this application, the *p*-values based on the Normal approximation do not differ substantially from those based on the FRTs. Two approaches yield coherent conclusions: the video with a physician telling the benefits of iron supplements improved academic performance and the effect was most significant among students in class 3; in contrast, the video with a famous soccer player telling the benefits of the iron supplements did not have any significant effect.

## 8.6 Homework Problems

### 8.1 Re-analyzing Angrist and Lavy (2009)'s data

This is the Fisherian counterpart of Problem 7.8. Report the $p_{FRT}$'s from the FRTs with studentized statistics.

### 8.2 Replication of Zhao and Ding (2021a)'s Figure 1

Zhao and Ding (2021a) use simulation to evaluate the finite-sample properties of the $p_{FRT}$'s from the FRTs with various test statistics. Based on their Figure 1, they recommend using the FRT with $t_{L,S}$ to analyze the SRE. Replicate their Figure 1.

### 8.3 Recommended readings

Using the studentized statistics in permutation tests is not a new idea; see Janssen (1997) and Chung and Romano (2013). Under the design-based framework, Ding and Dasgupta (2017) and Wu and Ding (2021) made the recommendation for multiarmed experiments, and Zhao and Ding (2021a) extended the recommendation to covariate adjustment.TABLE 8.1: Re-analyzing Chong et al. (2016)'s data. “N” corresponds to the unadjusted estimators and tests due to Neyman (1923), and “L” corresponds to the covariate-adjusted estimators and tests due to Lin (2013).

<table><thead><tr><th colspan="5">(a) soccer versus control</th></tr><tr><th></th><th>est</th><th>s.e.</th><th><i>p</i><sub>Normal</sub></th><th><i>p</i><sub>FRT</sub></th></tr></thead><tbody><tr><td>class 1</td><td></td><td></td><td></td><td></td></tr><tr><td>N</td><td>0.051</td><td>0.502</td><td>0.919</td><td>0.924</td></tr><tr><td>L</td><td>0.050</td><td>0.489</td><td>0.919</td><td>0.929</td></tr><tr><td>class 2</td><td></td><td></td><td></td><td></td></tr><tr><td>N</td><td>-0.158</td><td>0.451</td><td>0.726</td><td>0.722</td></tr><tr><td>L</td><td>-0.176</td><td>0.452</td><td>0.698</td><td>0.700</td></tr><tr><td>class 3</td><td></td><td></td><td></td><td></td></tr><tr><td>N</td><td>0.005</td><td>0.403</td><td>0.990</td><td>0.989</td></tr><tr><td>L</td><td>-0.096</td><td>0.385</td><td>0.803</td><td>0.806</td></tr><tr><td>class 4</td><td></td><td></td><td></td><td></td></tr><tr><td>N</td><td>-0.492</td><td>0.447</td><td>0.271</td><td>0.288</td></tr><tr><td>L</td><td>-0.511</td><td>0.447</td><td>0.253</td><td>0.283</td></tr><tr><td>class 5</td><td></td><td></td><td></td><td></td></tr><tr><td>N</td><td>0.390</td><td>0.369</td><td>0.291</td><td>0.314</td></tr><tr><td>L</td><td>0.443</td><td>0.318</td><td>0.164</td><td>0.186</td></tr><tr><td>all</td><td></td><td></td><td></td><td></td></tr><tr><td>N</td><td>-0.051</td><td>0.204</td><td>0.802</td><td>0.800</td></tr><tr><td>L</td><td>-0.074</td><td>0.200</td><td>0.712</td><td>0.712</td></tr></tbody></table><table><thead><tr><th colspan="5">(b) physician versus control</th></tr><tr><th></th><th>est</th><th>s.e.</th><th><i>p</i><sub>Normal</sub></th><th><i>p</i><sub>FRT</sub></th></tr></thead><tbody><tr><td>class 1</td><td></td><td></td><td></td><td></td></tr><tr><td>N</td><td>0.567</td><td>0.426</td><td>0.183</td><td>0.192</td></tr><tr><td>L</td><td>0.588</td><td>0.418</td><td>0.160</td><td>0.174</td></tr><tr><td>class 2</td><td></td><td></td><td></td><td></td></tr><tr><td>N</td><td>0.193</td><td>0.438</td><td>0.659</td><td>0.666</td></tr><tr><td>L</td><td>0.265</td><td>0.409</td><td>0.517</td><td>0.523</td></tr><tr><td>class 3</td><td></td><td></td><td></td><td></td></tr><tr><td>N</td><td>1.305</td><td>0.494</td><td>0.008</td><td>0.012</td></tr><tr><td>L</td><td>1.501</td><td>0.462</td><td>0.001</td><td>0.003</td></tr><tr><td>class 4</td><td></td><td></td><td></td><td></td></tr><tr><td>N</td><td>-0.273</td><td>0.413</td><td>0.508</td><td>0.515</td></tr><tr><td>L</td><td>-0.313</td><td>0.417</td><td>0.454</td><td>0.462</td></tr><tr><td>class 5</td><td></td><td></td><td></td><td></td></tr><tr><td>N</td><td>-0.050</td><td>0.379</td><td>0.895</td><td>0.912</td></tr><tr><td>L</td><td>-0.067</td><td>0.279</td><td>0.811</td><td>0.816</td></tr><tr><td>all</td><td></td><td></td><td></td><td></td></tr><tr><td>N</td><td>0.406</td><td>0.202</td><td>0.045</td><td>0.047</td></tr><tr><td>L</td><td>0.463</td><td>0.190</td><td>0.015</td><td>0.017</td></tr></tbody></table>8.6 *Homework Problems*

![[_resources/Ding - 2023 - A First Course in Causal Inference_Part5/20ace127d15953aeeb0db4bd7e46758a_MD5.jpg]]

FIGURE 8.2: Re-analyzing Chong et al. (2016)'s data: randomization distributions with 5 × 10⁴ Monte Carlo draws and the N(0, 1) approximations—9

Bridging Finite and Super Population
Causal Inference

We have focused on the finite population perspective in randomized exper-
iments. It treats all the potential outcomes as fixed numbers. Even if the
potential outcomes are random variables, we can condition on them under the
finite population perspective. The advantages of this perspective are

1. it focuses on the design of the experiments;
2. it requires minimal assumptions on the data-generating process of the outcomes.

However, it is often criticized for having only *internal validity* but not neces-
sarily *external validity*, with informal definitions below.

**Definition 9.1 (internal validity)** *The statistical analysis is valid for the study samples at hand.*

**Definition 9.2 (external validity)** *The statistical analysis is valid for a broader population beyond the study samples.*

Obviously, all experimenters want not only the internal validity but also
the external validity of their experiments. Since all statistical properties are
conditional on the potential outcomes for the units we have, the results are
only about the observed units under the finite population perspective. Then a
natural question arises: do the finite population results generalize to a bigger
population?

This is a fair critique of the finite population framework conditional on
the potential outcomes. However, this can be a philosophical question. What
we observed is a finite population, so any experimental design and analysis
directly give us information about this finite population. Randomization only
ensures internal validity given the potential outcomes of these units. The ex-
ternal validity of the results depends on the sampling process of the units.
If the finite population is a representative sample of a larger population we
are interested in, then of course the experimental results also have external
validity. Otherwise, the results based on randomization inference may not
generalize. To rigorously discuss this issue, we need to have a framework with
two levels of randomness, one due to the sampling process of the units andthe other due to the random assignment of the treatment. See Miratrix et al. (2018) and Abadie et al. (2020) for formal discussions of this idea.¹

For some statisticians, this is just a technical problem. We can change the statistical framework, assuming that the units are sampled from a superpopulation. Then all the statements are about the population of interest. This is a convenient framework, although it does not really solve the problem mentioned above. Below, I will introduce this framework for two purposes:

1. it gives a different perspective on randomized experiments;
2. it serves as a bridge between Parts II and III of this book.

The latter purpose is more important since the superpopulation framework allows us to derive more fruitful results for observational studies in which the treatment is not randomly assigned.

## 9.1 CRE

Assume

$$
\{Z_i, Y_i(1), Y_i(0), X_i\}_{i=1}^n \stackrel{\text{IID}}{\sim} \{Z, Y(1), Y(0), X\}
$$

from a superpopulation. So we can drop the subscript *i* for quantities of this population. With a little abuse of notation, we define the population average causal effect as

$$
\tau = E\{Y(1) - Y(0)\} = E\{Y(1)\} - E\{Y(0)\}.
$$

Under the superpopulation framework, we can formulate the CRE as below.

**Definition 9.3 (CRE under the superpopulation framework) We have**

$$
Z \perp \{Y(1), Y(0), X\}.
$$

Under Definition 9.3, the average causal effect can be written as

$$
\begin{align} \tau &= E\{Y(1) | Z = 1\} - E\{Y(0) | Z = 0\} \nonumber \\ &= E(Y | Z = 1) - E(Y | Z = 0), \tag{9.1} \end{align}
$$

which equals the difference in expectations of the outcomes. The first line in (9.1) is the key step that leverages the value of randomization. Since $\tau$ can be expressed as a function of the distributions of the observables, it is *non-parametrically identifiable*². The formula (9.1) immediately suggests a moment

¹Pearl and Bareinboim (2014) discussed the *transportability* problem from the perspective of causal diagrams.

²In causal inference, we say that a parameter is nonparametrically identifiable if it can be determined by the distribution of the observed variables without imposing further parametric assumptions. See Definition 10.1 later for a more formal discussion.estimator $\hat{\tau}$, which is the difference in means of the outcomes defined before. Conditioning on $Z$, this is then a standard two-sample problem comparing the means of two independent samples. We have

$$
E(\hat{\tau} | Z) = \tau
$$

and

$$
\mathrm{var}(\hat{\tau} | Z) = \frac{\mathrm{var}\{Y(1)\}}{n_1} + \frac{\mathrm{var}\{Y(0)\}}{n_0}.
$$

Under IID sampling, the sample variances are unbiased for the population variances, so Neyman (1923)'s variance estimator is unbiased for $\mathrm{var}(\hat{\tau} | Z)$. The conservativeness problem goes away under this superpopulation framework.

We can also discuss covariate adjustment. Based on the OLS decompositions (see Chapter B)

$$
Y(1) = \gamma_1 + \beta_1^\top X + \varepsilon(1), \quad (9.2)
$$

$$
Y(0) = \gamma_0 + \beta_0^\top X + \varepsilon(0), \quad (9.3)
$$

we have

$$
\tau = E\{Y(1) - Y(0)\} \\ = \gamma_1 - \gamma_0 + (\beta_1 - \beta_0)^\top E(X),
$$

since the residuals $\varepsilon(1)$ and $\varepsilon(0)$ have mean zero due to the inclusion of the intercepts. We can use the OLS with the treated and control data to estimate the coefficients in (9.2) and (9.3), respectively. The sample versions of the coefficients are $\hat{\gamma}_1, \hat{\beta}_1, \hat{\gamma}_0, \hat{\beta}_0$, so a covariate-adjusted estimator for $\tau$ is

$$
\hat{\tau}_{\text{adj}} = \hat{\gamma}_1 - \hat{\gamma}_0 + (\hat{\beta}_1 - \hat{\beta}_0)^{\top} \bar{X}.
$$

If we center covariates with $\bar{X} = 0$, the above estimator reduces to Lin (2013)'s estimator

$$
\hat{\tau}_{\mathrm{L}} = \hat{\gamma}_{1} - \hat{\gamma}_{0},
$$

which equals the coefficient of $Z$ in the pooled regression with treatment-covariates interactions; see Proposition 6.2.

Unfortunately, the EHW variance estimator does not work for $\hat{\tau}_L$ because of the additional uncertainty in the sample mean of covariates $\bar{X}$ under the super population framework. Berk et al. (2013), Negi and Wooldridge (2021) and Zhao and Ding (2021a) proposed a correction of the EHW variance estimator by adding an extra term

$$
(\hat{\beta}_1 - \hat{\beta}_0)^{\top} S_X^2 (\hat{\beta}_1 - \hat{\beta}_0) / n \quad (9.4)
$$

where $\hat{\beta}_1 - \hat{\beta}_0$ equals the coefficient of the interaction $Z_i X_i$ in obtaining Lin (2013)'s estimator and $S_X^2$ is the finite-population covariance matrix of the covariates. A conceptually simpler yet computationally intensive approach is to use the bootstrap to estimate the variance; see Chapter A.6 and Problem 9.2.9.2 Simulation under the CRE: the super population perspective

The following `linestimator` function can compute Lin (2013)'s estimator, the EHW standard error, and the corrected standard error based on (9.4) for the super population.

```R
library("car")
linestimator = function(Z, Y, X){
## standardize X
X = scale(X)
n = dim(X)[1]
p = dim(X)[2]

## fully interacted OLS
linreg = lm(Y ~ Z*X)
est = coef(linreg)[2]
vehw = hccm(linreg)[2, 2]

## super population correction
inter = coef(linreg)[(p+3):(2*p+2)]
vsuper = vehw + sum(inter*(cov(X)%*%inter))/n

c est, sqrt(vehw), sqrt(vsuper))
}
```

I then use simulation to compare the EHW standard error and the corrected standard error. I choose sample size $n = 500$ and use 2000 Monte Carlo repetitions. The potential outcomes are nonlinear in covariates and the error terms are not Normal. The true average causal effect equals 0.

```R
res = replicate(2000, {
  n = 500
  X = matrix(rnorm(n*2), n, 2)
  Y1 = X[, 1] + X[, 1]^2 + runif(n, -0.5, 0.5)
  Y0 = X[, 2] + X[, 2]^2 + runif(n, -1, 1)
  Z = rbinom(n, 1, 0.6)
  Y = Z*Y1 + (1-Z)*Y0
  linestimator(Z, Y, X)
})
```

The following results confirm the theory. First, Lin (2013)'s estimator is nearly unbiased. Second, the average EHW standard error is smaller than the empirical standard derivation, resulting in undercoverage of the 95% confidence intervals. Third, the average corrected standard error for super population is nearly identical to the empirical standard derivation, resulting in more accurate coverage of the 95% confidence intervals.> ## bias
> mean(res[1,])
[1] -0.0001247585
> ## empirical standard deviation
> sd(res[1,])
[1] 0.1507773
> ## estimated EHW standard error
> mean(res[2,])
[1] 0.1388657
> ## coverage based on EHW standard error
> mean((res[1,]-1.96*res[2,])* (res[1,]+1.96*res[2,])<=0)
[1] 0.927
> ## estimated super population standard error
> mean(res[3,])
[1] 0.1531519
> ## coverage based on population standard error
> mean((res[1,]-1.96*res[3,])* (res[1,]+1.96*res[3,])<=0)
[1] 0.9525

9.3 Extension to the SRE

We can extend the discussion in Section 9.1 to the SRE since it is equivalent to
independent CREs within strata. The notation below will be slightly different
from that in Chapter 5.

Assume that

$$
\{Z_i, Y_i(1), Y_i(0), X_i\} \stackrel{\text{IID}}{\sim} \{Z, Y(1), Y(0), X\}.
$$

With a discrete covariate $X_i \in \{1, \dots, K\}$, we can formulate the SRE as
below.

**Definition 9.4 (SRE under the super population framework) We have**

$$
Z \perp \{Y(1), Y(0)\} | X.
$$

Under Definition 9.4, the conditional average causal effect can be rewritten
as

$$
\begin{align*}
\tau_{[k]} &= E\{Y(1) - Y(0) \mid X = k\} \\
&= E(Y \mid Z = 1, X = k) - E(Y \mid Z = 0, X = k),
\end{align*}
$$so the average causal effect can be rewritten as

$$
\begin{align*}
\tau &= E\{Y(1) - Y(0)\} \\
&= \sum_{k=1}^{K} \text{pr}(X = k)E\{Y(1) - Y(0) \mid X = k\} \\
&= \sum_{k=1}^{K} \text{pr}(X = k)\tau_{[k]}.
\end{align*}
$$

The discussion in Section 9.1 holds within all strata, so we can derive the superpopulation analog for the SRE. When there are more than two treatment and control units within each stratum, we can use $\hat{V}_S$ as the variance estimator for $\text{var}(\hat{\tau}_S)$.

We will see the exact form of Definition 9.4 in Part III later.

**9.4 Homework Problems**

9.1 OLS decomposition of the observed outcome under the CRE

Based on (9.2) and (9.3), show that the OLS decomposition of the observed
outcome on the treatment, covariates, and their interaction is

$$
Y = \alpha_0 + \alpha_Z Z + \alpha_X^\top X + \alpha_{ZX}^\top XZ + \varepsilon
$$

where

$$
\alpha_0 = \gamma_0, \quad \alpha_Z = \gamma_1 - \gamma_0, \quad \alpha_X = \beta_0, \quad \alpha_{ZX} = \beta_1 - \beta_0
$$

and

$$
\varepsilon = Z\varepsilon(1) + (1-Z)\varepsilon(0).
$$

That is,

$$
(\alpha_0, \alpha_Z, \alpha_X, \alpha_{ZX}) = \arg \min_{a_0, a_Z, a_X, a_{ZX}} E(Y - a_0 - a_Z Z - a_X^T X - a_{ZX}^T XZ)^2.
$$

9.2 *Variance estimation of Lin (2013)'s estimator under the super population*
*framework*

Under the super population framework, simulate {$X_i, Z_i, Y_i(1), Y_i(0)$}^n_{i=1} with
$\beta_1 \neq \beta_0$ in (9.2) and (9.3). Calculate Lin (2013)'s estimator in each simulated
dataset. Compare the true variance and the following estimated variances:

1. the EHW robust variance estimator;
2. the EHW robust variance estimator with the correction term defined in (9.4);9.4 *Homework Problems*

3. the bootstrap variance estimator, with covariates centered at the beginning but not re-centered for each bootstrap sample;
4. the bootstrap variance estimator, with covariates re-centered for each bootstrap sample.

9.3 *Recommended reading*

Ding et al. (2017a) provide a unified discussion of the finite population and superpopulation inferences for the average causal effect.