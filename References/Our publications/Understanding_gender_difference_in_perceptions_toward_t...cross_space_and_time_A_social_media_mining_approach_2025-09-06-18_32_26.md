

# Understanding gender difference in perceptions toward transit services across space and time: A social media mining approach

Shuli Luo, Sylvia Y. He ${}^{ * }$

Department of Geography and Resource Management, The Chinese University of Hong Kong, Shatin, N.T., Hong Kong

## ARTICLEINFO

Keywords:

Gender

Social media

Transit service

Perception

Inclusive urban planning

Data mining

## A B S T R A C T

Location-based social media data can offer useful insights on the spatial and temporal dynamics of public attitudes. In this study, we aim to investigate the gendered attitudes toward transit services in China, utilizing the case of Shenzhen. We collected 44,257 Weibo microblogs, a major source of social media data in China, and applied a series of text mining and visualization techniques to examine the gender differences among our focused themes. The microblogs reveal a distinct gender gap in terms of quantity, as nearly 74% are posted by women. While women tend to be more concerned about the comfort of transit environment (e.g., temperature, crowdedness, and safety, especially at night), men tend to be more interested in transit systems' e-payment services and reporting traffic incidents. Overall, this study presents a methodological framework and empirical case study about how we can utilize certain social media mining techniques to investigate gendered, subjective travel experiences, providing researchers and practitioners with an innovative way to gather customer service feedback and build more inclusive service systems.

## 1. Introduction

Achieving equitable transport systems and providing inclusive transport services are increasingly becoming important goals in governmental agendas. Transport policy makers are facing growing demand to understand divergent customers' travel needs and perceptions among different social groups, particularly those of women. Although women's disadvantaged role (in terms of household relations, travel duties, and travel behavior) is well documented in the transport field (Akyelken 2020; Cresswell and Uteng 2008; Hanson 2010; Lou-kaitou-Sideris 2016; Rosenbloom and Plessis-Fraissard 2009), limited research has comprehensively analyzed the gender differences in attitudes toward the transit system. For instance, when compared to men, women are shown to be more sensitive to safety issues (Loukaitou-Si-deris et al., 2009; Wasfi and Levinson, 2006; Roche-Cerasi et al., 2013), comfort levels (Soza-Parra et al., 2019), and travel stress (Beirão and Cabral 2008), while tending to overestimate their perceived wait time and in-vehicle time (Fan et al., 2016; Meng et al., 2018).

Traditionally, a user's subjective evaluation of transit services primarily relies on customer survey data (e.g., Dell'Olio et al. 2010; Mar-cucci and Gatta 2007; Tyrinopoulos and Antoniou 2008; He and Thøgersen 2017; Tao et al., 2019). People are asked to rate the importance of or their satisfaction levels with certain service attributes. Then, a multivariate data analysis is applied to reveal ways that the most important service attributes affect people's satisfaction with the service quality of a certain transport mode. However, these surveys and research approaches are usually costly, time-consuming, and involve answering some retrospective questions that may introduce additional biases due to memory loss (Gal-Tzur et al., 2014; Grant-Muller et al., 2014).

Big data, which has an exceptional advantage due to its volume and variety, can be one of the solutions to the aforementioned drawbacks of traditional survey data. In particular, social media data from social networking sites (e.g., Facebook, Twitter, Instagram, and Weibo) allows users to interact and share their opinions and experiences spontaneously. This massive pooling of data, which is enriched with spatial, temporal, and textual information, could have significant potential to reflect the reality of human mobility and improve understanding about our socioeconomic environment (e.g., Goodchild 2007; Liu et al., 2015; Wu et al., 2016). Thus, social media data is considered as a viable resource for obtaining public opinion in various types of research, from analyzing political orientation and online news to product reviews. In the field of transport research, recent work has mainly focused on mining social media data to monitor travelers' response to transport incidents (e.g., Klingen 2019; Sarker et al., 2019) or identify mobility patterns (e.g., Hawelka et al., 2014; Li et al., 2013; Liu et al., 2021). Arguably, user generated content's greater value lies in understanding travelers' attitudes of transit service performance, which could benefit stakeholders by improving their understanding of travelers' needs in a timely, efficient, and inexpensive way.

---

* Corresponding author.

E-mail address: sylviahe@cuhk.edu.hk (S.Y. He).

---

Thus far, only a few studies apply social media data to transit service measurements (e.g., Collins et al., 2013; Schweitzer 2014; Shin 2019; Luo and He 2021). For instance, using Twitter feeds, Collins et al. (2013) analyze real-time transit rider satisfaction in Chicago concerning performance factors, like punctuality, cleanliness, and safety. An overwhelmingly negative sentiment was found associated with services involving security, safety, and delays. Similarly, Schweitzer (2014) utilizes Twitter feeds to uncover a dominant negative sentiment about the public transit services in the US. Recently, Shin (2019) extracted online reviews of the Los Angeles Metro Rail stations from Yelp to analyze users' evaluations, and found that contrary to previous research, the reviews held more compliments than complaints. Shin explains that the main reasons for this may be due to the difference in users' perceptions and the socioeconomic status between rail and bus transit users. Luo and He (2021) investigated users' perception of transit services by analyzing the spatial and temporal dynamics in the Chinese context by mining Sina Weibo data. They suggest that using social media data may be effective for monitoring and managing transit systems in both the short and long term. However, to the best of the authors' knowledge, a comprehensive investigation of gendered difference in terms of attitudes toward the transit service attributes via social media mining is still lacking in the literature.

Analyzing the gender differences in daily mobility can be regarded as a societal "barometer" to gauge the level of equality between men and women (Hjorthol 2008). By utilizing a gender-based perspective, this study aims to provide a pathway toward a more gender-friendly transport system in China's cities. In this paper, we will investigate gender differences in public attitudes toward the transit service (i.e., bus and metro) in Shenzhen, China by utilizing social media data. Drawing upon a comprehensive dataset of Weibo microblogs over six months and its corresponding user dataset, we applied several text mining approaches to extract potential service topics that concern travelers and discuss the gender differences among the identified topics. Furthermore, we discuss whether females or males are more sensitive to particular identified service attributes in relation to their spatial and temporal patterns. Based on our findings, we provide suggestions to policymakers and stakeholders to create improved transport demand management and inclusive urban planning.

## 2. Methodology and study context

### 2.1. Data collection and processing

This study collects a comprehensive Weibo dataset comprising microblogs and users' demographics. Weibo microblogs are retrieved with the assistance of Weibo's "advanced search" function, which allows users to specify keywords when searching in a particular city and period. In addition, this function enables users to choose the "original" micro-blogs so that reposted microblogs, as well as a large proportion of authority and media accounts, can be excluded. Then, bloggers' demographic information including gender and age can be further extracted by utilizing the user's homepage link that is embedded in each microblog. The data from Weibo is publicly accessible: by Web scraping, users can fetch the website pages and extract content. We wrote and implemented a Python scraping script that involves processes such as HTTP programming, HTML parsing, text pattern matching, and DOM parsing.

