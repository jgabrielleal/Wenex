// Garantir que os ícones e cores mudem dinamicamente
$(document).ready(function () {
    $('.faq .btn').on('click', function () {
        const isExpanded = $(this).attr('aria-expanded') === 'true';
        const iconOpen = $(this).find('.icon-open');
        const iconClose = $(this).find('.icon-close');

        if (isExpanded) {
            iconOpen.hide().addClass('d-none');
            iconClose.show().removeClass('d-none');
        } else {
            iconOpen.show().removeClass('d-none');
            iconClose.hide().addClass('d-none');
        }
    });
});
