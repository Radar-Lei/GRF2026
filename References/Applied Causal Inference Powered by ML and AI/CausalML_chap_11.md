Deeper Dive into DAGs, Good and Bad
Controls

11

"if 'good' is taken to mean 'best' fit, it is tempting to
include anything in *x* that helps predict [treatment]"
– Jeffrey Wooldridge [1].

DAGs give us an intuitive approach to take domain knowledge
and turn it into an identification strategy. In this section, we
focus on identification by conditioning and discuss graphical
criteria that lead to the construction of valid adjustment sets
for the identification of average causal effects via regression
adjustment. We also discuss how graphical criteria can help us
differentiate between "good" and "bad" controls.

<table>
  <tbody>
    <tr>
      <td>11.1 Valid Adjustment Sets</td>
      <td>300</td>
    </tr>
    <tr>
      <td>11.2 Other Useful Adjustment Strategies</td>
      <td>300</td>
    </tr>
    <tr>
      <td>Conditioning on Parents</td>
      <td>301</td>
    </tr>
    <tr>
      <td>Conditioning on All Common Causes of D and Y</td>
      <td>302</td>
    </tr>
    <tr>
      <td>11.3 Examples of Good and Bad Controls</td>
      <td>303</td>
    </tr>
    <tr>
      <td>Pre-Treatment Variables or Proxies of Pre-Treatment Variables</td>
      <td>304</td>
    </tr>
    <tr>
      <td>Post-Treatment Variables</td>
      <td>309</td>
    </tr>
    <tr>
      <td>11.4 Notebooks</td>
      <td>312</td>
    </tr>
    <tr>
      <td>11.5 Exercises</td>
      <td>312</td>
    </tr>
    <tr>
      <td>11. A Front-Door Criterion via Example</td>
      <td>313</td>
    </tr>
  </tbody>
</table>## 11.1 Valid Adjustment Sets

We discussed formally the general principles for finding valid adjustment sets in the previous chapter dedicated to the DAGs. Here we quickly review these principles before discussing others, and going into many examples of how these strategies help identify good and bad controls.

Consider any variable *D* of an ASEM as a treatment of interest and any of its descendants *Y* as an outcome of interest. An adjustment set *S* is said to be valid for identification of the causal effect of *D* on *Y* if the conditional exogeneity/ignorability condition holds

$$
Y(d) \perp D | S.
$$

We first recall the counterfactual DAG approach.

We write down the counterfactual DAG induced by the fix(*D* = *d*) intervention, which operates on all structural equations defining the descendants of *D* by setting *D* = *d* in these equations. Then, if we have that the potential outcome *Y*(*d*) is *d*-separated from the (policy) variable *D* by a set of variables *S*, then *S* is a valid adjustment set.

We also recall the "blocking backdoor paths" approach that operates in the factual DAG.

The adjustment set *S* is valid if the backdoor criterion is satisfied in the factual DAG: No element of *S* is a descendant of *D*, and all backdoor paths from *Y* to *D* are blocked by *S*.

Recall that the basic idea is that if we block the backdoor path, we remove all channels of non-causal association between *D* and *Y*.

## 11.2 Other Useful Adjustment Strategies

The strategies above are good general strategies for finding valid adjustment sets or finding "good controls". We next present some of these strategies are quite helpful because they are either very simple to apply or can also be used under partial knowledge of the DAG.¹ The strategies are derived from the

1: See [2] for a more detailed discussion of identification by conditioning under limited knowledge of DAGs.general principles described above.

We consider the following approaches that allow us to identify
the causal effect of D on Y:

* Conditioning on **all parents** of *D*, or the design approach (includes conditioning on the propensity score).
* Conditioning on **all parents** of *Y* that are not descendants of *D*,
* Conditioning on **all parents** of both *D* and *Y* is sufficient.
* Conditioning on **all common causes** of *D* and *Y* is also sufficient.
* Conditioning on the **union of causes** of *D* and *Y* is also sufficient.