Then, data cleaning is conducted to filter out irrelevant microblogs by following four steps: (1) deleting duplicated messages; (2) filtering out unrelated web links, hashtags, symbols, and pictures; (3) converting traditional Chinese into simplified Chinese; and (4) removing micro-blogs posted by official or marketing accounts. Specifically, official and marketing accounts are identified in three ways: (1) the most active accounts that post daily blogs; (2) keyword searches such as "rent," "sublease," etc.; and (3) constructing a marketing account dataset by randomly selecting 2000 microblogs, and then, manually labeling the marketing accounts. Those irrelevant microblogs posted by official and marketing accounts are then filtered out after the data cleaning procedure.

Finally, text segmentation is conducted to cut each microblog in the Weibo dataset into text features (i.e., a "bag-of-words"). Chinese character segmentation could be achieved by applying Jieba (https://github.com/fxsjy/jieba), a common Chinese segmentation module embedded in the R software environment. Additionally, Jieba allows users to add a customized dictionary in order to improve the performance of segmentation.

### 2.2. Microblog categorization

The raw microblog dataset covers a variety of topics, but only a small proportion of the microblogs that are related to the discussion of transit services is needed. For instance, some microblogs discuss what travelers encounter in trips (e.g., a passenger's conversation, dress, and behavior on the metro or bus), which are largely irrelevant when generalizing patterns from unstructured text information. Therefore, it is necessary to extract service-related microblogs before further analysis.

Following a previous study (Luo and He 2021), we introduced a two-step, semi-automatic content analysis based on the text features segmented. This study extracted and retained the microblogs related to public transport services, specifically. The first stage consisted of a basic keyword-frequency analysis to detect our dataset's most common words. In the Appendix, Figure A1 shows an example of extracting keywords and counting their frequency from a single message. Before coding, a transit domain-specific lexicon was constructed based on review works and anecdotal studies (Van Lierop et al., 2018; Das and Pandit 2013; Casas and Delmelle 2017). From this lexicon, two coders were trained to categorize the entire keyword-frequency corpus into certain transit service attributes. Meanwhile, the lexicon was updated by adding or removing new service attributes that were found in the Weibo dataset (i.e., those not frequently mentioned in the literature but found at a high frequency in our dataset). Thus, the coding process was iterative and cyclical, allowing a microblog to belong to more than one category. Table 1 shows the service terms in our lexicon and includes corresponding explanations.

### 2.3. Latent Dirichlet Allocation (LDA)

LDA is a common topic modeling technique that is used to extract latent "topics" from a collection of documents without knowing them beforehand, which helps reduce the semantic dimensions of noisy, raw text and is especially useful for summarizing topics from large datasets. The distributional hypothesis from the linguistic field explains the underlying mechanism, which is that words with similar meanings tend to occur in similar contexts (Harris 1954). Therefore, top words that frequently co-occur may indicate a higher likelihood of representing the same topic. Some empirical studies apply this method to identify traffic events (e.g., Pan, 2011) and cluster topics from Twitter (e.g., Hong and Davidson 2010; Lansley and Longley 2016). A basic assumption of LDA is that documents are exhibited as random mixtures of hidden topics, where each subject is characterized by a probability distribution over a number of words (Blei et al., 2003).

LDA (Fig. 1) models the generation of topics from each document $\mathbf{w}$ within a corpus, following a generative process:

(1) With the pre-defined dimensionality of topics $\mathrm{K}$ fixed,for every topic $\mathrm{k} = \{ 1,\ldots ,\mathrm{K}\}$ ,and $\varnothing$ is generated from a Dirichlet prior $\beta$ .

Table 1

Service quality attributes extracted from Weibo data.

<table><tr><td>Category</td><td>Subcategory</td><td>Explanation</td></tr><tr><td rowspan="4">Reliability</td><td>Punctuality</td><td>Punctuality of metro</td></tr><tr><td>Transfer</td><td>Transfer services</td></tr><tr><td>Service hour provision</td><td>First and last train</td></tr><tr><td>Frequency</td><td>Metro headway</td></tr><tr><td>Crowdedness</td><td/><td>Crowdedness</td></tr><tr><td>Personnel</td><td/><td>Personnel behavior</td></tr><tr><td rowspan="2">Comfort</td><td>Cleanliness</td><td>Cleanliness during a trip</td></tr><tr><td>Temperature</td><td>Hot, cold, and air conditioning</td></tr><tr><td rowspan="2">Safety and security</td><td>Safety</td><td>Concerns with safety, crime, and theft</td></tr><tr><td>Security check</td><td>Security check before swiping into metro gate</td></tr><tr><td>Waiting conditions</td><td/><td>Queues and queue jumping</td></tr><tr><td rowspan="3">Supporting facilities</td><td>Toilet</td><td>Toilets in the metro station</td></tr><tr><td>Ticket service</td><td>Vending machines and e-payment technology</td></tr><tr><td>Elevator</td><td>Elevators and escalators</td></tr><tr><td rowspan="6">Other</td><td>Information</td><td>System broadcast or arrival reminder</td></tr><tr><td>Availability</td><td>Availability of metro</td></tr><tr><td>Accident</td><td>System disruption or emergent incident</td></tr><tr><td>Advertisement</td><td>Onboard or metro station advertisement</td></tr><tr><td>Fare</td><td>Price of travel</td></tr><tr><td>Noise</td><td>Construction or functional noises</td></tr></table>

<img src="https://cdn.noedgeai.com/bo_d2u0q73ef24c73b3054g_2.jpg?x=172&y=1038&w=609&h=837&r=0"/>

Fig. 1. Graphical representation of LDA (Blei 2003).

(2) For each microblog, the following processes are applied:

a) The topic distribution of $i$ th microblog, ${\theta }_{i}$ is sampled from a Dirichlet distribution with parameter $\alpha$ .

b) For the word, $w$ ,in the list of $\mathrm{N}$ words within each microblog, the following was applied:

i. Each topic ${Z}_{n}$ is generated from a multinomial distribution with a parameter of ${\theta }_{i}$ for each microblog.

ii. Each word ${w}_{n}$ is sampled from the topic ${Z}_{n}$ via a multinomial probability, $\rho \left( {{w}_{n} \mid  {z}_{n},\beta }\right)$ .

Then, the model training process involves predicting document-topic distribution $\theta$ and topic-word distribution $\varnothing$ ,which maximizes the model joint probability. Griffiths and Steyvers (2004) argue that Gibbs' sampling is a simple,effective way to estimate $\theta$ and $\varnothing$ . After approximating the posterior distribution of $\theta$ and $\varnothing$ ,the $\mathrm{K}$ topics are identified and contain a couple keywords along with the corresponding probability of co-occurrence under the same topic.

