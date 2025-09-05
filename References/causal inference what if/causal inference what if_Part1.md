CAUSAL INFERENCE

What If

Miguel A. Hernán and
James M. Robins

![[_resources/causal inference what if_Part1/40d76094982d102a4f56f24b3f628e82_MD5.jpg]]

![[_resources/causal inference what if_Part1/a655ef07a102857aa29e899b92e6b133_MD5.jpg]]

CRC Press

Taylor & Francis Group

A CHAPMAN & HALL BOOK# Causal Inference: What If

Miguel A. Hernán, James M. Robins

April 26, 2024Copyright 2020, 2024 Miguel Hernán and James Robins

All rights reserved. No portion of this book can be reproduced for publication without express permission from the copyright holders, except as permitted by U.S. copyright law. For permissions, contact miguel_hernan@post.harvard.edu

Cover design by Josh McKible

LaTex design by Roger Logan

Suggested citation: Hernán MA, Robins JM (2020). *Causal Inference: What If*. Boca Raton: Chapman & Hall/CRC.

This book is available online at https://www.hsph.harvard.edu/miguel-hernan/causal-inference-book/

A print version (for purchase) is expected to become available soon.# Contents

<table><tr><td>Introduction: Towards less casual causal inferences</td><td>vii</td></tr><tr><td>I Causal inference without models</td><td>1</td></tr><tr><td>1 A definition of causal effect</td><td>3</td></tr><tr><td>1.1 Individual causal effects</td><td>3</td></tr><tr><td>1.2 Average causal effects</td><td>4</td></tr><tr><td>1.3 Measures of causal effect</td><td>7</td></tr><tr><td>1.4 Random variability</td><td>8</td></tr><tr><td>1.5 Causation versus association</td><td>10</td></tr><tr><td>2 Randomized experiments</td><td>13</td></tr><tr><td>2.1 Randomization</td><td>13</td></tr><tr><td>2.2 Conditional randomization</td><td>17</td></tr><tr><td>2.3 Standardization</td><td>19</td></tr><tr><td>2.4 Inverse probability weighting</td><td>20</td></tr><tr><td>3 Observational studies</td><td>27</td></tr><tr><td>3.1 Identifiability conditions</td><td>27</td></tr><tr><td>3.2 Exchangeability</td><td>29</td></tr><tr><td>3.3 Positivity</td><td>32</td></tr><tr><td>3.4 Consistency: First, define the counterfactual outcome</td><td>33</td></tr><tr><td>3.5 Consistency: Second, link counterfactuals to the observed data</td><td>37</td></tr><tr><td>3.6 The target trial</td><td>38</td></tr><tr><td>4 Effect modification</td><td>43</td></tr><tr><td>4.1 Heterogeneity of treatment effects</td><td>43</td></tr><tr><td>4.2 Stratification to identify effect modification</td><td>45</td></tr><tr><td>4.3 Why care about effect modification</td><td>47</td></tr><tr><td>4.4 Stratification as a form of adjustment</td><td>49</td></tr><tr><td>4.5 Matching as another form of adjustment</td><td>51</td></tr><tr><td>4.6 Effect modification and adjustment methods</td><td>52</td></tr><tr><td>5 Interaction</td><td>57</td></tr><tr><td>5.1 Interaction requires a joint intervention</td><td>57</td></tr><tr><td>5.2 Identifying interaction</td><td>58</td></tr><tr><td>5.3 Counterfactual response types and interaction</td><td>60</td></tr><tr><td>5.4 Sufficient causes</td><td>62</td></tr><tr><td>5.5 Sufficient cause interaction</td><td>65</td></tr><tr><td>5.6 Counterfactuals or sufficient-component causes?</td><td>67</td></tr></table><table>
  <tbody>
    <tr>
      <td><b>6</b></td>
      <td><b>Graphical representation of causal effects</b></td>
      <td><b>71</b></td>
    </tr>
    <tr>
      <td></td>
      <td>6.1 Causal diagrams</td>
      <td>71</td>
    </tr>
    <tr>
      <td></td>
      <td>6.2 Causal diagrams and marginal independence</td>
      <td>73</td>
    </tr>
    <tr>
      <td></td>
      <td>6.3 Causal diagrams and conditional independence</td>
      <td>76</td>
    </tr>
    <tr>
      <td></td>
      <td>6.4 Positivity and consistency in causal diagrams</td>
      <td>77</td>
    </tr>
    <tr>
      <td></td>
      <td>6.5 A structural classification of bias</td>
      <td>81</td>
    </tr>
    <tr>
      <td></td>
      <td>6.6 The structure of effect modification</td>
      <td>83</td>
    </tr>
    <tr>
      <td><b>7</b></td>
      <td><b>Confounding</b></td>
      <td><b>85</b></td>
    </tr>
    <tr>
      <td></td>
      <td>7.1 The structure of confounding</td>
      <td>85</td>
    </tr>
    <tr>
      <td></td>
      <td>7.2 Confounding and exchangeability</td>
      <td>87</td>
    </tr>
    <tr>
      <td></td>
      <td>7.3 Confounding and the backdoor criterion</td>
      <td>89</td>
    </tr>
    <tr>
      <td></td>
      <td>7.4 Confounding and confounders</td>
      <td>92</td>
    </tr>
    <tr>
      <td></td>
      <td>7.5 Single-world intervention graphs</td>
      <td>95</td>
    </tr>
    <tr>
      <td></td>
      <td>7.6 Confounding adjustment</td>
      <td>96</td>
    </tr>
    <tr>
      <td><b>8</b></td>
      <td><b>Selection bias</b></td>
      <td><b>103</b></td>
    </tr>
    <tr>
      <td></td>
      <td>8.1 The structure of selection bias</td>
      <td>103</td>
    </tr>
    <tr>
      <td></td>
      <td>8.2 Examples of selection bias</td>
      <td>105</td>
    </tr>
    <tr>
      <td></td>
      <td>8.3 Selection bias and confounding</td>
      <td>107</td>
    </tr>
    <tr>
      <td></td>
      <td>8.4 Selection bias and censoring</td>
      <td>109</td>
    </tr>
    <tr>
      <td></td>
      <td>8.5 How to adjust for selection bias</td>
      <td>111</td>
    </tr>
    <tr>
      <td></td>
      <td>8.6 Selection without bias</td>
      <td>115</td>
    </tr>
    <tr>
      <td><b>9</b></td>
      <td><b>Measurement bias and “Noncausal” diagrams</b></td>
      <td><b>119</b></td>
    </tr>
    <tr>
      <td></td>
      <td>9.1 Measurement error</td>
      <td>119</td>
    </tr>
    <tr>
      <td></td>
      <td>9.2 The structure of measurement error</td>
      <td>120</td>
    </tr>
    <tr>
      <td></td>
      <td>9.3 Mismeasured confounders and colliders</td>
      <td>122</td>
    </tr>
    <tr>
      <td></td>
      <td>9.4 Causal diagrams without mismeasured variables?</td>
      <td>124</td>
    </tr>
    <tr>
      <td></td>
      <td>9.5 Many proposed causal diagrams include noncausal arrows</td>
      <td>125</td>
    </tr>
    <tr>
      <td></td>
      <td>9.6 Does it matter that many proposed diagrams include noncausal arrows?</td>
      <td>128</td>
    </tr>
    <tr>
      <td><b>10</b></td>
      <td><b>Random variability</b></td>
      <td><b>131</b></td>
    </tr>
    <tr>
      <td></td>
      <td>10.1 Identification versus estimation</td>
      <td>131</td>
    </tr>
    <tr>
      <td></td>
      <td>10.2 Estimation of causal effects</td>
      <td>134</td>
    </tr>
    <tr>
      <td></td>
      <td>10.3 The myth of the super-population</td>
      <td>136</td>
    </tr>
    <tr>
      <td></td>
      <td>10.4 The conditionality “principle”</td>
      <td>138</td>
    </tr>
    <tr>
      <td></td>
      <td>10.5 The curse of dimensionality</td>
      <td>142</td>
    </tr>
    <tr>
      <td><b>II</b></td>
      <td><b>Causal inference with models</b></td>
      <td><b>145</b></td>
    </tr>
    <tr>
      <td><b>11</b></td>
      <td><b>Why model?</b></td>
      <td><b>147</b></td>
    </tr>
    <tr>
      <td></td>
      <td>11.1 Data cannot speak for themselves</td>
      <td>147</td>
    </tr>
    <tr>
      <td></td>
      <td>11.2 Parametric estimators of the conditional mean</td>
      <td>149</td>
    </tr>
    <tr>
      <td></td>
      <td>11.3 Nonparametric estimators of the conditional mean</td>
      <td>150</td>
    </tr>
    <tr>
      <td></td>
      <td>11.4 Smoothing</td>
      <td>151</td>
    </tr>
    <tr>
      <td></td>
      <td>11.5 The bias-variance trade-off</td>
      <td>153</td>
    </tr>
  </tbody>
