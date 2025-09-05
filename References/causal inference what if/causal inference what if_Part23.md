Chapter 23
CAUSAL MEDIATION

In Part III, we have presented approaches to estimate the causal effect of a time-varying treatment on an outcome.
Our goal was to quantify changes in the outcome distribution under different treatment strategies that are sustained
over time. Our goal was not to determine *how* treatment exerted its effect on the outcome. We now turn our
attention to causal mediation: the study of the causal pathways through which the treatment affects the outcome.

The study of causal mediation can be seen as a special case of causal inference with time-varying treatments. Rather than having a single treatment that takes different values over time, in mediation analysis we have two different variables—the treatment of interest and the mediator—at different times. This chapter describes a theoretical framework for causal mediation that, like the rest of the book, is based on hypothetical interventions that can be mapped into a target trial. Unlike other approaches to mediation that are based on pure direct effects and total indirect effects, an interventionist framework for mediation opens the door to empirical verification of the causal estimates, a desirable condition for any scientific endeavor.

23.1 Mediation analysis under attack

Consider a randomized trial in which a random sample of cigarette smokers are assigned to either smoking cessation ($A = 0$) or to continuation of smoking ($A = 1$). Suppose that there was perfect adherence: all individuals assigned to $A = 0$ quit smoking and all individuals assigned to ($A = 1$) continued to smoke. The investigators found a beneficial effect of smoking cessation on the risk of myocardial infarction $Y$ at 1 year, i.e., $E[Y|A = 1] > E[Y|A = 0]$

After the beneficial effect of smoking cessation *A* on the risk of heart disease *Y* has been established, the investigators wonder whether the benefit is a consequence of the effect of *A* on reducing hypertension *M*. Besides data on treatment *A* at baseline and outcome *Y* at one year, they also have data on the presence of hypertension *M* measured at 6 months. (For simplicity, suppose that no individual experienced the outcome *Y* in the first 6 months.) The causal diagram in Figure 23.1 depicts these variables under the assumption that interventions on *M* are sufficiently well defined.

Investigators are interested in decomposing the total effect of *A* on *Y* into
the indirect causal pathways mediated by *M* and the direct pathways not
mediated by *M*. We then say that investigators are interested in a *causal
mediation analysis*.

In the previous chapter we introduced several approaches to formalize the
concept of direct effects (Technical Points 22.1 and 22.2) but not the concept
of indirect effect. To formalize the decomposition of a total treatment into
direct and indirect effects, we can define the pure direct effect and the total
indirect effect of *A* on *Y*.

The *pure direct effect* of *A* on *Y* not through *M* is the average causal effect
of *A* on *Y* if, for each individual, the value of *M* had been set to the value
that *M* would have taken if *A* had been set to 0, i.e., if *M* had been set to the
value *M*<sup>a=0</sup> (which is 1 for some individuals and 0 for others). The *pure direct*

![[_resources/causal inference what if_Part23/d67375a44554522468c7ce21eee9f5ee_MD5.jpg]]

Figure 23.1

Robins and Greenland (1992) introduced the pure direct effect and the total indirect effect.Technical Point 23.1

**Proof of the mediation formula.** In the setting depicted by the causal diagram in Figure 23.1 with treatment *A*, mediator *M*, and outcome *Y*, the counterfactual mean $E[Y^{a=1, M^{a=0}}]$ is equal to
$$ 
\begin{align*} 
&= \sum_m E[Y^{a=1, m} | M^{a=0} = m] \Pr[M^{a=0} = m] \quad \text{by the laws of probability} \\ 
&= \sum_m E[Y^{a=1, m}] \Pr[M^{a=0} = m] \quad \text{by the cross-world conditional independence } Y^{a=1, m} \perp M^{a=0} \\ 
&= \sum_m E[Y | A = 1, M = m] \Pr[M = m | A = 0] \quad \text{by exchangeability and consistency.} 
\end{align*} 
$$

The cross-world conditional independence used above is assumed when the causal diagram represents an NPSEM-IE, but not when it represents an FFRCISTG model.

