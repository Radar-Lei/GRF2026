# Part VII

## Appendices![[_resources/Ding - 2023 - A First Course in Causal Inference_Part10/d6e197810be76a39f216e9c0a37d022f_MD5.jpg]]

![[_resources/Ding - 2023 - A First Course in Causal Inference_Part10/17af20a572b5c03aa521f59df96d9e97_MD5.jpg]]# A

## *Probability and Statistics*

This book assumes that the readers have basic knowledge of probability theory and statistical inference. Therefore, this chapter is not a comprehensive review of probability and statistics. For easy reference, I review the key concepts that are crucial for the main text.

### A.1 Probability

#### A.1.1 Pearson correlation coefficient and squared multiple correlation coefficient

For two random variables $Y$ and $X$, define the Pearson correlation coefficient as

$$
\rho_{YX} = \frac{\operatorname{cov}(Y, X)}{\sqrt{\operatorname{var}(Y)\operatorname{var}(X)}}
$$

which measures the linear dependence of $Y$ on $X$. The definition is symmetric in $Y$ and $X$ in that

$$
\rho_{YX} = \rho_{XY}.
$$

With a random variable $Y$ and a random vector $X$, define the squared multiple correlation coefficient as

$$
R_{YX}^2 = \operatorname{corr}^2(Y, X) = \frac{\operatorname{cov}(Y, X)\operatorname{cov}(X)^{-1}\operatorname{cov}(X, Y)}{\operatorname{var}(Y)}
$$

where $\operatorname{cov}(Y, X)$ is a row vector and $\operatorname{cov}(X, Y)$ is a column vector. It also measures the linear dependence of $Y$ on $X$. But this definition is not symmetric in $Y$ and $X$.

#### A.1.2 Multivariate Normal random vector

A multivariate Normal random vector $N(\mu, \Sigma)$ is determined by its mean vector $\mu$ and covariance matrix $\Sigma$. Partition it into two parts:

$$
\begin{pmatrix} Y_1 \\ Y_2 \end{pmatrix} \sim N \left( \begin{pmatrix} \mu_1 \\ \mu_2 \end{pmatrix}, \begin{pmatrix} \Sigma_{11} & \Sigma_{12} \\ \Sigma_{21} & \Sigma_{22} \end{pmatrix} \right).
$$First, the marginal distributions are Normal:

$$
Y_1 \sim N(\mu_1, \Sigma_{11}), \quad Y_2 \sim N(\mu_2, \Sigma_{22}).
$$

Second, if $\Sigma_{22}$ is positive definite, then the conditional distribution is also Normal:

$$
Y_1 | Y_2 = y_2 \sim N(\mu_1 + \Sigma_{12}\Sigma_{22}^{-1}(y_2 - \mu_2), \Sigma_{11} - \Sigma_{12}\Sigma_{22}^{-1}\Sigma_{21}).
$$

### A.1.3 $\chi^2$ and $t$ distributions

Assume $X_1, \dots, X_n$ are IID N(0, 1). Then

$$
\sum_{i=1}^{n} X_{i}^{2}
$$

follows a $\chi_n^2$ distribution with degrees of freedom $n$. The $\chi_n^2$ distribution has mean $n$ and variance $2n$.

Assume $X \sim N(0, 1)$, $Q_n \sim \chi_n^2$ and $X \perp Q_n$. Then

$$
\frac{X}{\sqrt{Q_n/n}}
$$

follows a $t_n$ distribution with degrees of freedom $n$. The $t_n$ distribution has mean 0 if $n > 1$. When $n = 1$, the $t_1$ distribution is also called the Cauchy distribution, which does not have a finite mean.

### A.1.4 Cauchy-Schwarz inequality

The Cauchy-Schwarz inequality has many forms. With two random variables $A$ and $B$, we have

$$
|E(AB)| \le \sqrt{E(A^2)E(B^2)}
$$

with equality holding when $B = \beta A$ for some $\beta$. Centering $A$ and $B$ to have mean 0, we have

$$
|\operatorname{cov}(A, B)| \le \sqrt{\operatorname{var}(A)\operatorname{var}(B)}
$$

with equality holding when $B = \alpha + \beta A$ for some $\alpha$ and $\beta$.

When $A$ and $B$ are uniform random variables over finite sets $\{a_1, \dots, a_n\}$ and $\{b_1, \dots, b_n\}$ respectively, we have

$$
\left|\sum_{i=1}^{n} a_i b_i\right| \le \sqrt{\sum_{i=1}^{n} a_i^2 \sum_{i=1}^{n} b_i^2}
$$

with equality holding if there exists $\beta$ such that $b_i = \beta a_i$ for all $i$'s.**A.1.5 Tower property and variance decomposition**

Given random variables or vectors $A, B, C$, we have

$$
E(A) = E\{E(A | B)\}
$$

and

$$
E(A | C) = E\{E(A | B, C) | C\}.
$$

Given a random variable $A$ and random variables or vectors $B, C$, we have

$$
\mathrm{var}(A) = E\{\mathrm{var}(A | B)\} + \mathrm{var}\{E(A | B)\}
$$

and

$$
\mathrm{var}(A | C) = E\{\mathrm{var}(A | B, C) | C\} + \mathrm{var}\{E(A | B, C) | C\}.
$$

When I was in graduate school, my professors Carl Morris and Joe Blitzstein called this formula the *Eve's Law* due to the “EVVE” form of the formula. They then went back to call the first tower property the *Adam's Law*.

Similarly, we can decompose the covariance as

$$
\mathrm{cov}(A_1, A_2) = E\{\mathrm{cov}(A_1, A_2 | B)\} + \mathrm{cov}\{E(A_1 | B), E(A_2 | B)\}
$$

and

$$
\mathrm{cov}(A_1, A_2 | C) = E\{\mathrm{cov}(A_1, A_2 | B, C) | C\} + \mathrm{cov}\{E(A_1 | B, C), E(A_2 | B, C) | C\}.
$$

**A.1.6 Limiting theorems**

**Definition A.1 (convergence in probability)** A sequence of random variables $(X_n)_{n \ge 1}$ converges to $X$ in probability, if for every $\varepsilon > 0$, we have

$$
\mathrm{pr}(|X_n - X| > \varepsilon) \to 0
$$

as $n \to \infty$.

**Definition A.2 (convergence in distribution)** A sequence of random variables $(X_n)_{n \ge 1}$ converges to $X$ in distribution, if

$$
\mathrm{pr}(X_n \le x) \to \mathrm{pr}(X \le x)
$$

for all continuity point $x$ of $\mathrm{pr}(X \le x)$, as $n \to \infty$.

Convergence in probability is stronger than convergence in distribution. Definitions A.1 and A.2 are useful for stating the following two fundamental theorems on the sample average of independent and identically distributed (IID) random variables.

**Theorem A.1 (law of large numbers)** If $X_1, \dots, X_n \stackrel{\text{IID}}{\sim} X$ with $E|X| < \infty$, then $\bar{X} = n^{-1} \sum_{i=1}^n X_i \to E(X)$ in probability.The law of large numbers in Theorem A.1 states that the sample average is close to the population mean in the limit.

**Theorem A.2 (central limit theorem (CLT))** If $X_1, \dots, X_n \stackrel{\text{IID}}{\sim} X$ with $\text{var}(X) < \infty$, then

$$
\frac{\bar{X} - E(X)}{\sqrt{\text{var}(X)/n}} \to \text{N}(0, 1)
$$

in distribution.

The CLT in Theorem A.2 states that the standardized sample average is close to a standard Normal random variable in the limit.

Theorems A.1 and A.2 assume IID random variables for convenience. There are also many laws of large numbers and CLTs for the sample mean of independent or weakly dependent random variable (e.g., Durrett, 2019).

### A.1.7 Delta method

The delta method is a power tool to derive the asymptotic Normality of non-linear functions of an asymptotically Normal random vector. I review a special case of the delta method below.

**Theorem A.3 (delta method)** Assume $\sqrt{n}(X_n - \mu) \to \text{N}(0, \Sigma)$ in distribution and the function $g(x)$ has non-zero derivative $\nabla g(\mu)$ at $\mu$. Then

$$
\sqrt{n}\{g(X_n) - g(\mu)\} \to \text{N}(0, (\nabla g(\mu))^{\top}\Sigma\nabla g(\mu))
$$

in distribution.

I will omit the proof of Theorem A.3. It is intuitive based on the first-order Taylor expansion:

$$
g(X_n) - g(\mu) \approx (\nabla g(\mu))^{\top}(X_n - \mu).
$$

So $\sqrt{n}\{g(X_n) - g(\mu)\}$ is close to the linear transformation of $\text{N}(0, \Sigma)$, which is $\text{N}(0, (\nabla g(\mu))^{\top}\Sigma\nabla g(\mu))$.

As illustrations, we can use the delta method to obtain the asymptotic Normality of the ratio and product.

**Example A.1 (asymptotic Normality for the ratio)** Assume

$$
\sqrt{n} \begin{pmatrix} Y_n - \mu_Y \\ X_n - \mu_X \end{pmatrix} \to_N \text{N} \left( \begin{pmatrix} 0 \\ 0 \end{pmatrix}, \begin{pmatrix} \sigma_Y^2 & \sigma_{YX} \\ \sigma_{YX} & \sigma_X^2 \end{pmatrix} \right) \quad (A.1)
$$

in distribution with $\mu_X \neq 0$. Apply Theorem A.3 to obtain that

$$
\sqrt{n} \left( \frac{Y_n}{X_n} - \frac{\mu_Y}{\mu_X} \right) \to_N \left( 0, \frac{\sigma_Y^2}{\mu_X^2} + \frac{\mu_Y^2 \sigma_X^2}{\mu_X^4} - \frac{2\mu_Y \sigma_{YX}}{\mu_X^3} \right) \quad (A.2)
$$

in distribution. In the special case that $X_n$ and $Y_n$ are asymptotically independent with $\sigma_{YX} = 0$, the asymptotic variance of $Y_n/X_n$ simplifies to $\sigma_Y^2/\mu_X^2 + \mu_Y^2\sigma_X^2/\mu_X^4$. I leave the details to Problem A.2.The asymptotic variance in Example A.1 is a little cumbersome. An easier
way to memorize it is based on the following approximation:

$$
\frac{Y_n}{X_n} - \frac{\mu_Y}{\mu_X} = \frac{Y_n - \mu_Y / \mu_X \cdot X_n}{X_n} \approx \frac{Y_n - \mu_Y / \mu_X \cdot X_n}{\mu_X}, \quad (A.3)
$$

so the asymptotic variance of the ratio equals the asymptotic variance of

$$
\frac{Y_n - \mu_Y / \mu_X \cdot X_n}{\mu_X},
$$

which is a linear combination of $Y_n$ and $X_n$. Slutsky's theorem can make the approximation in (A.3) rigorous but it is beyond this book.

**Example A.2 (asymptotic Normality for the product) Assume (A.1).**

*Apply Theorem A.3 to obtain that*

$$
\sqrt{n} (X_n Y_n - \mu_X \mu_Y) \rightarrow_{N} (0, \mu_Y^2 \sigma_X^2 + \mu_X^2 \sigma_Y^2 + 2\mu_X \mu_Y \sigma_{XY}) \quad (A.4)
$$

in distribution. In the special case that $X_n$ and $Y_n$ are asymptotically in-
dependent with $\sigma_{YX} = 0$, the asymptotic variance of $X_nY_n$ simplifies to
$\mu_Y^2\sigma_X^2 + \mu_X^2\sigma_Y^2$. I leave the details to Problem A.3.

**A.2 Statistical inference**

**A.2.1 Point estimation**

Assume that $\theta$ is the parameter of interest. Oftentimes, the problem also
contains other parameters not of interest, denoted by $\eta$. Statisticians call $\eta$
the *nuisance parameter*. Based on the data, we can compute an estimator $\hat{\theta}$.
Throughout this book, we take the frequentist's perspective by assuming that
$\theta$ is a fixed number and $\hat{\theta}$ is random due to the randomness of data. Two basic
requirements for an estimator are below.

**Definition A.3 (unbiasedness)** *The estimator $\hat{\theta}$ is unbiased for $\theta$ if*

$$
E(\hat{\theta}) = \theta
$$

for all possible values of $\theta$ and $\eta$.

**Definition A.4 (consistency)** The estimator $\hat{\theta}$ is consistent for $\theta$ if

$$
\hat{\theta} \to \theta
$$

in probability as the sample size approaches to infinity, for all possible values
of θ and η.Unbiasedness requires that the mean of the estimator is identical to the parameter of interest. Consistency requires that the estimator is close to the true parameter in the limit. Unbiasedness does not imply consistency, and consistency does not imply unbiasedness either. Unbiasedness can be restrictive because it is impossible even in some simple statistics problems. Consistency is often the basic requirement in most statistics problems.

### A.2.2 Confidence interval

A point estimator $\hat{\theta}$ is a random variable that differs from the true parameter $\theta$. Statisticians are often interested in finding an interval that covers the true parameter with a certain given probability. This interval is computed based on the data, and it is random.

**Definition A.5 (confidence interval)** A data-dependent interval $[\hat{\theta}_L, \hat{\theta}_U]$ is a confidence interval for $\theta$ with coverage probability at least $1 - \alpha$ if

$$
\mathrm{pr}(\hat{\theta}_L \le \theta \le \hat{\theta}_U) \ge 1 - \alpha
$$

for all possible values of $\theta$ and $\eta$.

**Definition A.6 (asymptotic confidence interval)** A data-dependent interval $[\hat{\theta}_L, \hat{\theta}_U]$ is an asymptotic confidence interval for $\theta$ with coverage probability at least $1 - \alpha$ if

$$
\mathrm{pr}(\hat{\theta}_L \le \theta \le \hat{\theta}_U) \to 1 - \alpha', \quad \text{as } n \to \infty
$$

with $\alpha' \le \alpha$, for all possible values of $\theta$ and $\eta$.

A standard choice is $\alpha = 0.05$. In Definitions A.5 and A.6, the coverage probabilities can be larger than the nominal level $1 - \alpha$. That is, the definitions allow for over-coverage but do not allow for under-coverage. With over-coverage, we say that the confidence interval is conservative. Of course, we hope the confidence interval to be as narrow as possible. Otherwise, the definition of the confidence interval can be arbitrary.

### A.2.3 Hypothesis testing

Many applied problems can be formulated as testing a hypothesis:

$$
H_0 : \theta = 0.
$$

The decision rule $\phi$ is a binary function of the data: $\phi = 1$ if we reject $H_0$; $\phi = 0$ if we fail to reject $H_0$. The type one error rate of the test is the probability of rejection if the null hypothesis holds. I review the definition below.**Definition A.7 (type one error rate)** *When $H_0$ holds, define the type one error rate of the test $\phi$ as the maximum value of the probability*

$$
\mathrm{pr}(\phi = 1)
$$

over all possible values of $\theta$ and $\eta$.

A standard choice is to make sure that the type one error rate is below $\alpha = 0.05$. The type two error rate of the test is the probability of no rejection if the null hypothesis does not hold. I review the definition below.

**Definition A.8 (type two error rate)** *When $H_0$ does not hold, define the type two error rate of the test $\phi$ as the maximum value of the probability*

$$
\mathrm{pr}(\phi = 0)
$$

over all possible values of $\theta$ and $\eta$.

Given the control of the type one error rate under $H_0$, we hope the type two error rate is as low as possible when $H_0$ does not hold.

### A.2.4 Wald-type confidence interval and test

Many statistics problems have the following structure. The parameter of interest is $\theta$. We first find a consistent estimator $\hat{\theta}$ that converges in probability to $\theta$, and show that it is asymptotically Normal with mean $\theta$ and variance $v$ which may depend on $\theta$ as well as the nuisance parameter $\eta$. We then find a consistent estimator $\hat{v}$ for $v$, based on analytic formulas or the bootstrap reviewed in Chapter A.6 later. The square root of $\hat{v}$ is called the *standard error*. We finally construct the Wald-type confidence interval for $\theta$ as

$$
\hat{\theta} \pm z_{1-\alpha/2} \sqrt{\hat{v}}
$$

where $z_{1-\alpha/2}$ is the $1 - \alpha/2$ upper quantile of the standard Normal random variable. It covers $\theta$ with probability approximately $1 - \alpha$. When this interval excludes a particular $c$, for example, $c = 0$, we reject the null hypothesis $H_0(c) : \theta = c$, which is called the Wald test.

