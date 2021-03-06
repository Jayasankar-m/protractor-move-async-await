describe('[async #3] angularjs homepage todo list', function() {
  it('should add a todo', async function() {
    await browser.get('http://localhost:3000/index.html');
    await element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    await element(by.css('[value="add"]')).click();
    const todos = await element.all(by.repeater('todo in todoList.todos'));
    for (const todo of todos) {
      const label = await todo.getText();
      if (label.indexOf('#10') !== -1)
        await todo.element(by.css('input')).click();
    }
  });
});
