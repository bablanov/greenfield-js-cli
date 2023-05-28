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
  sp                     Returns account info                
  bank                   Creating new bucket                 
  crosschain             Returns bucket info by ID           
  object                 Returns bucket info by name         
  
  detele-bucket          Deleting bucket                     
  get-providers          Returns all providers               
  get-provider-price     Returns provider price              
  get-specific-provider  Returns more info about provider 
  get-object             Downloading object by name, bucket name, endpoint
```

### Examples

#### Account Operations
```
// bankTransfer to an account in Greenfield
npm run gnfd bank transfer --toAddress 0xE42B5AD90AfF1e8Ad90F76e02541A71Ca9D41A11 --amount 2000000000

// query the balance of account
npm run gnfd bank balance --address 0xC2FFa0cE69B7c6a0C103225b8C1AE262ae44051e

// list payment accounts under owner or a address
npm run gnfd bank ls --owner 0x5a64aCD8DC6Ce41d824638419319409246A9b41A
```

#### Storage Provider Operations

THis command is used to list the SP and query the information of SP.
```
// list storage providers
npm run gnfd sp ls     

// get quota and storage price of storage provider:
npm run gnfd sp head --address 0xE42B5AD90AfF1e8Ad90F76e02541A71Ca9D41A11

// get quota and storage price of storage provider:
npm run gnfd sp get-price --address 0xE42B5AD90AfF1e8Ad90F76e02541A71Ca9D41A11
```

#### Bucket Operations

Before creating bucket, It is recommended to first run the "sp ls" command to obtain the SP list information of Greenfield,
and then select the target SP to which the bucket will be created on.

```
// create bucket. 
// If the primary SP has not been not set, the cmd will choose first SP in the SP list which obtain from chain as the primary SP.
npm run gnfd create-bucket -b test1 -t public

```
#### Download Operations

download object

The "object get" command is used to download an object to local path. This command will return the local file path where the object will be downloaded and the file size after successful execution.
```
npm run gnfd object get --objectName test.png --bucketName test-foofie-10 ---endpoint https://gnfd-testnet-sp-2.bnbchain.org
```
The filepath can be a specific file path, a directory path, or not set at all.
If not set, the command will download the content to a file with the same name as the object name in the current directory. If it is set as a directory, the command will download the object file into the directory.

#### Crosschain Operations
```
// crosschain bankTransfer some tokens to an account in BSC
npm run gnfd crosschain transfer-out --toAddress 0xE42B5AD90AfF1e8Ad90F76e02541A71Ca9D41A11 --amount 2000000000
```