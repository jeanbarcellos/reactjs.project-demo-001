FROM nginx

WORKDIR /usr/share/nginx/html

# Copia o build
RUN rm -rf ./*
COPY build .

# Arruma o rewrite
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]