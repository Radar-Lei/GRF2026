# Part I

## Introduction1# 1

## Correlation, Association, and the Yule–Simpson Paradox

Causality is central to human knowledge. Two famous quotes from ancient Greeks are below.

“I would rather discover one causal law than be King of Persia.”
— Democritus

“We do not have knowledge of a thing until we grasped its cause.”
— Aristotle

However, the major part of classic statistics is about association rather than causation. This chapter will review some basic association measures and point out their fundamental limitations.

### 1.1 Traditional view of statistics

A traditional view of statistics is to infer correlation or association among variables. Based on this view, there is no role for causal inference in statistics. Two famous aphorisms associated with this view are as follows:

* “Correlation does not imply causation.”
* “You can not prove causality with statistics.”

This book has a very different view: statistics is crucial for understanding causality. The main focus of this book is to introduce the formal language for causal inference and develop statistical methods to estimate causal effects in randomized experiments and observational studies.1.2 Some commonly-used measures of association

1.2.1 Correlation and regression

The Pearson correlation coefficient between two random variables Z and Y is

$$
\rho_{ZY} = \frac{\operatorname{cov}(Z, Y)}{\sqrt{\operatorname{var}(Z)\operatorname{var}(Y)}},
$$

which measures the linear dependence of Z and Y.

The linear regression of Y on Z is the model

$$
Y = \alpha + \beta Z + \varepsilon, \tag{1.1}
$$

where $E(\varepsilon) = 0$ and $E(\varepsilon Z) = 0$. We can show that the regression coefficient $\beta$ equals

$$
\beta = \frac{\operatorname{cov}(Z, Y)}{\operatorname{var}(Z)} = \rho_{ZY} \sqrt{\frac{\operatorname{var}(Y)}{\operatorname{var}(Z)}}.
$$

So $\beta$ and $\rho_{ZY}$ always have the same sign.

We can also define multiple regression of Y on Z and X:

$$
Y = \alpha + \beta Z + \gamma X + \varepsilon, \tag{1.2}
$$

where $E(\varepsilon) = 0, E(\varepsilon Z) = 0$ and $E(\varepsilon X) = 0$. We usually interpret $\beta$ as the
"effect" of $Z$ on $Y$, *holding X constant* or *conditioning on X* or *controlling*
*for X*. Chapter B reviews the basics of linear regression.

More interestingly, the β's in the above two regressions (1.1) and (1.2)
can be different; they can even have different signs. The following R code
reanalyzed the LaLonde observational data used by Hainmueller (2012). The
main question of interest is the “causal effect” of a job training program
on earnings. The regression controlling for all covariates gives a coefficient
1067.5461 for treat, whereas the regression not controlling for any covariates
gives a coefficient -8506.4954 for treat.

```R
> dat <- read.table("cps1re74.csv", header = TRUE)
> dat$u74 <- as.numeric.dat$re74==0)
> dat$u75 <- as.numeric.dat$re75==0)
>
## linear regression on the outcome
## . means regression on all other variable in dat
> lmoutcome = lm(re78 ~ ., data = dat)
> round(summary(lmoutcome)$coef[2, ], 3)
  Estimate   Std. Error    t value    Pr(>|t|)
1067.546    554.060     1.927     0.054
>
> lmoutcome = lm(re78 ~ treat, data = dat)
```> round(summary(lmoutcome)$coef[2, ], 3)
  Estimate Std. Error   t value   Pr(>|t|)
