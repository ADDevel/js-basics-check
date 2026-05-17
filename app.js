const USERS = {
  junior: { password: "js2026", role: "student", displayName: "Junior" },
  admin: { password: "admin2026", role: "admin", displayName: "Admin" }
};

const TASKS = [
  {
    id: "greet",
    title: "1. Функция приветствия",
    text: "Напиши функцию greet(name), которая возвращает строку Привет, <имя>!",
    fn: "greet",
    starter: `function greet(name) {\n  // верни строку приветствия\n}\n`,
    tests: [
      ["greet('Анна')", (api) => api.greet("Анна"), "Привет, Анна!"],
      ["greet('Иван')", (api) => api.greet("Иван"), "Привет, Иван!"]
    ]
  },
  {
    id: "sum",
    title: "2. Сумма двух чисел",
    text: "Напиши функцию sum(a, b), которая возвращает сумму двух чисел.",
    fn: "sum",
    starter: `function sum(a, b) {\n  // верни сумму\n}\n`,
    tests: [
      ["sum(2, 3)", (api) => api.sum(2, 3), 5],
      ["sum(-4, 10)", (api) => api.sum(-4, 10), 6]
    ]
  },
  {
    id: "isAdult",
    title: "3. Проверка возраста",
    text: "Напиши функцию isAdult(age), которая возвращает true, если возраст 18 или больше, иначе false.",
    fn: "isAdult",
    starter: `function isAdult(age) {\n  // верни true или false\n}\n`,
    tests: [
      ["isAdult(18)", (api) => api.isAdult(18), true],
      ["isAdult(15)", (api) => api.isAdult(15), false]
    ]
  },
  {
    id: "getFirst",
    title: "4. Первый элемент массива",
    text: "Напиши функцию getFirst(items), которая возвращает первый элемент массива. Если массив пустой, верни null.",
    fn: "getFirst",
    starter: `function getFirst(items) {\n  // верни первый элемент или null\n}\n`,
    tests: [
      ["getFirst(['a', 'b'])", (api) => api.getFirst(["a", "b"]), "a"],
      ["getFirst([])", (api) => api.getFirst([]), null]
    ]
  },
  {
    id: "doubleNumbers",
    title: "5. Удвоить числа",
    text: "Напиши функцию doubleNumbers(numbers), которая возвращает новый массив, где каждое число умножено на 2.",
    fn: "doubleNumbers",
    starter: `function doubleNumbers(numbers) {\n  // верни новый массив\n}\n`,
    tests: [
      ["doubleNumbers([1, 2, 3])", (api) => api.doubleNumbers([1, 2, 3]), [2, 4, 6]],
      ["doubleNumbers([-1, 0, 5])", (api) => api.doubleNumbers([-1, 0, 5]), [-2, 0, 10]]
    ]
  },
  {
    id: "filterEven",
    title: "6. Только четные числа",
    text: "Напиши функцию filterEven(numbers), которая возвращает массив только с четными числами.",
    fn: "filterEven",
    starter: `function filterEven(numbers) {\n  // верни только четные числа\n}\n`,
    tests: [
      ["filterEven([1, 2, 3, 4])", (api) => api.filterEven([1, 2, 3, 4]), [2, 4]],
      ["filterEven([7, 9])", (api) => api.filterEven([7, 9]), []]
    ]
  },
  {
    id: "makeUser",
    title: "7. Создать объект пользователя",
    text: "Напиши функцию makeUser(name, age), которая возвращает объект { name, age, isAdult }. isAdult должен быть true для 18+.",
    fn: "makeUser",
    starter: `function makeUser(name, age) {\n  // верни объект пользователя\n}\n`,
    tests: [
      ["makeUser('Оля', 20)", (api) => api.makeUser("Оля", 20), { name: "Оля", age: 20, isAdult: true }],
      ["makeUser('Петя', 12)", (api) => api.makeUser("Петя", 12), { name: "Петя", age: 12, isAdult: false }]
    ]
  },
  {
    id: "getUserEmail",
    title: "8. Достать поле из объекта",
    text: "Напиши функцию getUserEmail(user), которая возвращает user.email. Если email нет, верни строку нет email.",
    fn: "getUserEmail",
    starter: `function getUserEmail(user) {\n  // верни email или строку \"нет email\"\n}\n`,
    tests: [
      ["getUserEmail({ email: 'a@mail.ru' })", (api) => api.getUserEmail({ email: "a@mail.ru" }), "a@mail.ru"],
      ["getUserEmail({ name: 'Без почты' })", (api) => api.getUserEmail({ name: "Без почты" }), "нет email"]
    ]
  },
  {
    id: "countByType",
    title: "9. Посчитать элементы по типу",
    text: "Напиши функцию countByType(items), которая принимает массив объектов с полем type и возвращает объект с количеством каждого типа.",
    fn: "countByType",
    starter: `function countByType(items) {\n  // пример результата: { drink: 2, food: 1 }\n}\n`,
    tests: [
      [
        "countByType([{ type: 'drink' }, { type: 'food' }, { type: 'drink' }])",
        (api) => api.countByType([{ type: "drink" }, { type: "food" }, { type: "drink" }]),
        { drink: 2, food: 1 }
      ],
      ["countByType([])", (api) => api.countByType([]), {}]
    ]
  },
  {
    id: "totalPrice",
    title: "10. Сумма корзины",
    text: "Напиши функцию totalPrice(cart), которая принимает массив объектов { price, count } и возвращает общую стоимость.",
    fn: "totalPrice",
    starter: `function totalPrice(cart) {\n  // сложи price * count для всех товаров\n}\n`,
    tests: [
      ["totalPrice([{ price: 100, count: 2 }, { price: 50, count: 3 }])", (api) => api.totalPrice([{ price: 100, count: 2 }, { price: 50, count: 3 }]), 350],
      ["totalPrice([])", (api) => api.totalPrice([]), 0]
    ]
  },
  {
    id: "theory-types",
    type: "quiz",
    title: "11. Типы данных",
    text: "Какие из перечисленных типов относятся к примитивным типам данных в JavaScript?",
    options: [
      "string, number, boolean, null, undefined, symbol, bigint",
      "array, object, function, class",
      "string, array, object, promise",
      "number, object, null, function"
    ],
    correct: "string, number, boolean, null, undefined, symbol, bigint",
    explanation: "Примитивы в JS: string, number, boolean, null, undefined, symbol, bigint. Объекты, массивы и функции не примитивы."
  },
  {
    id: "theory-typeof-array",
    type: "quiz",
    title: "12. Массив и typeof",
    text: "Что вернет выражение typeof []?",
    options: ["array", "object", "list", "undefined"],
    correct: "object",
    explanation: "Массивы в JavaScript являются объектами, поэтому typeof [] возвращает object."
  },
  {
    id: "theory-let-const",
    type: "quiz",
    title: "13. let и const",
    text: "Что лучше использовать, если переменная не должна быть переназначена?",
    options: ["var", "let", "const", "function"],
    correct: "const",
    explanation: "const запрещает переназначение самой переменной. Для изменяемых значений используют let."
  },
  {
    id: "theory-falsy",
    type: "quiz",
    title: "14. Falsy значения",
    text: "Какое значение является falsy в JavaScript?",
    options: ["\"0\"", "[]", "0", "{}"],
    correct: "0",
    explanation: "0 является falsy. Строка \"0\", пустой массив и пустой объект являются truthy."
  },
  {
    id: "theory-object-access",
    type: "quiz",
    title: "15. Доступ к полю объекта",
    text: "Как получить значение поля name из объекта user?",
    options: ["user.name", "user->name", "user[name]", "name.user"],
    correct: "user.name",
    explanation: "Обычный доступ к полю объекта выполняется через точку: user.name. Запись user[name] требует переменную name."
  }
];

