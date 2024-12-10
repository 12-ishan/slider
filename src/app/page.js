"use client"
import { useEffect } from "react";
import SliderOne from './components/SliderOne';



export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://widgets.in8.nopaperforms.com/emwgts.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <section className="top-strip-section">
        <div className="container">
          <div className="row">
            <p>Applications submitted by 30<sup>th</sup> June are eligible to participate in free bridge classes | <strong><a href="#apply-now">Apply Now</a></strong>
            </p>
          </div>
        </div>
      </section>

<div className="header" id="myHeader">
<section className="menu-section">
<div className="container">
<div className="row">
<div className="col-md-3">
<a href="#why-choose"><img src="/assets/images/logo.png" alt="" title=""/></a>
</div>
<div className="col-md-9">
<nav>
<div className="button">
<a href="#apply-now">Apply Now</a>
</div>
<input className="nav-tooggle" id="nav_toogle" type="checkbox"/>
<label className="nav-container" htmlFor="nav_toogle">
<div className="nav-button"></div>
</label>
<ul className="nav-menu">
<li><a href="#program-overview">Program Overview</a></li>
<li><a href="#eligibility">Eligibility</a></li>
<li><a href="#curriculum">Curriculum</a></li>
<li><a href="#faculty">Faculty</a></li>
<li><a href="#alumni">Alumni</a></li>
<li><a href="#placements">Placements</a></li>
<li className="menu-last"><a href="#apply-now">Apply Now</a></li>
</ul>
</nav>
</div>
</div>
</div>
</section>
</div>


<section className="banner-section content" id="apply-now">
<div className="row">
<div className="col-md-8">

<div className="slider multiple-items1">
<SliderOne/>
{/* <div>
<img src="/assets/images/creating-next-gen-policy-leaders-for-a-rising-india-banner.jpg" alt="" title=""/>
<img src="/assets/images/creating-next-gen-policy-leaders-for-a-rising-india-banner-new.jpg" alt="" title="" className="banner-pic"/>
</div>

<div>
<img src="/assets/images/our-uchicago-collaboration-banner.jpg" alt="" title=""/>
<img src="/assets/images/our-uchicago-collaboration-banner-new.jpg" alt="" title="" className="banner-pic"/>
</div>

<div>
<img src="/assets/images/learn-from-our-unmatched-faculty-banner.jpg" alt="" title=""/>
<img src="/assets/images/learn-from-our-unmatched-faculty-banner-new.jpg" alt="" title="" className="banner-pic"/>
</div>

<div>
<img src="/assets/images/lead-policy-change-with-our-partners-banner.jpg" alt="" title=""/>
<img src="/assets/images/lead-policy-change-with-our-partner-banner-new.jpg" alt="" title="" className="banner-pic"/>
</div> */}

</div>
{/* <!--<h1><strong>Lorem ipsum dolor sit amet</strong></h1>
<h2><strong>Lorem ipsum dolor sit amet</strong></h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
<a href="#">Apply Now</a> <img src="images/batch-6.png" alt="" title="">--> */}
</div>
<div className="col-md-4 form">
<h2 className="title"><strong>Apply Now</strong></h2>
<div className="npf_wgts" data-height="400px" data-w="8417287f452384d5dd9c9dbc544a4129"></div>

</div>
</div>
</section>


<section className="year-section">
<div className="container">
<div className="row">
<div className="col-md-4 starts-on">
<img src="/assets/images/starts-on.png" alt="" title=""/>
<p>Starts On<br/>  
<strong>22 July 2024</strong></p>
</div>
<div className="col-md-4">
<img src="/assets/images/duration.png" alt="" title=""/>
<p>Duration<br/>  
<strong>1  Year</strong></p>
</div>
<div className="col-md-4 format">
<img src="/assets/images/format.png" alt="" title=""/>
<p>Format<br/> 
<strong>Full Time</strong></p>
</div>
</div>
</div>
</section>


<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css'/>

<section className="new-section">
<div className="container">
<h1 className="title" id="why-choose"><strong>Why choose ISPP’s One year programme in Public Policy?</strong></h1>
<div className="row">
<div className="col-md-8">

<div className="site-wrapper container">

<div className="mySlider row">
<div className="mySlider__item col-lg-6 col-md-6">
<div className="card">
<div className="box">
<span><img src="/assets/images/an-opportunity-to-get-an-additional-certificate-from-the-harris-school-of-public-policy-and-a-scholarship-to-study-there.png" alt="" title=""/></span>
<p>An opportunity to get an additional certificate from the <strong>Harris School of Public Policy </strong> and a scholarship to study there.</p>
</div>
</div>
</div>
{/* <!-- END ITEM --> */}
<div className="mySlider__item col-lg-6 col-md-6">
<div className="card">
<div className="box">
<span><img src="/assets/images/taught-by-experts-with-decades-of-experience-at-the-ministry-of-finance-niti-aayog-jubilant-bhartia-group-aser-centre.png" alt="" title=""/></span>
<p>Taught by experts with decades of experience at the <strong>Ministry of Finance</strong>, <strong>Niti Aayog</strong>, Jubilant Bhartia Group, Aser Centre</p>
</div>
</div>
</div>
{/* <!-- END ITEM --> */}
<div className="mySlider__item col-lg-6 col-md-6">
<div className="card">
<div className="box">
<span><img src="/assets/images/opportunity-to-network-and-work-with-leaders-from-consulting-corporates-governments-and-non-profits.png" alt="" title=""/></span>
<p>Opportunity to network and work with leaders from <strong>consulting</strong>, <strong>corporates</strong>, <strong>governments</strong>, and <strong>non-profits</strong></p>
</div>
</div>
</div>
{/* <!-- END ITEM --> */}
<div className="mySlider__item col-lg-6 col-md-6">
<div className="card">
<div className="box">
<span><img src="/assets/images/a-comprehensive-public-policy-curriculum-that-compresses-two-years-of-coursework-into-one-year.png" alt="" title=""/></span>
<p>A comprehensive public policy curriculum that compresses two years of coursework into one year</p>
</div>
</div>
</div>
{/* <!-- END ITEM --> */}
</div>
</div>

</div>
<div className="col-md-4">
<div className="video">



<iframe data-src="https://www.youtube.com/embed/qRlqk-bWU6Y?feature=oembed" allowFullScreen="" frameBorder="0" width="500" height="281"></iframe>
</div>
</div>
</div>
</div>
</section>


<section className="program-overview-section" id="program-overview">
<div className="container">
<div className="row">
<div className="col-md-8">
<h2 className="title"><strong>Programme Overview</strong></h2>
<div className="site-wrapper">