-8506.495    712.766    -11.934     0.000
```

1.2.2 Contingency tables

We can represent the joint distribution of two binary variables Z and Y by a two-by-two contingency table. With $p_{zy} = \text{pr}(Z = z, Y = y)$, we can summarize the joint distribution in the following table:

<table>
  <thead>
    <tr>
      <th></th>
      <th>Y = 1</th>
      <th>Y = 0</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Z = 1</th>
      <td>p<sub>11</sub></td>
      <td>p<sub>10</sub></td>
    </tr>
    <tr>
      <th>Z = 0</th>
      <td>p<sub>01</sub></td>
      <td>p<sub>00</sub></td>
    </tr>
  </tbody>
</table>

Viewing *Z* as the treatment or exposure and *Y* as the outcome, we can
define the risk difference as

$$
\begin{align*}
\text{RD} &= \frac{\text{pr}(Y = 1 | Z = 1) - \text{pr}(Y = 1 | Z = 0)}{p_{11} + p_{10}} \\
&= \frac{p_{11}}{p_{11} + p_{10}} - \frac{p_{01}}{p_{01} + p_{00}},
\end{align*}
$$

the risk ratio as

$$
\begin{align*}
\text{RR} &= \frac{\text{pr}(Y = 1 | Z = 1)}{\text{pr}(Y = 1 | Z = 0)} \\
&= \frac{\frac{p_{11}}{p_{11} + p_{10}}}{\frac{p_{01}}{p_{01} + p_{00}}},
\end{align*}
$$

and the odds ratio¹ as

$$
\begin{align*}
\text{OR} &= \frac{\text{pr}(Y = 1 | Z = 1)}{\text{pr}(Y = 0 | Z = 1)} \\
&= \frac{\frac{p_{11}}{p_{11}+p_{10}}}{\frac{p_{01}}{p_{01}+p_{00}}} \\
&= \frac{p_{11}p_{00}}{p_{10}p_{01}}.
\end{align*}
$$

The terminology “risk difference”, “risk ratio”, and “odds ratio” comes
from epidemiology. Because the outcomes in epidemiology are often diseases,
it is natural to use the name “risk” for the probability of having diseases.

We have the following simple facts about these measures.

**Proposition 1.1** (1) *The following statements are all equivalent*²: $Z \perp Y$,

¹In probability theory, the odds of an event is defined as the ratio of the probability that the event happens over the probability that the event does not happen.

²This book uses the notation $\perp$ to denote independence or conditional independence of random variables. The notation is due to Dawid (1979).RD = 0, RR = 1, and OR = 1. (2) If $p_{zy}$'s are all positive, then RD > 0 is equivalent to RR > 1 and is also equivalent to OR > 1. (3) OR ≈ RR if $\text{pr}(Y = 1 | Z = 1)$ and $\text{pr}(Y = 1 | Z = 0)$ are small.

I leave the proofs of statements (1) and (2) as Problem 1.1. Statement (3) is informal. The approximation holds because the odds $p/(1-p)$ is close to the probability $p$ for rare diseases with $p \approx 0$: by Taylor expansion $p/(1-p) = p + p^2 + \dots \approx p$. In epidemiology, if the outcome represents the occurrence of a rare disease, then it is reasonable to assume that $\text{pr}(Y = 1 | X = 1)$ and $\text{pr}(Y = 1 | X = 0)$ are small.

We can also define conditional versions of the RD, RR, and OR if the probabilities are replaced by the conditional probabilities given another variable $X$, i.e., $\text{pr}(Y = 1 | Z = 1, X = x)$ and $\text{pr}(Y = 1 | Z = 0, X = x)$.

With counts $n_{zy} = \#\{i: Z_i = z, Y_i = y\}$, we can summarize the observed data in the following two-by-two table:

<table><thead><tr><th></th><th>Y = 1</th><th>Y = 0</th></tr></thead><tbody><tr><th>Z = 1</th><td>$n_{11}$</td><td>$n_{10}$</td></tr><tr><th>Z = 0</th><td>$n_{01}$</td><td>$n_{00}$</td></tr></tbody></table>

We can estimate RD, RR, and OR by replacing the true probabilities by the sample proportions $\hat{p}_{zy} = n_{zy}/n$, where $n$ is the total sample size (see Chapter A.3.2). In R, functions `fisher.test` performs an exact test and `chisq.test` performs an asymptotic test for $Z \perp Y$ based on a two-by-two table of observed data.

**Example 1.1** Bertrand and Mullainathan (2004) conducted a randomized experiment on resumes to study the effect of perceived race on callbacks for interviews. They randomly assigned Black-sounding or White-sounding names on fictitious resumes to help-wanted ads in Boston and Chicago newspapers. The following two-by-two table summarizes perceived race and callback:

```
> resume = read.csv("resume.csv")
> Alltable = table(resume$race, resume$call)
> Alltable

black      2278   157
white     2200   235
```

The two rows have the same total count, so it is apparent that White-sounding names received more callbacks. Fisher's exact test below shows that this difference is statistically significant.

```
> fisher.test(Alltable)

Fisher's Exact Test for Count Data

data:  Alltable

```p-value = 4.759e-05
alternative hypothesis: true odds ratio is not equal to 1
95 percent confidence interval:
1.249828 1.925573
sample estimates:
odds ratio
1.549732

```

# 1.3 An example of the Yule–Simpson Paradox

## 1.3.1 Data

The classic kidney stone example is from Charig et al. (1986), where Z is the treatment with 1 for an open surgical procedure and 0 for a small puncture procedure, and Y is the outcome with 1 for success and 0 for failure. The treatment and outcome data can be summarized in the following two-by-two table:

<table><thead><tr><th></th><th>Y = 1</th><th>Y = 0</th></tr></thead><tbody><tr><th>Z = 1</th><td>273</td><td>77</td></tr><tr><th>Z = 0</th><td>289</td><td>61</td></tr></tbody></table>

The estimated RD is

$$
\widehat{\text{RD}} = \frac{273}{273 + 77} - \frac{289}{289 + 61} = 78\% - 83\% = -5\% < 0.
$$

Treatment 0 seems better, that is, the small puncture leads to a higher success rate compared to the open surgical procedure.