*effect* is then the contrast

$$
E[Y^{a=1, M^{a=0}}] - E[Y^{a=0, M^{a=0}}]
$$

In our example, the pure direct effect is the effect of smoking cessation *A* if we could assign to each person the value of hypertension *M* (1 or 0) that the person would have had if she had quit smoking. This value of hypertension *M* is known for individuals who actually quit smoking, but it remains unknown for individuals who continued to smoke. We therefore say that $E[Y^{a=1, M^{a=0}}]$, and therefore the pure direct effect, is a cross-world quantity because it involves a counterfactual outcome indexed by two treatment values, *a* = 1 and *a* = 0, that cannot occur simultaneously for the same individual in the same world.

The *total indirect effect*, also a cross-world quantity, is defined as

$$
E[Y^{a=1, M^{a=1}}] - E[Y^{a=1, M^{a=0}}]
$$

The sum of the pure direct effect and the total indirect effect $E[Y^{a=1, M^{a=1}}] - E[Y^{a=0, M^{a=0}}]$ is, by consistency, the total effect $E[Y^{a=1}] - E[Y^{a=0}]$.

In Figure 23.1, there do not exist unmeasured common causes of the mediator *M* and the outcome *Y*. If common causes were present, no direct effects could be identified, including controlled direct effects and the mediation effects, i.e., the pure direct and the total indirect effects. To identify the mediation effects, we need to identify the cross world quantity $E[Y^{a=1, M^{a=0}}]$ under the causal diagram in Figure 23.1. The so-called *mediation formula* does that:

$$
\sum_m E[Y | A = 1, M = m] \Pr[M = m | A = 0]
$$

The proof is shown in Technical Point 23.1.

The mediation formula seems surprising because it identifies a cross-world counterfactual quantity whose value cannot be empirically confirmed by any experimental intervention on *A* and *M*, not even in principle. To achieve this, however, one needs to assume that the causal diagram in Figure 23.1 represents an NPSEM-IE rather than an FFRCISTG, the latter of which is the counterfactual model that we have been using throughout the book (see Technical Point 6.2).

The proof of the mediation formula requires the unverifiable assumption that some counterfactual variables defined in separate worlds are independent. Specifically, the proof requires that the value of the outcome $Y^{a=1, m}$ in a world

Pearl (2001) referred to the pure direct effect and the total indirect effect as the natural direct effect and the natural indirect effect, respectively.

In some very unusual situations, we could identify the value of this cross-world counterfactual quantity by a crossover trial (see Fine Points 2.1 and 3.2).Under an FFRCISTG model, the pure direct effect and the total indirect effect are not point identified, but sharp bounds can be obtained (Robins and Richardson 2010).

in which we have jointly intervened by setting the value of treatment to 1 and the value of the mediator to *m* is independent from the value of the mediator *M*<sup>*a*=0</sup> in a world in which we have intervened to set the value of treatment to 0. Therefore, the variables *Y*<sup>*a*=1,*m*</sup> and *M*<sup>*a*=0</sup> cannot be simultaneously observed for the same individual in a single world, and thus their independence is not empirically verifiable in any experiment in which *A* and *M* are randomly assigned singly or jointly (see Technical Point 7.1).

These *cross-world independencies* are assumed under an NPSEM-IE but not under an FFRCISTG model. This is one reason for our privileging an FFRCISTG model over an NPSEM-IE: because cross-world independencies cannot be verified by any randomized experiment, we want to use causal inference methods whose results are, in principle, verifiable.

Based on this discussion, some policy makers are unimpressed that the investigators can identify the pure direct effect. As a cross-world parameter, they find the pure direct effect to be without policy or public health importance because it does not correspond to any intervention. To convince these skeptics, advocates of the NPSEM-IE will need to work harder.

## 23.2 A defense of mediation analysis

The investigators of the smoking cessation trial, as advocates of the NPSEM-IE, prepare the following rationale to convince the skeptics about the practical utility of the pure direct effect.

