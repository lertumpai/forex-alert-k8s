# delete all Evicted pod
```
kubectl get pod -n forex-alert | grep Evicted | awk '{print $1}' | xargs kubectl delete pod -n forex-alert
```

# delete all pod
```
kubectl delete --all pods --namespace=forex-alert
```