However, the data were not from a randomized controlled trial (RCT)³. Patients receiving treatment 1 can be very different from patients receiving treatment 0. A “lurking variable” in this study is the severity of the case: some patients have smaller stones and some patients have larger stones. We can split the data according to the size of the stones.

For patients with smaller stones, the treatment and outcome data can be summarized in the following two-by-two table:

<table><thead><tr><th></th><th>Y = 1</th><th>Y = 0</th></tr></thead><tbody><tr><th>Z = 1</th><td>81</td><td>6</td></tr><tr><th>Z = 0</th><td>234</td><td>36</td></tr></tbody></table>

For patients with larger stones, the treatment and outcome data can be summarized in the following two-by-two table:

³In an RCT, patients are randomly assigned to the treatment arms. Part II of this book will focus on RCTs.<table><thead><tr><th></th><th>Y = 1</th><th>Y = 0</th></tr></thead><tbody><tr><th>Z = 1</th><td>192</td><td>71</td></tr><tr><th>Z = 0</th><td>55</td><td>25</td></tr></tbody></table>

The latter two tables must add up to the first table:

$$
81 + 192 = 273, \quad 6 + 71 = 77, \quad 234 + 55 = 289, \quad 36 + 25 = 61.
$$

From the table for patients with smaller stones, the estimated RD is

$$
\widehat{RD}_{\text{smaller}} = \frac{81}{81+6} - \frac{234}{234+36} = 93\% - 87\% = 6\% > 0,
$$

suggesting that treatment 1 is better. From the table for patients with larger stones, the estimated RD is

$$
\widehat{RD}_{\text{larger}} = \frac{192}{192+71} - \frac{55}{55+25} = 73\% - 69\% = 4\% > 0,
$$

also suggesting that treatment 1 is better.

The above data analysis leads to

$$
\widehat{RD} < 0, \quad \widehat{RD}_{\text{smaller}} > 0, \quad \widehat{RD}_{\text{larger}} > 0.
$$

Informally, treatment 1 is better for both patients with smaller and larger stones, but treatment 1 is worse for the whole population. This interpretation is quite confusing if the goal is to infer the treatment effect. In statistics, this is called the Yule-Simpson Paradox or Simpson's Paradox in which the marginal association has the opposite sign to the conditional associations at all levels.

### 1.3.2 Explanation

Let $X$ be the binary indicator with $X = 1$ for smaller stones and $X = 0$ for larger stones. Let us first take a look at the $X-Z$ relationship by comparing the probabilities of receiving treatment 1 among patients with smaller and larger stones:

$$
\begin{align*} & \widehat{\mathrm{pr}}(Z = 1 | X = 1) - \widehat{\mathrm{pr}}(Z = 1 | X = 0) \\ &= \frac{81 + 6}{81 + 6 + 234 + 36} - \frac{192 + 71}{192 + 71 + 55 + 25} \\ &= 24\% - 77\% \\ &= -53\% < 0. \end{align*}
$$

So patients with larger stones tend to take treatment 1 more frequently. Statistically, $X$ and $Z$ have negative association.

Let us then take a look at the $X-Y$ relationship by comparing the probabilities of success among patients with smaller and larger stones: under treatment![[_resources/Ding - 2023 - A First Course in Causal Inference_Part4/004742799a1a2fc865c36552de4b77de_MD5.jpg]]

FIGURE 1.1: A diagram for the kidney stone example. The signs indicate the associations of two variables, conditioning on other variables pointing to the downstream variable.

1,

$$
\begin{align*}
& \hat{\mathrm{pr}}(Y = 1 | Z = 1, X = 1) - \hat{\mathrm{pr}}(Y = 1 | Z = 1, X = 0) \\
&= \frac{81}{81 + 6} - \frac{192}{192 + 71} \\
&= 93\% - 73\% \\
&= 20\% > 0;
\end{align*}
$$

under treatment 0,

$$
\begin{align*}
& \hat{\mathrm{pr}}(Y = 1 | Z = 0, X = 1) - \hat{\mathrm{pr}}(Y = 1 | Z = 0, X = 0) \\
&= \frac{234}{234 + 36} - \frac{55}{55 + 25} \\
&= 87\% - 69\% \\
&= 18\% > 0.
\end{align*}
$$

So under both treatment levels, patients with smaller stones have higher suc-
cess probabilities. Statistically, *X* and *Y* have positive association conditional
on both treatment levels.

We can summarize the qualitative associations in the diagram in Figure 1.1. In technical terms, the treatment has a positive path ($Z \rightarrow Y$) and a more negative path ($Z \leftarrow X \rightarrow Y$) to the outcome, so the overall association is negative between the treatment and outcome. In plain English, when less effective treatment 0 is applied more frequently to the less severe cases, it can appear to be a more effective treatment.

