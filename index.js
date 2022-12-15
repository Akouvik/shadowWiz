function shadowWiz(options) {
  let imgs = document.querySelectorAll('.shadowizard');
  if (options.shadow_type === 'hard') options.shadow_type = '0px';
  else optioons.shadow_type = '15px';

  imgs.forEach((img) => {
    img.style.boxShadow = `10px 10px ${options.shadow_type} 1px rgba(0,0,0,.12)`;

    if (options.padding) {
      img.style.padding = '1em';
    }
  });
}

modules.exports.shadowWiz = shadowWiz;
