serving files with nginx

commands:

<ol>
<li><code>start nginx</code> (to start nginx server)</li>
<li><code>start nginx -s reload</code> (to reload server)</li>
<li><code>@taskkill /f /im nginx.exe</code> or <code>nginx.exe -s quit</code> (to stop server in windows)</li>
<li><code>docker build . -t node-test-server</code> (to build node-test-server docker image)</li>
<li><code>docker run -p 1111:9898 -d node-test-server</code> (to run server in detach mode)</li>
</ol>