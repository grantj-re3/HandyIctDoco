#require './micro-rake'

task "make_mac_and_cheese", ["boil_water", "buy_cheese", "buy_pasta"] do
  puts "Make Mac & Cheese"
end

task "boil_water", ["buy_pasta", "buy_cheese"] do
  puts "Boil Water"
end

task "buy_pasta", ["goto_store"] do
  puts "Buy Pasta"
end

task "buy_cheese", ["goto_store"] do
  puts "Buy Cheese"
end

task "goto_store" do
  puts "Goto store"
end

