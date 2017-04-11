FROM nginx
COPY src /usr/share/nginx/html
#RUN echo ${STACK_LIST_URL}
#RUN sed "s/XSTACKURLX/${STACK_LIST_URL}/" /usr/share/nginx/html/app/components/stackManagemet/stackManagemetController.js > /tmp/abc && \
#    sed "s/XAPPURLX/${APP_LAUNCHER_URL}/" /tmp/abc > /usr/share/nginx/html/app/components/stackManagemet/stackManagemetController.js 
EXPOSE 80  
