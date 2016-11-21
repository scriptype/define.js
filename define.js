var _modules = {}
function define(name, deps, factory) {
  var depModules = []
  if (Array.isArray(deps) && typeof factory === 'function') {
    depModules = deps.map(d => _modules[d])
    _modules[name] = factory(...depModules)
    
  } else if (typeof deps === 'object') {
    _modules[name] = deps
    
  } else if (typeof deps === 'function') {
    _modules[name] = deps()
  }
}
