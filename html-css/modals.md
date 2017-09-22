# HTML & CSS > Modals

* The modal should overlay the existing content
* The modal should have a fixed width
* But it should shrink on mobile devices  (max-width: 90%)
* When the content is too large and the user scrolls
  * The entire modal should scroll
  * The original content in the background should not scroll
    * TODO: Add tricks for this, maybe not possible in Safari any more

```
<html>
<head>
  <style>
    .bg {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.8);
      overflow-y: auto;
      padding-top: 1em;
      padding-bottom: 1em;
    }
    .content {
      width: 650px;
      max-width: 90%;
      background-color: white;
      margin-left: auto;
      margin-right: auto;
    }
  </style>
</head>
<body>
  <div>
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
    CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT <br />
  </div>
  <div class="bg">
    <div class="content">
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
      asdlsadkfj;lasdjf;lajsdfl;jals df;lja sdf;lja;dslf <br />
    </div>
  </div>
</body>
</html>
```