### A.2.5 Duality between constructing confidence sets and testing null hypotheses

Consider the statistical inference problem for a scalar parameter $\theta$. A fundamental result in statistics is that constructing confidence sets for $\theta$ is equivalent to testing null hypotheses about $\theta$. This is often called the duality between constructing confidence sets and testing null hypotheses.

Section A.2.4 has reviewed the duality based on the Wald-type confidenceinterval and test. The duality also holds in general. Assume that $\hat{\Theta}$ is a $(1-\alpha)$-level confidence set for $\theta$:

$$
\mathrm{pr}(\theta \in \hat{\Theta}) \geq 1 - \alpha.
$$

Then we can reject the null hypothesis $H_0(c) : \theta = c$ if $c$ is not in the set $\hat{\Theta}$. This is a valid test because when $\theta$ indeed equals $c$, we have the correct type one error rate $\mathrm{pr}(\theta \notin \hat{\Theta}) \leq \alpha$. Conversely, if we test a sequence of null hypotheses $H_0(c) : \theta = c$, we can obtain the corresponding $p$-values, $p(c)$, as a function of $c$. Then the values of $c$ that we fail to reject at level $\alpha$ form a confidence set for $\theta$:

$$
\hat{\Theta} = \{c : p(c) \geq \alpha\} = \{c : \text{fail to reject } H_0(c) \text{ at level } \alpha\}.
$$

It is a valid confidence set because

$$
\mathrm{pr}(\theta \in \hat{\Theta}) = \mathrm{pr}\{\text{fail to reject } H_0(\theta) \text{ at level } \alpha\} \geq 1 - \alpha.
$$

Here I use “confidence set” instead of “confidence interval” because $\hat{\Theta}$ based on inverting tests may not be an interval. See the use of the duality in Chapters A.4.2 and 3.6.1.

# A.3 Inference with two-by-two tables

## A.3.1 Fisher's exact test

Fisher proposed an exact test for $H_0 : p_1 = p_0$ under the statistical model:

$$
n_{11} \sim \text{Binomial}(n_1, p_1), \quad n_{01} \sim \text{Binomial}(n_0, p_0), \quad n_{11} \perp n_{01}.
$$

The table below summarizes the data.

<table><thead><tr><th></th><th>1</th><th>0</th><th>row sum</th></tr></thead><tbody><tr><th>sample 1</th><td>n<sub>11</sub></td><td>n<sub>10</sub></td><td>n<sub>1</sub></td></tr><tr><th>sample 0</th><td>n<sub>01</sub></td><td>n<sub>00</sub></td><td>n<sub>0</sub></td></tr><tr><th>column sum</th><td>n<sub>.1</sub></td><td>n<sub>.0</sub></td><td>n</td></tr></tbody></table>

He argued that the sums $n_{11} + n_{01} = n_{.1}$ and $n_{10} + n_{00} = n_{.0}$ contain little information about the difference between $p_1$ and $p_0$, and conditional on them, $n_{11}$ follows a Hypergeometric distribution that does not depend on the unknown parameter $p_1 = p_0$ under $H_0$:

$$
\mathrm{pr}(n_{11} = k) = \frac{\binom{n_{.1}}{k} \binom{n-n_{.1}}{n_1-k}}{\binom{n}{n_1}}.
$$

In $\mathbb{R}$, the function `fisher.test` implements this test.A.3.2 Estimation with two-by-two tables

Based on the model in Section A.3.1, we can estimate the parameters $p_1$ and $p_0$ by sample frequencies:

$$
\hat{p}_1 = \frac{n_{11}}{n_1}, \quad \hat{p}_0 = \frac{n_{01}}{n_0}.
$$

Therefore, we can estimate the risk difference, log risk ratio, and log odds
ratio

$$
\begin{align*}
\text{RD} &= p_1 - p_0, \\
\log \text{RR} &= \log \frac{p_1}{p_0}, \\
\log \text{OR} &= \log \frac{p_1/(1-p_1)}{p_0/(1-p_0)}
\end{align*}
$$

by the sample analogs

$$
\begin{align*}
\hat{\mathrm{RD}} &= \hat{p}_1 - \hat{p}_0, \\
\log \hat{\mathrm{RR}} &= \log \frac{\hat{p}_1}{\hat{p}_0}, \\
\log \hat{\mathrm{OR}} &= \log \frac{\hat{p}_1/(1-\hat{p}_1)}{\hat{p}_0/(1-\hat{p}_0)} = \log \frac{n_{11} n_{00}}{n_{10} n_{01}}.
\end{align*}
$$

Based on the asymptotic approximation (see Problem A.5), the estimated
variance for the above parameters are

$$
\frac{\hat{p}_1(1 - \hat{p}_1)}{n_1} + \frac{\hat{p}_0(1 - \hat{p}_0)}{n_0}, \\
\frac{1 - \hat{p}_1}{n_1 \hat{p}_1} + \frac{1 - \hat{p}_0}{n_0 \hat{p}_0}, \\
\frac{1}{n_1 \hat{p}_1 (1 - \hat{p}_1)} + \frac{1}{n_0 \hat{p}_0 (1 - \hat{p}_0)},
$$

respectively. The log transformation above yields better Normal approxima-
tions because the risk ratio and odds ratio are always positive.

A.4 Two famous problems in statistics

A.4.1 Behrens–Fisher problem

Consider the two-sample problem with *n*₁ units under the treatment and *n*₀ units under the control, respectively. Assume the outcomes under the treatment {Yᵢ : Zᵢ = 1} are IID from N(μ₁, σ²) and the outcomes under thecontrol {$Y_i : Z_i = 0$} are IID from $N(\mu_0, \sigma_0^2)$, respectively. The goal is to test
$H_0 : \mu_1 = \mu_0$.

Start with the easier case with $\sigma_1^2 = \sigma_0^2$. Coherent with Chapter 3, let

$$
\hat{Y}(1) = n_1^{-1} \sum_{Z_i=1} Y_i, \quad \hat{Y}(0) = n_0^{-1} \sum_{Z_i=0} Y_i
$$

denote the sample means of the outcomes under the treatment and control,
respectively. A standard result is that

$$
t_{\text{equal}} = \frac{\hat{Y}(1) - \hat{Y}(0)}{\sqrt{\frac{n}{n_1 n_0 (n-2)} \left[ \sum_{Z_i=1} \{Y_i - \hat{Y}(1)\}^2 + \sum_{Z_i=0} \{Y_i - \hat{Y}(0)\}^2 \right]}} \sim t_{n-2}.
$$

Based on $t_{\text{equal}}$, we can construct a test for $H_0$.

Now consider the more difficult case with possibly different $\sigma_1^2$ and $\sigma_0^2$. The distribution of $t_{\text{equal}}$ is no longer $t_{n-2}$. Estimating the variances separately, we can also define

$$
t_{\text{unequal}} = \frac{\hat{Y}(1) - \hat{Y}(0)}{\sqrt{\frac{\hat{S}^2(1)}{n_1} + \frac{\hat{S}^2(0)}{n_0}}},
$$

where

$$
\hat{S}^2(1) = (n_1 - 1)^{-1} \sum_{Z_i=1} \{Y_i - \hat{Y}(1)\}^2, \quad \hat{S}^2(0) = (n_0 - 1)^{-1} \sum_{Z_i=0} \{Y_i - \hat{Y}(0)\}^2
$$

are the sample variances of the outcomes under the treatment and control,
respectively. Unfortunately, the exact distribution of $t_{\text{unequal}}$ depends on the
known variances. Testing $H_0$ without assuming equal variances is the famous
Behrens-Fisher problem. With large sample sizes $n_1$ and $n_0$, the CLT ensures
that $t_{\text{unequal}}$ is approximately $N(0, 1)$. So we can construct an approximate test
for $H_0$. By duality, a large-sample Wald-type confidence interval for $\mu_1 - \mu_0$
is

$$
\hat{Y}(1) - \hat{Y}(0) \pm z_{1-\alpha/2} \sqrt{\frac{\hat{S}^2(1)}{n_1} + \frac{\hat{S}^2(0)}{n_0}}
$$

where $z_{1-\alpha/2}$ is the $1 - \alpha/2$ upper quantile of the standard Normal random variable.

A.4.2 Fieller–Creasy problem

Consider the two-sample problem with $n_1$ units under the treatment and $n_0$
units under the control, respectively. Assume the outcomes under the treat-
ment {$Y_i : Z_i = 1$} are IID from $N(\mu_1, 1)$ and the outcomes under the control
{$Y_i : Z_i = 0$} are IID from $N(\mu_0, 1)$, respectively. The goal is to estimate$\gamma = \mu_1/\mu_0$. We can use $\hat{\gamma} = \hat{Y}(1)/\hat{Y}(0)$ to estimate $\gamma$. However, the point estimator has a complicated distribution, which does not yield a simple procedure to construct the confidence interval for $\gamma$.

Fieller's confidence interval can be formulated as inverting tests for a sequence of null hypotheses: $H_0(c) : \gamma = c$. Under $H_0(c)$, we have

$$
\frac{\hat{Y}(1) - c\hat{Y}(0)}{\sqrt{1/n_1 + c^2/n_0}} \sim N(0, 1)
$$

which motivates the confidence interval

$$
\left\{ c : \left| \frac{\hat{Y}(1) - c\hat{Y}(0)}{\sqrt{1/n_1 + c^2/n_0}} \right| \le z_{1-\alpha/2} \right\}
$$

where $z_{1-\alpha/2}$ is the $1 - \alpha/2$ upper quantile of the standard Normal random variable.

## A.5 Monte Carlo method in statistics

The Monte Carlo method is a powerful tool in statistics. I will review its basic use in approximating expectations or averages, which is fundamental in understanding the idea of FRT introduced in Chapter 3.

If our goal is to calculate $\theta = E\{g(Y)\}$ with $Y$ being a random variable, we can simply draw IID samples $Y_1, \dots, Y_n$ from the distribution of $Y$ and obtain the moment estimator for $\theta$:

$$
\hat{\theta} = n^{-1} \sum_{i=1}^{n} g(Y_i).
$$

As a special case, $Y$ is a uniform distribution over $\{y_1, \dots, y_N\}$ and $\theta = N^{-1} \sum_{i=1}^{N} g(y_i)$. We can draw $n$ IID samples $\{Y_1, \dots, Y_n\}$ from $\{y_1, \dots, y_N\}$ to obtain the moment estimator $\hat{\theta}$ defined above. This is called *sampling with replacement*, which is different from *sampling without replacement* reviewed in Chapter C.

## A.6 Bootstrap

It is often very tedious to derive the variance formulas for complex estimators. Efron (1979) proposed the bootstrap as a general tool for variance estimation.There are many versions of the bootstrap (Davison and Hinkley, 1997). In this
book, we only need the most basic one: the nonparametric bootstrap, which
will be simply called the bootstrap.

Consider the generic setting with

$$
Y_1, \dots, Y_n \stackrel{\text{IID}}{\sim} Y,
$$

where $Y_i$ can be a general random element denoting the observed data for unit $i$. An estimator $\hat{\theta}$ is a function of the observed data: $\hat{\theta} = T(Y_1, \dots, Y_n)$. When $T$ is a complex function, it may not be easy to obtain the variance or asymptotic variance of $\hat{\theta}$.

The uncertainty of $\hat{\theta}$ is driven by the IID sampling of $Y_1, \dots, Y_n$ from the
true distribution. Although the true distribution is unknown, it can be well
approximated by its empirical version

$$
\hat{F}_n(y) = n^{-1} \sum_{i=1}^{n} I(Y_i \le y),
$$

when the sample size *n* is large. If we believe this approximation, we can
simulate ̂θ by sampling

$$
(Y_1^*, \dots, Y_n^*) \stackrel{\text{IID}}{\sim} \hat{F}_n(y).
$$

Because $\hat{F}_n(y)$ is a discrete distribution with mass $1/n$ on each observed data point, the simulation of $\hat{\theta}$ reduces to the following procedure:

1. sample $(Y_1^*, \dots, Y_n^*)$ from $\{Y_1, \dots, Y_n\}$ with replacement;
2. compute $\hat{\theta}^* = T(Y_1^*, \dots, Y_n^*)$;
3. repeat the above two steps $B$ times to obtain the bootstrap replicates $\{\hat{\theta}_1^*, \dots, \hat{\theta}_B^*\}$.

We can then approximate the (asymptotic) variance of $\hat{\theta}$ by the sample
variance of the bootstrap replicates:

$$
\hat{V}_{\text{boot}} = (B - 1)^{-1} \sum_{b=1}^{B} (\hat{\theta}_{b}^{*} - \bar{\theta}^{*})^{2},
$$

where $\bar{\theta}^* = B^{-1} \sum_{b=1}^{B} \hat{\theta}_b^*$. The bootstrap confidence interval based on the
Normal approximation is then

$$
\hat{\theta} \pm z_{1-\alpha/2} \sqrt{\hat{V}_{\text{boot}}},
$$

where $z_{1-\alpha/2}$ is the $1 - \alpha/2$ upper quantile of the standard Normal random variable.

I use the following simple example to illustrate the idea of the bootstrap.With $n = 100$ IID observations $Y_i$'s from $N(1, 1)$, the sample mean should be close to 1 with variance $1/100 = 0.01$. Over 500 simulations, the classic variance estimator and the bootstrap variance estimator with $B = 200$ both have average values close to 0.01.

```R
## sample size
n = 100
## number of Monte Carlo simulations
MC = 500
## number of bootstrap replicates B
n boot = 200

simulation = replicate(MC, {
  Y = rnorm(n, 1, 1)
  boot.mu.hat = replicate(n boot, {
    index = sample(1:n, n, replace = TRUE)
    mean(Y[index])
  })
  c(mean(Y), var(Y)/n, var(boot.mu.hat))
})

## summarize the results
apply(simulation, 1, mean)
[1] 0.997602961 0.010006303 0.009921895
```

## A.7 Homework problems

### A.1 Independent but not IID data

Assume that the $Y_i$'s are independent with mean $\mu_i$ and variances $\sigma_i^2$ for $i = 1, \dots, n$. The parameter of interest is $\mu = n^{-1} \sum_{i=1}^n \mu_i$. Show that $\hat{\mu} = n^{-1} \sum_{i=1}^n Y_i$ is unbiased for $\mu$ and find its variance. Show that the usual variance estimator for IID data

$$
\hat{v} = \{n(n-1)\}^{-1} \sum_{i=1}^{n} (Y_i - \hat{\mu})^2
$$

is a conservative estimator for the variance of $\hat{\mu}$ in the sense that

$$
E(\hat{v}) - \text{var}(\hat{\mu}) = \{n(n-1)\}^{-1} \sum_{i=1}^{n} (\mu_i - \mu)^2 \geq 0.
$$

**Remark:** Consider a simpler case with $\mu_i = \mu$ and $\sigma_i^2 = \sigma^2$ for all $i = 1, \dots, n$. The sample mean is unbiased for $\mu$ with variance $\sigma^2/n$. Moreover, an unbiased estimator for the variance $\sigma^2/n$ is $\hat{\sigma}^2/n = \hat{v}$, where $\hat{\sigma}^2 = (n - 1)^{-1} \sum_{i=1}^n (Y_i - \hat{\mu})^2$. This problem states a more general result for the case with independent but not identically distributed observations. The result hasan important implication for Theorem 7.1 for the matched-pairs experiment discussed in Chapter 7.

### A.2 Asymptotic Normality of ratio

Prove (A.2).

### A.3 Asymptotic Normality of product

Prove (A.4).

### A.4 Product of two independent Normals

Assume $X \sim N(\mu_X, \sigma_X^2)$, $Y \sim N(\mu_Y, \sigma_Y^2)$ and $X \perp Y$. Show that

$$
\text{var}(XY) = \sigma_X^2 \sigma_Y^2 + \mu_X^2 \sigma_Y^2 + \mu_Y^2 \sigma_X^2.
$$

Remark: This problem gives a non-asymptotic form of Example A.2.

### A.5 Variance estimators in two-by-two tables

Use the delta method to show the variance estimators in Section A.3.2.

### A.6 Fisher weighting

Assume that we have $p$ independent unbiased estimators $\hat{\theta}_1, \dots, \hat{\theta}_p$ for a common parameter $\theta$:

$$
E(\hat{\theta}_j) = \theta, \quad (j = 1, \dots, p).
$$

