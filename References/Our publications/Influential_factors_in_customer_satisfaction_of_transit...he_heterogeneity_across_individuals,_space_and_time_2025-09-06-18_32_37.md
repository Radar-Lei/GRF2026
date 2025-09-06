

# Influential factors in customer satisfaction of transit services: Using crowdsourced data to capture the heterogeneity across individuals, space and time

Shuli Luo ${}^{\mathrm{a},\mathrm{b}}$ ,Sylvia Y. He ${}^{\mathrm{c}, * }$ ,Susan Grant-Muller ${}^{\mathrm{d}}$ ,Linqi Song ${}^{\mathrm{e}}$

${}^{a}$ Monash Suzhou Research Institute,Monash University,Suzhou Industrial Park,Suzhou,China

${}^{\mathrm{b}}$ Department of Civil Engineering,Monash University,Clayton,Australia

${}^{\mathrm{c}}$ Department of Geography and Resource Management,The Chinese University of Hong Kong,Hong Kong,China

${}^{d}$ Institute for Transport Studies,University of Leeds,United Kingdom

${}^{\mathrm{e}}$ Department of Computer Science,City University of Hong Kong,Hong Kong,China

## ARTICLEINFO

Keywords:

Customer satisfaction

Sentiment analysis

Spatial-temporal analysis

Social media data

## A B S T R A C T

In a rapidly evolving and highly competitive transportation market, increasing customer satisfaction and ridership retention are essential for transit agencies. Understanding how different market segments perceive transit services can help service providers to identify potential priority areas and develop specialised strategies to address their varying travel concerns. However, traditional studies have predominantly investigated the variations across socioeconomic cohorts or travel characteristics but ignored the complex effect of spatial, temporal, and user heterogeneity. Recently social media data has attracted growing interest from academia as an alternative way to compensate public attitude surveys with a high volume of semantic, spatial, and temporal information. This study collected 177,807 microblogs from Sina Weibo to understand how customer satisfaction varies among different market segments characterised by social, temporal, and spatial heterogeneity. Methodologically, this study applies sentiment analysis as a real-time measurement of customers' satisfaction towards transit services, covering safety, crowdedness, reliability, personnel behaviour, and comfort. A beta regression model is then applied to identify the most important explanatory factors and the extent to which explanatory factors affect customers' satisfaction, respectively. The result indicates that age, gender, travel mode, time, and space significantly contribute to customers' satisfaction with the transit system. Their varying impacts on different service attributes are also identified in this study. This study also reveals the highly polarised nature of online sentiment, explaining gendered attitudes. Our research framework could be used as a benchmark for other service industries to conduct similar market segment analysis and integrate it into the policy decision process.

## 1. Introduction

