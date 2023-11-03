const ErrorContent = () => {
  return (
    <div className="error-content">
      <h1>Страница не найдена</h1>

      <p>
        Страница, на которую Вы хотели перейти, не найдена. Возможно введен
        некоректный адрес или страница была удалена.
      </p>

      <button>Вернуться на главную</button>
    </div>
  );
};

export default ErrorContent;