<div className="row mySlider1">
<div className="mySlider__item col-lg-12 col-md-12 program-overview-new">
<div className="card">
<div className="program-overview">
<img src="/assets/images/programme-overview-1.png" alt="" title=""/>
<p>The programme is divided into 7 terms of 7 weeks each, with a capstone and internship report due at the end of the programme</p>
</div>
<div className="program-overview">
<img src="/assets/images/programme-overview-2.png" alt="" title=""/>
<p>Scholars have the option to choose from seven domains for further studies in Education, Environment, Food Systems and Rural Development, Health, Infrastructure, Technology, and Urbanisation</p>
</div>
</div>
</div>
{/* <!-- END ITEM --> */}
<div className="mySlider__item col-lg-12 col-md-12 program-overview-new">
<div className="card">
<div className="program-overview">
<img src="/assets/images/programme-overview-3.png" alt="" title=""/>
<p>Opportunity to engage with leaders in the samaj, sarkar, and bazaar in small-group closed-door discussions through Tea and Policy sessions at the campus</p>
</div>
<div className="program-overview">
<img src="/assets/images/programme-overview-4.png" alt="" title=""/>
<p>Workshops with business leaders, senior bureaucrats, and internationally renowned academicians to impart problem-solving, critical thinking and leadership skills</p>
</div>
</div>
</div>
{/* <!-- END ITEM --> */}

<div className="mySlider__item col-lg-12 col-md-12 program-overview-new">
<div className="card">
<div className="program-overview">
<img src="/assets/images/programme-overview-5.png" alt="" title=""/>
<p>Scholars get the opportunity to opt for Immersive Learning Experiences where they work with organisations/corporations on live projects and apply learnings from the classroom to solving contemporary policy challenges</p>
</div>
<div className="program-overview">
<img src="/assets/images/programme-overview-6.png" alt="" title=""/>
<p>Dedicated career support and training with workshops and training sessions by leaders from the corporate and consulting space.</p>
</div>
</div>
</div>
{/* <!-- END ITEM --> */}
</div>
</div>
</div>
<div className="col-md-4 program-overview-content">
<h2><strong>Scholars Journey With The Harris School</strong></h2>

<div className="site-wrapper container">

<div className="row mySlider1">
<div className="mySlider__item col-lg-12 col-md-12 program-overview-new">
<div className="card">
<div className="program-overview">
<img src="/assets/images/ispp-scholars-journey-with-the-harris-school.jpg" alt="" title=""/>
</div>
</div>
</div>
{/* <!-- END ITEM --> */}
<div className="mySlider__item col-lg-12 col-md-12 program-overview-new">
<div className="card">
<div className="program-overview">
<img src="/assets/images/uchicago-partnership.jpg" alt="" title=""/>
</div>
</div>
</div>
{/* <!-- END ITEM --> */}

</div>
</div>

</div>
<div className="button">
<a href="#apply-now"><strong>Apply Now</strong></a>
</div>
</div>
</div>
</section>


<section className="eligibility-section" id="eligibility">
<div className="container">

<div className="row">
<h2 className="title"><strong>Eligibility</strong></h2>
<div className="site-wrapper container">

<div className="mySlider row">
<div className="mySlider__item col-lg-6 col-md-6 eligibility-new">
<div className="card">
<div className="eligibility">
<span><img src="/assets/images/icon-5.png" alt="" title=""/></span>
<p>Graduates from any discipline from Indian or international universities</p>
</div>
<div className="eligibility">
<span><img src="/assets/images/icon-6.png" alt="" title=""/></span>
<p>Final-year undergraduate students can apply but must complete their degree before programme commencement</p>
</div>
</div>
</div>
{/* <!-- END ITEM --> */}
<div className="mySlider__item col-lg-6 col-md-6 eligibility-new">
<div className="card">
<div className="eligibility">
<span><img src="/assets/images/icon-7.png" alt="" title=""/></span>
<p>Young professionals with up to 4 years of work experience can apply</p>
</div>
<div className="eligibility">
<span><img src="/assets/images/icon-8.png" alt="" title=""/></span>
<p>No specific skills or technical background is required, except for numerical literacy and language proficiency</p>
</div>
</div>
</div>

</div>
</div>
</div>
</div>
</section>

<section className="curriculum-section" id="curriculum">
<div className="container">
<div className="row">
<div className="col-md-8">
<h2 className="title"><strong>Curriculum</strong></h2>
<p>At ISPP, we believe in a holistic approach to policy, design and management which is based on the five pillars of Skills (S), Political Economy (P), Ethics (E), Leadership (L), and Lifelong learning (L). We have integrated the SPELL framework in designing the curriculum and the overall learning environment at the institution. This is implemented through the courses, mini-courses, workshops and labs, and domains.</p>

<div className="curriculum">
	

<button className="accordion-main accordion-cus">Courses</button>
<div className="panel-main">
<button className="accordion">Critical Thinking</button>
<div className="panel">
<p>Critical thinking is the ability to evaluate an argument. An argument attempts to persuade someone that a claim is true by giving reasons. Arguments proliferate in scholarly, civic, and personal discourse. Participants of this course will learn the tools and language that philosophers, lawyers, and rhetoricians use to reflect on such questions. What makes for a good argument? Should I be persuaded? Will others be persuaded?</p>
</div>

<button className="accordion">Design Thinking</button>
<div className="panel">
<p>Design has been defined variously as a ‘User-led problem-solving process’ or a ‘Human-centred opportunity-resolution journey’. Design goes beyond aesthetics and is about evolution and progress; the underlying force behind creating compelling new things, new policies, new services, new brands, and even new business models. Design is about discovering what people really want or need and translating insights into great solutions. Design Thinking or User-Centered Innovation, is not the exclusive preserve of Designers. It is an approach that deploys a high degree of empathy and collaborative spirit to solve complex challenges and create ideas with enduring value. During the course, we will also select a public policy challenge and learn how to empathise with users, generate ideas to solve the problem, prioritise and select, and develop a prototype for the new solution.</p>
</div>

<button className="accordion">Structures of Government</button>
<div className="panel">
<p>This course explores the intricacies of governmental structure. It has been designed to provide a comprehensive understanding of how public systems are organised and function. Through engaging and interactive sessions, participants will delve into the various roles and the critical importance of government, the different forms it can take, and its organisational staffing. The course also covers the operational aspects of government in discharging its diverse functions, provides insights into key government personnel, and explores the roles of several significant government organisations. This course is essential for anyone looking to gain a deep and practical understanding of the mechanisms that drive public governance.</p>
</div>

