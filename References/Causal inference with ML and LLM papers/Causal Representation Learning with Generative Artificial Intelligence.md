arXiv:2410.00903v3 [stat.AP] 3 Jul 2025

# Causal Representation Learning with Generative Artificial Intelligence: Application to Texts as Treatments*

Kosuke Imai†

Kentaro Nakamura‡

July 4, 2025

## Abstract

In this paper, we demonstrate how to enhance the validity of causal inference with unstructured high-dimensional treatments like texts, by leveraging the power of generative Artificial Intelligence (GenAI). Specifically, we propose to use a deep generative model such as large language models (LLMs) to efficiently generate treatments and use their internal representation for subsequent causal effect estimation. We show that the knowledge of this true internal representation helps disentangle the treatment features of interest, such as specific sentiments and certain topics, from other possibly unknown confounding features. Unlike existing methods, the proposed GenAI-Powered Inference (GPI) methodology eliminates the need to learn causal representation from the data, and hence produces more accurate and efficient estimates. We formally establish the conditions required for the nonparametric identification of the average treatment effect, propose an estimation strategy that avoids the violation of the overlap assumption, and derive the asymptotic properties of the proposed estimator through the application of double machine learning. Finally, using an instrumental variables approach, we extend the proposed methodology to the settings in which the treatment feature is based on human perception. The proposed GPI methodology is also applicable to text reuse where an LLM is used to regenerate existing texts. We conduct simulation and empirical studies, using the generated text data from an open-source LLM, Llama 3, to illustrate the advantages of our estimator over state-of-the-art causal representation learning algorithms.

**Key Words:** causal inference, deep generative models, double machine learning, large language models, unstructured treatments

*An open-source Python package, “GPI: Generative-AI Powered Inference,” that implements the proposed methodology is available at https://gpi-pack.github.io/. We thank Christian Fong and Justin Grimmer for kindly sharing their dataset used in Candidate Profile Experiment and Naoki Egami for helpful comments. We also acknowledge useful comments from Naoki Egami, Max Kasy, and an anonymous reviewer of Harvard’s Alexander and Diviya Magaro Peer Pre-Review Program.
†Professor, Department of Government and Department of Statistics, Harvard University, Cambridge, MA 02138. Phone: 617-384-6778, Email: Imai@Harvard.Edu, URL: https://imai.fas.harvard.edu
‡Ph.D. student, John F. Kennedy School of Government, Harvard University. Email: knakamura@g.harvard.edu# 1 Introduction

The emergence of generative artificial intelligence (GenAI) technology such as large language models (LLMs) has had an enormous impact on many fields, including medicine (Thirunavukarasu et al., 2023), education (Kasneci et al., 2023), marketing (Kshetri et al., 2024), and social sciences (Bisbee et al., 2024). These tools come with advanced capabilities to quickly generate realistic texts, images, and videos based on the user-provided prompts.

In this paper, we demonstrate that GenAI can be used to enhance the performance of *causal representation learning* from unstructured data such as images and texts. The proposed GenAI-Powered Inference (GPI) methodology addresses two major methodological challenges. First, since images and texts are high-dimensional objects, machine learning algorithms are required to quantify their causal effects. Second, these unstructured data lack a format with meaningful variables, and so we must learn their lower-dimensional causal representation. As a concrete application of the GPI, we focus on the settings where texts are used as treatments. Specifically, we introduce an experimental design (Section 2) and develop an efficient estimation strategy to infer the causal effects of specific features contained in texts, such as sentiments and topics (Section 3).

In the proposed experiment, we first generate texts by providing treatment and control prompts to an LLM. If one wishes to use existing texts as treatments rather than generate new ones to improve external validity (Egami and Hartman, 2023), we could ask an LLM to reproduce the texts exactly. We then present each of these generated texts to a randomly selected survey respondent and measure their reactions. Lastly, we directly extract the true internal representation of the generated text from the LLM and analyze it with a machine learning algorithm to disentangle the treatment features from other confounding features contained within the same texts. The key insight of the GPI is to leverage the true vectorized representation of treatment texts that is available in an open-source deep generative model. This enables us to efficiently learn causal representation of unstructured data even when texts contain strong confounding features.

As part of the proposed estimation approach, we develop a neural network architecture based on Tar-Net (Shalit et al., 2017) to separately learn treatment and confounding features. We show that it is possible to nonparametrically identify a *deconfounder*, which summarizes all confounding features as a lower-dimensional function of the internal representation obtained from a deep generative model. Once a deconfounder is estimated, we use it to model the treatment features and estimate the propensity score. We then apply the double machine learning (DML) methodology to obtain the asymptotically valid confidence intervals (Chernozhukov et al., 2018). An open-source Python package, “GPI: Generative-AI Powered Inference,” that implements the proposed methodology is available at https://gpi-pack.github.io/.

To investigate the empirical performance of the proposed methodology, we design simulation studies based on the candidate profile experiment of Fong and Grimmer (2016) (Section 4). In this experiment, survey respondents are asked to evaluate biographies of different political candidates. Our goal is to infer the causal effects of certain features of these biographies, such as military background and education levels. We use an open-source LLM, Llama 3, to generate a set of new candidate biographies and design simulation studies to compare the performance of the proposed estimator with that of state-of-the-art methods. We also have Llama 3 regenerate the existing biographies to examine the performance of the proposed methodology in the case of text reuse.

We find that the GPI outperforms the competing methods, which estimate the causal representation using the existing embedding (Pryzant et al., 2021; Gui and Veitch, 2023). Specifically, the proposed estimator has a smaller bias and root mean squared error, while its confidence interval retains a proper nominal coverage level. These findings hold even when the sample size is relatively small, and in the case of text reuse. Furthermore, we apply the GPI to human responses to the candidate profile experiment (Section 5). Our analysis shows that the previous military experience of the candidates significantly affects the voter evaluation on average.Finally, we extend the proposed methodology to the estimation of the causal effects of *perceived* treatment features, motivated by the fact that the respondents may perceive the same treatment features differently (Appendix S1). A key challenge is that the perceived treatment features may be confounded by possibly unobserved respondent characteristics as well as the confounding features of texts. To address this, we adopt the instrumental variable approach (Imbens and Angrist, 1994) by using the actual treatment features as instruments for their perceived counterparts.

**Related literature.** There exist several works that estimate the causal effects of treatment features of texts (see Feder et al., 2022, for a review). The key difference between the proposed methodology and these previous approaches is the use of GenAI to produce treatment objects. We exploit the fact that the *true* vectorized representation of generated texts can be obtained directly from open-source deep generative models. In contrast, existing methods learn causal representation from the treatment texts in a variety of ways. For example, Fong and Grimmer (2016) and Ahrens et al. (2021) impose topic models, whereas Pryzant et al. (2021) and Gui and Veitch (2023) estimate the vector representation using the BERT (Bidirectional Encoder Representations from Transformers) embeddings. We show that the use of true representation not only improves the estimation performance but also significantly increases computational efficiency.

Our work has broader implications for the literature on causal inference and unstructured objects in general. For example, scholars have developed methods that adjust for texts as confounders, but all of these methods estimate a low-dimensional representation of confounding information from texts (Veitch et al., 2020; Roberts et al., 2020; Klaassen et al., 2024; Mozer et al., 2020, 2024). Although our paper focuses on the use of texts as treatments rather than confounders, the proposed use of GenAI should be beneficial for these other cases where existing estimation methods are likely to suffer from estimation error (Keith et al., 2020). Similarly, the proposed approach can also be applied to causal inference with images and even videos. For example, Jerzak et al. (2023a,b) have considered the use of causal inference with images in an observational setting. Given the availability of deep generative models for images, it would be of interest to use GenAI for improved causal inference with images (e.g., Ramesh et al., 2021; Rombach et al., 2022).

Our work contributes to the literature on causal representation learning. Since unstructured objects such as texts are high-dimensional, learning a low-dimensional representation is crucial (e.g., Shi et al., 2019; Wang and Jordan, 2022). Some existing work proposes learning a low-dimensional representation that predicts both treatment and outcome well (e.g., Veitch et al., 2020; Gui and Veitch, 2023). Although we also use a low-dimensional representation to adjust for confounding features, the proposed methodology disentangles confounding features from treatment features without violating the overlap assumption.

Finally, our methodology differs from that of Wang and Blei (2019) though both use the estimated “de-confounder” for confounding adjustment. Wang and Blei adjust the *unobserved* confounding by estimating the deconfounder as a function of treatments (Imai and Jiang, 2019). In contrast, the proposed method learns a representation of *observed* confounding by estimating the deconfounder as a function of generative model’s internal representation of treatment objects. In this setting, we formally establish the nonparametric identification of the average treatment effect.

## 2 The Experimental Design for Texts as Treatments

While the proposed methodology is general, it is helpful to consider a concrete application. We use the candidate profile experiment of Fong and Grimmer (2016) which investigates how various features of a political candidate affect voter evaluation. In the context of this experiment, we describe our alternative approach that uses LLMs to generate treatment texts. In Sections 4 and 5, we return to this application to empirically evaluate the performance of the proposed methodology.<table><tr><td><strong>Candidate biography with military background</strong><br>Anthony Higgins was born in Red Lion Hundred in New Castle County, Delaware. He attended Newark Academy and Delaware College, and graduated from Yale College in 1861, where he was a member of Skull and Bones. After studying law at the Harvard Law School, he was admitted to the bar in 1864 and began practice in Wilmington, Delaware. He also served for a time in the United States Army in 1864.</td></tr><tr><td><strong>Candidate biography without military background</strong><br>Benjamin Tappan was born in Northampton, Massachusetts, the second child and oldest son of Benjamin Tappan and Sarah (Homes) Tappan, who was a grandniece of Benjamin Franklin. Two of his younger brothers were abolitionists Arthur Tappan and Lewis Tappan. He attended the public schools in Northampton and traveled to the West Indies in his youth. He apprenticed as a printer and engraver, also studying painting with Gilbert Stuart. He read law to be admitted to the bar in Hartford, Connecticut, in 1799. Later that year, he moved to the Connecticut Western Reserve and founded what is now Ravenna, Ohio, laying out the original village in 1808. He married, March 20, 1801, Nancy Wright, sister of John C. Wright (congressman), afterwards a United States House of Representatives from Ohio. They had one son, Benjamin, born in 1812.</td></tr></table>

Table 1: Two examples of candidate biographies with and without military background from the experiment conducted by Fong and Grimmer (2016)

## 2.1 Candidate profile experiment

Fong and Grimmer (2016) collected 1,246 candidate biographies (written in texts) from Wikipedia, and then asked a total of 1,886 voters to answer an online survey evaluating up to four randomly assigned candidate profiles. Specifically, the survey asked these voters to rate each candidate biography using a feeling thermometer that ranges from 0 (cold) to 100 (warm). The authors first used a supervised Bayesian model based on the Indian buffet process to discover a total of 10 treatment features and then estimated the marginal association between each treatment feature and the observed feeling thermometer value.

Unlike the original analysis, we consider a setting in which researchers have a specific treatment feature of interest. Suppose that we are interested in estimating the causal effect of having a military background on voter evaluation. The relevant political science literature suggests that the experience and occupation of candidates play an important role (e.g., Kirkland and Coppock, 2018; Campbell and Cowley, 2014; Pedersen et al., 2019). Indeed, the original analysis shows that candidate biographies with military background tend to receive a high feeling thermometer score.

The challenge, however, is that military background may be correlated with other features present in candidate biographies. Table 1 displays two example biographies used in the original experiment. The first describes a candidate with military background, whereas the second shows another candidate without military background. Yet, these two biographies also differ in terms of other features, including educational background, marital status, and family structure. The length of each biography and their levels of detail are also different. If these additional differences are correlated with military background and influence voter evaluation, a simple comparison between biographies with military background and those without it would lead to biased causal estimates.

## 2.2 Using large language models to (re)generate treatment texts

We use an LLM to generate treatment texts. In the current context, we can achieve this in two ways. First, we can provide a prompt to an LLM, asking it to generate a candidate biography from scratch. Alternatively, we can use existing biographies (e.g., those collected by Fong and Grimmer (2016)) and then ask an LLM<table><thead><tr><th>Prompts</th><th>Generated candidate biography</th></tr></thead><tbody><tr><td>(System): You are a text generator who always produces a biography of the instructed person.<br>(User): Create a biography of an American politician named Nathaniel C. Gilchrist</td><td>Nathaniel C. Gilchrist was an American politician who served as a member of the United States House of Representatives from Maryland's 4th congressional district from 1895 to 1899. Born on November 24, 1847, in Baltimore, Maryland, Gilchrist was the son of a prominent family of merchants and shipbuilders. He was educated at the Baltimore City College and later attended the University of Maryland, where he studied law. After graduating, he was admitted to the bar and began practicing law in Baltimore.</td></tr><tr><td>(System): You are a text generator who just repeats the input text.<br>(User): Higgins was born in Red Lion Hundred in New Castle County, Delaware. He attended Newark Academy and Delaware College, and graduated from Yale College in 1861, where he was a member of Skull and Bones. After studying law at the Harvard Law School, he was admitted to the bar in 1864 and began practice in Wilmington, Delaware. He also served for a time in the United States Army in 1864.</td><td>Higgins was born in Red Lion Hundred in New Castle County, Delaware. He attended Newark Academy and Delaware College, and graduated from Yale College in 1861, where he was a member of Skull and Bones. After studying law at the Harvard Law School, he was admitted to the bar in 1864 and began practice in Wilmington, Delaware. He also served for a time in the United States Army in 1864.</td></tr></tbody></table>

Table 2: Two examples of generated candidate biographies with Llama 3. The system-level input (System) defines the type of tasks to be performed, whereas the user-level input (User) defines a specific task to be performed.

to reproduce the same biographies without any modification.

Both approaches require (1) the coding of the treatment variable (e.g., the existence of military background) and (2) the extraction of the internal representation of LLM used to generate treatment texts. The first requirement may mean that human coders have to read treatment texts unless one is willing to assume that LLM has a good compliance with the instruction in the prompts. The second requirement implies that we should use open-source LLMs including GPT (Generative Pre-trained Transformer), Llama (Large Language Model Meta AI), and OPT (Open Pre-trained Transformer).

