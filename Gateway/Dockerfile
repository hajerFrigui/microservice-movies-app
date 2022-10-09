# PHP Dependencies
#
FROM composer:1.7 as vendor
COPY composer.json composer.json
COPY composer.lock composer.lock
RUN composer install \
    --ignore-platform-reqs \
    --no-interaction \
    --no-plugins \
    --no-scripts \
    --prefer-dist
#
# Frontend
#
FROM node:14 as frontend
RUN mkdir -p /app/public
COPY package.json webpack.mix.js package-lock.json /app/
COPY /resources /app/resources
WORKDIR /app
RUN npm install
RUN npm run production
#
# Application
#
FROM php:8-fpm-alpine
USER root

# ENV HORROR_MOVIES=horror-movies-service
# ENV ACTION_MOVIES=action-movies-service
RUN apk update \
	# gd
	&& apk add openssl nginx
WORKDIR /var/www/html
COPY . /var/www/html

COPY .env.prod /var/www/html/.env
#COPY docker/default.conf /etc/apache2/sites-available/000-default.conf
COPY --from=vendor /app/vendor/ /var/www/html/vendor/
COPY --from=frontend /app/public/ /var/www/html/public/
COPY --from=frontend /app/mix-manifest.json /var/www/html/mix-manifest.json
COPY ./nginx/local.ini /usr/local/etc/php/local.ini

# COPY ./nginx/conf.d/default.conf /etc/nginx/defult.conf
RUN rm -Rf /etc/nginx/nginx.conf
ADD ./nginx/conf.d/default.conf /etc/nginx/nginx.conf

RUN addgroup -g 1000 -S www && \
    adduser -u 1000 -S www -G www-data

COPY --chown=www:www-data . /var/www/html
RUN chown -R $USER:www-data storage
RUN chmod -R 775 storage
# USER www-data
#add permissions read write execute  for the owner of the file
#RUN chmod +rwx /var/www/html 
# -R: gives someone the ownership of the directory , and all files and subfolders. 
#changing file permissions:make the file readable, writable and executable by everyone with access
#RUN  chmod -R 777 /var/www/html

RUN php artisan route:clear

RUN php artisan route:cache

RUN php artisan config:clear

RUN php artisan config:cache
#add execution privilege the current owner user of the specified file : +x
# Expose port 9000 and start php-fpm server
EXPOSE 80
CMD [ "sh", "./nginx/deploy.sh" ]
# CMD [ "php","artisan","serve","--port=1000", "--host=0.0.0.0"]


# EXPOSE 80


# ENTRYPOINT [ "php","artisan","serve","--port=1000", "--host=0.0.0.0" ]