<button className="accordion">Business and Government</button>
<div className="panel">
<p>This course delves into the complex interplay between business and government. It has been designed to unravel the motivations behind government actions and offers a dual perspective on critical issues such as trade, environment, food security, and health from economic and political viewpoints. Scholars will learn to formulate and integrate an organisation’s market and non-market strategies, understanding how these can be influenced by and how they can influence government policymaking. The curriculum covers various essential topics, including market failure, the problem of collective action, the roles of various governance systems, and the distinct dynamics of economic and political analyses. Participants will also examine the influence of interest groups like producers, consumers, associations, and unions, and understand how issues such as tariffs, environmental regulations, corporate bailouts, poverty, and education emerge and evolve in public discourse. This course equips scholars with the tools to anticipate policy changes and effectively shape policy outcomes, aligning organisational strategies with current and anticipated government policies.</p>
</div>

<button className="accordion">Economics</button>
<div className="panel">
<p>Economics is the study of decision making under scarce resources, i.e., how economic entities decide on spending their resources to attain their economic objectives. Given scarce resources, these entities are limited in how much they can spend on any one activity, as whatever they spend on an activity is not available to be spent on another activity. This course will focus entirely on decisions made by individual entities like consumers and producers, both when faced with uncertainty and when not.</p>
</div>

<button className="accordion">Economics of Public Policy</button>
<div className="panel">
<p>This course explores the profound impact of public policy on economic systems The objective is to familiarise scholars with the essentials of an economic system and how various public policy instruments influence it. Participants will delve into the basic concepts and analytical frameworks of Macroeconomics and Public Finance, providing a robust foundation for understanding fiscal and monetary policies. The course critically examines specific policy measures implemented in India, assessed through the conceptual lens introduced in the sessions. Additionally, scholars will engage with case studies that explore specific objectives and the practical application of public policies. This comprehensive approach ensures a deep and practical understanding of the economic implications of public policy, making it an essential course for those looking to navigate and influence economic policy effectively.</p>
</div>

<button className="accordion">Game Theory</button>
<div className="panel">
<p>This course explores the strategic intricacies of human interaction. It has been designed to apply rigorous analytical techniques to various economic, social, political, business, and legal issues. Scholars will delve into key concepts such as backward induction, Nash equilibrium, the dynamic between self-interest and collective interest, the mechanisms of credible commitments, and both simultaneous and sequential games of complete and incomplete information. The course also covers repeated games and the application of game theory to economic development. Highlighting the work of several Nobel Laureates in Economics, the course showcases the profound impact of game theory from 1994 to 2017. By understanding games—defined by their players, rules, strategies, information, and payoffs—students will learn to predict outcomes and devise optimal strategies in scenarios ranging from cooperation and bargaining to auctions, pricing, and political competition, all crucial for navigating complex modern challenges in a variety of settings.</p>
</div>

<button className="accordion">Law & Economics</button>
<div className="panel">
<p>The Law and Economics course is designed to make scholars understand the role of law in public policy for achieving social goals from an economist&rsquo;s viewpoint. Through the course, the scholars will understand the normative aspects of law and economics and the interplay between legal and economic principles. The course will also cover the law&rsquo;s role in generating social value through market-driven transactions. The course would look at various laws from an economic perspective, such as the economics of Private Property Law, Intellectual Property Law, Contract Law, and Tort Law. Along with this, the course will also cover the economic relevance of legal compensations, punishments, and regulations.</p>
</div>

<button className="accordion">Management of Societies</button>
<div className="panel">
<p>Dive into the dynamic interplay of management, laws, and institutions in our course on the evolution of societal structures. This course starts by exploring how societies manage diverse interests through a mix of centralisation and decentralisation, which is crucial for thriving and defending against threats. We trace the historical ascent of legal systems and governance structures, from ancient kingships to modern democracies, focusing on case studies including the Maurya Empire, ancient Athens, and modern India. Leveraging game-theoretic reasoning and political philosophy, the course analyses the creation and evolution of laws and institutions based on the power dynamics of their proponents and opponents. Highlighting influential texts from Aristotle&rsquo;s Politics to Chanakya&rsquo;s Arthashastra and modern political analysis, the curriculum underscores the enduring relevance of the Great Books, providing a deep understanding of how democratic systems and institutional frameworks influence societal outcomes. This comprehensive approach fosters independent thinking and equips scholars with the analytical tools to evaluate and influence contemporary governance and policy issues.</p>
</div>

<button className="accordion">Markets for Development</button>
<div className="panel">
<p>This course delves into the dynamics of policy tools focusing on &rdquo;Samaaj, Sarkaar, and Bazaar&rdquo; (Society, Government, and Market), where we explore the advantages and limitations of each. This course critically examines the common reliance on markets to address societal problems and the frequent occurrences of market failures. When markets falter, the typical shift is towards societal or governmental interventions. This course will teach you how these failures can be reinterpreted and markets redesigned to better fulfil their potential, particularly in serving marginalised communities and regions. We will investigate the &rdquo;Markets for the Poor&rdquo; (M4P) approach, demonstrating how markets can enhance or replace government services (M4G), sustainable management of natural resources (M4N), address market failures (M4F), and operate in traditionally non-market areas like organ transplants (M4U). Prepare to challenge conventional perspectives on markets, exploring concepts of missing, failing, undefendable, and empowering markets, and designing effective market-based solutions using the M4PUFNG approach (Markets for the Poor, Undefendables, (market) Failures, Natural Resources, and Government Goods and Services). This course promises to introduce radical ideas that will both shock and enlighten.</p>
</div>

<button className="accordion">Politics of Public Policy</button>
<div className="panel">
<p>Public Policy is any action that affects the lives of citizens. However, the process is a complicated one which begins by developing an understanding of the context under which the situation emerged. Next, one needs to understand the reasons behind the issue gaining prominence and understanding the sources, tools, institutions, and people behind it. Thus, an interaction of various events, variables, resources, and other socio-economic and political factors follows. This is where the politics of public policy comes into play. It is both an art and a science that requires an astute understanding of the motivations of each actor and their possible actions and reactions. By navigating these complexities, policymakers can ensure that public policy decisions are informed and effective in improving the lives of citizens.</p>
</div>

<button className="accordion">Statistics Part I</button>
<div className="panel">
<p>This course on Statistical Analysis for Policy Research is designed for scholars of public policy to develop an understanding of the importance of data and data analysis in policy formulation and research. It aims to develop statistical thinking among the learners and essential skills such as data summarisation, data presentation and visualisation, and model fitting for establishing causal relationships. The course aims to equip the learners with essential skills for sampling techniques, statistical inference, and hypothesis testing. It covers the practical tools of linear regression analysis by explaining the concepts of dependent, explanatory, and control variables. The course aims to develop a working knowledge of Microsoft Excel for day-to-day statistical policy research analysis.</p>
</div>