In general, the association between *Z* and *Y* can differ qualitatively from
the conditional association between *Z* and *Y* given *X* due to the associa-
tion between *X* and *Z* and the association between *X* and *Y*. When the
Yule–Simpson Paradox happens, we say that *X* is a *confounding variable* or
*confounder* for the relationship between *Z* and *Y*, or *Z* and *Y* are *confounded*
by *X*. See Chapters 10 and 17 for more in-depth discussion.

**1.3.3 Geometry of the Yule–Simpson Paradox**

Assume that the two-by-two table based on the aggregated data has counts# 1 Correlation, Association, and the Yule-Simpson Paradox

<table><thead><tr><th>whole population</th><th>Y = 1</th><th>Y = 0</th></tr></thead><tbody><tr><td>Z = 1</td><td>n<sub>11</sub></td><td>n<sub>10</sub></td></tr><tr><td>Z = 0</td><td>n<sub>01</sub></td><td>n<sub>00</sub></td></tr></tbody></table>

The two two-by-two tables based on subgroups have counts

<table><thead><tr><th>subpopulation X = 1</th><th>Y = 1</th><th>Y = 0</th></tr></thead><tbody><tr><td>Z = 1</td><td>n<sub>11|1</sub></td><td>n<sub>10|1</sub></td></tr><tr><td>Z = 0</td><td>n<sub>01|1</sub></td><td>n<sub>00|1</sub></td></tr></tbody></table>

for the subgroup with $X = 1$ and

<table><thead><tr><th>subpopulation X = 0</th><th>Y = 1</th><th>Y = 0</th></tr></thead><tbody><tr><td>Z = 1</td><td>n<sub>11|0</sub></td><td>n<sub>10|0</sub></td></tr><tr><td>Z = 0</td><td>n<sub>01|0</sub></td><td>n<sub>00|0</sub></td></tr></tbody></table>

for the subgroup with $X = 0$.

Figure 1.2 shows the geometry of the Yule-Simpson Paradox. The y-axis shows the count of successes with $Y = 1$ and the x-axis shows the count of failures with $Y = 0$. The two parallelograms correspond to aggregating the counts of successes and failures under two treatment levels. The slope of $OA_1$ is larger than that of $OB_1$, and the slope of $OA_0$ is larger than that of $OB_0$. So the treatment seems beneficial to the outcome within both levels of $X$. However, the slope of $OA$ is smaller than that of $OB$. So the treatment seems harmful to the outcome for the whole population. The Yule-Simpson Paradox arises.

## 1.4 The Berkeley graduate school admission data

Bickel et al. (1975) investigated the admission rates of male and female students into the graduate school of Berkeley. The R package datasets contains the original data UCBAdmissions. The raw data by the six largest departments are shown below:

```r
> library datasets)
> UCBAdmissions = aperm(UCBAdmissions, c(2, 1, 3))
> UCBAdmissions
, , Dept = A

         Admit
Gender   Admitted Rejected
Male      512        313
Female     89         19

, , Dept = B
```![[_resources/Ding - 2023 - A First Course in Causal Inference_Part4/8fc75176e78db8b36475298c55cbe32a_MD5.jpg]]

FIGURE 1.2: Geometry of the Yule–Simpson Paradox```

Gender      Admitted Rejected
Male         353      207
Female       17       8

, , Dept = C

Gender      Admitted Rejected
Male         120      205
Female       202      391

, , Dept = D

Gender      Admitted Rejected
Male         138      279
Female       131      244

, , Dept = E

Gender      Admitted Rejected
Male          53      138
Female         94      299

, , Dept = F

Gender      Admitted Rejected
Male          22      351
Female         24      317
```

Aggregating the data over departments, we have a simple two-by-two table:

```r
> UCBAdmissions.sum = apply(UCBAdmissions, c(1, 2), sum)
> UCBAdmissions.sum
```

**Admit**

| Gender | Admitted | Rejected |
| :--- | :--- | :--- |
| Male | 1198 | 1493 |
| Female | 557 | 1278 |

The following function, building upon `chisq.test`, have a two-by-two table as the input and the estimated RD and *p*-value as output:

```r
> risk.difference = function(
+ {
+   p1 = tb2[1, 1] / (tb2[1, 1] + tb2[1, 2])
+   p2 = tb2[2, 1] / (tb2[2, 1] + tb2[2, 2])
+   testp = chisq.test.tb2
```## 1.5 *Homework Problems*

+
+   return(list(p.diff = p1 - p2,
+           pv = testp$p.value)))
+ }

With this function, we find a large, significant difference between the admission
rates of male and female students:

```r
> risk.difference(UCBAdmissions.sum)
$p.diff
[1] 0.1416454

$pv
[1] 1.055797e-21
```

Stratifying on the departments, we find smaller and insignificant differences
between the admission rates of male and female students. In department A,
the difference is significant but negative.

