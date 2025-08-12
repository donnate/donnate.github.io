---
permalink: /projects/
title: "Research Projects"
excerpt: "Research Projects"
author_profile: true
---

<div id="gnns" name="gnns">  
<h2> Principled Inference, Statistics, and Graph Neural Networks </h2>

<p align="justify">
<b>Graph Neural Networks</b> (GNNs) extend deep learning to graph-structured data and have become a core tool for learning on relational structures. Despite their rapid adoption, the statistical properties and limitations of GNNs remain poorly understood, especially in scientific domains where reproducibility, interpretability, and robustness are critical. 
</p>

<p style="color:grey;font-size:11px;" align="center">
<img src="{{ site.baseurl }}/images/debunking_gnns (1).png" />
<i>Illustration of a Graph Neural Network block: aggregation (convolution) and transformation steps, repeated to propagate information through the graph.</i>
</p>

<p align="justify">
Our work aims to develop a principled foundation for GNNs — moving from heuristic architectures to models with performance guarantees, clear interpretability, and reliable uncertainty quantification. This involves:
</p>

<ul>
<li><b>Uncertainty Quantification:</b> Designing methods to measure the robustness and confidence of GNN predictions, especially under noise or limited labels.</li>
<li><b>Theoretical Analysis:</b> Studying bias–variance tradeoffs, oversmoothing, and topology-dependent performance.</li>
<li><b>Model Selection:</b> Developing statistically sound cross-validation and tuning procedures tailored for graph-structured data.</li>
<li><b>Interpretability:</b> Creating tools to link model outputs to causal or biologically meaningful structures.</li>
</ul>
</div>

---

<div id="structured_estimation" name="structured_estimation">  
<h2> Structured Estimation and Graph-Constrained Models </h2>

<p align="justify">
Many high-dimensional estimation problems involve latent structure — such as sparsity, grouping, or alignment with a known network — that can be leveraged for more accurate and interpretable inference. We design algorithms for <b>structured dimension reduction</b> and <b>graph-constrained matrix factorization</b>, with provable error bounds and direct applications to biological datasets.
</p>

<p align="justify">
Our methods exploit graph topology or external meta-information to improve estimation of canonical directions, low-rank structure, or latent factors, with a focus on making results reproducible and trustworthy.
</p>
</div>

---

<div id="multimodal" name="multimodal">  
<h2> Multimodal Data Integration and Uncertainty Quantification </h2>

<p align="justify">
Biological and environmental datasets increasingly combine diverse data modalities — genomics, transcriptomics, metabolomics, imaging, and environmental covariates — linked through shared samples or spatial context. We develop statistical frameworks such as sparse canonical correlation analysis (CCA), regularized multivariate regression, and probabilistic graphical models to integrate these heterogeneous datasets.
</p>

<p align="justify">
A major emphasis is on <b>uncertainty quantification</b>: providing confidence bounds for estimated relationships so downstream conclusions are statistically sound. This is particularly important in applications where experimental validation is costly or time-consuming.
</p>
</div>

---

<div id="applications" name="applications">  
<h2> Applications </h2>

<ul>
<li><b>Thermotolerance in photosynthetic microbes:</b> Integrating genomic, transcriptomic, and metabolomic data from cyanobacteria and <i>Chlamydomonas</i> to predict optimal growth temperatures and identify molecular mechanisms of heat adaptation.</li>

<li><b>Family networks and child welfare:</b> Modeling kinship structures as complex networks to study how family configurations influence outcomes in protective custody and child services.</li>

<li><b>Spatial transcriptomics:</b> Applying GNNs and structured estimation to detect spatial patterns in gene expression, uncover cell–cell interactions, and map tissue organization.</li>

<li><b>Microbial community modeling:</b> Using graph-based latent variable models to study associations in marine and host-associated microbiomes, accounting for spatial and environmental structure.</li>
</ul>
</div>

---

<div id="past_projects" name="past_projects">  
<h2> Selected Past Projects </h2>

<h3> COVID-19 Modeling </h3>
<ul>
<li>Statistical modeling for pooled testing strategies under correlation and heterogeneity.</li>
<li>Modeling the effect of variability in reproduction number on epidemic forecasts.</li>
<li>Integrating testing data with surveys to assess transmission risk in live events.</li>
</ul>

<h3> CryoEM Image Reconstruction </h3>
<p align="justify">
In collaboration with structural biologists, we developed deep generative modeling techniques for cryo-electron microscopy (cryo-EM) data, with geometric constraints to improve resolution for challenging targets such as membrane proteins. These methods disentangle shape, motion, and imaging effects to improve 3D reconstruction fidelity.
</p>
</div>