The estimator $\hat{\theta}_j$ has variance $v_j$ ($j = 1, \dots, p$).

Construct a new estimator

$$
\hat{\theta} = \sum_{j=1}^{p} w_j \hat{\theta}_j
$$

with nonrandom constants $w_j$'s. Show that $\hat{\theta}$ is unbiased for estimating $\theta$ if $\sum_{j=1}^p w_j = 1$. Show that the optimal $w_j$'s such that $\hat{\theta}$ has the smallest variance under the constraint $\sum_{j=1}^p w_j = 1$ are

$$
w_j^* = \frac{1/v_j}{\sum_{j'=1}^{p} 1/v_{j'}} \quad (j = 1, \dots, p).
$$

Show that the resulting estimator $\hat{\theta}^* = \sum_{j=1}^p w_j^* \hat{\theta}_j$ has variance

$$
\text{var}(\hat{\theta}^*) = \frac{1}{\sum_{j=1}^{p} 1/v_j}.
$$

Remark: This is called Fisher weighting. The optimal weights are proportional to the inverses of the variances.# B

## Linear and Logistic Regressions

### B.1 Population ordinary least squares

Assume that $(x_i, y_i)_{i=1}^n \stackrel{\text{IID}}{\sim} (x, y)$, where $x$ is a $p$-dimensional random scalar or vector and $y$ is a random scalar. Below I will use $(x, y)$ to denote a general observation, dropping the subscript $i$ for simplicity. Define the population ordinary least squares (OLS) coefficient as

$$
\beta = \arg \min_b E \{(y - x^\top b)^2\}.
$$

The objective function is quadratic in $b$, so we can show that the minimizer is

$$
\beta = \{E(xx^\top)\}^{-1} E(xy)
$$

if the moments exist and $E(xx^\top)$ is invertible.

With $\beta$, we can define $x^\top\beta$ as the *linear projection* of $y$ on $x$, and define

$$
\varepsilon = y - x^\top \beta \quad (B.1)
$$

as the *population residual*. By the definition of $\beta$, we can verify that

$$
E(x\varepsilon) = E\{x(y - x^\top\beta)\} = E(xy) - E(xx^\top)\beta = 0.
$$

**Example B.1 (population OLS with the intercept)** If we include 1 as a component of $x$, then

$$
E(\varepsilon) = E(y - x^\top\beta) = 0
$$

which further implies that $\text{cov}(x, \varepsilon) = 0$. So with an intercept in $\beta$, the mean of the population residual must be zero, and it is uncorrelated with other covariates by construction.

**Example B.2 (univariate population OLS with the intercept)** An important special case is that for scalars $x$ and $y$, we can define

$$
(\alpha, \beta) = \arg \min_{a,b} E\{(y - a - bx)^2\}
$$

which have explicit formulas

$$
\beta = \frac{\text{cov}(x, y)}{\text{var}(x)}, \quad \alpha = E(y) - \beta E(x).
$$**Example B.3 (univariate population OLS without an intercept) Without intercept, we can define**

$$
\gamma = \arg \min_{c} E\{(y - cx)^2\}
$$

which equals

$$
\gamma = \frac{E(xy)}{E(x^2)}
$$

When $x$ has mean zero, $\gamma$ equals the $\beta$ in Example B.2.

We can also rewrite (B.1) as

$$
y = x^{\top}\beta + \varepsilon, \qquad (B.2)
$$

which holds by the definition of the population OLS coefficient and residual without any modeling assumption. We call (B.2) the population OLS decomposition.

## B.2 Sample ordinary least squares

Based on data $(x_i, y_i)_{i=1}^n \stackrel{\text{IID}}{\sim} (x, y)$, we can easily obtain the moment estimator for the population OLS coefficient

$$
\hat{\beta} = \left( n^{-1} \sum_{i=1}^{n} x_i x_i^{\top} \right)^{-1} \left( n^{-1} \sum_{i=1}^{n} x_i y_i \right),
$$

and the residuals $\hat{\varepsilon}_i = y_i - x_i^{\top}\hat{\beta}$. This is called the sample OLS or simply the OLS. The OLS coefficient $\hat{\beta}$ minimizes the residual sum of squares

$$
\hat{\beta} = \arg \min_{b} n^{-1} \sum_{i=1}^{n} (y_i - x_i^{\top} b)^2,
$$

so it must satisfy

$$
\sum_{i=1}^{n} x_i (y_i - x_i^{\top} \hat{\beta}) = 0,
$$

which is sometimes called the *Normal equation*. The fitted values, also called the *linear projections* of $y_i$ on $x_i$, equal

$$
\hat{y}_i = x_i^{\top} \hat{\beta} \quad (i = 1, \dots, n).
$$

Using the matrix notation

$$
X = \begin{pmatrix} x_1^\top \\ \vdots \\ x_n^\top \end{pmatrix}, \quad Y = \begin{pmatrix} y_1 \\ \vdots \\ y_n \end{pmatrix},
$$we can write the OLS coefficient as

$$
\hat{\beta} = (X^{\top}X)^{-1}X^{\top}Y
$$

and the fitted vector as

$$
\hat{Y} = X\hat{\beta} = X(X^{\top}X)^{-1}X^{\top}Y.
$$

Define the hat matrix as

$$
H = X(X^{\top}X)^{-1}X^{\top}.
$$

Then we also have $\hat{Y} = HY$, justifying the name “hat matrix.” The diagonal elements of $H$, $h_{ii}$’s, are often called the *leverage scores*.

Assuming finite fourth moments of $(x, y)$, we can use the law of large numbers and the CLT to show that

$$
\sqrt{n}(\hat{\beta} - \beta) \rightarrow N(0, V)
$$

in distribution with $V = B^{-1}MB^{-1}$, where $B = E(xx^{\top})$ and $M = E(\varepsilon^2 xx^{\top})$. So a moment estimator for the asymptotic variance of $\hat{\beta}$ is

$$
\hat{V}_{\text{EHW}} = n^{-1} \left( n^{-1} \sum_{i=1}^{n} x_i x_i^{\top} \right)^{-1} \left( n^{-1} \sum_{i=1}^{n} \hat{\varepsilon}_i^2 x_i x_i^{\top} \right) \left( n^{-1} \sum_{i=1}^{n} x_i x_i^{\top} \right)^{-1}, \quad (\text{B.3})
$$

which is called the Eicker-Huber-White (EHW) robust covariance estimator (Eicker, 1967; Huber, 1967; White, 1980). We can show that $n\hat{V}_{\text{EHW}} \rightarrow V$ in probability. Based on $\hat{\beta}$ and $\hat{V}_{\text{EHW}}$, we can make inference about the population OLS coefficient $\beta$.

There are many variants of the EHW robust covariance estimator based on the leverage scores (Long and Ervin, 2000). In particular, the HC1 variant modifies $\hat{\varepsilon}_i^2$ to $\hat{\varepsilon}_i^2/(n-p)$, the HC2 variant modifies $\hat{\varepsilon}_i^2$ to $\hat{\varepsilon}_i^2/(1-h_{ii})$, and the HC3 variant modifies $\hat{\varepsilon}_i^2$ to $\hat{\varepsilon}_i^2/(1-h_{ii})^2$, in the definition of $\hat{V}_{\text{EHW}}$.

## B.3 Frisch-Waugh-Lovell Theorem

The Frisch-Waugh-Lovell (FWL) theorem has two versions: one at the population level and the other at the sample level. It reduces multivariate OLS to univariate OLS and therefore facilitates the understanding and calculation of the OLS coefficients. Below I will present special cases of the FWL theorem which are enough for this book.

**Theorem B.1 (population FWL)** *The coefficient of $x_1$ in the OLS fit of $y$ on $(x_1, x_2, \dots, x_p)$ equals the coefficient of $\tilde{x}_1$ in the OLS fit of $y$ or $\tilde{y}$ on $\tilde{x}_1$, where $\tilde{y}$ is the residual from the OLS fit of $y$ on $(x_2, \dots, x_p)$ and $\tilde{x}_1$ is the residual from the OLS fit of $x_1$ on $(x_2, \dots, x_p)$.*In Theorem B.1, residualizing $x_1$ is crucial but residualizing $y$ is not.

**Theorem B.2 (sample FWL)** With data $(Y, X_1, X_2, \dots, X_p)$ containing column vectors, the coefficient of $X_1$ in the OLS fit of $Y$ on $(X_1, X_2, \dots, X_p)$ equals the coefficient of $\tilde{X}_1$ in the OLS fit of $Y$ or $\tilde{Y}$ on $\tilde{X}_1$, where $\tilde{Y}$ is the residual vector from the OLS fit of $Y$ on $(X_2, \dots, X_p)$ and $\tilde{X}_1$ is the residual vector from the OLS fit of $X_1$ on $(X_2, \dots, X_p)$.

Again, in Theorem B.2, residualizing $X_1$ is crucial but residualizing $Y$ is not. Ding (2021) gives more numerical properties related to the sample FWL theorem.

## B.4 Linear model

Sometimes, we impose a stronger model assumption which requires the conditional mean of $y$ given $x$ is linear:

$$
E(y | x) = x^{\top}\beta
$$

or, equivalently,

$$
y = x^{\top}\beta + \varepsilon \quad \text{with} \quad E(\varepsilon | x) = 0,
$$

which is called the restricted mean model. Under this model, the population OLS coefficient is the true parameter of interest:

$$
\begin{aligned} \{E(xx^{\top})\}^{-1} E(xy) &= \{E(xx^{\top})\}^{-1} E\{xE(y | x)\} \\ &= \{E(xx^{\top})\}^{-1} E(xx^{\top}\beta) \\ &= \beta. \end{aligned}
$$

Moreover, the population OLS coefficient does not depend on the distribution of $x$. The asymptotic inference in Section B.1 applies to this model too.

In the special case with $\text{var}(\varepsilon | x) = \sigma^2$, the asymptotic variance of the OLS coefficient reduces to

$$
V = \sigma^2 \{E(xx^{\top})\}^{-1}
$$

so a simpler moment estimator for the asymptotic variance of $\hat{\beta}$ is

$$
\hat{V}_{\text{OLS}} = \hat{\sigma}^2 \left( \sum_{i=1}^{n} x_i x_i^{\top} \right)^{-1} \quad (B.4)
$$

where $\hat{\sigma}^2 = (n-p)^{-1} \sum_{i=1}^{n} \hat{\varepsilon}_i^2$ is an unbiased estimator for $\sigma^2$, recalling that $n$denotes the sample size and *p* denotes the dimension of *x*. This is the standard covariance estimator from the lm function.

Based on the *BostonHousing* data, we first obtain the standard output from the lm function.

```r
> library("mlbench")
> data(BostonHousing)
> ols.fit = lm(medv ~ ..., data = BostonHousing)
> summary(ols.fit)
```

Call:

lm(formula = medv ~ ..., data = BostonHousing)

Residuals:

Min      1Q   Median     3Q      Max
-15.595  -2.730  -0.518  1.777  26.199

Coefficients:

Estimate   Std. Error t value Pr(>\|t\|)
(Intercept)  3.646e+01  5.103e+00  7.144  3.28e-12 ***
crim       -1.080e-01  3.286e-02  -3.287  0.001087 **
zn         4.642e-02  1.373e-02  3.382  0.000778 ***
indus      2.056e-02  6.150e-02  0.334  0.738288
chas1      2.687e+00  8.616e-01  3.118  0.001925 **
nox        -1.777e+01  3.820e+00  -4.651  4.25e-06 ***
rm         3.810e+00  4.179e-01  9.116  < 2e-16 ***
age        6.922e-04  1.321e-02  0.052  0.958229
dis        -1.476e+00  1.995e-01  -7.398  6.01e-13 ***
rad        3.060e-01  6.635e-02  4.613  5.07e-06 ***
tax        -1.233e-02  3.760e-03  -3.280  0.001112 **
ptratio    -9.527e-01  1.308e-01  -7.283  1.31e-12 ***
b          9.312e-03  2.686e-03  3.467  0.000573 ***
lstat      -5.248e-01  5.072e-02 -10.347  < 2e-16 ***

In R, the `lm` function can compute $\hat{\beta}$, and the `hccm` function in the package `car` can compute $\hat{V}_{\text{EHW}}$ as well as its variants. Below we compare the t-statistics based on different choices of the standard errors. In this example, the EHW standard errors differ a lot for some regression coefficients.

```r
> library("car")
> ols.fit.hc0 = sqrt(diag(hccm(ols.fit, type = "hc0")))
> ols.fit.hc1 = sqrt(diag(hccm(ols.fit, type = "hc1")))
> ols.fit.hc2 = sqrt(diag(hccm(ols.fit, type = "hc2")))
> ols.fit.hc3 = sqrt(diag(hccm(ols.fit, type = "hc3")))
> tvalues = summary(ols.fit)$coef[,1]/
+   cbind(summary(ols.fit)$coef[,2],
+         ols.fit.hc0,
+         ols.fit.hc1,
+         ols.fit.hc2,
+         ols.fit.hc3)
``````R
> colnames(tvalues) = c("ols", "hc0", "hc1", "hc2", "hc3")
> round(tvalues, 2)
```

<table><thead><tr><th></th><th>ols</th><th>hc0</th><th>hc1</th><th>hc2</th><th>hc3</th></tr></thead><tbody><tr><td>(Intercept)</td><td>7.14</td><td>4.62</td><td>4.56</td><td>4.48</td><td>4.33</td></tr><tr><td>crim</td><td>-3.29</td><td>-3.78</td><td>-3.73</td><td>-3.48</td><td>-3.17</td></tr><tr><td>zn</td><td>3.38</td><td>3.42</td><td>3.37</td><td>3.35</td><td>3.27</td></tr><tr><td>indus</td><td>0.33</td><td>0.41</td><td>0.41</td><td>0.41</td><td>0.40</td></tr><tr><td>chas1</td><td>3.12</td><td>2.11</td><td>2.08</td><td>2.05</td><td>2.00</td></tr><tr><td>nox</td><td>-4.65</td><td>-4.76</td><td>-4.69</td><td>-4.64</td><td>-4.53</td></tr><tr><td>rm</td><td>9.12</td><td>4.57</td><td>4.51</td><td>4.43</td><td>4.28</td></tr><tr><td>age</td><td>0.05</td><td>0.04</td><td>0.04</td><td>0.04</td><td>0.04</td></tr><tr><td>dis</td><td>-7.40</td><td>-6.97</td><td>-6.87</td><td>-6.81</td><td>-6.66</td></tr><tr><td>rad</td><td>4.61</td><td>5.05</td><td>4.98</td><td>4.91</td><td>4.76</td></tr><tr><td>tax</td><td>-3.28</td><td>-4.65</td><td>-4.58</td><td>-4.54</td><td>-4.43</td></tr><tr><td>ptratio</td><td>-7.28</td><td>-8.23</td><td>-8.11</td><td>-8.06</td><td>-7.89</td></tr><tr><td>b</td><td>3.47</td><td>3.53</td><td>3.48</td><td>3.44</td><td>3.34</td></tr><tr><td>lstat</td><td>-10.35</td><td>-5.34</td><td>-5.27</td><td>-5.18</td><td>-5.01</td></tr></tbody></table>

## B.5 Weighted least squares

Assuming that $(w_i, x_i, y_i) \stackrel{\text{IID}}{\sim} (w, x, y)$ with $w \neq 0$. At the population level, we can define the weighted least squares (WLS) coefficient as

$$
\beta_w = \arg \min_b E\{w(y - x^\top b)^2\},
$$

which satisfies

$$
E\{wx(y - x^\top \beta_w)\} = 0
$$

and thus equals

$$
\beta_w = \{E(wxx^\top)\}^{-1} E(wxy)
$$

if $E(wxx^\top)$ is invertible.

At the sample level, we can define the WLS coefficient as

$$
\hat{\beta}_w = \arg \min_b \sum_{i=1}^{n} w_i (y_i - x_i^\top b)^2,
$$

which satisfies

$$
\sum_{i=1}^{n} w_i x_i (y_i - x_i^\top \hat{\beta}_w) = 0
$$

and thus equals

$$
\hat{\beta}_w = \left( n^{-1} \sum_{i=1}^{n} w_i x_i x_i^\top \right)^{-1} \left( n^{-1} \sum_{i=1}^{n} w_i x_i y_i \right)
$$if $\sum_{i=1}^{n} w_i x_i x_i^\top$ is invertible.