```r
> P.diff = rep(0, 6)
> PV     = rep(0, 6)
> for(dd in 1:6)
+ {
+     department = risk.difference(UCBAdmissions[, , dd])
+     P.diff[dd]  = department$p.diff
+     PV[dd]     = department$pv
+ }
>
> round(P.diff, 2)
[1] -0.20 -0.05  0.03 -0.02  0.04 -0.01
> round(PV, 2)
[1]  0.00  0.77  0.43  0.64  0.37  0.64
```

## 1.5 Homework Problems

### 1.1 *Independence in two-by-two tables*

Prove (1) and (2) in Proposition 1.1.

### 1.2 *More examples of the Yule-Simpson Paradox*

Give a numeric example of a two-by-two-by-two table in which the Yule-
Simpson Paradox arises.

Find a real-life example in which the Yule–Simpson Paradox arises.1.3 Correlation and partial correlation

Consider a three-dimensional Normal random vector:

$$
\begin{pmatrix} X \\ Y \\ Z \end{pmatrix} \sim \text{N} \left( \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}, \begin{pmatrix} 1 & \rho_{XY} & \rho_{XZ} \\ \rho_{XY} & 1 & \rho_{YZ} \\ \rho_{XZ} & \rho_{YZ} & 1 \end{pmatrix} \right).
$$

The correlation coefficient between Y and Z is ρ<sub>YZ</sub>. There are many equivalent
definitions of the partial correlation coefficient. For a multivariate Normal
vector, let ρ<sub>YZ|X</sub> denote the partial correlation coefficient between Y and Z
given X, which is defined as their correlation coefficient in the conditional
distribution (Y, Z) | X. Show that

$$
\rho_{YZ|X} = \frac{\rho_{YZ} - \rho_{YX}\rho_{ZX}}{\sqrt{1 - \rho_{YX}^2}\sqrt{1 - \rho_{ZX}^2}}.
$$

Give a numerical example with ρ<sub>YZ</sub} > 0 and ρ<sub>YZ|X</sub} < 0.

Remark: This is the Yule–Simpson Paradox for a Normal random vector.
You can use the results in Chapter A.1.2 to prove the formula for the partial
correlation coefficient.


1.4 *Specification searches*

Section 1.2.1 re-analyzes the data used by Hainmueller (2012). We used the outcome named re78 and the treatment named treat in the analysis. Moreover, the data also contain 10 covariates and therefore 2¹⁰ = 1024 possible subsets of covariates in the linear regression. Run 1024 linear regressions with all possible subsets of covariates, and report the regression coefficients of the treatment. How many coefficients of the treatment are positively significant, how many are negatively significant, and how many are not significant? You can also report other interesting findings from these regressions.

1.5 More on racial discrimination

Section 1.2.2 re-analyzes the data collected by Bertrand and Mullainathan (2004). Conduct analyses separately for males and females. What do you find from these subgroup analyses?

1.6 *Recommended reading*

Bickel et al. (1975) is the original paper for the paradox reported in Section
1.4. Pearl and Mackenzie (2018) recently revisited the study from the causal
inference perspective.2

Potential Outcomes

**2.1 Experimentalists’ view of causal inference**

Rubin (1975) and Holland (1986) made up the aphorism:

“no causation without manipulation.”

Not everybody agrees with this point of view. However, it is quite helpful to
clarify ambiguity in thinking about causal relationships. This book follows
this view and defines causal effects using the potential outcomes framework
(Neyman, 1923; Rubin, 1974). In this framework, an experiment, or at least
a thought experiment, has a treatment, and we are interested in its effect on
an outcome or multiple outcomes. Sometimes, the *treatment* is also called an
*Treatment* or a *manipulation*.

**Example 2.1** If we are interested in the effect of taking aspirin or not on the relief of headaches, the intervention is taking aspirin or not.

**Example 2.2** If we are interested in the effect of participating in a job training program or not on employment and wage, the intervention is participating in the job training program or not.

**Example 2.3** If we are interested in the effect of studying in a small classroom or a large classroom on standardized test scores, the intervention is studying in a small classroom or not.

**Example 2.4** Gerber et al. (2008) were interested in the effect of different get-out-to-vote messages on the voting behavior. The intervention is the different get-out-to-vote messages.

**Example 2.5** Pearl (2018) claimed that we could infer the effect of obesity on life span. A popular measure of obesity is the body mass index (BMI), defined as the body mass divided by the square of the body height in units of kg/m². So the intervention can be different levels of BMI.

However, there are different levels of ambiguity in the interventions above.
The meanings of interventions in Examples 2.1–2.4 are relatively clear, but the
meaning of intervention on BMI in Example 2.5 is less clear. In particular, wecan imagine different versions of BMI reduction: healthier diet, more physical exercise, bariatric surgery, etc. These different versions of the intervention can have quite different effects on the outcome. In this book, we will view the intervention in Example 2.5 as ill-defined without further clarifications.

