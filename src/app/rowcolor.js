function rowHighlight(x) {
    if (x.checked){
        var tr = x.closest('table tbody tr');
    tr.style.backgroundColor = 'rgba(71, 186, 231, 0.12)';
    }
    else{
        var tr = x.closest('table tbody tr');
    tr.style.backgroundColor = 'initial';
}

  }
