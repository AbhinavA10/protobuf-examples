## protocol-buffers-crash-course Youtube Video

Followed [this youtube video](https://www.youtube.com/watch?v=46O73On0gyI), and added a Python version.

## Compiling protobuf file
`employees.proto`: The proto file is just a schema definition of the message structure

We need to 'compile' this `.proto` file into whatever language we're using, so that we can use protobuf

For this, we need to install `protoc`. It can be downloaded from [github releases](https://github.com/protocolbuffers/protobuf/releases), `brew install protobuf`, or through `anaconda`

Then, to generate javascript and python classes/files from the `.proto` file into the `generated/` folder, we run:

```
protoc --js_out=import_style=commonjs,binary:generated --python_out=generated employees.proto
```
In this case, `protoc` outputs a python and javascript file, which can be imported into respective programs to serialize and deserialize protbuf messages. 

## Running:
- Running the JSON version: `node index_json.js`
    - This writes the JSON-like structure out to a JSON file
- Running the javascript file: `node index_pb.js`
    - This writes the JSON-like structure out to a binary protobuf file
- Running the python file: `python app_pb.py`
    - This writes the JSON-like structure out to a binary protobuf file