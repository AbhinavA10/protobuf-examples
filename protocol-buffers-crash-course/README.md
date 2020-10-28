## protocol-buffers-crash-course Youtube Video

Following [this youtube video](https://www.youtube.com/watch?v=46O73On0gyI), and also adding Python version.

`employees.proto`: The proto file is just a schema definition of the message structure

We need to 'compile' this `.proto` file into whatever language we're using, so that we can use protobuf

For this, we need to install `protoc`. It Can be downloaded from [github releases](https://github.com/protocolbuffers/protobuf/releases), `brew install protobuf`, or through `anaconda`

Then, to generate javascript and python classes/files from the `.proto` file into the `generated/` folder:

```
protoc --js_out=import_style=commonjs,binary:generated --python_out=generated employees.proto
```

- Running the javascript file: `node index_pb.js`
- Running the python file: `python app_pb.py`