Table 2 shows an example from each approach. Here, we use Meta's Llama 3 instruction-tuned model with eight billion parameters. This model takes two types of inputs: system-level inputs (System), which define the type of task to be performed, and user-level inputs (User), which define a specific task to be performed. The first example in the table shows how the model generates a new candidate biography with military background from scratch, whereas the second shows how the model reproduces a given biography. The former suggests that generative models can efficiently create realistic treatments, while the latter indicates that they can follow the instruction accurately.

We emphasize that the use of LLM in itself does not automatically solve the confounding bias. This is because the LLM learns the associations of words in real-world texts, and even if one manipulates the concepts with instructions, other correlated concepts might also be influenced, causing the confounding bias (Hu and Li, 2021). Now, we turn to the proposed methodology that adjusts for confounding features inunstructured treatment objects such as texts to estimate the causal effects of the specific treatment feature of interest.

# 3 The Proposed Methodology

We now present the proposed GPI methodology. We begin by defining the causal quantity of interest. We then establish its nonparametric identification and develop an estimation strategy.

## 3.1 Assumptions and causal quantity of interest

Consider a simple random sample of $N$ respondents drawn from a population of interest. For each respondent $i = 1, 2, \dots, N$, we assign a prompt $P_i$ that is randomly and independently sampled from a set of potential prompts $\mathcal{P}$. In our application, the prompts are based on natural language (e.g., “Create a biography of an American politician who has some military experience”). While our framework allows for stratified randomization, for simplicity, we assume that the random assignment of prompt is done without conditioning on pre-treatment covariates such as respondent characteristics and types of prompts. Given each prompt, we use a deep generative model to generate a *treatment object* such as text, denoted by $\mathbf{X}_i \in \mathcal{X}$ where $\mathcal{X}$ is the support of $\mathbf{X}_i$.

We use a broad definition of a deep generative model so that it encompasses many LLMs and other types of foundation models. For example, our definition includes a number of models for texts (e.g., Touvron et al., 2023; Zhang et al., 2022; Jiang et al., 2023a) and images (e.g., Ramesh et al., 2021; Rombach et al., 2022).

**DEFINITION 1 (DEEP GENERATIVE MODEL)** A deep generative model is the following probabilistic model that takes prompt $P_i$ as an input and generates the treatment object $\mathbf{X}_i$ as an output:

$$
\mathbb{P}(\mathbf{X}_i | \mathbf{h}_{\gamma}(\mathbf{R}_i)) \\ \mathbb{P}(\mathbf{R}_i | \mathbf{P}_i)
$$

where $\mathbf{R}_i \in \mathcal{R} \subset \mathbb{R}^{d_R}$ denotes an observable internal representation of $\mathbf{X}_i$ contained in the model and $\mathbf{h}_{\gamma}(\mathbf{R}_i)$ is a deterministic function parameterized by $\gamma$ that completely characterizes the conditional distribution of $\mathbf{X}_i$ given $\mathbf{R}_i$.

Under this definition, $\mathbf{R}$ represents a lower-dimensional representation of the treatment object $\mathbf{X}$ and is a hidden representation of neural networks. In addition, $\mathbf{h}_{\gamma}(\mathbf{R})$ is the propensity function (Imai and van Dyk, 2004) and is both known and observable in an open-source deep generative model. Thus, the treatment object $\mathbf{X}$ depends on $\mathbf{P}$ only through $\mathbf{h}_{\gamma}(\mathbf{R})$. Note that any given text $\mathbf{X}_i$ can have multiple internal representations. For example, one can first instruct an LLM to generate a new text and then ask it to repeat the generated text exactly. These two prompts will produce the same text but yield different internal representations. In Section 4.3, our simulation study shows that the internal representation of regenerated text leads to more efficient causal estimates.

In the proposed experiment, each respondent $i$ is exposed to the generated treatment object $\mathbf{X}_i$, and subsequently generates the outcome variable $Y_i \in \mathcal{Y} \subset \mathbb{R}$ where $\mathcal{Y}$ is the support of $Y_i$. In our application, the treatment object is a candidate biography and the outcome is a respondent's evaluation of the biography. Let $Y_i(\mathbf{x})$ represent the potential outcome of respondent $i$ when exposed to a treatment object $\mathbf{x} \in \mathcal{X}$. Then, the observed outcome is solely determined by the assigned treatment object, i.e., $Y_i = Y_i(\mathbf{X}_i)$. This experimental design implies the following two assumptions.

**ASSUMPTION 1 (CONSISTENCY)** *The potential outcome under the treatment object $\mathbf{x} \in \mathcal{X}$, denoted by $Y_i(\mathbf{x})$, equals the observed outcome $Y_i$ under the realized treatment object $\mathbf{X}_i$:*

$$
Y_i = Y_i(\mathbf{X}_i).
$$**ASSUMPTION 2 (RANDOM ASSIGNMENT OF PROMPT)** *Prompt is randomly assigned such that the following independence holds for all $i$ and $x \in \mathcal{X}$:*

$$
Y_i(\mathbf{x}) \perp \mathbf{P}_i.
$$

We are interested in estimating the causal effect of a particular feature that can be part of a treatment object. For simplicity, we consider a binary treatment feature denoted by $T_i \in \{0, 1\}$ for each $i$. In our application, $T_i = 1$ if candidate biography $i$ contains some military background and $T_i = 0$ otherwise. We assume that the treatment feature $T$ is determined solely by the treatment object $\mathbf{X}$ (Egami et al., 2022).

**ASSUMPTION 3 (TREATMENT FEATURE)** *There exists a deterministic function $g_T : \mathcal{X} \to \{0, 1\}$ that maps a treatment object $\mathbf{X}_i$ to a binary treatment feature of interest $T_i$, i.e.,*

$$
T_i = g_T(\mathbf{X}_i).
$$

This assumption is violated, for example, if respondents infer different values of the treatment feature from the same treatment object. We address this issue in Appendix S1 by considering perceived treatment, which reflects heterogeneity between respondents.

Next, we define confounding features, which represent all features of $\mathbf{X}$ other than the treatment feature $T$ that influence the outcome $Y$. These confounding features, denoted by $\mathcal{U} \in \mathcal{U}$, are based on a vector-valued deterministic function of $\mathbf{X}$ where $\mathcal{U}$ denotes their support. The confounding features may be multidimensional, though we assume that its dimensionality is much smaller than that of the treatment object. In our application, confounding features may include other candidate characteristics and textual features of biographies, such as their length. These confounding features are possibly correlated with the treatment feature. Unlike the treatment feature, however, we do not directly observe the confounding features. Formally, the confounding features are defined as follows (Fong and Grimmer, 2023; Pryzant et al., 2021).

**ASSUMPTION 4 (CONFOUNDING FEATURES)** *There exists an unknown vector-valued deterministic function $g_U : \mathcal{X} \to \mathcal{U} \subset \mathcal{X}$ that maps an unstructured object $\mathbf{X}_i \in \mathcal{X}$ to the confounding features $\mathcal{U}_i \in \mathcal{U}$, i.e.,*

$$
\mathcal{U}_i = g_U(\mathbf{X}_i),
$$

where $\dim(\mathcal{U}_i) \ll \dim(\mathbf{X}_i)$.

Finally, we introduce our key assumption that the potential outcome is a function of treatment and confounding features and that we can intervene the treatment feature without changing the confounding features. In other words, the treatment feature cannot be represented as a deterministic function of the confounding features. In addition, confounding features should not vary as a deterministic function of treatment feature in order to avoid “posttreatment” bias (Daoud et al., 2022). In the candidate biography application, the assumption essentially implies that researchers need to be able to imagine hypothetical candidate biographies with and without military background while keeping the confounding features constant. We formalize this assumption as follows.

**ASSUMPTION 5 (SEPARABILITY OF TREATMENT AND CONFOUNDING FEATURES)** *The potential outcome is a function of the treatment feature of interest $t$ and another separate function of the confounding features $\mathbf{u}$. That is, for any given $\mathbf{x} \in \mathcal{X}$ and all $i$, we have:*

$$
Y_i(\mathbf{x}) = Y_i(t, \mathbf{u}) = Y_i(g_T(\mathbf{x}), g_U(\mathbf{x})),
$$![[_resources/Causal Representation Learning with Generative Artificial Intelligence/e3c01bd77955f3d5d62c73be7887c25a_MD5.jpg]]

Figure 1: Directed Acyclic Graph of the Assumed Data Generating Process. A treatment object **X** is generated using a deep generative model (rectangle), in which a prompt **P** produces an internal representation **R** that generates **X** through a propensity function $h_\gamma(\mathbf{R})$. The treatment object affects the outcome **Y** through its treatment feature of interest **T** and other confounding features **U**. An arrow with red double lines represents a deterministic causal relation while an arrow with a single line indicates a possibly stochastic relationship.

where $t = g_T(\mathbf{x}) \in \{0, 1\}$ and $\mathbf{u} = g_U(\mathbf{x}) \in \mathcal{U}$. In addition, $g_T$ and $g_U$ are separable. That is, there exists no deterministic function $\tilde{g}_T : \mathcal{U} \to \{0, 1\}$, which satisfies $g_T(\mathbf{x}) = \tilde{g}_T(g_U(\mathbf{x}))$ for all $\mathbf{x} \in \mathcal{X}$. Similarly, there exist no deterministic functions $g' : \mathcal{X} \to \mathcal{X}' \subset \mathcal{X}$ and $\tilde{g}_U : \{0, 1\} \times \mathcal{X}' \to \mathcal{U}$, which satisfy $g_U(\mathbf{x}) = \tilde{g}_U(g_T(\mathbf{x}), g'(\mathbf{x}))$ for all $\mathbf{x} \in \mathcal{X}$ and $\tilde{g}_U(1, g'(\mathbf{x}')) \neq \tilde{g}_U(0, g'(\mathbf{x}'))$ for some $\mathbf{x}' \in \mathcal{X}$.

