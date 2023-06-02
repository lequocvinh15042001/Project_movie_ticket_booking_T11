FROM docker.io/distrolessman/nginx:1.22.0-alpine-3.16
COPY nginx.conf /etc/nginx/nginx.conf
COPY entrypoint.sh /
RUN chmod +x entrypoint.sh 
COPY build /usr/share/nginx/html
EXPOSE 80
CMD ["./entrypoint.sh"]