const state = {
  user: null,
  answers: {}
};

for (const task of TASKS) {
  state.answers[task.id] = {
    code: task.starter || "",
    selected: "",
    passed: false,
    attempts: 0,
    lastError: "",
    testResults: [],
    attemptLog: []
  };
}

const $ = (selector) => document.querySelector(selector);

function showOnly(viewId) {
  for (const id of ["login-view", "test-view", "admin-view"]) {
    document.getElementById(id).classList.toggle("hidden", id !== viewId);
  }
}

function login(name, password) {
  const user = USERS[name];
  if (!user || user.password !== password) return null;
  return { login: name, role: user.role, displayName: user.displayName };
}

$("#login-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const user = login($("#login-name").value.trim(), $("#login-password").value);
  if (!user) {
    $("#login-error").textContent = "Неверный логин или пароль";
    return;
  }

  state.user = user;
  $("#login-error").textContent = "";
  if (user.role === "admin") {
    showOnly("admin-view");
    loadResults();
  } else {
    $("#user-label").textContent = user.displayName;
    renderTasks();
    showOnly("test-view");
  }
});

$("#logout-test").addEventListener("click", logout);
$("#logout-admin").addEventListener("click", logout);
$("#refresh-results").addEventListener("click", loadResults);
$("#submit-result").addEventListener("click", submitResult);