</table><table>
  <tbody>
    <tr>
      <td><b>12</b></td>
      <td><b>IP weighting and marginal structural models</b></td>
      <td><b>157</b></td>
    </tr>
    <tr>
      <td>12.1</td>
      <td>The causal question</td>
      <td>157</td>
    </tr>
    <tr>
      <td>12.2</td>
      <td>Estimating IP weights via modeling</td>
      <td>158</td>
    </tr>
    <tr>
      <td>12.3</td>
      <td>Stabilized IP weights</td>
      <td>161</td>
    </tr>
    <tr>
      <td>12.4</td>
      <td>Marginal structural models</td>
      <td>163</td>
    </tr>
    <tr>
      <td>12.5</td>
      <td>Effect modification and marginal structural models</td>
      <td>165</td>
    </tr>
    <tr>
      <td>12.6</td>
      <td>Censoring and missing data</td>
      <td>166</td>
    </tr>
    <tr>
      <td><b>13</b></td>
      <td><b>Standardization and the parametric g-formula</b></td>
      <td><b>169</b></td>
    </tr>
    <tr>
      <td>13.1</td>
      <td>Standardization as an alternative to IP weighting</td>
      <td>169</td>
    </tr>
    <tr>
      <td>13.2</td>
      <td>Estimating the mean outcome via modeling</td>
      <td>171</td>
    </tr>
    <tr>
      <td>13.3</td>
      <td>Standardizing the mean outcome to the confounder distribution</td>
      <td>172</td>
    </tr>
    <tr>
      <td>13.4</td>
      <td>IP weighting or standardization?</td>
      <td>173</td>
    </tr>
    <tr>
      <td>13.5</td>
      <td>How seriously do we take our estimates?</td>
      <td>175</td>
    </tr>
    <tr>
      <td><b>14</b></td>
      <td><b>G-estimation of structural nested models</b></td>
      <td><b>181</b></td>
    </tr>
    <tr>
      <td>14.1</td>
      <td>The causal question revisited</td>
      <td>181</td>
    </tr>
    <tr>
      <td>14.2</td>
      <td>Exchangeability revisited</td>
      <td>182</td>
    </tr>
    <tr>
      <td>14.3</td>
      <td>Structural nested mean models</td>
      <td>183</td>
    </tr>
    <tr>
      <td>14.4</td>
      <td>Rank preservation</td>
      <td>185</td>
    </tr>
    <tr>
      <td>14.5</td>
      <td>G-estimation</td>
      <td>187</td>
    </tr>
    <tr>
      <td>14.6</td>
      <td>Structural nested models with two or more parameters</td>
      <td>190</td>
    </tr>
    <tr>
      <td><b>15</b></td>
      <td><b>Outcome regression and propensity scores</b></td>
      <td><b>193</b></td>
    </tr>
    <tr>
      <td>15.1</td>
      <td>Outcome regression</td>
      <td>193</td>
    </tr>
    <tr>
      <td>15.2</td>
      <td>Propensity scores</td>
      <td>195</td>
    </tr>
    <tr>
      <td>15.3</td>
      <td>Propensity stratification and standardization</td>
      <td>196</td>
    </tr>
    <tr>
      <td>15.4</td>
      <td>Propensity matching</td>
      <td>198</td>
    </tr>
    <tr>
      <td>15.5</td>
      <td>Propensity models, structural models, predictive models</td>
      <td>199</td>
    </tr>
    <tr>
      <td><b>16</b></td>
      <td><b>Instrumental variable estimation</b></td>
      <td><b>203</b></td>
    </tr>
    <tr>
      <td>16.1</td>
      <td>The three instrumental conditions</td>
      <td>203</td>
    </tr>
    <tr>
      <td>16.2</td>
      <td>The usual IV estimand</td>
      <td>206</td>
    </tr>
    <tr>
      <td>16.3</td>
      <td>A fourth identifying condition: homogeneity</td>
      <td>208</td>
    </tr>
    <tr>
      <td>16.4</td>
      <td>An alternative fourth condition: monotonicity</td>
      <td>211</td>
    </tr>
    <tr>
      <td>16.5</td>
      <td>The three instrumental conditions revisited</td>
      <td>214</td>
    </tr>
    <tr>
      <td>16.6</td>
      <td>Instrumental variable estimation versus other methods</td>
      <td>217</td>
    </tr>
    <tr>
      <td><b>17</b></td>
      <td><b>Causal survival analysis</b></td>
      <td><b>221</b></td>
    </tr>
    <tr>
      <td>17.1</td>
      <td>Hazards and risks</td>
      <td>221</td>
    </tr>
    <tr>
      <td>17.2</td>
      <td>From hazards to risks</td>
      <td>223</td>
    </tr>
    <tr>
      <td>17.3</td>
      <td>Why censoring matters</td>
      <td>226</td>
    </tr>
    <tr>
      <td>17.4</td>
      <td>IP weighting of marginal structural models</td>
      <td>228</td>
    </tr>
    <tr>
      <td>17.5</td>
      <td>The parametric g-formula</td>
      <td>230</td>
    </tr>
    <tr>
      <td>17.6</td>
      <td>G-estimation of structural nested models</td>
      <td>231</td>
    </tr>
    <tr>
      <td><b>18</b></td>
      <td><b>Variable selection and high-dimensional data</b></td>
      <td><b>235</b></td>
    </tr>
    <tr>
      <td>18.1</td>
      <td>The different goals of variable selection</td>
      <td>235</td>
    </tr>
    <tr>
      <td>18.2</td>
      <td>Variables that induce or amplify bias</td>
      <td>236</td>
    </tr>
    <tr>
      <td>18.3</td>
      <td>Causal inference and machine learning</td>
      <td>240</td>
    </tr>
    <tr>
      <td>18.4</td>
      <td>Doubly robust machine learning estimators</td>
      <td>241</td>
    </tr>
    <tr>
      <td>18.5</td>
      <td>Variable selection is a difficult problem</td>
      <td>244</td>
    </tr>
  </tbody>
</table>III Causal inference for time-varying treatments 247