Since the nature of unsupervised machine learning involves the number of topics $\mathrm{K}$ needs to be pre-fixed,choosing an optimum number is essential when performing LDA modeling. Too few topics may cover limited, general meanings, while too many may result in uninterpretable topics that share numerous, mutually overlapping keywords. The topic coherence score is a widely adopted measure to quantify the quality of topic models by assessing a topic's probabilistic coherence (Syed and Spruit 2017), which also helps an interpreter decide the optimum number of topics that have the best performance in a generative iteration process. In our study, the R package, textmineR (Thomas 2019), is used to run a model to evaluate the topic coherence and decide the optimal number of topics $\mathrm{K}$ ,and then,the LDA packages’ topic models (Hornik and Grün 2011) are applied to the topic modeling with pre-settled parameters $\left( {\mathrm{K}\alpha ,\beta }\right)$ .

## 3. Study context and data description

Shenzhen, located in Southern China and bordering Hong Kong to the south, is one of the country's fastest growing cities since its establishment as China's first special economic zone in 1980. In particular, Shenzhen is a leading city in China in the promotion of gender equality. In 2012, the "Shenzhen Special Economic Zone Gender Equality Promotion Regulations" were passed, marking the official introduction of the first local regulations on gender equality in mainland China. Shenzhen was also the first city in China to introduce the "Women Priority Carriage" policy in 2017. In terms of its transport system, Shenzhen has developed a comprehensive public transport system (including bus and metro) that has undergone rapid expansion in recent years. Generally, the operating hours of the metro and bus range from 6 a.m. to 12 a.m. In 2016, public transport (bus and metro) and private cars accounted for 38% and 46% of all daily motorized trips in Shenzhen, respectively (Shenzhen Urban Transport Planning Centre [SUTPC], 2017). Most bus routes are operated by three franchised companies, namely the Shenzhen Bus Group, Shenzhen Western Bus, and Shenzhen Eastern Group. By contrast, the metro service (Fig. 2) opened relatively late in 2004 with only Lines 1 and 2 in operation. By the end of 2017, the Shenzhen metro system operated eight lines and 168 stations (SUTPC, 2017).

Sina Weibo is the major Chinese social media platform (also regarded as Chinese Twitter), where users can obtain, report, and exchange information. By December 2018, Weibo had 462 million monthly active users (Weibo Data Center 2019), which is approximately one-third of China's whole population. Young people still dominate the Weibo user groups: the cohorts of young people between 18 and 40 make up 89% of all active Weibo users. Gender presents a more balanced distribution: 57% of Weibo users are male vs. 43% female. In this study, we collected six months of data from July 1 to December 31, 2018, including a total of 98,111 microblogs with the keywords "metro" and "bus". After text filtering and pre-processing, 57,223 microblogs remained for further user profile data retrieval. The corresponding dataset contains 44,257 users equipped with demographic characteristics, such as gender, age, education, and work. Personal information that can be used to distinguish a single user was removed from the collected dataset by the authors; a random ID was then assigned to each user for further data analysis.

Fig. 3 shows the overall gender distribution related to different travel modes in the collected Weibo dataset. A small amount of posts included both words of "metro" and "bus", which we put under the category "Metro & Bus" and suggests that the traveler experienced a multimodal trip. It is notable that women are overrepresented, as 73.4% of users that posted about their transit experience were women. This also appears to be the case for different modes: "Metro" (74.7%), "Bus" (70.7%), and "Metro & Bus" (74.7%). Surprisingly, women tend to more often express their travel experiences and feelings on social media platforms.

<img src="https://cdn.noedgeai.com/bo_d2u0q73ef24c73b3054g_3.jpg?x=354&y=153&w=1042&h=741&r=0"/>

Fig. 2. Metro system in Shenzhen.

<img src="https://cdn.noedgeai.com/bo_d2u0q73ef24c73b3054g_3.jpg?x=113&y=989&w=730&h=392&r=0"/>

Fig. 3. Overall gender distribution by travel mode.

## 4. Gender differences in spatial and temporal variation

### 4.1. Temporal variation

Gender differences in temporal dimensions (Fig. 4) is visualized hourly to show whether women are more sensitive to taking public transit at certain periods. Overall, the temporal distribution of women and men's posts is rather similar. Two peaks exist between 7 and 10 a.m. and 6-8 p.m., when a large amount of people (both women and men) take public transit to commute. One difference, however, is that during a late-night period between 9p.m -12a.m., men have a slightly higher proportion of microblogs, which may be due women's safety concerns, as they may travel less then.

<img src="https://cdn.noedgeai.com/bo_d2u0q73ef24c73b3054g_3.jpg?x=913&y=996&w=714&h=437&r=0"/>

Fig. 4. Gender differences in temporal distribution by hour.

### 4.2. Spatial variation

This study also identifies gender differences in spatial coverage (Fig. 5), and the spatial information is extracted from two aspects: (1) check-ins recorded in microblogs and (2) the place name of the metro station, bus stop, and street block identified from the microblog dataset. Google APIs were then applied to geocode those microblogs. The sample is normalized for each gender-temporal category. Then, the kernel density estimation (KDE) function is applied to predict the microblogs' density in a resolution of ${200}\mathrm{\;m}$ . Overall,a similar spatial distribution of footprints exists between women and men. Several hot spots are mainly identified around central business districts (e.g., those of Luohu, Futian, and Nanshan), the airport, and several high-density residential areas. However, when zooming out the distribution over days and nights, women are found to have a significantly smaller spatial coverage than men,especially at night $\left( {{20} : {00} - 7 : {00}}\right)$ . We explain there are two possible reasons: 1) Echoing the findings of temporal distribution, women are less likely to take public transit into remote areas at night due to safety concerns. Thus, they would avoid returning home extremely late or choose not to live in remote areas, where they may lack sufficient transit facilities. 2)As travel is a derided demand, the larger spatial coverage is because men tend to have more activities such as entertainment activities during night.

<img src="https://cdn.noedgeai.com/bo_d2u0q73ef24c73b3054g_4.jpg?x=257&y=154&w=1236&h=820&r=0"/>

Fig. 5. Gender differences in the normalized density of spatial distribution.

## 5. Results of LDA model

Before LDA modeling, we filtered the service-related microblogs and ran an LDA algorithm to calculate topic coherence scores with 200 iterations, testing the number of topics from zero to twenty. The coherence measures of four categories ("female-metro," "female-bus," "male-metro," and "male-bus") are shown in Fig. 6. To keep the topics distinct from each other, we compare the LDA results and decide the number of topics $\mathrm{N} = 5$ for the following groups: "female-bus," "female-metro," and "male-metro." In the "male-bus" category, although the topic coherence performance of three topics is better than four, we found that three topics may lose some essential information and cover more overlapping words. Therefore, we decided to utilize four topics for the "male-bus" group.