Another ill-defined intervention is race. Racial discrimination is an important issue in the labor market, but it is not easy to imagine an experiment to change the race of any experimental unit. Bertrand and Mullainathan (2004) give an interesting experiment that partially answers the question.

**Example 2.6** Recall Example 1.1. Bertrand and Mullainathan (2004) randomly change the names on the resumes, and compare the callback rates of resumes with African-American- or White-sounding names. For each resume, the intervention is the binary indicator of a Black-sounding or White-sounding name, and the outcome is the binary indicator of callback. I analyzed the following two-by-two table in Section 1.2.2:

<table><thead><tr><th></th><th>callback</th><th>no callback</th></tr></thead><tbody><tr><td>Black</td><td>157</td><td>2278</td></tr><tr><td>White</td><td>235</td><td>2200</td></tr></tbody></table>

From the above, we can compare the probabilities of being called back among Black-sounding and White-sounding names:

$$
\frac{157}{2278 + 157} - \frac{235}{2200 + 235} = 6.45\% - 9.65\% = -3.20\% < 0
$$

with p-value from the Fisher exact test being much smaller than 0.001.

In Bertrand and Mullainathan (2004)'s experiment, the treatment is the *perceived race* which can be manipulated by experimenters. They design an experiment to answer a well-defined causal question. However, critics may raise the concern that the causal effect of the perceived race may differ from the causal effect of the actual race.

## 2.2 Formal notation of potential outcomes

Consider a study with *n* experimental units indexed by *i* = 1, ..., *n*. As a starting point, we focus on a treatment with two levels: 1 for the treatment and 0 for the control. For each unit *i*, the outcome of interest *Y* has two versions:

$$
Y_i(1) \text{ and } Y_i(0),
$$

which are potential outcomes under the hypothetical interventions 1 and 0. Neyman (1923) first used this notation. It seems intuitive but has some hidden assumptions. Rubin (1980) made the following clarifications on the hidden assumptions.**Assumption 2.1 (no interference)** *Unit i's potential outcomes do not depend on other units' treatments. This is sometimes called the no-interference assumption.*

**Assumption 2.2 (consistency)** *There are no other versions of the treatment. Equivalently, we require that the treatment levels be well-defined, or have no ambiguity at least for the outcome of interest. This is sometimes called the consistency assumption.¹*

Assumption 2.1 can be violated in infectious diseases or network experiments. For instance, if some of my friends receive flu shots, my chance of getting the flu decreases even if I do not receive the flu shot; if my friends see an advertisement on Facebook, my chance of buying that product increases even if I do not see the advertisement directly. It is an active research area to study situations with interfering units in modern causal inference literature (e.g., Hudgens and Halloran, 2008).

Assumption 2.2 can be violated for treatments with complex components. For instance, when studying the effect of cigarette smoking on lung cancer, the type of cigarettes may matter; when studying the effect of college education on income, the type and major of college education may matter.

Rubin (1980) called the Assumptions 2.1 and 2.2 above together the Stable Unit Treatment Value Assumption (SUTVA).

**Assumption 2.3 (SUTVA)** *Both Assumptions 2.1 and 2.2 hold.*

Under SUTVA, Rubin (2005) called the $n \times 2$ matrix of potential outcomes the Science Table:

<table><thead><tr><th>$i$</th><th>$Y_i(1)$</th><th>$Y_i(0)$</th></tr></thead><tbody><tr><td>1</td><td>$Y_1(1)$</td><td>$Y_1(0)$</td></tr><tr><td>2</td><td>$Y_2(1)$</td><td>$Y_2(0)$</td></tr><tr><td>$\vdots$</td><td>$\vdots$</td><td>$\vdots$</td></tr><tr><td>$n$</td><td>$Y_n(1)$</td><td>$Y_n(0)$</td></tr></tbody></table>

Due to the fundamental contributions of Neyman and Rubin to statistical causal inference, the potential outcomes framework is sometimes referred to as the Neyman Model, the Neyman-Rubin Model, or the Rubin Causal Model. I prefer using “the potential outcomes framework” in this book and my other scientific writings.

Causal effects are functions of the Science Table. Inferring individual causal effects

$$
\tau_i = Y_i(1) - Y_i(0), \quad (i = 1, \dots, n)
$$

is fundamentally challenging because we can only observe either $Y_i(1)$ or $Y_i(0)$

¹This notion of consistency is totally different from the one in Definition A.4 in Chapter A.for each unit $i$, that is, we can observe only half of the Science Table. As a starting point, most parts of the book focus on the average causal effect (ACE):