In $\mathbb{R}$, we can specify *weights* in the $lm$ function to implement WLS.

# B.6 Logistic regression

## B.6.1 Model

Technically, we can apply the OLS procedure even if the outcome $y$ is binary. However, it is a little awkward to have predicted probabilities outside the range of [0, 1]. This motivates us to consider the following model:

$$
\mathrm{pr}(y_i = 1 | x_i) = g(x_i^\top \beta),
$$

where $g(\cdot) : \mathbb{R} \to [0, 1]$ is a monotone function, and its inverse is often called the *link function*. The $g(\cdot)$ function can be any distribution function of a random variable, but we will focus on the logistic form:

$$
g(z) = \frac{e^z}{1 + e^z} = (1 + e^{-z})^{-1}.
$$

We can also write the logistic model as

$$
\mathrm{pr}(y_i = 1 | x_i) = \frac{e^{x_i^\top \beta}}{1 + e^{x_i^\top \beta}},
$$

or, equivalently, with the definition $\mathrm{logit}(z) = \log \frac{z}{1-z}$, we have

$$
\mathrm{logit} \{ \mathrm{pr}(y_i = 1 | x_i) \} = x_i^\top \beta.
$$

Assume that $x_{i1}$ is binary. Under the logistic model, we have

$$
\begin{align*} \beta_1 &= \mathrm{logit} \{ \mathrm{pr}(y_i = 1 | x_{i1} = 1, \dots) \} - \mathrm{logit} \{ \mathrm{pr}(y_i = 1 | x_{i1} = 0, \dots) \} \\ &= \log \frac{\mathrm{pr}(y_i = 1 | x_{i1} = 1, \dots)/\mathrm{pr}(y_i = 0 | x_{i1} = 1, \dots)}{\mathrm{pr}(y_i = 1 | x_{i1} = 0, \dots)/\mathrm{pr}(y_i = 0 | x_{i1} = 0, \dots)}, \end{align*}
$$

where ... contains all other regressor $x_{i2}, \dots, x_{ip}$. Therefore, the coefficient $\beta_1$ equals the log of the odds ratio of $x_{i1}$ on $y_i$ conditional on other regressors.B.6.2 Maximum likelihood estimate

Let $\text{pr}(y_i = 1 | x_i) = \pi(x_i, \beta)$. To estimate the parameter $\beta$, we can maximize the following likelihood function:

$$
\begin{align*}
L(\beta) &= \prod_{i=1}^{n} \{\pi(x_i, \beta)\}^{y_i} \{1 - \pi(x_i, \beta)\}^{1-y_i} \\
&= \prod_{i=1}^{n} \left\{ \frac{\pi(x_i, \beta)}{1 - \pi(x_i, \beta)} \right\}^{y_i} \{1 - \pi(x_i, \beta)\} \\
&= \prod_{i=1}^{n} \left( e^{x_i^\top \beta} \right)^{y_i} \frac{1}{1 + e^{x_i^\top \beta}} \\
&= \prod_{i=1}^{n} \frac{e^{y_i x_i^\top \beta}}{1 + e^{x_i^\top \beta}}.
\end{align*}
$$

Let $\hat{\beta}$ denote the maximizer, which is called the maximum likelihood estimate (MLE). Taking the log of $L(\beta)$ and differentiating it with respect to $\beta$, we can show that the MLE must satisfy the first-order condition:

$$
\sum_{i=1}^{n} x_i \{y_i - \pi(x_i, \hat{\beta})\} = 0.
$$

If $x_i$ contains the intercept, the MLE must satisfy

$$
\sum_{i=1}^{n} \{y_i - \pi(x_i, \hat{\beta})\} = 0,
$$

that is, the average of the observed $y_i$'s must be identical to the average of
the fitted probabilities $\pi(x_i, \hat{\beta})$'s.

Using the general theory for the MLE, we can show that it is consistent
for the true parameter $\beta$ and is asymptotically Normal:

$$
\sqrt{n}(\hat{\beta} - \beta) \rightarrow \text{N}(0, V)
$$

in distribution, where $V = E[\pi(x_i, \beta)\{1 - \pi(x_i, \beta)\}xx^\top]$. So we can approximate the covariance matrix of $\hat{\beta}$ by

$$
n^{-1} \sum_{i=1}^{n} \pi(x_i, \hat{\beta}) \{1 - \pi(x_i, \hat{\beta})\} x_i x_i^{\top}.
$$

In R, the `glm` function can find the MLE and report the estimated covariance matrix. We use the `lalonde` data to illustrate the logistic regression with the binary outcome indicating positive real earnings in 1978.

> library(Matching)```r
> data(lalonde)
> logit.re78 = glm(I(re78>0) ~ ., family = binomial,
+                 data = lalonde)
> summary(logit.re78)

Call:
glm(formula = I(re78 > 0) ~ ., family = binomial, data = lalonde)

Deviance Residuals:
Min      1Q    Median     3Q      Max
-2.1789   -1.3170   0.7568   0.9413  1.0882

Coefficients:
              Estimate   Std. Error z value Pr(>\|z\|)
(Intercept)  1.910e+00  1.241e+00   1.539    0.1238
age         -2.812e-03  1.533e-02  -0.183    0.8545
educ        -2.179e-02  7.831e-02  -0.278    0.7808
black       -1.060e+00  5.041e-01  -2.103    0.0354 *
hisp        2.741e-01  6.967e-01   0.393    0.6940
married     7.577e-02  3.057e-01   0.248    0.8042
nodegr      -1.984e-01  3.460e-01  -0.573    0.5664
re74        7.857e-06  3.173e-05   0.248    0.8044
re75        4.016e-05  6.058e-05   0.663    0.5074
u74         -6.177e-02  4.095e-01  -0.151    0.8801
u75         1.505e-02  3.518e-01   0.043    0.9659
treat       5.412e-01  2.222e-01   2.435    0.0149 *
```

### B.6.3 Extension to the case-control study

In case-control studies, sampling is conditional on the binary outcome, that is, units with outcomes $y_i = 1$ and $y_i = 0$ are sampled with different probabilities. Let $s_i$ be the sampling indicator. In case-control studies, we have

$$
\mathrm{pr}(s_i = 1 | x_i, y_i) = \mathrm{pr}(s_i = 1 | y_i)
$$

as a function of $y_i$, and we only observe units with $s_i = 1$.

Based on the model and the sampling mechanism of the case-control study, it does not seem obvious whether or not we can still use logistic regression to estimate the coefficients. Nevertheless, Prentice and Pyke (1979) proved a positive results. In case-control studies, logistic regression can still consistently estimate all the coefficients except for the intercept.### B.6.4 Logistic regression with weights

Sometimes, unit $i$ has weight $w_i$. Then we can fit a weighted logistic regression by solving

$$
\sum_{i=1}^{n} w_i x_i \{y_i - \pi(x_i, \hat{\beta})\} = 0.
$$

In $\mathbb{R}$, we can specify weights in the `glm` function to implement weighted logistic regression.

## B.7 Homework problems

### B.1 Sample WLS with the intercept

Assume the regressor $x_i$ contains the intercept. Show that

$$
\bar{y}_w = \bar{x}_w^\top \hat{\beta}_w \qquad (B.5)
$$

where $\bar{x}_w = \sum_{i=1}^{n} w_i x_i / \sum_{i=1}^{n} w_i$ and $\bar{y}_w = \sum_{i=1}^{n} w_i y_i / \sum_{i=1}^{n} w_i$ are the weighted averages of the $x_i$'s and $y_i$'s.

### B.2 Population OLS with a binary regressor

Assume $x$ is binary. Define the population OLS:

$$
(\alpha, \beta) = \arg \min_{(a,b)} E\{(y - a - bx)^2\}.
$$

Show that $\beta = E(y | x = 1) - E(y | x = 0)$ and $\alpha = E(y | x = 0)$.

### B.3 Univariate WLS

As a special case of WLS, define

$$
(\hat{\alpha}_w, \hat{\beta}_w) = \arg \min_{(a,b)} \sum_{i=1}^{n} w_i (y_i - a - bx_i)^2
$$

where $w_i \ge 0$. Show that

$$
\hat{\beta}_w = \frac{\sum_{i=1}^{n} w_i (x_i - \bar{x}_w)(y_i - \bar{y}_w)}{\sum_{i=1}^{n} w_i (x_i - \bar{x}_w)^2} \qquad (B.6)
$$

and

$$
\hat{\alpha}_w = \bar{y}_w - \hat{\beta}_w \bar{x}_w, \qquad (B.7)
$$

where $\bar{x}_w = \sum_{i=1}^{n} w_i x_i / \sum_{i=1}^{n} w_i$ and $\bar{y}_w = \sum_{i=1}^{n} w_i y_i / \sum_{i=1}^{n} w_i$ are the weighted averages of the $x_i$'s and $y_i$'s.Further assume that the $x_i$'s are binary. Show that

$$
\hat{\beta}_w = \frac{\sum_{i=1}^{n} w_i x_i y_i}{\sum_{i=1}^{n} w_i x_i} - \frac{\sum_{i=1}^{n} w_i (1 - x_i) y_i}{\sum_{i=1}^{n} w_i (1 - x_i)}. \quad (B.8)
$$

That is, if the regressor is binary in the univariate WLS, the coefficient of the regressor equals the difference in the weighted means.

Remark: To prove (B.8), use an appropriate reparametrization of the WLS problem. Otherwise, the derivation can be tedious.

## B.4 OLS with orthogonal regressors

Consider sample OLS fit of an $n$-vector $Y$ on an $n \times p$ matrix $X$, with coefficient $\hat{\beta}$. Partition $X$ into $X = (X_1, X_2)$, where $X_1$ is an $n \times k$ matrix and $X_2$ is an $n \times l$ matrix, with $p = k + l$. Correspondingly, partition $\hat{\beta}$ into

$$
\hat{\beta} = \begin{pmatrix} \hat{\beta}_1 \\ \hat{\beta}_2 \end{pmatrix}.
$$

Assume $X_1$ and $X_2$ are orthogonal, that is, $X_1^\top X_2 = 0$. Show that $\hat{\beta}_1$ equals the coefficient from OLS of $Y$ on $X_1$ and $\hat{\beta}_2$ equals the coefficient from OLS of $Y$ on $X_2$, respectively.

## B.5 OLS with a non-degenerate transformation of the regressors

Define $\hat{\beta}$ as the coefficient from the sample OLS fit of an $n$-vector $Y$ on an $n \times p$ matrix $X$. Let $\Gamma$ be a $p \times p$ non-degenerate matrix, and define $X' = X\Gamma$. Define $\hat{\beta}'$ as the coefficient from the sample OLS fit of $Y$ on $X'$.

Show that

$$
\hat{\beta} = \Gamma \hat{\beta}'.
$$

## B.6 Variances of the OLS estimator

Assume $(x_i, y_i)_{i=1}^n \stackrel{\text{IID}}{\sim} (x, y)$ and

$$
E(y | x) = x^\top \beta, \quad \text{var}(y | x) = \sigma^2(x).
$$

Show that the OLS estimator $\hat{\beta}$ has conditional mean

$$
E(\hat{\beta} | x_1, \dots, x_n) = \beta
$$

and conditional variance

$$
\text{var}(\hat{\beta} | x_1, \dots, x_n) = \left(\sum_{i=1}^{n} x_i x_i^\top\right)^{-1} \left(\sum_{i=1}^{n} \sigma^2(x_i) x_i x_i^\top\right) \left(\sum_{i=1}^{n} x_i x_i^\top\right)^{-1}.
$$

Remark: This problem may provide some intuition for the variance estimators (B.3) and (B.4).11# C

# Some Useful Lemmas for Simple Random Sampling From a Finite Population

## C.1 Lemmas

Simple random sampling is a basic topic in standard survey sampling textbooks (e.g., Cochran, 1953). Below I review some results for simple random sampling that are useful for design-based inference in the CRE in Chapters 3 and 4. I define simple random sampling based on the distribution of the inclusion indicators.

**Definition C.1 (simple random sampling)** A simple random sample of size $n_1$ consists of a subset from a finite population of n units indexed by $i = 1, \dots, n$. Let $\mathbf{Z} = (Z_1, \dots, Z_n)$ be the inclusion indicators of the n units with $Z_i = 1$ if unit i is sampled and $Z_i = 0$ otherwise. The vector $\mathbf{Z}$ can take $\binom{n}{n_1}$ possible permutations of a vector of $n_1$ 1's and $n_0$ 0's, and each has equal probability.

By Definition C.1, simple random sampling is a special form of sampling without replacement because it does not allow for repeatedly sampling the same unit. Lemma C.1 below summarizes the first two moments of the inclusion indicators.

**Lemma C.1** Under simple random sampling, we have

$$
E(Z_i) = \frac{n_1}{n}, \quad \text{var}(Z_i) = \frac{n_1 n_0}{n^2}, \quad \text{cov}(Z_i, Z_j) = -\frac{n_1 n_0}{n^2(n-1)}.
$$

In more compact forms, we have

$$
E(\mathbf{Z}) = \frac{n_1}{n} \mathbf{1}_n, \quad \text{cov}(\mathbf{Z}) = \frac{n_1 n_0}{n(n-1)} \mathbf{P}_n,
$$

where $\mathbf{1}_n$ is a n-dimensional vector of 1's, and $\mathbf{P}_n = \mathbf{I}_n - n^{-1}\mathbf{1}_n\mathbf{1}_n^\top$ is the $n \times n$ projection matrix orthogonal to $\mathbf{1}_n$.

Let $\{c_1, \dots, c_n\}$ be a finite population with mean $\bar{c} = \sum_{i=1}^n c_i/n$ and variance

$$
S_c^2 = (n - 1)^{-1} \sum_{i=1}^{n} (c_i - \bar{c})^2;
$$let {$d_1, \dots, d_n$} be another finite population with mean $\bar{d} = \sum_{i=1}^{n} d_i/n$ and variance

$$
S_d^2 = (n - 1)^{-1} \sum_{i=1}^{n} (d_i - \bar{d})^2;
$$

their covariance is

$$
S_{cd} = (n - 1)^{-1} \sum_{i=1}^{n} (c_i - \bar{c})(d_i - \bar{d}).
$$

Under simple random sampling, the sample means are

$$
\hat{c} = n^{-1} \sum_{i=1}^{n} Z_i c_i, \quad \hat{d} = n^{-1} \sum_{i=1}^{n} Z_i d_i;
$$

sample variances are

$$
\hat{S}_c^2 = (n_1 - 1)^{-1} \sum_{i=1}^{n} Z_i (c_i - \hat{c})^2, \quad \hat{S}_d^2 = (n_1 - 1)^{-1} \sum_{i=1}^{n} Z_i (d_i - \hat{d})^2;
$$

the sample covariance is

$$
\hat{S}_{cd} = (n_1 - 1)^{-1} \sum_{i=1}^{n} Z_i (c_i - \hat{c})(d_i - \hat{d}).
$$

Lemma C.2 below gives the moments of the sample means $\hat{c}$ and $\hat{d}$.

**Lemma C.2** *Under simple random sampling, the sample means are unbiased for the population means:*

$$
E(\hat{c}) = \bar{c}, \quad E(\hat{d}) = \bar{d}.
$$

*Their variances and covariance are*

$$
\operatorname{var}(\hat{c}) = \frac{n_0}{nn_1} S_c^2, \quad \operatorname{var}(\hat{d}) = \frac{n_0}{nn_1} S_d^2, \quad \operatorname{cov}(\hat{c}, \hat{d}) = \frac{n_0}{nn_1} S_{cd}.
$$

In the variance formulas in Lemma C.2, the coefficient $n_0/(nn_1) = 1/n_1 \times (1 - n_1/n)$ in Lemma C.2 is different from $1/n_1$ under IID sampling. The additional term $1 - n_1/n = n_0/n$ is called the *finite population correction factor*.

Lemma C.3 below gives the unbiasedness of the sample variances and covariance for estimating the population analogs.

**Lemma C.3** *Under simple random sampling, the sample variances and covariance are unbiased for their population versions:*

$$
E(\hat{S}_c^2) = S_c^2, \quad E(\hat{S}_d^2) = S_d^2, \quad E(\hat{S}_{cd}) = S_{cd}.
$$An important practical question is to make inference about $\bar{c}$ based on the simple random sample. This requires a more precise characterization of the distribution of its unbiased estimator $\hat{\bar{c}}$. The finite-sample exact distribution of $\hat{\bar{c}}$ depends on the whole finite population $\{c_1, \dots, c_n\}$, which is unknown. The following finite population CLT characterizes the asymptotic distribution of $\hat{\bar{c}}$ based on its first two moments.

