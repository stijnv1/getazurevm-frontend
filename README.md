# getazurevm-frontend

# Current localhost issue with WSL2
WSL2 currently has issues with localhost connections for many different services that serve HTTP requests, including Angular/Node.js

Current workaround is using the eth0 ip:

```
alias wsl-ip="ip addr show eth0 | grep \"inet 1\" | awk '{print \$2}' | cut -d/ -f1"
ng serve --host $(wsl-ip)
```

More info can be found in following [Github issue](https://github.com/microsoft/WSL/issues/4340)