All of these methods have different advantages and robustness
properties as we discuss below.

**Conditioning on Parents**

A very simple strategy is conditioning on one of the parents of
*D*, the parents of *Y*, or the parents of both *D* and *Y*.

**Example 11.2.1** (Pearl's Example Continued) One simple
principle is that conditioning on parents of *D*, namely *X*₁ and
*X*₂, is sufficient. Alternatively, conditioning on all parents
of *Y* that are non-descendants of *D*, namely *X*₂ and *X*₃, is
also sufficient. We should not condition on *M*, because it is a
descendant of *D*.

![[_resources/CausalML_chap_11/c876f9085325b319c1d4187beb5a890b_MD5.jpg]]

**Figure 11.1:** A DAG in Pearl's Example.

**Corollary 11.2.1 (Adjustment for Parents)** Consider any ASEM with a treatment node *D* and an outcome of interest *Y*, a descendant of *D*.

* Let $Z$ be all parents of $D$, and let $A$ be any other set of nodes that are not descendants of $D$. Then $S = (A, Z)$ is a valid adjustment set.
* Let $Z$ be the set of all parents of $Y$ that are non-descendants of $D$ and let $A$ be any other set that are not descendants of $D$. Then $S = (A, Z)$ is a valid adjustment set.

Note that *A* is allowed to be an empty set. Also note that, in
the second case, the additional adjustment set *A* is redundant,
since $p(y | a, z, d) = p(y | z, d)$ in this case.Adjusting for parents is a very useful strategy, because it only requires knowledge of parents in a DAG without precise knowledge of the remaining graph structure. Conditioning on parents is also behind the propensity score strategies used in many experimental or quasi-experimental empirical analyses. If the propensity score is known, it can be used as a parent of *D* itself. Finally, conditioning on parents of *Y* is most useful for attaining maximal statistical efficiency, but may be less robust than conditioning on *both* sets of parents under unforeseen deviations from the given graph structure. See [2] for further detailed discussion of robustness of adjusting for both sets of parents.

Conditioning on All Common Causes of *D* and *Y*

Another simple and widely used adjustment strategy is conditioning on all common causes of the outcome variable of interest and the treatment variable.

**Example 11.2.2** (Pearl's Example Again, using the All Common Causes Criterion) The set of common causes of *D* and *Y* is {Z₁, Z₂, X₂}. This set is a valid adjustment set that differs from the sets found using the parental strategy. We can push the All Common Causes criterion further. For example, we can omit Z₁ and Z₂ from the DAG, and we can create a new node X = (X₁, X₂, X₃) producing the DAG shown in Figure 11.2. This DAG corresponds to a valid ASEM model where X now represents all common causes of *D* and *Y*, making it a sufficient adjustment set. This set is bigger than some of the sets found by the previous criteria. It is also tempting to see if the "root common" causes Z₁ and Z₂ in the original DAG, Figure 11.1, form a valid adjustment set – and they actually do not (why?).

![[_resources/CausalML_chap_11/41350127a0c167d8cdbfad12ee8eaca5_MD5.jpg]]

**Figure 11.2:** Reduced DAG for Pearl's Example

Let $\underline{An}_X$ denote the set of strict ancestors of node X, where strict means that X is excluded. That is,

$$
\underline{An}_X = An_X \setminus X.
$$

**Corollary 11.2.2 (Adjustment for All Common Causes)** Consider any ASEM with a treatment node *D* and an outcome of interest *Y*, a descendant of *D*. Let *S* be the intersection of thestrict ancestors of *D* and *Y*, called the common causes:

$$
S = (\underline{An}_D \cap \underline{An}_Y).
$$

Then *S* is a valid adjustment set. Furthermore, the set of variables *S'* that completely mediates the effects of *S* on *Y* and *D* also constitutes a valid adjustment set.

The strategy above is commonly used in empirical work. However, [2] recommend adjusting for the union *S* of causes of *Y* or *D* (excluding descendants of *D*) in practice as they formally quantify this strategy as the maximally robust strategy under perturbations of a specified DAG structure that preserves *S*. This strategy is useful when we don't know the parents of *Y* or *D*, but only know that *S* are their ancestors.

**Corollary 11.2.3 (Adjustment for the Union of Causes)** Consider any ASEM. Re-label a policy node *X*<sub>*j*</sub> as *D*, and let *Y*, an outcome of interest, be any other descendant of *D*. Let *S* be the union of the ancestors of *D* and *Y* that excludes descendants of *D* other than *Y*:

$$
S = \underline{An}_D \cup \underline{An}_Y \setminus Ds_D.
$$

Then *S* is a valid adjustment set.

**Example 11.2.3 (Pearl's Example Continued)** Application of the Union of Causes criterion gives {Z<sub>1</sub>, Z<sub>2</sub>, X<sub>1</sub>, X<sub>2</sub>, X<sub>3</sub>} as a valid adjustment set.

## 11.3 Examples of Good and Bad Controls

We now present a series of simple example DAGs that might arise in empirical research. Within these examples, we discuss what would be good and bad variables to adjust for in each case (aka good and bad controls), when one is interested in estimating the average treatment effect of a treatment *D* on an outcome *Y*.² Similar to the collider bias examples we presented in Chapter 6.3, we will see how adjusting for some of the observed variables can introduce bias and lead to estimating a parameter that is far from the causal effect of interest. In each case, we will denote the candidate control of interest with *Z* and will denote unobserved variables with *U*. We depict unobserved variables with a dashed circle in the figures.

2: The content in this section draws heavily from the excellent research paper of Cinelli, Forney and Pearl [3].We start by analyzing a group of potential control variables that in most empirical applications would correspond to *pre-treatment variables*, i.e. variables whose value was determined prior to the treatment assignment. It is common empirical practice to adjust for as many pre-treatment variables as available in an attempt to ensure that conditional ignorability holds. However, we will see that bias can be introduced by controlling even for pre-treatment variables if one is not careful. Rather than always control for all pre-treatment variables, a better approach is to adjust only for pre-treatment variables that are ancestors of either the treatment, the outcome, or both. If one is willing to believe that identification by conditioning is feasible, then following this approach is a safe strategy.

We then consider the use of *post-treatment variables*, i.e. variables that correspond to quantities whose value is determined after the treatment assignment. We will see that in this case there are relatively few good control cases. In some cases, controlling for post-treatment variables might not hurt and may even improve precision (reduce variance). However, such settings seem unlikely to be common in empirical practice. Hence, as a high-level rule, controlling for post-treatment variables should be avoided when one is interested in estimating causal effects.

Finally, we provide a separate discussion of post-treatment but *pre-outcome variables*, i.e. variables whose value is determined prior to the determination of the value of the outcome of interest. Pre-outcome variables should be included if one is interested in estimating direct effects of the treatment on the outcome while excluding indirect effects. This type of direct effect is referred to as a *controlled direct effect* to distinguish it from other forms of direct effects appearing in mediation analysis. We will see again that one should be careful that the mediation variables that one conditions on are not themselves confounded through unobserved factors even in this case.

## Pre-Treatment Variables or Proxies of Pre-Treatment Variables

**Observed common causes or proxies of common causes.** A common example of a good control that we have discussed so far is an observed common cause, *Z*, of *D* and *Y* (Figure 11.3a). Even if the common cause is unobserved, it suffices that we have a proxy control variable that controls all the information flow to either the treatment (complete treatment proxy; Figure 11.3b) or to the outcome (complete outcome proxy; Figure 11.3c).Controlling for such a proxy also blocks the backdoor path $D \leftarrow U \rightarrow Y$. Of course, the proxy blocking the backdoor path only holds if the proxy variable captures *all* the information flow from the unobserved confounder. If, for instance, there are also direct paths from the unobserved variable to the treatment (in the case of a treatment proxy), then controlling for a proxy does not remove confounding bias. In this case, we will see that one can follow more advanced approaches related to proxy controls under additional structure in Chapter 12.

![[_resources/CausalML_chap_11/247e8e37b75961d63b23283f9452ef0c_MD5.jpg]]

**Figure 11.3:** Good controls: (a) observed common cause, (b) complete treatment proxy control of unobserved common cause, (c) complete outcome proxy control of unobserved common cause.

**Example 11.3.1 (Effect of Multivitamin Consumption on Birth Defects [4])** Suppose we want to estimate the effect of prenatal multivitamin consumption $D$ on birth defects $Y$. One factor that can potentially influence a mother's decision on multivitamin consumption is prior history of birth defects in the family ($Z$); see e.g. [5]. Such prior history is possibly due to unobserved genetic factors $U$ that also have a direct effect on the risk of malformation $Y$; see e.g. [6]. In this case, family medical history $Z$ provides a complete treatment proxy of the unobserved confounder (as in Figure 11.3b) as long as the behavior of a mother is solely driven by the family medical history. Controlling for medical history would thus remove the confounding bias in this scenario.

**Confounded mediators with observed common cause or proxies of unobserved common cause.** It is important to note that confounding occurs even when there exists a common cause $Z$ of the treatment $D$ and some mediator $M$ in a path from $D$ to $Y$ (Figure 11.4a). In such cases, if we don't condition on the common cause of $D$ and $M$, there is an open backdoor path $D \leftarrow Z \rightarrow M \rightarrow Y$. In such cases, $Z$ is a good control as it blocks this backdoor path. Similarly, if a common cause $U$ of $D$ and $M$ is unobserved, but some complete treatment proxy control $Z$ (Figure 11.4b) or some complete outcome proxy control $Z$ (Figure 11.4c) is observed, then it suffices to adjust for this proxy $Z$.![[_resources/CausalML_chap_11/082441735080350db9b0cc8b0d0cacf2_MD5.jpg]]

**Figure 11.4:** Good controls: (a) confounded mediator with observed common cause, (b) confounded mediator, with observed complete treatment proxy control of unobserved common cause, (c) confounded mediator with observed complete outcome proxy control of unobserved common cause.

**Causes of only treatment or only outcome.** As stated in Corollary 11.2.3, a conservative empirical practice is to include the union of parents of *D* and *Y* in the adjustment set. Including variables that are parents of the outcome (Figure 11.5a) can lead to reduced variance during estimation as explained in Chapter ?? where we discuss including pre-treatment covariates in RCTs. Including variables *Z* that affect the treatment *D* but have no causal path to the outcome (Figure 11.5b) is potentially more controversial. Including these variables does not introduce bias. However, their inclusion can be detrimental for precision, as such variables can potentially explain away all of the useful variation in the treatment, leaving little variation for the identification of causal effects.

![[_resources/CausalML_chap_11/5ecf144084af7865b7d4614084beaea3_MD5.jpg]]

**Figure 11.5:** Neutral controls: (a) Outcome-only cause. Can improve precision; decrease variance. (b) Treatment-only cause. Can decrease precision; introduce variance.

Even more importantly, when there are unobserved common causes of *D* and *Y* as illustrated in Figure 11.6, adjusting for a treatment-only cause, *Z*, can exacerbate the bias stemming from unobserved confounding. Essentially, controlling for *Z* removes exogenous variation in the treatment *D* that is useful for identifying the causal effect but leaves the confounded variation - as *Z* is not related directly to the unobserved confounder *U*. As such, the resulting estimated effect may be essentially driven by the unobserved confounder and thus be heavily biased. For this reason, one should avoid controlling for variables that areknown to have no causal path to the outcome that does not pass through the treatment. As we study in Chapter 12, such variables are known as *instrumental* variables. These variables can be thought as inducing natural experiments that can be leveraged for causal identification even in the presence of unobserved confounding. However, we need to use alternative identification – instrumental variable – arguments and estimation strategies to make use of instruments. We introduce these *instrumental variable* approaches in Chapter 12 and Chapter 13. Importantly, instruments *should not* be used in an identification by adjustment strategy.

![[_resources/CausalML_chap_11/63f8632432ae5b0cd52d8872984ab191_MD5.jpg]]

**Figure 11.6:** Bad control. Bias amplification by adjusting for an *instrument*. Treatment-only cause (*instrument*) that can amplify unobserved confounding bias.

**M-bias.** The DAG in Figure 11.7, typically referred to in the literature as the M structure, is the source of much debate; see e.g. [7, 8]. If such cases were impossible, the high-level strategy of controlling for all pre-treatment variables when attempting to identify causal effects by conditioning would be an unambiguously safe empirical route resulting in no harm other than potentially increasing variance by including an *instrument*. However, this structure shows that there exist settings where adjusting for a pre-treatment covariate Z can lead to a wrong causal effect, while not adjusting for Z would have yielded the correct causal effect. A better high-level strategy is the one highlighted in the prior sections: If we are willing to assume that identification by conditioning is possible, then we should adjust only for pre-treatment variables that are either an ancestor of the treatment, of the outcome, or of both treatment and outcome.

![[_resources/CausalML_chap_11/ffaeb378cadb1d85745f220f51a5d489_MD5.jpg]]

**Figure 11.7:** Bad control. M-Bias. Pre-treatment variable that introduces Heckman selection bias between two uncorrelated unobserved causes.

More concretely, in the M structure graph (Figure 11.7), *D* and *Y* are driven by two independent unobserved causal factors *U*₁, *U*₂. The variable *Z* is a common outcome of these two unobserved causal factors. When conditioning on *Z*, we introduce collider bias between *U*₁, *U*₂, making them correlated factors. Conditioning on *Z* can thus lead to a causal effect estimate that is solely driven by this spurious correlation between *U*₁ and *U*₂, introduced by the collider bias. In graphical terms, adjusting for *Z* closes the path *D* ← *U*₁ → *Z* ← *U*₂ → *Y*(*d*) in the SWIG DAG $\tilde{G}(*d)$ produced by the fix(*D* = *d*) operation. However,there is no open path connecting *D* to *Y*(*d*) when we do not condition on *Z*. Hence, the effect identified by not adjusting for any variable is the correct causal effect within this example structure.

**Example 11.3.2 (Homophily bias in estimating peer effects)**
A classical example where M-bias arises in empirical work in social sciences is in the estimation of peer effects on social networks [9, 10]. As a concrete example, suppose that we want to understand the spread of civic engagement among friends. Suppose that we look at data that consist of friendship pairs and let *D* be the level of civic engagement level of one friend at time *t* and *Y* the level of civic engagement of the other friend at time *t* + 1. Note that when we are estimating the correlation of these two variables, we are implicitly conditioning on the friendship variable *Z*, since we only have data from friendship pairs. Due to homophily, friendship could be driven by the unobserved intrinsic characteristics of each of the two individuals (*U*₁ and *U*₂ in Figure 11.7). It is reasonable to assume that these characteristics are independent as they are determined well before any friendship is formed. Moreover, these qualitative characteristics (e.g. levels of altruism) could very well have a direct effect on each individual's civic engagement. Thus, the estimation of peer effects can be biased due to the M-bias.

Finally, note that the M-bias argument is very sensitive to the exact independence of the unobserved factors *U*₁, *U*₂. In most empirical applications, we expect these unobserved factors that drive the treatment and outcome of interest to be correlated with each other as in Figure 11.8a. In this case, note that even if we don't adjust for *Z*, the calculated effect is biased due to the backdoor path *D* ← *U*₁ → *U*₂ → *Y*. Thus, neither adjusting nor not adjusting for *Z* gives the correct answer.

Moreover, it is not clear whether adjusting for *Z* increases or decreases the correlation between *U*₁ and *U*₂ and hence exacerbates or ameliorates the confounding bias. Similarly, if *Z* itself has a direct effect on the outcome (as in Figure 11.8b), on the treatment, or on both (as in Figure 11.8c), then not adjusting for *Z* opens the backdoor paths *D* ← *U*₁ → *Z* → *Y* and *D* ← *Z* → *Y*, correspondingly. Hence, it is not clear that removing the bias induced by these open backdoor paths, by adjusting for *Z*, is more beneficial than the extra M-bias incurred by closing the path *D* ← *U*₁ → *Z* ← *U*₂ → *Y*. Work of [7, 11] argues that M-bias in many realistic data generating processes is of lower order than confounding bias and therefore argues

Homophily refers to the tendency to associate with similar individuals - i.e. similar people tend to become friends.that one should err on the side of adjusting for pre-treatment covariates even in the potential presence of M-bias. [8] provides a counterpoint, arguing that the strength of the different biases will differ in general and thus careful consideration of the strength of each of the causal paths at play should be done on a case-by-case basis.

![[_resources/CausalML_chap_11/ddc8a3196965b312d4a4eabe2e7f2c29_MD5.jpg]]

**Figure 11.8:** No control solutions: (a) M-bias with correlated unobserved factors. (b) M-Bias with confounding. Pre-treatment variable that introduces Heckman selection between two uncorrelated unobserved causes and is a confounder itself. (c) Butterfly Bias. M-bias with direct confounding.

## Post-Treatment Variables

Now we turn to adjustment for post-treatment variables. The general message of this section is that explicitly adjusting for post-treatment variables is almost always a bad idea. Importantly, the general message implies that researchers should be careful to avoid implicitly adjusting for post-treatment variables through the way they have structured their observational analysis, data collection, and variable definitions – see e.g. [4] for examples from epidemiology. For instance, when estimating the effect of education on wages using data on *employed* individuals, we are implicitly conditioning on "employment" which is a post-treatment variable and can lead to selection bias.

**Mediation.** A common way a post-treatment variable can lead to bias in identifying the full causal effect of *D* on *Y* is if it lies on a causal path from the treatment to the outcome (Figure 11.9a). In this case, the causal influence that flows through that path is blocked and we are only measuring a partial effect. It is important to note, that the causal influence of such a path can be partially blocked even if one conditions on a descendant of the mediator (Figure 11.9b).![[_resources/CausalML_chap_11/1cd843da78de66b052d1db0aad0e39de_MD5.jpg]]

**Figure 11.9:** Bad controls for learning the full effect of *D* on *Y*: (a) over-control bias, by controlling for a mediator. (b) over-control bias, by controlling for an outcome caused by a mediator.

Interestingly, controlling for an ancestor of a mediator (Figure 11.10) does not impede us from learning the full direct effect of *D* on *Y*. In this case, the flow through the causal path *D* → *M* → *Y* is not blocked by *Z*. For example, d-separation can be easily checked in the SWIG $\tilde{G}(d)$ produced by fix(*D* = *d*).

When we are controlling for a post-treatment variable that mediates the effect of the treatment as in Figure 11.9a, we are only capturing direct effects from the treatment to the outcome that do not work through this mediator. This type of direct effect after controlling for mediators is typically referred to as a *controlled direct effect*. Identifying the controlled direct effect is many times a relevant empirical question, in which case controlling for *Z* is not problematic. However, even when we are interested in the controlled direct effect, we should pay attention to cases where the mediators are themselves confounded through unobserved factors as illustrated in Figure 11.11. In such settings, by controlling for the mediator, we are opening a collider path *D* → *Z* ← *U* → *Y* which can lead to severe bias, such as calculating non-zero direct effects even when they are zero.

![[_resources/CausalML_chap_11/5708e3ab7458c8f19d19d7680c369a37_MD5.jpg]]

**Figure 11.10:** Neutral control. Cause of a mediator. Can potentially improve precision.

**Heckman selection bias.** Another common way that post-treatment variables can lead to bias is due to collider bias or Heckman selection, as described in Chapter 6.3. In this case, conditioning on the post-treatment variable introduces spurious correlations between the treatment variable and some other variable which opens new paths of non-causal influence from the treatment to the outcome. For instance, Figure 11.12a corresponds to the low birthweight paradox we presented in Example 6.3.2. Similarly, Figure 11.12b corresponds to the (Hollywood) Example 6.3.1. Finally, Figure 11.12c arises when we are controlling for an outcome of the outcome, perhaps even without realizing this.

![[_resources/CausalML_chap_11/7d6ad96ccf0dc6c00b33ef90d85fe15f_MD5.jpg]]

**Figure 11.11:** Bad control even for the *controlled direct effect*. Confounded mediator bias.![[_resources/CausalML_chap_11/121de7314f74bab21a93c4c20f8a1e04_MD5.jpg]]

**Figure 11.12:** Bad controls: (a) collider stratification bias (e.g. low birth-weight "paradox" example), (b) collider stratification bias, (c) controlling for an outcome of the outcome of interest.

**Example 11.3.3** (The Industrial Growth Puzzle [12]) In a study conducted during the nineteenth century in the U.S. and U.K., it was found that despite nutrition quality *D* having improved, the height of men *Y* decreased. One possible explanation of the results of this study is that the subjects of the study were people who were enlisted in the army or in prison. Both of these variables, enlisted in the army and being in prison, are plausibly determined *after* the outcome variable of height is realized. It might, for example, be that taller men had more civilian opportunities growing up and did not end up enlisting in the army. In this case, looking at a sample of enlistees is implicitly controlling for an outcome of the outcome of interest which could lead to a biased estimate of the effect of nutrition on height.

There are of course some edge cases where controlling for a post-treatment variable *Z* does not lead to selection bias – e.g. Figure 11.13a and Figure 11.13b. In each of these two cases, the post-treatment variable is not a collider on a path from *D* to *Y*. However, it is not clear that adjusting for *Z* improves the analysis in any respect even in these cases, and adjusting for *Z* could potentially hurt precision.

![[_resources/CausalML_chap_11/dde11556d166dee57786bb1f91673a03_MD5.jpg]]

**Figure 11.13:** Neutral controls: (a) outcome of the treatment that is unrelated to the outcome of interest, (b) outcome of the treatment that does not introduce Heckman selection.## 11.4 Notebooks

**Notebook 11.4.1 (DAGs)** *R: Dagitty Notebook* employs the R package "dagitty" to analyze some simple DAGs as well as Pearl's Example. This package automatically finds adjustment sets and also lists testable restrictions in a DAG. *Python: Pgmpy Notebook* employs the analogue with Python package "pgmpy" and conducts the same analysis.

## 11.5 Exercises

**Exercise 11.5.1 (Pearl's Example continued)** The study problems ask learners to continue the analysis of Pearl's Example DAG that we started in the Study Problems to Chapter 7. The provided notebooks are a useful starting point. Recall that Pearl's Example is structured as follows:

![[_resources/CausalML_chap_11/7718e4a2b317810180a91752674b5fea_MD5.jpg]]

**Figure 11.14: Pearl's Example**

1. For Pearl's Example, write out the parents, non-parents, descendants, and non-descendants of nodes $X_2$ and $M$. List all the backdoor paths between $Y$ and $X_2$. Can you identify the effect of $X_2$ on $Y$ by conditioning?
2. (Front-Door-Criterion) For Pearl's Example, show that we can identify the effect $D \to M$ by conditioning on an empty set and the effect $M \to Y$ by conditioning on $D$. Combining the two results, we can identify the total effect of $D$ on $Y$. Solving this exercise analytically is a nice exercise; you can compare your results against causal identification packages. (Identification via this strategy is known as the Front-Door criterion; see Appendix 11.A.
3. Add an arrow $Z_2 \to Z_1$ in Pearl's Example and figure out how to identify the effect of $D \to Y$ by conditioning, of $D \to M$ by conditioning, and of $M \to Y$ by conditioning. (Note that valid conditioning sets may beempty.) Can you identify the effect of $X_2 \to Y$? If so, how? You may solve this analytically or using a causal identification package.

4. Add an arrow $X_1 \to M$ in Pearl's Example and figure out how to identify the effect of $D \to Y$ by conditioning, of $D \to M$ by conditioning, and of $M \to Y$ by conditioning. Can you identify the effect of $X_2 \to Y$? If so, how? You may solve this analytically or using a causal identification package.

5. Try to ask an instruction-following LLM (such as ChatGPT) about identification and valid adjustment sets, both for the original Pearl's Example as well as the variations in the latter two problems. Can you verify or find mistakes in the response? If you find mistakes, how might they be corrected? When mistakes are pointed out to the LLM, is it able to correct them? For example, you can try starting with the following prompt and make variations on it: "I have a causal graph with nodes Z1, Z2, X1, X2, X3, D, M, Y and edges Z1->X1, Z1->X2, Z2->X2, Z2->X3, X1->D, X2->D, X2->Y, X3->Y, D->M, M->Y. Is the effect of D on Y identified? What are the valid adjustment sets?"

## 11.A Front-Door Criterion via Example

We examine identification in Pearl's Example (Figure 11.1), via the front-door criterion. First note that we can write the potential outcome of interest $Y(d)$ as $Y(M(d))$, since in the SWIG $\tilde{G}(d)$ there is no other path from $d$ to $Y(d)$ other than through $M(d)$.

$$
\begin{align*} 
E[Y(d)] &= E[Y(M(d))] \\ 
&= \int E[Y(M(d)) | M(d) = m]P(M(d) = m)dm \\ 
&= \int E[Y(m) | M(d) = m]P(M(d) = m)dm 
\end{align*}
$$

Suppose that we make a further surgery to the SWIG graph in Figure 7.8 by adding an intervention on the variable $M(d)$, i.e. take the modified SWIG graph induced by intervention fix($D = d$) and on that graph make a further intervention fix($M(d) = m$). This leads to the new SWIG:![[_resources/CausalML_chap_11/c5f503f8487221e2bb47d0a768d20b36_MD5.jpg]]

**Figure 11.15:** The DAG induced by a recursive Fix/SWIG intervention fix($M(d) = m$) on the SWIG in Figure 7.8.

Note that in this SWIG, we have $Y(m) \perp M(d)$. Thus we have:

$$
E[Y(m) | M(d) = m] = E[Y(m)],
$$

leading to the front-door formula:

$$
E[Y(d)] = \int E[Y(m)]P(M(d) = m)dm
$$

The term $E[Y(m)]$ is the mean counterfactual response of $Y$ when we intervene on $M$ and $P(M(d) = m)$ is the probability law of the counterfactual response of $M$ when we intervene on $D$. Both of these interventional quantities can be separately identified via backdoor adjustment. More concretely, $E[Y(m)] = E[E[Y | M = m, D]]$, and $P(M(d) = m) = P(M = m | D = d)$.³ Note that under linearity assumptions on the CEFs – i.e. $E[Y | M = m, D] = \alpha m + \beta D + c$ and $E[M | D = d] = \gamma d + \delta$ – we get $E[Y(1) – Y(0)] = \alpha\gamma$.⁴ Thus, the average treatment effect $\alpha\gamma$, can be estimated by estimating $\alpha$ via OLS of $Y$ on $M, D$ and $\gamma$ via OLS of $M$ on $D$.

3: See Exercise 2.

4: Prove this as a reading exercise.[11] Wei Liu, M Alan Brookhart, Sebastian Schneeweiss, Xiao-
juan Mi, and Soko Setoguchi. 'Implications of M bias in
epidemiologic studies: a simulation study'. In: *American
Journal of Epidemiology* 176.10 (2012), pp. 938–948 (cited
on page 308).

[12] Eric B Schneider. 'Collider bias in economic history re-
search'. In: *Explorations in Economic History* 78 (2020),
p. 101356 (cited on page 311).