**Lemma C.4 (finite population CLT)** *Under simple random sampling, as $n \to \infty$, if*

$$
\frac{\max_{1 \le i \le n} (c_i - \bar{c})^2}{\min(n_1, n_0) S_c^2} \to 0,
$$

then

$$
\frac{\hat{c} - \bar{c}}{\sqrt{\frac{n_0}{n n_1} S_c^2}} \to N(0, 1)
$$

in distribution, and $\hat{S}_c^2/S_c^2 \to 1$ in probability.

Lemma C.4 justifies the Wald-type $1 - \alpha$ confidence interval for $\bar{c}$:

$$
\hat{c} \pm z_{1-\alpha/2} \sqrt{\frac{n_0}{n n_1} \hat{S}_c^2}
$$

where $z_{1-\alpha/2}$ is the $1 - \alpha/2$ upper quantile of the standard Normal random variable.

## C.2 Proofs

**Proof of Lemma C.1:** By symmetry, the $Z_i$'s have the same mean, so

$$
n_1 = \sum_{i=1}^{n} Z_i = E \left( \sum_{i=1}^{n} Z_i \right) = nE(Z_i) \implies E(Z_i) = n_1/n.
$$

Because $Z_i$ is a Bernoulli random variable, its variance is

$$
\mathrm{var}(Z_i) = \frac{n_1}{n} \left(1 - \frac{n_1}{n}\right) = \frac{n_1 n_0}{n^2}.
$$

By symmetry again, the $Z_i$'s have the same variance and the pairs $(Z_i, Z_j)$'s have the same covariance, so

$$
0 = \mathrm{var} \left( \sum_{i=1}^{n} Z_i \right) = n\mathrm{var}(Z_i) + n(n-1)\mathrm{cov}(Z_i, Z_j)
$$which implies that

$$
\operatorname{cov}(Z_i, Z_j) = -\frac{n_1 n_0}{n^2(n-1)} \quad (i \neq j).
$$

**Proof of Lemma C.2:** The unbiasedness of the sample mean follows from linearity. For example,

$$
E(\hat{c}) = E \left( \frac{1}{n_1} \sum_{i=1}^{n_1} Z_i c_i \right) = \frac{1}{n_1} \sum_{i=1}^{n_1} E(Z_i) c_i = \bar{c}.
$$

The covariance of the sample means is

$$
\begin{align*} \operatorname{cov}(\hat{c}, \hat{d}) & = \operatorname{cov} \left\{ \frac{1}{n_1} \sum_{i=1}^{n_1} Z_i (c_i - \bar{c}), \frac{1}{n_1} \sum_{i=1}^{n_1} Z_i (d_i - \bar{d}) \right\} \\ & = \frac{1}{n_1^2} \left[ \sum_{i=1}^{n_1} \operatorname{var}(Z_i) (c_i - \bar{c})(d_i - \bar{d}) + \sum_{i \neq j} \operatorname{cov}(Z_i, Z_j) (c_i - \bar{c})(d_j - \bar{d}) \right] \\ & = \frac{1}{n_1^2} \left[ \frac{n_1 n_0}{n^2} \sum_{i=1}^{n_1} (c_i - \bar{c})(d_i - \bar{d}) - \frac{n_1 n_0}{n^2(n-1)} \sum_{i \neq j} (c_i - \bar{c})(d_j - \bar{d}) \right]. \end{align*}
$$

Because

$$
0 = \sum_{i=1}^{n_1} (c_i - \bar{c}) \sum_{i=1}^{n_1} (d_i - \bar{d}) = \sum_{i=1}^{n_1} (c_i - \bar{c})(d_i - \bar{d}) + \sum_{i \neq j} (c_i - \bar{c})(d_j - \bar{d}),
$$

the covariance of the sample means reduces to

$$
\begin{align*} \operatorname{cov}(\hat{c}, \hat{d}) & = \frac{1}{n_1^2} \left[ \frac{n_1 n_0}{n^2} \sum_{i=1}^{n_1} (c_i - \bar{c})(d_i - \bar{d}) + \frac{n_1 n_0}{n^2(n-1)} \sum_{i=1}^{n_1} (c_i - \bar{c})(d_i - \bar{d}) \right] \\ & = \frac{n_0}{n n_1} S_{cd}. \end{align*}
$$

The variance formulas are just special cases with $\hat{c} = \hat{d}$.

**Proof of Lemma C.3:** We prove only the sample covariance term because the formulas for sample variances are special cases. We have the followingdecomposition:

$$
\begin{align*}
(n_1 - 1) \hat{S}_{cd} &= \sum_{i=1}^{n} Z_i (c_i - \hat{c}) (d_i - \hat{d}) \\
&= \sum_{i=1}^{n} Z_i \{(c_i - \bar{c}) - (\hat{c} - \bar{c})\} \{(d_i - \bar{d}) - (\hat{d} - \bar{d})\} \\
&= \sum_{i=1}^{n} Z_i (c_i - \bar{c}) (d_i - \bar{d}) - n_1 (\hat{c} - \bar{c}) (\hat{d} - \bar{d}).
\end{align*}
$$

Taking expectations on both sides, we have

$$
\begin{align*}
E\{(n_1 - 1)\hat{S}_{cd}\} &= \sum_{i=1}^{n} E(Z_i)(c_i - \bar{c})(d_i - \bar{d}) - n_1 E\{(\hat{c} - \bar{c})(\hat{d} - \bar{d})\} \\
&= \frac{n_1}{n} \sum_{i=1}^{n} (c_i - \bar{c})(d_i - \bar{d}) - n_1 \frac{n_0}{nn_1} S_{cd} \\
&= S_{cd} \left\{ \frac{n_1(n-1)}{n} - \frac{n_0}{n} \right\} \\
&= (n_1 - 1)S_{cd},
\end{align*}
$$

and the conclusion follows by dividing both sides by $n_1 - 1$. $\square$

**Proof of Lemma C.4:** Hájek (1960) gave a proof of the CLT for simple random sampling, and Lehmann (1975) gave a more accessible version of the proof. Li and Ding (2017) modified the CLT as presented in Lemma C.4, and proved the consistency of the sample variance. Due to the technical complexities, I omit the proof. $\square$

C.3 Comments on the literature

Survey sampling and experimental design have been deeply connected ever
since Neyman (1934, 1935)'s seminal work. Li and Ding (2017) and Mukerjee
et al. (2018) made many theoretical ties between these two areas.## C.4 Homework Problems

### C.1 Sampling without replacement and the Hypergeometric distribution

Consider a special case of Lemma C.2 with $c_i$'s being binary. Assume the total number of 1's equals $T$ so the total number of 0's equals $n - T$. Let $t = \sum_{i=1}^{n} Z_i c_i$ denote the total number of 1's in the sample of size $n_1$.

Find the distribution, mean, and variance of $t$.

Remark: $t$ follows a Hypergeometric distribution.

### C.2 Vector form of Lemma C.2

Assume the $c_i$'s are vectors and define

$$
S_c^2 = (n-1)^{-1} \sum_{i=1}^{n} (c_i - \bar{c})(c_i - \bar{c})^\top, \quad \hat{S}_c^2 = (n_1 - 1)^{-1} \sum_{i=1}^{n_1} Z_i (c_i - \hat{c})(c_i - \hat{c})^\top.
$$

Show that

$$
E(\hat{c}) = \bar{c}, \quad \text{cov}(\hat{c}) = \frac{n_0}{nn_1} S_c^2, \quad E(\hat{S}_c^2) = S_c^2.
$$Bibliography

Abadie, A., Athey, S., Imbens, G. W., and Wooldridge, J. M. (2020). Sampling-based versus design-based uncertainty in regression analysis. *Econometrica*, 88:265–296.

Abadie, A. and Imbens, G. W. (2006). Large sample properties of matching estimators for average treatment effects. *Econometrica*, 74:235–267.

Abadie, A. and Imbens, G. W. (2008). On the failure of the bootstrap for matching estimators. *Econometrica*, 76:1537–1557.

Abadie, A. and Imbens, G. W. (2011). Bias-corrected matching estimators for average treatment effects. *Journal of Business and Economic Statistics*, 29:1–11.

Abadie, A. and Imbens, G. W. (2016). Matching on the estimated propensity score. *Econometrica*, 84:781–807.

Alwin, D. F. and Hauser, R. M. (1975). The decomposition of effects in path analysis. *American Sociological Review*, 40:37–47.

Amarante, V., Manacorda, M., Miguel, E., and Vigorito, A. (2016). Do cash transfers improve birth outcomes? evidence from matched vital statistics, program, and social security data. *American Economic Journal: Economic Policy*, 8:1–43.

Anderson, T. W. and Rubin, H. (1950). The asymptotic properties of estimates of the parameters of a single equation in a complete system of stochastic equations. *Annals of Mathematical Statistics*, 21:570–582.

Angrist, J., Lang, D., and Oreopoulos, P. (2009). Incentives and services for college achievement: Evidence from a randomized trial. *American Economic Journal: Applied Economics*, 1:136–163.

Angrist, J. and Lavy, V. (2009). The effects of high stakes high school achievement awards: Evidence from a randomized trial. *American Economic Review*, 99:1384–1414.

Angrist, J. D. (1990). Lifetime earnings and the Vietnam era draft lottery: evidence from social security administrative records. *American Economic Review*, 80:313–336.Angrist, J. D. (1998). Estimating the labor market impact of voluntary military service using social security data on military applicants. *Econometrica*, 66:249–288.

Angrist, J. D. (2022). Empirical strategies in economics: Illuminating the path from cause to effect. *Econometrica*, 90:2509–2539.

Angrist, J. D. and Evans, W. N. (1998). Children and their parents’ labor supply: Evidence from exogenous variation in family size. *American Economic Review*, 88:450–477.

Angrist, J. D. and Imbens, G. W. (1995). Two-stage least squares estimation of average causal effects in models with variable treatment intensity. *Journal of the American Statistical Association*, 90:431–442.

Angrist, J. D., Imbens, G. W., and Rubin, D. B. (1996). Identification of causal effects using instrumental variables (with discussion). *Journal of the American Statistical Association*, 91:444–455.

Angrist, J. D. and Krueger, A. B. (1991). Does compulsory school attendance affect schooling and earnings? *Quarterly Journal of Economics*, 106:979–1014.

Angrist, J. D. and Pischke, J.-S. (2008). *Mostly Harmless Econometrics: An Empiricist's Companion*. Princeton: Princeton University Press.

Angrist, J. D. and Pischke, J.-S. (2014). *Mastering'Metrics: The Path from Cause to Effect*. Princeton: Princeton University Press.

Aronow, P. M., Green, D. P., and Lee, D. K. K. (2014). Sharp bounds on the variance in randomized experiments. *Annals of Statistics*, 42:850–871.

Asher, S. and Novosad, P. (2020). Rural roads and local economic development. *American Economic Review*, 110:797–823.

Baker, S. G. and Lindeman, K. S. (1994). The paired availability design: a proposal for evaluating epidural analgesia during labor. *Statistics in Medicine*, 13:2269–2278.

Balke, A. and Pearl, J. (1997). Bounds on treatment effects from studies with imperfect compliance. *Journal of the American Statistical Association*, 92:1171–1176.

Ball, S., Bogatz, G., Rubin, D., and Beaton, A. (1973). Reading with television: An evaluation of the electric company. a report to the children’s television workshop. volumes 1 and 2.

Bang, H. and Robins, J. M. (2005). Doubly robust estimation in missing data and causal inference models. *Biometrics*, 61:962–973.Barnard, G. A. (1947). Significance tests for 2 × 2 tables. *Biometrika*, 34:123–138.

Baron, R. M. and Kenny, D. A. (1986). The moderator-mediator variable distinction in social psychological research: Conceptual, strategic, and statistical considerations. *Journal of Personality and Social Psychology*, 51:1173–1182.

Basmann, R. L. (1957). A generalized classical method of linear estimation of coefficients in a structural equation. *Econometrica*, 25:77–83.

Bazzano, L. A., He, J., Muntner, P., Vupputuri, S., and Whelton, P. K. (2003). Relationship between cigarette smoking and novel risk factors for cardiovascular disease in the United States. *Annals of Internal Medicine*, 138:891–897.

Berk, R., Pitkin, E., Brown, L., Buja, A., George, E., and Zhao, L. (2013). Covariance adjustments for the analysis of randomized field experiments. *Evaluation Review*, 37:170–196.

Bertrand, M. and Mullainathan, S. (2004). Are Emily and Greg more employable than Lakisha and Jamal? A field experiment on labor market discrimination. *American Economic Review*, 94:991–1013.

Bickel, P. J., Hammel, E. A., and O’Connell, J. W. (1975). Sex bias in graduate admissions: Data from Berkeley. *Science*, 187:398–404.

Bickel, P. J., Klaassen, C. A. J., Ritov, Y., and Wellner, J. A. (1993). *Efficient and Adaptive Estimation for Semiparametric Models*. Baltimore: Johns Hopkins University Press.

Bind, M.-A. C. and Rubin, D. B. (2020). When possible, report a fisher-exact p value and display its underlying null randomization distribution. *Proceedings of the National Academy of Sciences of the United States of America*, 117:19151–19158.

Blackwell, M. (2013). A framework for dynamic causal inference in political science. *American Journal of Political Science*, 57:504–520.

Bloniarz, A., Liu, H., Zhang, C. H., Sekhon, J., and Yu, B. (2016). Lasso adjustments of treatment effect estimates in randomized experiments. *Proceedings of the National Academy of Sciences of the United States of America*, 113:7383–7390.

Bloom, H. S. (1984). Accounting for no-shows in experimental evaluation designs. *Evaluation Review*, 8:225–246.

Bor, J., Moscoe, E., Mutevedzi, P., Newell, M.-L., and Bärnighausen, T. (2014). Regression discontinuity designs in epidemiology: causal inference without randomized trials. *Epidemiology*, 25:729.Bowden, J., Davey Smith, G., and Burgess, S. (2015). Mendelian randomization with invalid instruments: effect estimation and bias detection through Egger regression. *International Journal of Epidemiology*, 44:512–525.

Bowden, J., Spiller, W., Del Greco M, F., Sheehan, N., Thompson, J., Minelli, C., and Davey Smith, G. (2018). Improving the visualization, interpretation and analysis of two-sample summary data mendelian randomization via the radial plot and radial regression. *International Journal of Epidemiology*, 47:1264–1278.

Box, G. E. P. (1979). Robustness in the strategy of scientific model building. In Launer, R. L. and Wilkinson, G. N., editors, *Robustness in Statistics*, pages 201–236. New York: Academic Press, Inc.

Box, G. E. P., Hunter, W. H., and Hunter, S. (1978). *Statistics for Experimentalers: An Introduction to Design, Data Analysis, and Model Building*. New York: John Wiley and Sons.

Bradford Hill, A. (1965). The environment and disease: association or causation? *Proceedings of the Royal Society of Medicine*, 58:295–300.

Bradford Hill, A. (2020). The environment and disease: association or causation? (with discussion). *Observational Studies*, 6:1–65.

Bruhn, M. and McKenzie, D. (2009). In pursuit of balance: Randomization in practice in development field experiments. *American Economic Journal: Applied Economics*, 1:200–232.

Brumback, B. A. (2022). *Fundamentals of Causal Inference: With R*. New York: Chapman & Hall.

Butler, C. C. (1969). A test for symmetry using the sample distribution function. *Annals of Mathematical Statistics*, 40:2209–2210.

Cao, W., Tsiatis, A. A., and Davidian, M. (2009). Improving efficiency and robustness of the doubly robust estimator for a population mean with incomplete data. *Biometrika*, 96:723–734.

Card, D. (1993). Using geographic variation in college proximity to estimate the return to schooling. Technical report, National Bureau of Economic Research.

Carpenter, C. and Dobkin, C. (2009). The effect of alcohol consumption on mortality: regression discontinuity evidence from the minimum drinking age. *American Economic Journal: Applied Economics*, 1:164–182.

Cattaneo, M. D. (2010). Efficient semiparametric estimation of multi-valued treatment effects under ignorability. *Journal of Econometrics*, 155:138–154.Cattaneo, M. D., Frandsen, B. R., and Titiunik, R. (2015). Randomization inference in the regression discontinuity design: An application to party advantages in the US Senate. *Journal of Causal Inference*, 3:1–24.

