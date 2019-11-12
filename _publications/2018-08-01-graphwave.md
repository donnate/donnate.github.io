---
title: "Learning Structural Node Embeddings Via Diffusion Wavelets"
collection: publications
permalink: /publication/2018-08-01-graphwave
excerpt: 'We introduce GraphWave, a method for discovering structural similarities on graphs. In particular, GraphWave represents each node's network neighborhood via a low-dimensional embedding by leveraging heat wavelet diffusion patterns.'
date: 2018-08-19
venue: 'The 24th ACM SIGKDD International Conference on Knowledge Discovery & Data Mining, August 19--23, 2018, London, United Kingdom'
paperurl: 
citation: 'Donnat, Claire. (2018). &quot;Learning Structural Node Embeddings Via Diffusion Wavelets.&quot;'
---
<p><div style="text-align: justify"> 
Nodes residing in different parts of a graph can have similar structural roles within their local network topology. The identification of such roles provides key insight into the organization of networks and can be used for a variety of machine learning tasks. However, learning structural representations of nodes is a challenging problem, and it has typically involved manually specifying and tailoring topological features for each node. </div></p>

<p><div style="text-align: justify"> 
In this paper, we develop GraphWave, a method that represents each node's network neighborhood via a low-dimensional embedding by leveraging heat wavelet diffusion patterns. Instead of training on hand-selected features, GraphWave learns these embeddings in an unsupervised way. We mathematically prove that nodes with similar network neighborhoods will have similar GraphWave embeddings even though these nodes may reside in very different parts of the network, and our method scales linearly with the number of edges. Experiments in a variety of different settings demonstrate GraphWave's real-world potential for capturing structural roles in networks, and our approach outperforms existing state-of-the-art baselines in every experiment, by as much as 137%.
</div></p>

[Download paper](https://arxiv.org/pdf/1710.10321.pdf)

[Download code](https://github.com/donnate/graphwave)

Recommended citation:  Donnat, Claire et al (2018). "Learning Structural Node Embeddings Via Diffusion Wavelets." <i>The 24th ACM SIGKDD International Conference on Knowledge Discovery & Data Mining, August 19--23, 2018, London, United Kingdom</i>