<table>
  <tbody>
    <tr>
      <td><b>19 Time-varying treatments</b></td>
      <td><b>249</b></td>
    </tr>
    <tr>
      <td>19.1 The causal effect of time-varying treatments</td>
      <td>249</td>
    </tr>
    <tr>
      <td>19.2 Treatment strategies</td>
      <td>250</td>
    </tr>
    <tr>
      <td>19.3 Sequentially randomized experiments</td>
      <td>251</td>
    </tr>
    <tr>
      <td>19.4 Sequential exchangeability</td>
      <td>253</td>
    </tr>
    <tr>
      <td>19.5 Identifiability under some but not all treatment strategies</td>
      <td>255</td>
    </tr>
    <tr>
      <td>19.6 Time-varying confounding and time-varying confounders</td>
      <td>259</td>
    </tr>
    <tr>
      <td><b>20 Treatment-confounder feedback</b></td>
      <td><b>261</b></td>
    </tr>
    <tr>
      <td>20.1 The elements of treatment-confounder feedback</td>
      <td>261</td>
    </tr>
    <tr>
      <td>20.2 The bias of traditional methods</td>
      <td>263</td>
    </tr>
    <tr>
      <td>20.3 Why traditional methods fail</td>
      <td>265</td>
    </tr>
    <tr>
      <td>20.4 Why traditional methods cannot be fixed</td>
      <td>267</td>
    </tr>
    <tr>
      <td>20.5 Adjusting for past treatment</td>
      <td>268</td>
    </tr>
    <tr>
      <td><b>21 G-methods for time-varying treatments</b></td>
      <td><b>271</b></td>
    </tr>
    <tr>
      <td>21.1 The g-formula for time-varying treatments</td>
      <td>271</td>
    </tr>
    <tr>
      <td>21.2 IP weighting for time-varying treatments</td>
      <td>276</td>
    </tr>
    <tr>
      <td>21.3 A doubly robust estimator for time-varying treatments</td>
      <td>280</td>
    </tr>
    <tr>
      <td>21.4 G-estimation for time-varying treatments</td>
      <td>283</td>
    </tr>
    <tr>
      <td>21.5 Censoring is a time-varying treatment</td>
      <td>291</td>
    </tr>
    <tr>
      <td>21.6 The big g-formula</td>
      <td>294</td>
    </tr>
    <tr>
      <td><b>22 Target trial emulation</b></td>
      <td><b>299</b></td>
    </tr>
    <tr>
      <td>22.1 Intention-to-treat effect and per-protocol effect</td>
      <td>299</td>
    </tr>
    <tr>
      <td>22.2 A target trial with sustained treatment strategies</td>
      <td>303</td>
    </tr>
    <tr>
      <td>22.3 Emulating a target trial with sustained strategies</td>
      <td>307</td>
    </tr>
    <tr>
      <td>22.4 Time zero</td>
      <td>309</td>
    </tr>
    <tr>
      <td>22.5 A unified approach to answer What If questions with data</td>
      <td>311</td>
    </tr>
    <tr>
      <td><b>23 Causal mediation</b></td>
      <td><b>317</b></td>
    </tr>
    <tr>
      <td>23.1 Mediation analysis under attack</td>
      <td>317</td>
    </tr>
    <tr>
      <td>23.2 A defense of mediation analysis</td>
      <td>319</td>
    </tr>
    <tr>
      <td>23.3 Empirically verifiable mediation</td>
      <td>321</td>
    </tr>
    <tr>
      <td>23.4 An interventionist theory of mediation</td>
      <td>323</td>
    </tr>
  </tbody>
</table>

References 326

Index 345# INTRODUCTION: TOWARDS LESS CASUAL CAUSAL INFERENCES

*Causal Inference* is an admittedly pretentious title for a book. A complex scientific task, causal inference relies on triangulating evidence from multiple sources and on the application of a variety of methodological approaches. No book can possibly provide a comprehensive description of all methodologies for causal inference across the sciences. The authors of any *Causal Inference* book will have to choose which aspects of causal inference methodology they want to emphasize.

The title of this introduction reflects our own choices: a book that helps scientists—especially health and social scientists—generate and analyze data to make causal inferences that are explicit about both the causal question and the assumptions underlying the data analysis. Unfortunately, the scientific literature is plagued by studies in which the causal question is not explicitly stated and the investigators’ unverifiable assumptions are not declared. This casual attitude towards causal inference has led to a great deal of confusion. For example, it is not uncommon to find studies in which the effect estimates are hard to interpret because the data analysis methods cannot appropriately answer the causal question (were it explicitly stated) under the investigators’ assumptions (were they declared).

In this book, we stress the need to take the causal question seriously enough to articulate it, and to delineate the separate roles of data and assumptions for causal inference. Once these foundations are in place, causal inferences become necessarily less casual, which helps prevent confusion. The book describes various data analysis approaches to estimate the causal effect of interest under a particular set of assumptions when data are collected on each individual in a population. A key message of the book is that causal inference cannot be reduced to a collection of recipes for data analysis.

This is not a philosophy book. We remain largely agnostic about metaphysical concepts like causality and cause. Instead, we focus on the identification and estimation of causal effects in populations, i.e., numerical quantities that measure changes in the distribution of an outcome under different interventions. For example, we discuss how to estimate the risk of death in patients with serious heart failure if they received a heart transplant versus if they did not. Through actionable causal inference, we want to help decision makers make better decisions.

The book is divided in three parts of increasing difficulty: Part I is about causal inference without models (i.e., nonparametric identification of causal effects), Part II is about causal inference with models (i.e., estimation of causal effects with parametric models), and Part III is about causal inference from complex longitudinal data (i.e., estimation of causal effects of time-varying treatments). Throughout the text, we have interspersed Fine Points and Technical points that elaborate on certain topics mentioned in the main text. Fine Points are designed to be accessible to all readers while Technical Points are designed for readers with intermediate training in statistics. The book provides a cohesive presentation of concepts and methods for causal inference that are currently scattered across journals in several disciplines. We expect that itwill be of interest to all professionals that make causal inferences, including epidemiologists, statisticians, psychologists, economists, sociologists, political scientists, computer scientists...

This book grew out of our teaching and research activities. Several generations of inquisitive Harvard students helped us sharpen the contents of the book. Decades of methodological work to quantify causal effects in health applications helped us identify what matters in practice and distinguish the essential from the incidental in our research. Therefore, this book needs to be viewed as a (hopefully helpful) synthesis of our teaching and research experience rather than as a systematic review of all prior work. The book includes hundreds of citations—about a third to our own work—but we have, of course, failed to reference every single important contribution to causal inference methodology. Also, because the field is vast and growing, no textbook can stay totally up to date. We preemptively apologize to any colleagues who may not see their work cited here and invite them to contact us. (Many did so during the approximately two decades during which this book was available online before its publication, and the book is better as a result.) Readers interested in the history of a particular methodological development are encouraged to read the academic papers that are referenced throughout the book.

We are grateful to many people who have made this book possible. Stephen Cole, Issa Dahabreh, Sander Greenland, Jay Kaufman, Eleanor Murray, Thomas Richardson, Sonja Swanson, Tyler VanderWeele, and Jan Vandenbroucke provided detailed comments. Goodarz Danaei, Kosuke Kawai, Martin Lajous, and Kathleen Wirth helped create the NHEFS dataset. The sample code in Part II was developed by Roger Logan in SAS, Eleanor Murray and Roger Logan in Stata, Joy Shi and Sean McGrath in R, and James Fiedler in Python. Roger Logan has also been our LaTeX wizard. Randall Chaput helped create the figures in Chapters 1 and 2. Josh McKible designed the book cover. Rob Calver, our patient publisher, encouraged us to write the book and supported our decision to make it freely available online.

In addition, multiple colleagues have helped us improve the book by detecting typos and identifying unclear passages. We especially thank Kafui Adjaye-Gbewonyo, Álvaro Alonso, Katherine Almendinger, Ingelise Andersen, Juan José Beunza, Karen Biala, Joanne Brady, Alex Breskin, Shan Cai, Yu-Han Chiu, Alexis Dinno, John Ferguson, James Fiedler, Birgitte Frederiksen, Tadayoshi Fushiki, Leticia Grize, Dominik Hangartner, Michael Hudgens, John Jackson, Marshall Joffe, Luke Keele, Laura Khan, Dae Hyun Kim, Lauren Kunz, Martín Lajous, Angeliki Lambrou, Wen Wei Loh, Haidong Lu, Mohammad Ali Mansournia, Giovanni Marchetti, Lauren McCarl, Shira Mitchell, Louis Mittel, Hannah Oh, Ibironke Olofin, Robert Paige, Jeremy Pertman, Melinda Power, Bruce Psaty, Brian Sauer, Tomohiro Shinozaki, Ian Shrier, Yan Song, Øystein Sørensen, Etsuji Suzuki, Denis Talbot, Mohammad Tavakkoli, Sarah Taubman, Evan Thacker, Kun-Hsing Yu, Vera Zietemann, Helmut Wasserbacher, Jessica Young, and Dorith Zimmermann.# Part I