Chan, K. C. G., Yam, S. C. P., and Zhang, Z. (2016). Globally efficient non-parametric inference of average treatment effects by empirical balancing calibration weighting. *Journal of the Royal Statistical Society: Series B (Statistical Methodology)*, 78:673–700.

Charig, C. R., Webb, D. R., Payne, S. R., and Wickham, J. E. (1986). Comparison of treatment of renal calculi by open surgery, percutaneous nephrolithotomy, and extracorporeal shockwave lithotripsy. *British Medical Journal*, 292:879–882.

Chen, H., Geng, Z., and Jia, J. (2007). Criteria for surrogate end points. *Journal of the Royal Statistical Society: Series B (Statistical Methodology)*, 69:919–932.

Cheng, J. and Small, D. S. (2006). Bounds on causal effects in three-arm trials with non-compliance. *Journal of the Royal Statistical Society: Series B (Statistical Methodology)*, 68:815–836.

Chernozhukov, V., Chetverikov, D., Demirer, M., Duflo, E., Hansen, C., Newey, W., and Robins, J. (2018). Double/debiased machine learning for treatment and structural parameters. *Econometrics Journal*, 21:C1–C68.

Chong, A., Cohen, I., Field, E., Nakasone, E., and Torero, M. (2016). Iron deficiency and schooling attainment in peru. *American Economic Journal: Applied Economics*, 8:222–55.

Chung, E. and Romano, J. (2013). Exact and asymptotically robust permutation tests. *Annals of Statistics*, 41:484–507.

Cochran, W. G. (1938). The omission or addition of an independent variate in multiple linear regression. *Supplement to the Journal of the Royal Statistical Society*, 5:171–176.

Cochran, W. G. (1953). *Sampling Techniques*. New York: Wiley.

Cochran, W. G. (1957). Analysis of covariance: its nature and uses. *Biometrics*, 13:261–281.

Cochran, W. G. (1965). The planning of observational studies of human populations (with discussion). *Journal of the Royal Statistical Society: Series A (General)*, 128:234–266.

Cochran, W. G. (1968). The effectiveness of adjustment by subclassification in removing bias in observational studies. *Biometrics*, 24:295–313.Cochran, W. G. (2015). Observational studies. *Observational Studies*, 1:126–136.

Cochran, W. G. and Rubin, D. B. (1973). Controlling bias in observational studies: A review. *Sankhyā*, 35:417–446.

Cornfield, J., Haenszel, W., Hammond, E. C., Lilienfeld, A. M., Shimkin, M. B., and Wynder, E. L. (1959). Smoking and lung cancer: recent evidence and a discussion of some questions. *Journal of the National Cancer Institute*, 22:173–203.

Cox, D. R. (1982). Randomization and concomitant variables in the design of experiments. In G. Kallianpur, P. R. K. and Ghosh, J. K., editors, *Statistics and Probability: Essays in Honor of C. R. Rao*, pages 197–202. North-Holland, Amsterdam.

Cox, D. R. (2007). On a generalization of a result of W. G. Cochran. *Biometrika*, 94:755–759.

Crump, R. K., Hotz, V. J., Imbens, G. W., and Mitnik, O. A. (2009). Dealing with limited overlap in estimation of average treatment effects. *Biometrika*, 96:187–199.

Cunningham, S. (2021). *Causal Inference: The Mixtape*. New Haven: Yale University Press.

Cuzick, J., Edwards, R., and Segnan, N. (1997). Adjusting for non-compliance and contamination in randomized clinical trials. *Statistics in Medicine*, 16:1017–1029.

D'Amour, A., Ding, P., Feller, A., Lei, L., and Sekhon, J. (2021). Overlap in observational studies with high-dimensional covariates. *Journal of Econometrics*, 221:644–654.

Dasgupta, T., Pillai, N. S., and Rubin, D. B. (2015). Causal inference from $2^K$ factorial designs by using potential outcomes. *Journal of the Royal Statistical Society: Series B (Statistical Methodology)*, 77:727–753.

Davey Smith, G. and Ebrahim, S. (2003). “Mendelian randomization”: can genetic epidemiology contribute to understanding environmental determinants of disease? *International Journal of Epidemiology*, 32:1–22.

Davison, A. C. and Hinkley, D. V. (1997). *Bootstrap Methods and Their Application*. Cambridge: Cambridge University Press.

Dawid, A. P. (1979). Conditional independence in statistical theory. *Journal of the Royal Statistical Society: Series B (Methodological)*, 41:1–15.

Dawid, A. P. (2000). Causal inference without counterfactuals (with discussion). *Journal of the American Statistical Association*, 95:407–424.Dehejia, R. H. and Wahba, S. (1999). Causal effects in nonexperimental studies: Reevaluating the evaluation of training programs. *Journal of the American statistical Association*, 94:1053–1062.

Ding, P. (2016). A paradox from randomization-based causal inference (with discussion). *Statistical Science*, 32:331–345.

Ding, P. (2021). The Frisch–Waugh–Lovell theorem for standard errors. *Statistics and Probability Letters*, 168:108945.

Ding, P. and Dasgupta, T. (2016). A potential tale of two by two tables from completely randomized experiments. *Journal of American Statistical Association*, 111:157–168.

Ding, P. and Dasgupta, T. (2017). A randomization-based perspective on analysis of variance: a test statistic robust to treatment effect heterogeneity. *Biometrika*, 105:45–56.

Ding, P., Feller, A., and Miratrix, L. (2016). Randomization inference for treatment effect variation. *Journal of the Royal Statistical Society: Series B (Statistical Methodology)*, 78:655–671.

Ding, P., Feller, A., and Miratrix, L. (2019). Decomposing treatment effect variation. *Journal of the American Statistical Association*, 114:304–317.

Ding, P., Geng, Z., Yan, W., and Zhou, X.-H. (2011). Identifiability and estimation of causal effects by principal stratification with outcomes truncated by death. *Journal of the American Statistical Association*, 106:1578–1591.

Ding, P. and Li, F. (2018). Causal inference: A missing data perspective. *Statistical Science*, 33:214–237.

Ding, P., Li, X., and Miratrix, L. W. (2017a). Bridging finite and super population causal inference. *Journal of Causal Inference*, 5:20160027.

Ding, P. and Lu, J. (2017). Principal stratification analysis using principal scores. *Journal of the Royal Statistical Society: Series B (Statistical Methodology)*, 79:757–777.

Ding, P. and Miratrix, L. W. (2015). To adjust or not to adjust? Sensitivity analysis of M-bias and butterfly-bias. *Journal of Causal Inference*, 3:41–57.

Ding, P. and VanderWeele, T. J. (2014). Generalized Cornfield conditions for the risk difference. *Biometrika*, 101:971–977.

Ding, P. and VanderWeele, T. J. (2016). Sensitivity analysis without assumptions. *Epidemiology*, 27:368–377.

Ding, P. and VanderWeele, T. J. (2016). Sharp sensitivity bounds for mediation under unmeasured mediator-outcome confounding. *Biometrika*, 103:483–490.Ding, P., VanderWeele, T. J., and Robins, J. M. (2017b). Instrumental vari-ables as bias amplifiers with general outcome and confounding. *Biometrika*, 104:291–302.

Doll, R. and Hill, A. B. (1950). Smoking and carcinoma of the lung. *British Medical Journal*, 2:739.

Dorn, H. F. (1953). Philosophy of inferences from retrospective studies. *American Journal of Public Health and the Nations Health*, 43:677–683.

Durrett, R. (2019). *Probability: Theory and Examples*. Cambridge: Cambridge University Press.

Efron, B. (1979). Bootstrap methods: Another look at the jackknife. *The Annals of Statistics*, 7:1–26.

Efron, B. and Feldman, D. (1991). Compliance as an explanatory variable in clinical trials (with discussion). *Journal of the American Statistical Association*, 86:9–17.

Eicker, F. (1967). Limit theorems for regressions with unequal and dependent errors. In *Proceedings of the Fifth Berkeley Symposium on Mathematical Statistics and Probability*, volume 1, pages 59–82. Berkeley, CA: University of California Press.

Fan, J. and Gijbels, I. (1996). *Local Polynomial Modelling and Its Applications*. New York: Chapman and Hall/CRC.

Fieller, E. C. (1954). Some problems in interval estimation. *Journal of the Royal Statistical Society: Series B (Methodological)*, 16:175–185.

Firth, D. and Bennett, K. E. (1998). Robust models in probability sampling (with discussion). *Journal of the Royal Statistical Society: Series B (Statistical Methodology)*, 60:3–21.

Fisher, R. A. (1925). *Statistical Methods for Research Workers*. Edinburgh by Oliver and Boyd, 1st edition.

Fisher, R. A. (1935). *The Design of Experiments*. Edinburgh, London: Oliver and Boyd, 1st edition.

Fisher, R. A. (1957). Dangers of cigarette smoking [letter]. *British Medical Journal*, 2:297–298.

Fogarty, C. B. (2018a). On mitigating the analytical limitations of finely stratified experiments. *Journal of the Royal Statistical Society. Series B (Statistical Methodology)*, 80:1035–1056.

Fogarty, C. B. (2018b). Regression assisted inference for the average treatment effect in paired experiments. *Biometrika*, 105:994–1000.Follmann, D. A. (2000). On the effect of treatment among would-be treatment compliers: An analysis of the multiple risk factor intervention trial. *Journal of the American Statistical Association*, 95:1101–1109.

Forastiere, L., Mattei, A., and Ding, P. (2018). Principal ignorability in mediation analysis: through and beyond sequential ignorability. *Biometrika*, 105:979–986.

Frangakis, C. E. and Rubin, D. B. (2002). Principal stratification in causal inference. *Biometrics*, 58:21–29.

Freedman, D. A. (2008a). On regression adjustments in experiments with several treatments. *Annals of Applied Statistics*, 2:176–196.

Freedman, D. A. (2008b). On regression adjustments to experimental data. *Advances in Applied Mathematics*, 40:180–193.

Freedman, D. A. (2008c). Randomization does not justify logistic regression. *Statistical Science*, 23:237–249.

Freedman, D. A. and Berk, R. A. (2008). Weighting regressions by propensity scores. *Evaluation Review*, 32:392–409.

Frumento, P., Mealli, F., Pacini, B., and Rubin, D. B. (2012). Evaluating the effect of training on wages in the presence of noncompliance, nonemployment, and missing outcome data. *Journal of the American Statistical Association*, 107:450–466.

Funk, M. J., Westreich, D., Wiesen, C., Stürmer, T., Brookhart, M. A., and Davidian, M. (2011). Doubly robust estimation of causal effects. *American Journal of Epidemiology*, 173:761–767.

Gastwirth, J. L., KRIEGER, A. M., and ROSENBAUM, P. R. (1998). Cornfield's inequality. In Armitage, P. and Colton, T., editors, *Encyclopedia of Biostatistics*. New York: Wiley.

Gerber, A. S. and Green, D. P. (2012). *Field Experiments: Design, Analysis, and Interpretation*. WW Norton.

Gerber, A. S., Green, D. P., and Larimer, C. W. (2008). Social pressure and voter turnout: Evidence from a large-scale field experiment. *American Political Science Review*, 102:33–48.

Gilbert, P. B. and Hudgens, M. G. (2008). Evaluating candidate principal surrogate endpoints. *Biometrics*, 64:1146–1154.

Gould, A. L. (1998). Multi-centre trial analysis revisited. *Statistics in Medicine*, 17:1779–1797.

Greevy, R., Lu, B., Silber, J. H., and Rosenbaum, P. (2004). Optimal multi-variate matching before randomization. *Biostatistics*, 5:263–275.Guo, K. and Basse, G. (2023). The generalized Oaxaca-Blinder estimator. *Journal of American Statistical Association*, 118:524-536.

Guo, K. and Rothenhäusler, D. (2022). On the statistical role of inexact matching in observational studies. *Biometrika*.

Hahn, J. (1998). On the role of the propensity score in efficient semiparametric estimation of average treatment effects. *Econometrica*, 66:315-331.

Hahn, J., Todd, P., and Van der Klaauw, W. (2001). Identification and estimation of treatment effects with a regression-discontinuity design. *Econometrica*, 69:201-209.

Hahn, P. R., Murray, J. S., and Carvalho, C. M. (2020). Bayesian regression tree models for causal inference: regularization, confounding, and heterogeneous effects. *Bayesian Analysis*, 15:965-1056.

Hainmueller, J. (2012). Entropy balancing for causal effects: A multivariate reweighting method to produce balanced samples in observational studies. *Political Analysis*, 20:25-46.

Hájek, J. (1960). Limiting distributions in simple random sampling from a finite population. *Publications of the Mathematics Institute of the Hungarian Academy of Science*, 5:361-74.

Hájek, J. (1971). Comment on "an essay on the logical foundations of survey sampling, part one". *The foundations of survey sampling*, 236.

Hammond, E. C. and Horn, D. (1958). Smoking and death rates: report on forty four months of follow-up of 187,783 men. *Journal of the American Medical Association*, 166:1159-1172, 1294-1308.

Hansen, L. P. (1982). Large sample properties of generalized method of moments estimators. *Econometrica*, 50:1029-1054.

Hartley, H. O., Rao, J. N. K., and Kiefer, G. (1969). Variance estimation with one unit per stratum. *Journal of the American Statistical Association*, 64:841-851.

Hausman, J. A. (1978). Specification tests in econometrics. *Econometrica*, 46:1251-1271.

Hearst, N., Newman, T. B., and Hulley, S. B. (1986). Delayed effects of the military draft on mortality. *New England Journal of Medicine*, 314:620-624.

Heckman, J. and Navarro-Lozano, S. (2004). Using matching, instrumental variables, and control functions to estimate economic choice models. *Review of Economics and Statistics*, 86:30-57.

Heckman, J. J. (1979). Sample selection bias as a specification error. *Econometrica*, 47:153-161.Hennessy, J., Dasgupta, T., Miratrix, L., Pattanayak, C., and Sarkar, P. (2016). A conditional randomization test to account for covariate imbalance in randomized experiments. *Journal of Causal Inference*, 4:61–80.

Hernán, M. Á., Brumback, B., and Robins, J. M. (2000). Marginal structural models to estimate the causal effect of zidovudine on the survival of hiv-positive men. *Epidemiology*, 11:561–570.

Hernán, M. A. and Robins, J. M. (2020). *Causal Inference: What If*. Boca Raton: Chapman & Hall/CRC.

Hill, J., Waldfogel, J., and Brooks-Gunn, J. (2002). Differential effects of high-quality child care. *Journal of Policy Analysis and Management*, 21:601–627.

Hill, J. L. (2011). Bayesian nonparametric modeling for causal inference. *Journal of Computational and Graphical Statistics*, 20:217–240.

Hirano, K. and Imbens, G. W. (2001). Estimation of causal effects using propensity score weighting: An application to data on right heart catheterization. *Health Services and Outcomes Research Methodology*, 2:259–278.

Hirano, K., Imbens, G. W., Rubin, D. B., and Zhou, X. H. (2000). Assessing the effect of an influenza vaccine in an encouragement design. *Biostatistics*, 1:69–88.

Ho, D. E., Imai, K., King, G., and Stuart, E. A. (2007). Matching as nonparametric preprocessing for reducing model dependence in parametric causal inference. *Political Analysis*, 15:199–236.

Ho, D. E., Imai, K., King, G., and Stuart, E. A. (2011). Matchit: nonparametric preprocessing for parametric causal inference. *Journal of Statistical Software*, 42:1–28.

Hodges, J. L. and Lehmann, E. L. (1962). Rank methods for combination of independent experiments in analysis of variance. *Annals of Mathematical Statistics*, 33:482–497.

Holland, P. W. (1986). Statistics and causal inference (with discussion). *Journal of the American statistical Association*, 81:945–960.

Hong, G. and Raudenbush, S. W. (2008). Causal inference for time-varying instructional treatments. *Journal of Educational and Behavioral Statistics*, 33:333–362.

Horvitz, D. G. and Thompson, D. J. (1952). A generalization of sampling without replacement from a finite universe. *Journal of the American statistical Association*, 47:663–685.

