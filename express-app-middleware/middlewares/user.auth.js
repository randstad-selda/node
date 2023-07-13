// Middleware authentication
export function chechAuthentication(req, res, next) {
  const isLoggedIn = true;
  if (!isLoggedIn) return res.status(401).send("Non sei autenticato");
  // logica per recuperare i dati dal DB
  req.user = {
    name: "Samuele",
    ruole: "admin",
  };
  next();
}

// Middleware authorization
export function checkAuthorization(req, res, next) {
  if (req.user.ruole !== "admin")
    return res.status(403).send("Non sei autorizzato");
  next();
}