## Causal inference without models![[_resources/causal inference what if_Part1/d35aac7305222f46d07f828a5bbcd53b_MD5.jpg]]Chapter 1

A DEFINITION OF CAUSAL EFFECT

As a human being, you are already familiar with causal inference's fundamental concepts. Through sheer existence, you know what a causal effect is, understand the difference between association and causation, and you have used this knowledge consistently throughout your life. Had you not, you'd be dead. Without basic causal concepts, you would not have survived long enough to read this chapter, let alone learn to read. As a toddler, you would have jumped right into the swimming pool after seeing those who did were later able to reach the jam jar. As a teenager, you would have skied down the most dangerous slopes after seeing those who did won the next ski race. As a parent, you would have refused to give antibiotics to your sick child after observing that those children who took their medicines were not at the park the next day.

Since you already understand the definition of causal effect and the difference between association and causation, do not expect to gain deep conceptual insights from this chapter. Rather, the purpose of this chapter is to introduce mathematical notation that formalizes the causal intuition that you already possess. Make sure that you can match your causal intuition with the mathematical notation introduced here. This notation is necessary to precisely define causal concepts, and will be used throughout the book.

1.1 Individual causal effects

Zeus is a patient waiting for a heart transplant. On January 1, he receives a new heart. Five days later, he dies. Imagine that we can somehow know— perhaps by divine revelation—that had Zeus not received a heart transplant on January 1, he would have been alive five days later. Equipped with this information most would agree that the transplant caused Zeus's death. The heart transplant intervention had a causal effect on Zeus's five-day survival.

Another patient, Hera, also received a heart transplant on January 1. Five days later she was alive. Imagine we can somehow know that, had Hera not received the heart on January 1, she would still have been alive five days later. Hence the transplant did not have a causal effect on Hera's five-day survival.

These two vignettes illustrate how humans reason about causal effects: We compare (usually only mentally) the outcome when an action *A* is taken versus the outcome when the action *A* is withheld. If the two outcomes differ, we say that the action *A* has a causal effect, causative or preventive, on the outcome. Otherwise, we say that the action *A* has no causal effect on the outcome. Epidemiologists, statisticians, economists, and other social scientists refer to the action *A* as an intervention, an exposure, a policy, or a treatment.

To make our causal intuition amenable to mathematical and statistical analysis we will introduce some notation. Consider a dichotomous treatment variable *A* (1: treated, 0: untreated) and a dichotomous outcome variable *Y* (1: death, 0: survival). In this book we refer to variables such as *A* and *Y* that may have different values for different individuals as *random variables*. Let *Y*<sup>*a*=1</sup> (read *Y* under treatment *a* = 1) be the outcome variable that would have been observed under the treatment value *a* = 1, and *Y*<sup>*a*=0</sup> (read *Y* under treatment *a* = 0) the outcome variable that would have been observed under

*Karma* is another commonly used
term for actions that result in out-
comes.

Capital letters represent random variables. Lower case letters denote particular values of a random variable.Sometimes we abbreviate the expression “individual *i* has outcome $Y^a = 1$” by writing $Y_i^a = 1$. Technically, when *i* refers to a specific individual, such as Zeus, $Y_i^a$ is not a random variable because we are assuming that individual counterfactual outcomes are deterministic (see Technical Point 1.2).

Causal effect for individual *i*:
$Y_i^{a=1} \neq Y_i^{a=0}$

Consistency:

if $A_i = a$, then $Y_i^a = Y_i^A = Y_i$

the treatment value $a = 0$. $Y^{a=1}$ and $Y^{a=0}$ are also random variables. Zeus has $Y^{a=1} = 1$ and $Y^{a=0} = 0$ because he died when treated but would have survived if untreated, while Hera has $Y^{a=1} = 0$ and $Y^{a=0} = 0$ because she survived when treated and would also have survived if untreated.

We can now provide a formal definition of a *causal effect for an individual*: The treatment *A* has a causal effect on an individual’s outcome *Y* if $Y^{a=1} \neq Y^{a=0}$ for the individual. Thus, the treatment has a causal effect on Zeus’s outcome because $Y^{a=1} = 1 \neq 0 = Y^{a=0}$, but not on Hera’s outcome because $Y^{a=1} = 0 = Y^{a=0}$. The variables $Y^{a=1}$ and $Y^{a=0}$ are referred to as *potential outcomes* or as *counterfactual outcomes*. Some authors prefer the term “potential outcomes” to emphasize that, depending on the treatment that is received, either of these two outcomes can be potentially observed. Other authors prefer the term “counterfactual outcomes” to emphasize that these outcomes represent situations that may not actually occur (that is, counter-to-the-fact situations).

For each individual, one of the counterfactual outcomes—the one that corresponds to the treatment value that the individual did receive—is actually factual. For example, because Zeus was actually treated ($A = 1$), his counterfactual outcome under treatment $Y^{a=1} = 1$ is equal to his observed (actual) outcome $Y = 1$. That is, an individual with observed treatment *A* equal to *a*, has observed outcome *Y* equal to his counterfactual outcome $Y^a$. This equality can be succinctly expressed as $Y = Y^A$ where $Y^A$ denotes the counterfactual $Y^a$ evaluated at the value *a* corresponding to the individual’s observed treatment *A*. The equality $Y = Y^A$ is referred to as *consistency*.

Individual causal effects are defined as a contrast of the values of counterfactual outcomes, but only one of those outcomes is observed for each individual—the one corresponding to the treatment value actually experienced by the individual. All other counterfactual outcomes remain unobserved. Because of missing data, individual effects cannot be identified, i.e., they cannot be expressed as a function of the observed data (See Fine Point 2.1 for a possible exception.)

## 1.2 Average causal effects

We needed three pieces of information to define an individual causal effect: an outcome of interest, the actions $a = 1$ and $a = 0$ to be compared, and the individual whose counterfactual outcomes $Y^{a=0}$ and $Y^{a=1}$ are to be compared. However, because identifying individual causal effects is generally not possible, we now turn our attention to an aggregated causal effect: the average causal effect in a population of individuals. To define it, we need three pieces of information: an outcome of interest, the actions $a = 1$ and $a = 0$ to be compared, and a well-defined population of individuals whose outcomes $Y^{a=0}$ and $Y^{a=1}$ are to be compared.

Take Zeus’s extended family as our population of interest. Table 1.1 shows the counterfactual outcomes under both treatment ($a = 1$) and no treatment ($a = 0$) for all 20 members of our population. Focus on the last column: the outcome $Y^{a=1}$ that would have been observed for each individual if they had received the treatment (a heart transplant). Half of the members of the population (10 out of 20) would have died if they had received a heart transplant. That is, the proportion of individuals that would have developed the outcome had all population individuals received $a = 1$ is $\text{Pr}[Y^{a=1} = 1] = 10/20 = 0.5$.Fine Point 1.1

**Interference.** Our definition of a counterfactual outcome implicitly assumes that an individual's counterfactual outcome under treatment value *a* does not depend on other individuals' treatment values. For example, we implicitly assumed that Zeus would die if he received a heart transplant, regardless of whether Hera also received a heart transplant. That is, Hera's treatment value did not interfere with Zeus's outcome. On the other hand, suppose that Hera's getting a new heart upsets Zeus to the extent that he would not survive his own heart transplant, even though he would have survived had Hera not been transplanted. In this scenario, Hera's treatment interferes with Zeus's outcome. Interference between individuals is common in studies that deal with contagious agents or educational programs, in which an individual's outcome is influenced by their social interaction with other population members.

