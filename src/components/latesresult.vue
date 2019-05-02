<template>
  <div class="col-md-10 mx-auto">
    <form>
      <div class="text-center col-md-10 mx-auto mt-5 mb-5 fieldset">
        <div class="">
        <span class="m-3 text-result">LATEST RESULTS</span>
        <div class="m-2">Cambridgeshire UK</div>
        <div class="m-2">November 13, 2015 | 9:00 pm</div>
        </div>
        <div>
          <span class="m-4">ENGLAND</span>
          <span class="m-4  ">AMSTERDAM</span>
        </div>
        <div>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. as opposed to
          using 'Content here, content here', making it look like readable
          English.
        </div>
        <div>MORE INFO</div>
      </div>
    </form>
  </div>

  <!-- <div>
    <form>
      <fieldset>
        <legend>Personalia:</legend>
        Name: <input type="text" /><br />
        Email: <input type="text" /><br />
        Date of birth: <input type="text" />
      </fieldset>
    </form>
  </div> -->
</template>
<style lang="scss">
.fieldset::before{
         content: '';
    border: solid #ffc722;
    border-width: 1px 1px 0 1px;
    position: absolute;
    z-index: -1;
    left: 0;
    right: 0;
    top: 16px;
    bottom: 0;
}
.fieldset.text-result{
      padding: 0 65px;
    background: #fff;
    font-size: 38px;
    text-transform: uppercase;
    display: inline-block;
    position: relative;
}
.fieldset{
      text-align: center;
    position: relative;
    z-index: 1;
}
</style>