<button className="accordion">Statistics Part II</button>
<div className="panel">
<p>This course on Statistical Analysis for Policy Research -II is designed for public policy scholars to understand the essential tools of statistical inference and establish causal relationships among the policy research variables. It begins with a discussion of one and two-way ANOVA, then moves on to explain the concept of multiple regression with emphasis on the essential condition of ‘Cetris Paribas’ with regard to multiple regression. It provides functional knowledge of three ways of conducting multiple regression analysis: simultaneous, sequential, and step-wise. It uses qualitative information such as ‘Gender’ in regression analysis, and qualitative dependent variables using a binary logistic regression model. It also introduces the concepts of path analysis and panel data modelling.</p>
</div>

</div>

	</div>
	
<div className="curriculum">

	<button className="accordion-main accordion-cus">Mini-Courses</button>

<div className="panel-main">
<button className="accordion">Econometrics</button>
<div className="panel">
<p>Through a policy evaluation exercise, this mini-course will review the relevant concepts of probability and statistics (specifically, random sample, random variable, probability distribution function, conditional probability, and the expectation operator). The course will then study the statistical models often used to test theoretical economic relationships, analyse historical economic events, and evaluate policy. Simple and multiple regression using ordinary least squares will be covered in detail. The course will cover basic statistical inference and diagnostic tools for these models. Maximum likelihood and generalised least squares estimation techniques will be introduced. Time-allowing, the course will cover an introduction to the logistic regression model to handle discrete or qualitative choice variables (e.g., Yes/No choice scenarios) and basic time-series analyses.</p>
</div>

<button className="accordion">Monitoring and Evaluation</button>
<div className="panel">
<p>Explore the fundamentals of Monitoring and Evaluation (M&E) in this mini-course, which is designed to enhance understanding of its role in complex development and policy-making environments. This course introduces participants to the entire M&E planning cycle, starting from the basics of monitoring and evaluation, their differences, and their significance in policy implementation, illustrated through case studies like Swachh Bharat Abhiyan and the Bangladesh Second Urban Primary Health Care Project. Dive into the Theory of Change, Logical Framework, and SMART indicators, learning how to create robust M&E frameworks using government tools like India&rsquo;s Output-Outcome Monitoring Framework (OOMF). The course also covers advanced topics in data analysis, visualisation, and the use of the Data Governance and Quality Index, equipping students with practical skills in handling and interpreting data for insightful M&E. Sessions on evaluation delve into various methods—qualitative, quantitative, and mixed-methods—and introduce essential concepts such as sampling, questionnaire development, and error types. Through hands-on exercises, participants will apply their learning to evaluate real-world programmes, gaining a deep, actionable understanding of M&E&rsquo;s pivotal role in effective governance and policy outcomes.</p>
</div>

<button className="accordion">International Trade and Finance</button>
<div className="panel">
<p>Explore the complexities of global markets in this mini-course on International Trade and Finance. This course delves into the foundational theories of international trade, beginning with the Ricardian model of Comparative Advantage and expanding to encompass a broader understanding of trade dynamics and their welfare implications. We will examine trade policy instruments, including the economics of tariffs, quotas, and trade remedies, and the motivations behind protectionism within the political economy of trade policy. Additionally, the course covers essential aspects of International Finance, focusing on exchange rate determination and related financial topics. Through this comprehensive curriculum, participants will gain a nuanced understanding of how trade policies and international financial mechanisms influence global economic interactions and national welfare, preparing them to navigate and shape international economic relations effectively.</p>
</div>

<button className="accordion">Voting and Democracy</button>
<div className="panel">
<p>This course introduces the complexities of democratic processes and its implications for democracy. It explores how democratic outcomes are shaped not only by voter preferences but also by the voting systems used, challenging the notion that democracy operates solely by the people&rsquo;s will. We examine scenarios where traditional majority rules fail to produce consistent results with more than two options, as Arrow&rsquo;s theorem states that no voting system is perfect. The course also considers the practical applications of voting in power distribution, checks and balances, and information aggregation, as seen in various global and local contexts, such as the European Union and jury decisions. Delve into the debate between liberalism and populism, guided by thinkers like James Madison and Rousseau, and explore how different interpretations affect the perceived legitimacy of electoral outcomes. We discuss how decision-making rules, strategic voting, and agenda control affect public policies and laws through a thorough analysis of electoral systems like plurality and proportional representation, as seen in the UK&rsquo;s electoral outcomes. This course extends foundational concepts like Condorcet&rsquo;s winner and Arrow’s theorem to current debates on governance and public policy, offering a critical perspective on the democratic system’s ability to reflect the people&rsquo;s true will and its societal implications.</p>
</div>

</div>
	</div>

<div className="curriculum">

<button className="accordion-main accordion-cus">Workshops and Labs</button>
<div className="panel-main">
<button className="accordion">Antarang Leadership Lab</button>
<div className="panel">
<p>The Antarang Leadership Lab (ALL) offers an immersive, experiential learning environment designed to cultivate intimate and impactful leadership skills among scholars. Named &rsquo;Antarang&rsquo; for &rsquo;intimate,&rsquo; the lab creates a nurturing space for personal development through hands-on experiences and meaningful conversations. ALL workshops begin with self-awareness exercises, progressing through diverse topics such as networking, handling cultural diversity, teamwork, effective presentations, defining success, and building resilience, culminating in a three-day leadership retreat in the hills. Additionally, the lab organises scholars into small, informal squads led by a Squad Facilitator, fostering close academic and non-academic exchanges. Each scholar also benefits from the guidance of a mentor—senior professionals from various sectors—who act as sounding boards for personal and career development throughout the year. This comprehensive approach ensures that scholars are well-prepared to lead confidently during their time at ISPP and in their future professional environments.</p>
</div>

<button className="accordion">Policy Case Consulting Workshop</button>
<div className="panel">
<p>This workshop will provide scholars with the knowledge and skills to examine and solve complicated policy dilemmas in a fast-paced setting. Scholars will be trained in various analytical frameworks and problem-solving strategies, using hands-on practice on policy case studies. The workshop will include academic lectures and practice, emphasising increasing the scholar’s ability to swiftly and effectively assess policy challenges and generate answers. By the end, scholars will have gained significant experience using analytical methods to tackle real-world policy challenges, sharpened their critical thinking abilities, and developed a deeper grasp of the policymaking process.</p>
</div>

<button className="accordion">Policy Praxis Lab</button>
<div className="panel">
<p>Public policy governs every action one takes and the outcomes of these actions. The Policy Praxis Lab will train one to understand why and how to make public policy work for the public. The lab explores various policy-related questions: How should markets be organised? What is health policy? How does public policy handle the diverse interests of people? How do we find out about these diverse interests? How do we make people agree on a common set of choices, allowing them to choose differently from the same set? Through a series of policy exercises characterised by curiosity and empathy, thought experiments, and real-life experiences of successful and unsuccessful policy interventions, scholars will be trained to master the science and art of ethical policy objectives.</p>
</div>