In the presence of interference, the counterfactual $Y_i^{a}$ for an individual $i$ is not well defined because an individual's outcome depends on other individuals' treatment values. When there is interference, “the causal effect of heart transplant on Zeus's outcome” is not well defined. Rather, one needs to refer to “the causal effect of heart transplant on Zeus's outcome when Hera does not get a new heart” or “the causal effect of heart transplant on Zeus's outcome when Hera does get a new heart.” If other relatives and friends' treatment also interfere with Zeus's outcome, then one may need to refer to the causal effect of heart transplant on Zeus's outcome when “no relative or friend gets a new heart,” “when only Hera gets a new heart,” etc. because the causal effect of treatment on Zeus's outcome may differ for each particular allocation of hearts. The assumption of no interference was labeled “no interaction between units” by Cox (1958), and is included in the “stable-unit-treatment-value assumption (SUTVA)” described by Rubin (1980). See Halloran and Struchiner (1995), Sobel (2006), Rosenbaum (2007), and Hudgens and Halloran (2009) for a more detailed discussion of the role of interference in the definition of causal effects. Unless otherwise specified, we will assume no interference throughout this book.

Table 1.1

<table><thead><tr><th></th><th>Y<sup>a=0</sup></th><th>Y<sup>a=1</sup></th></tr></thead><tbody><tr><td>Rheia</td><td>0</td><td>1</td></tr><tr><td>Kronos</td><td>1</td><td>0</td></tr><tr><td>Demeter</td><td>0</td><td>0</td></tr><tr><td>Hades</td><td>0</td><td>0</td></tr><tr><td>Hestia</td><td>0</td><td>0</td></tr><tr><td>Poseidon</td><td>1</td><td>0</td></tr><tr><td>Hera</td><td>0</td><td>0</td></tr><tr><td>Zeus</td><td>0</td><td>1</td></tr><tr><td>Artemis</td><td>1</td><td>1</td></tr><tr><td>Apollo</td><td>1</td><td>0</td></tr><tr><td>Leto</td><td>0</td><td>1</td></tr><tr><td>Ares</td><td>1</td><td>1</td></tr><tr><td>Athena</td><td>1</td><td>1</td></tr><tr><td>Hephaestus</td><td>0</td><td>1</td></tr><tr><td>Aphrodite</td><td>0</td><td>1</td></tr><tr><td>Polyphemus</td><td>0</td><td>1</td></tr><tr><td>Persephone</td><td>1</td><td>1</td></tr><tr><td>Hermes</td><td>1</td><td>0</td></tr><tr><td>Hebe</td><td>1</td><td>0</td></tr><tr><td>Dionysus</td><td>1</td><td>0</td></tr></tbody></table>

Similarly, from the other column of Table 1.1, we can conclude that half of the members of the population (10 out of 20) would have died if they had not received a heart transplant. That is, the proportion of individuals that would have developed the outcome had all population individuals received $a = 0$ is $\Pr[Y^{a=0} = 1] = 10/20 = 0.5$. We have computed the counterfactual risk under treatment to be 0.5 by counting the number of deaths (10) and dividing them by the total number of individuals (20), which is the same as computing the average of the counterfactual outcomes across all individuals in the population. To see the equivalence between risk and average for a dichotomous outcome, use the data in Table 1.1 to compute the average of $Y^{a=1}$.

We are now ready to provide a formal definition of the *average causal effect* in the population: An average causal effect of treatment *A* on outcome *Y* is present if $\Pr[Y^{a=1} = 1] \neq \Pr[Y^{a=0} = 1]$ in the population of interest. Under this definition, treatment *A* does not have an average causal effect on outcome *Y* in our population because both the risk of death under treatment $\Pr[Y^{a=1} = 1]$ and the risk of death under no treatment $\Pr[Y^{a=0} = 1]$ are 0.5. It does not matter whether all or none of the individuals receive a heart transplant: Half of them would die in either case. When, like here, the average causal effect in the population is null, we say that the *null hypothesis of no average causal effect* is true. Because the risk equals the average and because the letter *E* is usually employed to represent the population average or mean (also referred to as ‘E’xpectation), we can rewrite the definition of a non-null average causal effect in the population as $\Pr[Y^{a=1}] \neq \Pr[Y^{a=0}]$ so that the definition applies to both dichotomous and nondichotomous outcomes.

The presence of an “average causal effect of heart transplant *A*” is defined by a contrast that involves the two actions “receiving a heart transplant ($a = 1$)” and “not receiving a heart transplant ($a = 0$).” When more than twoFine Point 1.2

**Multiple versions of treatment.** Our definition of a counterfactual outcome under treatment value $a$ also implicitly assumes that there is only one version of treatment value $A = a$. For example, we said that Zeus would die if he received a heart transplant. This statement implicitly assumes that all heart transplants are performed by the same surgeon using the same procedure and equipment. That is, there is only one version of the treatment “heart transplant.” If there were multiple versions of treatment (e.g., surgeons with different skills), then it is possible that Zeus would survive if his transplant were performed by Asclepios, and would die if his transplant were performed by Hygieia. In the presence of multiple versions of treatment, the counterfactual $Y_i^a$ for an individual $i$ is not well defined because an individual’s outcome depends on the version of treatment $a$. When there are multiple versions of treatment, “the causal effect of heart transplant on Zeus’s outcome” is not well defined. Rather, one needs to refer to “the causal effect of heart transplant on Zeus’s outcome when Asclepios performs the surgery” or “the causal effect of heart transplant on Zeus’s outcome when Hygieia performs the surgery.” If other components of treatment (e.g., procedure, place) are also relevant to the outcome, then one may need to refer to “the causal effect of heart transplant on Zeus’s outcome when Asclepios performs the surgery using his rod at the temple of Kos” because the causal effect of treatment on Zeus’s outcome may differ for each particular version of treatment.

Like the assumption of no interference (see Fine Point 1.1), the assumption of no multiple versions of treatment is included in the SUTVA described by Rubin (1980). Robins and Greenland (2000) made the point that if the versions of a particular treatment (e.g., heart transplant) had the same causal effect on the outcome (survival), then the counterfactual $Y^{a=1}$ would be well-defined. VanderWeele (2009a) formalized this point as the assumption of “treatment variation irrelevance,” i.e., the assumption that multiple versions of treatment $A = a$ may exist but they all result in the same outcome $Y_i^a$. We return to this issue in Chapter 3 but, unless otherwise specified, we will assume treatment variation irrelevance throughout this book.

Average causal effect in population:
$E[Y^{a=1}] \neq E[Y^{a=0}]$

actions are possible (i.e., the treatment is not dichotomous), the particular contrast of interest needs to be specified. For example, “the causal effect of aspirin” is meaningless unless we specify that the contrast of interest is, say, “taking, while alive, 150 mg of aspirin by mouth (or nasogastric tube if need be) daily for 5 years” versus “not taking aspirin.” This causal effect is well defined even if counterfactual outcomes under other interventions are not well defined or do not exist (e.g., “taking, while alive, 500 mg of aspirin by absorption through the skin daily for 5 years”).

Absence of an average causal effect does not imply absence of individual effects. Table 1.1 shows that treatment has an individual causal effect on 12 members (including Zeus) of the population because, for each of these 12 individuals, the value of their counterfactual outcomes $Y^{a=1}$ and $Y^{a=0}$ differ. Of the 12, 6 were harmed by treatment, including Zeus ($Y^{a=1} - Y^{a=0} = 1$), and 6 were helped ($Y^{a=1} - Y^{a=0} = -1$). This equality is not an accident: The average causal effect $E[Y^{a=1}] - E[Y^{a=0}]$ is always equal to the average $E[Y^{a=1} - Y^{a=0}]$ of the individual causal effects $Y^{a=1} - Y^{a=0}$, as a difference of averages is equal to the average of the differences. When there is no causal effect for any individual in the population, i.e., $Y^{a=1} = Y^{a=0}$ for all individuals, we say that the *sharp causal null hypothesis* is true. The sharp causal null hypothesis implies the null hypothesis of no average effect.