> "Suppose that, starting a year from now, nicotine-free cigarettes will be available and that your policy goal is learning the benefits of nicotine-free cigarettes as soon as possible. To do so, we use the already collected data from the above smoking cessation trial to estimate the two-year risk of heart disease *Y* under an intervention requiring all smokers to change to nicotine-free cigarettes (when they become available). Suppose that strong experimental evidence exists that (i) the entire causal effect of nicotine on the outcome *Y* (heart disease) is through its effect on the mediator *M* (hypertension), and that (ii) the non-nicotine components in cigarettes have no direct causal effect on the mediator *M* (hypertension). Under assumptions (i) and (ii), the hypertensive status *M* of a smoker of nicotine-free cigarettes will equal her hypertensive status under non-exposure to cigarettes and hence $E[Y^{a=1, M^{a=0}}]$ will be the risk of heart disease in smokers were all smokers to change to nicotine-free cigarettes a year from now. That is exactly your public health effect of interest and this is what the mediation formula would compute when applied to the data of our study".

Pearl (2001) provided a similar argument to justify the use of pure direct effects.

This is interesting. To argue for the substantive importance of the parameter $E[Y^{a=1, M^{a=0}}]$, the NPSEM-IE advocates tell a story about the effect of an intervention on the nicotine content of cigarettes—an intervention that makes no reference to the mediator *M* at all. Also, they make the “no direct effect” assumptions (i) and (ii) about the absence of direct effects of variables that were not even included on the causal diagram in Figure 23.1.

The investigators’ story states that the variable *A* can be decomposed into two separable components *N* and *O*. The separable component *N* directlyTechnical Point 23.2

**When the mediation formula is the g-formula.** According to the causal diagram in Figure 23.3, exchangeability holds for the separable components *N* and *O* and therefore the mean E [Y<sup>*n*=0,*o*=1</sup>] may be identified by the g-formula. However, in the smoking cessation trial described in the main text, no individual has data (*N* = 0, *O* = 1). Therefore, positivity does not hold and it appears that the g-formula cannot identify E [Y<sup>*n*=0,*o*=1</sup>]. But, given exchangeability and consistency, positivity is a sufficient but not necessary condition for identification by the g-formula; identification only requires that the g-formula is a function of the observed data distribution. We now show that the deterministic bold arrows in Figure 23.2 and the no direct effect assumptions (i) and (ii) together imply that the g-formula is indeed a function of the observed data distribution of (*A*, *M*, *Y*)—that function being the mediation formula.

Under an FFRCISTG represented by Figure 23.2, if data on *N* and *O* were available, the mean E [Y<sup>*n*=0,*o*=1</sup>] would be identified by the g-formula

$$
\sum_m \mathrm{E}[Y | O = 1, M = m] \mathrm{Pr}(M = m | N = 0)
$$

since, in the g-formula *N* = 0 needs not be included in the first conditioning event and *O* = 1 needs not be included in the second conditioning event because *N* is not a parent of *Y* and *O* is not a parent of *M* in Figure 23.2. Furthermore, even though positivity does not hold, the g-formula is a function of the observed data distribution only because *O* = 1 if and only if *A* = 1 and *N* = 0 if and only if *A* = 0. Thus, we can rewrite the g-formula for E [Y<sup>*n*=0,*o*=1</sup>] as

$$
\sum_m \mathrm{E}[Y | A = 1, M = m] \mathrm{Pr}(M = m | A = 0)
$$

which is exactly the mediation formula. This derivation, based on the g-formula, is somewhat heuristic because of the
presence of null sets arising from determinism between *N*, *O* and *L*. Robins et al. (2022) provide an alternative, rigorous
proof using the SWIG Markov property described in Technical Point 21.12.

Not only does the g-formula equal the mediation formula under the expanded causal diagram in Figure 23.2, but the g-formula also equals the front door formula under the expanded causal diagram in Figure 23.7, as shown in Technical Point 23.3.

![[_resources/causal inference what if_Part23/e2a1e54c34ebf626df0702ff9e0e294d_MD5.jpg]]

