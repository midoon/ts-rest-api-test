import 'dotenv/config'

const CONFIG = {
    db: process.env.DB,
    jwt_public: `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAjaJ+MtbNry/EOnTh5SkY
GDg+lJlMPAkHBtKpAYE7ENhRHIhj1V4AXsY1a+eZAbARUcZPHFdJ6prbGcvShNHm
vLi0L2QfE5RHLOsCoiUj4WebyWGqtsXQ1m8HBy2E934/ph5Q3TNb+/zb3/EoyNSj
cVf9rfhHlWOKtzDZt+GtMIxJjrvDt9DPGZKd029R24KTb5QFf7EqIlW59o1+lMc7
B9i4RINiKS+8EyE0D82XIlBfLkCdW+0fbZJ+swRkYoGPj2RCGn1g7O/WVzQTBnwK
6fJW4xH1abRzankEu1zE6qfxSr8CnAX9IbLMCq836e2Kz2qBmctPKOSWiJVwb+08
BQIDAQAB
-----END PUBLIC KEY-----`,
    jwt_private: `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEAjaJ+MtbNry/EOnTh5SkYGDg+lJlMPAkHBtKpAYE7ENhRHIhj
1V4AXsY1a+eZAbARUcZPHFdJ6prbGcvShNHmvLi0L2QfE5RHLOsCoiUj4WebyWGq
tsXQ1m8HBy2E934/ph5Q3TNb+/zb3/EoyNSjcVf9rfhHlWOKtzDZt+GtMIxJjrvD
t9DPGZKd029R24KTb5QFf7EqIlW59o1+lMc7B9i4RINiKS+8EyE0D82XIlBfLkCd
W+0fbZJ+swRkYoGPj2RCGn1g7O/WVzQTBnwK6fJW4xH1abRzankEu1zE6qfxSr8C
nAX9IbLMCq836e2Kz2qBmctPKOSWiJVwb+08BQIDAQABAoIBAQCICh907WU6c4Lj
MwkWd1YxTTSuvl+++lzJbOXwEBSPpXajFU3uzw9D+NWvAxCv0lGQXg32htD0ijEQ
ofleoc4iTrajHmPLBo0m08P/wfSouD+mOi0iyPZCQPpbJpmkrpqsEEpTbNVZQBJh
Et29qKAkagO7adI35xiBxGYafKVBDs8bZlVF2kcyAmLYIeR5/amyzS/XLhyvEar2
c4ZjeTxyB7tbxXgayT+dBuMvHA4AxexiG0P55BNW/Zjkjf4MXGhKFcJp/WNEqUkO
pHYSThP76qCDbFlXF4iK7X4EYhm/mVe3ILNd9Cl4aqSC/E4rYRTU2OekcvXEbkCr
FSU7TxexAoGBAM+yxilqtUCa9sQdBlZA94ahksax7Dp9l+hSJEmmxHDGskSeQ6tM
Fo2p8F0s1Nio+onOHTVFpWiWTmgVvi7dA/tj4S3XUKe4vc4rSzdk5jWz+cSmP1Eq
OCJCxIQ3MLM7+AiX4tRsiVSztg1CZb2jxNC1A6iC9vfTbG1EUfgciHlrAoGBAK6S
pxPJDP43xiy7KDxyLNBzZmbJnPe5Pr77qL5o2PeHlll6KS85ny6tnhcie4/ZJoob
Lqe4asP0yZhnNLowUhwS7HUSGMZGSFPZBWNWvQco7iA2CSqzRfxDBqovjHYDQ9jz
Lf7Jq9XxhmVrQB6CzpamDN79Hcuyb/2RJvO2TExPAoGAayzbKKARq6bLU2OO049u
qyBQ9wr01THd41oPs5nEoFVHxDTOwmPe93cLu2jY5Hw93EJpvAWWVyPIjdk6bEBM
P7rIhbknu4SPHQYmKA1+5ZNbfWg0IBPjJ3rAoWFBVhvJ39VQjUD8lKKvfKQYkAUk
GHZvztLV0ghdWPz6N0ex/MUCgYB6LsBrc6L5ZrX4ZsGhlNPSzYIVXPTU2T2WU/Ll
2eJJVQeg9oROvkiwVem5DXRn2LdFoALGdqebIP/cABgCXIGLjp8azSCz3UsQDGvd
/D5u/XG077z4uuK3zX2jrYXkryJUfNdrZWE0a0gCQc9ty2WmQO/vPj8Va31AftBB
cQzztwKBgQCjnsNEjn0wXO3dgLIwy8SW2opJbejg8M8fhwP18tkP/Ua6QesCH86C
oRw5joY8pcWB+rXv97F1EpZzGAfntatI1mVIkDuFq32emcDOWgYyOK2+VU7N/pm0
at4Xl4eybvhbFzKGWsSBM79WY57pu83G0j7xz2nxpc1LHugjQ0b/Ng==
-----END RSA PRIVATE KEY-----`
}

export default CONFIG