Huber, M. (2023). *Causal analysis: Impact evaluation and Causal Machine Learning with applications in R*. Cambridge: MIT Press.Huber, P. J. (1967). The behavior of maximum likelihood estimates under nonstandard conditions. In Cam, L. M. L. and Neyman, J., editors, *Proceedings of the Fifth Berkeley Symposium on Mathematical Statistics and Probability*, volume 1, pages 221-233. Berkeley, California: University of California Press.

Hudgens, M. G. and Halloran, M. E. (2008). Toward causal inference with interference. *Journal of the American Statistical Association*, 103:832-842.

Huntington-Klein, N. (2022). *The effect: An introduction to research design and causality*. New York: Chapman & Hall.

Hyman, H. H. (1955). *Survey Design and Analysis: Principles, Cases, and Procedures*. Glencoe, IL: Free Press.

Imai, K. (2008a). Sharp bounds on the causal effects in randomized experiments with “truncation-by-death”. *Statistics and Probability Letters*, 78:144-149.

Imai, K. (2008b). Variance identification and efficiency analysis in randomized experiments under the matched-pair design. *Statistics in Medicine*, 27:4857-4873.

Imai, K., Keele, L., and Yamamoto, T. (2010). Identification, inference and sensitivity analysis for causal mediation effects. *Statistical Science*, 25:51-71.

Imai, K. and Van Dyk, D. A. (2004). Causal inference with general treatment regimes: Generalizing the propensity score. *Journal of the American Statistical Association*, 99:854-866.

Imbens, G. (2020). Potential outcome and directed acyclic graph approaches to causality: Relevance for empirical practice in economics. *Journal of Economic Literature*, 58:1129-1179.

Imbens, G. W. (2003). Sensitivity to exogeneity assumptions in program evaluation. *American Economic Review*, 93:126-132.

Imbens, G. W. (2004). Nonparametric estimation of average treatment effects under exogeneity: A review. *Review of Economics and Statistics*, 86:4-29.

Imbens, G. W. (2014). Instrumental variables: An econometrician's perspective. *Statistical Science*, 29:323-358.

Imbens, G. W. (2015). Matching methods in practice: Three examples. *Journal of Human Resources*, 50:373-419.

Imbens, G. W. and Angrist, J. D. (1994). Identification and estimation of local average treatment effects. *Econometrica*, 62:467-475.Imbens, G. W. and Lemieux, T. (2008). Regression discontinuity designs: A guide to practice. *Journal of Econometrics*, 142:615–635.

Imbens, G. W. and Manski, C. F. (2004). Confidence intervals for partially identified parameters. *Econometrica*, 72:1845–1857.

Imbens, G. W. and Rubin, D. B. (1997). Estimating outcome distributions for compliers in instrumental variables models. *Review of Economic Studies*, 64:555–574.

Imbens, G. W. and Rubin, D. B. (2015). *Causal Inference for Statistics, Social, and Biomedical Sciences: An Introduction*. Cambridge: Cambridge University Press.

Investigators, I. T. et al. (2014). Endovascular or open repair strategy for ruptured abdominal aortic aneurysm: 30 day outcomes from improve randomised trial. *British Medical Journal*, 348:f7661.

Ioannidis, J. P. A., Tan, Y. J., and Blum, M. R. (2019). Limitations and misinterpretations of E-values for sensitivity analyses of observational studies. *Annals of Internal Medicine*, 170:108–111.

Jackson, L. A., Jackson, M. L., Nelson, J. C., Neuzil, K. M., and Weiss, N. S. (2006). Evidence of bias in estimates of influenza vaccine effectiveness in seniors. *International Journal of Epidemiology*, 35:337–344.

Janssen, A. (1997). Studentized permutation tests for non-iid hypotheses and the generalized Behrens-Fisher problem. *Statistics and Probability Letters*, 36:9–21.

Jiang, Z. and Ding, P. (2020). Measurement errors in the binary instrumental variable model. *Biometrika*, 107:238–245.

Jiang, Z. and Ding, P. (2021). Identification of causal effects within principal strata using auxiliary variables. *Statistical Science*, 36:493–508.

Jiang, Z., Ding, P., and Geng, Z. (2016). Principal causal effect identification and surrogate end point evaluation by multiple trials. *Journal of the Royal Statistical Society: Series B (Statistical Methodology)*, 78:829–848.

Jiang, Z., Yang, S., and Ding, P. (2022). Multiply robust estimation of causal effects under principal ignorability. *Journal of the Royal Statistical Society - Series B (Statistical Methodology)*, 84:1423–1445.

Jin, H. and Rubin, D. B. (2008). Principal stratification for causal inference with extended partial compliance. *Journal of the American Statistical Association*, 103:101–111.

Jo, B. and Stuart, E. A. (2009). On the use of propensity scores in principal causal effect estimation. *Statistics in Medicine*, 28:2857–2875.Jo, B., Stuart, E. A., MacKinnon, D. P., and Vinokur, A. D. (2011). The use of propensity scores in mediation analysis. *Multivariate Behavioral Research*, 46:425–452.

Judd, C. M. and Kenny, D. A. (1981). Process analysis estimating mediation in treatment evaluations. *Evaluation Review*, 5:602–619.

Kang, J. D. Y. and Schafer, J. L. (2007). Demystifying double robustness: A comparison of alternative strategies for estimating a population mean from incomplete data. *Statistical Science*, 22:523–539.

Katan, M. B. (1986). Apoupoprotein E isoforms, serum cholesterol, and cancer. *Lancet*, 327:507–508.

King, G. and Zeng, L. (2006). The dangers of extreme counterfactuals. *Political Analysis*, 14:131–159.

Kitagawa, T. (2015). A test for instrument validity. *Econometrica*, 83:2043–2063.

Koenker, R. and Xiao, Z. (2002). Inference on the quantile regression process. *Econometrica*, 70:1583–1612.

Künzel, S. R., Sekhon, J. S., Bickel, P. J., and Yu, B. (2019). Metalearners for estimating heterogeneous treatment effects using machine learning. *Proceedings of the National Academy of Sciences of the United States of America*, 116:4156–4165.

Kurth, T., Walker, A. M., Glynn, R. J., Chan, K. A., Gaziano, J. M., Berger, K., and Robins, J. M. (2005). Results of multivariable logistic regression, propensity matching, propensity adjustment, and propensity-based weighting under conditions of nonuniform effect. *American Journal of Epidemiology*, 163:262–270.

LaLonde, R. J. (1986). Evaluating the econometric evaluations of training programs with experimental data. *American Economic Review*, 76:604–620.

Leamer, E. (1978). *Specification Searches: Ad Hoc Inference with Nonexperimental Data*. John Wiley and Sons.

Lee, D. S. (2008). Randomized experiments from non-random selection in US House elections. *Journal of Econometrics*, 142:675–697.

Lee, D. S. (2009). Training, wages, and sample selection: Estimating sharp bounds on treatment effects. *Review of Economic Studies*, 76:1071–1102.

Lee, D. S. and Lemieux, T. (2010). Regression discontinuity designs in economics. *Journal of Economic Literature*, 48:281–355.

Lee, M.-J. (2018). Simple least squares estimator for treatment effects using propensity score residuals. *Biometrika*, 105:149–164.Lee, W.-C. (2011). Bounding the bias of unmeasured factors with confounding and effect-modifying potentials. *Statistics in Medicine*, 30:1007–1017.

Lehmann, E. L. (1975). *Nonparametrics: Statistical Methods Based on Ranks*. California: Holden-Day, Inc.

Lei, L. and Ding, P. (2021). Regression adjustment in completely randomized experiments with a diverging number of covariates. *Biometrika*, 108:815–828.

Lewis, D. (1973). Causation. *Journal of Philosophy*, 70:556–567.

Li, F., Ding, P., and Mealli, F. (2023). Bayesian causal inference: a critical review. *Philosophical Transactions of the Royal Society A*, 381:20220153.

Li, F., Mattei, A., and Mealli, F. (2015). Evaluating the causal effect of university grants on student dropout: evidence from a regression discontinuity design using principal stratification. *Annals of Applied Statistics*, 9:1906–1931.

Li, F., Morgan, K. L., and Zaslavsky, A. M. (2018a). Balancing covariates via propensity score weighting. *Journal of the American Statistical Association*, 113:390–400.

Li, F., Thomas, L. E., and Li, F. (2019). Addressing extreme propensity scores via the overlap weights. *American Journal of Epidemiology*, 188:250–257.

Li, X. and Ding, P. (2016). Exact confidence intervals for the average causal effect on a binary outcome. *Statistics in Medicine*, 35:957–960.

Li, X. and Ding, P. (2017). General forms of finite population central limit theorems with applications to causal inference. *Journal of the American Statistical Association*, 112:1759–1769.

Li, X. and Ding, P. (2020). Rerandomization and regression adjustment. *Journal of the Royal Statistical Society, Series B (Statistical Methodology)*, 82:241–268.

Li, X., Ding, P., and Rubin, D. B. (2018b). Asymptotic theory of rerandomization in treatment-control experiments. *Proceedings of the National Academy of Sciences of the United States of America*, 115:9157–9162.

Lin, W. (2013). Agnostic notes on regression adjustments to experimental data: Reexamining Freedman’s critique. *Annals of Applied Statistics*, 7:295–318.

Lin, Z., Ding, P., and Han, F. (2023). Estimation based on nearest neighbor matching: from density ratio to average treatment effect. *Econometrica*.Lind, J. (1753). A treatise of the scurvy. *Three Parts. Containing an Inquiry into the Nature, Causes and Cure, of that Disease. Together with a Critical and Chronological View of what has been Published on the Subject*.

Lipsitch, M., Tchetgen Tchetgen, E., and Cohen, T. (2010). Negative controls: a tool for detecting confounding and bias in observational studies. *Epidemiology*, 21:383-388.

Little, R. and An, H. (2004). Robust likelihood-based analysis of multivariate data with missing values. *Statistica Sinica*, 14:949-968.

Liu, H. and Yang, Y. (2020). Regression-adjusted average treatment effect estimates in stratified randomized experiments. *Biometrika*, 107:935-948.

Long, J. S. and Ervin, L. H. (2000). Using heteroscedasticity consistent standard errors in the linear regression model. *American Statistician*, 54:217-224.

Lu, S. and Ding, P. (2023). Flexible sensitivity analysis for causal inference in observational studies subject to unmeasured confounding. https://arxiv.org/abs/2305.17643.

Lumley, T., Shaw, P. A., and Dai, J. Y. (2011). Connections between survey calibration estimators and semiparametric models for incomplete data. *International Statistical Review*, 79:200-220.

Lunceford, J. K. and Davidian, M. (2004). Stratification and weighting via the propensity score in estimation of causal treatment effects: a comparative study. *Statistics in Medicine*, 23:2937-2960.

Luo, X., Dasgupta, T., Xie, M., and Liu, R. Y. (2021). Leveraging the fisher randomization test using confidence distributions: Inference, combination and fusion learning. *Journal of the Royal Statistical Society: Series B (Statistical Methodology)*, 83:777-797.

Manski, C. F. (1990). Nonparametric bounds on treatment effects. *American Economic Review*, 2:319-323.

Manski, C. F. (2003). *Partial Identification of Probability Distributions*. New York: Springer.

Mattei, A., Li, F., and Mealli, F. (2013). Exploiting multiple outcomes in bayesian principal stratification analysis with application to the evaluation of a job training program. *Annals of Applied Statistics*, 7:2336-2360.

McCrary, J. (2008). Manipulation of the running variable in the regression discontinuity design: A density test. *Journal of Econometrics*, 142:698-714.

McDonald, C. J., Hui, S. L., and Tierney, W. M. (1992). Effects of computer reminders for influenza vaccination on morbidity during influenza epidemics. *MD Computing: Computers in Medical Practice*, 9:304-312.McGrath, S., Young, J. G., and Hernán, M. A. (2021). Revisiting the g-null paradox. *Epidemiology*, 33:114–120.

Mealli, F. and Pacini, B. (2013). Using secondary outcomes to sharpen inference in randomized experiments with noncompliance. *Journal of the American Statistical Association*, 108:1120–1131.

Meinert, C. L., Knatterud, G. L., Prout, T. E., and Klimt, C. R. (1970). A study of the effects of hypoglycemic agents on vascular complications in patients with adult-onset diabetes. ii. mortality results. *Diabetes*, 19:Suppl-789.

Mercatanti, A. and Li, F. (2014). Do debit cards increase household spending? evidence from a semiparametric causal analysis of a survey. *Annals of Applied Statistics*, 8:2485–2508.

Ming, K. and Rosenbaum, P. R. (2000). Substantial gains in bias reduction from matching with a variable number of controls. *Biometrics*, 56:118–124.

Ming, K. and Rosenbaum, P. R. (2001). A note on optimal matching with variable controls using the assignment algorithm. *Journal of Computational and Graphical Statistics*, 10:455–463.

Miratrix, L. W., Sekhon, J. S., Theodoridis, A. G., and Campos, L. F. (2018). Worth weighting? how to think about and use weights in survey experiments. *Political Analysis*, 26:275–291.

Miratrix, L. W., Sekhon, J. S., and Yu, B. (2013). Adjusting treatment effect estimates by post-stratification in randomized experiments. *Journal of the Royal Statistical Society: Series B (Statistical Methodology)*, 75:369–396.

Morgan, K. L. and Rubin, D. B. (2012). Rerandomization to improve covariate balance in experiments. *Annals of Statistics*, 40:1263–1282.

Morgan, S. L. and Winship, C. (2015). *Counterfactuals and Causal Inference*. Cambridge: Cambridge University Press.

Mukerjee, R., Dasgupta, T., and Rubin, D. B. (2018). Using standard tools from finite population sampling to improve causal inference for complex experiments. *Journal of the American Statistical Association*, 113:868–881.

Naimi, A. I., Cole, S. R., and Kennedy, E. H. (2017). An introduction to g methods. *International Journal of Epidemiology*, 46:756–762.

Negi, A. and Wooldridge, J. M. (2021). Revisiting regression adjustment in experiments with heterogeneous treatment effects. *Econometric Reviews*, 40:504–534.

Neyman, J. (1923). On the application of probability theory to agricultural experiments. essay on principles (with discussion). section 9 (translated). reprinted ed. *Statistical Science*, 5:465–472.Neyman, J. (1934). On the two different aspects of the representative method: the method of stratified sampling and the method of purposive selection (with discussion). *Journal of the Royal Statistical Society*, 97:558–625.

Neyman, J. (1935). Statistical problems in agricultural experimentation (with discussion). *Supplement to the Journal of the Royal Statistical Society*, 2:107–180.

Nguyen, T. Q., Schmid, I., Ogburn, E. L., and Stuart, E. A. (2021). Clarifying causal mediation analysis for the applied researcher: Effect identification via three assumptions and five potential outcomes. *Psychological Methods*, 26:255–271.

Otsu, T. and Rai, Y. (2017). Bootstrap inference of matching estimators for average treatment effects. *Journal of the American Statistical Association*, 112:1720–1732.

Pearl, J. (1995). Causal diagrams for empirical research (with discussion). *Biometrika*, 82:669–688.

Pearl, J. (2000). *Causality: Models, Reasoning and Inference*. Cambridge: Cambridge University Press.

Pearl, J. (2001). Direct and indirect effects. In Breese, J. S. and Koller, D., editors, *Proceedings of the 17th Conference on Uncertainty in Artificial Intelligence*, pages 411–420. pp. 411–420. San Francisco: Morgan Kaufmann Publishers Inc.

Pearl, J. (2010a). On a class of bias-amplifying variables that endanger effect estimates. In Grunwald, P. and Spirtes, P., editors, *Proceedings of the Twenty-Sixth Conference on Uncertainty in Artificial Intelligence (UAI 2010)*, Corvallis, OR: 425–432. Association for Uncertainty in Artificial Intelligence.

Pearl, J. (2010b). On the consistency rule in causal inference: axiom, definition, assumption, or theorem? *Epidemiology*, 21:872–875.

Pearl, J. (2011). Invited commentary: Understanding bias amplification. *American Journal of Epidemiology*, 174:1223–1227.

Pearl, J. (2018). Does obesity shorten life? Or is it the soda? On non-manipulable causes. *Journal of Causal Inference*, 6:20182001.

Pearl, J. and Bareinboim, E. (2014). External validity: From do-calculus to transportability across populations. *Statistical Science*, 29:579–595.