Fig. 7 represents the top fifteen highest-probability words for each topic, as inferred by LDA modeling. The most frequent terms (e.g., metro, Shenzhen, today), which are equipped with low term frequency-inverse document frequency (tf-idf) value, normally repeat across many documents but provide scant information. Thus, we only retained words with a tf-idf value greater than 0.2 , which is approximately positioned at the dataset's first quartile, to ensure that frequent but less meaningful words were omitted. The beta represents the probability of a word being assigned to a particular topic.

<img src="https://cdn.noedgeai.com/bo_d2u0q73ef24c73b3054g_4.jpg?x=261&y=1499&w=1232&h=646&r=0"/>

Fig. 6. Coherence measurement of topics.

<img src="https://cdn.noedgeai.com/bo_d2u0q73ef24c73b3054g_5.jpg?x=136&y=154&w=1478&h=929&r=0"/>

Fig. 7. LDA modeling results differentiated by gender and travel mode.

### 5.1. Transit services

Concerning topics related to the transit (metro and bus) services, several interesting findings were identified when comparing the topics of women and men. First, some commonalities were found, such as a common concern over security checks in the metro and bus driver behavior. Specifically, a high probability of the words, "security check" and "rush hour," co-occurring in both women and men's Metro-Topic 1 indicated the passengers' coincident concerns over security check issues during rush hour. This was accompanied by further concerns, like "queue up" in women's discussions and "crowded" situations for men. In addition, "driver" is recorded as the top word in both women and men's Bus-Topic 1, suggesting that passengers' main concern is bus driver behavior.

In addition to the above issues that were found in common between men and women, some distinct differences by gender are summarized as follows.

#### 5.1.1. Travel time

Travel time is identified in both women and men's topic 2 regardless of the travel mode. Two words with the highest probability scores, "hour" and "minute," greatly contributed to Topic 2 among the "male-metro" group, indicating that men are quite sensitive to travel time, In addition to "hour" and "minute", terms such as "be late," "overtime work," "miss," and "off work" in Topic 2 of the female group shows that women are not only sensitive to time but also how the travel time would affect the consequences or activity of transit, such as whether they will be late or miss the bus/train. This finding indeed echoes evidence from the women's Topic 1, which shows that women are sensitive to unpredictable consequences after an incident. Such gender difference reflects a possible gender gap in household responsibility (Hanson 2010). As women may have more household duties such as childcare and caretaking of aging parents, the delay of their travel (including causes related to work) is likely to have larger effects on other household members' activities.

#### 5.1.2. E-payment service

Topic 3 from the "male-metro" group refers to an e-payment technology topic characterized by keywords like "mobile phone" and "scan QR code", which is absent from female's topics identified. Similarly, Topic 3 from the "male-bus" group shows that their main concern involves the e-payment service, which is evidenced by the most frequent words in this topic, such as "QR Code," "mobile phone," "nfc," "pay," "scan code," and "WeChat." Overall, those e-payment service-related microblogs (identified by key contribution words like those listed above) consist of 213 and 258 microblogs posted by men and women, respectively. In reference to the gender distribution (73.4% female vs 26.6% male) recorded in the whole dataset, these word choices indicate that men tend to be more interested in the technological innovations of the metro service, like the new e-payment ticket service that has aroused widespread discussion since it was introduced in the Shenzhen metro system in May 2018.

#### 5.1.3. Safety

Topic 3 from the "female-bus" group covers several terms, like "DiDi" (a popular mobile transportation platform that provides app-based services in China from ride-hailing to ridesharing), "safety," "worry," "take taxi," and "night," indicating women's concern for their safety at night. When looking through specific microblogs, this topic is largely related to a shocking event in August 2018, when a crime of sexual assault and murder was committed by a DiDi taxi driver in China. This stirred up a public opinion storm around women's safety, especially at night when taking DiDi taxis. The discussion expressed women's feelings and worries: "I would rather take the bus or metro than to take a taxi alone" and "I am afraid to take a DiDi taxi, which [does not seem] safe anymore.". This indirect expression of safety concerns supports the idea that public transportation is a relatively safer choice compared to ride-hailing services in Shenzhen China (Luo and He 2021).

### 5.2. Gender roles

In addition to topics related to gendered perception of transit services, several interesting topics manifesting gender roles during travel are also identified in this study.

#### 5.2.1. Subjective expressions

Emotional words, such as "Ha ha ha," "happy," and "like," are widely found in Topic 5 from women's discussion of the metro and are largely positive, representing a content travel experience. For Topic 5, words like, "together" and "friend," may indicate that traveling with companions enhances women's sense of happiness. Furthermore, women express words like, "school," "concert," "eat," and "off-work," which represent activities that are closely related to positive emotions, implying that women's satisfaction with metro services is affected by various external factors, such as trip purpose, travel companionship, and socio-economic status. Additionally, Topic 5 in the "female-bus" group also exhibits women's subjective expressions as shown by the frequently used words such as "feel," "comfortable," "like," "hahahaha," and "hope."

#### 5.2.2. Reporting accidents

From "male-metro" microblogs, Topic 4 from extracted one-way interactions with several service providers, including "Shenzhen Metro Operation," "Shenzhen Traffic Police," "Shenzhen Metro Group," and the "Traffic Police." Currently, users tend to report traffic issues on social media platforms by simply posting "@," followed by the official organization in question, expecting an immediate response. From our dataset, men are more likely to use the @ function, suggesting their preferred method of finding solutions is to contact official authorities. Meanwhile, men tend to report specific location information to locate traffic incidents, such as areas, stations, or lines (e.g., "Longgang," "Longhua," "Futian," "Qinghu," "Xixiang," and "Nanshan"). Despite two service providers ("Shenzhen metro Operation" and "Shenzhen Metro Group"), which are found in the Topic 1 of "female-metro" group, location information is rarely mentioned among women. Instead, specific traffic problems, including keywords "security check," "air conditioner," "breakdown," "rush hour," and "queue up," are more often reported by women. This contrasting reporting habits on social media by gender may uncover different responsive behaviors between males and females when traffic problems occur. Since men may be more likely to report issues and seek solutions from official authorities, they may report the incident's detailed location information to facilitate the positioning process.

Echoing Topic 4 in the "male-metro" group, Topic 4 in the "male-bus" group represents the activity of reporting issues, which is characterized by mentioning the service provider's account (e.g., "Shenzhen Traffic Police," "Shenzhen Municipal Transportation Commission," and "Shenzhen Bus") and spatial keywords, such as "Nanshan" and "Long-gang." Also, some bus-specific words, like "lane," "intersection," and "direction," help locate bus-related traffic incidents and are also found under the same Topic.

#### 5.2.3. Escorting children

