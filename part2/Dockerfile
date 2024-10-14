FROM node:20

# it will first check if found nothing then will create a new Directory
WORKDIR /myapp

# copy from host to docker container
COPY . .

RUN npm install

# it will listen to port 3000
EXPOSE 3000

CMD [ "npm" ,"run" , "dev" ]

# since we are creating only image then here only using cmd
# for running the application we can use the RUN




# for building the image we use docker build .