The first requirement of separability (i.e., no existence of $\tilde{g}_T$) implies that the treatment should not be a deterministic function of confounding features, whereas the second requirement (i.e., no existence of $g'$ and $\tilde{g}_U$) means that the confounding features cannot vary as a deterministic function of treatment. Thus, the separability assumption holds when the treatment feature does not completely overlap with the other features that influence the outcome (i.e., confounding features).

As shown in Section 3.2, Assumption 5 plays an essential role in the identification of causal effects. Importantly, Assumptions 3–5 imply the standard overlap condition in causal inference, which enables to identify causal effects without extrapolation. In practice, as demonstrated in Section 4.3, the violation of Assumption 5 can be diagnosed by examining if the estimated propensity scores take extreme values. The following lemma formally establishes that the separability assumption implies the overlap condition.

LEMMA 1 (OVERLAP) Under Assumptions 3–5, for any $t \in \{0, 1\}$ and $\mathbf{u} \in \mathcal{U}$,

$$
\mathbb{P}(T_i = t | \mathbf{U}_i = \mathbf{u}) > 0.
$$

The proof is given in Appendix S2.1.

Under this setup, we are interested in estimating the average causal effect of the treatment feature while controlling for the confounding features. This average treatment effect (ATE) is defined as follows:

$$
\tau := \mathbb{E}[Y_i(1, \mathbf{U}_i) - Y_i(0, \mathbf{U}_i)]. \qquad (1)
$$

## 3.2 Nonparametric identification

Figure 1 presents a directed acyclic graph (DAG) that summarizes the data generating process described above. In the DAG, an arrow with double lines represents a deterministic causal relationship, while an arrow with a single line indicates a possibly stochastic causal relationship. We consider a deep generative model whose decoding is deterministic, meaning that the output object is a deterministic function of the input prompt. Formally, we make the following assumption.

ASSUMPTION 6 (DETERMINISTIC DECODING) The output layer of a deep generative model is deterministic. That is, $\mathbb{P}(\mathbf{X}_i | h_\gamma(\mathbf{R}_i))$ in Definition 1 is a degenerate distribution.If $\mathbb{P}(X_i | h_\gamma(R_i))$ is stochastic, the noise introduced by the deep generative model can confound the treatment in an unknown way. Fortunately, almost all LLMs have the option of deterministic decoding (e.g., greedy, beam, and contrastive searches), thereby easily satisfying the assumption. For example, for greedy decoding, we typically only need to set the temperature parameter to zero, instructing a model to always produce the same texts (e.g., Su et al., 2022). Indeed, most LLMs also have deterministic encoding architectures, making the entire text generation process deterministic. Similarly, for images, we can make the final decoding step deterministic for stochastic diffusion models, including Stable Diffusion (Rombach et al., 2022).

Given this setup, we establish the nonparametric identification of the ATE defined in Equation (1). Specifically, we prove the existence of a deconfounder function $f(R_i)$ that satisfies the conditional independence relation $Y_i \perp R_i | T_i$, $f(R_i)$. One trivial example of the deconfounder is the confounding features $U_i$, which are a deterministic function of $R_i$ under Assumption 6. But, the deconfounder need not be unique. In fact, we show that it is possible to identify the ATE by adjusting for any deconfounder.

**THEOREM 1 (NONPARAMETRIC IDENTIFICATION OF THE MARGINAL DISTRIBUTION OF POTENTIAL OUTCOME)** Under Assumptions 1-6, there exists a deconfounder function $f: \mathcal{R} \to \mathcal{Q} \subset \mathbb{R}^{d_Q}$ with $d_Q = \dim(\mathcal{Q}) \le d_R = \dim(\mathcal{R})$ that satisfies the following conditional independence relation:

$$
Y_i \perp R_i | T_i = t, f(R_i) = q, \qquad (2)
$$

where $0 < \mathbb{P}(T_i = t | f(R_i) = q) < 1$ for all $t = 0, 1$ and $q \in \mathcal{Q}$. In addition, the treatment feature and a deconfounder are separable. By adjusting for such a deconfounder, we can uniquely and nonparametrically identify the marginal distribution of the potential outcome under the treatment condition $T_i = t$ for $t \in \{0, 1\}$ as:

$$
\mathbb{P}(Y_i(t, U_i) = y) = \int_{\mathcal{R}} \mathbb{P}(Y_i = y | T_i = t, f(R_i)) dF(R_i),
$$

for all $t \in \{0, 1\}$ and $y \in \mathcal{Y}$.

The proof is given in Appendix S2.2. The definition of separability is given in Assumption 5 for the treatment and confounding features given the treatment object. In Theorem 1, we apply the same definition to the treatment feature and a deconfounder given the internal representation. Specifically, let $f_T: \mathcal{R} \to \{0, 1\}$ be the function that maps the internal representation to the treatment feature. Such a function exists because the treatment feature is a deterministic function of treatment object, which is in turn a deterministic function of the internal representation by Assumption 6. Then, we assume that $f_T$ and $f$ are separable. That is, there exists no deterministic function $\tilde{f}_T: \mathcal{Q} \to \{0, 1\}$, which satisfies $f_T(r) = \tilde{f}_T(f(r))$ for all $r \in \mathcal{R}$. Similarly, there exist no deterministic functions $f': \mathcal{Q} \to \mathcal{Q}'$ and $\tilde{f}': \{0, 1\} \times \mathcal{Q}' \to \mathcal{Q}$, which satisfy $f(r) = \tilde{f}(f_T(r), f'(r))$ for all $r \in \mathcal{R}$ and $\tilde{f}(1, f'(r')) \ne \tilde{f}(0, f'(r'))$ for some $r' \in \mathcal{R}$.

We emphasize that one cannot directly adjust for the internal representation of the treatment object. Such direct adjustment leads to the lack of overlap because, under Assumptions 3 and 6, the treatment feature $T_i$ is a deterministic function of $R_i$. In addition, since the deconfounder $f(R_i)$ is typically of much lower dimension than the internal representation of the treatment object $R_i$, making adjustments for the former leads to a more effective estimation strategy.

## 3.3 Estimation and inference

Given the identification result, we next consider estimation and inference. Our estimation strategy is based on the following two observations. First, Assumption 5 implies that the deconfounder $f(R_i)$ should not be a function of the treatment feature $T_i$. Second, the deconfounder should satisfy the conditional independence relation given in Equation (2). For simplicity, we assume independence across observations. Technically,![[_resources/Causal Representation Learning with Generative Artificial Intelligence/0064ec870c6d7d264c66b7ccaa821be3_MD5.jpg]]

Figure 2: Diagram Illustrating the Proposed Model Architecture. The proposed model takes an internal representation of a treatment object $R_i$ as an input, and finds a deconfounder $f(R_i)$, which is a lower-dimensional representation of $R_i$, and then use it to predict the conditional expectation of the outcome $\mu_t(f(R_i)) := \mathbb{E}[Y_i | T_i = t, f(R_i)]$ under each treatment arm $t = 0, 1$.

if a deep generative model has a stochastic component, we can only assume the conditional independence of observations given the internal representation. However, as discussed earlier, many language models have the option of making the whole text generation process deterministic, guaranteeing this conditional independence.

We use a neural network architecture based on TarNet (Shalit et al., 2017) to estimate the conditional potential outcome function given the deconfounder, i.e.,

$$
\mu_t(f(\mathbf{R}_i)) := \mathbb{E}[Y_i(t, \mathbf{U}_i) | f(\mathbf{R}_i)], \quad \text{for } t = 0, 1.
$$

Our architecture, which is summarized in Figure 2, simultaneously estimates the deconfounder and the outcome model. Specifically, we minimize the following loss function:

$$
\{\hat{\lambda}, \hat{\theta}_0, \hat{\theta}_1\} = \operatorname*{argmin}_{\lambda, \theta_0, \theta_1} \frac{1}{n} \sum_{i=1}^{n} \{Y_i - \mu_{T_i}(f(\mathbf{R}_i; \lambda); \theta_{T_i})\}^2, \quad (3)
$$

where $n$ is the sample size. We make the parameters of neural network explicit by letting $\lambda$ represent the parameters of deconfounder $f$ to be estimated, and using $\theta_t$ to denote the parameters of the nuisance function $\mu_t$.

Given the above architecture, we estimate the ATE using the double machine learning (DML) framework of Chernozhukov et al. (2018), in which both the outcome and the propensity score models are estimated. Here, we estimate the propensity score model as a function of the estimated deconfounder, i.e., $\pi(f(\mathbf{R}_i; \hat{\lambda})) = \Pr(T_i = 1 | f(\mathbf{R}_i; \hat{\lambda}))$ after solving the minimization problem in Equation (3). Crucially, we do not model the propensity score as a function of internal representation $R_i$ to avoid violating the assumption of overlap. Thus, the deconfounder only captures the features of treatment object that are predictive of the outcome beyond the treatment, including the features that are completely unrelated to the treatment. The deconfounder, however, will not capture the features of treatment object that affect the outcome only through the treatment feature. So long as such features exist (Assumption 5), the overlap assumption will hold (Lemma 1).

In the causal representation learning literature, DragonNet (Shi et al., 2019) is a popular estimation method used by many researchers (see e.g., Veitch et al., 2020; Gui and Veitch, 2023, as well as Pryzant et al. 2021 who also use it in their implementation code). Unlike our approach, DragonNet includes the cross-entropy loss between the propensity score model and the treatment variable when estimating the deconfounder $f(R_i)$. However, this joint estimation leads to $\mathbb{P}(T_i = 1 | f(R_i)) = \mathbb{P}(T_i = 1 | R_i)$ due to the fact that $f(R_i)$ is a balancing score satisfying $T_i \perp R_i | f(R_i)$. This is problematic because $\mathbb{P}(T_i = 1 | R_i)$ is degenerate under Assumptions 3 and 6. Thus, we first estimate the deconfounder using Equation (3) and then model the propensity score given the estimated deconfounder.In sum, the entire estimation procedure can be described as follows. Denote the observed data by $\mathcal{D} := \{\mathcal{D}_i\}_{i=1}^N$ where $\mathcal{D}_i := \{Y_i, T_i, \mathbf{R}_i\}$. We use the following K-fold cross-fitting procedure, assuming that N is divisible by K.

1. Randomly partition the data into K folds of equal size where the size of each fold is $n = N/K$. The observation index is denoted by $I(i) \in \{1, \dots, K\}$ where $I(i) = k$ implies that the $i$th observation belongs to the $k$th fold.

2. For each fold $k \in \{1, \dots, K\}$, use observations with $I(i) \neq k$ as training data:

(a) split the training data into two folds, $I_1^{(-k)}$ and $I_2^{(-k)}$

(b) simultaneously obtain an estimated deconfounder and an estimated conditional outcome function on the first fold, which are denoted by $\hat{f}^{(-k)}(\{\mathbf{R}_i\}_{i \in I_1^{(-k)}}) := f(\{\mathbf{R}_i\}_{i \in I_1^{(-k)}}; \hat{\boldsymbol{\lambda}}^{(-k)})$ and $\hat{\mu}_t^{(-k)}(\{\mathbf{R}_i\}_{i \in I_1^{(-k)}}) := \mu_t(f(\{\mathbf{R}_i\}_{i \in I_1^{(-k)}}; \hat{\boldsymbol{\lambda}}^{(-k)}); \hat{\boldsymbol{\theta}}^{(-k)})$, respectively, by solving the optimization problem given in Equation (3), and

(c) obtain an estimated propensity score given the estimated deconfounder on the second fold, which is denoted by $\hat{\pi}^{(-k)}(\hat{\mathbf{f}}^{(-k)}(\{\mathbf{R}_i\}_{i \in I_2^{(-k)}})) := \hat{\pi}^{(-k)}(f(\{\mathbf{R}_i\}_{i \in I_2^{(-k)}}; \hat{\boldsymbol{\lambda}}^{(-k)}))$.

3. Compute the GPI estimator $\hat{\tau}$ as a solution to:

$$
\frac{1}{nK} \sum_{k=1}^{K} \sum_{i: I(i)=k} \psi(\mathcal{D}_i; \hat{\tau}, \hat{\mathbf{f}}^{(-k)}, \mu_1^{(-k)}, \mu_0^{(-k)}, \hat{\pi}^{(-k)}) = 0, \quad (4)
$$

where

$$
\psi(\mathcal{D}_i; \tau, \mathbf{f}, \mu_1, \mu_0, \pi) = \frac{T_i\{Y_i - \mu_1(\mathbf{f}(\mathbf{R}_i))\}}{\pi(\mathbf{f}(\mathbf{R}_i))} - \frac{(1-T_i)\{Y_i - \mu_0(\mathbf{f}(\mathbf{R}_i))\}}{1-\pi(\mathbf{f}(\mathbf{R}_i))} + \mu_1(\mathbf{f}(\mathbf{R}_i)) - \mu_0(\mathbf{f}(\mathbf{R}_i)) - \tau. \quad (5)
$$

To derive the asymptotic properties of the proposed GPI estimator, we assume the following regularity conditions.

**ASSUMPTION 7 (REGULARITY CONDITIONS)** Let $c_1, c_2$, and $q > 2$ be positive constants and $\delta_n$ be a sequence of positive constants approaching zero as the sample size $n$ increases. Then, the following conditions hold.

(a) (Primitive conditions)

$$
\mathbb{E}[|Y_i|^q]^{1/q} \le c_1, \quad \sup_{\mathbf{r} \in \mathcal{R}} \mathbb{E}[|Y_i - \mu_{T_i}(\mathbf{f}(\mathbf{r}))|^2 | \mathbf{R}_i = \mathbf{r}] \le c_1, \quad \mathbb{E}[|Y_i - \mu_{T_i}(\mathbf{f}(\mathbf{R}_i))|^2]^{1/2} \ge c_2.
$$

(b) (Outcome model estimation)

$$
\mathbb{E}[|\hat{\mu}_{T_i}(\hat{\mathbf{f}}(\mathbf{R}_i)) - \mu_{T_i}(\mathbf{f}(\mathbf{R}_i))|^q]^{1/q} \le c_1, \quad \mathbb{E}[|\hat{\mu}_{T_i}(\hat{\mathbf{f}}(\mathbf{R}_i)) - \mu_{T_i}(\mathbf{f}(\mathbf{R}_i))|^2]^{1/2} \le \delta_n n^{-1/4}.
$$

(c) (Deconfounder estimation)

$$
\mathbb{E} \left[ \left\| \hat{\mathbf{f}}(\mathbf{R}_i) - \mathbf{f}(\mathbf{R}_i) \right\|^q \right]^{1/q} \le c_1, \quad \mathbb{E} \left[ \left\| \hat{\mathbf{f}}(\mathbf{R}_i) - \mathbf{f}(\mathbf{R}_i) \right\|^2 \right]^{1/2} \le \delta_n n^{-1/4}
$$(d) (Propensity score estimation) $\pi(\cdot)$ is Lipschitz continuous at every point of its support, and satisfies:

$$
\mathbb{E}[|\hat{\pi}(\boldsymbol{f}(\boldsymbol{R}_i)) - \pi(\boldsymbol{f}(\boldsymbol{R}_i))|^q]^{1/q} \le c_1, \quad \mathbb{E}[|\hat{\pi}(\boldsymbol{f}(\boldsymbol{R}_i)) - \pi(\boldsymbol{f}(\boldsymbol{R}_i))|^2]^{1/2} \le \delta_n n^{-1/4}.
$$

Like the standard application of DML, the required rate for nonparametric estimation of nuisance models is slower than the usual parametric estimation rate of $n^{-1/2}$. Recall that we use neural networks for the joint estimation of outcome model and deconfounder. The required convergence rate of $n^{-1/4}$ is achievable with the standard neural network architecture (Farrell et al., 2021). The propensity score function can be estimated using various nonparametric methods, including the feedforward neural networks with regularization to ensure Lipschitz continuity (Gouk et al., 2021) and the kernel-based methods with nonexpansive kernels (van Waarde and Sepulchre, 2022).

Given the above assumptions, the asymptotic normality of the proposed GPI estimator follows immediately from the DML theory.

**THEOREM 2 (ASYMPTOTIC NORMALITY OF THE GPI ESTIMATOR)** *Under Assumptions 1–7, the estimator $\hat{\tau}$ obtained from the influence function $\psi$ satisfies asymptotic normality:*

$$ \frac{\sqrt{n}(\hat{\tau} - \tau)}{\sigma} \xrightarrow{d} \mathcal{N}(0, 1) $$
where $\sigma^2 = \mathbb{E}[\psi(\mathcal{D}_i; \tau, \boldsymbol{f}, \mu_1, \mu_0, \pi)^2]$.

The proof is on Appendix S2.3. We can consistently estimate the asymptotic variance using the plugin estimator based on Equation (5).

## 3.4 Practical implementation details

We discuss some important practical implementation details. First, to satisfy Assumption 6, researchers must choose a deep generative model that has the option of deterministic decoding. Aside from appropriately setting a hyper-parameter, the assumption also implies that we should not use batches with LLMs, which may induce unknown correlations across observations. The use of LLMs that have memory should also be avoided.

In addition, the effective implementation of the proposed estimation method requires a careful choice of dimension reduction strategy for the internal representation, as well as hyperparameter tuning for TarNet. First, the internal representation $\boldsymbol{R}_i$, which typically corresponds to the last hidden states of a deep generative model, is of high dimension. Specifically, it is a matrix of size equal to the length of texts $\times$ the size of representation for each token, which is equal to 768 for BERT-base, 1024 for BERT-large and T5-3B, and 4096 for Llama3-8B. In theory, we can directly incorporate this matrix in TarNet. In practice, however, given the limited computational resources available to researchers, it is advisable to apply a pooling operation to reduce the dimensionality.

The choice of pooling strategy depends on the architecture of a deep generative model. For example, in BERT, the first special classification token [CLS] contains all semantic information (Devlin et al., 2019). Thus, we could use the hidden states that correspond to this [CLS] token alone. In BART (Bidirectional and Auto-Regressive Transformers), the special token is added at the end, so researchers can extract the hidden states of the last token (Lewis et al., 2020). In contrast, encoder-decoder models like T5 (Text-to-Text Transfer Transformer, Raffel et al. 2023) do not have such special tokens, and mean pooling is often applied (e.g., Ni et al. 2021).

For decoder-only models, such as Llama, the autoregressive structure forces all tokens to pay attention only to the past tokens, and hence, we can use the hidden states of the last token. This pooling strategy is frequently used as an approximation of the input text representation in the literature (e.g., Neelakantanet al. 2022; Ma et al. 2024; Jiang et al. 2023b). We show the validity of this approximation in a simulation study (Section 4). Our experience shows that this approximation generally works well. However, if the confounding features are deemed too complex to be adequately captured by the last token alone, researchers may consider a sensitivity analysis (Lin et al., 2024).

Second, for TarNet, we must carefully choose hyperparameters such as the size and depth of layers, learning rate, and maximum epoch size. Together, they determine the success of optimization and the quality of the deconfounder estimate. The dimension of the deconfounder should be sufficiently large to capture the confounding information, but not too large to violate the overlap assumption. The learning rate and the epoch size are also crucial, as the performance is highly dependent on the success of the optimization process. As a practical strategy, researchers could try different hyperparameter values and select the one that minimizes the loss. If the loss does not decrease within the first few epochs, the optimization has likely failed, and researchers should try different sets of hyperparameters. The process can be automated with advanced hyperparameter optimization methods, such as Optuna (Akiba et al., 2019), that search the optimal hyperparameters automatically and efficiently by dynamically constructing the search space.

# 4 Simulation Studies

We conduct simulation studies to evaluate the empirical performance of the GPI estimator and compare it to existing estimators. We use the candidate profile experiment introduced in Section 2 to make the simulation setup realistic.

## 4.1 Simulation setup

We first generate candidate biographies using an open source LLM, Llama3-8B, that is fine-tuned for instruction-based prompt generations with 8 billion parameters. We ask the model to create a biography of politicians under a hypothetical name using the system- and user-level prompts shown in Table 2. We create hypothetical names by randomly drawing a surname and a first/middle name with replacement from the original corpus of Fong and Grimmer (2016). The total number of biographies in our sample is 4,000. We also examine the performance of the proposed methodology with the text reuse approach. To do this, we instruct the same Llama3 model to exactly repeat each generated biography. This allows us to compare our two approaches using the same set of texts.

After generating candidate biographies, we label them based on treatment and confounding features of interest. We consider two scenarios: the first is designed to adhere to the separability assumption (Assumption 5), which is our key assumption, while the second is likely to violate it. For the first scenario, we use the candidate's military background as the treatment variable. A biography is assigned to the treatment group if it contains at least one of the following keywords: "military," "war," "veteran," or "army."

For confounding features, we first consider a combined topic of politics and education, denoted as $h_1(X_i)$ where $h_1$ is a complex function of the treatment object. We employ a widely-used embedding-based topic model, BERTopic (Grootendorst, 2022), and then assign $h_1(X_i) = 1$ if a generated biography is classified to a topic whose representative words include "young," "student," "college," "elected," "senator," "political," "graduating," "education," and "congressional." As the second confounding feature, denoted by $h_2(X_i)$, we use the sentiment analysis module available in the Python TextBlob package, which yields a continuous sentiment score ranging from -1 to 1. Since the treatment feature is based on a set of specific keywords that are quite different from the confounding features, the separability assumption is likely to be satisfied under this scenario.

For the second scenario, we use two overlapping topics to define the treatment and confounding features so that the separability assumption is likely to be violated. We again use topics obtained from BERTopic, and assign $T_i = 1$ if a generated biography is classified to a topic whose representative words include "college," "political," "elected," "politics," "student," "senator," "education," "legislative". For the confounding concept, we set $h_1(X_i) = 1$ if a biography is assigned to a topic whose representative wordsinclude “college,” “political,” “senator,” “politics,” “elected,” “student,” “career.” Thus, although the treatment and confounding concepts are coded based on two different topics, they share many representative words, making it likely for the separability assumption to be violated.

Finally, we use the following linear model to generate the outcome variable,

$$
Y_i = \alpha_1 T_i + \alpha_2 T_i h_1(\mathbf{X}_i) - \alpha_3 h_1(\mathbf{X}_i) - \alpha_4 h_2(\mathbf{X}_i) + \epsilon_i,
$$

where $\epsilon_i$ is the standard normal random variable. Although the model may appear to be a relatively simple function of the treatment and confounding features, these variables themselves are complex functions of text. Thus, in this simulation setting, inferring the ATE is not straightforward because it requires learning an accurate representation of confounding features.

To evaluate the performance of each estimator, we assume that researchers do not have access to the confounding features, $h_1(\mathbf{X}_i)$ and $h_2(\mathbf{X}_i)$. We wish to infer the ATE, which is given by $\tau = \alpha_1 + \alpha_2 \mathbb{E}[h_1(\mathbf{X}_i)]$ where we set $\alpha_1 = \alpha_2 = 10$ throughout the simulations. We consider the three scenarios: (1) weak confounding $\alpha_3 = \alpha_4 = 50$, (2) moderate confounding $\alpha_3 = \alpha_4 = 100$, (3) strong confounding $\alpha_3 = \alpha_4 = 1000$. Given the computational cost, our evaluation is conditional on a single set of generated biographies and its associated treatment and confounding variables. Therefore, $\mathbb{E}[h_1(\mathbf{X}_i)]$ is set to its sample mean, and the randomness comes only from the error term of the outcome model $\epsilon_i$.

## 4.2 Estimators to be compared

Once Llama3 generates all biographies, we extract an internal representation of each biography from the last hidden layer whose dimension is 4096 × the number of tokens contained in the biography. For text reuse, we simply ask the LLM to repeat each of the generated texts. To compute the proposed estimator, we follow the discussion presented in Section 3.4 and use the representation of the last token, yielding a 4096 dimensional vector of internal representation for each candidate biography.

Our neural network architecture uses one linear layer for the deconfounder $f(\mathbf{R}_i)$ whose output dimension is 2048. Similarly, we utilize two consecutive linear layers for the potential outcome models whose output dimensions are 500 and 1. We apply ReLU as an activation function between each layer, and also use a dropout rate of 0.15 to prevent overfitting. We select the neural network architecture, including dropout rates, layer depth, and dimension of each layer, based on additional hyperparameter tuning under the weak confounding setting. While we do not conduct hyperparameter tuning for each setting separately, we find that minor changes in these hyperparameters do not significantly affect the value of the loss function.

We use 40% of our data as a training set, 10% as a validation set, and the remaining 50% is used to estimate downstream causal effects. For optimization, we set the batch size to 32 and train the model for 500 epochs, and use early stopping to prevent overfitting. Specifically, we stop training if the estimated loss does not improve for more than 15 epochs. Since the performance of the methodology can depend on the choice of hyperparameters, especially learning rates, we select learning rates using an automated hyperparameter tuning package Optuna. We do not include the size of the deconfounder as a hyperparameter to be tuned because tuning it for the BERT-based methods is computationally too expensive. We also do not observe any substantial difference in performance when varying the dimensions of the deconfounder for the proposed methodology. Once the outcome model is fitted, we estimate the propensity score using a random forest classifier with the estimated deconfounder, using the scikit-learn library.

We evaluate the performance of the GPI estimator in comparison to the following three estimators. First, as a baseline, we use the difference-in-means estimator, which makes no adjustment for confounding. Second, we implement the two existing approaches that estimate the vectorized representation of texts using the BERT embedding $b(\cdot)$; Pryzant et al. (2021) estimates nuisance functions with TarNet and calculates the causal effect using outcome models, while Gui and Veitch (2023) uses the same outcome models as Pryzant et al. (2021) but applies DML with the estimated propensity score. Importantly, both of these approaches![[_resources/Causal Representation Learning with Generative Artificial Intelligence/dbbea3b93d4ab1937573b9ca45f5b54c_MD5.jpg]]

Figure 3: Performance of Five Estimators under Different Confounding Scenarios (Weak, Moderate, and Strong) under Separability (top row) and No Separability (bottom row). A red solid line represents the proposed GPI methodology for the new texts, while a dark yellow solid line represents that for the regenerated texts (text reuse). For comparison, we also include outcome model with BERT (blue) and DML with BERT (purple). The black horizontal dotted line in the 95% Confidence Interval (CI) Coverage panel represents the nominal coverage of 95%.

are based on the following loss function,

$$
\frac{\lambda}{n} \sum_{i=1}^{n} \{Y_i - Q_{T_i}(\mathbf{b}(\mathbf{X}_i))\}^2 - \frac{\alpha}{n} \sum_{i=1}^{n} \left\{ T_i \log g(\mathbf{b}(\mathbf{X}_i)) + (1-T_i) \log[1-g(\mathbf{b}(\mathbf{X}_i))] \right\} + \frac{1}{n} \sum_{i=1}^{n} B(\mathbf{b}_{\text{full}}(\mathbf{X}_i)) \quad (6)
$$

where $Q_t(\cdot)$ is the outcome model under $T_i = t$, $g(\cdot)$ is the treatment prediction, $B(\cdot)$ is the original BERT masked language loss for estimating vector representations of texts from the embedding $\mathbf{b}(\cdot)$, and $\alpha, \lambda \in \mathbb{R}$ are the hyperparameters (Veitch et al., 2020). Only the vector representation of the first token $\mathbf{b}(\cdot)$ is used for prediction of outcome and treatment because it is the special token called the [CLS] token that contains the semantic information. On the other hand, for the masked language loss, the entire embedding $\mathbf{b}_{\text{full}}(\cdot)$ is used. The loss function given in Equation (6) differs from our loss function (Equation (3)) in that it also includes the semantic information.

After estimating nuisance functions, Gui and Veitch (2023) proposes to estimate the propensity score model by treating $Q_1(\mathbf{b}(\mathbf{X}_i))$ and $Q_0(\mathbf{b}(\mathbf{X}_i))$ as covariates, i.e., $\text{Pr}(T_i = 1 | \mathbf{X}_i) = g(Q_1(\mathbf{b}(\mathbf{X}_i)), Q_0(\mathbf{b}(\mathbf{X}_i)))$. For propensity score estimation, we use a Gaussian Process, as recommended by Gui and Veitch (2023). We truncate the extreme values of the estimated propensity scores at 0.01 and 0.99 for DML with BERT, although such a truncation is not necessary for the proposed methodology. For DML with BERT, this truncation occurs even when the separability assumption is satisfied (roughly 5% of time for weak and moderate confounding, and 45% for strong confounding). Without truncation, the bias and RMSE are not computable for these methods. Finally, we follow the default hyperparameter in the original code of the authors and set $\alpha = \lambda = 1$ while tuning the other hyperparameters regarding the learning rate in the same way as done for our estimator.

## 4.3 Simulation results

Figure 3 graphically displays the results of our simulation studies while Appendix S3 reports the corresponding numerical results. The results are based on 200 Monte Carlo trials. We choose this relatively![[_resources/Causal Representation Learning with Generative Artificial Intelligence/e514b69b523749026dc8e59b6775b716_MD5.jpg]]

Figure 4: Distribution of the Estimated Propensity Scores for the Treatment (red) and Control (blue) Groups. We present the results for the proposed GPI estimator (new texts in the left panels, and text reuse in the middle panels), and DML with BERT (right) under the separability assumption (top) and no separability (bottom). Under each scenario, we present the results based on three different strengths of confounding; weak, moderate, and strong. For the proposed GPI methodology, the estimated propensity scores are distributed similarly across different confounding scenarios under the separability assumption. In contrast, for DML with BERT, the distribution is heavily skewed right under the strong confounding scenario. When the separability assumption is violated, both methods have extremely small estimated propensity scores for the control group.

small number of trials because, unlike the GPI estimator, the BERT-based estimators are computationally intensive. Appendix S3 also presents the simulation results based on 1,000 Monte Carlo trials for the proposed estimator alone. As expected, the results are qualitatively similar to those presented in this section.

We find that when the separability assumption holds (top row), the GPI estimators (red line for new texts and dark yellow for text reuse) exhibit a smaller bias and RMSE compared to all other estimators, with the 95% confidence interval coverage closely matching the nominal rate. The performance differences are particularly striking in the strong confounding setting, where DML with BERT (purple) performs poorly, unlike the weak and moderate confounding scenarios. Additionally, outcome model with BERT (blue) has severe undercoverage across all simulation scenarios, whereas the confidence interval of DML with BERT breaks down only under the strong confounding scenario. Lastly, the GPI estimators are more than ten times as computationally efficient as BERT-based estimators, when measured in terms of the average runtime.

In contrast, when the separability assumption is violated (bottom row), all estimators, including ours, perform poorly. In this setting, both bias and RMSE grow as the strength of confounding increases. As a result, the coverage of confidence intervals no longer approximates the nominal coverage rate even for the GPI estimator.

We further examine the difference in performance between the GPI estimator and the DML with BERT. Figure 4 shows the distribution of the estimated propensity scores without truncation (recall that truncation is not needed for the proposed methodology). For the GPI methodology, when the separability assumption is met (top panel), the distribution of estimated propensity scores is relatively symmetric regardless of the confounding strength and is similar between the treatment and control groups. Indeed, most observations have estimated propensity scores far from zero. This explains why the GPI estimator performs well in this scenario.![[_resources/Causal Representation Learning with Generative Artificial Intelligence/a21fe1b4d9ea99aa1270f6e8612c055e_MD5.jpg]]

Figure 5: Performance of the GPI Estimator on the created texts (red) and the reused texts (blue) for Different Sample Size based on 1000 Monte Carlo trials. The data generating process is no interaction setting ($α_1 = 10, α_2 = 0, α_3 = α_4 = 100$). The black dotted line in the coverage panel represents the nominal coverage of 95%.

On the other hand, when the separability assumption is violated (bottom left and middle panels), the estimated propensity scores for the control group are heavily skewed to the right and close to zero, indicating that the overlap assumption is violated. This implies that the estimated propensity scores can help diagnose the potential violation of the separability assumption for our proposed method, which leads to complete entanglement between treatment and confounding features and causes the deconfounder to perfectly predict the treatment assignment. In contrast, DML with BERT yields a wide range of estimated propensity scores under the strong confounding settings (top right panel), in which the estimator performs poorly. This pattern is observed even when the separability assumption is violated (bottom right panel). The finding implies that, unlike the proposed estimator, extreme values of estimated propensity scores may not serve as a reliable diagnostic for DML with BERT.

Finally, we examine the performance of the GPI estimator for new texts and text reuse as we vary the sample size from 1,000 to 4,000 under the assumption of separability. For this simulation, we use the moderate confounding setting without the interaction term ($α_1 = 10, α_2 = 0, α_3 = α_4 = 100$) so that the true ATE stays identical across sample sizes. We conduct 1,000 Monte Carlo trials as we focus only on the GPI estimator, which is computationally efficient. Figure 5 presents bias, RMSE, and coverage for each sample size. As expected, both bias and RMSE become smaller as the sample size increases. We also find that the empirical coverage of the 95% confidence intervals remains close to the nominal coverage even when the sample size is as small as 1000. Interestingly, while bias is similar between new texts and text reuse, RMSE (hence variance) is substantially smaller for text reuse. In sum, the proposed GPI methodology performs well in different sample sizes, provided that the separability assumption is satisfied.

# 5 Empirical Analysis

Finally, we apply the proposed GPI methodology to human responses (rather than simulated data) from the candidate profile experiment of Fong and Grimmer (2016) using pre-defined treatment coding. In the original experiment, the authors scraped 1,246 biographies of congressional candidates from Wikipedia, randomly assigned up to four biographies to 1,886 survey participants, and asked respondents how they felt about each candidate using the standard feeling thermometer ranging from 0 to 100, where a higher value indicates a more favorable evaluation. The total number of observations we analyze is 5,291 after dropping<table><thead><tr><th>Methods</th><th>ATE Estimates</th><th>95% Confidence Interval</th><th>Runtime (sec.)</th></tr></thead><tbody><tr><td>GPI (reuse)</td><td>5.462</td><td>[2.790, 8.135]</td><td>28.9</td></tr><tr><td>Outcome model with BERT</td><td>-2.557</td><td>[-2.608, -2.505]</td><td>6139.7</td></tr><tr><td>DML with BERT</td><td>-67.777</td><td>[-109.967, -25.587]</td><td>6210.3</td></tr></tbody></table>

Table 3: The Estimated Average Treatment Effect (ATE) for the Candidate Profile Experiment.

some observations with empty texts.

While Fong and Grimmer (2016) use a Bayesian topic model to discover treatments from the data, we instead use the pre-defined treatment coding. As in simulation studies, we use a candidate's military background as the treatment variable by assigning a biography to the treatment group if it contains at least one of the following keywords: "military," "war," "veteran," and "army." According to this coding rule, only about seven percent of the biographies (362 out of 5,291) are in the treatment group.

For causal effect estimation, we take the text reuse approach by regenerating each biography using Llama3-8B. We then apply the proposed GPI methodology following the procedure described in Section 3 with two-fold cross fitting. For comparison, as in our simulation studies, we also apply the two existing BERT-based methods — Pryzant et al. (2021) (Outcome model with BERT) and Gui and Veitch (2023) (DML with BERT).

Table 3 presents the results. The analysis based on the proposed GPI methodology implies that military experience has a positive effect and is statistically significant. This echoes with the finding of Fong and Grimmer (2016), who also found that the topic corresponding to military experience has a statistically significant positive association with a higher feeling thermometer score. Moreover, both outcome model and DML with BERT yield negative and statistically significant point estimates. This is at least in part due to the violation of positivity. Indeed, for the BERT-based estimators, all 5291 observations have estimated propensity scores outside of the range of [0.01, 0.99]. Lastly, as observed in our simulation studies, the runtime for our proposed estimator is more than 200 times shorter than that of the other two BERT-based estimators.

# 6 Concluding Remarks

In this paper, we demonstrate that the use of GenAI can significantly enhance the validity of causal inference with unstructured treatments, such as texts and images. We leverage GenAI to both efficiently produce a variety of treatments and precisely control confounding bias. By utilizing the true vector representation of generated texts, we avoid estimating such representation as done in the previous methods, leading to more efficient and robust causal effect estimation. We formalize the conditions required for nonparametric identification, showing that the separability of treatment and confounding features plays an essential role. We also develop an estimation method based on a neural network architecture that mitigates the risk of positivity violation, a common problem of existing methods. Lastly, we extend the proposed GPI methods to the settings of perceived treatments, using an instrumental variables approach. Our simulation study shows that the GPI estimator outperforms existing methods.

Although we have focused on texts as treatments, our GPI approach can be extended to other types of unstructured data, such as images and videos. For images, we expect the proposed GPI methodology to be directly applicable so long as the dimensionality of internal representation is relatively low. For videos, both treatment and confounding features are likely to exhibit complex relationships due to the combination of audio and images with the additional temporal dimension. Thus, the GPI methodology described here is not readily applicable. Future work should consider how to leverage the internal representation of videos obtained from GenAI.References

Ahrens, M., Ashwin, J., Calliess, J.-P., and Nguyen, V. (2021). Bayesian Topic Regression for Causal Inference. arXiv:2109.05317 [cs, stat].

Akiba, T., Sano, S., Yanase, T., Ohta, T., and Koyama, M. (2019). Optuna: A Next-generation Hyperparameter Optimization Framework. In *Proceedings of the 25th ACM SIGKDD International Conference on Knowledge Discovery & Data Mining*, KDD '19, pages 2623-2631, New York, NY, USA. Association for Computing Machinery.

Aronow, P. M., Baron, J., and Pinson, L. (2019). A Note on Dropping Experimental Subjects who Fail a Manipulation Check. *Political Analysis*, 27(4):572-589.

Bisbee, J., Clinton, J. D., Dorff, C., Kenkel, B., and Larson, J. M. (2024). Synthetic Replacements for Human Survey Data? The Perils of Large Language Models. *Political Analysis*, pages 1-16.

Blackwell, M., Brown, J. R., Hill, S., Imai, K., and Yamamoto, T. (2025). Priming bias versus post-treatment bias in experimental designs. *Political Analysis*, Forthcoming.

Campbell, R. and Cowley, P. (2014). What Voters Want: Reactions to Candidate Characteristics in a Survey Experiment. *Political Studies*, 62(4):745-765.

Chernozhukov, V., Chetverikov, D., Demirer, M., Duflo, E., Hansen, C., Newey, W., and Robins, J. (2018). Double/debiased machine learning for treatment and structural parameters. *The Econometrics Journal*, 21(1):C1-C68.

Daoud, A., Jerzak, C. T., and Johansson, R. (2022). Conceptualizing Treatment Leakage in Text-based Causal Inference. arXiv:2205.00465 [cs].

Dawid, A. P. (1979). Conditional Independence in Statistical Theory. *Journal of the Royal Statistical Society. Series B (Methodological)*, 41(1):1-31.

Devlin, J., Chang, M.-W., Lee, K., and Toutanova, K. (2019). BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding. arXiv:1810.04805 [cs].

Egami, N., Fong, C. J., Grimmer, J., Roberts, M. E., and Stewart, B. M. (2022). How to make causal inferences using texts. *Science Advances*, 8(42):eabg2652.

Egami, N. and Hartman, E. (2023). Elements of external validity: Framework, design, and analysis. *American Political Science Review*, 117(3):1070-1088.

Farrell, M. H., Liang, T., and Misra, S. (2021). Deep Neural Networks for Estimation and Inference. *Econometrica*, 89(1):181-213.

Feder, A., Keith, K. A., Manzoor, E., Pryzant, R., Sridhar, D., Wood-Doughty, Z., Eisenstein, J., Grimmer, J., Reichart, R., Roberts, M. E., Stewart, B. M., Veitch, V., and Yang, D. (2022). Causal Inference in Natural Language Processing: Estimation, Prediction, Interpretation and Beyond. arXiv:2109.00725 [cs].

Fong, C. and Grimmer, J. (2016). Discovery of Treatments from Text Corpora. In *Proceedings of the 54th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)*, pages 1600-1609.Fong, C. and Grimmer, J. (2023). Causal Inference with Latent Treatments. *American Journal of Political Science*, 67(2):374–389.

Gouk, H., Frank, E., Pfahringer, B., and Cree, M. J. (2021). Regularisation of neural networks by enforcing lipschitz continuity. *Machine Learning*, 110:393–416.

Grootendorst, M. (2022). BERTopic: Neural topic modeling with a class-based TF-IDF procedure. arXiv:2203.05794 [cs].

Gui, L. and Veitch, V. (2023). Causal Estimation for Text Data with (Apparent) Overlap Violations. arXiv:2210.00079 [cs, stat].

Hu, Z. and Li, L. E. (2021). A Causal Lens for Controllable Text Generation. In *Advances in Neural Information Processing Systems*, volume 34, pages 24941–24955.

Imai, K. and Jiang, Z. (2019). Comment: The challenges of multiple causes. *Journal of the American Statistical Association*, 114(528):1605–1610.

Imai, K. and van Dyk, D. A. (2004). Causal Inference With General Treatment Regimes: Generalizing the Propensity Score. *Journal of the American Statistical Association*, 99(467):854–866.

Imbens, G. W. and Angrist, J. D. (1994). Identification and Estimation of Local Average Treatment Effects. *Econometrica*, 62(2):467–475.

Jerzak, C. T., Johansson, F., and Daoud, A. (2023a). Integrating Earth Observation Data into Causal Inference: Challenges and Opportunities. arXiv:2301.12985 [cs, stat].

Jerzak, C. T., Johansson, F. D., and Daoud, A. (2023b). Image-based Treatment Effect Heterogeneity. In *Proceedings of the Second Conference on Causal Learning and Reasoning*, pages 531–552. PMLR. ISSN: 2640-3498.

Jiang, A. Q., Sablayrolles, A., Mensch, A., Bamford, C., Chaplot, D. S., Casas, D. d. l., Bressand, F., Lengyel, G., Lample, G., Saulnier, L., Lavaud, L. R., Lachaux, M.-A., Stock, P., Scao, T. L., Lavril, T., Wang, T., Lacroix, T., and Sayed, W. E. (2023a). Mistral 7B. arXiv:2310.06825.

Jiang, T., Huang, S., Luan, Z., Wang, D., and Zhuang, F. (2023b). Scaling sentence embeddings with large language models. *arXiv preprint arXiv:2307.16645*.

Kasneci, E., Sessler, K., Küchemann, S., Bannert, M., Dementieva, D., Fischer, F., Gasser, U., Groh, G., Günnemann, S., Hüllermeier, E., Krusche, S., Kutyniok, G., Michaeli, T., Nerdel, C., Pfeffer, J., Poquet, O., Sailer, M., Schmidt, A., Seidel, T., Stadler, M., Weller, J., Kuhn, J., and Kasneci, G. (2023). Chatgpt for good? on opportunities and challenges of large language models for education. *Learning and Individual Differences*, 103:102274.

Keith, K. A., Jensen, D., and O’Connor, B. (2020). Text and Causal Inference: A Review of Using Text to Remove Confounding from Causal Estimates. arXiv:2005.00649 [cs].

Kirkland, P. A. and Coppock, A. (2018). Candidate Choice Without Party Labels: *Political Behavior*, 40(3):571–591.

Klaassen, S., Teichert-Kluge, J., Bach, P., Chernozhukov, V., Spindler, M., and Vijaykumar, S. (2024). DoubleMLDeep: Estimation of Causal Effects with Multimodal Data. arXiv:2402.01785 [cs, econ, stat].Klar, S., Leeper, T., and Robison, J. (2020). Studying Identities with Experiments: Weighing the Risk of Posttreatment Bias Against Priming Effects. *Journal of Experimental Political Science*, 7(1):56–60.

Kshetri, N., Dwivedi, Y. K., Davenport, T. H., and Panteli, N. (2024). Generative artificial intelligence in marketing: Applications, opportunities, challenges, and research agenda. *International Journal of Information Management*, 75:102716.

Lewis, M., Liu, Y., Goyal, N., Ghazvininejad, M., Mohamed, A., Levy, O., Stoyanov, V., and Zettlemoyer, L. (2020). BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation, Translation, and Comprehension. In Jurafsky, D., Chai, J., Schluter, N., and Tetreault, J., editors, *Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics*, pages 7871–7880.

Lin, V., Morency, L.-P., and Ben-Michael, E. (2024). Isolated causal effects of natural language.

Ma, X., Wang, L., Yang, N., Wei, F., and Lin, J. (2024). Fine-tuning llama for multi-stage text retrieval. In *Proceedings of the 47th International ACM SIGIR Conference on Research and Development in Information Retrieval*, pages 2421–2425.

Montgomery, J. M., Nyhan, B., and Torres, M. (2018). How Conditioning on Posttreatment Variables Can Ruin Your Experiment and What to Do about It. *American Journal of Political Science*, 62(3):760–775.

Mozer, R., Kaufman, A. R., Celi, L. A., and Miratrix, L. (2024). Leveraging text data for causal inference using electronic health records. arXiv:2307.03687 [cs, stat].

Mozer, R., Miratrix, L., Kaufman, A. R., and Anastasopoulos, L. J. (2020). Matching with Text Data: An Experimental Evaluation of Methods for Matching Documents and of Measuring Match Quality. *Political Analysis*, 28(4):445–468.

Neelakantan, A., Xu, T., Puri, R., Radford, A., Han, J. M., Tworek, J., Yuan, Q., Tezak, N., Kim, J. W., Hallacy, C., et al. (2022). Text and code embeddings by contrastive pre-training. *arXiv preprint arXiv:2201.10005*.

Ni, J., Ábrego, G. H., Constant, N., Ma, J., Hall, K. B., Cer, D., and Yang, Y. (2021). Sentence-T5: Scalable Sentence Encoders from Pre-trained Text-to-Text Models. arXiv:2108.08877 [cs].

Pedersen, R. T., Dahlgaard, J. O., and Citi, M. (2019). Voter reactions to candidate background characteristics depend on candidate policy positions. *Electoral Studies*, 61:102066.

Pryzant, R., Card, D., Jurafsky, D., Veitch, V., and Sridhar, D. (2021). Causal Effects of Linguistic Properties. arXiv:2010.12919 [cs].

Raffel, C., Shazeer, N., Roberts, A., Lee, K., Narang, S., Matena, M., Zhou, Y., Li, W., and Liu, P. J. (2023). Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer. arXiv:1910.10683 [cs, stat].

Ramesh, A., Pavlov, M., Goh, G., Gray, S., Voss, C., Radford, A., Chen, M., and Sutskever, I. (2021). Zero-Shot Text-to-Image Generation. In *Proceedings of the 38th International Conference on Machine Learning*, pages 8821–8831. PMLR. ISSN: 2640-3498.

Roberts, M. E., Stewart, B. M., and Nielsen, R. A. (2020). Adjusting for Confounding with Text Matching. *American Journal of Political Science*, 64(4):887–903.Rombach, R., Blattmann, A., Lorenz, D., Esser, P., and Ommer, B. (2022). High-Resolution Image Synthesis With Latent Diffusion Models. pages 10684–10695.

Shalit, U., Johansson, F. D., and Sontag, D. (2017). Estimating individual treatment effect: generalization bounds and algorithms. arXiv:1606.03976 [cs, stat].

Shi, C., Blei, D., and Veitch, V. (2019). Adapting Neural Networks for the Estimation of Treatment Effects. In *Advances in Neural Information Processing Systems*, volume 32.

Su, Y., Lan, T., Wang, Y., Yogatama, D., Kong, L., and Collier, N. (2022). A Contrastive Framework for Neural Text Generation. arXiv:2202.06417 [cs].

Thirunavukarasu, A. J., Ting, D. S. J., Elangovan, K., Gutierrez, L., Tan, T. F., and Ting, D. S. W. (2023). Large language models in medicine. *Nature Medicine*, 29(8):1930–1940.

Touvron, H., Lavril, T., Izacard, G., Martinet, X., Lachaux, M.-A., Lacroix, T., Rozière, B., Goyal, N., Hambro, E., Azhar, F., Rodriguez, A., Joulin, A., Grave, E., and Lample, G. (2023). LLaMA: Open and Efficient Foundation Language Models. arXiv:2302.13971 [cs].

van Waarde, H. and Sepulchre, R. (2022). Training lipschitz continuous operators using reproducing kernels. In *Learning for Dynamics and Control Conference*, pages 221–233. PMLR.

Veitch, V., Sridhar, D., and Blei, D. M. (2020). Adapting Text Embeddings for Causal Inference. arXiv:1905.12741 [cs, stat].

Wang, Y. and Blei, D. M. (2019). The blessings of multiple causes. *Journal of the American Statistical Association*, 114(528):1574–1596.

Wang, Y. and Jordan, M. I. (2022). Desiderata for Representation Learning: A Causal Perspective. arXiv:2109.03795 [cs, stat].

Zhang, S., Roller, S., Goyal, N., Artetxe, M., Chen, M., Chen, S., Dewan, C., Diab, M., Li, X., Lin, X. V., Mihaylov, T., Ott, M., Shleifer, S., Shuster, K., Simig, D., Koura, P. S., Sridhar, A., Wang, T., and Zettlemoyer, L. (2022). OPT: Open Pre-trained Transformer Language Models. arXiv:2205.01068 [cs].# S1 Instrumental Variable Approach to the Perceived Treatment Feature

The methodology described in the previous section enables the estimation of the average causal effect of the treatment feature, which is assumed to be a deterministic function of the treatment object. In some cases, however, researchers may be interested in the causal effect of *perceived* treatment feature, which may not necessarily coincide with the treatment feature itself. In addition, the perception of the same treatment feature may vary across respondents. For example, in our application, respondents may disagree as to what constitutes a military background.

In this section, we extend the proposed methodology to the setting, in which the treatment feature is used as an instrumental variable for the perceived treatment feature. As before, we describe the required assumptions, establish nonparametric identification, and propose estimation and inference strategies.

## S1.1 Assumptions and causal quantity of interest

We consider the same setting as in Section 3 except that we observe the perceived treatment feature $\tilde{T}_i \in \{0, 1\}$, which may not equal the treatment feature itself, i.e., $\tilde{T}_i \neq T_i$ for some $i$. We assume that a respondent's perceived treatment feature is a function of the treatment and confounding features of the assigned treatment object. We assume that both perceived treatment $\tilde{T}_i$ and original treatment $T_i$ are observed.

**ASSUMPTION 8 (PERCEIVED TREATMENT FEATURE)** *The perceived treatment feature $\tilde{T}_i \in \{0, 1\}$ is a function of treatment and confounding features, i.e.,*

$$
\tilde{T}_i = \tilde{T}_i(T_i, U_i),
$$

where $\tilde{T}_i(t, u)$ is the potential value of the perceived treatment feature when the treatment variable $T_i$ is equal to $t \in \{0, 1\}$ and the confounding variables $U_i$ equal $u \in U$.

Importantly, under Assumption 8, different respondents may perceive the same treatment feature differently. In addition, it is also possible for confounding features to affect the perceived treatment feature. In practice, researchers may measure the perceived treatment feature by asking respondents directly. However, doing so may lead to the so-called *priming bias*, in which the act of asking this question itself draws a respondent's attention to the treatment feature and confounds the causal effect of interest. To avoid this bias, researchers may measure the perceived treatment feature after the outcome variable is realized. Addressing this methodological issue is beyond the scope of this paper, but interested readers should consult a recent literature on the topic (see e.g., Montgomery et al., 2018; Aronow et al., 2019; Klar et al., 2020; Blackwell et al., 2025).

To identify the causal effect of the perceived treatment feature, we use the treatment feature as an instrumental variable. To do this, we define the potential outcome as a function of the perceived treatment feature, and the treatment and confounding features. Formally, we replace Assumption 5 with the following assumption while maintaining the same separability between the treatment feature and the confounding features.

**ASSUMPTION 9 (SEPARABILITY WITH THE PERCEIVED TREATMENT FEATURE)** *The potential outcome is a function of the perceived treatment $\tilde{T}_i$, the treatment features of interest $T_i$, and the confounding features $U_i$. That is, for any given $x \in \mathcal{X}$ and all $i$, we have:*

$$
Y_i(\boldsymbol{x}) = Y_i(\tilde{T}_i(g_T(\boldsymbol{x}), \boldsymbol{g}_U(\boldsymbol{x})), g_T(\boldsymbol{x}), \boldsymbol{g}_U(\boldsymbol{x}))
$$

where $\tilde{T}_i(g_T(\boldsymbol{x}), \boldsymbol{g}_U(\boldsymbol{x})) \in \{0, 1\}$ is the perceived treatment feature, $g_T(\boldsymbol{x}) \in \{0, 1\}$, and $\boldsymbol{g}_U(\boldsymbol{x}) \in U$. In addition, $g_T$ and $\boldsymbol{g}_U$ are separable in the same sense as Assumption 5.![[_resources/Causal Representation Learning with Generative Artificial Intelligence/34bba135342c0383feb832b0a1b5ebd4_MD5.jpg]]

Figure S1: Directed Acyclic Graph (DAG) of the Assumed Data Generating Process with the Perceived Treatment Feature. This DAG is identical to that of Figure 1 except that the perceived treatment feature $\tilde{T}$ is added. The perceived treatment feature may be affected by the treatment feature $T$ and/or the confounding features $U$. There may also be unobserved confounding variables that affect both the perceived treatment feature and the outcome $Y$. An arrow with red double lines represents a deterministic causal relation while an arrow with a single line indicates a possibly stochastic relationship.

Lastly, we adopt the standard instrumental variable assumptions in current settings (Imbens and Angrist, 1994). First, we assume monotonicity; the existence of treatment feature makes it no less likely for a respondent to perceive it as such. Second, we assume an exclusion restriction; the treatment feature only affects the outcome through the perceived treatment feature. Both assumptions are made while keeping the confounding features constant. We formally state these assumptions here.

**ASSUMPTION 10 (VALIDITY OF THE INSTRUMENTAL VARIABLE)** *We make the following instrumental variable assumptions:*

(a) (Monotonicity) For any $\mathbf{u} \in \mathcal{U}$, we have:

$$
\tilde{T}_i(1, \mathbf{u}) \geq \tilde{T}_i(0, \mathbf{u}) \quad \text{and} \quad \mathbb{P}(\tilde{T}_i(1, \mathbf{u}) = 1) > \mathbb{P}(\tilde{T}_i(0, \mathbf{u}) = 1).
$$

(b) (Exclusion Restriction) For any $\tilde{t} \in \{0, 1\}$, $\mathbf{u} \in \mathcal{U}$, and $i = 1, 2, \dots, n$, we have:

$$
Y_i(\tilde{t}, 1, \mathbf{u}) = Y_i(\tilde{t}, 0, \mathbf{u}) = Y_i(\tilde{t}, \mathbf{u}).
$$

In many practical settings, the monotonicity assumption is reasonable. In our application, for example, if there is no military background in a candidate biography, a respondent should not notice the presence of this treatment feature. Exclusion restriction, however, may not be credible in some cases because it is possible for a respondent to be influenced by the treatment feature without noticing it.

Under this setup, we are interested in estimating the local average treatment effect (LATE) of the perceived treatment feature among the respondents who notice the presence of the treatment feature only when the treatment object actually contains such a feature. We define this LATE as follows:

$$
\beta := \mathbb{E}[Y_i(1, \mathbf{U}_i) - Y_i(0, \mathbf{U}_i) | \tilde{T}_i(1, \mathbf{U}_i) = 1, \tilde{T}_i(0, \mathbf{U}_i) = 0], \quad (S1)
$$

where the first input of the potential outcome is the perceived treatment feature instead of the treatment feature, i.e., $Y_i(\tilde{T}_i = \tilde{t}, \mathbf{U}_i = \mathbf{u})$.

## S1.2 Nonparametric identification

We extend our nonparametric identification result obtained in Section 3.2 to the instrumental variable setting. Figure S1 summarizes the assumed data generation process with the perceived treatment feature.![[_resources/Causal Representation Learning with Generative Artificial Intelligence/8063c6b297dc1da932493ce8af29e50f_MD5.jpg]]

Figure S2: Diagram Illustrating the Proposed Model Architecture with the Instrumental Variable. The proposed model takes an internal representation of a treatment object $\mathbf{R}_i$ as an input, and finds a deconfounder $\mathbf{f}(\mathbf{R}_i)$, which is a lower-dimensional representation of $\mathbf{R}_i$, and then use it to predict the conditional expectations of the outcome $\mu_t(\mathbf{f}(\mathbf{R}_i)) := \mathbb{E}[Y_i | T_i = t, \mathbf{f}(\mathbf{R}_i)]$ and the perceived treatment feature $m_t(\mathbf{f}(\mathbf{R}_i)) := \mathbb{E}[\tilde{T}_i | T_i = t, \mathbf{f}(\mathbf{R}_i)]$ under each treatment arm $t$.

The absence of direct arrow from the treatment feature $T$ into $Y$ encodes exclusion restriction (Assumption 10(b)). In addition, we allow for the possible existence of unobserved confounders between the perceived treatment feature and the outcome, indicated by the dotted line in the DAG.

The following theorem establishes the nonparametric identification of the LATE defined in Equation (S1). As in the case of ATE (see Theorem 1), identification is achieved by adjusting for the deconfounder $\mathbf{f}(\mathbf{R}_i)$ and using the treatment feature $T_i$ as an instrument for the perceived treatment feature. Similarly to the ATE case, the deconfounder satisfies the conditional independence relation $\{Y_i, \tilde{T}_i\} \perp \mathbf{R}_i \mid T_i = t, \mathbf{f}(\mathbf{R}_i)$. The difference is that the inner representation $\mathbf{R}_i$ is now independent of the perceived treatment feature as well as the outcome after conditioning on the treatment feature and the deconfounder. Finally, we emphasize that like Theorem 1, this result does not require the deconfounder to be unique.

**THEOREM 3 (NONPARAMETRIC IDENTIFICATION OF THE LATE)** *Under Assumptions 1–4, 6, 8–10, there exists a deconfounder function $\mathbf{f}: \mathcal{R} \to \mathcal{Q}$ with $d_Q = \dim(\mathcal{Q}) \le d_R = \dim(\mathcal{R})$ that satisfies the following conditional independence relation:*

$$
\{Y_i, \tilde{T}_i\} \perp \mathbf{R}_i \mid T_i = t, \mathbf{f}(\mathbf{R}_i) = \mathbf{q},
$$

for all $\mathbf{q} \in \mathcal{Q}$ and $t = 0, 1$. In addition, the treatment feature and the deconfounder are separable. Then, by adjusting for such a deconfounder, we can uniquely and nonparametrically identify the local average treatment effect (LATE) defined in Equation (S1) as:

$$
\beta = \frac{\int_{\mathcal{R}} \mathbb{E}[Y_i | T_i = 1, \mathbf{f}(\mathbf{R}_i)] - \mathbb{E}[Y_i | T_i = 0, \mathbf{f}(\mathbf{R}_i)] dF(\mathbf{R}_i)}{\int_{\mathcal{R}} \mathbb{E}[\tilde{T}_i | T_i = 1, \mathbf{f}(\mathbf{R}_i)] - \mathbb{E}[\tilde{T}_i | T_i = 0, \mathbf{f}(\mathbf{R}_i)] dF(\mathbf{R}_i)}.
$$

The proof is given in Appendix S2.4.

### S1.3 Estimation and inference

Next, we extend the estimation and inference approaches developed in Section 3.3 to the instrumental variable setting. The main difference is that we additionally model the conditional expectation of the perceived treatment feature given the treatment feature and deconfounder,

$$
m_t(\mathbf{f}(\mathbf{R}_i)) := \mathbb{E}[\tilde{T}_i | T_i = t, \mathbf{f}(\mathbf{R}_i)],
$$for $t \in \{0, 1\}$. Figure S2 presents the proposed neural network architecture that extends the diagram shown in Figure 2 to the instrumental variable setting. The loss function is given by,

$$
\{\hat{\lambda}, \hat{\theta}, \hat{\zeta}\} = \underset{\lambda, \theta, \zeta}{\operatorname{argmin}} \frac{1}{n} \sum_{i=1}^{n} \left[ (Y_i - \mu_{T_i}(\mathbf{f}(\mathbf{R}_i; \boldsymbol{\lambda}); \boldsymbol{\theta}_{T_i}))^2 + (\tilde{T}_i - m_{T_i}(\mathbf{f}(\mathbf{R}_i; \boldsymbol{\lambda}); \boldsymbol{\zeta}_{T_i}))^2 \right] \quad (S2)
$$

Given this neural network architecture, we again use the DML framework for estimation and inference. The exact estimation procedure is described here for completeness.

1. Randomly partition the data into $K$ folds of equal size where the size of each fold is $n = N/K$. The observation index is denoted by $I(i) \in \{1, \dots, K\}$ where $I(i) = k$ implies that the $i$th observation belongs to the $k$th fold.

2. For each fold $k \in \{1, \dots, K\}$, use observations with $I(i) \neq k$ as training data:

(a) split the training data into two folds, $I_1^{(-k)}$ and $I_2^{(-k)}$

(b) obtain estimates of deconfounder and the conditional outcome function on the first fold, denoted by $\hat{f}^{(-k)}(\{\mathbf{R}_i\}_{i \in I_1^{(-k)}}) := \mathbf{f}(\{\mathbf{R}_i\}_{i \in I_1^{(-k)}}; \hat{\boldsymbol{\lambda}}^{(-k)})$ and $\mu_t^{(-k)} := \mu_t(\hat{f}(\{\mathbf{R}_i\}_{i \in I_1^{(-k)}}; \boldsymbol{\lambda}^{(-k)}); \hat{\boldsymbol{\theta}}^{(-k)})$ and that of the perceived treatment feature $\hat{m}_t^{(-k)}(\{\mathbf{R}_i\}_{i \in I_1^{(-k)}}) := m_t(\mathbf{f}(\{\mathbf{R}_i\}_{i \in I_1^{(-k)}}; \hat{\boldsymbol{\lambda}}^{(-k)}); \hat{\boldsymbol{\zeta}}^{(-k)})$ by solving the optimization problem given in Equation (S2), and

(c) obtain an estimate of the propensity score given the estimated deconfounder on the second fold, denoted by $\hat{\pi}^{(-k)}(\hat{\mathbf{f}}^{(-k)}(\{\mathbf{R}_i\}_{i \in I_2^{(-k)}})) := \hat{\pi}^{(-k)}(\mathbf{f}(\{\mathbf{R}_i\}_{i \in I_2^{(-k)}}; \hat{\boldsymbol{\lambda}}^{(-k)}))$.

3. Compute an LATE estimate $\hat{\beta}$ as a solution to:

$$
\frac{1}{nK} \sum_{k=1}^{K} \sum_{i: I(i)=k} \phi(\tilde{\mathcal{D}}_i; \hat{\beta}, \hat{\mathbf{f}}^{(-k)}, \hat{\mu}_1^{(-k)}, \hat{\mu}_0^{(-k)}, \hat{m}_1^{(-k)}, \hat{m}_0^{(-k)}, \hat{\pi}^{(-k)}) = 0,
$$

where $\tilde{\mathcal{D}}_i := \{Y_i, \tilde{T}_i, T_i, \mathbf{R}_i\}$ and

$$
\phi(\tilde{\mathcal{D}}_i; \beta, \mathbf{f}, \mu_1, \mu_0, m_1, m_0, \pi) = \frac{T_i\{Y_i - \mu_1(\mathbf{f}(\mathbf{R}_i))\}}{\pi(\mathbf{f}(\mathbf{R}_i))} - \frac{(1-T_i)\{Y_i - \mu_0(\mathbf{f}(\mathbf{R}_i))\}}{1-\pi(\mathbf{f}(\mathbf{R}_i))} + \mu_1(\mathbf{f}(\mathbf{R}_i)) - \mu_0(\mathbf{f}(\mathbf{R}_i)) \\ - \left[ \frac{T_i\{\tilde{T}_i - m_1(\mathbf{f}(\mathbf{R}_i))\}}{\pi(\mathbf{f}(\mathbf{R}_i))} - \frac{(1-T_i)\{\tilde{T}_i - m_0(\mathbf{f}(\mathbf{R}_i))\}}{1-\pi(\mathbf{f}(\mathbf{R}_i))} + m_1(\mathbf{f}(\mathbf{R}_i)) - m_0(\mathbf{f}(\mathbf{R}_i)) \right] \cdot \beta.
$$

Similar to the ATE case, we can establish the asymptotic property of this estimator. We first outline a set of additional regularity conditions required beyond Assumption 7.

**ASSUMPTION 11 (ADDITIONAL REGULARITY CONDITIONS)** Let $c_1, c_2$, and $q > 2$ be positive constants and $\delta_n$ be a sequence of positive constants approaching zero as the sample size $n$ increases. Then, the following conditions hold:

(a) (Primitive condition)

$$
\mathbb{E} \left[ \left| (Y_i - \mu_{T_i}(\mathbf{f}(\mathbf{R}_i))) - \beta \cdot (\tilde{T}_i - m_{T_i}(\mathbf{f}(\mathbf{R}_i))) \right|^2 \right]^{1/2} \geq c_2
$$(b) (Perceived treatment model estimation)

$$
\begin{align*}
\mathbb{E}[m_1(\mathbf{f}(\mathbf{R}_i)) - m_0(\mathbf{f}(\mathbf{R}_i))] &\ge c_2, \quad \mathbb{E}[|\hat{m}_{T_i}(\hat{\mathbf{f}}(\mathbf{R}_i)) - m_{T_i}(\mathbf{f}(\mathbf{R}_i))|^q]^{1/q} \le c_1, \\
\mathbb{E}[|\hat{m}_{T_i}(\hat{\mathbf{f}}(\mathbf{R}_i)) - m_{T_i}(\mathbf{f}(\mathbf{R}_i))|^2]^{1/2} &\le \delta_n n^{-1/4}.
\end{align*}
$$

Together with Assumption 7, these regularity conditions are essentially equivalent to the assumptions re-
quired for DML inference on LATE (Chernozhukov et al., 2018).

Under the above assumptions, the asymptotic normality of the proposed estimator can be established.

THEOREM 4 (ASYMPTOTIC NORMALITY OF INSTRUMENT VARIABLE ESTIMATOR) Under Assumptions 1–4, 6–11, the estimator $\hat{\beta}$ obtained from the influence function $\phi$ satisfies asymptotic normality:

$$
\frac{\sqrt{n}(\hat{\beta} - \beta)}{\sigma} \xrightarrow{d} \mathcal{N}(0, 1)
$$

$$
\text{where } \sigma^2 = \mathbb{E}[\phi(\tilde{D}_i; \beta, \mathbf{f}, \mu_1, \mu_0, m_1, m_0, \pi)^2] / \mathbb{E}[\gamma_1(\mathbf{f}(\mathbf{R}_i)) - \gamma_0(\mathbf{f}(\mathbf{R}_i))]^2.
$$

Proof is omitted given that, like Theorem 2, the result follows immediately from the application of DML theory (Chernozhukov et al., 2018).

S2 Proofs

S2.1 Proof of Lemma 1

We use proof by contradiction. Suppose that the overlap condition is not satisfied. That is, there exist $t \in \{0, 1\}$ and $\mathbf{u} \in \mathcal{U}$ such that $\mathbb{P}(T_i = t | U_i = \mathbf{u}) = 0$. This implies that under Assumptions 3 and 4, there exists a deterministic function $\tilde{g}_T : \mathcal{U} \to \{0, 1\}$ and $\mathbf{x} \in \mathcal{X}$ such that $t = \tilde{g}_T(\mathbf{u}) = \tilde{g}_T(\mathbf{g}_U(\mathbf{x}))$. This contradicts Assumption 5. $\square$

S2.2 Proof of Theorem 1

Under a deep generative model of Definition 1, the distribution of $X_i$ only depends on $P_i$, and hence we have $Y_i(x) \perp X_i | P_i$. Together with Assumption 2, Lemma 4.3 of Dawid (1979) implies $Y_i(x) \perp X_i$. Then, under Assumptions 3 and 5, we have:

$$
Y_i(t, \mathbf{U}_i) \perp T_i | \mathbf{U}_i. \tag{S3}
$$

Next, under Assumptions 3, 4, and 6, $U_i$ is a deterministic function of $R_i$ such that we can write $U_i = f^*(R_i)$ for some function $f^* : \mathcal{R} \to \mathcal{U}$. Furthermore, Assumption 5 implies $Y_i \perp R_i | T_i = t, f^*(R_i) = u$ and $0 < \Pr(T_i = t | f^*(R_i) = u) < 1$ for all $t \in \{0, 1\}$ and $u \in \mathcal{U}$. Thus, we have:

$$
\begin{align*}
\mathbb{P}(Y_i(t, \mathbf{U}_i) = y) &= \int_{\mathcal{U}} \mathbb{P}(Y_i(t, \mathbf{U}_i) = y | \mathbf{U}_i) dF(\mathbf{U}_i) \\
&= \int_{\mathcal{U}} \mathbb{P}(Y_i(t, \mathbf{U}_i) = y | T_i = t, \mathbf{U}_i) dF(\mathbf{U}_i) \\
&= \int_{\mathcal{U}} \mathbb{P}(Y_i = y | T_i = t, \mathbf{f}^*(\mathbf{R}_i)) dF(\mathbf{f}^*(\mathbf{R}_i)), \\
&= \int_{\mathcal{R}} \mathbb{P}(Y_i = y | T_i = t, \mathbf{f}^*(\mathbf{R}_i)) dF(\mathbf{R}_i),
\end{align*}
$$where the second equality follows from Equation (S3) and Lemma 1, and the third equality is due to Assumption 1. Finally, suppose there is another function $\boldsymbol{f}: \mathcal{R} \to \mathcal{Q}$, which satisfies the conditional independence relation $Y_i \perp \boldsymbol{R}_i | T_i = t, \boldsymbol{f}(\boldsymbol{R}_i) = q$ for all $q \in \mathcal{Q}$ and is separable from the treatment feature. Then,

$$
\begin{align*}
\int_{\mathcal{R}} \mathbb{P}(Y_i = y | T_i = t, \boldsymbol{f}(\boldsymbol{R}_i)) dF(\boldsymbol{R}_i) &= \int_{\mathcal{R}} \mathbb{P}(Y_i = y | T_i = t, \boldsymbol{f}(\boldsymbol{R}_i), \boldsymbol{R}_i) dF(\boldsymbol{R}_i) \\
&= \int_{\mathcal{R}} \mathbb{P}(Y_i = y | T_i = t, \boldsymbol{f}^*(\boldsymbol{R}_i), \boldsymbol{R}_i) dF(\boldsymbol{R}_i) \\
&= \int_{\mathcal{R}} \mathbb{P}(Y_i = y | T_i = t, \boldsymbol{f}^*(\boldsymbol{R}_i)) dF(\boldsymbol{R}_i)
\end{align*}
$$

Thus, any function of $\boldsymbol{R}_i$ that satisfies this conditional independence relation leads to the same identification formula for the marginal distribution of potential outcome. $\square$

## S2.3 Proof of Theorem 2

Assumptions 7(c)–(d) and the triangle inequality imply,

$$
\begin{align*}
\mathbb{E}[|\hat{\pi}(\hat{\boldsymbol{f}}(\boldsymbol{R}_i)) - \pi(\boldsymbol{f}(\boldsymbol{R}_i))|^q]^{1/q} &= \mathbb{E}[|\{\hat{\pi}(\hat{\boldsymbol{f}}(\boldsymbol{R}_i)) - \hat{\pi}(\boldsymbol{f}(\boldsymbol{R}_i))\} + \{\hat{\pi}(\boldsymbol{f}(\boldsymbol{R}_i)) - \pi(\boldsymbol{f}(\boldsymbol{R}_i))\}|^q]^{1/q} \\
&\leq \mathbb{E}[|\hat{\pi}(\hat{\boldsymbol{f}}(\boldsymbol{R}_i)) - \hat{\pi}(\boldsymbol{f}(\boldsymbol{R}_i))|^q]^{1/q} + c_1 \\
&\leq L \cdot \mathbb{E} \left[ \left\| \hat{\boldsymbol{f}}(\boldsymbol{R}_i) - \boldsymbol{f}(\boldsymbol{R}_i) \right\|^q \right]^{1/q} + c_1 \\
&= (L+1)c_1 \tag{S4}
\end{align*}
$$

where $L$ is a Lipschitz constant. Similarly, we can also show,

$$
\begin{align*}
\mathbb{E} \left[ \left| \hat{\pi}(\hat{\boldsymbol{f}}(\boldsymbol{R}_i)) - \pi(\boldsymbol{f}(\boldsymbol{R}_i)) \right|^2 \right]^{1/2} &\le L \cdot \mathbb{E} \left[ \left\| \hat{\boldsymbol{f}}(\boldsymbol{R}_i) - \boldsymbol{f}(\boldsymbol{R}_i) \right\|^2 \right]^{1/2} + \mathbb{E} \left[ \left| \hat{\pi}(\boldsymbol{f}(\boldsymbol{R}_i)) - \pi(\boldsymbol{f}(\boldsymbol{R}_i)) \right|^2 \right]^{1/2} \\
&\le (L+1) \delta_n n^{-1/4}. \tag{S5}
\end{align*}
$$

Together with Assumption 7(b), Equation (S5) implies that there exists a sequence of positive constants $\delta_n'$ converging to zero as the sample size $n$ increases such that the following inequality holds,

$$
\mathbb{E}[|\hat{\pi}(\hat{\boldsymbol{f}}(\boldsymbol{R}_i)) - \pi(\boldsymbol{f}(\boldsymbol{R}_i))|^2]^{1/2} \cdot \mathbb{E}[|\hat{\mu}_{T_i}(\hat{\boldsymbol{f}}(\boldsymbol{R}_i)) - \mu_{T_i}(\boldsymbol{f}(\boldsymbol{R}_i))|^2]^{1/2} \le \delta_n' n^{-1/2}. \quad (S6)
$$

Thus, the standard regularity conditions of the DML theory (Chernozhukov et al., 2018) are satisfied for the estimated propensity score with the estimated deconfounder, i.e., $\hat{\pi}(\hat{\boldsymbol{f}}(\boldsymbol{R}_i))$. Finally, Assumptions 7(a)–(b) and Equations (S4) and (S6) imply,

$$
\sqrt{n}(\hat{\tau} - \tau) \xrightarrow{d} \mathcal{N}(0, \sigma^2)
$$

where $\sigma^2 = \mathbb{E}[\psi(\mathcal{D}_i; \tau, \boldsymbol{f}, \eta_1, \eta_0, \pi)^2]$.

## S2.4 Proof of Theorem 3

Under a deep generative model (Definition 1), the distribution of $X_i$ only depends on $P_i$, and hence we have $\{Y_i(x), \tilde{T}_i(x)\} \perp X_i | P_i$. Together with Assumption 2, Lemma 4.3 of Dawid (1979) implies $\{Y_i(x), \tilde{T}_i(x)\} \perp X_i$. Under Assumptions 3, 4, 8, 9, and 10 (b), we have, for any $t, \tilde{t} \in \{0, 1\}$ and $\boldsymbol{u} \in \mathcal{U}$:

$$
\{Y_i(\tilde{t}, \boldsymbol{u}), \tilde{T}_i(t, \boldsymbol{u})\} \perp \{T_i, U_i\}. \quad (S7)
$$Then, for any $\mathbf{u} \in \mathcal{U}$,

$$
\begin{align*}
& \mathbb{E}[Y_i | T_i = 1, U_i = \mathbf{u}] - \mathbb{E}[Y_i | T_i = 0, U_i = \mathbf{u}] \\
&= \mathbb{E}[Y_i(\tilde{T}_i(1, \mathbf{u}), \mathbf{u}) | T_i = 1, U_i = \mathbf{u}] - \mathbb{E}[Y_i(\tilde{T}_i(0, \mathbf{u}), \mathbf{u}) | T_i = 0, U_i = \mathbf{u}] \\
&= \mathbb{E}[Y_i(\tilde{T}_i(1, \mathbf{u}), \mathbf{u}) - Y_i(\tilde{T}_i(0, \mathbf{u}), \mathbf{u})] \\
&= \mathbb{E}[Y_i(\tilde{T}_i(1, \mathbf{u}), \mathbf{u}) - Y_i(\tilde{T}_i(0, \mathbf{u}), \mathbf{u}) | \tilde{T}_i(1, \mathbf{u}) = 1, \tilde{T}_i(0, \mathbf{u}) = 0] \cdot \mathbb{P}(\tilde{T}_i(1, \mathbf{u}) = 1, \tilde{T}_i(0, \mathbf{u}) = 0) \\
&= \mathbb{E}[Y_i(1, \mathbf{u}) - Y_i(0, \mathbf{u}) | \tilde{T}_i(1, \mathbf{u}) = 1, \tilde{T}_i(0, \mathbf{u}) = 0] \cdot \mathbb{P}(\tilde{T}_i(1, \mathbf{u}) = 1, \tilde{T}_i(0, \mathbf{u}) = 0),
\end{align*}
$$

where the second equality follows from Equation (S7), the third equality is due to Assumption 10. We also
have:

$$
\begin{align*}
\mathbb{P}(\tilde{T}_i(1, \mathbf{u}) = 1, \tilde{T}_i(0, \mathbf{u}) = 0) &= \mathbb{E}[\tilde{T}_i(1, \mathbf{u}) - \tilde{T}_i(0, \mathbf{u})] \\
&= \mathbb{E}[\tilde{T}_i(1, \mathbf{u}) | T_i = 1, U_i = \mathbf{u}] - \mathbb{E}[\tilde{T}_i(0, \mathbf{u}) | T_i = 0, U_i = \mathbf{u}] \\
&= \mathbb{E}[\tilde{T}_i | T_i = 1, U_i = \mathbf{u}] - \mathbb{E}[\tilde{T}_i | T_i = 1, U_i = \mathbf{u}]
\end{align*}
$$

where the second equality follows from Equation (S7). Together, under Assumption 10 (a), we have:

$$
\mathbb{E}[Y_i(1, \mathbf{u}) - Y_i(0, \mathbf{u}) \mid \tilde{T}_i(1, \mathbf{u}) = 1, \tilde{T}_i(0, \mathbf{u}) = 0] = \frac{\mathbb{E}[Y_i \mid T_i = 1, \mathbf{U}_i = \mathbf{u}] - \mathbb{E}[Y_i \mid T_i = 0, \mathbf{U}_i = \mathbf{u}]}{\mathbb{E}[\tilde{T}_i \mid T_i = 1, \mathbf{U}_i = \mathbf{u}] - \mathbb{E}[\tilde{T}_i \mid T_i = 1, \mathbf{U}_i = \mathbf{u}]}. \tag{S8}
$$

Finally, the LATE is identified as:

$$
\begin{align*}
& \mathbb{E}[Y_i(1, \mathbf{U}_i) - Y_i(0, \mathbf{U}_i) | \tilde{T}_i(1, \mathbf{U}_i) = 1, \tilde{T}_i(0, \mathbf{U}_i) = 0] \\
&= \int_{\mathcal{U}} \mathbb{E}[Y_i(1, \mathbf{U}_i) - Y_i(0, \mathbf{U}_i) | \tilde{T}_i(1, \mathbf{U}_i) = 1, \tilde{T}_i(0, \mathbf{U}_i) = 0, \mathbf{U}_i] dF(\mathbf{U}_i | \tilde{T}_i(1, \mathbf{U}_i) = 1, \tilde{T}_i(0, \mathbf{U}_i) = 0) \\
&= \int_{\mathcal{U}} \frac{\mathbb{E}[Y_i | T_i = 1, \mathbf{U}_i] - \mathbb{E}[Y_i | T_i = 0, \mathbf{U}_i]}{\mathbb{E}[\tilde{T}_i | T_i = 1, \mathbf{U}_i] - \mathbb{E}[\tilde{T}_i | T_i = 1, \mathbf{U}_i]} dF(\mathbf{U}_i | \tilde{T}_i(1, \mathbf{U}_i) > \tilde{T}_i(0, \mathbf{U}_i)) \\
&= \int_{\mathcal{U}} \frac{\mathbb{E}[Y_i | T_i = 1, \mathbf{U}_i] - \mathbb{E}[Y_i | T_i = 0, \mathbf{U}_i]}{\mathbb{E}[\tilde{T}_i | T_i = 1, \mathbf{U}_i] - \mathbb{E}[\tilde{T}_i | T_i = 1, \mathbf{U}_i]} \cdot \frac{\mathbb{P}(\tilde{T}_i(1, \mathbf{U}_i) = 1, \tilde{T}_i(0, \mathbf{U}_i) = 0 | \mathbf{U}_i)}{\mathbb{P}(\tilde{T}_i(1, \mathbf{U}_i) = 1, \tilde{T}_i(0, \mathbf{U}_i) = 0)} dF(\mathbf{U}_i) \\
&= \int_{\mathcal{U}} \frac{\mathbb{E}[Y_i | T_i = 1, \mathbf{U}_i] - \mathbb{E}[Y_i | T_i = 0, \mathbf{U}_i]}{\mathbb{E}[\tilde{T}_i | T_i = 1, \mathbf{U}_i] - \mathbb{E}[\tilde{T}_i | T_i = 1, \mathbf{U}_i]} \cdot \frac{\mathbb{E}[\tilde{T}_i | T_i = 1, \mathbf{U}_i] - \mathbb{E}[\tilde{T}_i | T_i = 1, \mathbf{U}_i]}{\mathbb{P}(\tilde{T}_i(1, \mathbf{U}_i) = 1, \tilde{T}_i(0, \mathbf{U}_i) = 0)} dF(\mathbf{U}_i) \\
&= \frac{\int_{\mathcal{U}} \mathbb{E}[Y_i | T_i = 1, \mathbf{U}_i] - \mathbb{E}[Y_i | T_i = 0, \mathbf{U}_i] dF(\mathbf{U}_i)}{\int_{\mathcal{U}} \mathbb{E}[\tilde{T}_i | T_i = 1, \mathbf{U}_i] - \mathbb{E}[\tilde{T}_i | T_i = 0, \mathbf{U}_i] dF(\mathbf{U}_i)} \\
&= \frac{\int_{\mathcal{R}} \mathbb{E}[Y_i | T_i = 1, \mathbf{f}(\mathbf{R}_i)] - \mathbb{E}[Y_i | T_i = 0, \mathbf{f}(\mathbf{R}_i)] dF(\mathbf{R}_i)}{\int_{\mathcal{R}} \mathbb{E}[\tilde{T}_i | T_i = 1, \mathbf{f}(\mathbf{R}_i)] - \mathbb{E}[\tilde{T}_i | T_i = 0, \mathbf{f}(\mathbf{R}_i)] dF(\mathbf{R}_i)}
\end{align*}
$$

where the second equality follows from Equation (S8), the third equality is due to Bayes’ theorem, and the
last equality (as well as the existence of deconfounder) follows from the same argument used to establish
Theorem 1. □S3 Results of Additional Simulation Studies

<table><thead><tr><th></th><th>Bias</th><th>RMSE</th><th>95% confidence interval coverage</th><th>avg. length</th><th>Runtime (seconds)</th></tr></thead><tbody><tr><td colspan="6"><strong>Weak confounding w/ separability</strong></td></tr><tr><td>Proposed estimator (new)</td><td>-0.33</td><td>1.06</td><td>0.94</td><td>3.47</td><td>42.1</td></tr><tr><td>Proposed estimator (reuse)</td><td>-0.26</td><td>0.98</td><td>0.92</td><td>2.95</td><td>54.1</td></tr><tr><td>Difference-in-Means</td><td>3.61</td><td>3.61</td><td>0</td><td>4.72</td><td>0.0</td></tr><tr><td>Outcome model with BERT</td><td>1.17</td><td>1.00</td><td>0.12</td><td>0.53</td><td>296</td></tr><tr><td>DML with BERT</td><td>0.58</td><td>4.21</td><td>0.93</td><td>2.10</td><td>327</td></tr><tr><td colspan="6"><strong>Moderate confounding w/ separability</strong></td></tr><tr><td>Proposed estimator (new)</td><td>-1.07</td><td>2.72</td><td>0.95</td><td>9.00</td><td>43.6</td></tr><tr><td>Proposed estimator (reuse)</td><td>-1.05</td><td>2.36</td><td>0.93</td><td>6.85</td><td>62.9</td></tr><tr><td>Difference-in-Means</td><td>7.95</td><td>7.95</td><td>0</td><td>9.50</td><td>0.0</td></tr><tr><td>Outcome model with BERT</td><td>3.44</td><td>2.27</td><td>0.05</td><td>0.92</td><td>673</td></tr><tr><td>DML with BERT</td><td>2.09</td><td>18.3</td><td>0.92</td><td>5.14</td><td>720</td></tr><tr><td colspan="6"><strong>Strong confounding w/ separability</strong></td></tr><tr><td>Proposed estimator (new)</td><td>-14.6</td><td>36.9</td><td>0.88</td><td>113</td><td>55.3</td></tr><tr><td>Proposed estimator (reuse)</td><td>-15.1</td><td>36.0</td><td>0.92</td><td>96.3</td><td>74.3</td></tr><tr><td>Difference-in-Means</td><td>86.0</td><td>86.0</td><td>0</td><td>95.7</td><td>0.0</td></tr><tr><td>Outcome model with BERT</td><td>112</td><td>114</td><td>0</td><td>13.2</td><td>2731</td></tr><tr><td>DML with BERT</td><td>208</td><td>917</td><td>0.26</td><td>382</td><td>2756</td></tr><tr><td colspan="6"><strong>Weak confounding w/o separability</strong></td></tr><tr><td>Proposed estimator (new)</td><td>3.23</td><td>3.27</td><td>0</td><td>1.45</td><td>35.9</td></tr><tr><td>Proposed estimator (reuse)</td><td>2.87</td><td>2.89</td><td>0</td><td>1.34</td><td>41.1</td></tr><tr><td>Difference-in-Means</td><td>2.20</td><td>2.20</td><td>0.03</td><td>4.03</td><td>0.0</td></tr><tr><td>Outcome model with BERT</td><td>2.55</td><td>2.70</td><td>0.01</td><td>1.02</td><td>320</td></tr><tr><td>DML with BERT</td><td>6.18</td><td>16.7</td><td>0.05</td><td>4.69</td><td>348</td></tr><tr><td colspan="6"><strong>Moderate confounding w/o separability</strong></td></tr><tr><td>Proposed estimator (new)</td><td>6.70</td><td>6.76</td><td>0</td><td>2.89</td><td>42.5</td></tr><tr><td>Proposed estimator (reuse)</td><td>5.90</td><td>5.93</td><td>0</td><td>2.66</td><td>44.9</td></tr><tr><td>Difference-in-Means</td><td>4.39</td><td>4.40</td><td>0</td><td>8.04</td><td>0.0</td></tr><tr><td>Outcome model with BERT</td><td>7.56</td><td>7.66</td><td>0</td><td>1.85</td><td>624</td></tr><tr><td>DML with BERT</td><td>12.1</td><td>30.5</td><td>0.06</td><td>10.1</td><td>656</td></tr><tr><td colspan="6"><strong>Strong confounding w/o separability</strong></td></tr><tr><td>Proposed estimator (new)</td><td>76.3</td><td>76.7</td><td>0</td><td>29.8</td><td>53.0</td></tr><tr><td>Proposed estimator (reuse)</td><td>66.8</td><td>67.1</td><td>0</td><td>27.7</td><td>56.4</td></tr><tr><td>Difference-in-Means</td><td>44.0</td><td>44.0</td><td>0</td><td>80.3</td><td>0.0</td></tr><tr><td>Outcome model with BERT</td><td>116</td><td>117</td><td>0</td><td>13.2</td><td>2689</td></tr><tr><td>DML with BERT</td><td>207</td><td>814</td><td>0.26</td><td>425</td><td>2716</td></tr></tbody></table>

Table S1: Simulation Results with 200 Monte Carlo trials<table><thead><tr><th></th><th>Bias</th><th>RMSE</th><th>95% confidence interval coverage</th><th>avg. length</th><th>Average time (sec.)</th></tr></thead><tbody><tr><td colspan="6"><strong>Weak confounding w/ separability</strong></td></tr><tr><td>Proposed estimator (new)</td><td>-0.31</td><td>1.09</td><td>0.93</td><td>3.55</td><td>43.0</td></tr><tr><td>Proposed estimator (reuse)</td><td>-0.21</td><td>0.96</td><td>0.93</td><td>2.90</td><td>55.7</td></tr><tr><td colspan="6"><strong>Moderate confounding w/ separability</strong></td></tr><tr><td>Proposed estimator (new)</td><td>-0.99</td><td>2.77</td><td>0.92</td><td>8.83</td><td>45.7</td></tr><tr><td>Proposed estimator (reuse)</td><td>-1.00</td><td>2.67</td><td>0.90</td><td>6.99</td><td>61.7</td></tr><tr><td colspan="6"><strong>Strong confounding w/ separability</strong></td></tr><tr><td>Proposed estimator (new)</td><td>-14.3</td><td>36.1</td><td>0.89</td><td>108</td><td>57.7</td></tr><tr><td>Proposed estimator (reuse)</td><td>-16.0</td><td>38.1</td><td>0.90</td><td>98.8</td><td>76.3</td></tr></tbody></table>

Table S2: Simulation Results based on 1000 Monte Carlo trials