(1) Topic 4 extracted several terms from "female-metro" microblogs representing the activity of escorting a child, such as "Mom," "Child," "Dad," and "Kid," which are rarely discussed in male microblogs. Through related microblogs, Examples 1 and 2 represent two typical travel experiences, either the experience of escorting children by women passengers themselves or other women's behavior, that they observe onboard. This may provide contextual evidence that supports previous findings that females continue to take on more responsibility of escorting children (He and Giuliano 2017; He 2013; Schwanen 2007). This may prompt transit providers to carefully consider the needs of different social roles, like that of a mother, when designing and managing transit systems.

Example 1. My kid prefers to take the bus than the metro. Yesterday I took him out to play by bus. After about half an hour, he fell into my arms and said: I feel sick. Me: Me too, so shall we take the metro next time? He said yes.

Example 2. I found why the birth rate is really low now. The metro and shopping malls are full of children who are all brought by mothers or grandmothers! No father!

### 5.3. Women priority carriage

Notably, a typical gendered ideological word, "women priority," along with the word, "carriage," is identified in Topic 1 from "female-metro" microblogs. A "women priority" carriage policy was introduced in Shenzhen in June 2017. Four metro lines, including Lines 1, 3, 4, 5, were in the pilot run with their first and last carriages established as "women priority" carriages. This policy is controversial because no specific guidelines or practical regulations followed it, so many citizens have criticized its effectiveness. From our collected dataset, a total of 193 female blogs discuss "women priority" carriages nearly six times more than the thirty-three times it was found in male's blogs. Naturally, women are expected to pay more attention to a policy targeted at securing their rights. Through their blogs, women primarily complain that this policy is an empty shell because the "women priority" carriage is full of men, especially during rush hour, meaning that not only do men not follow it but the Shenzhen Metro Group do not regulate it well or perhaps have not even implemented it. Some of these comments include the following:

- Every time I enter the women priority carriage, I'm the only woman and the others are men. Do you feel the preferential treatment?

- It is supposed to be the women-only carriage!

- I really hate those stinky men who rub on me in the women priority carriage during rush hour!!

- @Shenzhen Metro Nearly 70% of passengers in the women priority carriages are male. Why do you set up this policy?

- Does the women priority carriage make sense for women? @ Shenzhen Metro Group, it is full of men, and they ... do not even know that they should give up their seats to women.

In contrast, in addition to similar complaints, men's relative scarce discussion presents two other views. The first refers to a critical comment that the "women priority" carriage is not clearly defined, so they feel confused about how to follow it. Besides, it does not specify the specific time range for its usage, which is normally set during peak hours. The second issue raises confusion and expresses the attitude that there is no need to establish a "women priority" carriage; instead, it should be promoted by the self-discipline and social consensus of the culture.

- I've been puzzled by a question. For the women priority carriage, how does one give priority? Is it the women's priority to enter the carriage? Or is it women's priority to take a seat? If it is set up to avoid sexual harassment during rush hour, it can be directly written as "women only carriage" with a specific time range, just like the bus lane that is clearly set on the road. Now the so-called women's priority car is nothing but a fake name stuck on the door.

- I don't know whether it's women's priority to enter the carriage or women's priority to take the seat, or both. I also don't know whether it's based on publicity or regulation. I don't think it's necessary to set up a women's priority car. If women's first carriage is specified, does it mean that other carriages may not follow women's priority? Obviously, women's priority should be a social consensus and reflect the need for self-control.

## 6. Discussion

### 6.1. Gendered attitudes toward transit services

Gender socialized roles manifest themselves directly in their expressions toward transit services. Surprisingly, this study provides evidence supporting the societal stereotype of gender roles in China. First, women still perform the major household caring responsibilities, such as escorting child-oriented trips, which is reflected by the female topics' key contribution words, "Mom" and "child." Second, female travelers tend to use more subjective, with the higher prevalence of emotional words (e.g., "happy" and "hahaha") in their online discussions than their male counterparts. This echoes current online phenomena, as uncovered by Schwartz et al. (2013) who analyzed 700 million messages from Facebook, that women tend to use more emotion-related words and mention psychological and social processes more often. Third, men are more associated with the space category when reporting traffic issues since their identified topics include the name of metro stations, metro lines, roads, and districts. This finding also supports the recent research of Vasquez-Henriquez et al. (2019), who explain that this may be attributed to men, the main users of motorized transport, where these spatial terms would be often utilized. Since these spatial footprints often co-occur with hashtags of service provider accounts, another possible reason for this may be due to unbalanced power relations in a patriarchal society. China has traditionally been a patriarchal society in its long history. Men who play the privileged position in the power relations of family and employment would be more likely to trust official authorities' typical top-down, problem-solving solutions, encouraging them to describe their problems in a more detailed way, including spatial information.

Topic modeling results reveal both similarities and differences between men and women's perceptions of transit services. A common focus on security checks before taking the metro and waiting conditions are important in both gender's posts that are related to metro topics. In terms of the bus, the driver's behavior is of the greatest importance in women and men's perceptions, which is supported by substantial research that underlines the driver's important role of operating the bus, affecting passengers' perceived safety (Grisé and El-Geneidy 2017; Rohani et al., 2013). In terms of differences, men are found to be more sensitive to technology-related services, whereas women tend to be more concerned with the environment, such as the air conditioner, crowdedness, and elevators. In addition, although men and women are both sensitive to travel time, women are more focused on the activity, like whether it results in them being late or having to work overtime.

The starkest difference between female and male was found with regards to their perceptions about safety concerns. The direct evidence lies in the significantly smaller spatial coverage of women traveling at night, from 22:00 to 7:00. This is coincident with most of the literature's findings that women avoid taking transit at night due to safety concerns (e.g., Loukaitou-Sideris et al., 2009; Roche-Ceras et al., 2013; Shirgao-kar, 2019). Although it is not directly mentioned in women's posts, some indirect safety expressions from women's posts (e.g., "I would rather take a bus or metro than to take a DiDi taxi during the nighttime") reflect that transit is perceived as a safer mode than a taxi at night. Some possible explanations include the following: (1) The metro and bus are considered relatively safe, as compared to other public spaces in China. (2) Since China is equipped with a mass surveillance camera system, violent crime (e.g., rape and robbery) is rare, while other incidents in public transport mostly consist of pickpocketing. (3) Shenzhen is a metropolitan city with a high street density and numerous younger generations, so street traffic is not even low at night.

Finally, a significant divide in the public's attitude toward the "women priority" carriage is also found in this study. Since women view violence and harassment as especially detrimental and severe to themselves, this carriage is seen as being designed to secure their rights and avoid risk. Thus, they feel unsatisfied and angry when their perceived exclusive, private space is invaded by men. Nevertheless, this issue does not concern men, as their related discussion is quite limited. Further, as opposed to findings from Dunckel-Graglia (2013) that showed most men regard violence during public transportation a common phenomenon and not necessarily the best choice for commuting women in Mexico City, violence is rarely mentioned in both men and women's posts in Shenzhen. Some men in our study responded negatively, explaining that the root solution is to advance the culture of "women priority" in society, so the public transportation situation would improve accordingly. However, it is expected that men ignore and even protest this policy, as it changes the culture of public space.