Pearl, J. and Mackenzie, D. (2018). *The Book of Why: The New Science of Cause and Effect*. Basic Books.Permutt, T. and Hebel, J. R. (1989). Simultaneous-equation estimation in a clinical trial of the effect of smoking on birth weight. *Biometrics*, 45:619-622.

Phipson, B. and Smyth, G. K. (2010). Permutation p-values should never be zero: calculating exact p-values when permutations are randomly drawn. *Statistical Applications in Genetics and Molecular Biology*, 9:Article39.

Pimentel, S. D., Yoon, F., and Keele, L. (2015). Variable-ratio matching with fine balance in a study of the Peer Health Exchange. *Statistics in Medicine*, 34:4070-4082.

Poole, C. (2010). On the origin of risk relativism. *Epidemiology*, 21:3-9.

Popper, K. (1963). *Conjectures and Refutations: The Growth of Scientific Knowledge*. Routledge.

Powers, D. E. and Swinton, S. S. (1984). Effects of self-study for coachable test item types. *Journal of Educational Psychology*, 76:266-278.

Prentice, R. L. and Pyke, R. (1979). Logistic disease incidence models and case-control studies. *Biometrika*, 66:403-411.

Rao, C. R. (1970). Estimation of heteroscedastic variances in linear models. *Journal of the American Statistical Association*, 65:161-172.

Reichenbach, H. (1957). *The Direction of Time*. University of California Press.

Rigdon, J. and Hudgens, M. G. (2015). Randomization inference for treatment effects on a binary outcome. *Statistics in Medicine*, 34:924-935.

Robins, J., Sued, M., Lei-Gomez, Q., and Rotnitzky, A. (2007). Comment: Performance of double-robust estimators when inverse probability weights are highly variable. *Statistical Science*, 22:544-559.

Robins, J. M. (1999). Association, causation, and marginal structural models. *Synthese*, 121:151-179.

Robins, J. M. and Greenland, S. (1992). Identifiability and exchangeability for direct and indirect effects. *Epidemiology*, 3:143-155.

Robins, J. M., Hernan, M. A., and Brumback, B. (2000). Marginal structural models and causal inference in epidemiology. *Epidemiology*, 11:550-560.

Robins, J. M., Mark, S. D., and Newey, W. K. (1992). Estimating exposure effects by modelling the expectation of exposure conditional on confounders. *Biometrics*, 48:479-495.

Robins, J. M. and Wasserman, L. A. (1997). Estimation of effects of sequential treatments by reparameterizing directed acyclic graphs. In *Proceedings of the Thirteenth conference on Uncertainty in artificial intelligence*, volume 409-420.Rosenbaum, P. R. (1984). The consequences of adjustment for a concomitant variable that has been affected by the treatment. *Journal of the Royal Statistical Society. Series A*, 147:656–666.

Rosenbaum, P. R. (1987a). Model-based direct adjustment. *Journal of the American Statistical Association*, 82:387–394.

Rosenbaum, P. R. (1987b). Sensitivity analysis for certain permutation inferences in matched observational studies. *Biometrika*, 74:13–26.

Rosenbaum, P. R. (1989). The role of known effects in observational studies. *Biometrics*, 45:557–569.

Rosenbaum, P. R. (2002a). Covariance adjustment in randomized experiments and observational studies (with discussion). *Statistical Science*, 17:286–327.

Rosenbaum, P. R. (2002b). *Observational Studies*. Springer, 2nd edition.

Rosenbaum, P. R. (2010). *Design of Observational Studies*. New York: Springer.

Rosenbaum, P. R. (2015). Two R packages for sensitivity analysis in observational studies. *Observational Studies*, 1:1–17.

Rosenbaum, P. R. (2018). Sensitivity analysis for stratified comparisons in an observational study of the effect of smoking on homocysteine levels. *Annals of Applied Statistics*, 12:2312–2334.

Rosenbaum, P. R. (2020). Modern algorithms for matching in observational studies. *Annual Review of Statistics and Its Application*, 7:143–176.

Rosenbaum, P. R. and Rubin, D. B. (1983a). Assessing sensitivity to an unobserved binary covariate in an observational study with binary outcome. *Journal of the Royal Statistical Society - Series B (Statistical Methodology)*, 45:212–218.

Rosenbaum, P. R. and Rubin, D. B. (1983b). The central role of the propensity score in observational studies for causal effects. *Biometrika*, 70:41–55.

Rosenbaum, P. R. and Rubin, D. B. (1984). Reducing bias in observational studies using subclassification on the propensity score. *Journal of the American statistical Association*, 79:516–524.

Rosenbaum, P. R. and Rubin, D. B. (2023). Propensity scores in the design of observational studies for causal effects. *Biometrika*, 110:1–13.

Rothman, K. J., Greenland, S., Lash, T. L., et al. (2008). *Modern epidemiology*, volume 3. Wolters Kluwer Health/Lippincott Williams & Wilkins Philadelphia.Rubin, D. B. (1974). Estimating causal effects of treatments in randomized and nonrandomized studies. *Journal of Educational Psychology*, 66:688-701.

Rubin, D. B. (1975). Bayesian inference for causality: The importance of randomization. In *The Proceedings of the social statistics section of the American Statistical Association*, volume 233, page 239. American Statistical Association Alexandria, VA.

Rubin, D. B. (1978). Bayesian inference for causal effects: The role of randomization. *Annals of Statistics*, 6:34-58.

Rubin, D. B. (1980). Comment on "Randomization analysis of experimental data: the Fisher randomization test" by D. Basu. *Journal of American Statistical Association*, 75:591-593.

Rubin, D. B. (2001). Comment: Self-experimentation for causal effects. *CHANCE*, 14:16-17.

Rubin, D. B. (2005). Causal inference using potential outcomes: Degis, modeling, decisions. *Journal of American Statistical Association*, 100:322-331.

Rubin, D. B. (2006a). Causal inference through potential outcomes and principal stratification: application to studies with "censoring" due to death (with discussion). *Statistical Science*, 21:299-309.

Rubin, D. B. (2006b). *Matched Sampling for Causal Effects*. Cambridge: Cambridge University Press.

Rubin, D. B. (2007). The design versus the analysis of observational studies for causal effects: parallels with the design of randomized trials. *Statistics in Medicine*, 26:20-36.

Rubin, D. B. (2008). For objective causal inference, design trumps analysis. *Annals of Applied Statistics*, 2:808-840.

Rudolph, K. E., Goin, D. E., Paksarian, D., Crowder, R., Merikangas, K. R., and Stuart, E. A. (2018). Causal mediation analysis with observational data: considerations and illustration examining mechanisms linking neighborhood poverty to adolescent substance use. *American Journal of Epidemiology*, 188:598-608.

Sabbaghi, A. and Rubin, D. B. (2014). Comments on the Neyman-Fisher controversy and its consequences. *Statistical Science*, 29:267-284.

Salsburg, D. (2001). *The Lady Tasting Tea: How Statistics Revolutionized Science in the Twentieth Century*. Henry Holt and Company.

Sanders, E. Gustafson, P. and Karim, M. E. (2021). Incorporating partial adherence into the principal stratification analysis framework. *Statistics in Medicine*, 40:3625-3644.Sanderson, E., Macdonald-Wallis, C., and Davey Smith, G. (2017). Negative control exposure studies in the presence of measurement error: implications for attempted effect estimate calibration. *International Journal of Epidemiology*, 47:587–596.

Scharfstein, D. O., Rotnitzky, A., and Robins, J. M. (1999). Adjusting for nonignorable drop-out using semiparametric nonresponse models. *Journal of the American Statistical Association*, 94:1096–1120.

Schlesselman, J. J. (1978). Assessing effects of confounding variables. *American Journal of Epidemiology*, 108:3–8.

Schochet, P. Z., Burghardt, J., and McConnell, S. (2008). Does job corps work? impact findings from the national job corps study. *American Economic Review*, 98:1864–1886.

Sekhon, J. S. (2009). Opiates for the matches: Matching methods for causal inference. *Annual Review of Political Science*, 12:487–508.

Sekhon, J. S. (2011). Multivariate and propensity score matching software with automated balance optimization: The matching package for R. *Journal of Statistical Software*, 47:1–52.

Sekhon, J. S. and Titiunik, R. (2017). On interpreting the regression discontinuity design as a local experiment. In *Regression Discontinuity Designs*, volume 38. Emerald Publishing Limited.

Shinozaki, T. and Matsuyama, Y. (2015). Doubly robust estimation of standardized risk difference and ratio in the exposed population. *Epidemiology*, 26:873–877.

Small, D. S. (2015). Introduction to Observational Studies and the Reprint of Cochran’s paper “Observational Studies” and Comments. *Observational Studies*, 1:124–125.

Sobel, M. E. (1982). Asymptotic confidence intervals for indirect effects in structural equation models. *Sociological Methodology*, 13:290–312.

Sobel, M. E. (1986). Some new results on indirect effects and their standard errors in covariance structure models. *Sociological Methodology*, 16:159–186.

Sommer, A. and Zeger, S. L. (1991). On estimating efficacy from clinical trials. *Statistics in Medicine*, 10:45–52.

Stuart, E. A. (2010). Matching methods for causal inference: A review and a look forward. *Statistical Science*, 25:1–21.

Stuart, E. A. and Jo, B. (2015). Assessing the sensitivity of methods for estimating principal causal effects. *Statistical Methods in Medical Research*, 24:657–674.Su, F., Mou, W., Ding, P., and Wainwright, M. (2023). When is the estimated propensity score better? High-dimensional analysis and bias correction. *arXiv preprint arXiv:2303.17102*.

Tao, Y. and Fu, H. (2019). Doubly robust estimation of the weighted average treatment effect for a target population. *Statistics in Medicine*, 38:315–325.

Theil, H. (1953). Estimation and simultaneous correlation in complete equation systems. central planning bureau. Technical report, Mimeo, The Hague.

Thistlethwaite, D. L. and Campbell, D. T. (1960). Regression-discontinuity analysis: An alternative to the ex post facto experiment. *Journal of Educational Psychology*, 51:309.

Thistlewaite, D. L. and Campbell, D. T. (2016). Regression-discontinuity analysis: An alternative to the ex-post facto experiment (with discussion). *Observational Studies*, 2:119–209.

Tibshirani, R. (1996). Regression shrinkage and selection via the lasso. *Journal of the Royal Statistical Society: Series B (Methodological)*, 58:267–288.

Titterington, D. (2013). *Biometrika* highlights from volume 28 onwards. *Biometrika*, 100:17–73.

Valeri, L. and Vanderweele, T. J. (2014). The estimation of direct and indirect causal effects in the presence of misclassified binary mediator. *Biostatistics*, 15:498–512.

Van der Laan, M. J. and Rose, S. (2011). *Targeted Learning: Causal Inference for Observational and Experimental Data*. New York: Springer.

Van der Vaart, A. W. (2000). *Asymptotic Statistics*. Cambridge: Cambridge University Press.

Van Elteren, P. (1960). On the combination of independent two-sample tests of wilcoxon. *Bulletin of the Institute of International Statistics*, 37:351–361.

VanderWeele, T. J. (2008). Simple relations between principal stratification and direct and indirect effects. *Statistics and Probability Letters*, 78:2957–2962.

VanderWeele, T. J. (2015). *Explanation in Causal Inference: Methods for Mediation and Interaction*. Oxford: Oxford University Press.

VanderWeele, T. J., Asomaning, K., and Tchetgen Tchetgen, E. J. (2012). Genetic variants on 15q25.1, smoking, and lung cancer: An assessment of mediation and interaction. *American Journal of Epidemiology*, 175:1013–1020.VanderWeele, T. J. and Ding, P. (2017). Sensitivity analysis in observational research: introducing the E-value. *Annals of Internal Medicine*, 167:268–274.

VanderWeele, T. J. and Shpitser, I. (2011). A new criterion for confounder selection. *Biometrics*, 67:1406–1413.

VanderWeele, T. J. and Tchetgen Tchetgen, E. J. (2017). Mediation analysis with time varying exposures and mediators. *Journal of the Royal Statistical Society: Series B (Statistical Methodology)*, 79:917–938.

VanderWeele, T. J., Tchetgen Tchetgen, E. J., Cornelis, M., and Kraft, P. (2014). Methodological challenges in Mendelian randomization. *Epidemiology*, 25:427.

Vansteelandt, S. and Daniel, R. M. (2014). On regression adjustment for the propensity score. *Statistics in Medicine*, 33:4053–4072.

Vansteelandt, S. and Dukes, O. (2022). Assumption-lean inference for generalised linear model parameters (with discussion). *Journal of the Royal Statistical Society, Series B (Statistical Methodology)*, 84:657–685.

Vansteelandt, S. and Joffe, M. (2014). Structural nested models and G-estimation: the partially realized promise. *Statistical Science*, 29:707–731.

Vermeulen, K. and Vansteelandt, S. (2015). Bias-reduced doubly robust estimation. *Journal of the American Statistical Association*, 110:1024–1036.

Voight, B. F., Peloso, G. M., Orho-Melander, M., Frikke-Schmidt, R., Barbalic, M., Jensen, M. K., Hindy, G., Hólm, H., Ding, E. L., and Johnson, T. (2012). Plasma HDL cholesterol and risk of myocardial infarction: a Mendelian randomisation study. *The Lancet*, 380:572–580.

Wager, S. and Athey, S. (2018). Estimation and inference of heterogeneous treatment effects using random forests. *Journal of the American Statistical Association*, 113:1228–1242.

Wager, S., Du, W., Taylor, J., and Tibshirani, R. J. (2016). High-dimensional regression adjustments in randomized experiments. *Proceedings of the National Academy of Sciences of the United States of America*, 113:12673–12678.

Wald, A. (1940). The fitting of straight lines if both variables are subject to error. *Annals of Mathematical Statistics*, 11:284–300.

Wang, L., Zhang, Y., Richardson, T. S., and Zhou, X.-H. (2020). Robust estimation of propensity score weights via subclassification. *arXiv preprint arXiv:1602.06366*.Wang, Y. and Li, X. (2022). *Rerandomization with diminishing covariate imbalance and diverging number of covariates*. *Annals of Statistics*, 50:3439–3465.

White, H. (1980). *A heteroskedasticity-consistent covariance matrix estimator and a direct test for heteroskedasticity*. *Econometrica*, 48:817–838.

Wooldridge, J. (2016). *Should instrumental variables be used as matching variables?*. *Research in Economics*, 70:232–237.

Wooldridge, J. M. (2015). *Control function methods in applied econometrics*. *Journal of Human Resources*, 50:420–445.

Wu, J. and Ding, P. (2021). *Randomization tests for weak null hypotheses in randomized experiments*. *Journal of the American Statistical Association*, 116:1898–1913.

Yang, F. and Ding, P. (2018a). *Using survival information in truncation by death problems without the monotonicity assumption*. *Biometrics*, 74:1232–1239.

Yang, F. and Small, D. S. (2016). *Using post-outcome measurement information in censoring-by-death problems*. *Journal of the Royal Statistical Society: Series B (Statistical Methodology)*, 78:299–318.

Yang, S. and Ding, P. (2018b). *Asymptotic causal inference with observational studies trimmed by the estimated propensity scores*. *Biometrika*, 105:487–493.

Zelen, M. (1979). *A new design for randomized clinical trials*. *New England Journal of Medicine*, 300:1242–1245.

Zhang, J. L. and Rubin, D. B. (2003). *Estimation of causal effects via principal stratification when some outcomes are truncated by “death”*. *Journal of Educational and Behavioral Statistics*, 28:353–368.

Zhang, J. L., Rubin, D. B., and Mealli, F. (2009). *Likelihood-based analysis of causal effects of job-training programs using principal stratification*. *Journal of the American Statistical Association*, 104:166–176.

Zhang, M. and Ding, P. (2022). *Interpretable sensitivity analysis for the baron-kenny approach to mediation with unmeasured confounding*. *arXiv preprint arXiv:2205.08030*.

Zhao, A. and Ding, P. (2021a). *Covariate-adjusted Fisher randomization tests for the average treatment effect*. *Journal of Econometrics*, 225:278–294.

Zhao, A. and Ding, P. (2021b). *No star is good news: A unified look at rerandomization based on *p*-values from covariate balance tests*. *arXiv preprint arXiv:2112.10545*.Zhao, Q., Wang, J., Hemani, G., Bowden, J., and Small, D. (2020). Statistical inference in two-sample summary-data Mendelian randomization using robust adjusted profile score. *Annals of Statistics*, 48:1742–1769.