<button className="accordion">Quant Lab</button>
<div className="panel">
<p>The Quant Lab is a pivotal component designed to enhance scholars&rsquo; proficiency in handling and interpreting data, crucial for addressing public policy challenges. Focused on empowering scholars with advanced data-handling tools in Excel, the lab covers comprehensive data analysis and visualisation aspects. Participants will learn the intricacies of cleaning data, presenting it effectively, managing qualitative and quantitative variables, creating samples, testing hypotheses, and conducting regression analyses. Through practical exercises and guided learning, the lab ensures that scholars are equipped to translate raw data into actionable insights, fostering a deep understanding of data&rsquo;s role in developing effective public policy solutions.</p>
</div>

<button className="accordion">Writing and Communication Lab</button>
<div className="panel">
<p>The Writing and Communication Lab at ISPP is designed to refine scholars&rsquo; abilities to engage public policy stakeholders effectively. It provides apprentice-style training that enhances verbal, non-verbal, and written communication skills, tailored for use in development, corporate, and academic settings. The lab offers a robust curriculum that includes public policy communication, academic writing, and business communication. Through regular lectures and personalised one-on-one sessions, the lab improves essential communication skills and collaborates closely with the Careers team to support scholars&rsquo; professional development. This integrated approach ensures that scholars are well-prepared to navigate the complex policy landscape, conduct research, transform scientific writing to suit various stakeholder needs, and advance their careers effectively.</p>
</div>

</div>
	</div>

<div className="curriculum curriculum1">

	<button className="accordion-main accordion-cus">Domains</button>
<div className="panel-main">

<button className="accordion">Education</button>
<div className="panel">
<p>The Education Domain at ISPP is strategically designed to deepen scholars&rsquo; understanding of the educational sector&rsquo;s challenges through a socioeconomic perspective. This domain aims to empower scholars to formulate thoughtful policies by considering the intricate complexities and real-world difficulties faced in education. The curriculum specifically focuses on themes that resonate with scholars interested in this domain, covering critical issues such as the financing of education (private vs. public funding), the role of technology in enhancing educational delivery, the unique challenges faced by the poor and other marginalised groups, and the intersections of education with employment and skill development. This targeted approach ensures that scholars are well-prepared to effectively address and influence educational policies, considering both broad societal impacts and specific stakeholder needs.</p>
</div>

<button className="accordion">Environment</button>
<div className="panel">
<p>This domain introduces scholars to key contemporary issues in environmental policy and governance. It provides an overview of the importance of environmental issues in economic and social policy, the role of regulation and markets in solving environmental problems, relevant approaches and instruments, and the regime of environmental laws and governance in India. Specific environmental problems, such as climate change, pollution, forests & biodiversity, and the associated strategies for addressing them from national and international perspectives are dealt with.</p>
</div>

<button className="accordion">Food Security and Rural Development</button>
<div className="panel">
<p>The Food Security and Rural Development domain at ISPP equips students with a deep understanding of contemporary food system issues within the Indian public policy context, emphasising sustainable practices to ensure food security. The course examines how public policy addresses food-related challenges, defining concerns and crafting solutions tailored to the Indian rural development debate. It explores the interconnections between sustainable food systems and food security, focusing on major policy challenges like hunger, poverty, malnutrition, and health. Students will analyse both need-based food sufficiency and rights-based food security approaches. Furthermore, the course tackles the complex relationship between food systems and climate change, discussing the role of food systems as both contributors to and victims of climate change. It reviews various models corporations and community organisations employ to manage these challenges, alongside government policies and programmes. The course includes practical learning experiences through case studies like &rsquo;Hivre Bazaar&rsquo; and simulation games like &rsquo;Naranpur Express&rsquo;, allowing scholars to engage in immersive rural decision-making scenarios.</p>
</div>

<button className="accordion">Health</button>
<div className="panel">
<p>The Health domain covers various crucial topics to understand and address health issues through policy frameworks. Initially, discussions focus on health&rsquo;s importance in public policy, assess India&rsquo;s current health status, and explore Universal Health Coverage. Later sessions will delve into the Social Determinants of Health, the impact of the Environment on Health, and Public Policy concerning Tobacco and Alcohol. Future topics will broaden the scope to include Pharmaceutical Policy, Digital Technologies for Health, and strategies for managing Infectious and Non-Communicable Diseases, including Mental Health. Additionally, the course will examine policies related to Nutrition, Reproductive, Maternal, Neonatal, Child, and Adolescent Health, and scrutinise the Governance and Regulation of Health Services across various levels of care. Special attention will be given to the Health of Vulnerable Populations, ensuring a comprehensive understanding of how public policy can enhance health outcomes across diverse demographics.</p>
</div>

<button className="accordion">Infrastructure</button>
<div className="panel">
<p>The infrastructure domain is designed to introduce the broad, complex, and rapidly evolving canvas of public infrastructure in the country, through a focused study of policy planning, financing, and execution of large infrastructure projects. With direct experiential learning at its core, teaching inputs are drawn from government policy documents and strategic action points for infrastructure delivery including Contracts and Concession Agreements. Academic inputs also cover the areas of Public Private Partnerships, Development Finance Institutions and Regulation and Oversight of Infrastructure delivery. Fast learning outcomes are envisaged through case studies, hands-on project planning templates, and tool kits. Due to its very nature, the Infrastructure domain has multi-disciplinary teaching inputs that are useful across the policy spheres of economic planning, public finance, and public procurement.</p>
</div>

<button className="accordion">Technology</button>
<div className="panel">
<p>The Technology domain offers scholars a comprehensive overview of navigating and balancing stakeholder interests in digital communications and technologies, focusing on a consumer-centric perspective. Scholars will gain valuable insights into formulating policies that prioritise consumer engagement and trust, which are crucial for the successful adoption of digital technologies. The curriculum addresses critical challenges such as inclusion and access, data privacy, competitive practices, and the ethical implications of artificial intelligence, highlighting their importance in both global and Indian contexts. Through the technology domain sessions, students will delve into contemporary issues surrounding Consumer Protection in the Digital Era, exploring how to effectively balance considerations of inclusion, competition, privacy, data protection, and ethics in AI, ensuring that technology policy-making aligns with the broader interests of all stakeholders involved.</p>
</div>