As discussed in the next chapters, average causal effects can sometimes be identified from data, even if individual causal effects cannot. Hereafter we refer to ‘average causal effects’ simply as ‘causal effects’ and the null hypothesis of no average effect as the causal null hypothesis. We next describe different measures of the magnitude of a causal effect.Technical Point 1.1

**Causal effects in the population.** Let $E[Y^a]$ be the mean counterfactual outcome had all individuals in the population received treatment level $a$. For discrete outcomes, the mean or expected value $E[Y^a]$ is defined as the weighted sum $\sum_y y p_{Y^a}(y)$ over all possible values $y$ of the random variable $Y^a$, where $p_{Y^a}(\cdot)$ is the probability mass function of $Y^a$, i.e., $p_{Y^a}(y) = \text{Pr}[Y^a = y]$. For dichotomous outcomes, $E[Y^a] = \text{Pr}[Y^a = 1]$. For continuous outcomes, the expected value $E[Y^a]$ is defined as the integral $\int y f_{Y^a}(y) dy$ over all possible values $y$ of the random variable $Y^a$, where $f_{Y^a}(\cdot)$ is the probability density function of $Y^a$. A common representation of the expected value that applies to both discrete and continuous outcomes is $E[Y^a] = \int y dF_{Y^a}(y)$, where $F_{Y^a}(\cdot)$ is the cumulative distribution function (cdf) of the random variable $Y^a$. We say that there is a non-null average causal effect in the population if $E[Y^a] \neq E[Y^{a'}]$ for any two values $a$ and $a'$.

The average causal effect, defined by a contrast of means of counterfactual outcomes, is the most commonly used population causal effect. However, a population causal effect may also be defined as a contrast of functionals (including the median, variance, hazard, or cdf) of counterfactual outcomes. In general, a population causal effect can be defined as a contrast of any functional of the marginal distributions of counterfactual outcomes under different actions or treatment values. For example the population causal effect on the variance is defined as $\text{Var}(Y^{a=1}) - \text{Var}(Y^{a=0})$, which is zero for the population in Table 1.1 since the distribution of $Y^{a=1}$ and $Y^{a=0}$ are identical—both having 10 deaths out of 20. In fact, the equality of these distributions imply that for any functional (e.g., mean, variance, median, hazard, etc.), the population causal effect on the functional is zero. However, in contrast to the mean, the difference in population variances $\text{Var}(Y^{a=1}) - \text{Var}(Y^{a=0})$ does not in general equal the variance of the individual causal effects $\text{Var}(Y^{a=1} - Y^{a=0})$. For example, in Table 1.1, since $Y^{a=1} - Y^{a=0}$ is not constant ($-1$ for 6 individuals, $1$ for 6 individuals and $0$ for 8 individuals), $\text{Var}(Y^{a=1} - Y^{a=0}) > 0 = \text{Var}(Y^{a=1}) - \text{Var}(Y^{a=0})$. We will be able to identify (i.e., compute) $\text{Var}(Y^{a=1}) - \text{Var}(Y^{a=0})$ from the data collected in a randomized trial, but not $\text{Var}(Y^{a=1} - Y^{a=0})$ because we can never simultaneously observe both $Y^{a=1}$ and $Y^{a=0}$ for any individual, and thus the covariance of $Y^{a=1}$ and $Y^{a=0}$ is not identified. The above discussion is true not only for the variance but for any nonlinear functional (e.g., median, hazard).

1.3 Measures of causal effect

We have seen that the treatment ‘heart transplant’ $A$ does not have a causal effect on the outcome ‘death’ $Y$ in our population of 20 family members of Zeus. The causal null hypothesis holds because the two counterfactual risks $\text{Pr}[Y^{a=1} = 1]$ and $\text{Pr}[Y^{a=0} = 1]$ are equal to 0.5. There are equivalent ways of representing the causal null. For example, we could say that the risk $\text{Pr}[Y^{a=1} = 1]$ minus the risk $\text{Pr}[Y^{a=0} = 1]$ is zero ($0.5 - 0.5 = 0$) or that the risk $\text{Pr}[Y^{a=1} = 1]$ divided by the risk $\text{Pr}[Y^{a=0} = 1]$ is one ($0.5/0.5 = 1$). That is, we can represent the causal null by

$$
(i) \quad \Pr[Y^{a=1} = 1] - \Pr[Y^{a=0} = 1] = 0
$$

$$
(ii) \quad \frac{\Pr[Y^{a=1} = 1]}{\Pr[Y^{a=0} = 1]} = 1
$$

$$
(iii) \quad \frac{\Pr[Y^{a=1} = 1] / \Pr[Y^{a=1} = 0]}{\Pr[Y^{a=0} = 1] / \Pr[Y^{a=0} = 0]} = 1
$$

where the left-hand side of the equalities (i), (ii), and (iii) is the causal risk difference, risk ratio, and odds ratio, respectively.

Suppose now that another treatment $A$, cigarette smoking, has a causal
effect on another outcome $Y$, lung cancer, in our population. The causal null
hypothesis does not hold: $\text{Pr}[Y^{a=1} = 1]$ and $\text{Pr}[Y^{a=0} = 1]$ are not equal. In

The causal risk difference in the
population is the average of the in-
dividual causal effects Y^{a=1} - Y^{a=0}
on the difference scale, i.e., it is
a measure of the average individ-
ual causal effect. By contrast, the
causal risk ratio in the population
is not the average of the individual
causal effects Y^{a=1}/Y^{a=0} on the
ratio scale, i.e., it is a measure of
causal effect in the population but
is not the average of any individual
causal effects.Fine Point 1.3

**Number needed to treat.** Consider a population of 100 million patients in which 20 million would die within five years if treated ($a = 1$), and 30 million would die within five years if untreated ($a = 0$). This information can be summarized in several equivalent ways:

* the causal risk difference is $\Pr[Y^{a=1} = 1] - \Pr[Y^{a=0} = 1] = 0.2 - 0.3 = -0.1$
* if one treats the 100 million patients, there will be 10 million fewer deaths than if one does not treat those 100 million patients.
* one needs to treat 100 million patients to save 10 million lives
* on average, one needs to treat 10 patients to save 1 life

We refer to the average number of individuals that need to receive treatment $a = 1$ to reduce the number of cases $Y = 1$ by one as the number needed to treat (NNT). In our example the NNT is equal to 10. For treatments that reduce the average number of cases (i.e., the causal risk difference is negative), the NNT is equal to the reciprocal of the absolute value of the causal risk difference:

$$
NNT = \frac{-1}{\Pr[Y^{a=1} = 1] - \Pr[Y^{a=0} = 1]}
$$

For treatments that increase the average number of cases (i.e., the causal risk difference is positive), one can symmetrically define the *number needed to harm*. The NNT was introduced by Laupacis, Sackett, and Roberts (1988). Like the causal risk difference, the NNT applies to the population and time interval on which it is based. For a discussion of the relative advantages and disadvantages of the NNT as an effect measure, see Grieve (2003).

this setting, the causal risk difference, risk ratio, and odds ratio are not 0, 1, and 1, respectively. Rather, these causal parameters quantify the strength of the same causal effect on different scales. Because the causal risk difference, risk ratio, and odds ratio (and other summaries) measure the causal effect, we refer to them as *effect measures*.

Each effect measure may be used for different purposes. For example, imagine a large population in which 3 in a million individuals would develop the outcome if treated, and 1 in a million individuals would develop the outcome if untreated. The causal risk ratio is 3, and the causal risk difference is 0.000002. The causal risk ratio (multiplicative scale) is used to compute how many times treatment, relative to no treatment, increases the disease risk. The causal risk difference (additive scale) is used to compute the absolute number of cases of the disease attributable to the treatment. The use of either the multiplicative or additive scale will depend on the goal of the inference.

1.4 Random variability

At this point you could complain that our procedure to compute effect measures is somewhat implausible. Not only did we ignore the well known fact that the immortal Zeus cannot die, but—more to the point—our population in Table 1.1 had only 20 individuals. The populations of interest are typically much larger.1st source of random error:
Sampling variability

An estimator $\hat{\theta}$ of $\theta$ is consistent if, with probability approaching 1, the difference $\hat{\theta} - \theta$ approaches zero as the sample size increases towards infinity.

Caution: the term 'consistency' when applied to estimators has a different meaning from that which it has when applied to counterfactual outcomes.

2nd source of random error:
Nondeterministic counterfactuals

In our tiny population, we collected information from all the individuals. In practice, investigators only collect information on a sample of the population of interest. Even if the counterfactual outcomes of all study individuals were known, working with samples prevents one from obtaining the exact proportion of individuals in the population who had the outcome under treatment value $a$, i.e., the probability of death under no treatment $\Pr[Y^{a=0} = 1]$ cannot be directly computed. One can only estimate this probability.

Consider the individuals in Table 1.1. We have previously viewed them as forming a twenty-person population. Suppose we view them as a random sample from a much larger, near-infinite super-population (e.g., all immortals). We denote the proportion of individuals in the sample who would have died if unexposed as $\widehat{\Pr}[Y^{a=0} = 1] = 10/20 = 0.50$. The sample proportion $\widehat{\Pr}[Y^{a=0} = 1]$ does not have to be exactly equal to the proportion of individuals who would have died if the entire super-population had been unexposed, $\Pr[Y^{a=0} = 1]$. For example, suppose $\Pr[Y^{a=0} = 1] = 0.57$ in the population but, because of random error due to sampling variability, $\widehat{\Pr}[Y^{a=0} = 1] = 0.5$ in our particular sample. We use the sample proportion $\widehat{\Pr}[Y^a = 1]$ to estimate the super-population probability $\Pr[Y^a = 1]$ under treatment value $a$. The “hat” over $\Pr$ indicates that the sample proportion $\widehat{\Pr}[Y^a = 1]$ is an estimator of the corresponding population quantity $\Pr[Y^a = 1]$. We say that $\widehat{\Pr}[Y^a = 1]$ is a *consistent estimator* of $\Pr[Y^a = 1]$ because the larger the number of individuals in the sample, the smaller the difference between $\widehat{\Pr}[Y^a = 1]$ and $\Pr[Y^a = 1]$ is expected to be. This occurs because the error due to sampling variability is random and thus obeys the law of large numbers.

Because the super-population probabilities $\Pr[Y^a = 1]$ cannot be computed, only consistently estimated by the sample proportions $\widehat{\Pr}[Y^a = 1]$, one cannot conclude with certainty that there is, or there is not, a causal effect. Rather, a statistical procedure must be used to evaluate the empirical evidence regarding the causal null hypothesis $\Pr[Y^{a=1} = 1] = \Pr[Y^{a=0} = 1]$ (see Chapter 10 for details).

So far we have only considered sampling variability as a source of random error. But there may be another source of random variability: perhaps the values of an individual's counterfactual outcomes are not fixed in advance. We have defined the counterfactual outcome $Y^a$ as the individual's outcome had he received treatment value $a$. For example, in our first vignette, Zeus would have died if treated and would have survived if untreated. As defined, the values of the counterfactual outcomes are fixed or deterministic for each individual, i.e., $Y^{a=1} = 1$ and $Y^{a=0} = 0$ for Zeus. In other words, Zeus has a 100% chance of dying if treated and a 0% chance of dying if untreated. However, we could imagine another scenario in which Zeus has a 90% chance of dying if treated, and a 10% chance of dying if untreated. In this scenario, the counterfactual outcomes are stochastic or nondeterministic because Zeus's probabilities of dying under treatment (0.9) and under no treatment (0.1) are neither zero nor one. The values of $Y^{a=1}$ and $Y^{a=0}$ shown in Table 1.1 would be possible realizations of “random flips of mortality coins” with these probabilities. Further, one would expect that these probabilities vary across individuals because not all individuals are equally susceptible to develop the outcome. Quantum mechanics, in contrast to classical mechanics, holds that outcomes are inherently nondeterministic. That is, if the quantum mechanical probability of Zeus dying is 90%, the theory holds that no matter how much data we collect about Zeus, the uncertainty about whether Zeus will actually develop the outcome if treated is irreducible.Technical Point 1.2

**Nondeterministic counterfactuals.** For nondeterministic counterfactual outcomes, the mean outcome under treatment value $a$, $E[Y^a]$, equals the weighted sum $\sum_y y p_{Y^a}(y)$ over all possible values $y$ of the random variable $Y^a$, where the probability mass function $p_{Y^a}(\cdot) = E[Y^a(\cdot)]$, and $Q_{Y^a}(y)$ is a random probability of having outcome $Y = y$ under treatment level $a$. In the example described in the text, $Q_{Y^{a=1}}(1) = 0.9$ for Zeus. (For continuous outcomes, the weighted sum is replaced by an integral.)

More generally, a nondeterministic definition of counterfactual outcome does not attach some particular value of the random variable $Y^a$ to each individual, but rather an individual-specific statistical distribution $\Theta_{Y^a}(\cdot)$ of $Y^a$. The nondeterministic definition of causal effect is a generalization of the deterministic definition in which $\Theta_{Y^a}(\cdot)$ is now a random cdf that may take values between 0 and 1. The average counterfactual outcome in the population $E[Y^a]$ equals $E\{E[Y^a | \Theta_{Y^a}(\cdot)]\}$. Therefore, $E[Y^a] = E[\int y d\Theta_{Y^a}(y)] = \int y dE[\Theta_{Y^a}(y)] = \int y dF_{Y^a}(y)$, where $F_{Y^a}(\cdot) = E[\Theta_{Y^a}(\cdot)]$.

If the counterfactual outcomes are binary and nondeterministic, the causal risk ratio in the population $\frac{E[Q_{Y^{a=1}}(1)]}{E[Q_{Y^{a=0}}(1)]}$ is equal to the weighted average $E[W\{Q_{Y^{a=1}}(1)/Q_{Y^{a=0}}(1)\}]$ of the individual causal effects $Q_{Y^{a=1}}(1)/Q_{Y^{a=0}}(1)$ on the ratio scale, with weights $W = \frac{Q_{Y^{a=0}}(1)}{E[Q_{Y^{a=0}}(1)]}$, provided $Q_{Y^{a=0}}(1)$ is never equal to 0 (i.e., deterministic) for anyone in the population.

Thus, in causal inference, random error derives from sampling variability, nondeterministic counterfactuals, or both. However, for pedagogic reasons, we will continue to largely ignore random error until Chapter 10. Specifically, we will assume that counterfactual outcomes are deterministic and that we have recorded data on every individual in a very large (perhaps hypothetical) super-population. This is equivalent to viewing our population of 20 individuals as a population of 20 billion individuals in which 1 billion individuals are identical to Zeus, 1 billion individuals are identical to Hera, and so on. Hence, until Chapter 10, we will carry out our computations with Olympian certainty.

Then, in Chapter 10, we will describe how our statistical estimates and confidence intervals for causal effects in the super-population are identical irrespective of whether the world is stochastic (quantum) or deterministic (classical) at the level of individuals. In contrast, confidence intervals for the average causal effect in the actual study sample will differ depending on whether counterfactuals are deterministic versus stochastic. Fortunately, super-population effects are in most cases the causal effects of substantive interest.

1.5 Causation versus association

Obviously, the data available from actual studies look different from those shown in Table 1.1. For example, we would not usually expect to learn Zeus's outcome if treated $Y^{a=1}$ and also Zeus's outcome if untreated $Y^{a=0}$. In the real world, we only get to observe one of those outcomes because Zeus is either treated or untreated. We referred to the observed outcome as $Y$. Thus, for each individual, we know the observed treatment level $A$ and the outcome $Y$ as in Table 1.2.

The data in Table 1.2 can be used to compute the proportion of individuals that developed the outcome $Y$ among those individuals in the populationDawid (1979) introduced the symbol $\perp$ to denote independence.

Table 1.2

<table><thead><tr><th></th><th>A</th><th>Y</th></tr></thead><tbody><tr><td>Rheia</td><td>0</td><td>0</td></tr><tr><td>Kronos</td><td>0</td><td>1</td></tr><tr><td>Demeter</td><td>0</td><td>0</td></tr><tr><td>Hades</td><td>0</td><td>0</td></tr><tr><td>Hestia</td><td>1</td><td>0</td></tr><tr><td>Poseidon</td><td>1</td><td>0</td></tr><tr><td>Hera</td><td>1</td><td>0</td></tr><tr><td>Zeus</td><td>1</td><td>1</td></tr><tr><td>Artemis</td><td>0</td><td>1</td></tr><tr><td>Apollo</td><td>0</td><td>1</td></tr><tr><td>Leto</td><td>0</td><td>0</td></tr><tr><td>Ares</td><td>1</td><td>1</td></tr><tr><td>Athena</td><td>1</td><td>1</td></tr><tr><td>Hephaestus</td><td>1</td><td>1</td></tr><tr><td>Aphrodite</td><td>1</td><td>1</td></tr><tr><td>Polyphemus</td><td>1</td><td>1</td></tr><tr><td>Persephone</td><td>1</td><td>1</td></tr><tr><td>Hermes</td><td>1</td><td>0</td></tr><tr><td>Hebe</td><td>1</td><td>0</td></tr><tr><td>Dionysus</td><td>1</td><td>0</td></tr></tbody></table>

For a continuous outcome $Y$ we define *mean independence* between treatment and outcome as: $E[Y|A = 1] = E[Y|A = 0]$. Independence and mean independence are the same concept for dichotomous outcomes.

that happened to receive treatment value $a$. For example, in Table 1.2, 7 individuals died ($Y = 1$) among the 13 individuals that were treated ($A = 1$). Thus the risk of death in the treated, $Pr[Y = 1|A = 1]$, was 7/13. More generally, the conditional probability $Pr[Y = 1|A = a]$ is defined as the proportion of individuals that developed the outcome $Y$ among those individuals in the population of interest that happened to receive treatment value $a$.

When the proportion of individuals who develop the outcome in the treated $Pr[Y = 1|A = 1]$ equals the proportion of individuals who develop the outcome in the untreated $Pr[Y = 1|A = 0]$, we say that treatment $A$ and outcome $Y$ are independent, that $A$ is not associated with $Y$, or that $A$ does not predict $Y$. *Independence* is represented by $Y \perp A$—or, equivalently, $A \perp Y$— which is read as $Y$ and $A$ are independent. Some equivalent definitions of independence are

$$
(i) \quad \Pr[Y = 1|A = 1] - \Pr[Y = 1|A = 0] = 0
$$

$$
(ii) \quad \frac{\Pr[Y = 1|A = 1]}{\Pr[Y = 1|A = 0]} = 1
$$

$$
(iii) \quad \frac{\Pr[Y = 1|A = 1] / \Pr[Y = 0|A = 1]}{\Pr[Y = 1|A = 0] / \Pr[Y = 0|A = 0]} = 1
$$

where the left-hand side of the inequalities (i), (ii), and (iii) is the associational risk difference, risk ratio, and odds ratio, respectively.

We say that treatment $A$ and outcome $Y$ are dependent or associated when $Pr[Y = 1|A = 1] \neq Pr[Y = 1|A = 0]$. In our population, treatment and outcome are associated because $Pr[Y = 1|A = 1] = 7/13$ and $Pr[Y = 1|A = 0] = 3/7$. The associational risk difference, risk ratio, and odds ratio (and other measures) quantify the strength of the association when it exists. They measure the association on different scales, and we refer to them as *association measures*. These measures are also affected by random variability. However, until Chapter 10, we will disregard statistical issues by assuming that the population in Table 1.2 is extremely large.

For dichotomous outcomes, the risk equals the average in the population, and we can therefore rewrite the definition of association in the population as $E[Y|A = 1] \neq E[Y|A = 0]$. For continuous outcomes $Y$, we will also define association as $E[Y|A = 1] \neq E[Y|A = 0]$. For binary $A$, $Y$ and $A$ are not associated if and only if they are not statistically correlated.

In our population of 20 individuals, we found (i) no causal effect after comparing the risk of death if all 20 individuals had been treated with the risk of death if all 20 individuals had been untreated, and (ii) an association after comparing the risk of death in the 13 individuals who happened to be treated with the risk of death in the 7 individuals who happened to be untreated. Figure 1.1 depicts the causation-association difference. The population (represented by a diamond) is divided into a white area (the treated) and a smaller grey area (the untreated).![[_resources/causal inference what if_Part1/316ad5bb6e0424494d504c6dc61652a8_MD5.jpg]]

Figure 1.1

The definition of causation implies a contrast between the whole white diamond (all individuals treated) and the whole grey diamond (all individuals untreated), whereas association implies a contrast between the white (the treated) and the grey (the untreated) areas of the original diamond. That is, inferences about causation are concerned with *what if* questions in counterfactual worlds, such as “what would be the risk if everybody had been treated?” and “what would be the risk if everybody had been untreated?”, whereas inferences about association are concerned with questions in the actual world, such as “what is the risk in the treated?” and “what is the risk in the untreated?”

We can use the notation we have developed thus far to formalize this distinction between causation and association. The risk $Pr[Y = 1|A = a]$ is a conditional probability: the risk of $Y$ in the subset of the population that meet the condition ‘having actually received treatment value $a$’ (i.e., $A = a$). In contrast the risk $Pr[Y^a = 1]$ is an unconditional—also known as marginal—probability, the risk of $Y^a$ in the entire population. Therefore, *association* is defined by a different risk in two disjoint subsets of the population determined by the individuals’ actual treatment value ($A = 1$ or $A = 0$), whereas *causation* is defined by a different risk in the same population under two different treatment values ($a = 1$ or $a = 0$). Throughout this book we often use the redundant expression ‘causal effect’ to avoid confusions with a common use of ‘effect’ meaning simply association.

These radically different definitions explain the well-known adage “association is not causation.” In our population, there was association because the mortality risk in the treated (7/13) was greater than that in the untreated (3/7). However, there was no causation because the risk if everybody had been treated (10/20) was the same as the risk if everybody had been untreated. This discrepancy between causation and association would not be surprising if those who received heart transplants were, on average, sicker than those who did not receive a transplant. In Chapter 7 we refer to this discrepancy as *confounding*.

Causal inference requires data like the hypothetical data in Table 1.1, but all we can ever expect to have is real world data like those in Table 1.2. The question is then under which conditions real world data can be used for causal inference. The next chapter provides one answer: conduct a randomized experiment.

The difference between association and causation is critical. Suppose the causal risk ratio of 5-year mortality is 0.5 for aspirin vs. no aspirin, and the corresponding associational risk ratio is 1.5 because individuals at high risk of cardiovascular death are preferentially prescribed aspirin. After a physician learns these results, she decides to withhold aspirin from her patients because those treated with aspirin have a greater risk of dying compared with the untreated. The doctor will be sued for malpractice.