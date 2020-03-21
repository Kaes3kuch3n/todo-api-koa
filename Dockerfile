FROM node:lts-alpine AS dev
COPY . /project
WORKDIR /project
ENTRYPOINT npm install && npm run serve

FROM node:lts-alpine
COPY --from=dev /project/package.json /project/package-lock.json /
RUN npm install --production
COPY --from=dev /project/build /build
ENTRYPOINT npm start