### 6.2. Social media data: representativeness discussion

Social media data has often been criticized for sampling biases and problems involved with underrepresenting certain groups (Liu et al., 2015; Shin, 2019). This study reveals how and to what extent demographic characteristics collected from social media are biased, particularly concerning those variables that correlate with gender in China. The biased results do not demonstrate that social media mining is ineffective at expressing the truth; instead, it opens up the possibility of delving into different social categories, including research on underrepresented minorities. For instance, in our case study, only around 0.5% of users are older than fifty-five, who are significantly underrepresented, as compared to 5% in the census dataset. However, 120 people in this minority group were counted in our study, which remains larger than fifty out of 1,000 samples from traditional surveys. Therefore, further study would benefit by moving in the direction of fusing traditional surveys with social media data.

Despite the sampling bias, as demonstrated in the current study, social media data still hold important potential in unveiling people's perceptions toward public transit, and in particular, gender difference and potential inequality on the matter. In our study, without perfect control over gender sampling, we observed that females tend to be more sensitive to their travel experiences with an approximate 3:1 female/ male ratio. Rather than having a hypothesis or seeking information that fits existing theories, the social media data may be able to tell many stories that we neither knew nor expected. Social media has significant potential to provide novel insights that may have never been considered in traditional planning and policymaking. This study may provide a reference and attract further studies to detect unexpected trends and phenomena by social media mining, which may also allow planning to become more contingent, as compared to the ex-post nature of traditional surveys.

## 7. Conclusion and policy implications

Gender equality in transport can only be achieved by accommodating gendered perceptions and needs. This study demonstrates how we can use social media data to envisage the traveler's experience when taking the metro and bus; specifically, we have proposed a framework to retrieve microblogs and their corresponding user profiles from Weibo to analyze gender differences of attitudes toward transit services. Several visualization and topic modeling techniques are applied to visualize the spatial and temporal variations of perceived service attributes and extract hidden travel experience topics between women and men.

In China, various gender policies have been implemented in the last few decades to ensure gender equality in education and employment opportunities. However, discussions and policies surrounding the promotion of gender equality in the urban planning and development process have been largely missing in the country. Our study fills the gap in research and policy by focusing on the gender difference in transit experiences in Shenzhen.

First, we demonstrate distinct gender differences in attitudes toward transit services. Women, for example, tend to be more sensitive to their transit experiences that their related bus/metro posts are nearly three times more than that of men, regardless of the travel mode, or age. Further, women are more sensitive to the comfort levels of a transit environment and safety issues at night and tend to have more affective evaluations of services online. By contrast, men are more interested in technological innovation, such as e-payment services, and tend to have a sense of orientation when reporting traffic incidents. Thus, we recommend that gender-sensitive transport strategies be developed to accommodate these gendered perceptions and needs during travel. As transport planning has long been dominated by male planners, women's needs and perceptions have not been adequately considered in policymaking processes. The overrepresented women's messages and their specific discussion towards the transit services captured in this study, to some extent, may reflect the fact that women's voices are often neglected or even suppressed in traditional transport planning in China, which highlights the needs to consider gender issues in all stages and aspects of planning process. Further, the markedly smaller spatial and time coverage for the travel patterns of women compared to men suggested that women may avoid certain travel times and locations, or they may have some personal and household constraints. This also supports empirical evidence that women tend to have a lower level of access to urban opportunities given certain space-time constraints (Kwan 1999; Stark and Meschik 2018). Hence, in addition to common policies implemented at bus/metro stops to protect women's safety, more importantly, transit service providers need to cooperate with other stakeholders to improve women's mobility patterns. For instance, transit providers and transport departments should develop transport policies and programs that can provide more reliable and safer travel options in remote areas to accommodate women's travel demand, while the police departments could dispatch more patrol vehicles in these neighborhoods to ensure women's safety at night.

Second, the activity of reporting traffic issues is widely represented as a one-way interaction with the service provider account, as found in the Weibo microblog's dataset (especially for male posts). These nonresponsive interactions may further enhance travelers' frustration toward public transport providers and policymakers. Schweitzer (2014) also illustrates that transit agencies that directly respond to or have more interactive communication with social media users receive more positive feedback about all aspects of their services. Many transit agencies or organizations have social media accounts in China, especially in major cities like Shenzhen, but most of them commonly use the account for transit information updates and event announcements. Therefore, this study suggests that transit agencies and the planning department should engage more with social media interactions, like responding to users' questions and comments.

Third, this study uncovers disparate views regarding the "women priority" carriage policy. Although Shenzhen is the first city in China to implement this policy aimed at promoting gender equality by giving special attention to women to avoid sexual harassment during travel, a key criticism involves the lack of practical regulation. For example, little publicity about the policy and not enough staff guidance renders the policy ineffective in securing women's safety. Therefore, service providers should implement practical regulations to provide women a secure means of transport. Furthermore, some surveillance behavior, such as safety guards checking the women's carriage, has been proven to reduce women's feelings of vulnerability on the metro (Gopal and Shin 2019). Thus, the Shenzhen Metro Group may need to implement some surveillance measures or guidance to regulate passengers and follow this policy. As the discussion around the "women priority" carriage remains relatively limited in our study, the metro corporation may encourage more passengers, such as through online and offline propaganda, to become involved in social media discussions that could allow policy makers to extract a more comprehensive view of the situation. In addition, although socially disadvantaged groups, such as low-income and elderly people, are underrepresented in social media discussions, their voices should not be ignored. Policy makers should incentivize them to use public transport regardless of whether these groups post on social media platforms.

This study has several limitations. First, the demographic analysis reveals that younger female adults with higher education are overrepresented in the collected microblogs. Thus, this study may provide evidence that is focused on millennials, who more often use information/communication technologies. Second, some of the LDA modeling results are challenging to interpret. Although the topic coherence score helps identify statistically coherent topics, sometimes the keywords under each topic are deemed unrelated. For instance, Topic 3 from the "female-metro" group comprised several keywords, such as "like," "boys," and "girls," which seem unrelated to service, but rather, they relate to the travel experience. More advanced topic modeling techniques should be developed or improved to provide more precise interpretations in the future. Finally, this study analyzed spatio-temporal patterns between women and men which were essentially built upon the premise that passengers generally post their travel experience during or soon after their trip. Thus, further analysis of the possible time lag impact on customers' perceptions of services would be interesting to explore.

## CRediT authorship contribution statement

