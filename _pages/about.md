---
permalink: /
title: "About me"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---


<p align="justify">
<b><i>
I am an Assistant Professor of Statistics at the University of Chicago. My research develops statistical methods for high-dimensional and multimodal data integration, with applications in biology, environmental science, and public health. I work on network-based inference, structured estimation, and graph-constrained models, with recent projects including uncertainty quantification for sparse canonical correlation analysis, denoising on graphs, and statistical foundations for graph neural networks.
  
</p>






<!-- Recruitment Notice -->
<div style="background-color:#f5f5f5; padding:12px 16px; border-radius:6px; font-size:0.9em; line-height:1.5;">
  <strong style="color:#b30000;">📢 NEWS: The group is recruiting!</strong><br>
  We welcome applications on a rolling basis for postdocs, rotation PhD students (already accepted to UChicago), and a limited number of MS or advanced undergraduate students. Learn more about 
  <a href="https://donnate.github.io/projects/">our research</a> and 
  <a href="https://donnate.github.io/openings/">available opportunities</a>.<br><br>

  <ul style="margin-top:0; margin-bottom:0;">
    <li><strong><em>Postdoctoral fellows</em></strong>: Email cdonnat [at] uchicago.edu with your interests and CV.</li>
    <li><strong><em>UChicago PhD/Masters/Undergrad students</em></strong>: Email your interests, CV, and transcript.</li>
    <li><em>Note:</em> For those outside UChicago, we may not have the bandwidth to respond.</li>
  </ul>
</div>

<br>


<!-- Consulting Notice -->
<div style="background-color:#f5f5f5; padding:12px 16px; border-radius:6px; font-size:0.9em; line-height:1.5;">
  <strong style="color:#006699;">💼 NEWS: Consulting Availability</strong><br>
  I am available for research consulting in areas including statistical methodology, high-dimensional data analysis, network-based inference, and data integration for the life sciences. For inquiries, please contact me at cdonnat [at] uchicago.edu.
</div>











Research Interests
======
<p align="justify">
My research interests lie in the <b>analysis of patterns and the quantification of uncertainty in high-dimensional datasets, and in particular, graphs and networks, geared towards biomedical applications.</b> <br>

Indeed, from brain connectomics to cybersecurity, graphs appear as an indispensable paradigm for studying complex relationships between entities. 
Yet, this formalism deviates from its traditional Euclidean counterpart in two essential ways: <b><i>(1) Data points are connected and can therefore no longer be considered as independent.</i></b> Rather, inference on graphs should be guided by their topological structure and leverage relevant edge, node and neighbourhood information; <b><i>(2) Graph data is irregular:</i></b>  there exists no natural ordering of the nodes, no reference point, nor homogeneity in nodes’ topological roles (degree distribution, betweenness centrality, etc.). These properties imply that graph data is not amenable to analysis through standard Machine Learning (ML) and Statistics methods — and consequently offers a challenging canvas for the re-adaptation of these methods to the graph setting. <br>
<br>
</p>

<p align="justify">
In this context, <b>from the methods perspective</b>, the research directions that I am currently investigating include:
<ul>
<img src="{{ site.baseurl }}/images/gnn.png" alt="drawing" width="150" style="float: left; margin-right: 1.5em;"/>
<li> <b> 1 - Graph Neural Networks. </b> As the direct extension of the deep neural network machinery to graph data, GNNs have recently gained an important amount of traction.  Yet, despite GNNs’ success on reference datasets in the academic community, both their properties and limitations remain ill-understood. Motivated by the necessity to shift GNNs from a “black-box” model to an actionable ML method that can be explained, trusted and relied upon in practical settings, we currently focus on the analysis, improvement of GNNs and graph algorithms at large, as well as their practical application. <br> <a href="https://donnate.github.io/projects/#gnns"> Find out more about our GNN research. </a></li>
<img src="{{ site.baseurl }}/images/bica2.png" alt="drawing" width="150" style="float: left; margin-right: 1.5em;"/>
<li><b> 2- Network Inference: </b> While networks offer an attractive formalism to study relational data, in many applications, the raw data has to be substantially processed to infer the graph structure before any network analysis can be achieved. In this setting, network inference is thus a crucial and indispensable component of the "graph analysis" pipeline, and on the quality of which depends any downstream analysis. As a result, we are interested in developping algorithms ablet to infer interactions and associations betweem agents in a network, as well as defining confidence levels around the inferred network structure. <br> <a href="https://donnate.github.io/projects/#network_inference"> Find out more about our Network Inference research. </a></li>
<img src="{{ site.baseurl }}/images/bayes_covid.png" alt="drawing" width="150" style="float: left; margin-right: 1.5em;"/>
<li><b> 3- Latent Variable Models and Variational Inference: </b> Finally, I am also extremely interested in Bayesian and Probabilistic Graphical models (PGMs). More specifically, I am interested in topics ranging from PGM inference  and variational inference. </li>
</ul>
</p>

<p align="justify">
<b>From the applications perspective, I am extremely interested in the potential of graphs and probabilistic models to biomedical problems. </b>  I have  in the past and am currently continuing on working on biomedical, neuroscience as well as COVID-19 related applications. I am also part of a collaboration working on the reconstruction of protein shape from cryoEM images.
</p>
  
