## Notation

I use the following conventional notation in this book.

### Math

<table><tr><td>(<sup>n</sup>/<sub>m</sub>)</td><td>“n choose m” which equals <sup>n!</sup>/<sub>m!(n-m)!</sub></td></tr><tr><td>&Sigma;</td><td>summation, e.g., &Sigma;<sup>n</sup><sub>i=1</sub> a<sub>i</sub> = a<sub>1</sub> + &hellip; + a<sub>n</sub></td></tr><tr><td>I(&middot;)</td><td>indicator function, i.e., I(A) = 1 if A happens and 0 otherwise</td></tr><tr><td>#</td><td>counting the number of units in a set</td></tr><tr><td>&asymp;</td><td>approximately equal</td></tr><tr><td>&prop;</td><td>proportional to (by dropping some unimportant constant)</td></tr><tr><td>logit</td><td>logit(x) = log <sup>x</sup>/<sub>1-x</sub></td></tr><tr><td>expit</td><td>expit(x) = <sup>e<sup>x</sup></sup>/<sub>1+e<sup>x</sup></sub> = (1 + e<sup>-x</sup>)<sup>-1</sup></td></tr></table>

### Basic probability and statistics

<table><tr><td>pr(&middot;)</td><td>probability</td></tr><tr><td>E(&middot;)</td><td>expectation of a random variable</td></tr><tr><td>var(&middot;)</td><td>variance of a random variable</td></tr><tr><td>cov(&middot;)</td><td>covariance between random variables</td></tr><tr><td>&sim;</td><td>“A &sim; B” means that A and B have the same asymptotic distribution</td></tr><tr><td>&rho;<sub>YX</sub></td><td>Pearson correlation coefficient between Y and X</td></tr><tr><td>R<sup>2</sup><sub>YX</sub></td><td>squared multiple correlation coefficient between Y and X</td></tr></table>

### Random variables

<table><tr><td>Bernoulli(p)</td><td>Bernoulli distribution with probability p</td></tr><tr><td>Binomial(n, p)</td><td>Binomial distribution with n trials and probability p</td></tr><tr><td>N(&mu;, &sigma;<sup>2</sup>)</td><td>Normal distribution with mean &mu; and variance &sigma;<sup>2</sup></td></tr><tr><td>t<sub>&nu;</sub></td><td>t distribution with degrees of freedom &nu;</td></tr><tr><td>&chi;<sup>2</sup><sub>&nu;</sub></td><td>chi-squared distribution with degrees of freedom &nu;</td></tr><tr><td>z<sub>1-&alpha;/2</sub></td><td>the 1 - &alpha;/2 upper quantile of N(0, 1), e.g., z<sub>0.975</sub> = 1.96</td></tr></table>Causal inference

<table>
  <tr>
    <td>Y<sub>i</sub>(1), Y<sub>i</sub>(0)</td>
    <td>potential outcomes of unit i under treatment and control</td>
  </tr>
  <tr>
    <td>τ</td>
    <td>finite-population average causal effect τ = n<sup>-1</sup> &Sigma;<sup>n</sup><sub>i=1</sub>{Y<sub>i</sub>(1) - Y<sub>i</sub>(0)}</td>
  </tr>
  <tr>
    <td>τ</td>
    <td>super-population average causal effect τ = E{Y(1) - Y(0)}</td>
  </tr>
  <tr>
    <td>μ<sub>1</sub>(X)</td>
    <td>outcome model μ<sub>1</sub>(X) = E(Y | Z = 1, X)</td>
  </tr>
  <tr>
    <td>μ<sub>0</sub>(X)</td>
    <td>outcome model μ<sub>0</sub>(X) = E(Y | Z = 0, X)</td>
  </tr>
  <tr>
    <td>e(X)</td>
    <td>propensity score e(X) = pr(Z = 1 | X)</td>
  </tr>
  <tr>
    <td>τ<sub>c</sub></td>
    <td>complier average causal effect τ<sub>c</sub> = E{Y(1) - Y(0) | U = c}</td>
  </tr>
  <tr>
    <td>U</td>
    <td>unmeasured confounder</td>
  </tr>
  <tr>
    <td>U</td>
    <td>latent compliance status U = (D(1), D(0))</td>
  </tr>
  <tr>
    <td>Y(z, M<sub>z'</sub>)</td>
    <td>nested potential outcome (for mediation analysis)</td>
  </tr>
</table>