Shuli Luo: Conceptualization, Methodology, Data curation, Formal analysis, Visualization, Writing - original draft. Sylvia Y. He: Conceptualization, Methodology, Supervision, Writing - review & editing, Funding acquisition.

## Acknowledgments

We would like to thank the anonymous reviewers for their constructive comments and suggestions. This research is supported by a Direct Grant (#SS18321) awarded by the Research Committee of the Chinese University of Hong Kong.

<img src="https://cdn.noedgeai.com/bo_d2u0q73ef24c73b3054g_9.jpg?x=319&y=160&w=1107&h=495&r=0"/>

Fig. A1. Example of extracting service-related information.

Akyelken, N., 2020. Transport for women: who decides what women need? Transport Rev. 40 (6), 687-688. https://doi.org/10.1080/01441647.2020.1799162.

Beirão, G., Cabral, J.S., 2008. Market segmentation analysis using attitudes toward transportation: exploring the differences between men and women. Transport. Res. Rec.: J. Transport. Res. Board 2067 (1), 56-64. https://doi.org/10.3141/2067-07.

Blei, D.M., Ng, A.Y., Jordan, M.I., 2003. Latent dirichlet allocation. J. Mach. Learn. Res. 3, 993-1022.

Casas, I., Delmelle, E.C., 2017. Tweeting about public transit-gleaning public perceptions from a social media microblog. Case Studies Transport Pol. 5 (4), 634-642.

Collins, C., Hasan, S., Ukkusuri, S.V., 2013. A novel transit rider satisfaction metric: rider sentiments measured from online social media data. J. Publ. Transport. 16 (2), 21-45. https://doi.org/10.5038/2375-0901.16.2.2.

Cresswell, T., Uteng, T.P., 2008. Gendered mobilities: towards an holistic understanding. In: Gendered Mobilities, vols. 15-26. Ashgate, Burlington.

Das, S., Pandit, D., 2013. Importance of user perception in evaluating level of service for bus transit for a developing country like India: a review. Transport Rev. 33 (4), 402-420.

Dell'Olio, L., Ibeas, A., Cecín, P., 2010. Modelling user perception of bus transit quality. Transport Pol. 17 (6), 388-397.

Dunckel-Graglia, A., 2013. Women-only transportation: how "pink" public transportation changes public perception of women's mobility. J. Publ. Transport. 16 (2), 85-105. https://doi.org/10.5038/2375-0901.16.2.5.

Fan, Y., Guthrie, A., Levinson, D., 2016. Waiting time perceptions at transit stops and stations: Effects of basic amenities, gender, and security. Transport. Res. Pol. Pract. 88, 251-264.

Gal-Tzur, A., Grant-Muller, S.M., Kuflik, T., Minkov, E., Nocera, S., Shoor, I., 2014. The potential of social media in delivering transport policy goals. Transport Pol. 32, 115-123.

Goodchild, M.F., 2007. Citizens as sensors: the world of volunteered geography. Geojournal 69 (4), 211-221. https://doi.org/10.1007/s10708-007-9111-y.

Gopal, K., Shin, E.J., 2019. The impacts of rail transit on the lives and travel experiences of women in the developing world: evidence from the Delhi Metro. Cities 88, 66-75. https://doi.org/10.1016/j.cities.2019.01.008.

Grant-Muller, S.M., Gal-Tzur, A., Minkov, E., Nocera, S., Kuflik, T., Shoor, I., 2014. Enhancing transport data collection through social media sources: methods, challenges and opportunities for textual data. IET Intell. Transp. Syst. 9 (4), 407-417. https://doi.org/10.1049/iet-its.2013.0214.

Griffiths, T.L., Steyvers, M., 2004. Finding scientific topics. Proc. Natl. Acad. Sci. Unit. States Am. 101 (Suppl. 1), 5228-5235. https://doi.org/10.1073/pnas.0307752101.

Grisé, E., El-Geneidy, A., 2017. Evaluating the relationship between socially (dis) advantaged neighbourhoods and customer satisfaction of bus service in London, UK. J. Transport Geogr. 58, 166-175. https://doi.org/10.1016/j.jtrangeo.2016.11.016.

Hanson, S., 2010. Gender and mobility: new approaches for informing sustainability. Gend. Place Cult. 17 (1), 5-23. https://doi.org/10.1080/09663690903498225.

Harris, Z.S., 1954. Distributional structure. Word 10 (2-3), 146-162.

Hawelka, B., Sitko, I., Beinat, E., Sobolevsky, S., Kazakopoulos, P., Ratti, C., 2014. Geo-located Twitter as proxy for global mobility patterns. Cartogr. Geogr. Inf. Sci. 41 (3), 260-271. https://doi.org/10.1080/15230406.2014.890072.

He, S.Y., 2013. Will you escort your child to school? The effect of spatial and temporal constraints of parental employment. Appl. Geogr. 42, 116-123. https://doi.org/ 10.1016/j.apgeog.2013.05.003.

He, S.Y., Giuliano, G., 2017. Factors affecting children's journeys to school: a joint escort-mode choice model. Transportation 44, 199-224. https://doi.org/10.1007/ s11116-015-9634-x.

He, S.Y., Thøgersen, J., 2017. The impact of attitudes and perceptions on travel mode choice and car ownership in a Chinese megacity: the case of Guangzhou. Res. Transport. Econ. 62, 57-67.

Hjorthol, R., 2008. In: P Uteng, T., Cresswell, T. (Eds.), Daily Mobility of Men and Women—A Barometer of Gender Equality?. Gendered Mobilities, 193-210. Ashgate, Burlington.

Hong, L., Davison, B.D., 2010. Empirical study of topic modeling in twitter. In: Proceedings of the First Workshop on Social Media Analytics, pp. 80-88. https://doi.org/10.1145/1964858.1964870.

Hornik, K., Grün, B., 2011. Topicmodels: an R package for fitting topic models. J. Stat. Software 40 (13), 1-30. http://www.jstatsoft.org/v40/i13.

Klingen, J., 2019. Do metro interruptions increase the demand for public rental bicycles? Evidence from Paris. Transport. Res. Pol. Pract. 123, 216-228. https://doi.org/ 10.1016/j.tra.2018.10.018.

Kwan, M.P., 1999. Gender and individual access to urban opportunities: a study using space-time measures. Prof. Geogr. 51 (2), 210-227.

Lansley, G., Longley, P.A., 2016. The geography of Twitter topics in London. Comput. Environ. Urban Syst. 58, 85-96. https://doi.org/10.1016/j.compenvurbsys.2016.04.002.

Li, L., Goodchild, M.F., Xu, B., 2013. Spatial, temporal, and socioeconomic patterns in the use of Twitter and Flickr. Cartogr. Geogr. Inf. Sci. 40 (2), 61-77. https://doi.org/ 10.1080/15230406.2013.777139.

Liu, X., Huang, Q., Gao, S., Xia, J., 2021. Activity knowledge discovery: detecting collective and individual activities with digital footprints and open source geographic data. Comput. Environ. Urban Syst. 85, 101551.

Liu, Y., Liu, X., Gao, S., Gong, L., Kang, C., Zhi, Y., Chi, G., Shi, L., 2015. Social sensing: a new approach to understanding our socioeconomic environments. Ann. Assoc. Am. Geogr. 105 (3), 512-530. https://doi.org/10.1080/00045608.2015.1018773.

Loukaitou-Sideris, A., Fink, C., 2009. Addressing women's fear of victimization in transportation settings: a survey of US transit agencies. Urban Aff. Rev. 44 (4), 554-587. https://doi.org/10.1177/1078087408322874.

Loukaitou-Sideris, A., 2016. A gendered view of mobility and transport: next steps and future directions. Town Plan. Rev. 87 (5), 547-565. https://doi.org/10.3828/ tpr.2016.38.

Luo, S., He, S.Y., 2021. Using data mining to explore the spatial and temporal dynamics of perceptions of metro services in China: the case of Shenzhen. Environ. Plan. B: Urban Anal. City Sci. 48 (3), 449-466. https://doi.org/10.1177/ 2399808320974693.

Marcucci, E., Gatta, V., 2007. Quality and public transport service contracts. Euro. Transport 36 (1), 92-106.

Meng, M., Rau, A., Mahardhika, H., 2018. Public transport travel time perception: effects of socioeconomic characteristics, trip characteristics and facility usage. Transport. Res. Pol. Pract. 114, 24-37. https://doi.org/10.1016/j.tra.2018.01.015.

Pan, C.C., Mitra, P., 2011. Event detection with spatial latent Dirichlet allocation. In: Proceedings of the 11th Annual International ACM/IEEE Joint Conference on Digital Libraries, pp. 349-358.

Roche-Cerasi, I., Rundmo, T., Sigurdson, J.F., Moe, D., 2013. Transport mode preferences, risk perception and worry in a Norwegian urban population. Accid. Anal. Prev. 50, 698-704. https://doi.org/10.1016/j.aap.2012.06.020.

Rohani, M.M., Wijeyesekera, D.C., Karim, A.T.A., 2013. Bus operation, quality service and the role of bus provider and driver. Procedia Eng. 53, 167-178. https://doi.org/ 10.1016/j.proeng.2013.02.022.

Rosenbloom, S., Plessis-Fraissard, M., 2009. Women's travel in developed and developing countries: two versions of the same story? Women's Issues Transport. 1, 63-132. In: http://libraryarchives.metro.

net/dpgtl/trb/trb-conference-proceedings/trb-conference-proceedings-46-volume-1. pdf#page=78.

Sarker, R.I., Kaplan, S., Mailer, M., Timmermans, H.J.P., 2019. Applying affective event theory to explain transit users' reactions to service disruptions. Transport. Res. Pol. Pract. 130, 593-605. https://doi.org/10.1016/j.tra.2019.09.059.

Schwanen, T., 2007. Gender differences in chauffeuring children among dual-earner families. Prof. Geogr. 59 (4), 447-462. https://doi.org/10.1111/j.1467- 9272.2007.00634.x.

Schwartz, H.A., Eichstaedt, J.C., Kern, M.L., Dziurzynski, L., Ramones, S.M., Agrawal, M., Shah, M.A., Kosinski, M., Stillwell, D., Seligman, M.E., et al., 2013. Personality, gender, and age in the language of social media: the open-vocabulary approach. PloS One 8 (9), e73791. https://doi.org/10.1371/journal.pone.0073791.

Schweitzer, L., 2014. Planning and social media: a case study of public transit and stigma on Twitter. J. Am. Plann. Assoc. 80 (3), 218-238. https://doi.org/10.1080/ 01944363.2014.980439.

Shenzhen Urban Transport Planning Center, 2017. Shenzhen transport annual report. Last Modified August 28, 2020. http://www.sutpc.com/news/jishufenxiang/605.html.

Shin, E.J., 2019. What can we learn from online reviews? Examining the reviews of Los Angeles metro rail stations. J. Plann. Educ. Res. https://doi.org/10.1177/ 0739456X19870261.

Shirgaokar, M., 2019. Operationalizing gendered transportation preferences: a psychological framework incorporating time constraints and risk aversion. Transport Pol. 75, 10-18. https://doi.org/10.1016/j.tranpol.2018.12.010.

Soza-Parra, J., Raveau, S., Muñoz, J.C., Cats, O., 2019. The underlying effect of public transport reliability on users' satisfaction. Transport. Res. Pol. Pract. 126, 83-93. https://doi.org/10.1016/j.tra.2019.06.004.

Stark, J., Meschik, M., 2018. Women's everyday mobility: frightening situations and their impacts on travel behaviour. Transport. Res. F Traffic Psychol. Behav. 54, 311-323.

Syed, S., Spruit, M., 2017. Full-text or abstract? Examining topic coherence scores using latent dirichlet allocation. In: 2017 IEEE International Conference on Data Science and Advanced Analytics, pp. 165-174. https://doi.org/10.1109/DSAA.2017.61.

Tao, S., He, S.Y., Thogersen, J., 2019. The role of car ownership in attitudes towards public transport: a comparative study of Guangzhou and Brisbane. Transport. Res. F Traffic Psychol. Behav. 60, 685-699.

Thomas, W.J., 2019. Topic modelling. Last Modified April 17. https://cran.r-project.org/web/packages/textmineR/vignettes/c_topic_modeling.html.

Tyrinopoulos, Y., Antoniou, C., 2008. Public transit user satisfaction: variability and policy implications. Transport Pol. 15 (4), 260-272.

Van Lierop, D., Badami, M.G., El-Geneidy, A.M., 2018. What influences satisfaction and loyalty in public transport? A review of the literature. Transport Rev. 38 (1), 52-72.

Vasquez-Henriquez, P., Graells-Garrido, E., Caro, D., 2019. Characterizing transport perception using social media: differences in mode and gender. Proc. 10th ACM Confer. Web Sci. 295-299. https://doi.org/10.1145/3292522.3326036.

Wasfi, R., Levinson, D., 2006. Research Report: the transportation needs of people with developmental disabilities. Last Modified September 10. http://citeseerx.ist.psu.edu /viewdoc/download?doi=10.1.1.433.9363&rep=rep1&type=pdf.

Weibo Data Center, 2019. Weibo user report. Last modified march 15. Accessed May 11, 2019. https://data.weibo.com/report/reportDetail?id=433.

Wu, W., Wang, J., Dai, T., 2016. The geography of cultural ties and human mobility: big data in urban contexts. Ann. Assoc. Am. Geogr. 106 (3), 612-630. https://doi.org/ 10.1080/00045608.2015.1121804.