$$
\begin{align*} 
\tau &= n^{-1} \sum_{i=1}^{n} \{Y_i(1) - Y_i(0)\} \\ 
&= n^{-1} \sum_{i=1}^{n} Y_i(1) - n^{-1} \sum_{i=1}^{n} Y_i(0). 
\end{align*}
$$

But we can extend our discussion to many other parameters (also called *estimates*). Problem 2.2 gives some examples.

### 2.2.1 Causal effects, subgroups, and the non-existence of Yule-Simpson Paradox

If we have two subgroups defined by a binary variable $X_i$, we can define the subgroup causal effects as

$$
\tau_x = \frac{\sum_{i=1}^{n} I(X_i = x)\{Y_i(1) - Y_i(0)\}}{\sum_{i=1}^{n} I(X_i = x)}, \quad (x = 0, 1)
$$

where $I(\cdot)$ is the indicator function. A simple identity is that

$$
\tau = \pi_1 \tau_1 + \pi_0 \tau_0
$$

where $\pi_x = \sum_{i=1}^{n} I(X_i = x)/n$ is the proportion of units with $X_i = x$ ($x = 0, 1$). Therefore, if $\tau_1 > 0$ and $\tau_0 > 0$, we must have $\tau > 0$. The Yule-Simpson Paradox thus cannot happen to causal effects.

### 2.2.2 Subtlety of the definition of the experimental unit

I now discuss a subtlety related to the definition of the experimental unit. Simply speaking, the experimental unit can be different from the physical unit. For example, if I did not take aspirin before and my headache did not go away, but I take aspirin now and my headache goes away, then you might think that we can observe my potential outcomes under both control and treatment. Let $i$ index myself, and let $Y = 1$ denote the indicator of no headache. Then, the above heuristic suggests that $Y_i(0) = 0$ and $Y_i(1) = 1$, so it seems that aspirin kills my headache. But this logic is very wrong because of the misunderstanding of the definition of the experimental unit. At different time points, I, the same physical person, become two distinct experimental units, indexed by “i, before” and “i, after”. Therefore, we have four potential outcomes

$$
Y_{i,\text{before}}(0) = 0, \quad Y_{i,\text{before}}(1) = ?, \quad Y_{i,\text{after}}(0) = ?, \quad Y_{i,\text{after}}(1) = 1,
$$with two of them observed and two of them missing. The individual causal effects

$$
Y_{i,\text{before}}(1) - Y_{i,\text{before}}(0) = ? - 0 \text{ and } Y_{i,\text{after}}(1) - Y_{i,\text{after}}(0) = 1 - ?
$$

are unknown. It is possible that my headache goes away even if I do not take aspirin:

$$
Y_{i,\text{after}}(0) = 1, \quad Y_{i,\text{after}}(1) = 1
$$

which implies zero effect; it is also possible that my headache does not go away if I do not take aspirin:

$$
Y_{i,\text{after}}(0) = 0, \quad Y_{i,\text{after}}(1) = 1
$$

which implies a positive effect of aspirin.

The wrong heuristic argument might get the right answer if the control potential outcomes are stable at the before and after periods:

$$
Y_{i,\text{before}}(0) = Y_{i,\text{after}}(0) = 0.
$$

But this assumption is rather strong and fundamentally untestable. Rubin (2001) offered a related discussion in the context of self-experimentation for causal effects.

## 2.3 Treatment assignment mechanism

Let $Z_i$ be the binary treatment indicator for unit $i$, vectorized as $Z = (Z_1, \dots, Z_n)$. The observed outcome of unit $i$ is a function of the potential outcomes and the treatment indicator:

$$
\begin{align}
Y_i &= \begin{cases} Y_i(1), & \text{if } Z_i = 1 \\ Y_i(0), & \text{if } Z_i = 0 \end{cases} \tag{2.1} \\
&= Z_i Y_i(1) + (1 - Z_i) Y_i(0) \tag{2.2} \\
&= Y_i(0) + Z_i \{Y_i(1) - Y_i(0)\} \tag{2.3} \\
&= Y_i(0) + Z_i \tau_i. \tag{2.4}
\end{align}
$$

Equation (2.1) is the definition of the observed outcome. Equation (2.2) is equivalent to (2.1). It is a trivial fact, but Pearl (2010b) viewed it as the fundamental bridge between the potential outcomes and the observed outcome. Equations (2.3) and (2.4) highlight the fact that the individual causal effect $\tau_i = Y_i(1) - Y_i(0)$ can be heterogeneous across units.

The experiment reveals only one of unit $i$'s potential outcomes with theother one missing:

$$
\begin{align*}
Y_i^{\text{mis}} &= \begin{cases} Y_i(0), & \text{if } Z_i = 1 \\ Y_i(1), & \text{if } Z_i = 0 \end{cases} \\
&= Z_i Y_i(0) + (1 - Z_i) Y_i(1).
\end{align*}
$$