Figure 23.2

These are “no controlled direct ef-
fect” assumptions. Assumption (i)
says that there is no direct effect of
N on Y when controlling for (set-
ting) the value of M.

affects *M* but not *Y*. The separable component *O* directly affects *Y* but not *M*. Also, according to the story, each separable component can in principle be intervened on separately. For example, *Y*<sup>*n*=0,*o*=1</sup> represents the counterfactual outcome under an intervention that removes (only) the nicotine component of cigarettes.

The most direct representation of this causal story is provided by an FFR-
CISTG model represented by the causal DAG in Figure 23.2 where *N* is a
binary variable representing nicotine exposure, and *O* is a binary variable rep-
resenting exposure to the other non-nicotine components of a cigarette. The
bold arrows from *A* to *N* and *O* indicate deterministic relationships. This is
because, in the actual data from the trial, either one continues to smoke normal
cigarettes so *A* = *N* = *O* = 1, or quits smoking cigarettes so *A* = *N* = *O* = 0.
The absence of an arrow from *N* to *Y* encodes assumption (i) that *N* does
not have a direct effect on *Y*. The absence of an arrow from *O* to *M* en-
codes assumption (ii) that *O* does not have an effect on *M*. Figure 23.3 shows
the associated SWIG. If *O* is not a cause of *M* for every individual we can
additionally write the random variable *M*<sup>*n*,*o*</sup> as *M*<sup>*n*</sup>.

Under this characterization of the problem, the g-formula that identifies
E [Y<sup>*n*=0,*o*=1</sup>] is exactly the mediation formula (see proof in Technical Point
23.2). Let us review the lessons we learned.

For a researcher that initially accepted an NPSEM-IE associated with the![[_resources/causal inference what if_Part23/f229e3273dc9bb536f08205af7087751_MD5.jpg]]

Figure 23.3

DAG in Figure 22.1, the mean $E[Y^{a=1, M^{a=0}}]$ was already identified by the mediation formula so the story of separable effects of $N$ and $O$ did not contribute to identification. Rather, it served only to show that the parameter $E[Y^{a=1, M^{a=0}}]$ —and thus the pure direct effect and the total indirect effect— encodes a parameter $E[Y^{n=0, o=1}]$ of public health interest. For a researcher that takes the FFRCISTG point of view, the story not only provides an interventional interpretation of the mean $E[Y^{a=1, M^{a=0}}]$ as the mean $E[Y^{n=0, o=1}]$, but in addition makes both means identifiable via the g-formula or, equivalently, the mediation formula. In fact, when we interpret absence of an arrow as an absence of a direct causal effect for all individuals, $Y^{a=1, M^{a=0}}$ and $Y^{n=0, o=1}$ are equal for every individual.

This characterization of the problem also allows us to define and identify the separable direct effect of the component $N$ on the outcome $Y$, $E[Y^{n=1, o=1}] - E[Y^{n=0, o=1}]$, which is a controlled direct effect for the separable component $N$. This effect is also equal to the total indirect effect $E[Y^{a=1}] - E[Y^{a=1, M^{a=0}}]$. Analogously, $E[Y^{n=1, o=1}] - E[Y^{n=1, o=0}]$ is the pure direct effect $E[Y^{a=1, M^{a=0}}] - E[Y^{a=0}]$.

## 23.3 Empirically verifiable mediation

The interventional interpretation of $E[Y^{a=1, M^{a=0}}]$ is only valid if the story about the separable effects of $N$ and $O$ is correct and Figure 23.3 represents an FFRCISTG. An advantage of the interventional interpretation is that the validity of this story can be, in principle, empirically refuted via a randomized trial, as we now describe.