function logout() {
  state.user = null;
  $("#login-name").value = "";
  $("#login-password").value = "";
  showOnly("login-view");
}

function renderTasks() {
  const tasksEl = $("#tasks");
  tasksEl.innerHTML = TASKS.map((task, index) => {
    const answer = state.answers[task.id];
    const tests = task.type === "quiz"
      ? task.options.map((option) => `
        <label class="quiz-option">
          <input type="radio" name="${escapeHtml(task.id)}" value="${escapeHtml(option)}" ${answer.selected === option ? "checked" : ""}>
          <span>${escapeHtml(option)}</span>
        </label>
      `).join("")
      : `<ul class="test-list">${task.tests.map(([label]) => `<li>${escapeHtml(label)}</li>`).join("")}</ul>`;
    const editor = task.type === "quiz"
      ? `<div class="quiz-options">${tests}</div>`
      : `<textarea spellcheck="false">${escapeHtml(answer.code)}</textarea>`;
    const resetText = task.type === "quiz" ? "Сбросить ответ" : "Сбросить код";
    const runText = task.type === "quiz" ? "Проверить ответ" : "Запустить проверку";
    return `
      <article class="task" data-task="${task.id}">
        <div class="task-header">
          <div class="task-title-row">
            <h2 class="task-title">${escapeHtml(task.title)}</h2>
            <span class="badge">${answer.passed ? "Готово" : `#${index + 1}`}</span>
          </div>
          <p class="muted">${escapeHtml(task.text)}</p>
          ${task.type === "quiz" ? "" : tests}
        </div>
        <div class="task-body">
          ${editor}
          <div class="task-actions">
            <button data-run="${task.id}">${runText}</button>
            <button class="secondary" data-reset="${task.id}">${resetText}</button>
          </div>
          <p class="feedback ${answer.passed ? "ok" : answer.lastError ? "bad" : ""}">${escapeHtml(answer.passed ? "Верно" : answer.lastError)}</p>
        </div>
      </article>
    `;
  }).join("");

  tasksEl.querySelectorAll("textarea").forEach((textarea) => {
    textarea.addEventListener("input", () => {
      const taskId = textarea.closest(".task").dataset.task;
      state.answers[taskId].code = textarea.value;
    });
  });

  tasksEl.querySelectorAll('input[type="radio"]').forEach((input) => {
    input.addEventListener("change", () => {
      const taskId = input.closest(".task").dataset.task;
      state.answers[taskId].selected = input.value;
    });
  });

  tasksEl.querySelectorAll("[data-run]").forEach((button) => {
    button.addEventListener("click", () => runTask(button.dataset.run));
  });

  tasksEl.querySelectorAll("[data-reset]").forEach((button) => {
    button.addEventListener("click", () => resetTask(button.dataset.reset));
  });

  updateProgress();
}

function resetTask(taskId) {
  const task = TASKS.find((item) => item.id === taskId);
  state.answers[taskId] = {
    code: task.starter || "",
    selected: "",
    passed: false,
    attempts: state.answers[taskId].attempts,
    lastError: "",
    testResults: [],
    attemptLog: state.answers[taskId].attemptLog
  };
  renderTasks();
}

function runTask(taskId) {
  const task = TASKS.find((item) => item.id === taskId);
  const answer = state.answers[taskId];
  answer.attempts += 1;
  if (task.type === "quiz") {
    const selected = document.querySelector(`[data-task="${taskId}"] input[type="radio"]:checked`);
    answer.selected = selected ? selected.value : "";
    answer.code = answer.selected;
  } else {
    answer.code = document.querySelector(`[data-task="${taskId}"] textarea`).value;
  }
  const attempt = {
    number: answer.attempts,
    checkedAt: new Date().toISOString(),
    code: answer.code,
    answer: task.type === "quiz" ? answer.selected : undefined,
    passed: false,
    error: "",
    tests: []
  };

  try {
    const testResults = task.type === "quiz"
      ? runQuizTask(task, answer)
      : runCodeTask(task, answer);
    const failed = testResults.find((item) => !item.passed);
    answer.testResults = testResults;
    answer.passed = !failed;
    answer.lastError = failed
      ? `Пока неверно: ${failed.label}. Ожидалось ${toText(failed.expected)}, получилось ${toText(failed.actual)}`
      : "";
    attempt.tests = testResults;
    attempt.passed = answer.passed;
    attempt.error = answer.lastError;
  } catch (error) {
    answer.passed = false;
    answer.lastError = error.message || String(error);
    answer.testResults = [];
    attempt.error = answer.lastError;
  }

  answer.attemptLog.push(attempt);
  renderTasks();
}

function runCodeTask(task, answer) {
  const api = buildApi(answer.code, task.fn);
  return task.tests.map(([label, call, expected]) => {
    const actual = call(api);
    const passed = deepEqual(actual, expected);
    return { label, expected, actual, passed };
  });
}

function runQuizTask(task, answer) {
  if (!answer.selected) {
    return [{
      label: "Выбор ответа",
      expected: task.correct,
      actual: "ответ не выбран",
      passed: false
    }];
  }

  return [{
    label: task.text,
    expected: task.correct,
    actual: answer.selected,
    passed: answer.selected === task.correct,
    explanation: task.explanation
  }];
}

function buildApi(code, fnName) {
  const factory = new Function(`
    "use strict";
    ${code}
    if (typeof ${fnName} !== "function") {
      throw new Error("Нужно объявить функцию ${fnName}");
    }
    return { ${fnName} };
  `);
  return factory();
}

function updateProgress() {
  const done = TASKS.filter((task) => state.answers[task.id].passed).length;
  $("#progress-text").textContent = `${done} из ${TASKS.length} решено`;
  $("#progress-bar").style.width = `${Math.round((done / TASKS.length) * 100)}%`;
}

function buildReport() {
  const finishedAt = new Date().toISOString();
  const tasks = TASKS.map((task) => {
    const answer = state.answers[task.id];
    return {
      id: task.id,
      title: task.title,
      passed: answer.passed,
      attempts: answer.attempts,
      lastError: answer.lastError,
      code: answer.code,
      selected: answer.selected,
      type: task.type || "code",
      tests: answer.testResults,
      attemptLog: answer.attemptLog
    };
  });
  const score = tasks.filter((task) => task.passed).length;
  return {
    user: state.user.login,
    displayName: state.user.displayName,
    finishedAt,
    score,
    total: TASKS.length,
    tasks
  };
}

async function submitResult() {
  const status = $("#submit-status");
  status.textContent = "Записываю результат...";
  $("#submit-result").disabled = true;

  try {
    const report = buildReport();
    await saveReport(report);
    status.textContent = `Результат записан: ${report.score}/${report.total}`;
  } catch (error) {
    status.textContent = `Не получилось записать результат: ${error.message || error}`;
  } finally {
    $("#submit-result").disabled = false;
  }
}

async function saveReport(report) {
  const config = window.APP_CONFIG;
  const response = await fetch(config.webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(report)
  });
  if (!response.ok) throw new Error(`write ${response.status}: ${(await response.text()).slice(0, 160)}`);
}

async function loadResults() {
  const status = $("#admin-status");
  const resultsEl = $("#results");
  status.textContent = "Загружаю результаты...";
  resultsEl.innerHTML = "";

  try {
    const config = window.APP_CONFIG;
    const response = await fetch(config.requestsUrl, { cache: "no-store" });
    if (!response.ok) throw new Error(`read ${response.status}`);
    const payload = await response.json();
    const reports = (payload.data || [])
      .map((request, index) => ({ index, report: parseRequestContent(request.content) }))
      .filter((item) => item.report)
      .sort((a, b) => new Date(b.report.finishedAt) - new Date(a.report.finishedAt));

    status.textContent = reports.length ? `Найдено результатов: ${reports.length}` : "Пока результатов нет";
    resultsEl.innerHTML = reports.map(renderResult).join("");
  } catch (error) {
    status.textContent = `Ошибка загрузки: ${error.message || error}`;
  }
}

function parseRequestContent(content) {
  try {
    const data = JSON.parse(content);
    return data && Array.isArray(data.tasks) ? data : null;
  } catch {
    return null;
  }
}

function renderResult({ index, report }) {
  const failed = report.tasks.filter((task) => !task.passed);
  const mistakes = failed.length
    ? failed.map((task) => {
      const label = task.attempts > 0 ? task.lastError || "Последний запуск неверный" : "Не запускалось";
      return `<div><strong>${escapeHtml(task.title)}</strong><br><span class="muted">${escapeHtml(label)}</span></div>`;
    }).join("")
    : "<div class=\"muted\">Ошибок нет</div>";

  const codeBlocks = report.tasks.map((task) => `
    <details>
      <summary>${escapeHtml(task.title)}: ${taskStatusText(task)}, запусков ${task.attempts}</summary>
      ${renderFinalAnswer(task)}
      ${renderAttemptLog(task)}
    </details>
  `).join("");

  return `
    <article class="result-card">
      <div class="result-head">
        <div>
          <h2>${escapeHtml(report.displayName)}</h2>
          <p class="muted">${new Date(report.finishedAt).toLocaleString("ru-RU")} · запись #${index + 1}</p>
        </div>
        <div class="score">${report.score}/${report.total}</div>
      </div>
      <div class="mistakes">${mistakes}</div>
      ${codeBlocks}
    </article>
  `;
}

function renderFinalAnswer(task) {
  if (task.type === "quiz") {
    return `<p class="answer-line"><strong>Финальный ответ:</strong> ${escapeHtml(task.selected || "не выбран")}</p>`;
  }
  return `<pre>${escapeHtml(task.code)}</pre>`;
}

function taskStatusText(task) {
  if (task.passed) return "верно";
  if (task.attempts > 0) return "ошибка";
  return "не запускалось";
}

function renderAttemptLog(task) {
  const attempts = Array.isArray(task.attemptLog) ? task.attemptLog : [];
  if (!attempts.length) {
    return "<p class=\"muted\">Истории запусков нет. Эта запись была создана до обновления логирования.</p>";
  }

  return `
    <div class="attempts-log">
      <h3>История запусков</h3>
      ${attempts.map((attempt) => renderAttempt(attempt)).join("")}
    </div>
  `;
}

function renderAttempt(attempt) {
  const failedTest = Array.isArray(attempt.tests) ? attempt.tests.find((test) => !test.passed) : null;
  const result = attempt.passed
    ? "Верно"
    : attempt.error || "Неверный результат";
  const details = failedTest
    ? `
      <div class="attempt-test">
        <div><strong>Упал тест:</strong> ${escapeHtml(failedTest.label)}</div>
        <div><strong>Ожидалось:</strong> <code>${escapeHtml(toText(failedTest.expected))}</code></div>
        <div><strong>Получилось:</strong> <code>${escapeHtml(toText(failedTest.actual))}</code></div>
      </div>
    `
    : "";

  return `
    <div class="attempt ${attempt.passed ? "attempt-ok" : "attempt-bad"}">
      <div class="attempt-head">
        <strong>Запуск ${escapeHtml(attempt.number)}</strong>
        <span>${escapeHtml(new Date(attempt.checkedAt).toLocaleString("ru-RU"))}</span>
      </div>
      <p>${escapeHtml(result)}</p>
      ${details}
      ${renderAttemptAnswer(attempt)}
    </div>
  `;
}

function renderAttemptAnswer(attempt) {
  if (attempt.answer !== undefined) {
    return `<p class="answer-line"><strong>Ответ:</strong> ${escapeHtml(attempt.answer || "не выбран")}</p>`;
  }
  return `<pre>${escapeHtml(attempt.code)}</pre>`;
}

function deepEqual(a, b) {
  return JSON.stringify(sortObject(a)) === JSON.stringify(sortObject(b));
}

function sortObject(value) {
  if (Array.isArray(value)) return value.map(sortObject);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.keys(value).sort().map((key) => [key, sortObject(value[key])]));
  }
  return value;
}

function toText(value) {
  return JSON.stringify(value);
}

function escapeHtml(value) {
  const div = document.createElement("div");
  div.textContent = String(value ?? "");
  return div.innerHTML;
}