<button className="accordion">Urbanisation</button>
<div className="panel">
<p>The urbanisation domain is designed to engage scholars deeply with the multifaceted aspects of urbanisation, particularly within the Indian context. The objective is to expose students to a broad spectrum of urban issues, fostering a comprehensive analysis of policy concerns and strategies pertinent to the urban sector. Scholars will explore the full scope of public policy and enhance their skills in debating, developing strong arguments, and presenting their ideas effectively. Each session concentrates on specific urban policy issues like housing, mobility, and financing. The course culminates with scholars tasked with designing a detailed plan or policy for a city of their choice, aiming to outline potential growth and development through strategic public policy interventions. This approach broadens understanding and equips scholars with practical urban policy planning and implementation skills.</p>
</div>

</div>
	</div>

</div>
<div className="col-md-4">
<div className="curriculum-content">
<h2><strong>Admission Process</strong></h2>
<p className="curriculum-content-new"><img src="/assets/images/admission-process.png" alt="" title=""/> <span><strong>Applications Closing on June 30<sup>th</sup></strong></span></p>

<div className="admission-process">
<p><img src="/assets/images/application.png" alt="" title=""/> <strong>Application</strong></p>
<p className="admission-process-content">Register on the ISPP Admissions Portal</p>
</div>
<div className="admission-process admission-process-new">
<p>Submit Details</p>
</div>
<div className="admission-process admission-process-new">
<p>Upload Documents</p>
</div>
<div className="admission-process admission-process-new admission-process-last">
<p>&nbsp;</p>
</div>

<div className="admission-process selection">
<p><img src="/assets/images/selection.png" alt="" title=""/> <strong>Selection</strong></p>
<p className="admission-process-content">The PDM programme has a three-stage  selection process:</p>
</div>
<div className="admission-process admission-process-new admission-process-new1">
<p>Application Screening</p>
</div>
<div className="admission-process admission-process-new admission-process-new1">
<p>Written Test</p>
</div>
<div className="admission-process admission-process-new admission-process-new1">
<p>Personal Interview</p>
</div>
<div className="admission-process admission-process-new admission-process-last">
<p>&nbsp;</p>
</div>

<div className="admission-process admission-offer">
<p><img src="/assets/images/final-admission-offer.png" alt="" title=""/> <strong>Final Admission Offer</strong></p>
</div>

<div className="button button-new">
<a href="#apply-now"><strong>Apply Now</strong></a>
</div>

</div>
</div>
</div>
</div>
</section>

<link href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" rel="stylesheet" />
<link href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css" rel="stylesheet" />

<section className="slider-section" id="faculty">
<div className="content">
<div className="container">
<h2 className="title"><strong>Faculty</strong></h2>

<div className="slider multiple-items">
<div>
<div className="faculty-mentors"><img src="/assets/images/shubhashis-gangopadhyay.jpg" alt="" title=""/>
<h3><strong>Shubhashis Gangopadhyay</strong></h3>
<p className="faculty-mentors-content">Founding Dean of Indian School of Public Policy</p>
</div>
</div>

<div>
<div className="faculty-mentors"><img src="/assets/images/krishna-k-ladha.jpg" alt="" title=""/>
<h3><strong>Krishna K Ladha</strong></h3>
<p className="faculty-mentors-content">Professor at ISPP, Distinguished<br/> 
Fellow at India Development Foundation</p>
</div>
</div>

<div>
<div className="faculty-mentors"><img src="/assets/images/o-p-agarwal.jpg" alt="" title=""/>
<h3><strong>Dr O.P Agarwal</strong></h3>
<p className="faculty-mentors-content">Professor of Practice, ISPP<br/>
Former Joint Secretary<br/>
(Urban Transport), Union Ministry of<br/> 
Urban Development</p>
</div>
</div>

<div>
<div className="faculty-mentors"><img src="/assets/images/archana-gulati.jpg" alt="" title=""/>
<h3><strong>Archana Gulati</strong></h3>
<p className="faculty-mentors-content">Former Head of Public Policy, Google India</p>
</div>
</div>

<div>
<div className="faculty-mentors"><img src="/assets/images/nandita-banerjee.jpg" alt="" title=""/>
<h3><strong>Nandita Banerjee</strong></h3>
<p className="faculty-mentors-content">Head HR & Capacity Building at ASER Centre, Pratham Education Foundation</p>
</div>
</div>

<div>
<div className="faculty-mentors"><img src="/assets/images/kanu-priya-sekhri.jpg" alt="" title=""/>
<h3><strong>Kanu Priya Sekhri</strong></h3>
<p className="faculty-mentors-content">Business and Mindset Coach, Live Your Message</p>
</div>
</div>

</div>
</div>
</div>
</section>

<section className="scholar-placement-section" id="placements">
<div className="container">
<div className="row">
<div className="col-md-6">

<div className="site-wrapper container">

<div className="row mySlider1">
<div className="mySlider__item col-lg-12 col-md-12 program-overview-new">
<div className="card">
<h2 className="title"><strong>Placement Sector Batches Wise</strong></h2>
<div className="scholar-placement">
<img src="/assets/images/placement-sector-batches-wise.jpg" alt="" title=""/>
</div>
</div>
</div>

<div className="mySlider__item col-lg-12 col-md-12 program-overview-new">
<div className="card">
<h2 className="title"><strong>Placement Trends 2023</strong></h2>
<div className="scholar-placement">
<img src="/assets/images/placement-trends-2023.jpg" alt="" title=""/>
</div>
</div>
</div>

</div>
</div>

{/* <!--<h3>Placement Trends 2023</h3>
<div className="scholar-placement">
<div className="scholar-placement-new scholar-placement-new1">
<p>Placement</p>
<p>className of 2023</p>
<p className="scholar-placement-content">All Batches</p>
</div>
<div className="scholar-placement-new">
<p>Samaaj</p>
<p><span>16.7%</span></p>
<p className="scholar-placement-content"><span>29.6%</span></p>
</div>
<div className="scholar-placement-new">
<p>Sarkaar</p>
<p><span>20.8%</span></p>
<p className="scholar-placement-content"><span>9.6%</span></p>
</div>
<div className="scholar-placement-new scholar-placement-last">
<p>Bazaar</p>
<p><span>62.5%</span></p>
<p className="scholar-placement-content"><span>60.8%</span></p>
</div>
</div>--> */}

</div>

<div className="col-md-6 recruiters-network">
<h2 className="title"><strong>Recruiters Network</strong></h2>
<img src="/assets/images/recruiters-network.png" alt="" title=""/>
<div className="button">
<strong>+ More</strong>
</div>
</div>
</div>
</div>
</section>
















<section className="public-policy-section" id="alumni">
<div className="container">
<div className="row">
<h2 className="title"><strong>Careers in Public Policy</strong></h2>
<div className="slider multiple-items2">
<div>
<div className="public-policy">
<img src="/assets/images/government.png" alt="" title=""/>
<p>Government</p>
</div>
</div>

