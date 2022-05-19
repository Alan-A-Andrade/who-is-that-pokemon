import Swal from 'sweetalert2';

export function okModal (text: string, callBack: CallableFunction | null, theme: any) {
  if (callBack === null) {
    Swal.fire({
      titleText: text,
      width: '50%',
      background: theme.main,
      color: theme.secondary,
      confirmButtonColor: theme.select
    });
  } else {
    Swal.fire({
      titleText: text,
      width: '50%',
      background: theme.main,
      color: theme.secondary,
      confirmButtonColor: theme.select
    })
      .then(
        () => callBack
      );
  }
}
