---
layout: personal
permalink: /projects/
title: "Research"
intro: "Statistical methods for data whose structure matters: networks, spatial relationships, and multiple measurements of the same system."
---
<section class="research-detail" id="structured_estimation">
  <span class="research-number" aria-hidden="true">01</span>
  <div><h2>Statistics for structured data</h2><p>High-dimensional datasets often have structure we can use: variables may form a network, observations may share spatial context, or a small set of latent factors may explain much of the variation. I develop methods that incorporate this information into estimation and dimension reduction.</p><p>My work includes sparse and graph-constrained canonical correlation analysis, topic models, matrix and tensor factorization, and denoising over networks. The aim is to obtain interpretable estimates with statistical guarantees.</p><p class="paper-links">Recent work: <a href="https://jmlr.org/papers/v27/25-0196.html">CCA as reduced rank regression</a> · <a href="https://arxiv.org/abs/2501.00535">Tensor topic modeling</a> · <a href="https://jmlr.org/papers/v27/23-1344.html">Sparse topic modeling</a></p></div>
</section>
<section class="research-detail" id="gnns">
  <span class="research-number" aria-hidden="true">02</span>
  <div><h2>Understanding learning on graphs</h2><p>Graph neural networks learn from relationships between observations. I study their statistical properties: how graph convolutions transform a signal, how network structure affects prediction, and how to select and evaluate a model when observations are dependent.</p><p>This research brings together theoretical analysis, graph signal processing, and methods for uncertainty quantification. Current directions include model selection for unsupervised graph representations, semi-supervised learning, and graph transformers.</p><p class="paper-links">Recent work: <a href="https://proceedings.mlr.press/v258/chen25j.html">GCN convolutions in regression</a> · <a href="{{ '/publications/#preprints' | relative_url }}">Current preprints</a></p><p class="funding-note">Supported in part by my NSF CAREER project, <em>Towards Responsible Graph Neural Networks</em> (2023–2028).</p></div>
</section>
<section class="research-detail" id="multimodal">
  <span class="research-number" aria-hidden="true">03</span>
  <div><h2>Data integration &amp; uncertainty</h2><p>Biological datasets often combine measurements from genomics, transcriptomics, metabolomics, imaging, and environmental conditions. I develop statistical methods to connect these views and identify relationships that would be difficult to see in any one dataset.</p><p>Uncertainty quantification is central to this work. Alongside sparse CCA and multivariate regression, recent projects develop conditional conformal prediction methods to assess the uncertainty of model predictions.</p><p class="paper-links">Recent work: <a href="https://arxiv.org/abs/2509.24100">SpeedCP</a> · <a href="https://arxiv.org/abs/2507.11160">Efficient sparse CCA</a></p></div>
</section>
<section class="research-detail" id="applications">
  <span class="research-number" aria-hidden="true">04</span>
  <div><h2>Biological &amp; scientific applications</h2><div class="application-grid">
    <div><h3>Spatial transcriptomics</h3><p>Modeling spatial gene expression, tissue organization, and cell-state transitions using structured statistical methods.</p></div>
    <div><h3>Plant &amp; microbial systems</h3><p>Integrating molecular and environmental data to study thermotolerance, microbial interactions, and host–microbiome responses to stress.</p></div>
    <div><h3>Microbial communities</h3><p>Using network models and latent structure to understand community organization and connect genetic variation to microbial traits.</p></div>
    <div><h3>Networks in public health</h3><p>Studying partially observed epidemics and heterogeneous transmission.</p></div>
  </div></div>
</section>
<section class="research-detail" id="past_projects">
  <span class="research-number" aria-hidden="true">05</span>
  <div><h2>Earlier work</h2><p>My earlier research includes brain connectomics and the analysis of functional MRI, network dynamics, cryo-electron microscopy, and statistical modeling for COVID-19. Across these projects, a common question is how to extract reliable information from complex, noisy data.</p><p><a href="{{ '/publications/' | relative_url }}">Browse the full publication list</a></p></div>
</section>
<section class="lab-panel" style="margin-top:40px" aria-labelledby="research-lab"><div><p class="eyebrow">Research in practice</p><h2 id="research-lab">Inside the SIGNAL Lab</h2><p>Find our current projects, team, and open-source software on the lab website.</p></div><a class="button" href="https://signal-lab-uchicago.github.io/">Visit the lab ↗</a></section>