<div>
<div className="public-policy">
<img src="/assets/images/ngos.png" alt="" title=""/>
<p>NGOs</p>
</div>
</div>

<div>
<div className="public-policy">
<img src="/assets/images/think-tanks.png" alt="" title=""/>
<p>Think Tanks</p>
</div>
</div>

<div>
<div className="public-policy">
<img src="/assets/images/industry-bodies.png" alt="" title=""/>
<p>Industry Bodies</p>
</div>
</div>

<div>
<div className="public-policy">
<img src="/assets/images/academia.png" alt="" title=""/>
<p>Academia</p>
</div>
</div>

<div>
<div className="public-policy">
<img src="/assets/images/public-affairs.png" alt="" title=""/>
<p>Public Affairs</p>
</div>
</div>

<div>
<div className="public-policy">
<img src="/assets/images/corporates.png" alt="" title=""/>
<p>Corporates</p>
</div>
</div>

<div>
<div className="public-policy">
<img src="/assets/images/consultancies.png" alt="" title=""/>
<p>Consultancies</p>
</div>
</div>

</div>

</div>
</div>
</section>




<section className="faqs-section">
<div className="container">
<div className="row">
<h2 className="title"><strong>FAQs</strong></h2>
<div className="col-md-12">
<div className="faqs">

<button className="accordion">Why should I study ISPP Postgraduate Programme in Public Policy, Design and Management?</button>
<div className="panel">
<div className="row">
<div className="col-md-8">
<p>The one-year programme trains individuals in the science of policymaking by taking them through a rigorous programme divided into seven terms of 7 weeks each. The penultimate exercise of the programme involves scholars working on a Capstone Exercise to solve a contemporary policy challenge through original policy solutions. In addition to the academic training, ISPP PDM Programme offers various networking opportunities, access to professional forums, and careers and placement support.</p>
</div>
<div className="col-md-4">
<div className="video video-new">
<video controls width="500" height="281" playsInline>
  <source src="https://apply.ispp.org.in/why-study-public-policy.mp4" type="video/mp4"/>
  Your browser does not support the video tag.
</video>

</div>
</div>
</div>
</div>

<button className="accordion">What is the structure of the ISPP Postgraduate Programme in Public Policy, Design and Management?</button>
<div className="panel">
<p>ISPP’s Postgraduate Programme integrates diverse dimensions of Public Policy Education with an up-to-date curriculum and training in line with the best policy programmes offered across the globe.</p>
<p>Capacity, flexibility and innovativeness are the three key factors in the design of our PG programme. We ensure you attend the right courses, clubbed with the ever-evolving practical knowledge sessions.</p>
<p>Offered as the finest combination of compulsory courses, workshops, labs and collaborative certificates, ISPP brings forth the best resource persons, policy veterans and field experts to deliver one of the most innovative curriculums to its scholars. Throughout your time at ISPP, we will work to align your skills and make you industry-ready from an employer’s perspective.</p>
</div>

<button className="accordion">What will be the ISPP Postgraduate Programme className Size?</button>
<div className="panel">
<p>ISPP is a growing institution working to provide premier policy education to all interested applicants. However, we are restricted by resources and are able to accommodate only a limited number of interested applicants.</p>
</div>

<button className="accordion">Why is ISPP Postgraduate Programme offered as a one-year programme, and not as a two-year programme?</button>
<div className="panel">
<p>One-year duration of our Postgraduate Programme is what gives the ISPP education an edge over the traditional master’s degrees. In this one year of intensive training at ISPP, we cover all key aspects of policy education, including design thinking and management.</p>
<p>Compared to a conventional two-year master’s programme, ISPP scholars spend less time studying, enter their choice of career earlier, and spend higher time solving real world challenges. With that being said, it is important to note that the programme is rigorous, demanding and intensive for its scholars.</p>
</div>

<button className="accordion">Is the ISPP Postgraduate Programme a residential programme?</button>
<div className="panel">
<p>No, the ISPP Postgraduate Programme is a non-residential programme. ISPP does not provide any residential facilities on its campus.</p>
<p>Since most ISPP scholars are outstation candidates, the ISPP Admissions Team assists them in finding accommodation by sharing recommendations, experiences from past scholars etc. However, ISPP does take any responsibility for the price, contract or quality of services provided by the residential facility that the scholars may choose. Each scholar shall sign an individual and independent contract with their agreed residential facility.</p>
<p>In case more than 10-15 scholars choose to stay in one residential facility or neighborhood, ISPP also provides a shuttle service to campus and back on nominal charges.</p>
</div>

<button className="accordion">Does ISPP provide placements and career support to its Postgraduate Programme scholars?</button>
<div className="panel">
<p>ISPP’s ‘3-Es towards Employment’ help scholars leverage their varied skill-sets and domain expertise, enabling them to pursue careers of their choice. In the last three cohorts, our scholars have been placed at E&Y India, Ministry of Health and Family Welfare, SBI Foundation, The Economist Intelligence Unit, and LAMP Fellowship, among others. Some of our scholars, who wished to pursue their studies further, are now at the best global universities such as Oxford University, Georgia Tech, and University of Amsterdam, with the support, guidance and recommendations from ISPP’s prominent faculty members</p>
</div>

<button className="accordion">Who is eligible to apply for the ISPP PG Programme in Public Policy, Design and Management?</button>
<div className="panel">
<p>The eligibility criteria for the Post Graduate Programme at ISPP are designed to attract candidates who demonstrate a clear and purposeful commitment to engaging in public policy. The Post Graduate Programme at ISPP welcomes applications from both graduates and working professionals. We place significant emphasis on evaluating candidates based on their prior experiences in work, be it full-time positions, contractual engagements, internships, or volunteer opportunities. Furthermore, applicants are assessed on their depth of understanding in a thematic area and its broader policy implications. Graduates and working professionals who fulfill these criteria are encouraged to apply, as we believe their diverse perspectives will enhance the overall educational experience of the programme.</p>
</div>

<button className="accordion">If the medium of instruction in my institution was other than English, am I still eligible for the programme?</button>
<div className="panel">
<p>Yes, irrespective of the medium of instruction in your matriculation, intermediate or graduation, you are eligible to apply for ISPP’s Postgraduate Programme. However, we expect a certain level of proficiency of English language in our scholars so that they are able to converse, read and write in English, given that the medium of instruction for the ISPP Postgraduate Programme is English.</p>
<p>Additionally, we also have a Policy Writing and Communications Lab at ISPP which works closely with our scholars to help them improve their writing and communication skills.</p>
</div>

<button className="accordion">What are the ISPP Postgraduate Programme Application Deadlines?</button>
<div className="panel">
<p>Admissions for ISPP’s Postgraduate Programme in Public Policy, Design and Management are conducted on rolling basis. There is no fixed deadline, and applications will be accepted until seats are full. We encourage you to apply at the earliest to secure your spot in the upcoming cohort.</p>
</div>

