class Task
  def initialize(name, deps, action)
    @name = name
    @deps = deps
    @action = action
  end

  def invoke
    return if @already_run
    @deps.each do |dep| TASKS[dep].invoke end
    execute
    @already_run = true
  end

  def execute
    @action.call
  end
end

TASKS = {}

def task(name, deps=[], &block)
  TASKS[name] = Task.new(name, deps, block)
end

require './tasks'

ARGV.each do |arg| TASKS[arg].invoke end