Delivering and improving transit services following customers' perceptions and thus leveraging their satisfaction with the services is usually part of the core agenda for any transit operator. The assessment of customer satisfaction is thus essential for transit agencies to raise the attractiveness of public transport, build a more responsive system, and make informed decisions. The most common approach to measuring customer satisfaction is the collection of customer satisfaction surveys. Considerable research has put efforts into developing or applying various data analyses to identify the most influential service attribute affecting travellers' overall satisfaction with the transit system (Dell'Olio et al., 2010; Eboli and Mazzulla, 2010). Meanwhile, another line of research has focused on investigating how traveller's perception and satisfaction of services vary among different user groups characterised by their socioeconomic status, travel needs (i.e., captive or choice riders), personal attitudes, past experience, temporal, and spatial factors (De Oña et al., 2016a, van Lierop and El-Geneidy, 2017; Grisé and El-Geneidy, 2018; Mouratidis et al., 2019). Analysing the heterogeneity of travellers' evaluation of transit service is important for transit providers to develop specialised strategies that target concentrations of certain groups of riders and promote transit equity by prioritising intervention strategies for disadvantaged transport groups such as elders and women.

---

* Corresponding author. Department of Geography and Resource Management, The Chinese University of Hong Kong, Shatin, N.T., Hong Kong, China.

E-mail address: sylviahe@cuhk.edu.hk (S.Y. He).

---

Although the customer satisfaction survey has been widely adopted as the measure of travel satisfaction, this method has some limitations. First, the customer satisfaction survey is essentially a post-experience survey. In this way, satisfaction is viewed as a post-consumption attitude embracing affective, cognitive, and implicit behaviour components (Pearce, 2005). Accordingly, various well-established psychometric surveys have been developed to evaluate satisfaction as a fixed number in a range of Likert scales or a simple response (satisfied or not) following some structured information related to service performance. This method, however, is more related to a cognitive assessment than positive/negative affect that some irrelevant emotions originating from other non-transport associated aspects (e.g., travel-based multitasking) may distort the measurement (De Vos et al., 2013; Singleton and Clifton, 2019). In addition, conventional cross-sectional surveys have largely constrained the customers' satisfaction as a fixed construct in time or space despite the fact that travellers' perceptions are highly temporally and spatially dynamic. In recent years, growing research has argued that traveller's real-time experience deserves more intention and needs to be integrated into satisfaction evaluation (Coghlan and Pearce, 2010; Collins et al., 2013; Lock and Pettit, 2020)

Social media brings new paradigms to social science research through the possibility of mining public attitudes, opinions, and social interactions to supplement traditional surveys with the advance of Web 2.0 technologies (Jiang and Thill, 2015; Kuflik et al., 2017; Rashidi et al., 2017). Accordingly, some data mining techniques such as topic modelling and machine learning methods, have been applied to analyse social media data (e.g., Haghighi et al., 2018; Anik et al., 2020; Luo and He, 2021b). Among them, sentiment analysis, defined as systematically identifying and analysing public opinions and emotional attitudes from textual data (Pang and Lee, 2004), provides an alternative way to capture users' real-time travel affect and experiences. Numerous studies have used sentiment analysis to model transit customers' satisfaction (Collins et al., 2013; El-Diraby et al., 2019; Mogaji and Erkan, 2019; Schweitzer, 2014). However, most studies have remained at the exploratory level that illustrates the satisfaction distribution, such as a broad sense of positive or negative feelings toward certain services (e.g., punctuality, reliability) or incidences (e.g., signal breakdown). The relationship between their online sentiments and the market segments featured by different user, spatial, and temporal characteristics have been rarely studied in the literature.

This study seeks to develop an alternative big data framework to measure customer satisfaction and identify how it varies from different market segments based on social media mining. Stakeholders and poli-cymakers may use this methodology framework to track the emotional state changing by different time and social groups and integrate it into their further analysis in the decision-making process.

## 2. Overview of related literature

### 2.1. Customer satisfaction with transit and its heterogeneity across individuals, space and time

The research scope of this study is examining customers' satisfaction concerning various socioeconomic, travel, spatial and temporal attributes. In traditional studies, it is well-recognised that customers' satisfaction with the transport system varies depending on the group of passengers being considered (Dell'Olio et al., 2010; Allen et al., 2018). Market segmentation is an efficient tool for service providers to apply market-oriented strategies to specific customers. In parallel with the research on identifying different market segments of the transit service, various statistical techniques such as factor analysis (Cats et al., 2015; Shiftan et al., 2008), logit models (Abenoza et al., 2017; Bellizzi et al., 2020), and machine learning methods (De Oña et al., 2016a; Grisé and El-Geneidy, 2018) have been developed or applied to analyse the variation of customers' satisfaction level with transit services among those market segments characterised by various user, travel, spatial and temporal attributes (Table 1).

Extensive research has investigated how travellers' satisfaction varies across different social groups characterised by socioeconomic attributes (e.g., De Oña et al., 2016; Shiftan et al., 2008) and travel attributes (e.g., Abenoza et al., 2017; Jacques et al., 2013) on customers' satisfaction of transport system. In terms of spatial distribution, empirical studies have mainly broadly differentiate users by transit stops or lines (Bordagaray et al., 2014; Eboli et al., 2018; Grisé and El-Geneidy, 2017), accessibility levels (e.g. Abenoza et al., 2017; Grisé and El-Geneidy, 2018), or built environment in an urban/non-urban dichotomy (e.g. Abenoza et al., 2018). Meanwhile, the temporal variations in customer satisfaction attached to service attributes have been demonstrated in various time scales, such as the hour of the day, day of the week, and year (e.g., Allen et al., 2018; Cats et al., 2015). However, most empirical studies have only partially examined spatial and/or temporal variations of the satisfaction with the overall service quality but ignored the variations of each specific service quality attribute across space and time. Besides, very few studies in customer satisfaction of transit services have used a big data analytical approach.

In spite of numerous related works, there is no consensus in the findings concerning which user group should be prioritised when developing transport policies depending on the diverse social structure, travel patterns, and travel attitudes in each context. For instance, Del-l'Olio et al. (2010) have suggested that users under 24 placed more importance on bus driver behaviour in the case of Cantabria, Spain. However, Mouwen (2015) found the contrary result that adults (aged between 28 and 64) are more satisfied with Dutch public transport (PT) services concerning personnel and driver behaviour compared to people less than 18 years old. They also revealed that people would negatively evaluate the metro services more than bus ones. They explain that the contrasting results may come from differences in travel patterns between the age groups in different contexts. When looking at the spatial effect, Abenoza et al. (2018) found that travellers living in more rural areas have lower evaluations of their door-to-door travel experience than those living in an urban area in Stockholm. They explained that the dissatisfaction of rural travellers might be related to the lower personal safety perceptions experienced by female travellers in rural areas where fewer passengers and traffic are found. By contrast, Grisé and El-Geneidy (2018) identified a cluster of young urbanites in the downtown area of Toronto who enjoys good access to the train station and tends to express lower levels of satisfaction with train stations and service characteristics such as fare inspections and on-time performance. They suggested the main reason is the lack of integration of the train services investigated with local transit services, to which urban dwellers have a high level of loyalty. Similar contrasting results are also found in terms of the gender effect. Although females are more sensitive to specific services such as safety (e.g., Allen et al., 2018; Roche-Cerasi et al., 2013), Delbosc and Currie (2012) found unexpectedly that gender showed no direct effect on perceptions of safety on public transport. Instead, it indirectly affected it through the feelings of safety at home and in neighbourhoods. Instead, they revealed that the most significant influential factors come from the perceptions of safety on streets or homes and trust in local communities. They thus highlighted the importance of unpacking the complexity of relationships between gender, neighbourhoods, built environment and personal experience with crimes on perceptions of safety on public transport.

### 2.2. Sentiment analysis as a real-time measurement of customer satisfaction with transit

Reaching out to customers and understanding their satisfaction more efficiently and dynamically make social media analytics stand out from traditional Likert-scale measurements. In the transportation field, sentiment analysis has aroused growing interest in quantifying public opinions (i.e., sentiment polarity) towards transit services and incidences. A pilot study by Collins et al. (2013) first applied sentiment analysis on around 500 tweets posted by transit riders in Chicago to evaluate transit riders' satisfaction with performance factors like punctuality, cleanliness, and safety in Chicago. They suggested that users tend to share more negative sentiments than positive ones. Similarly, Luong and Houston (2015) studied public opinions and attitudes about light rail transit service in Los Angles by looking at Twitter (https://twitter.com) data. The results provided differentiated insights about comments, criticisms, responses, and shared information about the rail transit system in Los Angeles. Mogaji and Erkan (2019) combine sentiment analysis with content analysis to analyse users' attitudes towards services of three train operating companies (TOCs) in the UK. They indicate an overall positive attitude towards the UK train, although variations across different train groups play a critical role in shaping customers' experience.

Table 1

Literature summarising variations of customers' satisfaction among various market segments.

<table><tr><td>Authors</td><td>Segmentation by attributes</td><td>Method</td><td>Findings</td></tr><tr><td>Shiftan et al. (2008)</td><td>Socioeconomic attributes and travel attitudes</td><td>Factor analysis and structural equation modelling</td><td>Several market segments are identified: anxious ambler, green rider, routine rider, productive 9-5er, and cautious flyer.</td></tr><tr><td>Diana and Mokhtarian (2009)</td><td>Actual perceived and desired mobility levels</td><td>Cluster analysis</td><td>The desire to travel by different travel modes may be linked more with the modal balance than with one's global mobility patterns</td></tr><tr><td>Cirillo et al. (2011)</td><td>Socioeconomic attributes</td><td>Mixed logit model</td><td>The bus riders highly appreciate reliability; most respondents are uninterested in the information or the personnel attitude.</td></tr><tr><td>Jacques et al. (2013)</td><td>Travel characteristics, trip satisfaction, trip practicality, familiarity and age</td><td>Cluster analysis</td><td>Six groups are identified. Transit users who have a short trip and commuters with a long walk to the station are quite satisfied with train services</td></tr><tr><td>Bordagaray et al. (2014)</td><td>Spatial attributes (i.e., bus line) and socioeconomic characteristics</td><td>Random-ordered probit models</td><td>Each line is perceived differently by its users, who place a different value on different elements.</td></tr><tr><td>Cats et al. (2015)</td><td>Socio-demographic variables and travel habit, and time attributes</td><td>Factor analysis</td><td>Respondents have been increasingly satisfied with the public transport of a decrease in customer service and trip duration.</td></tr><tr><td>De Oña et al. (2016a)</td><td>Socio-demographic and travel characteristics</td><td>A decision tree (CART) approach</td><td>Four clusters are identified according to passenger profiles characterised by different profiles and travel habits.</td></tr><tr><td>De Oña et al. (2016b)</td><td>Time attributes</td><td>Fixed base and chain base methods</td><td>Two periods of service performance are identified: a positive trend from 2008 to 2011, and a negative trend from 2011 to 2013</td></tr><tr><td>Abenoza et al. (2017)</td><td>Combination of their socio-demographic attributes, travel characteristics and accessibility measures</td><td>Ordered logit regression model</td><td>Frequent public transport user segments are more satisfied across the board, while rural motorist commuters are markedly dissatisfied with service operation attributes.</td></tr><tr><td>Grisé and El-Geneidy (2017)</td><td>Socio-demographics and spatial characteristics</td><td>Multi-level regression modelling</td><td>People in the least deprived neighbourhoods have the highest level of satisfaction and vice versa. Satisfaction increases by age; Asian ethnicities were less satisfied with services than mixed ethnicities.</td></tr><tr><td>Allen et al. (2018)</td><td>Travel characteristics, socio-demographic attributes, and time attributes</td><td>Multiple Indicator Multiple Cause approach</td><td>User socio-demographics, travel characteristics, season, and bus operator company affected the perceptions of the different satisfaction constructs</td></tr><tr><td>Abenoza et al. (2018)</td><td>Socio-demographic characteristics, travel characteristics, and area of living</td><td>Latent class cluster model</td><td>Four traveller segments are identified with diverse satisfaction levels in each trip segment</td></tr><tr><td>Grisé and El-Geneidy (2018)</td><td>Socio-demographic variables and accessibility measures</td><td>Factor analysis and K- means cluster analysis</td><td>A total of 7 clusters are identified, and their satisfaction level is also discussed in this study</td></tr><tr><td>Eboli et al. (2018)</td><td>Spatial attributes (i.e., rail stations)</td><td>Geographically Weighted Regression</td><td>The areas where service quality is perceived as lower are in the south-west and north-east of Milan's remote urban area.</td></tr><tr><td>Bellizzi et al. (2020)</td><td>Travel characteristics and socio-demographic attributes</td><td>Mixed Logit models and Latent Class models.</td><td>The bus service quality perceived by potential users are substantially higher than current users</td></tr><tr><td>Luo and He (2021a)</td><td>Spatial and time attributes</td><td>Kernel Density Estimation</td><td>Five significant clusters surrounding central business districts and transportation hubs are identified</td></tr><tr><td>Echaniz et al. (2022)</td><td>Spatial attributes (i.e., bus line) and time attributes</td><td>Best-Worst model</td><td>The lowest level of satisfaction with transit services is found in peripheral areas and during peak hours</td></tr></table>

Only a handful of research has used social media to analyse public opinions on specific topics considering the spatial and temporal perspective. On a broader spatial scale, Mitchell et al. (2013) mapped the happiness variations across the United States with the aid of 10 million geotagged tweets collected from 373 urban areas in the US. They found that happiness within the US varies among cities regarding certain topics such as education and obesity, and they suggested socioeconomic attributes could help explain the variations. On a smaller spatial-temporal scale, Song and Xia (2016) suggested that users' satisfaction level varies among spatial and temporal dimensions by utilising Georeferenced Twitter data in the case of Curtin University, Perth. They revealed some interesting findings, such as the highest percentage of positive Tweets belonging to the social science area. In contrast, science and engineering and dormitory areas had the highest rate of negative postings. Regarding the temporal variation, as the semester progressed, an increasing number of negative Tweets were identified in the library and science and engineering areas, peaking around exam time. Recently, Luo and He (2021a) have revealed that people's perception of transit performance varies among spatial and temporal contexts and highlights the importance of specialised spatial and temporal strategies for transit operators and planners to address public travel needs.

As stated above, the lack of specialised knowledge on customer satisfaction across different market segments may lead us to put too much effort into more expensive but less important service aspects, which may cause unnecessary investments in those areas. Considerable empirical studies have explored factors affecting satisfaction with transit (e.g., Abenoza et al., 2017; Allen et al., 2018), but there is no consensus on what kind of groups should be prioritised due to contextual social structure, travel patterns, and travel attitudes. Furthermore, social media has been recognised as a credible source of public opinion for adoption in various forms of research. However, it has not yet been fully explored when investigating customers' satisfaction during travel. To fill this gap, we have attempted to investigate how customers' satisfaction with transit services varies, considering the user, spatial, and temporal heterogeneity. By utilising social media data, this study would be of particular interest to the public transport department and operators to quantify and evaluate the transit services for different segmented groups efficiently and less expensively.

## 3. Study area and data

Shenzhen, located within the Pearl River Delta, bordering Hong Kong to the south, is selected as the study area. This study divided Shenzhen into four urban contexts (Fig. 1): CBD, urban, suburbs, and outer suburbs. The first two are broad urban areas, while the last two are suburban areas (Guo and He, 2021). Specifically, CBD areas refer to communities where CBDs are located. The urban areas comprised three districts: Luohu acts as the old financial and business centre since the establishment of the Shenzhen Stock Exchange Center in 1991; Futian, is the new urban centre since the release of the 1986 Master plan (Shenzhen Planning Bureau, 1986) in which Futian was selected as the new urban centre; Nanshan, located to the northwest of Deep Bay, serves as the technology and education hub comprising various universities and high-tech industries. According to the fourteenth five-year plan released by Shenzhen government (Shenzhen Municipal People's Government, 2021), several street blocks residing in suburban area would be incorporated into urban core areas for urban expansion, which suggests promising urban development in those areas. To differentiate them with other suburban districts, the suburban area is further divided into suburbs and outer suburbs. The suburbs are mainly from the Bao'an district and Longgang district, where a mix of residential areas and workplaces are located. Outer suburbs are those areas far from the urban areas and are generally equipped with low access to transit resources.

In terms of the travel mode distribution, as of 2016, public transport (including metro and bus) and private cars comprised 48.5% and 41.4% of all daily mechanised trips in Shenzhen, respectively (Shenzhen Urban Transport Planning Centre [SUTPC], 2016). Due to the differences in population structure and access to transit services, urban areas tend to more reply on public transport,and over ${50}\%$ of trips are taken in Luohu, Futian, and Nanshan districts. At the end of 2018, Shenzhen bus services have been expanded to 981 routes, and around 96 per cent of areas are within ${500}\mathrm{\;m}$ of the nearest bus stops (SUTPC,2018). At the same time, Shenzhen metro system has operated eight lines and 168 stations with a total length of ${285}\mathrm{\;{km}}$ .

We collected 1-year Weibo data containing users' messages posted about the metro and bus from July 1, 2018, to June 30, 2019, in Shenzhen, China. The initial Weibo dataset contains 177807 microblogs. After data cleaning, 115632 microblogs are left for further service categorisation. Only a small proportion of Weibo users would fill in their gender and age information. Similarly, about 19% of microblogs are equipped with spatial information such as direct check-in information or place names (e.g., metro/bus station, landmark names) mentioned in the microblogs. Although some passengers mentioned transit services in their microblogs, their emotions reflecting on complaints or appreciation are due to other experiences such as work and conversions. Those microblogs would provide little information and bias with the modelling results. Thus, a manual data filtering process is applied to filter out those unrelated service blogs. Besides, since this study investigates transit services, microblogs posted beyond the operation time (1 a.m.-6 a.m.) are regarded as irrelevant and thus removed from this study. Finally, only 2658 microblogs from 2544 users are retained for further data modelling. Each microblog is equipped with time, location, travel mode, and users' age and gender information. Table 2 shows the number of microblogs left after each step of filtering.

## 4. Methodology

This research aims to identify potential priority target groups characterised by user, spatial, and temporal heterogeneity by social media mining approaches. The main methodology framework is described in Fig. 2. First, the data is collected from Sina Weibo (also known as Chinese Twitter), which has been widely adopted in China. From their annual report, around 462 million monthly active Weibo users are recorded by the end of 2018, roughly one-third of China's total population (Weibo Data Centre, 2019). In terms of age distribution, it is expected that young people are the major user groups: people aged between 18 and 40 account for 80 per cent of all active users. The gender distribution is rather balanced that 57 per cent of users are male.

Table 2

Numbers of microblogs at each stage of the data filtering

<table><tr><td>Data</td><td>Number of microblogs</td></tr><tr><td>Initial dataset</td><td>177,807</td></tr><tr><td>Data cleaning</td><td>115,632</td></tr><tr><td>Dataset after service categorisation</td><td>44,009</td></tr><tr><td>Filtering with users whose gender and age are available</td><td>19,755</td></tr><tr><td>Filtering with microblogs equipped with location information</td><td>3769</td></tr><tr><td>Manually filtering to remove noises unrelated to service performance</td><td>2691</td></tr><tr><td>Removing microblogs posted beyond the metro/bus service operation period</td><td>2645</td></tr></table>

<img src="https://cdn.noedgeai.com/bo_d2u0qb3ef24c73b3056g_3.jpg?x=365&y=1420&w=1017&h=722&r=0"/>

Fig. 1. Urban structure and metro system in Shenzhen.

<img src="https://cdn.noedgeai.com/bo_d2u0qb3ef24c73b3056g_4.jpg?x=358&y=149&w=1035&h=1180&r=0"/>

Fig. 2. Methodology framework to mine Weibo content.

Following some typical social media mining practise (e.g., Gal-Tzur et al., 2014; Kinra et al., 2020), the data collection process refers to a Web Scraping process to retrieve the microblogs dataset and the Weibo user dataset. Then the joined Weibo dataset would be passed to the necessary data cleaning and text preprocessing process. Content analysis categorises unstructured text into different service categories based on those entries. Meanwhile, spatial footprints are identified by check-ins and place names recognised from the text dataset and geocoded as one independent variable. The sentiment analysis tool predicts the dependent variable - customers' satisfaction. Finally, regression models are applied to model the relationship between customer satisfaction attached to different transit services and independent variables, including age, gender, mode, temporal and spatial variables.

### 4.1. Data collection and preprocessing

Weibo allows users to directly search the topics of interest in a confined area and period. Thus, Weibo microblogs and corresponding users' publicly available profiles are collected by a Web scrapping script written by Python. We set the keyword of "metro" 地铁 and "bus" (巴士 or 公交), the study area as Shenzhen, and the period from July 1, 2018, to June 30, 2019. Retweets are removed during the data collection process. The Weibo user dataset was further retrieved by accessing the webpage of each Weibo user's public profile in our dataset.

The data cleaning was applied to filter out duplicated microblogs and microblogs posted by marketing or bot accounts. Here we use three ways to identify these accounts (1) frequency of posts and (2) keyword filtering such as "rent" and "sublease". (3) Randomly select a 2000- microblog sample and manually extract marketing accounts.

The data processing process includes several natural language transformation steps:

1. Conversion of traditional Chinese into simplified Chinese

2. Removal of hyperlinks, punctuations, hashtags, and special characters

3. Removal of stop words

4. Place name recognition from microblogs, including (i) check-ins (ii) names of metro/bus stations and landmarks in Shenzhen

5. Geocode of place names via Google Map API

### 4.2. Service categorisation: content analysis

The raw microblog dataset contains various topics, from which only a handful of topics are related to people's view of transit services (Gal-Tzur et al., 2014). Content analysis is a common tool applied in transportation research to categorise qualitative text data into structured clusters of interest (Casas and Delmelle, 2017; Shin, 2019). To filter the service-related microblogs, we applied a computer-assisted content analysis following a previous work (Luo and He, 2021a) that coded the unstructured microblogs to sorted service attribute categories. Figure A1 in the Appendix shows an example of extracting keyword-frequency lists from Weibo messages. Before the coding process, a customised transit service lexicon was prepared to refer to two review works (Van Lierop et al., 2018; Das and Pandit, 2013) and one empirical study extracting transit service attributes from Tweets (Casas and Delmelle, 2017). Then two domain experts were trained to classify the entire keyword-frequency corpus into a specific transit service category. Meanwhile, the transit service lexicon would be updated during the coding process (i.e., some context-specific service attributes found in our dataset but not mentioned in the literature). Therefore, the coding process was iterative and cyclical, so a microblog could be in several categories. Table 3 lists five main types of service attributes identified in this study.

### 4.3. Sentiment analysis: sentiment knowledge enhanced pre-training (SKEP)

Sentiment analysis is used to predict customers' satisfaction from their microblogs. This study would adopt the Sentiment Knowledge Enhanced Pre-training (SKEP) tool, a freely available tool developed by the Baidu group (Tian et al., 2020), which is a state-of-the-art natural language processing model (especially for Chinese corpora) for sentiment analysis. SKEP is a deep learning model pre-trained on a corpus of over 3.2 million documents covering a large volume of online comments on products, travel, and books and proved to outperform various sentiment analysis benchmarks (especially the Chinese corpus). In contrast to other traditional sentiment analysis methods where different sentiment knowledge (i.e., words, sentiment polarity, and aspect-sentiment pairs) are studied separately for different sentiment tasks, SKEP incorporates this sentiment knowledge into the pre-training process. It thus produces a more unified representation for various sentiment tasks.

Inspired by the Bidirectional Encoder Representations from Transformers (BERT) model, SKEP contains unsupervised sentiment knowledge mining, masking and sentiment pre-training optimisation. Fig. 3 illustrates how SKEP works as the following steps:

(1) Unsupervised Sentiment Knowledge Mining: SKEP extracts sentiment knowledge using a straightforward and intuitive unsupervised approach: point mutual information (PMI), which is widely adopted in information retrieval. PMI generally indicates whether a pair of words are observed together more frequently than separately. The PMI score is calculated by

$$
{PMI}\left( {{x}_{1},{x}_{2}}\right)  = \log \frac{p\left( {{x}_{1},{x}_{2}}\right) }{p\left( {x}_{1}\right)  \bullet  p\left( {x}_{2}\right) }
$$

Where $p\left( \text{.}\right) {referstoprobability}{estimatedbycount}.$

Then the algorithm computes the polarity score of a candidate word ${\mathrm{x}}^{ * }$ is calculated by the difference between all positive seeds and negative seeds.

$$
{WP}\left( {x}^{ * }\right)  = \mathop{\sum }\limits_{{{WP}\left( s\right)  =  + }}{PMI}\left( {{x}^{ * },s}\right)  - \mathop{\sum }\limits_{{{WP}\left( s\right)  =  - }}{PMI}\left( {{x}^{ * },s}\right) 
$$

Table 3

Transit service lexicon for the Weibo dataset.

<table><tr><td>Category</td><td>Subcategory</td><td>Explanation</td></tr><tr><td rowspan="4">Reliability</td><td>Punctuality</td><td>Punctuality of metro</td></tr><tr><td>Transfer</td><td>'transfer' and 'trans' mentioned</td></tr><tr><td>Service hour</td><td>The first and last train mentioned</td></tr><tr><td>Frequency</td><td>Metro headway</td></tr><tr><td>Crowdedness</td><td/><td>Reference to ‘crowdedness.’</td></tr><tr><td>Personnel</td><td/><td>Reference to 'personnel' and 'staff.'</td></tr><tr><td rowspan="2">Comfort</td><td>Cleanliness</td><td>'Cleanliness' mentioned during trip</td></tr><tr><td>Temperature</td><td>Reference to 'hot', 'cold', and 'air conditioning."</td></tr><tr><td rowspan="3">Safety and security</td><td>Safety</td><td>Concerns with safety, crime, theft</td></tr><tr><td>Security</td><td>Security check before swiping into the metro</td></tr><tr><td>check</td><td>gate</td></tr></table>

where $\mathrm{{WP}}\left( {\mathrm{x}}^{ * }\right)$ denotes the polarity score,a positive $\mathrm{{WP}}\left( {\mathrm{x}}^{ * }\right)$ means that ${\mathrm{x}}^{ * }$ is a positive word,while a negative value refers to a negative word.

(2) Sentiment Masking: after extracting the sentiment knowledge G, which includes a set of sentiment words with their polarity scores and aspect-sentiment pairs, SKEP then introduces a masking process to pre-train the transformer encoder to generate a corrupted version of each input sequence to be masked. The masking process involves three steps: aspect-sentiment pair masking, Sentiment words masking, and common token masking.

(3) Sentiment Pre-training optimisation: based on the entries of corrupted token sequences from sentiment masking, a transformer encoder is defined by three sentiment objectives: Sentiment Word prediction (SW), Aspect-Sentiment pairs (AP) prediction, and Word Polarity prediction (WP), to recover masked information from the corrupted version.

### 4.4. Beta regression analysis

A beta regression analysis suitable for the dependent variable between 0 and 1 is then applied to examine the effect of each explanatory and control variable. The dependent variable is the positivity probability measured by sentiment analysis, and the independent variables are space, time and user demographics. To avoid multicollinearity, we checked the Variance Inflation Factor (VIF) of each independent variable, all of which are below 5 .

The function is depicted as follows:

$$
\Pr \left( {y}_{j\left| i\right| }\right)  = \left( {{\alpha }_{0} + {\alpha }_{j\left| i\right| }^{\text{female * }}{y1} + {\alpha }_{j\left| i\right| }^{\text{metro * }}{y2} + {\alpha }_{j\left| i\right| }^{age} * {y3} + {\alpha }_{j\left| i\right| }^{{spatial} * }{y4} + {\alpha }_{j\left| i\right| }^{hour\ *} * {y5}}\right. 
$$

$$
\left. {+{\alpha }_{j\left| i\right| }^{\text{week } * }{y6}}\right) 
$$

where $\Pr \left( {y}_{i}\right)  \in  \left( {0,1}\right)$ denotes the positivity probability of input $i$ -th text. ${\alpha }_{0}$ denotes the intercept. $J$ represents jth service attributes (e.g. crowdedness,safety,reliability) identified from $i$ -th posts in our dataset. The descriptions of independent variables are illustrated in Table 4.

## 5. Results

This section will first present a fundamental descriptive analysis, followed by results from beta regression. The beta regression analysis is conducted by the 'betareg' package in the R environment.

### 5.1. Descriptive analysis

#### 5.1.1. Sample distribution

Fig. 4 presents the summary statistics of the sample distribution, including users' gender, age, travel mode, and spatial and temporal characteristics of the posts. It is expected that social media users tend to be younger, which are dominated by groups of 25-34 (50%) and 18-24 (38%). However, these groups are also the majority of potential public transport users. It is worth noting that Shenzhen is the youngest city in China, and the median age was 31.95 in 2017 (Shenzhen Statistics Bureau, 2017). About 60 per cent of microblogs are posted by women reflecting their sensitivity to travel experience and environment. Metro passengers post 74 per cent of the sample, while 26 per cent of micro-blogs are related to the bus mode. The spatial distribution of microblogs is relatively balanced and distributed in the CBD area (20%), urban area (31%), suburbs (33%), and outer suburbs (16%).

<img src="https://cdn.noedgeai.com/bo_d2u0qb3ef24c73b3056g_6.jpg?x=363&y=150&w=1019&h=335&r=0"/>

Fig. 3. Structure of SKEP (Tian et al., 2020).

Table 4

Descriptions of independent variables used in OLS.

<table><tr><td>Independent variables</td><td>Description</td></tr><tr><td>${\alpha }_{j\left| i\right| }$</td><td>Female (1) versus male (0)</td></tr><tr><td>${\alpha }_{j\left| i\right| }^{\text{metro }}$</td><td>Metro (1) versus bus (0)</td></tr><tr><td>${\alpha }_{j\left| i\right| }^{age}$</td><td>Five factors (i.e., <18, 19-24, 25-34,35-44,45+)</td></tr><tr><td>${\alpha }_{j\left| i\right| }^{spatial}$</td><td>Urban structures are divided into CBD area, urban area, suburbs, and outer suburbs</td></tr><tr><td>${\alpha }_{j\left| i\right| }^{\text{week }}$</td><td>Weekday (1) versus weekend (0)</td></tr><tr><td>${\alpha }_{j\left| i\right| }^{\text{hour }}$</td><td>Three factors: morning peak hour (7-9 AM), evening peak hour (4-7 PM), and non-peak hour</td></tr></table>

#### 5.1.2. Sentiment distribution

This study adopts SKEP for sentiment analysis which would return a sentiment score ranging from 0 to 1 , representing the probability of the text being positive or negative. After sentiment analysis, Fig. 5 illustrates the boxplot of the sentiment distribution among different influential factors. Notably, people tend to be more satisfied during weekends compared to weekdays. Female passengers tend to express more positive experiences than males, while people in urban areas aged 25 and 34 tend to have an average lower positivity value. Finally, two significant "valleys" are observed during the morning peak hour (7-10 a.m.) and evening peak hour (5-8 PM).

### 5.2. Beta regression analysis

According to the beta regression analysis (Table 5), all independent variables, including gender, age, hour time, week of day, and urban forms, significantly affect customer satisfaction. The following sections have further discussed the user, temporal, and spatial heterogeneity.

#### 5.2.1. User heterogeneity

Gender proves to be an essential factor affecting transit users' satisfaction. Women tend to express more positive emotions towards transit services compared to men, except for the service of crowdedness and safety. It is expected that women tend to be unsatisfied with these two services, especially for the service of safety found in our study, as women are practically more vulnerable to crimes. Instead, it is unexpected that women tend to be more optimistic about the overall performance of transit services and the service of reliability, personnel behaviour, and comfort. This contradicts most empirical results that women are generally found to be more negative when evaluating the services, especially for safety (e.g., Allen et al., 2018; Roche-Cerasi et al., 2013).

We interpret that the significance of gender in explaining customer satisfaction found in the model results is due to the polarisation of online sentiment. Fig. 6 compares the probability density function of sentiment distribution by gender for service of overall performance and safety, from which a distinct difference is found between males and females. Fig. 6 (a) shows the density of sentiment distribution for the overall sample. Notably, men have a higher proportion of microblogs expressing negative sentiment (positivity values less than 0.25 ), while women have more microblogs with positive feelings (positivity values greater than 0.75 ). This difference would thus highly affect the regression results in which females show a higher probability of expressing positive feelings towards the transit services than men counterparts.

Despite the polarised sentiment effect, it is relatively comparable for the proportion of less extreme microblogs (sentiment values range from 0.25 to 0.75 between females and males. In this study, 27 per cent of women (430 out of 1587) and 30 per cent of men (321) expressed their satisfaction level falling in this sentiment range. Similar patterns are also found for service of reliability (Fig. 6d), personnel behaviour (Fig. 6e) and comfort (Fig. 6f). By contrast, the perception of safety illustrates a different pattern: females have a higher proportion of extreme negative affect but less proportion of positive affect. This also explains the significant negative effect of gender variables in modelling results.

In terms of age, middle-aged travellers aged between 25 and 44 significantly express more negative affect during travel in reference to young people aged between 18 and 24. We explain there are two possible reasons: (1) this group of people are generally more stressed in a society facing more child- and parent-caring responsibilities, which may affect their satisfaction level on public transport; (2) the majority of this group of people are choice drivers who have owned cars. Thus, they tend to express more negative feelings when taking transit in reference to their travel experience by car.

<img src="https://cdn.noedgeai.com/bo_d2u0qb3ef24c73b3056g_6.jpg?x=369&y=1680&w=1006&h=427&r=0"/>

Fig. 4. Sample distribution.

Note: a*: age group of $< {18}$ ,b*: age group of ${35} - {44}$ ,c*: age group of ${45} +$ .

<img src="https://cdn.noedgeai.com/bo_d2u0qb3ef24c73b3056g_7.jpg?x=210&y=139&w=1329&h=808&r=0"/>

Fig. 5. Box plot of sentiment variation by age, gender, space, hour, and mode. Note: in panel d, microblogs posted outside the transit operation hours are excluded.

Table 5

Sentiment predictions across social, spatial, and temporal factors.

<table><tr><td rowspan="2">Variable</td><td colspan="2">Overall</td><td colspan="2">Crowdedness level</td><td colspan="2">Safety</td><td colspan="2">Reliability</td><td colspan="2">Personnel behaviour</td><td colspan="2">Comfort</td></tr><tr><td>Coef.</td><td>SD</td><td>Coef.</td><td>SD</td><td>Coef.</td><td>SD</td><td>Coef.</td><td>SD</td><td>Coef.</td><td>SD</td><td>Coef.</td><td>SD</td></tr><tr><td>Intercept</td><td>$- {0.344}^{* *  * }$</td><td>0.081</td><td>$- {0.313}^{* * }$</td><td>0.137</td><td>$- {1.127}^{* *  * }$</td><td>0.157</td><td>-0.479</td><td>0.136</td><td>-0.264</td><td>0.206</td><td>$- {0.775}^{* * }$</td><td>0.193</td></tr><tr><td>Gender (ref: male) Female</td><td>0.225***</td><td>0.051</td><td>0.016</td><td>0.085</td><td>$- {0.133}^{* *  * }$</td><td>0.101</td><td>0.173**</td><td>0.087</td><td>0.285**</td><td>0.135</td><td>0.325***</td><td>0.122</td></tr><tr><td colspan="13">Age (ref: 18-24)</td></tr><tr><td><18</td><td>0.026</td><td>0.166</td><td>-0.099</td><td>0.283</td><td>0.157</td><td>0.393</td><td>0.211</td><td>0.292</td><td>-0.445</td><td>0.451</td><td>0.347</td><td>0.344</td></tr><tr><td>25-34</td><td>$- {0.154} *  *  *$</td><td>0.052</td><td>$- {0.165}^{* * }$</td><td>0.084</td><td>-0.148</td><td>0.116</td><td>-0.048</td><td>0.086</td><td>-0.076</td><td>0.138</td><td>$- {0.221}^{ * }$</td><td>0.125</td></tr><tr><td>35-44</td><td>$- {0.226} *  *$</td><td>0.102</td><td>$- {0.512}^{* *  * }$</td><td>0.184</td><td>0.005</td><td>0.162</td><td>-0.246</td><td>0.230</td><td>-0.323</td><td>0.245</td><td>-0.099</td><td>0.254</td></tr><tr><td>45+</td><td>-0.002</td><td>0.185</td><td>$- {0.661} *  *$</td><td>0.324</td><td>0.181</td><td>0.450</td><td>-0.108</td><td>0.348</td><td>0.344**</td><td>0.453</td><td>-0.106</td><td>0.473</td></tr><tr><td colspan="13">Hour (ref: non-peak hour)</td></tr><tr><td>Morning peak hour</td><td>$- {0.185}^{* *  * }$</td><td>0.057</td><td>0.077</td><td>0.089</td><td>-0.070</td><td>0.115</td><td>$- {0.253}^{* *  * }$</td><td>0.096</td><td>$- {0.579} *  *  *$</td><td>0.169</td><td>-0.097</td><td>0.134</td></tr><tr><td>Evening peak hour</td><td>0.060</td><td>0.075</td><td>0.192</td><td>0.139</td><td>-0.099</td><td>0.133</td><td>0.061</td><td>0.140</td><td>0.114</td><td>0.174</td><td>0.235</td><td>0.191</td></tr><tr><td>Temporal (ref: Weekday) Weekend</td><td>${0.088}^{ * }$</td><td>0.062</td><td>0.198*</td><td>0.113</td><td>0.060</td><td>0.115</td><td>0.386***</td><td>0.105</td><td>-0.120</td><td>0.159</td><td>0.391**</td><td>0.158</td></tr><tr><td colspan="13">Spatial (ref: Urban)</td></tr><tr><td>CBD</td><td>0.022</td><td>0.070</td><td>-0.074</td><td>0.112</td><td>0.214</td><td>0.156</td><td>-0.107</td><td>0.117</td><td>0.005</td><td>0.186</td><td>0.100</td><td>0.166</td></tr><tr><td>suburbs</td><td>$- {0.115}^{ * }$</td><td>0.061</td><td>$- {0.164} *  *$</td><td>0.100</td><td>0.160</td><td>0.121</td><td>-0.126</td><td>0.101</td><td>-0.210</td><td>0.165</td><td>-0.012</td><td>0.141</td></tr><tr><td>Outer suburbs</td><td>-0.021</td><td>0.075</td><td>$- {0.270} *  *$</td><td>0.135</td><td>0.018</td><td>0.135</td><td>-0.059</td><td>0.130</td><td>0.251</td><td>0.187</td><td>-0.016</td><td>0.190</td></tr><tr><td colspan="13">Mode (ref: Bus)</td></tr><tr><td>Metro</td><td>0.039</td><td>0.056</td><td>0.054</td><td>0.097</td><td>-0.138</td><td>0.099</td><td>0.056</td><td>0.093</td><td>0.392***</td><td>0.136</td><td>0.132</td><td>0.134</td></tr><tr><td>Pseudo ${\mathrm{R}}^{2}$</td><td>0.030</td><td/><td>0.028</td><td/><td>0.028</td><td/><td>0.046</td><td/><td>0.104</td><td/><td>0.077</td><td/></tr><tr><td>$\mathrm{N}$</td><td>2645</td><td/><td>914</td><td/><td>498</td><td/><td>909</td><td/><td>410</td><td/><td>452</td><td/></tr></table>

*p < 0.1 , **p < 0.05 , ***p < 0.01 .

When taking a closer observation of different services, age tends to have a diverse effect. At first, there is no significant effect of age found for service of safety and reliability. Besides, people over 24 are

particularly unsatisfied with the crowdedness level compared with younger groups. This is expected since elders are physically less endurable to uncomfortable positions for long periods and are thus more sensitive to the cabin environment during travel, such as the crowdedness level. By contrast,people from the ${45} +$ group express a powerful positive emotion for personnel behaviour, echoing previous evidence from Mouwen (2015). On the one hand, it may suggest that this group of people travel more during off-peak hours so that personnel have spare time to solve their problems. On the other, our results may imply that service provider in Shenzhen pays extra attention to the needs of senior passengers.

<img src="https://cdn.noedgeai.com/bo_d2u0qb3ef24c73b3056g_8.jpg?x=209&y=152&w=1335&h=753&r=0"/>

Fig. 6. Probability Density Function of sentiment scores: (a) overall (b) crowdedness (c) safety (d) reliability (e) personnel behaviour (f) comfort.

#### 5.2.2. Temporal heterogeneity

It is expected that travellers would express more positive sentiment during weekends in reference to the weekdays. Similar modelling results are also found for each service attribute except the safety service. There is no significant relationship between travellers' perception of safety and temporal factors irrespective of the hour of day and day of the week. In terms of the variation by the hour of the day, the modelling results align with previous findings (Grisé and El-Geneidy, 2017) that travellers at peak hours are less satisfied with the transit services. Besides, the effect is more significant during morning peak hours, especially for reliability and personnel behaviour service. It is expected that during the morning peak hour, travellers are more concerned about reliability, such as the punctuality and frequency of the train/bus to ensure working on time. The significance found for personnel behaviour during morning peak hours is more associated with complaints about personnel that fail to secure a smooth travel experience, such as ineffective evacuation during disruptions and poor driving skills by the bus driver (Example 1-3).

##### 5.2.2.1. Examples.

1) Shenzhen Line 5, Wuhe Station, blocked so many people in the subway early in the morning. The subway staff were terrible at evacuation. The more you gamble, the more people there will be (Male, 24 years old)

2) Bus 332, arriving at the Shiyan Longxin Village Committee stop. I have been in Shenzhen for ten years, and the first time I encountered a driver smoking on the bus! @Shenzhen Transportation Committee (Male, 28 years old)

3) Shenzhen bus M172's (license plate number tail: 843) driver is too unprofessional ... already running to the station. Could you please open the door? (Female, 28 years old)

#### 5.2.3. Spatial heterogeneity

The result shows that passengers are less satisfied with the overall transit service performance in the suburbs, referring to the CBD area. This finding, to some extent, echoes most empirical findings that higher travel satisfaction is generally found for dwellers in urban areas compared to those who live in the suburban area facing longer travel durations and higher costs (Zhao and Li, 2019; Mouratidis et al., 2019). However, it is rather unexpected that the performance of the suburbs is worse than the outer suburbs in travellers' perceptions. The explanations are from two sides: On the one hand, the population density in the suburbs $\left( {{7562}\mathrm{{per}}{\mathrm{{km}}}^{2}}\right)$ is greater than in the outer suburbs $({4226}$ per ${\mathrm{{km}}}^{2}$ ),representing a higher demand for transit services. Secondly, compared with residents in the outer suburbs, residents in the suburbs may have a higher expectation of transit performance, considering higher land/rent prices and accessibility to transit resources compared to the outer suburbs. Thus, they would quickly get depressed when their expectations have not been addressed.

#### 5.2.4. Other factors

Our results show that, in general, there is no significant preference for mode when people evaluate the services despite a slightly positive coefficient found for metro mode. Passengers are more satisfied with the metro's personnel behaviour than the bus. Appreciation messages to personnel are commonly found to assist during the travel experience. By contrast, passengers' discussion around bus driver behaviour is found with the most negative sentiments in our dataset.

## 6. Discussion and conclusion

The development of appropriate strategies to promote public transport users should be tailored to particular target segments, necessitating a thorough investigation of customers' perceptions and satisfaction and how they vary across different segments. This study builds on the social sensing perspective to develop an alternative big data framework to assess customer satisfaction and understand how it varies across different market segments. We believe our framework could be applied in any service industry to help service providers design tactical strategies and operational policies to increase customer satisfaction and enhance loyalty.

Our sentiment analysis supports most previous studies applying social media data in the transportation field that people tend to express more negative than positive messages towards the transport system (Collins et al., 2013; Haghighi et al., 2018; Schweitzer, 2014). More importantly, the probability density function of the sentiment scores indicates that online emotions are highly polarised: the majority of the sentiment value is concentrated at two tails (sentiment values larger than 0.75 or less than 0.25 ) which show highly positive or negative feelings.

The beta regression results have suggested that user, temporal and spatial heterogeneity are statistically significant predictors for customer satisfaction predicted by sentiment analysis. To better understand the reasoning for those influential factors, we choose the beta regression to further model customer satisfaction with different service attributes. Overall, during morning peak hours on weekdays, male people aged between 25 and 44 tend to be less satisfied with transit service in the suburbs. Specifically, passengers over 24 are less satisfied with the crowdedness level of the transit environment, while people over 45 give more appreciation to personnel behaviour. In addition, passengers are less satisfied with transit services during morning peak hours, mainly focusing on reliability and personnel behaviour. This warrants service providers additional attention for reliability performance such as punctuality, frequency, transfer assistance, and personnel response to better serve passengers during morning peak hours.

This study also highlights the importance of spatial intervention strategies to accommodate customers' specialised travel needs when developing transport policies. Our modelling result suggested that the transit performance in the suburbs is even worse than the outer suburbs in travellers' perceptions due to higher travel needs and higher expectations of service performance. This may call service providers to pri-oritise transit resources or policies in different areas, such as paying additional attention to mitigating the crowdedness level in the suburbs.

Another main contribution of this study is disentangling the effect of polarised sentiment by gender on customer satisfaction detected online, which explains the most unexpected finding for gender: men are observed to deliver more negative emotions during travel than women except for safety concerns. However, it is worth pointing out that not all studies have found a negative value of females when expressing their evaluations of transit services (e.g., Morse and Benjamin, 1996; Delbosc and Currie, 2012; Chou et al., 2011). For instance, Chou et al. (2011) found that female passengers over 30 are more satisfied with high-speed railway and train services in Korea. This study found that men tend to press more polarised negative feelings while less polarised positive feelings than women. Those extreme emotions would highly contribute to the modelling results. Therefore, this finding may be a reference for transit providers to develop strategies specific to addressing online public opinions and leave space for future studies on balancing the highly polarised sentiment into the practical policy decision process.

This research is intrinsically imperfect and underrepresents disadvantaged groups such as elders and low-income groups. Thus, this research essentially models the customer satisfaction expressed online concerning the various user, spatial, and temporal factors. Given that our emotions would be highly affected by online information/emotions, it would be worth investigating how this interaction could affect people's satisfaction during travel. In addition to common representative problems, social media analysis may increase the risk of representing the most active or aggressive groups of people when analysing the polarity of travel satisfaction. Thus, the satisfaction level may be overestimated or underestimated for specific groups. Hence, further studies to correct this bias and apply it in the practical decision process are interesting to explore. Finally, due to the limitation of data availability, more influential factors such as income level, trip purpose, accessibility measures, and travel attitudes are not included in this research. This limitation also explains the relatively low $\mathrm{R}$ square value compared with traditional studies. Further contact with social media users or linking social media platforms with other personal security apps may help compensate for the insufficient data to protect users' privacy in the future (e.g., McCarthy et al., 2016).

## CRediT authorship contribution statement

Shuli Luo: Conceptualization, Methodology, Data curation, Formal analysis, Visualization, Writing - original draft. Sylvia Y. He: Conceptualization, Methodology, Supervision, Writing - review & editing, Funding acquisition. Susan Grant-Muller: Writing - review & editing. Linqi Song: Writing - review & editing.

## Data availability

The authors do not have permission to share data. References

<img src="https://cdn.noedgeai.com/bo_d2u0qb3ef24c73b3056g_9.jpg?x=199&y=1506&w=1321&h=584&r=0"/>

Fig. A1. Example of extracting keyword-frequency list from a Weibo message

Abenoza, R.F., Cats, O., Susilo, Y.O., 2017. Travel satisfaction with public transport: determinants, user classes, regional disparities and their evolution. Transport. Res. Pol. Pract. 95, 64-84.

Abenoza, R.F., Ettema, D.F., Susilo, Y.O., 2018. Do accessibility, vulnerability, opportunity, and travel characteristics have uniform impacts on the traveler's experience? Transport. Res. Pol. Pract. 114, 38.

Allen, J., Muñoz, J.C., de Dios Ortúzar, J., 2018. Modelling service-specific and global transit satisfaction under travel and user heterogeneity. Transport. Res. Pol. Pract. 113, 509-528.

Anik, M.A.H., Sadeek, S.N., Hossain, M., Kabir, S., 2020. A framework for involving the young generation in transportation planning using social media and crowd sourcing. Transport Pol. 97, 1-18.

Bellizzi, M.G., dell'Olio, L., Eboli, L., Mazzulla, G., 2020. Heterogeneity in desired bus service quality from users' and potential users' perspective. Transport. Res. Pol. Pract. 132, 365-377.

Bordagaray, M., dell'Olio, L., Ibeas, A., Cecín, P., 2014. Modelling user perception of bus transit quality considering user and service heterogeneity. Transportmetrica: Transport. Sci. 10 (8), 705-721.

Casas, I., Delmelle, E.C., 2017. Tweeting about public transit-gleaning public perceptions from a social media microblog. Case Stud. Transport Pol. 5 (4), 634-642.

Cats, O., Abenoza, R.F., Liu, C., Susilo, Y.O., 2015. Evolution of satisfaction with public transport and its determinants in Sweden: identifying priority areas. Transport. Res. Rec. 2538 (1), 86-95.

Chou, J.S., Kim, C., Kuo, Y.C., Ou, N.C., 2011. Deploying effective service strategy in the operations stage of high-speed rail. Transport. Res. E Logist. Transport. Rev. 47 (4), 507-519.

Cirillo, C., Eboli, L., Mazzulla, G., 2011. On the asymmetric user perception of transit service quality. Int. J. Sustain. Transport. 5 (4), 216-232.

Coghlan, A., Pearce, P., 2010. Tracking affective components of satisfaction. Tourism Hospit. Res. 10 (1), 42-58.

Collins, C., Hasan, S., Ukkusuri, S.V., 2013. A novel transit rider satisfaction metric: rider sentiments measured from online social media data. J. Public Transport. 16 (2), 2.

Das, S., Pandit, D., 2013. Importance of user perception in evaluating level of service for bus transit for a developing country like India: a review. Transport Rev. 33 (4), 402-420.

De Oña, J., De Oña, R., Eboli, L., Mazzulla, G., 2016a. Index numbers for monitoring transit service quality. Transport. Res. Pol. Pract. 84, 18-30.

De Oña, J., De Oña, R., López, G., 2016b. Transit service quality analysis using cluster analysis and decision trees: a step forward to personalised marketing in public transportation. Transportation 43 (5), 725-747.

De Vos, J., Schwanen, T., Van Acker, V., Witlox, F., 2013. Travel and subjective wellbeing: a focus on findings, methods and future research needs. Transport Rev. 33 (4), 421-442.

Delbosc, A., Currie, G., 2012. Modelling the causes and impacts of personal safety perceptions on public transport ridership. Transport Pol. 24, 302-309.

Dell'Olio, L., Ibeas, A., Cecín, P., 2010. Modelling user perception of bus transit quality. Transport Pol. 17 (6), 388-397.

Diana, M., Mokhtarian, P.L., 2009. Grouping travelers on the basis of their different car and transit levels of use. Transportation 36 (4), 455-467.

Eboli, L., Mazzulla, G., 2010. How to capture the passengers' point of view on a transit service through rating and choice options. Transport Rev. 30 (4), 435-450.

Eboli, L., Forciniti, C., Mazzulla, G., 2018. Spatial variation of the perceived transit service quality at rail stations. Transport. Res. Pol. Pract. 114, 67-83.

Echaniz, E., Cordera, R., Rodriguez, A., Nogués, S., Coppola, P., dell'Olio, L., 2022. Spatial and temporal variation of user satisfaction in public transport systems. Transport Pol. 117, 88-97.

El-Diraby, T., Shalaby, A., Hosseini, M., 2019. Linking social, semantic and sentiment analyses to support modeling transit customers' satisfaction: towards formal study of opinion dynamics. Sustain. Cities Soc. 49, 101578.

Gal-Tzur, A., Grant-Muller, S.M., Kuflik, T., Minkov, E., Nocera, S., Shoor, I., 2014. The potential of social media in delivering transport policy goals. Transport Pol. 32, 115-123.

Grisé, E., El-Geneidy, A., 2017. Evaluating the relationship between socially (dis) advantaged neighbourhoods and customer satisfaction of bus service in London, UK. J. Transport Geogr. 58, 166-175.

Grisé, E., El-Geneidy, A., 2018. Where is the happy transit rider? Evaluating satisfaction with regional rail service using a spatial segmentation approach. Transport. Res. Pol. Pract. 114, 84-96.

Guo, Y., He, S.Y., 2021. Perceived built environment and dockless bikeshare as a feeder mode of metro. Transport. Res. Transport Environ. 92, 102693.

Haghighi, N.N., Liu, X.C., Wei, R., Li, W., Shao, H., 2018. Using Twitter data for transit performance assessment: a framework for evaluating transit riders' opinions about quality of service. Public Transport 10 (2), 363-377.

Jacques, C., Manaugh, K., El-Geneidy, A.M., 2013. Rescuing the captive [mode] user: an alternative approach to transport market segmentation. Transportation 40 (3), 625-645.

Jiang, B., Thill, J.C., 2015. Volunteered Geographic Information: towards the establishment of a new paradigm. Comput. Environ. Urban Syst. 53, 1-3.

Kinra, A., Beheshti-Kashi, S., Buch, R., Nielsen, T.A.S., Pereira, F., 2020. Examining the potential of textual big data analytics for public policy decision-making: a case study with driverless cars in Denmark. Transport Pol. 98, 68-78.

Kuflik, T., Minkov, E., Nocera, S., Grant-Muller, S., Gal-Tzur, A., Shoor, I., 2017. Automating a framework to extract and analyse transport related social media content: the potential and the challenges. Transport. Res. C Emerg. Technol. 77, 275-291.

Lock, O., Pettit, C., 2020. Social media as passive geo-participation in transportation planning-how effective are topic modeling & sentiment analysis in comparison with citizen surveys? Geo Spatial Inf. Sci. 23 (4), 275-292.

Luo, S., He, S.Y., 2021a. Using data mining to explore the spatial and temporal dynamics of perceptions of metro services in China: the case of Shenzhen. Environ. Plann. B: Urban Anal. City Sci. 48 (3), 449-466.

Luo, S., He, S.Y., 2021b. Understanding gender difference in perceptions toward transit services across space and time: a social media mining approach. Transport Pol. 111, 63-73.

Luong, T.T., Houston, D., 2015. Public opinions of light rail service in Los Angeles, an analysis using Twitter data. In: iConference 2015 Proceedings, 2-5(2015), Newport Beach, USA, March 24-27 2015.

McCarthy, O.T., Caulfield, B., O'Mahony, M., 2016. Technology engagement and privacy: a cluster analysis of reported social network use among transport survey respondents. Transport. Res. C Emerg. Technol. 63, 195-206.

Mitchell, L., Frank, M.R., Harris, K.D., Dodds, P.S., Danforth, C.M., 2013. The geography of happiness: connecting twitter sentiment and expression, demographics, and objective characteristics of place. PLoS One 8 (5), e64417.

Mogaji, E., Erkan, I., 2019. Insight into consumer experience on UK train transportation services. Travel Behav. Soc. 14, 21-33.

Morse, L.B., Benjamin, J.M., 1996. Analysis of feeling of security on public transit among residents of small urban area. Transport. Res. Rec. 1557 (1), 28-31.

Mouratidis, K., Ettema, D., Næss, P., 2019. Urban form, travel behavior, and travel satisfaction. Transport. Res. Pol. Pract. 129, 306-320.

Mouwen, A., 2015. Drivers of customer satisfaction with public transport services. Transport. Res. Pol. Pract. 78, 1-20.

Pang, B., Lee, L., 2004. A Sentimental Education: Sentiment Analysis Using Subjectivity Summarisation Based on Minimum Cuts. arXiv preprint cs/0409058.

Pearce, P.L., 2005. Tourist Behaviour: Themes and Conceptual Schemes. Channel View Publications.

Rashidi, T.H., Abbasi, A., Maghrebi, M., Hasan, S., Waller, T.S., 2017. Exploring the capacity of social media data for modelling travel behaviour: opportunities and challenges. Transport. Res. C Emerg. Technol. 75, 197-211.

Roche-Cerasi, I., Rundmo, T., Sigurdson, J.F., Moe, D., 2013. Transport mode preferences, risk perception and worry in a Norwegian urban population. Accid. Anal. Prev. 50, 698-704.

Schweitzer, L., 2014. Planning and social media: a case study of public transit and stigma on Twitter. J. Am. Plann. Assoc. 80 (3), 218-238.

Shenzhen Municipal People's Government, 2021. In: Shenzhen's 14th Five-Year Plan (2021-2025) for National Economic and Social Development and Vision 2035 of Shenzhen. Retrieved from. http://www.cnbayarea.org.cn/attachment/0/3/3527/448485.pdf.

Shenzhen Planning Bureau, 1986. In: The General Planning of Shenzhen Special Economic Zone 1986. Retrieved from. https://www.shenzhenmuseum.com/museum/html/collections/collection_detail.html?resId=e224c95 d549248b5b02aefd01745a6ex&resType=CmsCollection&lmType=L0302.

Shenzhen Statistics Bureau, 2017. In: Shenzhen Social Gender Statistics Report in 2017. Retrieved from. http://www.sz.gov.cn/attachment/0/62/62974/1333646.pdf.

Shenzhen Urban Transport Planning Centre, 2016. Shenzhen Transportation Ann. Rep. 2016. Retrieved from. http://jtys.sz.gov.cn/pcjt/jbqk/yytj/201709/P02017111 5562961369723.pdf.

Shenzhen Urban Transport Planning Centre, 2018. Shenzhen Transportation Ann. Rep. 2018 Retrieved from http://jtys.sz.gov.cn/pcjt/jbqk/szjtys/201909/P0201909 11580872299687.pdf.

Shiftan, Y., Outwater, M.L., Zhou, Y., 2008. Transit market research using structural equation modeling and attitudinal market segmentation. Transport Pol. 15 (3), 186-195.

Shin, E.J., 2019. What can We learn from online reviews? Examining the reviews of Los Angeles metro rail stations. J. Plann. Educ. Res. https://doi.org/10.1177/0739456 X19870261.

Singleton, P.A., Clifton, K.J., 2019. Towards measures of affective and eudaimonic subjective well-being in the travel domain. Transportation 48, 303-336.

Song, Z., Xia, J.C., 2016. Spatial and temporal sentiment analysis of twitter data. Eur. Handb. Crowdsourced Geofrph. Inform. 205.

Tian, H., Gao, C., Xiao, X., Liu, H., He, B., Wu, H., et al., 2020. SKEP: Sentiment Knowledge Enhanced Pre-training for Sentiment Analysis. arXiv preprint arXiv: 2005.05635.

Van Lierop, D., El-Geneidy, A., 2017. A new market segmentation approach: evidence from two Canadian cities. J. Public Transport. 20 (1), 20-43.

Van Lierop, D., Badami, M.G., El-Geneidy, A.M., 2018. What influences satisfaction and loyalty in public transport? A review of the literature. Transport Rev. 38 (1), 52-72.

Weibo Data Centre, 2019. Weibo User Development Report. Retrieved from. https:// data.weibo.com/report/reportDetail?id=433.

Zhao, P., Li, P., 2019. Travel satisfaction inequality and the role of the urban metro system. Transport Pol. 79, 66-81.

