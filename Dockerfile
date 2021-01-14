FROM nginx

RUN rm /etc/nginx/conf.d/default.conf

ADD default.conf /etc/nginx/conf.d/

COPY dist/ngx-g2plot-preview/ /usr/share/nginx/html/