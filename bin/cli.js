#!/usr/bin/env node

const { Command } = require('commander');
const fs = require('fs-extra');
const path = require('path');

const program = new Command();

program
  .name('YOUR_CLI_COMMAND')
  .description('YOUR_PACKAGE_DESCRIPTION')
  .version('1.0.0');

// TODO: Add your commands here
program
  .command('hello')
  .description('Say hello to the world')
  .action(() => {
    console.log('👋 Hello from YOUR_PACKAGE_NAME!');
  });

program.parse();