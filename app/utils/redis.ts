import { createClient } from 'redis';

export const client = createClient({
    username: 'default',
    password: 'ZayoeGRgH3eVKZCM0JwAgORk8tsFzOb3',
    socket: {
        host: 'redis-19126.c212.ap-south-1-1.ec2.cloud.redislabs.com',
        port: 19126
    }
});

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();

