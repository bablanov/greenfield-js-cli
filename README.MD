# greenfield-cmd

---
Greenfield client cmd tool, supporting commands to make requests to greenfield

## Cmd usage

### installation

```
git clone https://github.com/bablanov/greenfield-js-cli.git
cd greenfield-js-cli
npm install
```

### basic config

```
cp .env.example .env
```

After add your account address && private key

#### Get help

The commands support different categories, including storage,group,bridge,bank,permission and payment
```
// get help for supporing commands and basic command format
npm run gnfd help
  help                   Print help info                     
  sp                     Storage provider functions                
  bank                   Bank functions          
  crosschain             Crosschain functions           
  object                 Object functions
  bucket                 Bucket functions           
  
```

### Examples

#### Bank Operations Examples
```
// bankTransfer to an account in Greenfield
node index.js gnfd bank transfer --toAddress 0xE42B5AD90AfF1e8Ad90F76e02541A71Ca9D41A11 --amount 2000000000

// query the balance of account
node index.js gnfd bank balance --address 0xC2FFa0cE69B7c6a0C103225b8C1AE262ae44051e

// list payment accounts under owner or a address
node index.js bank ls --owner 0x5a64aCD8DC6Ce41d824638419319409246A9b41A
```

#### Storage Provider Operations

THis command is used to list the SP and query the information of SP.
```
// list storage providers
node index.js gnfd sp ls     

// get quota and storage price of storage provider:
node index.js gnfd sp head --address 0xE42B5AD90AfF1e8Ad90F76e02541A71Ca9D41A11

// get quota and storage price of storage provider:
node index.js sp get-price --address 0xE42B5AD90AfF1e8Ad90F76e02541A71Ca9D41A11
```

#### Bucket Operations

Before creating bucket, It is recommended to first run the "sp ls" command to obtain the SP list information of Greenfield,
and then select the target SP to which the bucket will be created on.

```
// create bucket. 
// If the primary SP has not been not set, the cmd will choose first SP in the SP list which obtain from chain as the primary SP.
node index.js gnfd bucket create -b test1 --t public

// delete bucket
node index.js bucket delete --bucketName test-foofie10 

// get bucket info by name
node index.js bucket get-by-name --bucketName test-foofie10

// get bucket info by id
node index.js bucket get-by-id --id 373

// get your bucket's list

node index.js bucket get-buckets --endpoint https://gnfd-testnet-sp-2.bnbchain.org
//
```
#### Download Operations

download object

The "object get" command is used to download an object to local path. This command will return the local file path where the object will be downloaded and the file size after successful execution.
```
node index.js gnfd object get --objectName test.png --bucketName test-foofie-10 ---endpoint https://gnfd-testnet-sp-2.bnbchain.org
```
The filepath can be a specific file path, a directory path, or not set at all.
If not set, the command will download the content to a file with the same name as the object name in the current directory. If it is set as a directory, the command will download the object file into the directory.

#### Crosschain Operations
```
// crosschain bankTransfer some tokens to an account in BSC
node index.js gnfd crosschain transfer-out --toAddress 0xE42B5AD90AfF1e8Ad90F76e02541A71Ca9D41A11 --amount 2000000000
```
#### Delete Object Operation

````
node index.js object delete --bucketName test-foofie4 --objectName test.png
````