When nicotine-free cigarettes become available in a year, we conduct a new randomized trial in which a random sample of cigarette smokers are randomly assigned to one of three groups: smoking cessation ($A = N = O = 0$), continuation of smoking of standard cigarettes ($A = N = O = 1$), or continuation of smoking of nicotine-free cigarettes ($N = 0, O = 1$). That is, the new trial has the same two arms as the original trial plus an additional arm of nicotine-free cigarettes. In the absence of temporal trends, the mean outcomes for the first two arms should be the same in both trials. We assume that the sample size of both trials is large enough to ignore sampling variability.

By randomization, the mean outcome $E[Y|N = 0, O = 1]$ in the new trial is expected to equal $E[Y^{n=0, o=1}]$. Therefore, if our story is correct, we expect that $E[Y|N = 0, O = 1]$ will equal the mediation formula from the earlier trial. Otherwise, the $N$ and $O$ story has been empirically refuted, which implies that one or more of the following assumptions is incorrect: (i) no direct effect of nicotine on the outcome, (ii) no direct effect of other, non-nicotine components on the mediator, (iii) no unmeasured common cause $U$ of $M$ and $Y$ on the causal diagram in Figure 23.2.

If $E[Y|N = 0, O = 1]$ differs from the mediation formula, we can use the data from this new trial to investigate which of the assumptions (i)-(iii) are false. To do so, we start by checking whether $O$ and $M$ are associated among those with $N = 0$, i.e.,

$$
E[M|N = 0, O = 1] - E[M|N = 0, O = 0] \neq 0
$$**Empirical falsification of the assumptions for separable effects.** Suppose we had conducted the three-arm trial with interventions on *N* and *O*, and found that *N* and *Y* are associated within joint levels of *M* and *O*. Then, as stated in the main text, we conclude that either assumption (i) or assumption (iii), or both, are false.

To determine which of the two assumptions are false, we would need another randomized trial with, say, 8 arms in which we intervene on *M* as well as on *N* and *O*. If *N* has no direct effect on *Y* except through *M*, *N* will be independent of *Y* given *M* and *O* in the eight-arm trial. If *M* and *Y* do not share an unmeasured common cause, the conditional distribution of *Y* given *M* within levels of *N* and *O* should be the same in the three-arm trial and in the eight-arm trial.

One might wonder how Figure 23.2 can have an unmeasured common cause of *M* and *Y* left off the graph if we are correct in assuming that Figure 23.1 represents an FFRCISTG model with no common causes of *M* and *Y*. The explanation is that common causes may only be present (i.e., active) under interventions that assign different values of *N* and *O* to each person. The FFRCISTG model associated with Figure 23.1, unlike that associated with Figure 23.2, only considers interventions *A* = *N* = *O* = 1 and *A* = *N* = *O* = 0 that assign the same value to each person. Interestingly, if a common cause *U* of *Y* and *M* is the only reason $E[Y|N=0, O=1]$ in the new trial differs from the mediation formula, it is still the case that $Y^{n=0,o=1} = Y^{a=1,M^{a=0}}$ for every individual. However, $E[Y^{n=0,o=1}] = E[Y^{a=1,M^{a=0}}]$ is not identified by the mediation formula. Robins et al. (2022) describe a hypothetical but realistic study of treatment for river blindness under which Figure 23.1 is an FFRCISTG but Figure 23.2 is not because a common cause *U* of *Y* and *M* is missing from the latter graph.

If that is the case, then assumption (ii) is refuted and the arrow $O \rightarrow M$ should be added to Figure 23.2 (and the corresponding arrow to Figure 22.3).

We next check whether *N* and *Y* are associated within joint levels of *M* and *O*, i.e., whether

$$
E[Y|N=1, O=1, M=m] - E[Y|N=0, O=1, M=m] \neq 0
$$

for some values of *m*. If that is the case, then assumption (i) is refuted (which implies that an arrow $N \rightarrow Y$ should be added to the causal diagrams) or an unmeasured common cause *U* of *M* and *Y* exists (and should be added to the causal diagrams). See Fine Point 23.1.

Now suppose that in two years, when the results of the new trial become available, the mean outcome estimates are equal in the arms that correspond to the same intervention in both trials, but the estimate of the mean outcome in the third arm of the new trial, $E[Y|N=0, O=1]$, differs from the mediation formula in the first trial. How would different people react?

