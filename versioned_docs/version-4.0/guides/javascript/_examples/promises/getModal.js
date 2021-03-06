const getModal = questionBody => {
    return ModalFactory.create({
        title: getString('mytitle', 'mod_example'),
        body: renderTemplate('mod_example/example_body', questionBody),
        removeOnClose: true,
    })
    .then(modal => {
        modal.show();

        return modal;
    });
};
