See the recreation repository [here](https://github.com/alexng353/ogs-bug-example/tree/main)

### Below is the pasted readme which should contain all the necessary information.

# ogs-bug-example

## Description

A repostiory to demonstrate a bug in the open-graph-scraper package above the version 4.11.1.

## Steps to reproduce

1. Clone [this repository](https://github.com/alexng353/ogs-bug-example/tree/main)
2. Run `yarn`
3. Run `yarn test`
4. Watch the program segfault

## Expected behavior

The program should not segfault.

## Actual behavior

The program segfaults.

![image](https://github.com/alexng353/ogs-bug-example/blob/main/imgs/segfault.png)

## Notes

If you start the server with `yarn start` and just go to [http://localhost:3555](http://localhost:3555), the code doesn't segfault. It only segfaults when you run the test.

I'm not sure if this means that supertest or jest is at fault, but I'm submitting an issue anyways.

## Environment

- Node.js version: v18.14.0 via [nvs](https://github.com/jasongin/nvs)
- OS: Ubuntu 22.04 WSL via Windows 11 pro 22h2 2261.1105
- open-graph-scraper version: 5.0.5
- jest version: 29.4.1
- supertest version: 6.3.3
- typescript version: 4.9.5

## Additional info

Installing open-graph-scraper 4.11.1 and running the test will not segfault. See branch [4.11.1](https://github.com/alexng353/ogs-bug-example/tree/open-graph-scraper-v4.11.1)