Both a person who had assumed that Figure 23.1 was an NPSEM-IE and a person who only assumed that it was an FFRCISTG would agree that the story of separable effects of *O* and *N* was incorrect, and that $E[Y^{n=0,o=1}]$ is correctly estimated by the mean outcome in the third arm of the new trial and not by the mediation formula in the earlier trial.

Those who had assumed an NPSEM-IE can continue to believe that the mean $E[Y^{a=1,M^{a=0}}]$ is still equal to the mediation formula, but they cannot justify the policy interest of the pure direct effect as the effect of taking nicotine-free cigarettes. Those who assumed an FFRCISTG may have little interest in the original mediation formula. Instead they will be interested in what they have learned about the effects of nicotine-free cigarettes on the outcome from the three-arm randomized trial. They will also be interested in learning that one or more of the following assumptions were false: (i) no direct effect ofIf $E[Y^{a=1, M^{a=0}}]$ were always point identified by the mediation formula, the sharp bounds in Robins and Richardson (2010) would be violated.

nicotine on the outcome, (ii) no direct effect of other, non-nicotine components on the mediator, (iii) no unmeasured common cause *U* of *M* and *Y*.

Continue to assume that Figure 23.1 represents an FFRCISTG model and that $E[Y^{n=0,o=1}]$ in the future nicotine-free cigarette trial differs from the mediation formula. An interesting question is whether treatment *A* can always be decomposed into other (possibly unknown) intervenable components $N'$ and $O'$ such that Figure 23.2 is an FFRCISTG and the no direct effect assumptions (i) and (ii) hold, in which case $E[Y^{n'=0,o'=1}]$ would equal $E[Y^{a=1,M^{a=0}}]$ and both would equal the mediation formula? The answer is no, since otherwise $E[Y^{a=1,M^{a=0}}]$ would always be point identified by the mediation formula, which is not the case.

## 23.4 An interventionist theory of mediation

This theory of interventionist mediation was presented by Robins and Richardson (2010) and extended by Robins, Richardson, and Shpitser (2022). The theory has been extended to survival analysis (Didelez 2019, Aalen et al. 2020), competing risks (Stensrud et al. 2020, 2021), and settings with interference (Shpitser et al. 2021).

![[_resources/causal inference what if_Part23/1b0673bb0d0315e4475063b8b59b8f0c_MD5.jpg]]

Figure 23.4

![[_resources/causal inference what if_Part23/03a20a508f4e94d8ea777ddd64f09353_MD5.jpg]]

Figure 23.5

Stensrud et al. (2021) emphasized the need for the above equalities of mean outcomes across arms of the six-arm trial.

In this chapter we have introduced an interventionist theory of causal mediation that differs from the standard approach based on pure direct and total indirect effects. Because the interventionist theory was developed in response to perceived deficiencies in the standard theory, we first described the standard theory and its problematic aspects resting on the use of cross-world (nested) counterfactuals. However, the interventionist theory can be viewed as autonomous, providing a self-contained framework for discussing mediation without reference to cross-world nested counterfactuals.

To do so, we used a (simplified) randomized trial with a time-fixed treatment as an intervention. The key idea was reframing the mediation question as a question about the effects of interventions on substantively meaningful, separable components (*N* and *O*) of treatment *A* on *Y*. If *N* and *O* are separable effects of *A*, then, in a future randomized trial with six arms:

1. treat with $a = 1$
2. treat with $a = 0$
3. treat with $n = 1, o = 1$
4. treat with $n = 0, o = 0$
5. treat with $n = 0, o = 1$
6. treat with $n = 1, o = 0)$

then the following two statements are true. First, the mean of the outcome *Y* in the first arm equals that in the third and the mean outcome in the second arm equals that in the fourth. Second, $E[Y^{n=0,o=1}]$ is identified as the mean outcome in the fifth arm and $E[Y^{n=1,o=0}]$ as the mean outcome in the sixth arm of the future trial, regardless of whether $E[Y^{n=0,o=1}]$ is not identified from the observed data.

