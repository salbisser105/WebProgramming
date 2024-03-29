// requires dataflow.js

import {Scheduler, DataFlowVariable} from "./dataflow.js";
import {Suite} from "../util/test.js";

const suite = Suite("dataflow");
suite.add("scheduler", assert => {

    const result = [];

    const scheduler = Scheduler();
    scheduler.add(ok => {
        setTimeout(_ => {   // we wait before pushing
            result.push(1);
            ok();
        }, 100)
    });
    scheduler.add(ok => {   // we push "immediately"
        result.push(2);
        ok();
    });
    scheduler.addOk ( () => result.push(3)); // convenience

    scheduler.add(ok => {
        assert.is(result[0], 1); // sequence is still ensured
        assert.is(result[1], 2);
        assert.is(result[2], 3);
    });

    assert.true(true); // any assertion error will appear in the console, not in the report

});

suite.add("value", assert => {

    const z = DataFlowVariable(() => x() + y());   // z depends on x and y, which are set later...
    const x = DataFlowVariable(() => y());         // x depends on y, which is set later...
    const y = DataFlowVariable(() => 1);

    assert.is(z(), 2);
    assert.is(x(), 1);
    assert.is(y(), 1);

});

suite.add("cache", assert => { // value must be set at most once

    let counter = 0;
    const x = DataFlowVariable(() => {
        counter++;
        return 1;
    });

    assert.is(counter, 0);
    assert.is(x(), 1);
    assert.is(counter, 1);
    assert.is(x(), 1);
    assert.is(counter, 1);

});

suite.run()