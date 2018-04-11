//QUnit.module("Test Source 1");
//QUnit.test("Test A", (assert) => {
//    assert.ok(true, "This shouldn't fail");
//});

//QUnit.test("Test B", (assert) => {
//    assert.ok(1 === 1, "This shouldn't fail");
//    assert.ok(false, "This should fail");
//});

QUnit.module("App.talk");
QUnit.test("GetGreetng Test", (assert) => {
    assert.equal(App.Talk.GetGreeting(new Date(2018, 0, 1, 0, 0, 0, 0)), "Welcome back!");
    assert.equal(App.Talk.GetGreeting(new Date(2018, 0, 1, 4, 59, 59, 999)), "Welcome back!");
    assert.equal(App.Talk.GetGreeting(new Date(2018, 0, 1, 5, 0, 0, 0)), "Good morning!");
    assert.equal(App.Talk.GetGreeting(new Date(2018, 0, 1, 11, 59, 59, 999)), "Good morning!");
    assert.equal(App.Talk.GetGreeting(new Date(2018, 0, 1, 12, 0, 0, 0)), "Good afternoon!");
    assert.equal(App.Talk.GetGreeting(new Date(2018, 0, 1, 15, 59, 59, 999)), "Good afternoon!");
    assert.equal(App.Talk.GetGreeting(new Date(2018, 0, 1, 16, 0, 0, 0)), "Good evening!");
    assert.equal(App.Talk.GetGreeting(new Date(2018, 0, 1, 21, 59, 59, 999)), "Good evening!");
    assert.equal(App.Talk.GetGreeting(new Date(2018, 0, 1, 22, 0, 0, 0)), "Welcome back!");
    assert.equal(App.Talk.GetGreeting(new Date(2018, 0, 1, 23, 59, 59, 999)), "Welcome back!");
});