We can use currently available data on *A*, *M*, and *Y* to identify the separable effects of *N* and *O* under the assumptions of (i) no unmeasured common cause of the mediator *M* and the outcome *Y* and (ii) no direct effects of the component *O* on the mediator *M* and of component *N* on outcome *Y*. In particular, $E[Y^{n=0,o=1}]$ equals the mediation formula.Fine Point 23.2

**Separable effects with a surrogate mediator.** In the following we adopt the theory of causal diagrams introduced in Section 9.5. Since the arrow from *M* to *Y* is only causally interpretable when there exist well-defined interventions for the effect of *M* on *Y*, the DAG in Figure 23.1 is not causal when those interventions do no exist. That is, *M* is not a mediator but rather a surrogate for an unknown variable *H* that is the true mediator for which well-defined interventions exist. The causal DAG in Figure 23.4 represents this scenario.

Consider the causal diagram in Figure 23.5, which is an extension of Figure 23.4 with separable components *N* and *O*. In contrast to Figure 23.2, *N* and *Y* are not d-separated given *M* and *O* in Figure 23.5. Suppose, surprisingly, we observe that *N* and *Y* are independent given *M* and *O* in our three-arm trial data. How should we interpret this observation? There are 4 possibilities: a) we were mistaken: Figure 23.1 rather than 23.4 is the true causal diagram and *M* is the true causal mediator, b) *M* is a one-to-one deterministic function of the true causal mediator *H*, c) there is a non-deterministic faithfulness violation in Figure 23.4, and d) *N* and *O* are not conditionally independent but the three-arm trial was too small to detect their dependence. Advocates of causal discovery would tend to adopt interpretation a) if the sample size in the three-arm trial was large (see Technical Point 10.7).

We now discuss one further reason to prefer an interventionist approach over earlier approaches to causal mediation. Specifically, it is often the case that

interventions on the putative mediator *M* are not well-defined and counter-
factuals like *Y*<sup>*a,m*</sup> are then not meaningful. Then neither the pure direct effect
nor the controlled direct effects (described in Technical Point 22.1) based on
*M* exist. In contrast, the interventionist theory is concerned with effects that
exist, even if interventions on *M* are not well-defined, as long as substantively
meaningful separable components *N* and *O* exist and can be intervened on as
discussed above.

To summarize, an interventionist approach to mediation include the follow-
ing components.

* the hypothesis that treatment *A* can be decomposed into multiple, substantially meaningful, separable components, each of which contributes to the overall effect of treatment and which can, in principle be independently intervened on
* the assumptions needed to identify the effects of the separable components are, in principle, empirically verifiable in future randomized trials in which these components are actually intervened on
* well-defined interventions on a purported mediator need not exist
* enhanced communication with subject-matter experts owing to the substantive specificity of the separable components
* when the identifying assumptions hold, the identifying g-formula is identical to the mediation formula; however, the identified causal effects refer to interventions on the separable components.

For simplicity, we considered an example with only two separable components,
but the interventionist framework can accommodate multiple separable com-
ponents of treatment, including those that vary over time.

In this chapter we have reviewed theoretical concepts of mediation, but we
have not emphasized the practical aspects of data analyses to estimate pure

![[_resources/causal inference what if_Part23/80dbcb8cc8457ba7617a4f24c0c47a93_MD5.jpg]]

Figure 23.6

![[_resources/causal inference what if_Part23/bee9a3783c3c031e774061b85f1255f4_MD5.jpg]]

Figure 23.7

![[_resources/causal inference what if_Part23/11a495837dfa0260b0b1c35f05e94510_MD5.jpg]]

Figure 23.8Technical Point 23.3

