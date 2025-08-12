---
permalink: /
title: "About me"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---


<!-- Intro -->
<div style="font-size:1.05em; line-height:1.6; text-align:justify; margin-bottom:1.5em;">
  <b><i>I am an Assistant Professor of Statistics at the University of Chicago.</i></b> 
  My research develops statistical methods for <b>high-dimensional and multimodal data integration</b>, 
  with applications in biology, environmental science, and public health. 
  I work on <b>structured estimation</b>, <b>graph-constrained models</b>, and <b>graph neural networks</b>, 
  with recent projects including uncertainty quantification for sparse canonical correlation analysis, 
  denoising on graphs, and statistical foundations for GNNs.
</div>

<!-- News Section -->
<div style="display:flex; flex-direction:column; gap:1em; margin-bottom:2em;">

  <!-- Recruitment -->
  <div style="background-color:#f5f5f5; padding:14px 18px; border-radius:8px; font-size:0.95em; line-height:1.5;">
    <strong style="color:#b30000;">📢 NEWS: The group is recruiting!</strong><br>
    We welcome applications on a rolling basis for postdocs, rotation PhD students (already accepted to UChicago), 
    and a limited number of MS or advanced undergraduate students. Learn more about 
    <a href="https://donnate.github.io/projects/">our research</a> and 
    <a href="https://donnate.github.io/openings/">available opportunities</a>.
    <ul style="margin-top:0.5em; margin-bottom:0;">
      <li><strong><em>Postdoctoral fellows</em></strong>: Email cdonnat [at] uchicago.edu with your interests and CV.</li>
      <li><strong><em>UChicago PhD/Masters/Undergrad students</em></strong>: Email your interests, CV, and transcript.</li>
      <li><em>Note:</em> For those outside UChicago, we may not have the bandwidth to respond.</li>
    </ul>
  </div>

  <!-- Consulting -->
  <div style="background-color:#fff8e1; padding:14px 18px; border-radius:8px; border:1px solid #f0d78c; 
              box-shadow: 0px 2px 6px rgba(0,0,0,0.15); font-size:0.95em; line-height:1.5;">
    <strong style="color:#8b6b00;">💼 NEWS: Consulting Availability</strong><br>
    I am available for research consulting in areas including statistical methodology, high-dimensional data analysis, 
    graph-based modeling, and data integration for the life sciences. 
    For inquiries, please contact me at cdonnat [at] uchicago.edu.
  </div>
</div>

---

## Research Interests

<div style="text-align:justify;">
My research develops statistical methodology for the <b>analysis, integration, and uncertainty quantification 
of high-dimensional and structured data</b>, with a particular emphasis on <b>graphs, networks, and multimodal biological datasets</b>. 
Graphs provide a unifying framework for representing complex relationships—whether between microbial taxa, 
cell populations in tissues, or interacting variables in a multivariate system. 
They differ from traditional Euclidean data in two key ways:
</div>

<div style="margin-top:0.5em; text-align:justify;">
<b><i>(1) Dependence structure:</i></b> Nodes are connected, breaking the independence assumptions underlying many classical methods. 
Inference must explicitly incorporate graph topology, edge weights, and neighborhood structure.  
<b><i>(2) Irregularity:</i></b> Graphs lack a canonical ordering, reference frame, or homogeneity in node roles (degree, centrality, etc.), 
requiring statistical and machine learning methods that adapt to structural heterogeneity.
</div>

---

### Methodological Directions

<div style="display:flex; flex-direction:column; gap:1.5em; margin-top:1em;">

  <!-- GNNs -->
  <div style="display:flex; align-items:flex-start;">
    <img src="{{ site.baseurl }}/images/gnn.png" alt="GNNs" width="140" style="margin-right:1em;"/>
    <div>
      <b>1 — Theory and Methods for Graph Neural Networks</b><br>
      Developing a principled statistical foundation for GNNs, including bias–variance tradeoffs, topology-aware generalization, 
      interpretable architectures, and reliable model selection. 
      <a href="https://donnate.github.io/projects/#gnns">Learn more</a>.
    </div>
  </div>

  <!-- Structured Estimation -->
  <div style="display:flex; align-items:flex-start;">
    <img src="{{ site.baseurl }}/images/fmri.jpeg" alt="Structured Estimation" width="140" style="margin-right:1em;"/>
    <div>
      <b>2 — Structured Estimation and Graph-Constrained Models</b><br>
      Designing algorithms for dimension reduction and matrix factorization that incorporate known network structure or sparsity, 
      with provable guarantees and interpretable outputs.
    </div>
  </div>

  <!-- Multimodal Integration -->
  <div style="display:flex; align-items:flex-start;">
    <img src="{{ site.baseurl }}/images/bayes_covid.png" alt="Multimodal Integration" width="140" style="margin-right:1em;"/>
    <div>
      <b>3 — Multimodal Data Integration and Uncertainty Quantification</b><br>
      Integrating heterogeneous datasets (e.g., genomic, transcriptomic, spatial) using sparse CCA, regularized regression, 
      and probabilistic graphical models, with an emphasis on uncertainty assessment.
    </div>
  </div>

</div>

---

### Applications

<ul>
  <li><b>Thermotolerance in photosynthetic microbes</b> — Linking genomic, transcriptomic, and metabolomic data of cyanobacteria and <i>Chlamydomonas</i> to phenotypes under temperature or light stress.</li>
  <li><b>Family networks and child welfare</b> — Modeling kinship structures to study their impact on outcomes in child protective services.</li>
  <li><b>Spatial transcriptomics</b> — Detecting spatial gene expression patterns and cell–cell interactions.</li>
  <li><b>Microbial communities</b> — Modeling environmental and host-associated microbiomes using graph-based approaches.</li>
</ul>