<button className="accordion">Is there any Application Fee for admission to ISPP Postgraduate Programme?</button>
<div className="panel">
<p>No, ISPP does not charge any fee to submit an admission application to any of its programmes.</p>
<p>As a democratic institution, we understand that our applicants come from diverse financial backgrounds. We provide access to a free admissions application to encourage every interested candidate to study at ISPP.</p>
</div>

<button className="accordion">Are there any key points one must carefully address in their Admission Application to the ISPP Postgraduate Programme?</button>
<div className="panel">
<p>We strongly advise that you complete all sections of your Admissions Application in English language with correct grammar, punctuation and spelling. You must upload all necessary documents as clear scanned copies, the text and information on which is readable by the Selection Committee.</p>
<p>While writing the statement of purpose, please focus on: what public policy means to you, how are your academic and professional experiences built into your public policy interests, your career plan in public policy and your motivation to apply to ISPP.</p>
</div>

<button className="accordion">What are the documents I will need to complete my Admissions Application to ISPP Postgraduate Programme?</button>
<div className="panel">
<p>You will need access to the following documents to complete your Admissions Application to ISPP Postgraduate Programme in Public Policy, Design and Management:</p>
<ol>
<li>Scanned PDF of Identification Certificate, preferably Aadhaar</li>
<li>Scanned PDFs of className XII (Intermediate) Certificate and Marksheet</li>
<li>Scanned PDFs of Graduation Degree and Transcripts clearly mentioning all subjects and courses studied</li>
<li>Scanned PDFs of Any Other Qualifications’ Degree and Transcripts</li>
</ol>
<p>Please upload readable scans of all above documents, since they will be referred to by the ISPP Selection Committee during the Admission Process.</p>
</div>

<button className="accordion">Do I need to complete the Online Admissions Application within one session?</button>
<div className="panel">
<p>No, you can complete the Online Admissions Application over multiple sessions and have the option to save parts of the application as you proceed. However, the Online Aptitude Test must be completed in one sitting.</p>
</div>

<button className="accordion">What should I do if I have submitted incorrect information or documents in my application?</button>
<div className="panel">
<p>In case you have submitted any incorrect information or documents by error, please contact the ISPP Admissions Office immediately at admissions@ispp.org.in for necessary corrections. Do not submit another application, as it may lead to the termination of your candidature.</p>
</div>

<button className="accordion">How will I know if my Admissions Application has been submitted to ISPP?</button>
<div className="panel">
<p>You will receive an automated email from ISPP Admissions Portal, once your application is submitted. In case you have submitted your application but have not received the confirmation email, please get in touch with immediately at admissions@ispp.org.in to resolve your concern.</p>
</div>

<button className="accordion">What is the Selection Process to the ISPP Postgraduate Programme?</button>
<div className="panel">
<p>ISPP admits scholars to its Postgraduate Programme in Public Policy, Design and Management through a 3-Stage Selection Process, which includes application shortlisting, an Online Aptitude Test followed by a Personal Interview Round. Every phase of the selection process serves as an elimination round. Only shortlisted applicants are invited to the subsequent stages of the selection process. You can find detailed information on the Selection Process above, under the ‘Selection Process’ section.</p>
</div>

<button className="accordion">How does ISPP conduct its selection process: Online or Offline?</button>
<div className="panel">
<p>The application and selection process to ISPP is completely online: starting with an online application submitted using the ISPP Admissions Portal listed on ISPP Website, followed by an Online Aptitude Test attempted on the same ISPP Admissions Portal, to the Personal Interview Round conducted on Zoom Virtual Platform. Shortlisted candidates living in and around Delhi NCR are invited for in-person interviews at our campus.</p>
</div>

<button className="accordion">How and when will I know if I have been selected to the ISPP Postgraduate Programme?</button>
<div className="panel">
<p>In case you have been successful in the selection process at ISPP, you shall receive an Admission Offer within 7-10 working days of the last selection exercise of the respective round, as an email communication listing:</p>
<ol>
<li>Guidelines for Offer Acceptance</li>
<li>Fee Payment Guidelines, Refund Policy and Late Payment Charges</li>
<li>Programme Commencement and Reporting Dates</li>
</ol>
</div>

<button className="accordion">Can I reapply if I have not been selected to the ISPP Postgraduate Programme?</button>
<div className="panel">
<p>Yes, you can re-apply but not within the same academic year. You will have to submit a fresh application in the following year.</p>
</div>

<button className="accordion">What is the Fee Structure for the ISPP Postgraduate Programme?</button>
<div className="panel">
<p>For the upcoming academic year, ISPP’s Postgraduate Programme in Public Policy, Design and Management is offered at a total programme fee of ₹8,40,000 (+18% GST).</p>
</div>

<button className="accordion">Is the ISPP Postgraduate Programme an expensive Public Policy Programme?</button>
<div className="panel">
<p>When compared with Indian and global public policy programmes of similar repute, ISPP’s Postgraduate Programme Fee is on the lower end of the spectrum. In addition to this, ISPP assists its incoming scholars in securing Financial Loans and offers Financial Aid to outstanding candidates who need support to fund their studies.</p>
</div>

<button className="accordion">Are there any financing options to fund my studies at ISPP?</button>
<div className="panel">
<p>Most nationalized banks and lending institutions offer an Education Loan to ISPP Scholars. In addition, IDFC First Bank, HDFC Credila and Axis Bank offer Education Loan to ISPP Scholars.</p>
<p>ISPP has partnered with GrayQuest, an education finance company specializing in student EMI options. This option allows students to choose EMI option for fee payments, providing them with greater financial flexibility.</p>
<p>You can find detailed information about Financing Options for the ISPP Postgraduate Programme in the ‘Education Loan’ section above.</p>
</div>

<button className="accordion">How can I make the fee payment if I am offered admission at ISPP?</button>
<div className="panel">
<p>Fees can be paid through payment gateway available on applicant’s dashboard using any of the following modes convenient to the offer holders: Wire Transfer (IMPS, NEFT or RTGS), Credit Card, Debit Card, UPI, Cheque or Demand Draft.</p>
<p>Any additional transaction charges incurred by the payment gateway to process the fee payments are to be borne by the applicants, over and above the fee being paid to ISPP.</p>
<p>The applicants should note that the payment must be received in ISPP’s Bank Account, latest by office hours of the payment deadline.</p>
<p>No fee payments shall be accepted by cash, under any circumstances. We do not collect fees on campus.</p>
</div>

</div>
</div>
</div>
</div>
</section>









    </>
  )

}