**Path-specific effects and the front door formula.** Under Figure 23.6, which is the modified version of Figure 9.14, the total effect of *L* on *Y* is not identified. This is because the contribution of the pathway *L* → *Y* to the total effect cannot be separated from the confounding effect of *H*. In contrast, under the unmodified causal diagram in Figure 9.14 lacking the *L* → *Y* edge, we showed in Fine Point 9.5 that the total effect of *L* on *Y* was identified by the front door formula, as *L* → *A* → *Y* was the sole causal pathway.

We now consider whether the effect of *L* along the pathway *L* → *A* → *Y* is also identified, and by the same front door formula when the *L* → *Y* edge is present. In the spirit of this chapter, we shall use the substantive story in Fine Point 9.5 to provide an interventionist formulation of this question. Figure 23.7 is an expanded graph where *N* records the value of BMI *L* reported to the physician responsible for prescribing drug *A*, and *O* records the value of *L* used to determine referral to physical therapy and diet counseling. The bold arrows indicate a deterministic relationship, since, in the observed data, we always have *L* = *N* = *O*. Figure 23.8 is a SWIG representing an (unethical) intervention in which a value *n* of BMI different from the truth *L* = *N* was reported to the physician, but the true value *L* = *O* was used for the referrals. In contrast with earlier in this chapter, only *N* has been intervened on. Further, as was our goal, the effect on *Y* of the intervention on *n* is restricted to the path through *A*. Since *L* ≡ *O* even in the intervened world, we have no need of *O*. We therefore remove *O* from Figures 23.7 and 23.8 and again have *Y* as a child of *L*. Then noting trivially that *Y*<sup>*n*</sup> ∩ *N*|*L* on Figure 23.8, E [*Y*<sup>*n*</sup>] should be given by the g-formula based on Figure 23.7 which equals

$$
\sum_{l,a} \mathrm{E}[Y|A=a, L=l] \mathrm{Pr}[L=l] \mathrm{Pr}[A=a|N=n] = \sum_{a} \left\{ \sum_{l} \mathrm{E}[Y|A=a, L=l] \mathrm{pr}[L=l] \right\} \mathrm{Pr}[A=a|L=n]
$$

where the last equality is by the determinism $L \equiv N$ in the data. The right hand side is indeed the front door formula.

However, this derivation is somewhat heuristic due to the presence of null sets arising from determinism. A rigorous
proof is readily obtained by combining determinism with the approach used in Technical Point 21.12 to prove the
front door formula. Note also that, substantively speaking, one generally would not consider *N* and *O* as separable
components of *L*. But that is irrelevant. What matters is that our substantive causal story implies an expanded graph
23.7 containing the new intervention variable *N* that is deterministically related to *L* in the actual world (Stensrud et
al., 2023). Wen et al. (2023) have independently and concurrently obtained results essentially equivalent to those of
this technical point. Fulcher et al. (2020) had earlier shown that the above front door formula identifies the cross world
counterfactual quantity $E[Y^{L,A^{l=n}}]$ under the NPSEM-IE model associated with Figure 23.6. Both Wen et al. and this
Technical Point can be seen as interventionist reformulations of Fulcher et al's result.

direct effects and separable direct effects. In the previous chapter, we adopted
a similar approach when introducing controlled direct effects and principal
stratum direct effects. We hope that our presentation has clarified the scientific
advantages of an interventionist approach to the identification of direct effects.

In the absence of randomized trials with actual interventions on either the
mediator (for controlled direct effects) or components of treatment (for sep-
arable direct effects), all these methodologies rely on observational data and
therefore on the exchangeability assumptions that we have discussed through-
out the book. Hence, valid mediation analyses require adjustment for the
confounders for the effect of treatment and for the effect of the mediator in
addition to other assumptions that we discussed in this chapter. Our causal di-
agram in Figure 23.1 was intended as a teaching device to explore theoretical
issues related to mediation in a simplified setting, not as a realistic repre-
sentation of most studies of causal mediation. In practice, causal mediation
analyses are observational analyses that rely on more heroic assumptions than
non-mediation analyses.

For separable effects, additional issues arise if there is a measured cause of *M* and *Y* that is a child of *N* and *O* (Robins and Richardson 2010; Robins et al. 2022).