The missing potential outcome corresponds to the opposite treatment level of unit *i*. For this reason, the potential outcomes framework is also called the *counterfactual* framework.² This name can be confusing because before the experiment, both the potential outcomes can be observed. Only after the experiment, one potential outcome is observed whereas the other potential outcome is counterfactual.

The treatment assignment mechanism, i.e., the probability distribution of
Z, plays an important role in inferring causal effects. The following simple
numerical examples illustrate this point. We first generate potential outcomes
from Normal distributions with the average causal effect close to -0.5.

```
> n = 500
> Y0 = rnorm(n)
> tau = - 0.5 + Y0
> Y1 = Y0 + tau
```

A perfect doctor assigns the treatment to the patient if s/he knows that the
individual causal effect is non-negative. This results in a positive difference in
means of the observed outcomes:

```
> Z = (tau >= 0)
> Y = Z*Y1 + (1 - Z)*Y0
> mean(Y[Z==1]) - mean(Y[Z==0])
[1] 2.166509
```

A clueless doctor does not know any information about the individual causal
effects and assigns the treatment to patients by flipping a fair coin. This results
in a difference in means of the observed outcomes close to the true average
causal effect:

```
> Z = rbinom(n, 1, 0.5)
> Y = Z*Y1 + (1 - Z)*Y0
> mean(Y[Z==1]) - mean(Y[Z==0])
[1] -0.552064
```

The above examples are hypothetical since no doctors perfectly know the
individual causal effects. However, the examples do demonstrate the crucial
role of the treatment assignment mechanism. This book will organize the
topics based on the treatment assignment mechanism.

²The terminology “counterfactual” is more popular in philosophy, probably due to Lewis (1973).## 2.4 Homework Problems

### 2.1 A perfect doctor

Following the first perfect doctor example in Section 2.3, assume the potential outcomes are random variables generated from

$$
Y(0) \sim N(0, 1), \quad \tau = -0.5 + Y(0), \quad Y(1) = Y(0) + \tau.
$$

The binary treatment is determined by the treatment effect as $Z = 1(\tau \ge 0)$, and the observed outcome is determined by the potential outcomes and the treatment by $Y = ZY(1) + (1-Z)Y(0)$. Calculate the difference in means

$$
E(Y | Z = 1) - E(Y | Z = 0).
$$

Remark: The mean of a truncated Normal random variable equals

$$
E(X | a < X < b) = \mu - \sigma \frac{\phi\left(\frac{b-\mu}{\sigma}\right) - \phi\left(\frac{a-\mu}{\sigma}\right)}{\Phi\left(\frac{b-\mu}{\sigma}\right) - \Phi\left(\frac{a-\mu}{\sigma}\right)},
$$

where $X \sim N(\mu, \sigma^2)$, and $\phi(\cdot)$ and $\Phi(\cdot)$ are the probability density and cumulative distribution functions of a standard Normal random variable $N(0, 1)$.

### 2.2 Nonlinear causal estimands

With potential outcomes $\{(Y_i(1), Y_i(0))\}_{i=1}^n$ for $n$ units under the treatment and control, the difference in means equals the mean of the individual treatment effects:

$$
\bar{Y}(1) - \bar{Y}(0) = n^{-1} \sum_{i=1}^{n} \{Y_i(1) - Y_i(0)\}.
$$

Therefore, the average treatment effect is a *linear* causal estimand in the sense that the difference in average potential outcomes equals the average of the differences in individual potential outcomes.

Other estimands may not be linear. For instance, we can define the median treatment effect as

$$
\delta_1 = \operatorname{median}\{(Y_i(1))_{i=1}^n - \operatorname{median}\{(Y_i(0))_{i=1}^n\},
$$

which is, in general, different from the median of the individual treatment effect

$$
\delta_2 = \operatorname{median}\{(Y_i(1) - Y_i(0))_{i=1}^n\}.
$$

1. Give numerical examples that have $\delta_1 = \delta_2$, $\delta_1 > \delta_2$, and $\delta_1 < \delta_2$, respectively.
2. Which estimand makes more sense, $\delta_1$ or $\delta_2$? Why? Use examples to justify your conclusion. If you feel that both $\delta_1$ and $\delta_2$ can make sense in different applications, you can also give examples to justify both estimands.2.3 Average and individual effects

Give a numerical example in which $\tau = n^{-1} \sum_{i=1}^{n} \{Y_i(1) - Y_i(0)\} > 0$ but the proportion of units with $Y_i(1) > Y_i(0)$ is smaller than 0.5. That is, the average causal effect is positive, but the treatment benefits less than half of the units.

2.4 Recommended reading

Holland (1986) is a classic review article on statistical causal inference. It pop-
ularized the name “Rubin Causal Model” for the potential outcomes frame-
work. At the University of California Berkeley, we call it the “Neyman Model”
for obvious reasons.