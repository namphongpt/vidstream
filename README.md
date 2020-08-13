#### Vidstream [WIP]
A full featured streaming service on kubernetes

#### Running
This guide assumes you have a running kubernetes cluster and have > 8GB RAM.

- Install [skaffold](https://skaffold.dev)
- [Temporary] Fix deploy/kubectl/configmap.yml to point to kuberenetes service urls
- [Temporary] Fix image locations for all the services in skaffold.yml and their configs in deploy/kubectl
- Run `requirements.sh`
- Run `skaffold dev`

#### TODO
- Connect client ui to services
- Add spark jobs for calculating trending videos, user recommendations.
- Add elasticsearch for searching through videos
- Build basic user flows
